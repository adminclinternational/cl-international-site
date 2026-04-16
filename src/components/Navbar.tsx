"use client";

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations('Navbar');

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
                        <Link href="/#about" className="text-sm font-medium text-gray-600 hover:text-red-800 hover:underline underline-offset-4 transition ">
                            {t('about')}
                        </Link>
                        <Link href="/#services" className="text-sm font-medium text-gray-600 hover:text-red-800 hover:underline underline-offset-4 transition">
                            {t('services')}
                        </Link>
                        <Link href="/" className="bg-red-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-900 transition-all shadow-sm">
                            {t('contact')}
                        </Link>

                        {/* SELECTEUR DE LANGUE */}
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

                    {/* BOUTON BURGER (Mobile) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-red-800 focus:outline-none p-2"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MENU MOBILE */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-b border-gray-100`}>
                <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                    <Link
                        href="/#about"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                        {t('about')}
                    </Link>
                    <Link
                        href="/#services"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                        {t('services')}
                    </Link>

                    {/* LANGUES MOBILE */}
                    <div className="flex space-x-6 px-3 py-3 border-t mt-2 text-sm font-bold">
                        {['fr', 'en', 'zh'].map((l) => (
                            <Link
                                key={l}
                                href={pathname}
                                locale={l as any}
                                onClick={() => setIsOpen(false)}
                                className={locale === l ? 'text-red-800' : 'text-gray-400'}
                            >
                                {l.toUpperCase()}
                            </Link>
                        ))}
                    </div>

                    <div className="pt-4 px-3">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-red-800 text-white px-4 py-3 rounded-md font-medium"
                        >
                            {t('contact')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
