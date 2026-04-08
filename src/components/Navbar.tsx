"use client"; // Obligatoire pour gérer le clic du menu

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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

                    {/* LIENS (Desktop) - Caché sur mobile */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-red-800 hover:underline underline-offset-4 transition ">À propos</Link>
                        <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-red-800 hover:underline underline-offset-4 transition">Services</Link>
                        <Link href="/contact" className="bg-red-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-900 transition-all shadow-sm">
                            Contact
                        </Link>
                    </div>

                    {/* BOUTON BURGER (Mobile uniquement) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-red-800 focus:outline-none p-2"
                            aria-label="Toggle menu"
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

            {/* MENU MOBILE (Apparition au clic) */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300`}>
                <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                    <Link
                        href="#about"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                        À propos
                    </Link>
                    <Link
                        href="#services"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                        Services
                    </Link>
                    <div className="pt-4 px-3">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-red-800 text-white px-4 py-3 rounded-md font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
