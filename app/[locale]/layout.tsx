// 📄 File: app/[locale]/layout.tsx — Root locale layout (Strict Refactor)
// 👤 Created by: User with AI
// 📝 Description: Server-side root layout with clean white bg, proper meta tags,
//     and NextIntlClientProvider for i18n. All dark mode overrides removed in favor
//     of Tailwind @theme config and explicit white body styling.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)
// 📝 Change Log:
//   [2026-03-07 05:52 Tashkent] — Added inline bg fix for Tailwind v4
//   [2026-03-07 06:06 Tashkent] — STRICT REFACTOR: Clean white bg, no hacks needed
//     since globals.css @theme now properly sets light defaults.

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Heaven Feel — Family Stay | Startup Pitch',
    description:
        'Heaven Feel — accommodation system for large families and tourist groups in Uzbekistan. 6–12 person capacity. Registered startup, Tashkent 2026.',
    keywords: ['family stay', 'Tashkent', 'Uzbekistan', 'startup', 'Heaven Feel'],
};

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);

    const messages = (await import(`@/messages/${locale}.json`)).default;

    return (
        <html lang={locale} suppressHydrationWarning className="bg-white">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="bg-white text-slate-900" style={{ margin: 0 }}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
