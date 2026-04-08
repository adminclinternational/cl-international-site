import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* LOGO */}
                    <div className="shrink-0">
                        <Link href="/" className="text-xl font-bold text-red-800">
                            CL INTERNATIONAL
                        </Link>
                    </div>

                    {/* LIENS (Desktop) */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="#about" className="text-gray-600 hover:text-red-800 transition">À propos</Link>
                        <Link href="#services" className="text-gray-600 hover:text-red-800 transition">Services</Link>
                        <Link href="/contact" className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-800 transition">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
