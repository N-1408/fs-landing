// 📄 File: components/Reviews.tsx — Static Client Reviews Section
// 👤 Created by: User with AI
// 📝 Description: Replaces the Feedback email form. Displays elegantly styled
//     client testimonials relevant to the target demographic (large families).
// 📅 Created at: 2026-03-10

'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Reviews() {
    const t = useTranslations('reviews');

    // We explicitly map an array from the localization files for the "seed" data
    const seedItems = [
        { name: t('items.0.name'), text: t('items.0.text'), date: '2025-10-15' },
        { name: t('items.1.name'), text: t('items.1.text'), date: '2025-11-20' },
        { name: t('items.2.name'), text: t('items.2.text'), date: '2026-01-05' },
    ];

    // Form states
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // Reviews State (starts with seed data, then merges Supabase)
    const [reviews, setReviews] = useState<{ name: string, text: string, date: string, isNew?: boolean }[]>(seedItems);

    // On mount, load live reviews from Supabase
    useEffect(() => {
        const fetchReviews = async () => {
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && data) {
                // Map DB schema to component state format
                const dbReviews = data.map(r => ({
                    name: r.name,
                    text: r.text,
                    date: r.created_at.split('T')[0],
                    isNew: true // Highlight DB loaded reviews for fresh visual pop
                }));
                setReviews([...dbReviews, ...seedItems]);
            }
        };

        fetchReviews();
    }, [t]); // Re-run if language changes to reset seed items, but prepend DB

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');
        if (!name.trim() || !text.trim()) return;

        setIsSubmitting(true);

        const newReviewDate = new Date().toISOString();

        // Insert into Supabase
        const { error } = await supabase
            .from('reviews')
            .insert([
                { name: name.trim(), text: text.trim(), created_at: newReviewDate }
            ]);

        if (error) {
            console.error("Error submitting review:", error);
            setErrorMsg(t('form.error'));
            setIsSubmitting(false);
            return;
        }

        const newReview = {
            name: name.trim(),
            text: text.trim(),
            date: newReviewDate.split('T')[0],
            isNew: true
        };

        setReviews([newReview, ...reviews]);

        setIsSubmitting(false);
        setIsSuccess(true);
        setName('');
        setText('');

        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <section id="reviews" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0A1128]/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

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

                {/* Submit a Review Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mb-20"
                >
                    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#0A1128]/10 relative z-10 overflow-hidden bento-shadow">
                        <h3 className="text-2xl font-bold text-[#0A1128] font-display mb-6">{t('form.title')}</h3>

                        {errorMsg && (
                            <div className="mb-4 p-4 rounded-xl bg-red-50 text-red-600 border border-red-100 font-medium text-sm flex items-start gap-3">
                                <span className="text-xl">⚠️</span> {errorMsg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder={t('form.namePlaceholder')}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isSubmitting || isSuccess}
                                className="w-full px-5 py-4 rounded-xl bg-white border border-[#0A1128]/10 text-[#0A1128] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all placeholder:text-[#0A1128]/30 font-medium"
                            />
                            <textarea
                                placeholder={t('form.textPlaceholder')}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                required
                                rows={3}
                                disabled={isSubmitting || isSuccess}
                                className="w-full px-5 py-4 rounded-xl bg-white border border-[#0A1128]/10 text-[#0A1128] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all placeholder:text-[#0A1128]/30 font-medium resize-none"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess || !name.trim() || !text.trim()}
                                className="mt-2 w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 overflow-hidden relative group"
                                style={{
                                    backgroundColor: isSuccess ? '#10B981' : '#0A1128',
                                }}
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                                <AnimatePresence mode="wait">
                                    {isSubmitting ? (
                                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                            <Loader2 size={20} className="animate-spin" /> {t('form.publishing')}
                                        </motion.div>
                                    ) : isSuccess ? (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                            <CheckCircle2 size={20} /> {t('form.published')}
                                        </motion.div>
                                    ) : (
                                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                            <Send size={18} /> {t('form.publishBtn')}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    <AnimatePresence>
                        {reviews.map((item, idx) => (
                            <motion.div
                                key={`${item.name}-${idx}`}
                                initial={item.isNew ? { opacity: 0, scale: 0.8, y: -20 } : { opacity: 0, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                whileInView={!item.isNew ? { opacity: 1, y: 0 } : undefined}
                                viewport={{ once: true }}
                                transition={{ delay: item.isNew ? 0 : (idx % 3) * 0.15, duration: 0.6, type: 'spring' }}
                                className={`bg-white bento-shadow border ${item.isNew ? 'border-[#D4AF37] ring-4 ring-[#D4AF37]/10' : 'border-[#0A1128]/5'} rounded-[32px] p-8 lg:p-10 flex flex-col justify-between relative`}
                            >
                                {item.isNew && (
                                    <div className="absolute -top-3 -right-3 bg-[#D4AF37] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-20">
                                        New
                                    </div>
                                )}
                                <Quote size={48} className="text-[#D4AF37]/20 absolute top-8 right-8" />

                                <p className="text-[#0A1128]/80 text-lg lg:text-xl font-medium leading-relaxed mb-8 relative z-10 italic">
                                    "{item.text}"
                                </p>

                                <div className="border-t border-[#0A1128]/10 pt-6">
                                    <h4 className="font-bold text-[#0A1128] font-display">
                                        {item.name}
                                    </h4>
                                    <p className="text-[#D4AF37] text-sm font-bold mt-1 uppercase tracking-wider">
                                        Verified Guest • {item.date}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
