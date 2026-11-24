# Oxford School — Inklyuziv sinf xaritasi

Xorazm bo'yicha inklyuziv ta'lim o'quvchilarini Yandex xaritada ko'rsatadigan ichki sayt. Sayt quyidagilarni qiladi:

- har bir o'quvchini xaritada belgilaydi va maktabgacha masofasini hisoblaydi;
- qo'ng'iroq holatini yuritadi (Yangi → Qiziqdi → Ro'yxatga olindi);
- avtobus marshrutlarini tuzadi.

**Muhim:** bu saytda o'quvchilar ma'lumoti saqlanmaydi. Ro'yxat (Excel) faqat uni yuklagan brauzerda turadi. Shuning uchun saytni GitHub'ga joylash xavfsiz.

> ⛔ Excel yoki PDF ro'yxatni **hech qachon GitHub'ga yuklamang**. Public repodagi hamma narsani istalgan odam ko'ra oladi.

---

## 1. Yandex API kaliti (5 daqiqa, bepul)

1. https://developer.tech.yandex.ru/services/ saytiga Yandex akkaunti bilan kiring.
2. «Подключить API» → **«JavaScript API и HTTP Геокодер»** ni tanlang va formani to'ldiring.
3. Kalit beriladi. Ko'rinishi: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
4. Kalit sozlamasidagi «Ограничение по HTTP Referer» maydoniga `ISMINGIZ.github.io` ni yozing. Shunda kalitni boshqa saytlar ishlata olmaydi.

Kalitni ikki usulda kiritish mumkin:

- **Har bir kompyuterda alohida:** sayt birinchi ochilganda kalitni so'raydi.
- **Bir marta, hamma uchun:** `index.html` faylining boshidagi `yandexApiKey: ""` qatoriga kalitni yozing. JS API kaliti ochiq turishi normal holat, uni Referer cheklovi himoya qiladi.

## 2. GitHub Pages'ga joylash

1. github.com → **New repository**. Nomi masalan `oxford-xarita`, turi **Public** (Pages bepul faqat public repo uchun) → Create.
2. «uploading an existing file» havolasini bosing va `index.html`, `oquvchilar_shablon.xlsx`, `README.md` fayllarini tashlang → **Commit changes**.
3. **Settings → Pages**. Source: «Deploy from a branch», Branch: `main`, papka `/ (root)` → **Save**.
4. 1–2 daqiqadan keyin sayt shu manzilda ochiladi: `https://ISMINGIZ.github.io/oxford-xarita/`

Saytni GitHub'siz ham ishlatsa bo'ladi: `index.html` ni ikki marta bosib, brauzerda oching. Bunda Yandex kalitida Referer cheklovi qo'yilmagan bo'lishi kerak.

## 3. Birinchi ishga tushirish

1. **Ro'yxat yuklash** tugmasini bosing va `Oxford_inklyuziv_456_MAXFIY.xlsx` ni tanlang. 456 o'quvchi A/B/C guruhlari bilan yuklanadi.
2. **Sozlamalar → Maktab joylashuvi → Xaritada belgilash** ni bosing, keyin xaritada maktab binosini bosing. Barcha masofalar shu nuqtadan hisoblanadi.
3. **Ro'yxat** bo'limida tumanni tanlang (Xivadan boshlang) va **Manzillarni aniqlash** ni bosing. Yandex manzillarni uy, ko'cha yoki mahalla aniqligida topadi.
4. Topilmaganlar uchun **Qo'lda belgilash navbati** ni bosing. Xaritada uyni bossangiz, sayt avtomatik keyingi bolaga o'tadi. Bir mahalladan bitta bolani belgilasangiz, shu mahalladagi boshqa bolalar ham o'sha joyga qo'yiladi.

Joyi faqat tuman markazi bo'yicha ma'lum bo'lgan o'quvchilar xaritada **uzuq chiziqli halqa** bilan ko'rinadi.

## 4. Kundalik ish (qo'ng'iroq)

- Filtrlar: guruh, holat, tuman, sinf, maktabdan masofa (masalan ≤ 15 km), «Bugun bog'lanish», «PTPK baholasin».
- O'quvchini bossangiz, karta ochiladi. Unda telefon (bosib qo'ng'iroq qilsa bo'ladi), holat, izoh, qayta bog'lanish sanasi va qo'ng'iroqlar tarixi bor.
- Tashxis yashirin turadi. Ko'rish uchun ustiga bosish kerak. Qo'ng'iroqda tashxisni birinchi bo'lib aytmang.
- ↑ / ↓ tugmalari bilan keyingi o'quvchiga o'tiladi. `/` tugmasi qidiruvni ochadi.

## 5. Avtobus marshruti

1. **Ro'yxat** bo'limida kerakli filtrni qo'ying, masalan «Qiziqdi» + «≤ 25 km».
2. **Avtobus** bo'limida yo'nalishlar diagrammasi bor. U qaysi tomonda nechta bola borligini ko'rsatadi.
3. Avtobus soni (0 = avtomatik), sig'imi va bekat radiusini kiriting → **Marshrutlarni tuzish**.
4. Har bir marshrut uchun:
   - **Yo'l bo'ylab** — Yandex orqali aniq yo'l masofasi va vaqtini hisoblaydi;
   - **Chop etish** — haydovchi uchun bekatlar ro'yxatini chiqaradi.

Algoritm o'quvchilarni maktab atrofida yo'nalish bo'yicha guruhlaydi (sweep usuli). Har bir avtobus yo'lini qisqartiradi (2-opt). Bekatlar tartibini bolalar yo'lda eng kam vaqt o'tkazadigan qilib tanlaydi.

## 6. Jamoa bilan ishlash

1. **Sozlamalar → Shifrlangan fayl yaratish** ni bosing va parol qo'ying (kamida 10 belgi). Fayl AES-256 bilan shifrlanadi. Unda holatlar, izohlar va koordinatalar bo'ladi.
2. Faylni hamkasbga bering, parolni alohida ayting.
3. Hamkasb **Shifrlangan faylni ochish** orqali ochadi.

**Excel** tugmasi joriy filtrni barcha ustunlar bilan yuklab beradi: holat, izoh, masofa, koordinata, avtobus va bekat raqami.

Begona kompyuterda ishlagandan keyin **Sozlamalar → Barcha ma'lumotni o'chirish** ni bosing.
