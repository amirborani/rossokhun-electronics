import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import {
  applyPageLanguage,
  formatDate,
  formatStatus,
  hashToken,
  isSupabaseConfigured,
  showMessage,
  showSetupNotice,
  supabase,
  text,
} from "./delivery-shared.js";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

applyPageLanguage();
showSetupNotice();

const form = document.querySelector("#tracking-form");
const tokenInput = document.querySelector("#tracking-token");
const message = document.querySelector("#tracking-message");
const result = document.querySelector("#tracking-result");
const waiting = document.querySelector("#tracking-waiting");
const mapElement = document.querySelector("#tracking-map");
let map;
let marker;
let refreshTimer;
let currentToken;
let requestInFlight = false;

function showTrackingForm() {
  form.hidden = false;
  result.hidden = true;
}

function showTrackingResult() {
  form.hidden = true;
  result.hidden = false;
}

function updateMap(latitude, longitude) {
  waiting.hidden = true;
  mapElement.hidden = false;
  const point = [latitude, longitude];

  if (!map) {
    map = L.map(mapElement, { scrollWheelZoom: false }).setView(point, 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
    }).addTo(map);
    marker = L.marker(point).addTo(map);
  } else {
    marker.setLatLng(point);
    map.panTo(point);
  }
  window.setTimeout(() => map.invalidateSize(), 0);
}

function hideMap() {
  mapElement.hidden = true;
  waiting.hidden = false;
  waiting.textContent = text.trackingWaiting;
}

async function refreshTracking() {
  if (!currentToken || requestInFlight || document.hidden) return;
  requestInFlight = true;
  try {
    const tokenHash = await hashToken(currentToken);
    const { data, error } = await supabase.rpc("get_public_delivery_tracking", {
      p_token_hash: tokenHash,
    });
    if (error) throw error;

    const delivery = data?.[0];
    if (!delivery) {
      window.clearInterval(refreshTimer);
      showTrackingForm();
      showMessage(message, text.trackingUnavailable);
      return;
    }

    showTrackingResult();
    showMessage(message, "");
    document.querySelector("#tracking-reference").textContent = delivery.reference;
    document.querySelector("#tracking-status").textContent = formatStatus(delivery.status);
    const lastUpdate = delivery.location_recorded_at ?? delivery.updated_at;
    document.querySelector("#tracking-updated").textContent = `${text.trackingUpdated}: ${formatDate(lastUpdate)}`;

    if (delivery.status === "out_for_delivery" && delivery.latitude !== null && delivery.longitude !== null) {
      updateMap(delivery.latitude, delivery.longitude);
    } else {
      hideMap();
      waiting.textContent = delivery.status === "delivered"
        ? formatStatus("delivered")
        : text.trackingWaiting;
    }
  } catch (error) {
    console.error("Could not refresh delivery tracking", error);
    showMessage(message, text.trackingError);
  } finally {
    requestInFlight = false;
  }
}

if (isSupabaseConfigured) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const token = tokenInput.value.trim().toLowerCase();
    if (!/^[a-f0-9]{64}$/.test(token)) {
      showMessage(message, text.trackingUnavailable);
      return;
    }
    currentToken = token;
    window.history.replaceState(null, "", `tracking.html?token=${encodeURIComponent(token)}`);
    showMessage(message, "");
    window.clearInterval(refreshTimer);
    void refreshTracking();
    refreshTimer = window.setInterval(() => void refreshTracking(), 5000);
  });

  const linkedToken = new URLSearchParams(window.location.search).get("token");
  if (linkedToken && /^[a-fA-F0-9]{64}$/.test(linkedToken)) {
    currentToken = linkedToken.toLowerCase();
    void refreshTracking();
    refreshTimer = window.setInterval(() => void refreshTracking(), 5000);
  } else if (linkedToken) {
    showMessage(message, text.trackingUnavailable);
  }
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) void refreshTracking();
});
