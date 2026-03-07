// 📄 File: i18n.ts — Internationalization configuration for next-intl
// 👤 Created by: User with AI
// 📝 Description: Configures the supported locales and default locale for the
//     Heaven Feel - Family Stay landing page. Uses next-intl's routing config
//     to define Russian as the default language with Uzbek and English support.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)

import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // 🌍 Get the requested locale from the request
  let locale = await requestLocale;

  // 🔄 Fallback to default locale if not in supported list
  if (!locale || !routing.locales.includes(locale as 'ru' | 'uz' | 'en')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // 📦 Load the translation messages for the current locale
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
