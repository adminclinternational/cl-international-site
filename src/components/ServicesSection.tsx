import { useTranslations } from "next-intl";
import {
    MessageSquare,
    ClipboardCheck,
    Search,
    Handshake,
    PackageCheck,
} from "lucide-react";

type StepKey = "contact" | "audit" | "sourcing" | "negotiation" | "followup";

const STEP_CONFIG: { key: StepKey; Icon: typeof MessageSquare; accent: "red" | "gold" }[] = [
    { key: "contact", Icon: MessageSquare, accent: "red" },
    { key: "audit", Icon: ClipboardCheck, accent: "gold" },
    { key: "sourcing", Icon: Search, accent: "red" },
    { key: "negotiation", Icon: Handshake, accent: "gold" },
    { key: "followup", Icon: PackageCheck, accent: "red" },
];

export default function ServicesSection() {
    const t = useTranslations("Services");

    const technicalItems = t.raw("steps.audit.technicalItems") as string[];
    const legalItems = t.raw("steps.audit.legalItems") as string[];
    const commercialItems = t.raw("steps.audit.commercialItems") as string[];

    return (
        <section
            id="services"
            className="py-24 md:py-32 px-6 lg:px-[8%] bg-white text-gray-900"
        >
            <div className="max-w-7xl mx-auto space-y-14">
                {/* BORDURE HAUTE ROUGE SUR LA MOITIÉ DE LA LARGEUR */}


                {/* EN-TÊTE */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="max-w-2xl space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="h-0.5 w-8 bg-brand-red" />
                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-serif text-gray-950 leading-tight">
                            {t("title")}
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                        {t("intro")}
                    </p>
                </div>

                {/* ÉTAPES 01 -> 05 SUR FOND CLAIR DYNAMIQUE */}
                <div className="space-y-5">
                    {STEP_CONFIG.map(({ key: stepKey, Icon, accent }) => (
                        <article
                            key={stepKey}
                            className="bg-white border border-gray-200 rounded-sm p-6 sm:p-8 shadow-xs hover:border-brand-red/50 transition-colors"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                                {/* ICÔNE + CHIFFRE + TITRE */}
                                <div className="lg:w-72 shrink-0 flex items-center gap-4">
                                    <div
                                        className={`w-13 h-13 rounded-sm flex items-center justify-center shrink-0 ${accent === "red"
                                            ? "bg-brand-red/10 text-brand-red border border-brand-red/20"
                                            : "bg-amber-500/10 text-amber-700 border border-amber-500/25"
                                            }`}
                                    >
                                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                                    </div>

                                    <div>
                                        <span
                                            className={`block text-xs font-bold uppercase tracking-[0.22em] ${accent === "red" ? "text-brand-red" : "text-amber-700"
                                                }`}
                                        >
                                            {t(`steps.${stepKey}.number`)}
                                        </span>
                                        <h3 className="text-2xl font-serif text-gray-950">
                                            {t(`steps.${stepKey}.title`)}
                                        </h3>
                                    </div>
                                </div>

                                {/* DESCRIPTION + VOLETS AUDIT À SA PLACE */}
                                <div className="flex-1 space-y-5">
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {t(`steps.${stepKey}.description`)}
                                    </p>

                                    {stepKey === "audit" && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                                            <div className="bg-white border border-gray-200 border-t-2 border-t-brand-red rounded-sm p-4 space-y-2.5">
                                                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red">
                                                    {t("steps.audit.technicalTitle")}
                                                </h4>
                                                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                                                    {technicalItems.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <span className="text-brand-red font-bold">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-white border border-gray-200 border-t-2 border-t-amber-600 rounded-sm p-4 space-y-2.5">
                                                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
                                                    {t("steps.audit.legalTitle")}
                                                </h4>
                                                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                                                    {legalItems.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <span className="text-amber-700 font-bold">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-white border border-gray-200 border-t-2 border-t-brand-red rounded-sm p-4 space-y-2.5">
                                                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red">
                                                    {t("steps.audit.commercialTitle")}
                                                </h4>
                                                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                                                    {commercialItems.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <span className="text-brand-red font-bold">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}