import { setRequestLocale, getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import StatsBanner from '@/components/StatsBanner';
import CompanyIntro from '@/components/CompanyIntro';
import ServicesSection from '@/components/ServicesSection';
import ClientBenefitsSection from '@/components/ClientBenefitsSection';
import ReferencesSection from '@/components/ReferencesSection';

export default async function Home({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;

    setRequestLocale(locale);

    const t = await getTranslations('HomePage');

    return (
        <main >

            <Hero />
            <StatsBanner />
            <CompanyIntro />
            <Features />
            <ServicesSection />
            <ClientBenefitsSection />
            <ReferencesSection />
            <About />

            <Expertise />

        </main>
    );
}