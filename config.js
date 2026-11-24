/* ===== SOZLAMALAR =====
   yandexApiKey  — Yandex Xaritalar "JavaScript API" kaliti (yandex.ru/maps-api/console). Kalit faqat sardorbekmarketolog.github.io da ishlaydi.
   school        — Oxford School, Xiva, Sangar MFY, Elobod ko'chasi 2 (Yandex Xaritadagi belgi bo'yicha).
   encryptedDataUrl — ixtiyoriy: parol bilan shifrlangan ma'lumot fayli (data.enc.json).
   DIQQAT: o'quvchilar ro'yxatini (Excel/PDF) hech qachon GitHub'ga yuklamang. */
window.APP_CONFIG = {
  yandexApiKey: "6e7c0fd6-2484-4b1a-b80a-bf38db06b85a",
  school: { name: "Oxford School", lat: 41.393173, lon: 60.35182, set: true },
  encryptedDataUrl: "data.enc.json"
};
/* Avval saqlangan taxminiy maktab joyini (Xiva markazi) aniq joyga almashtirish */
try {
  var k = 'oxf-ink-v1', d = JSON.parse(localStorage.getItem(k) || 'null');
  if (d && d.school && !d.school.set) {
    d.school = { name: window.APP_CONFIG.school.name, lat: window.APP_CONFIG.school.lat, lon: window.APP_CONFIG.school.lon, set: true };
    localStorage.setItem(k, JSON.stringify(d));
  }
} catch (e) {}
