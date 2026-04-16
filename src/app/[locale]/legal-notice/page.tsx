import { setRequestLocale, getTranslations } from "next-intl/server";


export default async function LegalNotice({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Legal');

    return (
        <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
                {t('title')}
            </h1>

            <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
                <p className="italic text-sm">
                    {t('intro')}
                </p>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">1. ÉDITION DU SITE</h2>
                    <p>
                        Le présent site est édité par la société <strong>C.L. INTERNATIONAL</strong>, SARL au capital de 250 000,00 €.<br />
                        Siège social : LE TERTIA II ZI LES MILLES, 5 RUE CHARLES DUCHESNE, 13290 AIX-EN-PROVENCE.<br />
                        SIRET : 423 222 868 00030.<br />
                        RCS : Inscrite au Registre du Commerce et des Sociétés de Aix-en-Provence sous le numéro 423 222 868.<br />
                        TVA Intracommunautaire : FR17423222868.<br />
                        Email : contact@clinternational.fr<br />
                        Téléphone : +33 (0)4 42 90 59 13
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">2. DIRECTION DE LA PUBLICATION</h2>
                    <p>Le responsable de la publication est <strong>Elsa LIM</strong>, en sa qualité de Gérante.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">3. CONCEPTION ET RÉALISATION</h2>
                    <p>
                        Le présent site a été conçu et réalisé par <strong>SylvieDev</strong>.<br />
                        Contact : <a href="https://sylviedev.fr/" className="text-blue-600 hover:underline">https://sylviedev.fr/</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">4. HÉBERGEMENT DU SITE</h2>
                    <p>
                        Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
                        Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
                        Site web : <a href="https://vercel.com" className="text-blue-600 hover:underline">https://vercel.com</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">5. CONDITIONS GÉNÉRALES D'UTILISATION (CGU)</h2>
                    <div className="space-y-4">
                        <p><strong>Propriété Intellectuelle :</strong> L'ensemble de ce site (structure, design, textes, logos, images, graphismes) est la propriété exclusive de C.L. INTERNATIONAL, sous réserve des droits de propriété intellectuelle de SylvieDev concernant la conception technique et graphique du site. Toute reproduction ou adaptation est interdite sans autorisation écrite préalable.</p>
                        <p><strong>Limitation de responsabilité :</strong> L'éditeur s'efforce d'assurer l'exactitude des informations. Toutefois, il ne peut être tenu responsable des omissions ou des erreurs de mise à jour. L'utilisateur utilise ces informations sous sa responsabilité exclusive.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">6. CONDITIONS GÉNÉRALES DE VENTE (CGV)</h2>
                    <p>Les prestations de service et de négoce international fournies par la société sont régies par nos Conditions Générales de Vente.</p>
                    <div className="mt-4">
                        <a href="/docs/cgv.pdf" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition">
                            👉 CLIQUEZ ICI POUR CONSULTER NOS CGV (PDF)
                        </a>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">7. DROIT APPLICABLE</h2>
                    <p>Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents d'Aix-en-Provence.</p>
                </section>
            </div>
        </main>
    );
}
