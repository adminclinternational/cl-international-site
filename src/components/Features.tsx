import { useTranslations } from 'next-intl';
import { Globe, Truck, Search, ShieldCheck } from 'lucide-react';

const Features = () => {
    const t = useTranslations('Features');

    const services = [
        {
            icon: <Globe className="w-10 h-10" />,
            key: 'global'
        },
        {
            icon: <Search className="w-10 h-10" />,
            key: 'sourcing'
        },
        {
            icon: <Truck className="w-10 h-10" />,
            key: 'logistics'
        },
        {
            icon: <ShieldCheck className="w-10 h-10" />,
            key: 'compliance'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* TITRE DE SECTION - */}
                <div className="mb-20">
                    <div className="w-16 h-1.5 bg-[#8B0000] mb-6" />
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                        {t('title')}
                    </h2>
                </div>

                {/* GRILLE - 1 colonne mobile / 2 colonnes tablette / 4 colonnes desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start group">
                            {/* ICÔNE avec effet au survol */}
                            <div className="mb-6 text-[#8B0000] transition-transform duration-300 group-hover:-translate-y-2">
                                {service.icon}
                            </div>

                            {/* TITRE SERVICE */}
                            <h3 className="text-xl font-extrabold text-gray-900 uppercase tracking-tight mb-4">
                                {t(`${service.key}.title`)}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {t(`${service.key}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;