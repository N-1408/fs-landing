// 📄 File: components/Feedback.tsx — Serverless Feedback Form
// 👤 Created by: User with AI
// 📝 Description: A database-free contact form powered by formsubmit.co.
//     Allows users to leave feedback directly to the founder's email.
// 📅 Created at: 2026-03-10

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Feedback() {
    const t = useTranslations('feedback');

    return (
        <section id="feedback" className="py-24 bg-white relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C84B31]/10 text-[#C84B31] mb-6 border border-[#C84B31]/20"
                >
                    ✉️ {t('badge')}
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-display text-4xl font-bold text-[#0A1128] mb-6"
                >
                    {t('title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#0A1128]/60 text-lg mb-12"
                >
                    {t('desc')}
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    action="https://formsubmit.co/shahzoda.tuychieva@gmail.com"
                    method="POST"
                    className="bg-white bento-shadow border border-[#0A1128]/5 rounded-3xl p-8 sm:p-10 text-left flex flex-col gap-6"
                >
                    {/* Security redirects & subjects for formsubmit */}
                    <input type="hidden" name="_subject" value="New Feedback from Heaven Feel Landing!" />
                    <input type="hidden" name="_template" value="box" />

                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="w-full">
                            <label className="block text-sm font-bold text-[#0A1128] mb-2">{t('name')}</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-[#FDFBF7] border border-[#0A1128]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-bold text-[#0A1128] mb-2">{t('email')}</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-[#FDFBF7] border border-[#0A1128]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#0A1128] mb-2">{t('msg')}</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            className="w-full bg-[#FDFBF7] border border-[#0A1128]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-none"
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#0A1128] text-white font-bold text-lg rounded-xl py-4 hover:bg-[#162145] shadow-xl hover:shadow-[#0A1128]/20 transition-all active:scale-[0.98]">
                        {t('btn')}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
