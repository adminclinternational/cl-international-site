import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Expertise = () => {
    const t = useTranslations('Expertise');

    const sections = [
        {
            id: 'vins-spiritueux',
            key: 'wine',
            img: '/images/expertise/cl-international-wine-spirits-export.jpeg',
            icon: '🍷',
            theme: 'light'
        },
        {
            id: 'industrie-btp',
            key: 'industry',
            img: '/images/expertise/industrial-sourcing-china-construction-btp.jpg',
            icon: '⚙️',
            theme: 'white'
        },
        {
            id: 'luxe-packaging',
            key: 'luxury',
            img: '/images/expertise/luxury-cosmetic-packaging-sustainable-sourcing.jpg',
            icon: '✨',
            theme: 'dark'
        },
        {
            id: 'high-tech',
            key: 'tech',
            img: '/images/expertise/electronic-components-pcb-assembly-sourcing.jpg',
            icon: '📟',
            theme: 'white'
        },
        {
            id: 'mobilier-design',
            key: 'design',
            img: '/images/expertise/custom-hospitality-furniture-design-ffe.jpg',
            icon: '🪑',
            theme: 'light'
        },
        {
            id: 'audit-legal',
            key: 'legal',
            img: '/images/expertise/international-supply-chain-legal-audit-safety.jpg',
            icon: '🛡️',
            theme: 'dark'
        },
    ];

    return (
        <div id="expertise" className="overflow-hidden">
            {/* --- Header Section --- */}
            <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto text-center">
                <span className="text-red-800 font-black uppercase tracking-[0.2em] text-xs md:text-sm">
                    {t('headerTag')}
                </span>
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-serif text-gray-900 leading-tight max-w-4xl mx-auto">
                    {t('headerTitle')}
                </h2>
            </section>

            {/* --- Sections de contenu --- */}
            {sections.map((sec, index) => {
                const isEven = index % 2 === 1;

                return (
                    <section
                        key={sec.id}
                        id={sec.id}
                        className={`py-16 md:py-24 px-6 lg:px-[10%] ${sec.theme === 'dark' ? 'bg-[#1a1a1a] text-white' :
                            sec.theme === 'light' ? 'bg-[#fdfdfd]' : 'bg-white'
                            }`}
                    >
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                                {/* Contenu Texte - On gère l'ordre desktop avec order-last/first */}
                                <div className={`${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
                                    <h3 className={`text-3xl md:text-4xl font-serif mb-6 ${sec.theme === 'dark' ? 'text-red-400' : 'text-gray-900'
                                        }`}>
                                        {t(`sections.${sec.key}.title`)}
                                    </h3>
                                    <p className="text-base md:text-lg leading-relaxed mb-10 opacity-90 text-pretty">
                                        {t(`sections.${sec.key}.desc`)}
                                    </p>

                                    <ul className="grid grid-cols-1 gap-6">
                                        {Object.entries(t.raw(`sections.${sec.key}.items`)).map(([key, value]) => (
                                            <li key={key} className="group relative pl-12">
                                                <span className="absolute left-0 top-0 text-2xl group-hover:scale-120 transition-transform duration-300">
                                                    {sec.icon}
                                                </span>
                                                <p className="text-sm md:text-base leading-relaxed font-medium">
                                                    {value as string}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contenu Image - Aspect Ratio fixé pour éviter les sauts de layout */}
                                <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/5 w-full rounded-sm overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]">
                                    <Image
                                        src={sec.img}
                                        alt={t(`sections.${sec.key}.title`)}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover grayscale-25 hover:grayscale-0 transition-all duration-1000"
                                        priority={index < 2 || sec.key === 'legal'}
                                        loading={index < 2 || sec.key === 'legal' ? 'eager' : 'lazy'}
                                    />
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