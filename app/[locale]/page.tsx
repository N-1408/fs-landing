// 📄 File: app/[locale]/page.tsx — Main Landing Page Assembly (Heaven Feel 2.0)
// 👤 Created by: User with AI
// 📝 Description: Assembles all the highly interactive 2.0 components 
//     into a seamless scrolling pitch deck experience.
// 📅 Created at: 2026-03-07 07:13 (Tashkent Time)

import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import MarketComparison from '@/components/MarketComparison';
import MvpDemo from '@/components/MvpDemo';
import Resources from '@/components/Resources';
import Roadmap from '@/components/Roadmap';
import SocialImpact from '@/components/SocialImpact';
import Team from '@/components/Team';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            <Navbar />
            <Hero />
            <ProblemSolution />
            <MarketComparison />
            <MvpDemo />
            <Resources />
            <Roadmap />
            <SocialImpact />
            <Team />
            <Feedback />
            <Footer />
        </main>
    );
}
