const fs = require('fs');

const langs = [
    { file: 'ru.json', text: 'Отзывы' },
    { file: 'uz.json', text: 'Fikrlar' },
    { file: 'en.json', text: 'Reviews' },
    { file: 'kk.json', text: 'Пікірлер' },
    { file: 'ky.json', text: 'Пикирлер' },
    { file: 'tr.json', text: 'Yorumlar' },
    { file: 'az.json', text: 'Rəylər' }
];

for (const lang of langs) {
    const path = `./messages/${lang.file}`;
    if (fs.existsSync(path)) {
        const json = JSON.parse(fs.readFileSync(path, 'utf8'));
        if (json.nav) {
            json.nav.reviews = lang.text;
        }
        fs.writeFileSync(path, JSON.stringify(json, null, 2));
    }
}
console.log("Injected nav.reviews translation keys successfully.");
