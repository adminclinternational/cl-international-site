export default function PrivacyPolicy() {
    const today = new Date().toLocaleDateString('fr-FR');

    return (
        <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4 uppercase">
                Politique de Confidentialité
            </h1>

            <div className="prose prose-slate max-w-none text-gray-700 space-y-8">
                <p className="italic text-sm text-gray-500">
                    Dernière mise à jour : {today}
                </p>

                <p>
                    La société <strong>CL INTERNATIONAL</strong> s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site clinternational.fr, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
                </p>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">1. Responsable du traitement</h2>
                    <p>
                        Le responsable du traitement des données est la société <strong>CL INTERNATIONAL</strong>, située au LE TERTIA II ZI LES MILLES, 5 RUE CHARLES DUCHESNE, 13290 AIX-EN-PROVENCE, représentée par <strong>Elsa LIM</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">2. Données collectées et finalités</h2>
                    <p>Nous collectons uniquement les données nécessaires via notre formulaire de contact :</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Données collectées :</strong> Nom, prénom, adresse e-mail, numéro de téléphone, nom de l'entreprise.</li>
                        <li><strong>Finalité :</strong> Répondre à vos demandes de cotation, d'audit ou de renseignements commerciaux.</li>
                        <li><strong>Base légale :</strong> Votre consentement (case à cocher sur le formulaire).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">3. Durée de conservation</h2>
                    <p>
                        Les données sont conservées pendant une durée maximale de 3 ans après le dernier contact de votre part, sauf obligation légale contraire.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">4. Destinataires des données</h2>
                    <p>
                        Les données sont strictement réservées à l'usage interne de <strong>CL INTERNATIONAL</strong>. Elles ne sont ni vendues, ni louées, ni cédées à des tiers.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">5. Vos droits (RGPD)</h2>
                    <p>Conformément à la réglementation, vous disposez des droits suivants :</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Droit d'accès, de rectification et d'effacement de vos données.</li>
                        <li>Droit à la limitation du traitement.</li>
                        <li>Droit d'opposition au traitement.</li>
                        <li>Droit à la portabilité de vos données.</li>
                    </ul>
                    <p className="mt-4">
                        Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante :
                        <a href="mailto:contact@clinternational.fr" className="text-blue-600 hover:underline ml-1">
                            contact@clinternational.fr
                        </a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase">6. Cookies</h2>
                    <p>
                        Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement et des outils de mesure d'audience anonymes. Vous pouvez configurer votre navigateur pour les bloquer.
                    </p>
                </section>
            </div>
        </main>
    );
}
