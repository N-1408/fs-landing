const fs = require('fs');

const langs = [
    { file: 'ru.json', data: { badge: "Обратная связь", title: "Оставьте свой отзыв", desc: "Помогите нам стать лучше! Напишите свои пожелания напрямую основателям.", name: "Ваше имя", email: "Email (опционально)", msg: "Ваше сообщение", btn: "Отправить" } },
    { file: 'uz.json', data: { badge: "Fikr-mulohaza", title: "Fikringizni qoldiring", desc: "Bizga yanada yaxshiroq bo'lishimizga yordam bering! O'z taklif yoki savollaringizni yozing.", name: "Ismingiz", email: "Email (majburiy emas)", msg: "Xabaringiz", btn: "Yuborish" } },
    { file: 'en.json', data: { badge: "Feedback", title: "Leave Your Feedback", desc: "Help us become better! Write your suggestions or questions directly.", name: "Your Name", email: "Email (optional)", msg: "Your Message", btn: "Send" } },
    { file: 'kk.json', data: { badge: "Кері байланыс", title: "Пікір қалдырыңыз", desc: "Бізге жақсаруға көмектесіңіз! Өз ұсыныстарыңызды немесе сұрақтарыңызды жазыңыз.", name: "Атыңыз", email: "Email (міндетті емес)", msg: "Хабарламаңыз", btn: "Жіберу" } },
    { file: 'ky.json', data: { badge: "Кайтарым байланыш", title: "Пикир калтырыңыз", desc: "Бизге жакшырууга жардам бериңиз! Сунуштарыңызды же суроолоруңузду жазыңыз.", name: "Атыңыз", email: "Email (милдеттүү эмес)", msg: "Катыңыз", btn: "Жөнөтүү" } },
    { file: 'tr.json', data: { badge: "Geri Bildirim", title: "Geri Bildirim Bırakın", desc: "Gelişmemize yardımcı olun! Önerilerinizi veya sorularınızı doğrudan yazın.", name: "Adınız", email: "E-posta (isteğe bağlı)", msg: "Mesajınız", btn: "Gönder" } },
    { file: 'az.json', data: { badge: "Rəy", title: "Rəyinizi bildirin", desc: "Daha da yaxşılaşmağımıza kömək edin! Təkliflərinizi və ya suallarınızı birbaşa yazın.", name: "Adınız", email: "E-poçt (istəyə bağlı)", msg: "Mesajınız", btn: "Göndər" } }
];

for (const lang of langs) {
    const path = `./messages/${lang.file}`;
    if (fs.existsSync(path)) {
        const json = JSON.parse(fs.readFileSync(path, 'utf8'));
        json.feedback = lang.data;
        fs.writeFileSync(path, JSON.stringify(json, null, 2));
    }
}
console.log("Injected feedback strings successfully.");
