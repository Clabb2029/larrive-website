import ContactButton from "@/components/contactButton";
import { PageLayout } from "@/components/PageLayout";
import SEO from "@/components/SEO";
import Image from "next/image";

export default function Cours() {
    return (
        <>
            <SEO
                title="Cours | Jean-Claude Larrivé - Tapissier décorateur à Auxerre"
                description="Jean-Claude Larrivé, tapissier décorateur à Auxerre, je propose des cours d’initiation à la tapisserie au sein de mon atelier. Apprenez les techniques traditionnelles avec patience et pédagogie, pour tous niveaux, en atelier convivial."
                keywords="cours tapisserie, initiation tapisserie, atelier tapisserie Auxerre, tapissier, décorateur, Auxerre, formation tapisserie, Jean-Claude Larrivé"
                canonical="/cours"
            />
            <PageLayout className="p-10">
                <main className="w-fit">
                    <header>
                        <h1 className="mb-4 text-4xl parisienne-regular text-primary">Mes cours</h1>
                    </header>
                    <section className="lg:flex w-full mx-auto mt-10" aria-labelledby="cours-description">
                        <Image src="/cours.jpg" height={400} width={400} alt="Image illustrant le texte à propos des cours" className="my-auto mx-auto w-full md:w-auto" />
                        <article>
                            <div className="card static card-border border-base-300 bg-base-200 rounded-md shadow-2xl w-fit lg:-ms-8 lg:-mt-8 h-fit mt-8" id="cours-description">
                                <div className="card-body text-xs">
                                    <p>Je propose des <strong>cours d’initiation à la tapisserie</strong> au sein de mon atelier, situé au 26 rue Haute-Perrière à Auxerre (89000).</p>
                                    <p>Transmettre ma passion et mon savoir-faire fait partie intégrante de mon métier. Avec <strong>patience</strong> et <strong>pédagogie</strong>, je prends le temps d’accompagner chaque personne, quel que soit son niveau, dans la découverte des <strong>techniques traditionnelles de tapisserie d’ameublement</strong>.</p>
                                    <p>Les stagiaires viennent avec <strong>leur propre siège à restaurer</strong> (fauteuil, chaise, etc.), tandis que tout l’outillage ainsi que les matériaux de base sont <strong>mis à disposition à l’atelier</strong>.</p>
                                    <p>Les horaires sont à définir ensemble selon vos disponibilités, avec la possibilité d’organiser des cours <strong>à l’heure, à la journée</strong> ou même <strong>à la semaine</strong>, selon vos envies et le temps que vous souhaitez y consacrer.</p>
                                    <p>La <strong>qualité de l’enseignement</strong> et <strong>l’ambiance conviviale de l’atelier</strong> font que mes stagiaires repartent non seulement avec des connaissances et des compétences, mais aussi avec l’envie de revenir.</p>
                                    <p>Le tarif est de <strong>20 euros de l’heure</strong>, pour un moment riche en apprentissage, en échange et en savoir-faire artisanal.</p>
                                </div>
                            </div>
                            <ContactButton buttonText="Contactez-moi !" className="mt-8" />
                        </article>
                    </section>
                </main>
            </PageLayout>
        </>
    );
}