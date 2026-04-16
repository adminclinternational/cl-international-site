import { setRequestLocale, getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
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

            <About />

            <Features />

        </main>
    );
}