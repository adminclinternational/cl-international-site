"use client";

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations('Navbar');

    const expertises = [
        { id: 'vins-spiritueux', key: 'wine' },
        { id: 'industrie-btp', key: 'industry' },
        { id: 'luxe-packaging', key: 'luxury' },
        { id: 'high-tech', key: 'tech' },
        { id: 'mobilier-design', key: 'design' },
        { id: 'audit-legal', key: 'legal' }
    ];

    // Fonction pour fermer le menu mobile proprement
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* LOGO */}
                    <div className="shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-red-800">
                            CL INTERNATIONAL
                        </Link>
                    </div>

                    {/* LIENS (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href={`/${locale}#about`} className="text-sm font-medium text-gray-600 hover:text-red-800 transition">
                            {t('about')}
                        </a>

                        <div
                            className="relative group h-16 flex items-center"
                            onMouseEnter={() => setIsExpertiseOpen(true)}
                            onMouseLeave={() => setIsExpertiseOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 group-hover:text-red-800 transition">
                                {t('expertises')}
                                <svg className={`w-4 h-4 transition-transform duration-200 ${isExpertiseOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`
                                absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-4
                                transition-all duration-300 ease-out origin-top
                                ${isExpertiseOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                            `}>
                                {expertises.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`/${locale}#${item.id}`}
                                        onClick={() => setIsExpertiseOpen(false)}
                                        className="block px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-gray-600 hover:text-red-800 hover:bg-gray-50 transition-colors"
                                    >
                                        {t(`expertiseItems.${item.key}`)}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a href={`/${locale}#services`} className="text-sm font-medium text-gray-600 hover:text-red-800 transition">
                            {t('services')}
                        </a>

                        <a href={`/${locale}#contact`} className="bg-red-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-900 transition-all shadow-sm">
                            {t('contact')}
                        </a>

                        {/* LANGUES */}
                        <div className="flex items-center space-x-2 border-l pl-4 ml-2 text-xs font-bold uppercase tracking-widest">
                            {['fr', 'en', 'zh'].map((l) => (
                                <Link
                                    key={l}
                                    href={pathname}
                                    locale={l as any}
                                    className={locale === l ? 'text-red-800' : 'text-gray-400 hover:text-red-800'}
                                >
                                    {l}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* BURGER */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-red-800 p-2 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MENU MOBILE */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-b border-gray-100 overflow-y-auto max-h-[calc(100vh-64px)]`}>
                <div className="px-4 pt-2 pb-8 space-y-2 shadow-inner">
                    <a href={`/${locale}#about`} onClick={closeMenu} className="block px-3 py-4 text-base font-semibold text-gray-700 border-b border-gray-50">
                        {t('about')}
                    </a>

                    <div className="bg-gray-50 rounded-xl py-3">
                        <p className="px-6 py-2 text-[10px] font-black text-red-800 uppercase tracking-[0.2em]">{t('expertises')}</p>
                        <div className="mt-1 grid grid-cols-1">
                            {expertises.map((item) => (
                                <a
                                    key={item.id}
                                    href={`/${locale}#${item.id}`}
                                    onClick={closeMenu}
                                    className="block px-8 py-2.5 text-sm text-gray-600 font-medium active:bg-gray-100"
                                >
                                    {t(`expertiseItems.${item.key}`)}
                                </a>
                            ))}
                        </div>
                    </div>

                    <a href={`/${locale}#services`} onClick={closeMenu} className="block px-3 py-4 text-base font-semibold text-gray-700 border-b border-gray-50">
                        {t('services')}
                    </a>

                    <div className="flex items-center justify-center space-x-8 py-6">
                        {['fr', 'en', 'zh'].map((l) => (
                            <Link key={l} href={pathname} locale={l as any} onClick={closeMenu} className={`text-sm font-black uppercase tracking-widest ${locale === l ? 'text-red-800' : 'text-gray-400'}`}>
                                {l}
                            </Link>
                        ))}
                    </div>

                    <div className="pt-4">
                        <a href={`/${locale}#contact`} onClick={closeMenu} className="block w-full text-center bg-red-800 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-md">
                            {t('contact')}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
