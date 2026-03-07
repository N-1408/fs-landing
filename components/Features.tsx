// 📄 File: components/Features.tsx — Solution & Uniqueness grid (Strict Refactor)
// 👤 Created by: User with AI
// 📝 Description: 5-card responsive grid showing Heaven Feel's unique value propositions.
//     Navy blue icon backgrounds, equal-height cards, clean shadow-sm styling, and strict
//     container constraints. All Tailwind utility classes.
// 📅 Created at: 2026-03-07 05:42 (Tashkent Time)
// 📝 Change Log:
//   [2026-03-07 05:42 Tashkent] — Initial solution cards
//   [2026-03-07 06:06 Tashkent] — STRICT REFACTOR: Navy icon bg, equal-height cards,
//     3-column grid, proper spacing.

'use client';

import { useTranslations } from 'next-intl';

export default function Features() {
    const t = useTranslations('solution');
    const items = t.raw('items') as { icon: string; title: string; desc: string }[];

    return (
        <section id="solution" className="bg-slate-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 📌 Section header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                        ✅ {t('badge')}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        {t('title')}
                    </h2>
                    <div className="w-14 h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-4" />
                    <p className="text-base text-slate-500 max-w-xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* 📦 3-column grid (last two cards auto-center) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`h-full flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 group ${
                                // 🎯 Last two cards: center on large screens if they sit on a new row
                                i >= 3 ? 'lg:last:col-start-auto' : ''
                                }`}
                        >
                            {/* 🎯 Icon */}
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-blue-50 border border-blue-100 mb-5 group-hover:scale-105 transition-transform">
                                {item.icon}
                            </div>

                            <h3 className="font-bold text-lg text-slate-900 mb-2 leading-snug">
                                {item.title}
                            </h3>

                            <p className="text-sm text-slate-500 leading-relaxed flex-1">
                                {item.desc}
                            </p>

                            {/* ✅ Accent bar */}
                            <div className="mt-5 h-1 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
