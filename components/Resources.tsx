// 📄 File: components/Resources.tsx — Premium Property Gallery
// 👤 Created by: User with AI
// 📝 Description: Immersive gallery displaying the local images from @/img. Uses 
//     Framer Motion for beautiful entry and hover effects.
// 📅 Created at: 2026-03-07 06:45 (Tashkent Time)
// 📝 Change Log: [2026-03-07 06:45] — Redesigned into High-End Gallery.

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Users } from 'lucide-react';

// Using actual local images from the /img folder for the 3 properties
const LOCAL_IMAGES = [
    '/img/thumb_872_600_0_0_0_auto.jpg',  // Apt
    '/img/thumb_1470_600_0_0_0_auto.jpg', // Villa 1
    '/img/thumb_3993_600_0_0_0_auto.jpg', // Villa 2
];

export default function Resources() {
    const t = useTranslations('resources');
    const items = t.raw('items') as { type: string; name: string; location: string; capacity: string; desc: string }[];

    return (
        <section id="gallery" className="py-24 sm:py-32 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 📌 Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#D4AF37]/10 text-[#D4AF37] mb-6"
                    >
                        🏡 {t('badge')}
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

                {/* 🖼️ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            key={i}
                            className="group relative rounded-[32px] overflow-hidden aspect-[4/5] bg-[#0A1128] shadow-2xl isolate"
                        >
                            {/* Background Image */}
                            <img
                                src={LOCAL_IMAGES[i]}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:blur-[2px]"
                            />

                            {/* Gradient overlay - deepens on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                            {/* Top Type Badge */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="glass-panel text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md">
                                    {item.type}
                                </span>
                            </div>

                            {/* Content Box (Bottom) */}
                            <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end translate-y-8 transition-transform duration-500 group-hover:translate-y-0">

                                <h3 className="font-display font-bold text-3xl text-white mb-2 leading-tight">
                                    {item.name}
                                </h3>

                                <div className="flex flex-col gap-2 mb-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-8">
                                    <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm">
                                        <MapPin size={16} /> {item.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-[#FDFBF7]/70 font-bold text-sm">
                                        <Users size={16} /> {item.capacity}
                                    </div>
                                </div>

                                {/* Hidden description revealed on hover */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pt-6">
                                    <p className="text-[#FDFBF7]/80 text-sm leading-relaxed mb-4 border-t border-white/20 pt-4">
                                        {item.desc}
                                    </p>

                                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                                        <span className="text-[#D4AF37] flex gap-1 items-center"><MapPin size={14} /> {item.location}</span>
                                        <span className="text-white flex gap-1 items-center"><Users size={14} /> {item.capacity}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
