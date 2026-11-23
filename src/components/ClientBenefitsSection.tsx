import { useTranslations } from "next-intl";
import {
    Globe2,
    ShieldCheck,
    Zap,
    TrendingUp,
    Clock,
    Sparkles,
} from "lucide-react";

const BENEFIT_ICONS = [Zap, TrendingUp, Clock, Sparkles] as const;

export default function ClientBenefitsSection() {
    const t = useTranslations("ClientBenefits");

    const partners = t.raw("partners") as string[];
    const capabilities = t.raw("capabilities") as string[];
    const guarantees = t.raw("guarantees") as string[];

    return (
        <section
            id="benefices-clients"
            className="py-24 md:py-32 px-6 lg:px-[8%] bg-white text-gray-900"
        >
            <div className="max-w-7xl mx-auto space-y-16">
                {/* BORDURE HAUTE ROUGE SUR LA MOITIÉ DE LA LARGEUR */}
                <div aria-hidden="true" className="h-0.75 w-1/2 bg-brand-red" />

                {/* 1. TITRE + RÉSEAU ASIE / CHINE + 3 PARTENAIRES EN BLOCS */}
                <div className="space-y-8">
                    <div className="max-w-4xl space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="h-0.5 w-8 bg-brand-red" />
                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-950 leading-tight">
                            {t("title")}
                        </h2>

                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                            {t("lead")}
                        </p>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {t("asiaNetwork")}
                        </p>
                    </div>

                    <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                            <Globe2 className="w-4 h-4 shrink-0" strokeWidth={1.8} />
                            <span>{t("partnersTitle")}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {partners.map((partner, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 border-b-2 border-b-brand-red rounded-sm px-5 py-4 flex items-center justify-between shadow-2xs"
                                >
                                    <span className="text-base sm:text-lg font-serif text-gray-950">
                                        {partner}
                                    </span>
                                    <span className="text-xs font-bold text-brand-gold">
                                        0{idx + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. BLOC UNIQUE : CAPACITÉS + NB CONTRÔLE AVANT DÉPART */}
                <div className="bg-slate-50/80 border border-gray-200 rounded-sm overflow-hidden">
                    <div className="p-6 sm:p-10 space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-serif text-gray-950">
                            {t("capabilitiesTitle")}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                            {capabilities.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3.5">
                                    <span className="mt-0.5 text-xs font-bold text-brand-red shrink-0">
                                        0{idx + 1}
                                    </span>
                                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border-t border-gray-200 px-6 sm:px-10 py-4 flex items-center gap-3.5">
                        <ShieldCheck
                            className="w-5 h-5 text-brand-red shrink-0"
                            strokeWidth={1.8}
                        />
                        <p className="text-sm sm:text-base font-medium text-gray-900">
                            {t("inspectionNote")}
                        </p>
                    </div>
                </div>

                {/* 3. ASSURANCES EN GRILLE 2x2 AÉRÉE */}
                <div className="space-y-8">
                    <h3 className="text-2xl sm:text-3xl font-serif text-gray-950">
                        {t("guaranteesTitle")}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {guarantees.map((guarantee, idx) => {
                            const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
                            return (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-sm p-6 sm:p-7 flex items-start gap-5 hover:border-brand-red/50 transition-colors shadow-2xs"
                                >
                                    <div className="w-12 h-12 rounded-sm bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                                    </div>

                                    <div className="space-y-1.5">
                                        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                                            0{idx + 1}
                                        </span>
                                        <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">
                                            {guarantee}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}