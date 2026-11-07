import { isSupabaseConfigured, supabase } from "./supabase.js";

export const language = localStorage.getItem("moddee-language") === "en" ? "en" : "th";

export const copy = {
  th: {
    home: "กลับหน้าร้าน",
    switchLanguage: "EN",
    languageLabel: "เปลี่ยนภาษาเป็นภาษาอังกฤษ",
    trackingTitle: "ติดตามการจัดส่ง",
    trackingIntro: "เปิดลิงก์ติดตามที่ร้านส่งให้ เพื่อดูสถานะและตำแหน่งของผู้จัดส่ง",
    trackingTokenLabel: "รหัสติดตามจากลิงก์",
    trackingTokenPlaceholder: "วางรหัสติดตาม 64 ตัวอักษร",
    trackButton: "ดูสถานะ",
    mapLabel: "ตำแหน่งผู้จัดส่ง",
    trackingWaiting: "รอผู้จัดส่งเริ่มแชร์ตำแหน่ง",
    trackingUnavailable: "ลิงก์ติดตามไม่ถูกต้องหรือถูกยกเลิก",
    trackingError: "โหลดข้อมูลไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองอีกครั้ง",
    trackingUpdated: "อัปเดตล่าสุด",
    trackingPrivacy: "ตำแหน่งจะแสดงเฉพาะระหว่างจัดส่ง และจะหยุดเมื่อส่งสำเร็จ",
    reference: "หมายเลขอ้างอิง",
    description: "รายการสินค้า",
    email: "อีเมลร้าน",
    sendLink: "ส่งลิงก์เข้าสู่อีเมล",
    signOut: "ออกจากระบบ",
    ownerTitle: "จัดการการจัดส่ง",
    ownerIntro: "เพิ่มรายการจากคำสั่งซื้อทาง WhatsApp และส่งลิงก์ติดตามให้ลูกค้า",
    driverTitle: "งานจัดส่งของฉัน",
    driverIntro: "รับงาน แล้วกดเริ่มแชร์ GPS เมื่อพร้อมออกส่ง",
    emailLabel: "อีเมลบัญชีที่ร้านอนุมัติแล้ว",
    emailPlaceholder: "name@example.com",
    sendMagicLink: "ส่งลิงก์เข้าสู่ระบบ",
    loginSent: "ส่งลิงก์เข้าสู่ระบบแล้ว ตรวจสอบอีเมลและเปิดลิงก์บนอุปกรณ์นี้",
    sessionExpired: "การเข้าสู่ระบบหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
    notOwner: "บัญชีนี้ยังไม่ได้รับสิทธิ์จัดการร้าน ให้เจ้าของร้านอนุมัติบัญชีก่อน",
    notCourier: "บัญชีนี้ยังไม่ได้รับสิทธิ์ผู้จัดส่ง ให้เจ้าของร้านอนุมัติก่อน",
    setupRequired: "ต้องตั้งค่า Supabase ก่อนเปิดใช้ฟังก์ชันจัดส่ง",
    setupInstructions: "ทำตามขั้นตอนใน DELIVERY-SETUP.md: คัดลอก .env.example เป็น .env.local ใส่ URL กับ publishable key แล้วเปิดเซิร์ฟเวอร์ใหม่",
    descriptionLabel: "รายการสั่งซื้อ",
    descriptionPlaceholder: "ตัวอย่าง: เสื้อ 2 ชิ้น, เซรั่ม 1 ขวด",
    customerDataWarning: "ห้ามใส่ชื่อ เบอร์โทรศัพท์ หรือที่อยู่ของลูกค้าในช่องนี้",
    invalidDescription: "กรุณากรอกรายการสินค้าอย่างน้อย 2 ตัวอักษร",
    createOrder: "สร้างลิงก์ติดตาม",
    orderCreated: "สร้างรายการแล้ว เก็บลิงก์นี้ก่อนปิดหน้านี้ ระบบเก็บเฉพาะรหัสแบบแฮช ไม่สามารถแสดงลิงก์ซ้ำได้",
    copyLink: "คัดลอกลิงก์",
    openWhatsApp: "แชร์ผ่าน WhatsApp",
    orderList: "รายการจัดส่ง",
    orderStatus: "สถานะ",
    updatedAt: "อัปเดตล่าสุด",
    cancelOrder: "ยกเลิก",
    orderEmpty: "ยังไม่มีรายการจัดส่ง",
    claimOrder: "รับงานนี้",
    startGps: "เริ่มแชร์ GPS",
    pauseGps: "หยุดแชร์ชั่วคราว",
    finishOrder: "ยืนยันส่งสำเร็จ",
    gpsReady: "กำลังแชร์ตำแหน่งสำหรับงานนี้เท่านั้น",
    gpsPaused: "หยุดแชร์ GPS แล้ว",
    gpsConsent: "กด «เริ่มแชร์ GPS» เพื่ออนุญาตให้เบราว์เซอร์ใช้ตำแหน่งของคุณ",
    gpsUnsupported: "เบราว์เซอร์นี้ไม่รองรับ GPS หรือหน้าเว็บไม่ได้เปิดผ่าน HTTPS",
    gpsError: "อ่านตำแหน่งไม่ได้ กรุณาอนุญาต GPS แล้วลองอีกครั้ง",
    error: "เกิดข้อผิดพลาด",
    copySuccess: "คัดลอกลิงก์แล้ว",
    copyFailure: "คัดลอกไม่ได้ กรุณาเลือกและคัดลอกลิงก์ด้วยตนเอง",
    dateLocale: "th-TH",
    statuses: {
      ready: "รอผู้จัดส่งรับงาน",
      assigned: "มอบหมายแล้ว",
      out_for_delivery: "กำลังจัดส่ง",
      delivered: "ส่งสำเร็จ",
      cancelled: "ยกเลิก",
    },
  },
  en: {
    home: "Back to shop",
    switchLanguage: "ไทย",
    languageLabel: "Switch language to Thai",
    trackingTitle: "Track a delivery",
    trackingIntro: "Open the tracking link from the shop to see delivery status and the courier's location.",
    trackingTokenLabel: "Tracking code from the link",
    trackingTokenPlaceholder: "Paste the 64-character tracking code",
    trackButton: "Track delivery",
    mapLabel: "Courier location",
    trackingWaiting: "Waiting for the courier to share a location",
    trackingUnavailable: "This tracking link is invalid or has been cancelled.",
    trackingError: "Could not load tracking. Check your connection and try again.",
    trackingUpdated: "Last updated",
    trackingPrivacy: "Location is visible only during delivery and stops when the order is delivered.",
    reference: "Reference",
    description: "Order items",
    email: "Shop email",
    sendLink: "Email a sign-in link",
    signOut: "Sign out",
    ownerTitle: "Delivery management",
    ownerIntro: "Add orders received through WhatsApp and share a tracking link with each customer.",
    driverTitle: "My delivery jobs",
    driverIntro: "Claim a job, then start GPS sharing when you are ready to deliver.",
    emailLabel: "Email for a shop-approved account",
    emailPlaceholder: "name@example.com",
    sendMagicLink: "Email a sign-in link",
    loginSent: "Sign-in link sent. Check your email and open the link on this device.",
    sessionExpired: "Your session expired. Please sign in again.",
    notOwner: "This account cannot manage shop deliveries. Ask the owner to approve it first.",
    notCourier: "This account is not approved as a courier. Ask the owner for access.",
    setupRequired: "Supabase setup is required before delivery features can be used.",
    setupInstructions: "Follow DELIVERY-SETUP.md: copy .env.example to .env.local, add the project URL and publishable key, then restart the dev server.",
    descriptionLabel: "Order items",
    descriptionPlaceholder: "Example: 2 shirts, 1 serum",
    customerDataWarning: "Do not enter customer names, phone numbers, or addresses here.",
    invalidDescription: "Enter at least 2 characters for the order items.",
    createOrder: "Create tracking link",
    orderCreated: "Order created. Save this link before closing; only its hash is stored and it cannot be shown again.",
    copyLink: "Copy tracking link",
    openWhatsApp: "Share with WhatsApp",
    orderList: "Deliveries",
    orderStatus: "Status",
    updatedAt: "Last updated",
    cancelOrder: "Cancel",
    orderEmpty: "No deliveries yet.",
    claimOrder: "Claim delivery",
    startGps: "Start GPS sharing",
    pauseGps: "Pause GPS sharing",
    finishOrder: "Mark delivered",
    gpsReady: "Sharing location for this delivery only.",
    gpsPaused: "GPS sharing has stopped.",
    gpsConsent: "Select “Start GPS sharing” to allow this browser to access your location.",
    gpsUnsupported: "This browser does not support GPS, or this page is not using HTTPS.",
    gpsError: "Could not read your location. Allow GPS and try again.",
    error: "Something went wrong",
    copySuccess: "Tracking link copied.",
    copyFailure: "Copy failed. Select and copy the link manually.",
    dateLocale: "en-GB",
    statuses: {
      ready: "Waiting for courier",
      assigned: "Courier assigned",
      out_for_delivery: "Out for delivery",
      delivered: "Delivered",
      cancelled: "Cancelled",
    },
  },
};

export const text = copy[language];

export function applyPageLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = text[element.dataset.copy];
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll("[data-copy-placeholder]").forEach((element) => {
    const value = text[element.dataset.copyPlaceholder];
    if (typeof value === "string") element.placeholder = value;
  });
  const switchButton = document.querySelector("[data-language-switch]");
  if (switchButton) {
    switchButton.textContent = text.switchLanguage;
    switchButton.setAttribute("aria-label", text.languageLabel);
  }
  document.title = `${document.querySelector("h1")?.textContent ?? "Moddee Shop"} | Moddee Shop`;
  switchButton?.addEventListener("click", () => {
    localStorage.setItem("moddee-language", language === "th" ? "en" : "th");
    window.location.reload();
  });
}

export function showMessage(element, message, kind = "error") {
  element.textContent = message;
  element.dataset.kind = kind;
  element.hidden = !message;
}

export function showSetupNotice() {
  if (isSupabaseConfigured) return;
  const notice = document.querySelector("[data-setup-notice]");
  if (notice) {
    notice.hidden = false;
    notice.textContent = `${text.setupRequired} ${text.setupInstructions}`;
  }
  document.querySelectorAll("[data-requires-supabase]").forEach((element) => {
    element.hidden = true;
  });
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

export function formatDate(value) {
  return new Intl.DateTimeFormat(text.dateLocale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function formatStatus(status) {
  return text.statuses[status] ?? text.statuses.ready;
}

export function hashToken(token) {
  return crypto.subtle.digest("SHA-256", new TextEncoder().encode(token))
    .then((buffer) => Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, "0")).join(""));
}

export function createTrackingToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function trackingUrl(token) {
  const url = new URL("tracking.html", window.location.href);
  url.searchParams.set("token", token);
  return url.href;
}

export { isSupabaseConfigured, supabase };
