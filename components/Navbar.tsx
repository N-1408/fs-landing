// 📄 File: components/Navbar.tsx — Solid Header
// 👤 Created by: User with AI
// 📝 Description: Fixed solid navy navbar with golden border to ensure text 
//     legibility and a premium corporate feel.
// 📅 Created at: 2026-03-07 07:13 (Tashkent Time)

'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname, Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const LANGS = [
    { code: 'uz', flag: 'UZ', label: 'O\'zbek' },
    { code: 'ru', flag: 'RU', label: 'Русский' },
    { code: 'en', flag: 'EN', label: 'English' },
    { code: 'kk', flag: 'KK', label: 'Қазақша' },
    { code: 'ky', flag: 'KY', label: 'Кыргызча' },
    { code: 'tr', flag: 'TR', label: 'Türkçe' },
    { code: 'az', flag: 'AZ', label: 'Azərbaycanca' },
] as const;

export default function Navbar() {
    const t = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const switchLocale = (code: string) => {
        router.replace(pathname, { locale: code });
        setLangOpen(false);
    };

    const current = LANGS.find((l) => l.code === locale) || LANGS[1]; // default ru

    const NAV_LINKS = [
        { href: '#problem', label: t('overview') },
        { href: '#compare', label: t('compare') },
        { href: '#mvp', label: t('app') },
        { href: '#gallery', label: t('gallery') },
        { href: '#roadmap', label: t('roadmap') },
        { href: '#team', label: t('team') },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1128] border-b-2 border-[#D4AF37] shadow-xl py-4 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                    {/* ✨ Logo */}
                    <a href="#" className="flex items-center gap-3 no-underline group outline-none">
                        <Image
                            src="/img/logo.png"
                            alt="Heaven Feel Logo"
                            width={40}
                            height={40}
                            className="rounded-xl shadow-lg group-hover:opacity-80 transition-opacity duration-300"
                        />
                        <div className="leading-tight">
                            <div className="font-display font-bold text-lg text-[#FDFBF7] tracking-wide">
                                Heaven Feel
                            </div>
                            <div className="text-[11px] font-bold text-[#D4AF37] tracking-widest uppercase">
                                {t('logoSub')}
                            </div>
                        </div>
                    </a>

                    {/* 🖥️ Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-bold text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors relative group outline-none"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* 🔧 Actions */}
                    <div className="flex items-center gap-4">
                        {/* 🌍 Lang Switcher (Desktop) */}
                        <div className="relative group hidden lg:block">
                            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <span className="font-bold text-[10px] tracking-widest bg-white/10 px-1.5 py-0.5 rounded text-[#D4AF37]">{current.flag}</span>
                                <span className="uppercase text-xs font-bold tracking-wider">{current.code}</span>
                                <ChevronDown size={14} className="opacity-50" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-2xl border border-[#0A1128]/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all text-[#0A1128] z-50">
                                {LANGS.map((lang) => (
                                    <Link
                                        key={lang.code}
                                        href={pathname}
                                        locale={lang.code}
                                        className={`flex items-center gap-3 w-full px-4 py-2 text-sm font-medium hover:bg-[#FDFBF7] transition-colors ${locale === lang.code ? 'text-[#D4AF37] bg-[#D4AF37]/5' : ''
                                            }`}
                                    >
                                        <span className="font-bold text-[10px] tracking-widest bg-[#0A1128]/5 px-1.5 py-0.5 rounded text-[#0A1128]/50">{lang.flag}</span>
                                        {lang.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* 🌍 Lang Switcher (Mobile - original implementation, still using state) */}
                        <div className="relative lg:hidden">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all outline-none cursor-pointer"
                            >
                                <span className="text-xl leading-none shadow-sm rounded-sm overflow-hidden">{current.flag}</span>
                                <span className="text-xs font-bold text-white hidden sm:block uppercase tracking-wider">{current.code}</span>
                            </button>

                            <AnimatePresence>
                                {langOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-3 w-40 glass-panel-dark rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-2"
                                    >
                                        {LANGS.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => switchLocale(lang.code)}
                                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${locale === lang.code
                                                    ? 'bg-[#D4AF37] text-[#0A1128]'
                                                    : 'text-white hover:bg-white/10'
                                                    }`}
                                            >
                                                <span className="text-xl shadow-sm rounded-sm">{lang.flag}</span>
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* 📱 Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-[#D4AF37] transition-colors outline-none cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* 📱 Mobile Menu Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-[72px] z-40 bg-[#0A1128] lg:hidden overflow-y-auto border-t border-white/10"
                    >
                        <div className="px-4 py-8 flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-2xl font-display font-bold text-white hover:text-[#D4AF37] border-b border-white/10 pb-4"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <div className="mt-8">
                                <a href="https://t.me/family_stay_bot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-[#D4AF37] text-[#0A1128] font-bold rounded-2xl">
                                    @family_stay_bot
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
