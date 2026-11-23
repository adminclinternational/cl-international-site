import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    const t = useTranslations("ContactPage");

    return (
        <main className="bg-white text-gray-900">
            {/* HERO PLEIN VISUEL D'ENTRÉE DE PAGE */}
            <section className="relative min-h-[88vh] lg:min-h-screen flex items-center bg-surface-obsidian text-white pt-20 pb-16 px-6 lg:px-[8%] border-b border-white/10 overflow-hidden">
                <Image
                    src="/images/contact-hero.jpg"
                    alt={t("hero.imageAlt")}
                    fill
                    priority
                    className="object-cover object-top"
                />

                {/* Dégradé ciblé pour garder le texte lisible sans cacher le haut et la droite de l'image */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-r from-surface-obsidian/85 via-surface-obsidian/50 to-surface-obsidian/15"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-surface-obsidian/65 via-transparent to-surface-obsidian/25"
                />

                <div className="max-w-7xl w-full mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-200 mb-6">
                        <Link href="/" className="hover:text-brand-gold transition-colors">
                            {t("hero.breadcrumbHome")}
                        </Link>
                        <span>/</span>
                        <span className="text-brand-gold font-semibold">
                            {t("hero.breadcrumbContact")}
                        </span>
                    </div>

                    <div className="max-w-3xl space-y-5">
                        <div className="flex items-center gap-3">
                            <span className="h-0.5 w-8 bg-brand-red" />
                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-[1.08] drop-shadow-sm">
                            {t("title")}
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl">
                            {t("subtitle")}
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENU CONTACT + FORMULAIRE */}
            <section className="py-16 md:py-24 px-6 lg:px-[8%]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="text-xl md:text-2xl font-serif text-gray-950">
                            {t("infoTitle")}
                        </h2>

                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {t("infoDescription")}
                        </p>

                        <div className="pt-4 border-t border-gray-200 space-y-3 text-sm text-gray-700">
                            <p className="font-semibold text-gray-950">CL INTERNATIONAL</p>
                            <p>{t("location")}</p>
                            <p>{t("responseTime")}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}