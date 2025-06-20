import { PageLayout } from "@/components/PageLayout";
import TextBlock from "@/components/textBlock";
import dynamic from "next/dynamic";

export default function Home() {

    const Map = dynamic(() => import('../components/map'), { ssr: false });

    return (
        <PageLayout>
            <div className="w-full h-full my-10">
                <TextBlock className="w-5/6 md:w-1/2 mx-auto z-10 shadow-2xl">
                    <h1 className="text-4xl parisienne-regular text-primary text-center">Jean Claude <span className="zeyada-regular">LARRIVÉ</span></h1>
                    <p className="text-sm text-center mt-2">Tapissier - Décorateur</p>
                </TextBlock>
                <img src="/interieur.jpg" alt="Intérieur de l'atelier" className="w-full xs:h-auto md:h-130 object-cover relative -mt-10 transition-transform duration-300 hover:scale-105" />
                <div className="md:flex md:w-4/5 lg:w-3/5 mx-auto mt-10 md:mt-20">
                    <div className="p-1 w-full">
                        <Map />
                    </div>
                    <div className="card static card-border border-base-300 bg-base-200 rounded-md shadow-2xl w-fit mx-1 md:-ms-8 md:-mt-8 h-fit mt-8 z-10">
                        <div className="card-body text-xs">
                            <span>Bienvenue chez moi, <span className="primary-bold">Jean-Claude, tapissier décorateur passionné.</span></span>
                            <span>Avec plus de <span className="primary-bold">35 ans d’expérience</span>, je mets tout mon savoir-faire <span className="primary-bold">traditionnel</span> au service de vos fauteuils, sièges, décors de fenêtres et tissus d’ameublement.</span>
                            <span>Chaque projet est pour moi l’occasion de perpétuer des <span className="primary-bold">gestes artisanaux</span> précis, et de choisir avec soin les matières pour <span className="primary-bold">redonner vie et caractère à votre intérieur.</span></span>
                            <span>Je vous accompagne personnellement, avec passion et attention, pour créer un résultat unique qui allie authenticité et élégance.</span>
                            <span>Retrouvez-moi à mon atelier au <span className="primary-bold">26 rue Haute-Perrière à Auxerre (89000)</span>, ou chaque semaine sur les marchés : le vendredi à <span className="primary-bold">Auxerre</span>, le samedi à <span className="primary-bold">Avallon</span>.</span>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
