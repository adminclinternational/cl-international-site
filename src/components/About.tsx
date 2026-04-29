"use client";

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const About = () => {
    const t = useTranslations('');
    const locale = useLocale();

    const expertises = [
        { id: 'vins-spiritueux', key: 'wine' },
        { id: 'industrie-btp', key: 'industry' },
        { id: 'luxe-packaging', key: 'luxury' },
        { id: 'high-tech', key: 'tech' },
        { id: 'mobilier-design', key: 'design' },
        { id: 'audit-legal', key: 'legal' }
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden border-t border-gray-100 selection:bg-[#8B0000] selection:text-white">
            <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                {/* LEFT CONTENT  */}
                <div className="lg:col-span-5 lg:pr-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="hidden lg:block w-16 h-px bg-[#8B0000]"></span>
                        <span className="text-gray-900 font-medium uppercase tracking-[0.3em] text-[9px] md:text-[10px]">
                            {t('About.location')}
                        </span>
                        <span className="lg:hidden w-8 h-px bg-[#8B0000]"></span>
                    </div>

                    <h2 className="text-2xl md:text-5xl lg:text-3xl font-extralight text-gray-950 uppercase tracking-tight leading-[1.1] md:leading-none mb-10">
                        {t('About.mainTitle').split(' ').slice(0, 2).join(' ')}<br className="hidden md:block" />
                        <span className="md:inline"> {t('About.mainTitle').split(' ').slice(2, 3).join(' ')}</span><br />
                        <span className="font-semibold text-[#8B0000] block mt-2 md:mt-0">
                            {t('About.mainTitle').split(' ').slice(3).join(' ')}
                        </span>
                    </h2>

                    <div className="space-y-6 md:space-y-8 text-gray-900 font-normal leading-relaxed text-sm md:text-base max-w-prose text-left">
                        <p className="border-[#8B0000] lg:border-l-2 lg:pl-8 py-2">
                            <span className="font-semibold text-gray-900">
                                {t('About.history').substring(0, 16)}
                            </span>
                            {t('About.history').substring(16)}
                        </p>
                        <p className="lg:pl-8 text-gray-600">
                            {t('About.evolution')}
                        </p>
                    </div>

                    <div className="mt-12 md:mt-16 text-center lg:text-left w-full">
                        <p className="text-xl md:text-2xl text-gray-950 font-medium italic leading-relaxed max-w-4xl">
                            {t('About.mission')}
                        </p>
                    </div>
                </div>
                {/* RIGHT CONTENT  */}
                <div className="lg:col-span-7 flex flex-col items-center lg:pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {expertises.map((item, index) => (
                            <a
                                key={item.id}
                                href={`/${locale}#${item.id}`}
                                className="group relative bg-[#571818] p-6 md:p-8 overflow-hidden transition-all duration-500 hover:bg-[#151515] flex flex-col justify-between min-h-45 border border-white/5"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-[#8B0000]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute left-0 top-0 w-0.5 h-0 bg-[#8B0000] transition-all duration-500 group-hover:h-full" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-black tracking-[0.3em] text-[#C49B48] opacity-50 group-hover:opacity-100 transition-opacity">
                                            0{index + 1}
                                        </span>
                                        <div className="h-px w-4 bg-[#C49B48]/30 group-hover:w-8 group-hover:bg-[#C49B48] transition-all duration-500" />
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
                                        className="w-4 h-4 text-[#C49B48] transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
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
                            <p className="text-[#8B0000] text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium opacity-80">
                                {t(`About.flexibility`)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
