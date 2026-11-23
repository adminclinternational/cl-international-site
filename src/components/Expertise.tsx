import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface SectionConfig {
    id: string;
    key: string;
    images: string[];
    icon: string;
    theme: 'light' | 'white' | 'dark';
}

const Expertise = () => {
    const t = useTranslations('Expertise');

    const sections: SectionConfig[] = [
        {
            id: 'kraft',
            key: 'kraft',
            images: [
                '/images/expertise/gobelets-papier-kraft-emballage-alimentaire.jpg',
                '/images/expertise/boite-patisserie-kraft-fenetre-traiteur.jpg',
                '/images/expertise/bol-salade-kraft-snacking-vente-a-emporter.jpg',
            ],
            icon: '📦',
            theme: 'light',
        },
        {
            id: 'pulpe',
            key: 'pulp',
            images: [
                '/images/expertise/assiettes-gobelets-pulpe-vegetale-compostable.jpg',
                '/images/expertise/gobelets-kraft-agitateurs-bois-restauration.jpg',
            ],
            icon: '🌿',
            theme: 'white',
        },
        {
            id: 'bois',
            key: 'wood',
            images: [
                '/images/expertise/couverts-bois-fourchette-cuillere-fsc.jpg',
                '/images/expertise/couverts-bois-jetables-ecologiques-traiteur.jpg',
            ],
            icon: '🪵',
            theme: 'dark',
        },
        {
            id: 'pet',
            key: 'pet',
            images: [
                '/images/expertise/gobelets-pet-transparents-salade-fruits-frais.jpg',
                '/images/expertise/gobelets-pet-boissons-fraiches-haute-clarte.jpg',
            ],
            icon: '🥤',
            theme: 'white',
        },
        {
            id: 'cocktail',
            key: 'cocktail',
            images: [
                '/images/expertise/verrines-cocktail-traiteur-evenementiel.jpg',
            ],
            icon: '🍸',
            theme: 'light',
        },
        {
            id: 'conformite',
            key: 'compliance',
            images: [
                '/images/expertise/controle-qualite-laboratoire-conformite-sanitaire-emballage.jpg',
                '/images/expertise/audit-usine-inspection-qualite-avant-expedition.jpg',
            ],
            icon: '🛡️',
            theme: 'dark',
        },
    ];

    return (
        <div id="expertise" className="overflow-hidden">
            {/* --- Header Section --- */}
            <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto text-center">
                <span className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">
                    {t('headerTag')}
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight max-w-4xl mx-auto">
                    {t('headerTitle')}
                </h2>
            </section>

            {/* --- Sections de contenu --- */}
            {sections.map((sec, index) => {
                const isEven = index % 2 === 1;
                const isDark = sec.theme === 'dark';

                return (
                    <section
                        key={sec.id}
                        id={sec.id}
                        className={`py-10 md:py-14 px-6 lg:px-[8%] border-t ${isDark
                            ? 'bg-surface-dark text-white border-white/10'
                            : sec.theme === 'light'
                                ? 'bg-surface-light text-gray-900 border-gray-100'
                                : 'bg-white text-gray-900 border-gray-100'
                            }`}
                    >
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                {/* Contenu Texte */}
                                <div className={`lg:col-span-6 ${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
                                    <h3
                                        className={`text-2xl md:text-3xl font-serif mb-3 ${isDark ? 'text-brand-gold' : 'text-gray-900'
                                            }`}
                                    >
                                        {t(`sections.${sec.key}.title`)}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed mb-6 opacity-90 text-pretty">
                                        {t(`sections.${sec.key}.desc`)}
                                    </p>

                                    <ul className="grid grid-cols-1 gap-3.5">
                                        {Object.entries(t.raw(`sections.${sec.key}.items`)).map(([key, value]) => (
                                            <li key={key} className="group relative pl-8">
                                                <span className="absolute left-0 top-0 text-lg group-hover:scale-110 transition-transform duration-300">
                                                    {sec.icon}
                                                </span>
                                                <p className="text-xs md:text-sm leading-relaxed font-medium">
                                                    {value as string}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Collage ou photo unique */}
                                <div className="lg:col-span-6 relative flex items-center justify-center min-h-65 sm:min-h-75">
                                    {sec.images.length === 1 ? (
                                        <div
                                            className={`relative w-full max-w-95 h-62.5 sm:h-72.5 rounded-sm overflow-hidden shadow-xl border-2 transition-transform duration-500 hover:scale-[1.02] ${isDark ? 'border-surface-dark' : 'border-white'
                                                }`}
                                        >
                                            <Image
                                                src={sec.images[0]}
                                                alt={t(`sections.${sec.key}.title`)}
                                                fill
                                                sizes="(max-width: 768px) 90vw, 40vw"
                                                className="object-cover"
                                                priority={index < 2}
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative w-full max-w-115 h-67.5 sm:h-77.5">
                                            <div
                                                className={`relative w-[64%] h-[68%] rounded-sm overflow-hidden shadow-xl border-2 z-10 transition-transform duration-500 hover:scale-[1.03] hover:z-30 ${isDark ? 'border-surface-dark' : 'border-white'
                                                    }`}
                                            >
                                                <Image
                                                    src={sec.images[0]}
                                                    alt={t(`sections.${sec.key}.title`)}
                                                    fill
                                                    sizes="(max-width: 768px) 60vw, 25vw"
                                                    className="object-cover"
                                                    priority={index < 2}
                                                />
                                            </div>

                                            {sec.images[1] && (
                                                <div
                                                    className={`absolute right-0 bottom-0 w-[62%] h-[66%] rounded-sm overflow-hidden shadow-2xl border-2 z-20 transition-transform duration-500 hover:scale-[1.03] hover:z-30 ${isDark ? 'border-surface-dark' : 'border-white'
                                                        }`}
                                                >
                                                    <Image
                                                        src={sec.images[1]}
                                                        alt={`${t(`sections.${sec.key}.title`)} - 2`}
                                                        fill
                                                        sizes="(max-width: 768px) 60vw, 25vw"
                                                        className="object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}

                                            {sec.images[2] && (
                                                <div
                                                    className={`hidden sm:block absolute right-4 top-2 w-[38%] h-[42%] rounded-sm overflow-hidden shadow-lg border-2 z-20 transition-transform duration-500 hover:scale-[1.05] hover:z-30 ${isDark ? 'border-surface-dark' : 'border-white'
                                                        }`}
                                                >
                                                    <Image
                                                        src={sec.images[2]}
                                                        alt={`${t(`sections.${sec.key}.title`)} - 3`}
                                                        fill
                                                        sizes="(max-width: 768px) 30vw, 15vw"
                                                        className="object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default Expertise;