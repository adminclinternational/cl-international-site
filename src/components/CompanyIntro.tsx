import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CompanyIntro() {
    const t = useTranslations("CompanyIntro");

    return (
        <section
            id="entreprise"
            className="py-14 md:py-20 px-6 lg:px-[8%] bg-white text-gray-900 border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
                {/* === BLOC 1 : L'entreprise, son histoire + photos fondateurs & réunion === */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="h-0.5 w-8 bg-brand-red" />
                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 leading-tight mb-6">
                            {t("title")}
                        </h2>

                        <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed border-l-2 border-brand-red/80 pl-5 md:pl-6">
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                            <p>{t("p3")}</p>
                        </div>
                    </div>

                    {/* Colonne Visuels : Photo des fondateurs + Photo de réunion */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                        <div className="flex flex-col items-center">
                            <div className="relative w-full aspect-3/4 rounded-sm overflow-hidden shadow-lg border border-gray-200 bg-gray-50">
                                <Image
                                    src="/images/equipe/jimmy-carina-lim-fondateurs-cl-international.jpg"
                                    alt={t("foundersCaption")}
                                    fill
                                    sizes="(max-width: 768px) 90vw, 20vw"
                                    className="object-cover object-top"
                                />
                            </div>
                            <p className="mt-2.5 text-xs text-gray-500 italic text-center">
                                {t("foundersCaption")}
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-full aspect-3/4 rounded-sm overflow-hidden shadow-lg border border-gray-200 bg-gray-50">
                                <Image
                                    src="/images/equipe/reunion-equipe-sourcing-negociation-cl-international.jpg"
                                    alt={t("meetingCaption")}
                                    fill
                                    sizes="(max-width: 768px) 90vw, 20vw"
                                    className="object-cover object-top"
                                />
                            </div>
                            <p className="mt-2.5 text-xs text-gray-500 italic text-center">
                                {t("meetingCaption")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* === BLOC 2 : Votre équipe experte (texte validé + photo d'équipe sans rognage) === */}
                <div className="bg-surface-warm border border-gray-200/80 rounded-sm p-6 sm:p-10 md:p-12 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Photo de groupe à gauche : cadrage large sans couper personne */}
                        <div className="lg:col-span-6">
                            <div className="relative w-full aspect-21/9 sm:aspect-24/10 rounded-sm overflow-hidden shadow-md border border-white bg-white">
                                <Image
                                    src="/images/equipe/equipe-cl-international-aix-en-provence.jpg"
                                    alt={t("teamCaption")}
                                    fill
                                    sizes="(max-width: 1024px) 95vw, 45vw"
                                    className="object-cover object-center"
                                />
                            </div>
                            <p className="mt-2.5 text-xs text-gray-600 italic text-center">
                                {t("teamCaption")}
                            </p>
                        </div>

                        {/* Texte validé à droite */}
                        <div className="lg:col-span-6">
                            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red mb-2">
                                {t("teamEyebrow")}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 leading-snug mb-4">
                                {t("teamTitle")}
                            </h3>

                            <div className="space-y-3.5 text-sm md:text-base text-gray-700 leading-relaxed">
                                <p>{t("teamP1")}</p>
                                <p>{t("teamP2")}</p>
                                <p>{t("teamP3")}</p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-200 flex flex-wrap items-center gap-6">
                                <a
                                    href="#about"
                                    className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red hover:underline"
                                >
                                    {t("ctaPrimary")} →
                                </a>
                                <a
                                    href="#contact"
                                    className="text-xs font-bold uppercase tracking-[0.16em] text-gray-700 hover:text-gray-900"
                                >
                                    {t("ctaSecondary")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}