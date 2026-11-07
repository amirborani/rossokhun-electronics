import {
  applyPageLanguage,
  escapeHtml,
  formatDate,
  formatStatus,
  isSupabaseConfigured,
  showMessage,
  showSetupNotice,
  supabase,
  text,
} from "./delivery-shared.js";

applyPageLanguage();
showSetupNotice();

const loginForm = document.querySelector("#login-form");
const authPanel = document.querySelector("#auth-panel");
const authMessage = document.querySelector("#auth-message");
const workspace = document.querySelector("#courier-workspace");
const ordersList = document.querySelector("#orders-list");
const liveMessage = document.querySelector(".delivery-message--privacy");
const watches = new Map();
let courierSession;
let uploadInProgress = false;
let lastUploadAt = 0;

async function sendPosition(orderId, position) {
  if (uploadInProgress) return false;
  uploadInProgress = true;
  const { latitude, longitude, accuracy } = position.coords;
  try {
    const { error } = await supabase.from("delivery_locations").upsert({
      order_id: orderId,
      courier_id: courierSession.user.id,
      latitude,
      longitude,
      accuracy,
    }, { onConflict: "order_id" });
    if (error) {
      throw error;
    }
    lastUploadAt = Date.now();
    showMessage(liveMessage, text.gpsReady, "success");
    return true;
  } catch (error) {
    console.error("Could not share courier location", error);
    showMessage(liveMessage, error.message);
    return false;
  } finally {
    uploadInProgress = false;
  }
}

function stopWatch(orderId) {
  const watchId = watches.get(orderId);
  if (watchId === undefined) return;
  navigator.geolocation.clearWatch(watchId);
  watches.delete(orderId);
}

function readCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      maximumAge: 2000,
      timeout: 15000,
    });
  });
}

async function startSharing(orderId) {
  if (!navigator.geolocation) {
    showMessage(liveMessage, text.gpsUnsupported);
    return;
  }
  showMessage(liveMessage, text.gpsConsent);
  try {
    const position = await readCurrentPosition();
    const { error: startError } = await supabase.rpc("start_delivery", { p_order_id: orderId });
    if (startError) throw startError;
    if (!await sendPosition(orderId, position)) {
      const { error: pauseError } = await supabase.rpc("pause_delivery", { p_order_id: orderId });
      if (pauseError) {
        console.error("Could not pause delivery after a GPS upload error", pauseError);
        showMessage(liveMessage, `${text.gpsError} ${pauseError.message}`);
      }
      await refreshOrders();
      return;
    }
    const watchId = navigator.geolocation.watchPosition(
      (nextPosition) => {
        if (Date.now() - lastUploadAt < 5000) return;
        void sendPosition(orderId, nextPosition);
      },
      async (error) => {
        console.error("Could not read courier GPS", error);
        stopWatch(orderId);
        const { error: pauseError } = await supabase.rpc("pause_delivery", { p_order_id: orderId });
        if (pauseError) {
          console.error("Could not stop sharing after a GPS error", pauseError);
          showMessage(liveMessage, `${text.gpsError} ${error.message}. ${pauseError.message}`);
        } else {
          showMessage(liveMessage, `${text.gpsError} ${error.message}`);
        }
        await refreshOrders();
      },
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 15000 },
    );
    watches.set(orderId, watchId);
    showMessage(liveMessage, text.gpsReady, "success");
    await refreshOrders();
  } catch (error) {
    console.error("Could not start delivery GPS sharing", error);
    showMessage(liveMessage, `${text.gpsError} ${error.message ?? ""}`.trim());
  }
}

async function pauseSharing(orderId) {
  stopWatch(orderId);
  const { error } = await supabase.rpc("pause_delivery", { p_order_id: orderId });
  if (error) {
    console.error("Could not pause delivery GPS sharing", error);
    showMessage(liveMessage, error.message);
    return;
  }
  showMessage(liveMessage, text.gpsPaused, "success");
  await refreshOrders();
}

async function completeDelivery(orderId) {
  stopWatch(orderId);
  const { error } = await supabase.rpc("complete_delivery", { p_order_id: orderId });
  if (error) {
    console.error("Could not complete delivery", error);
    showMessage(liveMessage, error.message);
    return;
  }
  showMessage(liveMessage, text.statuses.delivered, "success");
  await refreshOrders();
}

async function claimDelivery(orderId) {
  const { error } = await supabase.rpc("claim_delivery_order", { p_order_id: orderId });
  if (error) {
    console.error("Could not claim delivery", error);
    showMessage(liveMessage, error.message);
    return;
  }
  showMessage(liveMessage, text.gpsConsent, "success");
  await refreshOrders();
}

function renderOrders(orders) {
  if (orders.length === 0) {
    ordersList.innerHTML = `<p class="delivery-empty">${text.orderEmpty}</p>`;
    return;
  }
  ordersList.innerHTML = `<div class="courier-job-list">${orders.map((order) => {
    let action = "";
    if (!order.courier_id && order.status === "ready") {
      action = `<button class="delivery-button" type="button" data-claim="${escapeHtml(order.id)}">${text.claimOrder}</button>`;
    } else if (order.courier_id === courierSession.user.id && order.status === "assigned") {
      action = `<button class="delivery-button" type="button" data-start="${escapeHtml(order.id)}">${text.startGps}</button>`;
    } else if (order.courier_id === courierSession.user.id && order.status === "out_for_delivery") {
      action = `<button class="delivery-button delivery-button--quiet" type="button" data-pause="${escapeHtml(order.id)}">${text.pauseGps}</button>
        <button class="delivery-button" type="button" data-complete="${escapeHtml(order.id)}">${text.finishOrder}</button>`;
    }
    return `<article class="courier-job">
      <div class="courier-job__details">
        <strong>${escapeHtml(order.reference)}</strong>
        <span>${escapeHtml(order.description)}</span>
        <span class="delivery-status delivery-status--${escapeHtml(order.status)}">${escapeHtml(formatStatus(order.status))}</span>
        <time datetime="${escapeHtml(order.created_at)}">${escapeHtml(formatDate(order.created_at))}</time>
      </div>
      <div class="courier-job__actions">${action}</div>
    </article>`;
  }).join("")}</div>`;
}

async function refreshOrders() {
  const { data, error } = await supabase
    .from("delivery_orders")
    .select("id, reference, description, status, courier_id, created_at")
    .in("status", ["ready", "assigned", "out_for_delivery"])
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Could not load courier deliveries", error);
    showMessage(authMessage, error.message);
    return;
  }
  renderOrders(data ?? []);
}

async function showCourierWorkspace(session) {
  courierSession = session;
  authPanel.hidden = !session;
  workspace.hidden = true;
  if (!session) return;

  document.querySelector("#signed-in-email").textContent = session.user.email ?? "";
  const { data: staff, error } = await supabase
    .from("delivery_staff")
    .select("role")
    .eq("user_id", session.user.id)
    .maybeSingle();
  if (error) {
    console.error("Could not verify courier role", error);
    showMessage(authMessage, error.message);
    authPanel.hidden = false;
    return;
  }
  if (staff?.role !== "courier") {
    authPanel.hidden = false;
    showMessage(authMessage, text.notCourier);
    return;
  }
  workspace.hidden = false;
  await refreshOrders();
}

if (isSupabaseConfigured) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.querySelector("#login-email").value.trim();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: false, emailRedirectTo: window.location.href },
    });
    if (error) {
      console.error("Could not send courier sign-in link", error);
      showMessage(authMessage, error.message);
      return;
    }
    showMessage(authMessage, text.loginSent, "success");
  });
  document.querySelector("#refresh-orders").addEventListener("click", () => void refreshOrders());
  document.querySelector("#sign-out").addEventListener("click", async () => {
    for (const orderId of watches.keys()) {
      stopWatch(orderId);
      const { error } = await supabase.rpc("pause_delivery", { p_order_id: orderId });
      if (error) {
        console.error("Could not stop GPS sharing before sign out", error);
        showMessage(authMessage, error.message);
        return;
      }
    }
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Could not sign out courier", error);
      showMessage(authMessage, error.message);
      return;
    }
    await showCourierWorkspace(null);
  });
  ordersList.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.claim) void claimDelivery(button.dataset.claim);
    if (button.dataset.start) void startSharing(button.dataset.start);
    if (button.dataset.pause) void pauseSharing(button.dataset.pause);
    if (button.dataset.complete) void completeDelivery(button.dataset.complete);
  });
  supabase.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => void showCourierWorkspace(session), 0);
  });
  supabase.auth.getSession().then(({ data, error }) => {
    if (error) {
      console.error("Could not read courier session", error);
      showMessage(authMessage, error.message);
      return;
    }
    void showCourierWorkspace(data.session);
  });
}
