import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Hero = () => {
    const tHome = useTranslations('HomePage');
    const tContact = useTranslations('Contact');

    return (
        <section className="relative w-full h-[85vh] min-h-125 flex items-center justify-center overflow-hidden bg-gray-900">
            <div className="absolute inset-0 z-0 w-full h-full scale-110 animate-ken-burns">
                <Image
                    src="/images/cl-international-logistics.webp"
                    alt="C.L. INTERNATIONAL - Expert logistique et sourcing mondial"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={75}
                />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.6)_0%,transparent_70%)]" />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">

                <h1 className="w-full text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center leading-[0.95] tracking-tighter uppercase wrap-break-word drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                    {tHome('title')}
                </h1>

                <div className="w-20 h-1.5 bg-[#8B0000] my-6 md:my-10 shadow-[0_0_15px_rgba(139,0,0,0.5)]" />

                <p className="text-base sm:text-xl md:text-2xl text-gray-100 text-center max-w-3xl font-bold leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] px-2">
                    {tHome('subTitle')}
                </p>

                <div className="mt-8 md:mt-12">
                    <button className="px-10 py-4 bg-[#8B0000] hover:bg-red-800 text-white font-black rounded-md transition-all duration-300 shadow-2xl hover:shadow-[0_0_25px_rgba(139,0,0,0.5)] active:scale-95 uppercase tracking-[0.2em] text-xs border border-white/10">
                        {tContact('contactUs')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;