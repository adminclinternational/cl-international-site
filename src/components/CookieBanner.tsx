"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 p-4 shadow-2xl">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600 text-center md:text-left">
                    <p>
                        CL International utilise des cookies pour améliorer votre expérience.
                        En poursuivant votre navigation, vous acceptez notre{" "}
                        <Link href="/privacy-policy" className="text-red-800 underline font-medium">
                            politique de confidentialité
                        </Link>.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={declineCookies}
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}
