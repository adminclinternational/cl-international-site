import { useTranslations } from "next-intl";

export default function ReferencesSection() {
    const t = useTranslations("References");

    const culturePoints = t.raw("culturePoints") as string[];

    return (
        <section
            id="realisations-references"
            className="py-14 md:py-16 px-6 lg:px-[8%] bg-white text-gray-900"
        >
            <div className="max-w-7xl mx-auto space-y-9">
                {/* FILET HAUT ROUGE SUR LA MOITIÉ DE LA LARGEUR */}
                <div aria-hidden="true" className="h-[1.5px] w-1/2 bg-brand-red" />

                {/* 1. EN-TÊTE + 25 ANS D'EXPÉRIENCE */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    <div className="lg:col-span-8 space-y-2.5">
                        <div className="flex items-center gap-2.5">
                            <span className="h-px w-6 bg-brand-red" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-gray-950 tracking-tight leading-tight">
                            {t("title")}
                        </h2>

                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                            {t("subtitle")}
                        </p>

                        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed max-w-2xl pt-1">
                            {t("tailorMadeIntro")}
                        </p>
                    </div>

                    <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-200 pt-4 lg:pt-0 lg:pl-7 space-y-2">
                        <div className="flex items-baseline gap-2.5">
                            <span className="text-4xl font-serif font-light text-brand-red leading-none">
                                25
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                                {t("experienceBadge")}
                            </span>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {t("experienceLead")}
                        </p>
                    </div>
                </div>

                {/* 2. BUSINESS CULTURE : 3 COLONNES COMPACTES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-gray-200/90 py-6">
                    {culturePoints.map((point, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-red">
                                    0{idx + 1}
                                </span>
                                <span className="h-px w-6 bg-brand-red/70" />
                            </div>

                            <p className="text-sm text-gray-800 leading-relaxed">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. CONCLUSION COMPACTE */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {t("trackRecord")}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {t("tailorMadeOutro")}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed lg:border-l lg:border-gray-200 lg:pl-6">
                        {t("internationalDimension")}
                    </p>
                </div>
            </div>
        </section>
    );
}