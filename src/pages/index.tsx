import ContactButton from "@/components/contactButton";
import { PageLayout } from "@/components/PageLayout";
import SEO from "@/components/SEO";
import TextBlock from "@/components/textBlock";
import dynamic from "next/dynamic";

export default function Home() {

    const Map = dynamic(() => import('../components/map'), { ssr: false });

    return (
        <>
            <SEO
                title="Jean-Claude Larrivé | Tapissier décorateur à Auxerre"
                description="Jean-Claude Larrivé, tapissier décorateur à Auxerre. Plus de 35 ans d'expérience pour redonner vie à vos fauteuils, sièges et décors d'intérieur."
                keywords="tapissier, décorateur, Auxerre, fauteuils, sièges, tissus, réfection, artisanat, Jean-Claude Larrivé"
            />
            <PageLayout>
                <main className="w-full h-full my-9 overflow-hidden">
                    <TextBlock className="w-5/6 md:w-1/2 mx-auto z-10 shadow-2xl mt-1 p-2">
                        <header>
                            <h1 className="text-center">
                                <span className="text-4xl parisienne-regular text-primary me-3">Jean-Claude</span>
                                <span className="text-4xl zeyada-regular text-primary">LARRIVÉ</span>
                                <span className="block text-sm mt-2">Tapissier - Décorateur à Auxerre</span>
                            </h1>
                        </header>
                    </TextBlock>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img src="/interieur.jpg" alt="Atelier de tapissier décorateur à Auxerre – Jean-Claude Larrivé" className="w-full xs:h-auto md:h-130 object-cover relative -mt-10 transition-transform duration-300 hover:scale-105" />
                    <section className="md:flex md:w-9/10 xl:w-3/5 mx-auto mt-10 md:mt-20" aria-labelledby="introduction">
                        <div className="p-1 w-full">
                            <Map />
                        </div>
                        <article className="z-1 flex flex-col justify-evenly">
                            <div className="card static card-border border-base-300 bg-base-200 rounded-md shadow-2xl w-fit mx-1 md:-ms-15 md:-mt-8 lg:-ms-40 xl:-ms-15 h-fit mt-8" id="introduction">
                                <div className="card-body text-xs">
                                    <p>Bienvenue chez moi, <strong>Jean-Claude, tapissier décorateur passionné.</strong></p>
                                    <p>Avec plus de <strong>35 ans d’expérience</strong>, je mets tout mon savoir-faire <strong>traditionnel</strong> au service de vos fauteuils, sièges, décors de fenêtres et tissus d’ameublement.</p>
                                    <p>Chaque projet est pour moi l’occasion de perpétuer des <strong>gestes artisanaux</strong> précis, et de choisir avec soin les matières pour <strong>redonner vie et caractère à votre intérieur.</strong></p>
                                    <p>Je vous accompagne personnellement, avec passion et attention, pour créer un résultat unique qui allie authenticité et élégance.</p>
                                    <p>Retrouvez-moi à mon atelier au <strong>26 rue Haute-Perrière à Auxerre (89000)</strong>, ou chaque semaine sur les marchés : le vendredi à <strong>Auxerre</strong>, le samedi à <strong>Avallon</strong>.</p>
                                </div>
                            </div>
                            <ContactButton buttonText="Contactez-moi !" className="mt-10" />
                        </article>
                    </section>
                </main>
            </PageLayout>
        </>
    );
}
