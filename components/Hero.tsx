// 📄 File: components/Hero.tsx — Parallax Rotating Hero Carousel
// 👤 Created by: User with AI
// 📝 Description: Full-screen hero section featuring an AnimatePresence carousel 
//     that cross-fades between high-quality local property interior images.
// 📅 Created at: 2026-03-07 07:13 (Tashkent Time)

'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const CAROUSEL_IMAGES = [
    '/img/thumb_897_600_0_0_0_auto.jpg',
    '/img/thumb_3960_600_0_0_0_auto.jpg',
    '/img/thumb_1116_600_0_0_0_auto.jpg',
    '/img/thumb_4656_600_0_0_0_auto.jpg'
];

export default function Hero() {
    const t = useTranslations('hero');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 5000); // Rotate every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const stats = [
        { value: t('statCapacityValue'), label: t('statCapacity') },
        { value: t('statPropertiesValue'), label: t('statProperties') },
        { value: t('statYearValue'), label: t('statYear') },
    ];

    return (
        <section id="home" className="relative h-screen min-h-[750px] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-2xl pt-[72px]">

            {/* 🖼️ Rotating Background Images */}
            <div className="absolute inset-0 w-full h-full z-0 bg-[#0A1128]">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.img
                        key={currentIndex}
                        src={CAROUSEL_IMAGES[currentIndex]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Heaven Feel Property Interior"
                    />
                </AnimatePresence>

                {/* Rich Navy/Terracotta Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent z-10" />

                {/* Milliy Ikat Pattern Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 2px, transparent 2px, transparent 12px)' }} />
            </div>

            {/* 📝 Content */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    {/* 🏆 Competition Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest bg-black/30 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md shadow-lg">
                            <span className="text-xl">🚀</span> {t('badge')}
                        </span>
                    </motion.div>

                    {/* 📢 Huge Elegant Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl"
                    >
                        {t('title')}
                    </motion.h1>

                    {/* 📝 Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl text-white/90 max-w-3xl font-light leading-relaxed mb-12 drop-shadow-md"
                    >
                        {t('subtitle')}
                    </motion.p>

                    {/* 📊 Premium Stat Counters */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl"
                    >
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className="glass-panel-dark flex flex-col items-center justify-center py-6 px-4 rounded-[32px] border border-white/10 group hover:border-[#D4AF37]/50 transition-colors"
                            >
                                <div className="font-display text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-1 drop-shadow-lg group-hover:scale-110 transition-transform">
                                    {s.value}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-[#FDFBF7]/60">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>

        </section>
    );
}
