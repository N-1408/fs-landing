// 📄 File: components/Footer.tsx — Deep Grand Finale (2.0)
// 👤 Created by: User with AI
// 📝 Description: Explicitly states this is a "Startup Project submitted for 
//     Mirzo Ulug'bek vorislari". Uses deep navy and gold aesthetic.
// 📅 Created at: 2026-03-07 07:13 (Tashkent Time)

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="bg-[#0A1128] pt-24 pb-12 relative overflow-hidden text-[#FDFBF7]">

            <div className="absolute inset-0 pattern-milliy-ikat opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

                {/* Startup Competition Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center text-center max-w-2xl mb-16"
                >
                    <div className="w-16 h-16 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-[#0A1128] font-black text-3xl shadow-xl shadow-[#D4AF37]/20 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        H
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold mb-3">
                        {t('competition')}
                    </h2>
                    <p className="text-[#FDFBF7]/80 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">
                        {t('competitionSub')}
                    </p>
                    <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#FDFBF7] drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                        {t('brand')}
                    </h3>
                    <p className="text-[#D4AF37] font-bold tracking-widest text-sm mt-4">
                        {t('location')}
                    </p>
                </motion.div>

                {/* Action (Telegram) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <a
                        href="https://t.me/family_stay_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A1128] font-bold rounded-full overflow-hidden bento-shadow"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span>{t('telegram')}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>

                {/* Deep Copyright */}
                <div className="w-full border-t border-white/10 pt-8 flex flex-col items-center">
                    <p className="text-white/40 text-xs text-center">
                        {t('copyright')}
                    </p>
                </div>

            </div>
        </footer>
    );
}
