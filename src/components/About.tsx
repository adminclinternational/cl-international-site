import { useTranslations } from 'next-intl';
import Link from 'next/link'; // Import nécessaire pour le lien

const About = () => {
    const t = useTranslations('About');

    const products = [
        'packaging', 'textile', 'wood',
        'food', 'furniture', 'perfume',
        'leather', 'industrial', 'construction'
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden border-t border-gray-100 selection:bg-[#8B0000] selection:text-white">
            <div className="max-w-375 mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                <div className="lg:col-span-5 pr-10">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-16 h-px bg-[#8B0000]"></span>
                        <span className="text-gray-700 font-medium uppercase tracking-[0.3em] text-[10px]">
                            {t('location')}
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-5xl lg:text-2xl font-extralight text-gray-950 uppercase tracking-tight leading-none mb-12">
                        {t('mainTitle').split(' ').slice(0, 2).join(' ')}<br />
                        {t('mainTitle').split(' ').slice(2, 3).join(' ')}<br />
                        <span className="font-semibold text-[#8B0000]">{t('mainTitle').split(' ').slice(3).join(' ')}</span>
                    </h2>

                    <div className="space-y-8 text-gray-800 font-normal leading-relaxed text-base">
                        <p className="border-l-2 border-gray-100 pl-8 py-2">
                            <span className="font-semibold text-gray-900">{t('history').substring(0, 16)}</span>
                            {t('history').substring(16)}
                        </p>
                        <p className="pl-8">
                            {t('evolution')}
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 pl-8">
                        <p className="text-xl text-gray-950 font-medium italic leading-relaxed">
                            "{t('mission')}"
                        </p>
                    </div>
                </div>

                {/* --- COLONNE EXPERTISE (Version Cliquable) --- */}
                <div className="lg:col-span-7 bg-[#fbfbfb] p-12 md:p-16 border border-gray-100 relative group isolate">

                    <div className="absolute top-4 left-4 w-full h-full border-t border-l border-[#8B0000] z-0 opacity-40 group-hover:opacity-100 transition-opacity" />

                    <span className="absolute top-8 right-12 text-6xl font-light text-gray-100 select-none z-0">1999</span>

                    <h3 className="text-lg font-black text-gray-950 uppercase tracking-[0.2em] mb-12 flex items-center gap-3 relative z-10">
                        <span className="w-2 h-2 rounded-full bg-[#8B0000]"></span>
                        {t('productsTitle')}
                    </h3>

                    {/* GRILLE PRODUITS AVEC LIENS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7 border-t border-gray-100 pt-12 relative z-10 group/grid">
                        {products.map((item) => (
                            <Link
                                key={item}
                                href={`/expertise/${item}`} // Modifie l'URL selon tes besoins
                                className="flex flex-col gap-1 group/item transition-all duration-300 hover:opacity-100! group-hover/grid:opacity-40"
                            >
                                <span className="text-[9px] text-[#8B0000] font-bold uppercase tracking-[0.3em] opacity-0 group-hover/item:opacity-100 transition-all duration-500 translate-y-1 group-hover/item:translate-y-0">
                                    Sourcing
                                </span>

                                <div className="relative inline-block overflow-hidden pb-1">
                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-widest transition-all duration-300 group-hover/item:text-black group-hover/item:pl-2">
                                        {t(`productList.${item}`)}
                                    </span>

                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#8B0000] transition-all duration-500 ease-out group-hover/item:w-full" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 relative z-10">
                        <p className="text-xs text-gray-400 font-medium italic leading-relaxed max-w-xl">
                            {t('flexibility')}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;