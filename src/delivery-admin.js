import {
  applyPageLanguage,
  escapeHtml,
  formatDate,
  formatStatus,
  hashToken,
  isSupabaseConfigured,
  showMessage,
  showSetupNotice,
  supabase,
  text,
  createTrackingToken,
  trackingUrl,
} from "./delivery-shared.js";

applyPageLanguage();
showSetupNotice();

const loginForm = document.querySelector("#login-form");
const authPanel = document.querySelector("#auth-panel");
const authMessage = document.querySelector("#auth-message");
const workspace = document.querySelector("#owner-workspace");
const orderForm = document.querySelector("#create-order-form");
const orderMessage = document.querySelector("#order-message");
const ordersMessage = document.querySelector("#orders-message");
const ordersList = document.querySelector("#orders-list");
const orderNote = document.querySelector("#order-note");
let ownerSession;

async function sendSignInLink(event) {
  event.preventDefault();
  const email = document.querySelector("#login-email").value.trim();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false, emailRedirectTo: window.location.href },
  });
  if (error) {
    console.error("Could not send owner sign-in link", error);
    showMessage(authMessage, error.message);
    return;
  }
  showMessage(authMessage, text.loginSent, "success");
}

function makeReference() {
  return `MD-${crypto.randomUUID().replaceAll("-", "").slice(0, 10).toUpperCase()}`;
}

async function createOrder(event) {
  event.preventDefault();
  showMessage(orderMessage, "");
  const description = document.querySelector("#order-description").value.trim();
  if (description.length < 2) {
    showMessage(orderMessage, text.invalidDescription);
    return;
  }
  const token = createTrackingToken();
  const trackingTokenHash = await hashToken(token);
  const { error } = await supabase.from("delivery_orders").insert({
    reference: makeReference(),
    description,
    tracking_token_hash: trackingTokenHash,
  });
  if (error) {
    console.error("Could not create delivery order", error);
    showMessage(orderMessage, error.message);
    return;
  }

  const link = trackingUrl(token);
  const linkField = document.querySelector("#tracking-link");
  linkField.value = link;
  document.querySelector("#share-tracking-whatsapp").href =
    `https://wa.me/?text=${encodeURIComponent(`${text.trackingTitle}: ${link}`)}`;
  document.querySelector("#tracking-link-result").hidden = false;
  orderNote.hidden = false;
  orderForm.reset();
  await refreshOrders();
}

function renderOrders(orders) {
  if (orders.length === 0) {
    ordersList.innerHTML = `<p class="delivery-empty">${text.orderEmpty}</p>`;
    return;
  }

  ordersList.innerHTML = `
    <div class="delivery-table-wrap">
      <table class="delivery-table">
        <thead><tr>
          <th>${text.reference}</th>
          <th>${text.description}</th>
          <th>${text.orderStatus}</th>
          <th>${text.updatedAt ?? text.trackingUpdated}</th>
          <th></th>
        </tr></thead>
        <tbody>${orders.map((order) => `
          <tr>
            <td data-label="${text.reference}"><strong>${escapeHtml(order.reference)}</strong></td>
            <td data-label="${text.description}">${escapeHtml(order.description)}</td>
            <td data-label="${text.orderStatus}"><span class="delivery-status delivery-status--${escapeHtml(order.status)}">${escapeHtml(formatStatus(order.status))}</span></td>
            <td data-label="${text.trackingUpdated}">${escapeHtml(formatDate(order.updated_at))}</td>
            <td>${order.status !== "delivered" && order.status !== "cancelled"
              ? `<button class="delivery-button delivery-button--danger" type="button" data-cancel-order="${escapeHtml(order.id)}">${text.cancelOrder}</button>`
              : ""}</td>
          </tr>`).join("")}</tbody>
      </table>
    </div>`;
}

async function refreshOrders() {
  showMessage(ordersMessage, "");
  const { data, error } = await supabase
    .from("delivery_orders")
    .select("id, reference, description, status, updated_at")
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) {
    console.error("Could not load delivery orders", error);
    showMessage(ordersMessage, error.message);
    return;
  }
  renderOrders(data ?? []);
}

async function cancelOrder(orderId) {
  showMessage(ordersMessage, "");
  const { error } = await supabase
    .from("delivery_orders")
    .update({ status: "cancelled" })
    .eq("id", orderId);
  if (error) {
    console.error("Could not cancel delivery", error);
    showMessage(ordersMessage, error.message);
    return;
  }
  await refreshOrders();
}

async function showOwnerWorkspace(session) {
  ownerSession = session;
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
    console.error("Could not verify delivery role", error);
    showMessage(authMessage, error.message);
    authPanel.hidden = false;
    return;
  }
  if (staff?.role !== "owner") {
    authPanel.hidden = false;
    showMessage(authMessage, text.notOwner);
    return;
  }
  workspace.hidden = false;
  await refreshOrders();
}

if (isSupabaseConfigured) {
  loginForm.addEventListener("submit", (event) => void sendSignInLink(event));
  orderForm.addEventListener("submit", (event) => void createOrder(event));
  document.querySelector("#refresh-orders").addEventListener("click", () => void refreshOrders());
  document.querySelector("#sign-out").addEventListener("click", async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Could not sign out", error);
      showMessage(authMessage, error.message);
      return;
    }
    await showOwnerWorkspace(null);
  });
  document.querySelector("#copy-tracking-link").addEventListener("click", async () => {
    const link = document.querySelector("#tracking-link").value;
    try {
      await navigator.clipboard.writeText(link);
      showMessage(orderMessage, text.copySuccess, "success");
    } catch (error) {
      console.error("Could not copy delivery tracking link", error);
      showMessage(orderMessage, text.copyFailure);
      document.querySelector("#tracking-link").select();
    }
  });
  ordersList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cancel-order]");
    if (button) void cancelOrder(button.dataset.cancelOrder);
  });
  supabase.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => void showOwnerWorkspace(session), 0);
  });
  supabase.auth.getSession().then(({ data, error }) => {
    if (error) {
      console.error("Could not read delivery session", error);
      showMessage(authMessage, error.message);
      return;
    }
    void showOwnerWorkspace(data.session);
  });
}
