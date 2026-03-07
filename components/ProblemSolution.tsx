// 📄 File: components/ProblemSolution.tsx — Bento Box Narrative (Strict Refactor)
// 👤 Created by: User with AI
// 📝 Description: Storytelling layout. Left side sticky problem text, right side 
//     scrolling bento boxes for solutions. High-end modern styling.
// 📅 Created at: 2026-03-07 06:45 (Tashkent Time)
// 📝 Change Log: [2026-03-07 06:45] — Redesigned into a Bento Box narrative flow.

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ShieldCheck, House, Utensils, CalendarDays, Users } from 'lucide-react';

// Maps to the 5 solution items
const ICONS = [Users, House, Utensils, CalendarDays, ShieldCheck];

export default function ProblemSolution() {
    const tProb = useTranslations('problem');
    const tSol = useTranslations('solution');

    const probItems = tProb.raw('items') as { title: string; desc: string }[];
    const solItems = tSol.raw('items') as { title: string; desc: string }[];

    return (
        <section id="problem" className="relative py-24 sm:py-32 pattern-uzbek-subtle overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ─── NARRATIVE SPLIT LAYOUT ─── */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

                    {/* ❗ LEFT: Sticky Problem Statement */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C84B31]/10 text-[#C84B31] mb-6">
                                ❗ {tProb('badge')}
                            </div>
                            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient-navy mb-6 leading-[1.1]">
                                {tProb('title')}
                            </h2>
                            <p className="text-lg text-[#0A1128]/60 leading-relaxed mb-10">
                                {tProb('subtitle')}
                            </p>

                            {/* The 4 Problem Points as subtle list */}
                            <div className="flex flex-col gap-6">
                                {probItems.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start pb-6 border-b border-[#0A1128]/5 last:border-0 last:pb-0">
                                        <div className="w-8 h-8 rounded-full bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center font-bold text-sm shrink-0">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0A1128] mb-1">{item.title}</h4>
                                            <p className="text-sm text-[#0A1128]/60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ✅ RIGHT: The Bento Box Solution Grid */}
                    <div className="lg:w-2/3 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-10 text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1F4E5B]/10 text-[#1F4E5B] mb-6">
                                ✨ {tSol('badge')}
                            </div>
                            <h2 className="font-display text-4xl font-bold text-[#0A1128] mb-4">
                                {tSol('title')}
                            </h2>
                            <p className="text-[#0A1128]/60 text-lg">{tSol('subtitle')}</p>
                        </motion.div>

                        {/* BENTO GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="solution">
                            {solItems.map((item, i) => {
                                const Icon = ICONS[i] || Users;
                                const isLarge = i === 1 || i === 4; // Make some boxes span full width for Bento effect

                                return (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -8, scale: 1.01 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={`bg-white rounded-[32px] p-8 bento-shadow border border-[#0A1128]/5 relative overflow-hidden group ${isLarge ? 'md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-8' : 'flex flex-col'
                                            }`}
                                    >
                                        {/* Abstract background flair */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1F4E5B]/5 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-150" />

                                        {/* Icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-[#0A1128] text-[#D4AF37] flex items-center justify-center shrink-0 mb-6 md:mb-0 shadow-lg group-hover:bg-[#C84B31] transition-colors duration-500">
                                            <Icon size={32} strokeWidth={1.5} />
                                        </div>

                                        <div className={isLarge ? 'flex-1' : 'flex-1 flex flex-col'}>
                                            <h3 className="font-display font-bold text-2xl text-[#0A1128] mb-3 leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#0A1128]/60 leading-relaxed text-[15px]">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Accent line */}
                                        {!isLarge && (
                                            <div className="w-12 h-1 rounded-full bg-[#D4AF37] mt-8 group-hover:w-full transition-all duration-500" />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
