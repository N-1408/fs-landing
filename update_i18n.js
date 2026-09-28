const fs = require('fs');
const path = require('path');

const updates = {
    az: {
        heroBadge: "Startap Layihəsi: 'IT Queens - Kelajakni yaratuvchi qizlar' Müsabiqəsi",
        heroTitle: "Universitet qonaqları və böyük ailələr üçün yeni yerləşdirmə standartı",
        heroSubtitle: "Universitet qonaqları, turist qrupları və 6-12 nəfərlik ailələr üçün uyğunlaşdırılmış rahat mənzillər və evlər.",
        problemSubtitle: "Universitet qonaqları, böyük ailələr və qruplar uyğun infrastrukturun olmaması səbəbindən çətinlik çəkirlər.",
        solutionItem0Title: "Qonaqlara və ailələrə diqqət",
        solutionItem0Desc: "Universitet qonaqları, turistlər və tədbirlər üçün rahat, təhlükəsiz və innovativ yaşayış yerləri.",
        mvpTitle: "İnnovativ rəqəmsal bron platforması",
        mvpSubtitle: "Tədbirlər, qonaqlar və ailələr üçün tam avtomatlaşdırılmış mobil MVP tətbiqi hazırlayırıq.",
        footerBrand: "«IT Queens - Kelajakni yaratuvchi qizlar»"
    },
    en: {
        heroBadge: "Startup Project: 'IT Queens - Kelajakni yaratuvchi qizlar' Competition",
        heroTitle: "New accommodation standard for university guests and large families",
        heroSubtitle: "Comfortable apartments and houses adapted for university guests, tourist groups, and families of 6-12 people.",
        problemSubtitle: "University guests, large families, and groups struggle due to the lack of affordable and suitable infrastructure.",
        solutionItem0Title: "Focus on guests and families",
        solutionItem0Desc: "Comfortable, safe, and innovative living spaces for university guests, tourists, and girls' events.",
        mvpTitle: "Innovative digital booking platform",
        mvpSubtitle: "We are developing a fully automated mobile MVP app for events, guests, and families to safely and easily book accommodations.",
        footerBrand: "«IT Queens - Kelajakni yaratuvchi qizlar»"
    },
    kk: {
        heroBadge: "Стартап жоба: «IT Queens - Kelajakni yaratuvchi qizlar» байқауы",
        heroTitle: "Университет қонақтары мен көп балалы отбасыларға арналған жаңа тұрғын үй стандарты",
        heroSubtitle: "Университет қонақтары, туристік топтар және 6-12 адамнан тұратын отбасыларға бейімделген жайлы пәтерлер мен үйлер.",
        problemSubtitle: "Университет қонақтары, көп балалы отбасылар мен топтар қолайлы инфрақұрылымның жоқтығынан қиналады.",
        solutionItem0Title: "Қонақтар мен отбасыларға назар аудару",
        solutionItem0Desc: "Университет қонақтары, туристер мен іс-шараларға арналған ыңғайлы, қауіпсіз және инновациялық тұрғын үй кеңістіктері.",
        mvpTitle: "Инновациялық сандық брондау платформасы",
        mvpSubtitle: "Біз іс-шаралар, қонақтар мен отбасыларға арналған толық автоматтандырылған мобильді MVP қосымшасын жасап жатырмыз.",
        footerBrand: "«IT Queens - Kelajakni yaratuvchi qizlar»"
    },
    ky: {
        heroBadge: "Стартап долбоору: «IT Queens - Kelajakni yaratuvchi qizlar» сынагы",
        heroTitle: "Университет коноктору жана чоң үй-бүлөлөр үчүн жаңы турак жай стандарты",
        heroSubtitle: "Университет конокторуна, туристтик топторго жана 6-12 адамдан турган үй-бүлөлөргө ылайыкташтырылган ыңгайлуу батирлер жана үйлөр.",
        problemSubtitle: "Университет коноктору, көп балалуу үй-бүлөлөр жана топтор ылайыктуу инфраструктуранын жоктугунан кыйналышат.",
        solutionItem0Title: "Конокторго жана үй-бүлөлөргө көңүл буруу",
        solutionItem0Desc: "Университет коноктору, туристтер жана иш-чаралар үчүн ыңгайлуу, коопсуз жана инновациялык турак жай мейкиндиктери.",
        mvpTitle: "Инновациялык санариптик брондоо платформасы",
        mvpSubtitle: "Биз иш-чаралар, коноктор жана үй-бүлөлөр үчүн толугу менен автоматташтырылган мобилдик MVP тиркемесин иштеп чыгып жатабыз.",
        footerBrand: "«IT Queens - Kelajakni yaratuvchi qizlar»"
    },
    ru: {
        heroBadge: "Стартап-проект: Конкурс «IT Queens - Kelajakni yaratuvchi qizlar»",
        heroTitle: "Новый стандарт размещения для гостей университета и больших семей",
        heroSubtitle: "Комфортабельные квартиры и дома, адаптированные для гостей вузов, туристических групп и семей от 6 до 12 человек.",
        problemSubtitle: "Гости университета, многодетные семьи и группы сталкиваются с проблемами из-за отсутствия доступной и подходящей инфраструктуры.",
        solutionItem0Title: "Внимание к гостям и семьям",
        solutionItem0Desc: "Комфортные, безопасные и инновационные жилые пространства для гостей университета, туристов и мероприятий.",
        mvpTitle: "Инновационная цифровая платформа бронирования",
        mvpSubtitle: "Мы разрабатываем удобное и полностью автоматизированное мобильное MVP-приложение для мероприятий, гостей и семей.",
        footerBrand: "«IT Queens - Kelajakni yaratuvchi qizlar»"
    },
    tr: {
        heroBadge: "Startup Projesi: 'IT Queens - Kelajakni yaratuvchi qizlar' Yarışması",
        heroTitle: "Üniversite misafirleri ve büyük aileler için yeni konaklama standardı",
        heroSubtitle: "Üniversite misafirleri, turist grupları ve 6-12 kişilik aileler için uyarlanmış konforlu daireler ve evler.",
        problemSubtitle: "Üniversite misafirleri, büyük aileler ve gruplar, uygun altyapı eksikliği nedeniyle zorluk çekmektedir.",
        solutionItem0Title: "Misafirlere ve ailelere odaklanma",
        solutionItem0Desc: "Üniversite misafirleri, turistler ve etkinlikler için konforlu, güvenli ve yenilikçi yaşam alanları.",
        mvpTitle: "Yenilikçi dijital rezervasyon platformu",
        mvpSubtitle: "Etkinlikler, misafirler ve aileler için tam otomatik bir mobil MVP rezervasyon uygulaması geliştiriyoruz.",
        footerBrand: "«IT Queens - Kelajakni yaratuvchi qizlar»"
    }
};

const msgDir = path.join(__dirname, 'messages');

for (const [lang, data] of Object.entries(updates)) {
    const filePath = path.join(msgDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // Apply updates
        if (json.hero) {
            json.hero.badge = data.heroBadge;
            json.hero.title = data.heroTitle;
            json.hero.subtitle = data.heroSubtitle;
        }
        if (json.problem) json.problem.subtitle = data.problemSubtitle;
        if (json.solution && json.solution.items && json.solution.items.length > 0) {
            json.solution.items[0].title = data.solutionItem0Title;
            json.solution.items[0].desc = data.solutionItem0Desc;
        }
        if (json.mvp) {
            json.mvp.title = data.mvpTitle;
            json.mvp.subtitle = data.mvpSubtitle;
        }
        if (json.footer) json.footer.brand = data.footerBrand;

        fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
        console.log(`Updated ${lang}.json`);
    }
}
