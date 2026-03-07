// 📄 File: components/Roadmap.tsx — Animated Animated Path Timeline
// 👤 Created by: User with AI
// 📝 Description: Breathtaking vertical timeline where an SVG line draws itself
//     and nodes light up as the user scrolls.
// 📅 Created at: 2026-03-07 06:45 (Tashkent Time)

'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
    const t = useTranslations('roadmap');
    const phases = t.raw('phases') as { num: string; title: string; period: string; desc: string }[];

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="roadmap" className="py-24 sm:py-32 bg-[#0A1128] text-white overflow-hidden relative">

            {/* Background Subtle Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#FDFBF7 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 📌 Header */}
                <div className="text-center mb-20 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 mb-6"
                    >
                        🗺️ {t('badge')}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient-gold"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto font-light"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* 🗺️ Animated Timeline */}
                <div ref={containerRef} className="relative">

                    {/* Animated SVG Line */}
                    <div className="absolute left-[39px] sm:left-1/2 sm:-translate-x-1/2 top-4 bottom-12 w-1 bg-white/10 rounded-full" />
                    <motion.div
                        style={{ height: pathHeight }}
                        className="absolute left-[39px] sm:left-1/2 sm:-translate-x-1/2 top-4 w-1 bg-gradient-to-b from-[#D4AF37] to-[#C84B31] rounded-full origin-top"
                    />

                    {/* Timeline Nodes */}
                    <div className="flex flex-col gap-16 lg:gap-24 relative z-10">
                        {phases.map((phase, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-8 ${isEven ? 'sm:flex-row-reverse' : ''}`}
                                >

                                    {/* Empty space for alternating layout on desktop */}
                                    <div className="hidden sm:block sm:w-1/2" />

                                    {/* Center Node / Number */}
                                    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-20 h-20 bg-[#0A1128] rounded-full flex items-center justify-center p-2 shadow-2xl border-4 border-[#0A1128]">
                                        <div className="w-full h-full rounded-full border border-dashed border-[#D4AF37]/50 flex items-center justify-center font-display font-bold text-2xl text-[#D4AF37]">
                                            {phase.num}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className={`sm:w-1/2 pl-24 sm:pl-0 ${isEven ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'}`}>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4 border border-white/10 backdrop-blur-sm">
                                            <CheckCircle2 size={14} /> {phase.period}
                                        </div>
                                        <h3 className="font-display font-bold text-3xl mb-4 text-white leading-tight">
                                            {phase.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed text-lg font-light">
                                            {phase.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
