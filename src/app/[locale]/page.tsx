import { setRequestLocale, getTranslations } from 'next-intl/server';

export default async function Home({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    // 1. On récupère la locale (obligatoire en async sur Next 15)
    const { locale } = await params;

    // 2. On ancre la locale pour le serveur
    setRequestLocale(locale);

    // 3. On utilise la version SERVEUR de la traduction (getTranslations au lieu de useTranslations)
    const t = await getTranslations('HomePage');

    return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] bg-white">
            <h1 className="text-4xl font-bold text-gray-900 text-center px-4">
                {t('title')}
            </h1>
            <p className="mt-4 text-gray-600 font-medium">
                Déployé par SylvieDEV
            </p>
        </main>
    );
}