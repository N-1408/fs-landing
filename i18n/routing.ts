// 📄 File: i18n/routing.ts — Routing configuration for next-intl locales
// 👤 Created by: User with AI
// 📝 Description: Defines the locale routing configuration used by next-intl.
//     Sets Russian (ru) as the default locale and defines all supported languages.
//     This is consumed by both the middleware and navigation utilities.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)

import { defineRouting } from 'next-intl/routing';

// 🌐 Define locale routing — RU is default (no prefix in URL)
export const routing = defineRouting({
    locales: ['ru', 'uz', 'en', 'kk', 'ky', 'tr', 'az'],
    defaultLocale: 'ru',
    localePrefix: 'as-needed', // 🔀 Russian URL has no prefix, others do
});
