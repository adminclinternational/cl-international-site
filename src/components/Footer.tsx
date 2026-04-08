export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} CL International. Tous droits réservés.
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="/mentions-legales" className="text-gray-400 hover:text-gray-600 text-xs">Mentions Légales</a>
                    <a href="/confidentialite" className="text-gray-400 hover:text-gray-600 text-xs">Confidentialité</a>
                </div>
            </div>
        </footer>
    );
}
