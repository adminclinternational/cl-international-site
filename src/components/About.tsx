"use client";

import { useLocale, useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations('');
    const locale = useLocale();

    const expertises = [
        { id: 'kraft', key: 'kraft' },
        { id: 'pulpe', key: 'pulp' },
        { id: 'bois', key: 'wood' },
        { id: 'pet', key: 'pet' },
        { id: 'cocktail', key: 'cocktail' },
        { id: 'conformite', key: 'compliance' }
    ];

    return (
        <section
            id="gammes"
            className="relative py-20 md:py-24 bg-white overflow-hidden border-t border-gray-100 selection:bg-brand-red selection:text-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* COLONNE GAUCHE : Présentation du pôle Emballages & Vaisselle comme une gamme parmi d'autres */}
                <div className="lg:col-span-5 lg:pr-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="hidden lg:block w-12 h-px bg-brand-red" />
                        <span className="text-brand-red font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs">
                            {t('About.eyebrow')}
                        </span>
                        <span className="lg:hidden w-8 h-px bg-brand-red" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-950 leading-tight mb-6">
                        {t('About.title')}
                    </h2>

                    <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base max-w-prose text-left border-l-2 border-brand-red/80 pl-5 md:pl-6">
                        <p>{t('About.p1')}</p>
                        <p>{t('About.p2')}</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 w-full text-left">
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                            {t('About.otherRangesNote')}
                        </p>
                        <a
                            href={`/${locale}#contact`}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-red hover:underline"
                        >
                            {t('About.otherRangesCta')} →
                        </a>
                    </div>
                </div>

                {/* COLONNE DROITE : Les 6 familles de produits / normes de cette gamme */}
                <div className="lg:col-span-7 flex flex-col items-center lg:pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {expertises.map((item, index) => (
                            <a
                                key={item.id}
                                href={`/${locale}#${item.id}`}
                                className="group relative bg-brand-red-dark p-6 md:p-8 overflow-hidden transition-all duration-500 hover:bg-surface-obsidian flex flex-col justify-between min-h-45 border border-white/5"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-brand-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute left-0 top-0 w-0.5 h-0 bg-brand-red transition-all duration-500 group-hover:h-full" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-black tracking-[0.3em] text-brand-gold opacity-50 group-hover:opacity-100 transition-opacity">
                                            0{index + 1}
                                        </span>
                                        <div className="h-px w-4 bg-brand-gold/30 group-hover:w-8 group-hover:bg-brand-gold transition-all duration-500" />
                                    </div>

                                    <h4 className="text-white text-lg font-medium uppercase tracking-wider mb-2 group-hover:translate-x-2 transition-transform duration-500">
                                        {t(`Navbar.expertiseItems.${item.key}`)}
                                    </h4>

                                    <p className="text-[0.85rem] text-gray-300 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-500 line-clamp-2">
                                        {t(`About.categories.${item.key}`)}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-6 flex items-center gap-4">
                                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                                        {t('About.seeExpertise')}
                                    </span>
                                    <svg
                                        className="w-4 h-4 text-brand-gold transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </a>
                        ))}

                        <div className="md:col-span-2 mt-4 text-center">
                            <p className="text-brand-red text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium opacity-80">
                                {t('About.flexibility')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;