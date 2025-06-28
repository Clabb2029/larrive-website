import ContactButton from "@/components/contactButton";
import { PageLayout } from "@/components/PageLayout";
import SEO from "@/components/SEO";
import Image from "next/image";

export default function Cours() {
    return (
        <>
            <SEO
                title="Cours | Jean-Claude Larrivé - Tapissier décorateur à Auxerre"
                description="Je propose des cours d’initiation à la tapisserie au sein de mon atelier à Auxerre. Apprenez les techniques traditionnelles avec patience et pédagogie, pour tous niveaux, en atelier convivial."
                keywords="cours tapisserie, initiation tapisserie, atelier tapisserie Auxerre, formation tapisserie, Jean-Claude Larrivé"
            />
            <PageLayout className="p-10">
                <div className="w-fit">
                    <h1 className="mb-4 text-4xl parisienne-regular text-primary">Mes cours</h1>
                    <div className="lg:flex w-full mx-auto mt-10">
                        <Image src="/cours.jpg" height={400} width={400} alt="Image illustrant le texte à propos des cours" className="my-auto mx-auto w-full md:w-auto" />
                        <div>
                            <div className="card static card-border border-base-300 bg-base-200 rounded-md shadow-2xl w-fit lg:-ms-8 lg:-mt-8 h-fit mt-8">
                                <div className="card-body text-xs">
                                    <span>Je propose des <span className="primary-bold">cours d’initiation à la tapisserie</span> au sein de mon atelier, situé au 26 rue Haute-Perrière à Auxerre (89000).</span>
                                    <span>Transmettre ma passion et mon savoir-faire fait partie intégrante de mon métier. Avec <span className="primary-bold">patience</span> et <span className="primary-bold">pédagogie</span>, je prends le temps d’accompagner chaque personne, quel que soit son niveau, dans la découverte des <span className="primary-bold">techniques traditionnelles de tapisserie d’ameublement</span>.</span>
                                    <span>Les stagiaires viennent avec <span className="primary-bold">leur propre siège à restaurer</span> (fauteuil, chaise, etc.), tandis que tout l’outillage ainsi que les matériaux de base sont <span className="primary-bold">mis à disposition à l’atelier</span>.</span>
                                    <span>Les horaires sont à définir ensemble selon vos disponibilités, avec la possibilité d’organiser des cours <span className="primary-bold">à l’heure, à la journée</span> ou même <span className="primary-bold">à la semaine</span>, selon vos envies et le temps que vous souhaitez y consacrer.</span>
                                    <span>La <span className="primary-bold">qualité de l’enseignement</span> et <span className="primary-bold">l’ambiance conviviale de l’atelier</span> font que mes stagiaires repartent non seulement avec des connaissances et des compétences, mais aussi avec l’envie de revenir.</span>
                                    <span>Le tarif est de <span className="primary-bold">20 euros de l’heure</span>, pour un moment riche en apprentissage, en échange et en savoir-faire artisanal.</span>
                                </div>
                            </div>
                            <ContactButton buttonText="Contactez-moi !" className="mt-8" />
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
}