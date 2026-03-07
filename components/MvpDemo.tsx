// 📄 File: components/MvpDemo.tsx — Interactive App Prototype
// 👤 Created by: User with AI
// 📝 Description: A visually stunning mock of the startup's mobile app. Features
//     CSS-based scrolling and glowing "click" zones to demonstrate readiness.
// 📅 Created at: 2026-03-07 07:13 (Tashkent Time)

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Calendar, Users, MapPin, CheckCircle2 } from 'lucide-react';

export default function MvpDemo() {
    const t = useTranslations('mvp');
    const features = t.raw('features') as { title: string; desc: string }[];

    return (
        <section id="mvp" className="py-24 sm:py-32 bg-[#0A1128] relative overflow-hidden text-white border-y border-[#D4AF37]/20">

            {/* Milliy Pattern Overlay for Tech Vibe */}
            <div className="absolute inset-0 pattern-milliy-ikat opacity-10 mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* ✨ LEFT CONTENT */}
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white mb-6 border border-white/20"
                    >
                        📱 {t('badge')}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl font-bold mb-6 text-gradient-gold"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg leading-relaxed mb-12"
                    >
                        {t('subtitle')}
                    </motion.p>

                    <div className="space-y-8">
                        {features.map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#b8901b] text-[#0A1128] flex items-center justify-center shrink-0 shadow-lg">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1 text-white/90">{feat.title}</h4>
                                    <p className="text-white/50 text-sm">{feat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 📱 RIGHT: THE SMARTPHONE MOCKUP */}
                <div className="lg:w-1/2 flex justify-center perspective-[1000px]">
                    <motion.div
                        initial={{ opacity: 0, rotateY: -20, rotateX: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotateY: -10, rotateX: 5, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-[320px] h-[650px] bg-black rounded-[48px] border-[14px] border-[#1e293b] shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] overflow-hidden shadow-[#D4AF37]/20"
                    >
                        {/* Phone Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1e293b] rounded-b-[20px] z-50 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                            <div className="w-12 h-2 rounded-full bg-white/5" />
                        </div>

                        {/* App Interface */}
                        <div className="w-full h-full bg-[#f8fafc] text-[#0f172a] relative overflow-hidden flex flex-col pt-10 font-body">

                            {/* Top Bar */}
                            <div className="px-6 pb-4 flex items-center justify-between border-b bg-white border-slate-200">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-[#0A1128] text-[#D4AF37] flex items-center justify-center font-black text-[10px]">H</div>
                                    <span className="font-bold text-sm tracking-wide">{t('appScreen')}</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                                    <img src="/img/s.png" className="w-full h-full object-cover" alt="User" />
                                </div>
                            </div>

                            {/* Scrollable Area */}
                            <div className="flex-1 overflow-hidden relative">
                                <div className="animate-mock-scroll absolute inset-x-0 pb-12">

                                    {/* Greeting */}
                                    <div className="px-6 py-8">
                                        <h3 className="font-bold text-2xl leading-tight mb-6">
                                            {t('appGreeting')}
                                        </h3>

                                        {/* Search Bar Map */}
                                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
                                            <div className="flex items-center gap-3 text-slate-400 border-b border-slate-50 pb-3">
                                                <MapPin size={18} />
                                                <span className="text-sm font-medium">Tashkent, Uzbekistan</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-800 font-bold">
                                                <Calendar size={18} className="text-[#D4AF37]" />
                                                <span className="text-sm">{t('appDates')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Results List */}
                                    <div className="px-6">
                                        <h4 className="font-bold text-lg mb-4">{t('appResultTitle')}</h4>

                                        {/* Villa Card */}
                                        <div className="bg-white rounded-3xl p-3 shadow-sm border border-slate-100 relative group overflow-hidden">
                                            <div className="h-40 w-full rounded-2xl bg-black overflow-hidden mb-4 relative">
                                                <img src="/img/thumb_1470_600_0_0_0_auto.jpg" className="w-full h-full object-cover opacity-80" alt="Villa" />
                                                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase flex items-center gap-1">
                                                    <Users size={12} /> 12
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <h5 className="font-bold text-[17px] mb-1">{t('appVilla')}</h5>
                                                <p className="text-slate-400 text-xs mb-4">Mintaqa: Tashkent Region</p>

                                                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                                                    <div className="font-bold text-[#C84B31]">{t('appPrice')}</div>
                                                    <div className="bg-[#0A1128] text-white text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-wider relative overflow-hidden">
                                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                                                        {t('appBtn')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Bottom Nav Bar */}
                            <div className="h-16 bg-white border-t border-slate-100 flex items-center justify-around px-6 relative z-10 shrink-0">
                                <Search size={24} className="text-[#D4AF37]" />
                                <Calendar size={24} className="text-slate-300" />
                                <Users size={24} className="text-slate-300" />
                            </div>

                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
