const fs = require('fs');

const formTranslations = {
    'ru.json': {
        title: "Оставить отзыв",
        namePlaceholder: "Ваше имя или фамилия",
        textPlaceholder: "Расскажите о вашем пребывании в Heaven Feel...",
        publishing: "Публикация...",
        published: "Отзыв опубликован!",
        publishBtn: "Опубликовать отзыв",
        error: "Ошибка: база данных не подключена!"
    },
    'uz.json': {
        title: "Izoh qoldirish",
        namePlaceholder: "Ismingiz yoki familiyangiz",
        textPlaceholder: "Heaven Feel haqida taassurotlaringiz...",
        publishing: "Chop etilmoqda...",
        published: "Izoh chop etildi!",
        publishBtn: "Izohni yuklash",
        error: "Xatolik: Ma'lumotlar bazasi ulanmagan!"
    },
    'en.json': {
        title: "Leave a Review",
        namePlaceholder: "Your Name or Family Name",
        textPlaceholder: "Tell us about your stay at Heaven Feel...",
        publishing: "Publishing...",
        published: "Review Published!",
        publishBtn: "Publish Review",
        error: "Error: Database not connected!"
    },
    'kk.json': {
        title: "Пікір қалдыру",
        namePlaceholder: "Атыңыз немесе тегіңіз",
        textPlaceholder: "Heaven Feel туралы пікіріңіз...",
        publishing: "Жариялануда...",
        published: "Пікір жарияланды!",
        publishBtn: "Пікірді жариялау",
        error: "Қате: Дерекқор қосылмаған!"
    },
    'ky.json': {
        title: "Пикир калтыруу",
        namePlaceholder: "Атыңыз же фамилияңыз",
        textPlaceholder: "Heaven Feel жөнүндө пикириңиз...",
        publishing: "Жарыяланууда...",
        published: "Пикир жарыяланды!",
        publishBtn: "Пикирди жарыялоо",
        error: "Ката: Маалыматтар базасы туташкан жок!"
    },
    'tr.json': {
        title: "Yorum Bırak",
        namePlaceholder: "Adınız veya Soyadınız",
        textPlaceholder: "Heaven Feel konaklamanız hakkında...",
        publishing: "Yayınlanıyor...",
        published: "Yorum Yayınlandı!",
        publishBtn: "Yorumu Yayınla",
        error: "Hata: Veritabanı bağlı değil!"
    },
    'az.json': {
        title: "Rəy Bildirin",
        namePlaceholder: "Adınız və ya Soyadınız",
        textPlaceholder: "Heaven Feel haqqında təəssüratlarınız...",
        publishing: "Nəşr olunur...",
        published: "Rəy Nəşr Olundu!",
        publishBtn: "Rəyi Nəşr Et",
        error: "Xəta: Verilənlər bazası qoşulmayıb!"
    }
};

for (const [file, keys] of Object.entries(formTranslations)) {
    const path = `./messages/${file}`;
    if (fs.existsSync(path)) {
        const json = JSON.parse(fs.readFileSync(path, 'utf8'));
        if (json.reviews) {
            json.reviews.form = keys;
        }
        fs.writeFileSync(path, JSON.stringify(json, null, 2));
    }
}
console.log("Injected reviews.form translation keys successfully.");
