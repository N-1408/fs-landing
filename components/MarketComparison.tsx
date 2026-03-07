// 📄 File: components/MarketComparison.tsx — Deep Data Grid
// 👤 Created by: User with AI
// 📝 Description: High-end comparison matrix showing Heaven Feel vs Traditional 
//     Hotels vs Standard Rent. Data extracted from the official PDF pitch deck.
// 📅 Created at: 2026-03-07 07:13 (Tashkent Time)

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function MarketComparison() {
    const t = useTranslations('compare');
    const features = t.raw('features') as string[];

    const brand = t.raw('brand') as { name: string; values: string[] };
    const hotel = t.raw('hotel') as { name: string; values: string[] };
    const rent = t.raw('rent') as { name: string; values: string[] };

    const columns = [brand, hotel, rent];

    return (
        <section id="compare" className="py-24 sm:py-32 bg-[#FDFBF7] relative overflow-hidden">

            {/* Abstract Background Flairs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C84B31]/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 📌 Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C84B31]/10 text-[#C84B31] mb-6 border border-[#C84B31]/20"
                    >
                        📊 {t('badge')}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl font-bold text-[#0A1128] mb-6"
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

                {/* 📊 Responsive Comparison Grid */}
                <div className="w-full relative z-10 pt-4 pb-12 px-2 lg:px-0">
                    <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-4 items-center lg:items-end">

                        {/* Legend Column (Desktop Only) */}
                        <div className="hidden lg:flex flex-col gap-6 w-full pr-4 pb-[32px]">
                            {features.map((feat, i) => (
                                <div key={i} className="h-16 flex items-center text-sm font-bold text-[#0A1128]/60 uppercase tracking-wider border-b border-[#0A1128]/10 last:border-0">
                                    {feat}
                                </div>
                            ))}
                        </div>

                        {/* Competitor Columns */}
                        {columns.map((col, colIndex) => {
                            const isBrand = colIndex === 0;
                            return (
                                <motion.div
                                    key={colIndex}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: colIndex * 0.15, duration: 0.8 }}
                                    className={`w-full flex flex-col rounded-[32px] p-6 lg:p-8 relative ${isBrand
                                        ? 'bg-[#0A1128] text-white shadow-2xl lg:scale-105 z-20 border-t-8 border-[#D4AF37]'
                                        : 'bg-white text-[#0A1128] bento-shadow border border-[#0A1128]/5 z-10'
                                        }`}
                                >

                                    {isBrand && (
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0A1128] text-[11px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                                            Top Choice
                                        </div>
                                    )}

                                    <div className="flex flex-col items-center justify-center text-center border-b border-current/10 mb-6 pb-6 pt-2">
                                        {isBrand && <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] text-[#0A1128] font-black text-2xl flex items-center justify-center mb-4 shadow-inner">H</div>}
                                        <h3 className={`font-display text-2xl lg:text-3xl font-bold ${isBrand ? 'text-white' : 'text-[#0A1128]'}`}>
                                            {col.name}
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        {col.values.map((val, valIndex) => {
                                            let Icon = AlertCircle;
                                            let iconColor = isBrand ? "text-[#D4AF37]" : "text-[#0A1128]/40";

                                            if (isBrand) {
                                                Icon = CheckCircle2;
                                            } else if (valIndex === 1 || valIndex === 2 || val.includes("4x") || val.includes("4х")) {
                                                Icon = XCircle;
                                                iconColor = "text-[#C84B31]/80";
                                            }

                                            return (
                                                <div key={valIndex} className={`flex flex-col lg:h-16 items-center justify-center text-center border-b border-current/10 last:border-0 pb-4 lg:pb-0 ${isBrand ? 'text-[#FDFBF7]' : 'text-[#0A1128]/70'}`}>
                                                    {/* Mobile Feature Label */}
                                                    <span className={`lg:hidden text-[11px] font-bold uppercase tracking-wider mb-2 ${isBrand ? 'text-[#D4AF37]' : 'text-[#0A1128]/50'}`}>
                                                        {features[valIndex]}
                                                    </span>

                                                    <div className="flex flex-col items-center gap-1.5">
                                                        <Icon size={22} className={`${iconColor}`} />
                                                        <span className="text-[15px] font-semibold leading-tight">{val}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
}
