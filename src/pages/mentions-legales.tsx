import { PageLayout } from "@/components/PageLayout";
import SEO from "@/components/SEO";

export default function LegalMentions() {

    return (
        <>
            <SEO
                title="Mentions légales | Jean-Claude Larrivé - Tapissier décorateur à Auxerre"
                description="Retrouvez les mentions légales du site Jean-Claude Larrivé, tapissier décorateur à Auxerre : éditeur, hébergeur, contact, protection des données et informations légales obligatoires."
                keywords="mentions légales, éditeur du site, hébergeur, contact, données personnelles, obligations légales, tapissier Auxerre, Jean-Claude Larrivé, site internet"
            />
            <PageLayout className="p-10">
                {/* eslint-disable react/no-unescaped-entities */}
                <div className="w-full">
                    <h1 className="mb-4 text-4xl parisienne-regular text-primary">Mentions légales</h1>
                    <p className="mt-6">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site https://www.atelier-larrive.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Edition du site</h2>
                    <p>Le présent site, accessible à l’URL https://www.atelier-larrive.fr (le « Site »), est édité par :</p>
                    <p>Clara Slys, auto-entrepreneuse résidant 4 rue de la Fleuriée 21850 Saint-Apollinaire, de nationalité Française (France), inscrite au R.C.S. de DIJON sous le numéro RCS Dijon A 944007459.</p>
                    <p>Adresse e-mail : <a href="mailto:slys.clara89000@gmail.com" className="hover:underline hover:text-primary decoration-solid">slys.clara89000@gmail.com</a>,</p>
                    <p>Non assujettie à la TVA</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Hébergement</h2>
                    <p>Le Site est hébergé par la société <a href="https://www.ovhcloud.com/fr/" target="_blank" className="hover:underline hover:text-primary decoration-solid">OVH</a> SAS, situé <a href="https://maps.app.goo.gl/dbrEX74ms84b4EtR8" target="_blank" className="hover:underline hover:text-primary decoration-solid">2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1</a>, (contact téléphonique ou email : 1007).</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Directeur de publication</h2>
                    <p>Le Directeur de la publication du Site est Jean-Claude Larrivé.</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Contact</h2>
                    <p>Par téléphone : <a href="tel:0687125385" className="hover:underline hover:text-primary decoration-solid">06 87 12 53 85</a></p>
                    <p>Par email : <a href="mailto:jc.larrive@orange.fr" className="hover:underline hover:text-primary decoration-solid">jc.larrive@orange.fr</a></p>
                    <p>Par courrier : <a href="https://maps.app.goo.gl/PHB9nTsPRWQvjtPg7" target="_blank" className="hover:underline hover:text-primary decoration-solid">26 rue Haute-Perrière 89000 Auxerre</a></p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Données personnelles</h2>
                    <p>Les informations personnelles collectées via les formulaires sont destinées à un usage strictement professionnel. Conformément au RGPD, l’utilisateur peut exercer ses droits d’accès, de rectification ou de suppression des données en écrivant à : <a href="mailto:jc.larrive@orange.fr" className="hover:underline hover:text-primary decoration-solid">jc.larrive@orange.fr</a>.</p>
                </div>
            </PageLayout>
        </>
    )
}