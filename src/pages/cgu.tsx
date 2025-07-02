import { PageLayout } from "@/components/PageLayout";
import SEO from "@/components/SEO";

export default function CGU() {

    return (
        <>
            <SEO
                title="CGU | Jean-Claude Larrivé - Tapissier décorateur à Auxerre"
                description="Consultez les conditions générales d’utilisation du site Jean-Claude Larrivé, tapissier décorateur à Auxerre. Informations sur l’accès, l’utilisation, la protection des données et les responsabilités."
                keywords="CGU, conditions générales d’utilisation, mentions légales, données personnelles, site internet, tapissier Auxerre, tapissier, décorateur, Auxerre, Jean-Claude Larrivé, droits, responsabilités"
                canonical="/cgu"
            />
            <PageLayout className="p-10">
                {/* eslint-disable react/no-unescaped-entities */}
                <div className="w-full">
                    <h1 className="mb-4 text-4xl parisienne-regular text-primary">Conditions générales d'utilisation</h1>
                    <p className="text-xs">En vigueur au 24 juin 2025</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Objet</h2>
                    <p>Les présentes conditions générales ont pour objet de définir les modalités d’accès et d’utilisation du site https://www.atelier-larrive.fr par les utilisateurs.</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Acceptation des conditions</h2>
                    <p>En naviguant sur ce site, l’utilisateur accepte pleinement et sans réserve les présentes CGU.</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Accès au site</h2>
                    <p>Le site https://www.atelier-larrive.fr est accessible gratuitement à tout utilisateur disposant d’un accès à Internet. Les frais liés à cet accès sont à la charge de l’utilisateur.</p>
                    <p>Le site est normalement accessible à tout moment. Cependant, une interruption pour maintenance ou mise à jour peut être décidée par Jean-Claude Larrivé, sans obligation de préavis.</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Données personnelles</h2>
                    <p>Les données personnelles collectées via le formulaire de contact (nom, email, objet, message) sont utilisées uniquement pour répondre aux demandes des utilisateurs.</p>
                    <p>Conformément au Règlement Général sur la Protection des Données (RGPD), l’utilisateur peut exercer son droit d’accès, de rectification ou de suppression en écrivant à : <a href="mailto:jc.larrive@orange.fr" className="hover:underline hover:text-primary decoration-solid">jc.larrive@orange.fr</a>.</p>
                    <p>Les données ne sont ni cédées ni revendues à des tiers.</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Responsabilité</h2>
                    <p>Jean-Claude Larrivé s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le site, mais ne peut garantir l’absence totale d’erreurs ou d’omissions.</p>
                    <p>L’utilisateur est seul responsable de l’usage qu’il fait des informations disponibles sur le site.</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Modification des CGU</h2>
                    <p>Jean-Claude Larrivé se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs sont invités à les consulter régulièrement.</p>
                    <h2 className="text-2xl text-primary zeyada-regular mt-6">Droit applicable</h2>
                    <p>Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de l’entreprise.</p>
                </div>
            </PageLayout>
        </>
    )
}