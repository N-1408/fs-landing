// 📄 File: components/Team.tsx — Creative Portrait Cards (2.0)
// 👤 Created by: User with AI
// 📝 Description: High-end team presentation displaying the actual original
//     images (s.png, o.png, d.png) with beautiful geometric frames.
// 📅 Created at: 2026-03-07 07:13 (Tashkent Time)

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const TEAM_PHOTOS = [
    '/img/s.png', // Shakhzoda
    '/img/o.png', // Odil
    '/img/d.png', // Dilyara
];

const PHOTO_BG_COLORS = [
    'bg-[#1F4E5B]/10', // Navy tint
    'bg-[#C84B31]/10', // Terracotta tint
    'bg-[#D4AF37]/10', // Gold tint
];

export default function Team() {
    const t = useTranslations('team');
    const members = t.raw('members') as { name: string; role: string }[];

    return (
        <section id="team" className="py-24 sm:py-32 bg-[#FDFBF7] border-y border-[#0A1128]/5 relative">

            {/* Subtle Ikat Base */}
            <div className="absolute inset-0 pattern-milliy-ikat opacity-[0.02]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 📌 Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#0A1128]/5 text-[#0A1128] mb-6 border border-[#0A1128]/10"
                    >
                        👥 {t('badge')}
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

                {/* 👤 Real Photo Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-0">
                    {members.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[40px] p-8 pb-12 bento-shadow border border-[#0A1128]/5 flex flex-col items-center text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A1128]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Photo Container */}
                            <div className="relative w-40 h-40 mb-8 mx-auto group-hover:scale-105 transition-transform duration-500">
                                {/* Decorative background blob */}
                                <div className={`absolute inset-0 rounded-full scale-110 blur-xl ${PHOTO_BG_COLORS[i] || PHOTO_BG_COLORS[0]}`} />

                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-[#0A1128]/5 bg-[#FDFBF7]">
                                    <img
                                        src={TEAM_PHOTOS[i] || TEAM_PHOTOS[0]}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="font-display font-bold text-2xl text-[#0A1128] mb-3 relative z-10 leading-none group-hover:text-[#C84B31] transition-colors">
                                {member.name}
                            </h3>

                            <p className="text-[#C84B31] font-bold text-xs tracking-[0.2em] uppercase relative z-10">
                                {member.role}
                            </p>

                            {/* Decorative line */}
                            <div className="w-8 h-1 bg-[#D4AF37] rounded-full mt-8 opacity-50 group-hover:w-16 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
