import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-[#8B0000] font-bold text-xl mb-4">CL INTERNATIONAL</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Expert mondial en trading et sourcing stratégique.
                            Nous connectons les entreprises aux meilleurs centres de production mondiaux avec une sécurité totale.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-gray-600 hover:text-[#8B0000] transition">Accueil</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-[#8B0000] transition">À propos</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-[#8B0000] transition">Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Légal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/legal-notice" className="text-gray-600 hover:text-[#8B0000] transition">Mentions Légales</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-600 hover:text-[#8B0000] transition">Confidentialité</Link></li>
                            <li><Link href="/cookies" className="text-gray-600 hover:text-[#8B0000] transition">Gestion des cookies</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
                        <p className="text-gray-600 text-sm">
                            Aix en Provence, France<br />
                            <a href="mailto:contact@clinternational.fr" className="hover:text-[#8B0000]">contact@clinternational.fr</a>
                        </p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} CL International — Made by{' '}
                        <a
                            href="https://sylviedev.fr"
                            className="hover:text-gray-600 transition-colors"
                        >
                            SylvieDEV
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
