// 📄 File: components/SocialImpact.tsx — Impact & Certificate (2.0)
// 👤 Created by: User with AI
// 📝 Description: Split section. Top part shows 3 impact cards. Bottom part is a 
//     highly stylized "Registration Certificate" card listing all official legal docs.
// 📅 Created at: 2026-03-07 07:13 (Tashkent Time)

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Map, Briefcase, FileText } from 'lucide-react';

export default function SocialImpact() {
    const t = useTranslations('impact');
    const items = t.raw('items') as { title: string; desc: string }[];
    const docs = t.raw('docs') as string[];

    const ICONS = [HeartPulse, Map, Briefcase];

    return (
        <section id="impact" className="py-24 sm:py-32 bg-white relative overflow-hidden">

            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1F4E5B]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 📌 Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1F4E5B]/10 text-[#1F4E5B] mb-6"
                    >
                        🌱 {t('badge')}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl font-bold text-[#0A1128] mb-6 leading-tignt"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#0A1128]/60 text-lg max-w-2xl mx-auto"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* 🌍 3-Column Impact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {items.map((item, i) => {
                        const Icon = ICONS[i] || HeartPulse;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="bg-[#FDFBF7] rounded-[32px] p-8 border border-[#0A1128]/5 bento-shadow flex flex-col items-center text-center group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 pattern-milliy-ikat opacity-[0.03] pointer-events-none" />
                                <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#1F4E5B]/10 text-[#1F4E5B] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1F4E5B] group-hover:text-white transition-all duration-300">
                                    <Icon size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="relative z-10 font-display font-bold text-2xl text-[#0A1128] mb-4">
                                    {item.title}
                                </h3>
                                <p className="relative z-10 text-[#0A1128]/60 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 🛡️ Extended Official Registration Certificate Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto rounded-[40px] overflow-hidden p-[2px] bg-gradient-to-br from-[#D4AF37] via-[#D4AF37]/50 to-transparent shadow-2xl"
                >
                    {/* Inner card content */}
                    <div className="bg-[#0A1128] rounded-[38px] p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center lg:items-start gap-12">

                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-10 pattern-milliy-ikat" />

                        {/* Big Shield (Left) */}
                        <div className="relative z-10 lg:w-1/3 flex flex-col items-center text-center">
                            <div className="w-32 h-32 shrink-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8A6D1C] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 border-4 border-[#0A1128] ring-4 ring-[#D4AF37]/30 mb-8">
                                <ShieldCheck size={56} className="text-[#0A1128]" />
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#D4AF37]/20 text-[#D4AF37] mb-4 border border-[#D4AF37]/30">
                                {t('regBadge')}
                            </div>
                            <h3 className="font-display text-3xl font-bold text-white mb-4 leading-tight">
                                {t('regTitle')}
                            </h3>
                            <p className="text-white/60 text-sm font-light">
                                {t('regDesc')}
                            </p>
                        </div>

                        {/* Content List (Right) */}
                        <div className="relative z-10 lg:w-2/3 flex flex-col gap-6 w-full">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-l border-white/10 lg:pl-10">
                                {docs.map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                        <FileText size={20} className="text-[#D4AF37] shrink-0" />
                                        <span className="text-white/80 text-sm font-medium leading-tight group-hover:text-white transition-colors">{doc}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 border-l border-white/10 lg:pl-10">
                                <div className="bg-gradient-to-r from-[#D4AF37] to-[#b8901b] rounded-2xl p-[1px]">
                                    <div className="bg-[#0A1128] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <span className="font-bold text-[#FDFBF7]">{t('regName')}</span>
                                        <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold bg-[#D4AF37]/10 px-3 py-1.5 rounded-full">{t('regDate')}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
