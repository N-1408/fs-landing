// 📄 File: components/Reviews.tsx — Static Client Reviews Section
// 👤 Created by: User with AI
// 📝 Description: Replaces the Feedback email form. Displays elegantly styled
//     client testimonials relevant to the target demographic (large families).
// 📅 Created at: 2026-03-10

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Reviews() {
    const t = useTranslations('reviews');

    // We explicitly map an array from the localization files
    const items = [
        { name: t('items.0.name'), text: t('items.0.text') },
        { name: t('items.1.name'), text: t('items.1.text') },
        { name: t('items.2.name'), text: t('items.2.text') },
    ];

    return (
        <section id="reviews" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C84B31]/10 text-[#C84B31] mb-6 border border-[#C84B31]/20"
                    >
                        ⭐ {t('badge')}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl lg:text-5xl font-bold text-[#0A1128] mb-6"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#0A1128]/60 text-lg"
                    >
                        {t('desc')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8 }}
                            className="bg-white bento-shadow border border-[#0A1128]/5 rounded-[32px] p-8 lg:p-10 flex flex-col justify-between relative"
                        >
                            <Quote size={48} className="text-[#D4AF37]/20 absolute top-8 right-8" />

                            <p className="text-[#0A1128]/80 text-lg lg:text-xl font-medium leading-relaxed mb-8 relative z-10 italic">
                                {item.text}
                            </p>

                            <div className="border-t border-[#0A1128]/10 pt-6">
                                <h4 className="font-bold text-[#0A1128] font-display">
                                    {item.name}
                                </h4>
                                <p className="text-[#D4AF37] text-sm font-bold mt-1 uppercase tracking-wider">
                                    Verified Guest
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
