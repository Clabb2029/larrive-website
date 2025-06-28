import { PageLayout } from "@/components/PageLayout";
import SEO from "@/components/SEO";
import TextBlock from "@/components/textBlock";

export default function Materiaux() {

    const pictos = [
        { src: "green-line.png", alt: "Fils recyclés issus de bouteilles en plastique usagées, certifiés traçables GRS" },
        { src: "h2oh.png", alt: "Tissus permettent de nettoyer facilement les taches ménagères courantes avec de l'eau" },
        { src: "pet-friendly.png", alt: "Tissus respectueux des animaux et résistants aux griffures et aux accrocs" },
        { src: "rpet.png", alt: "Fabrication à partir d'emballages en PET recyclé" }
    ];

    const materials = [
        { src: "materiaux-1.jpg", alt: "Tissu de tapisserie coloré et fleuri avec des oiseaux" },
        { src: "materiaux-2.jpg", alt: "Tissu de tapisserie coloré avec des formes arrondies" },
        { src: "materiaux-3.jpg", alt: "Échantillons de tissus de tapisserie unis" },
        { src: "materiaux-4.jpg", alt: "Tissu de tapisserie fleuri en noir et blanc" },
        { src: "materiaux-5.jpg", alt: "Tissu de tapisserie bleu avec des formes géométriques" },
        { src: "materiaux-6.jpeg", alt: "Échantillons de tissus de tapisserie présentant différents motifs" },
        { src: "materiaux-7.jpg", alt: "Échantillons de tissus de tapisserie unis et à motifs" },
        { src: "materiaux-8.jpg", alt: "Tissu de tapisserie coloré avec des formes géométriques" },
        { src: "materiaux-9.jpg", alt: "Tissu de tapisserie coloré avec des formes géométriques" }
    ]

    const largeScreenStyle = [
        { position: "sm:-top-[10%] sm:right-0", rotation: "rotate-10" },
        { position: "sm:top-[10%] sm:right-[5%] lg:top-[15%] lg:right[10%] z-1", rotation: "-rotate-15" },
        { position: "sm:top-[30%] sm:right-[2%] lg:top-[40%] z-2", rotation: "rotate-10" },
        { position: "sm:top-[50%] lg:top-[45%] sm:right-[17%] lg:right-[15%]", rotation: "-rotate-10" },
        { position: "sm:top-[55%] lg:top-[40%] sm:right-[32%] lg:right-[30%] z-1", rotation: "rotate-10" },
        { position: "sm:top-[50%] lg:top-[45%] sm:right-[45%] lg:right-[45%]", rotation: "-rotate-5" },
        { position: "sm:top-[55%] lg:top-[40%] sm:right-[60%] lg:right-[60%]", rotation: "rotate-10" },
        { position: "sm:top-[50%] lg:top-[45%] sm:right-[75%] lg:right-[75%]", rotation: "-rotate-10" },
        { position: "sm:top-[70%] lg:top-[78%] sm:right-[82%] lg:right-[80%]", rotation: "rotate-10" }
    ];

    const smallScreenStyle = [
        { position: "top-[2%] left-[35%] z-2", rotation: "rotate-10" },
        { position: "-top-[2%] left-[70%] z-3", rotation: "-rotate-15" },
        { position: "z-1", rotation: "-rotate-10" },
        { position: "top-[30%] left-[18%] z-4", rotation: "-rotate-5" },
        { position: "top-[55%] left-[2%] z-3", rotation: "-rotate-5" },
        { position: "top-[25%] left-[52%] z-3", rotation: "rotate-10" },
        { position: "top-[50%] left-[70%] z-3", rotation: "-rotate-10" },
        { position: "top-[55%] left-[35%] z-3", rotation: "rotate-10" },
        { position: "top-[55%] left-[35%] z-3", rotation: "rotate-10" }
    ];

    const getTextBlock = () => {
        return (
            <TextBlock placement="top-right" className="w-full sm:w-5/7 p-4 text-xs lg:text-sm mb-10 sm:mb-0">
                <p>Je choisis avec soin des matériaux durables et respectueux de l’environnement pour chaque pièce. Je travaille dans la tradition, avec sangles, ressorts, crin animal ou végétal, mais aussi avec du cuir, pour des restaurations au cachet unique.</p>
                <p>Les finitions sont personnalisées grâce à un large choix de galons et de clous décoratifs.</p>
                <p>J’accorde également une attention particulière aux tissus, privilégiant les fibres naturelles comme le lin ou le coton, et les matières recyclées, pour concilier charme, confort et éthique.</p>
                <p>Mon atelier propose également plusieurs centaines de références, dont certaines en exclusivité, ce qui permet de conjuguer respect de l’artisanat et engagement écologique dans chaque réalisation.</p>
            </TextBlock>
        );
    };

    const getImageList = (isLargeScreen: boolean) => {
        const style = isLargeScreen ? largeScreenStyle : smallScreenStyle;
        return materials.map((material, index) => (
            /* eslint-disable @next/next/no-img-element */
            <img
                key={index}
                src={`/materiaux/${material.src}`}
                alt={material.alt}
                className={`absolute ${style[index].position} ${style[index].rotation} w-[35%] sm:w-[18%] lg:w-[18%] xl:w-[15%] object-cover border-3 border-primary shadow-lg transition-all duration-300`}
            />
        ))
    }

    return (
        <>
            <SEO
                title="Matériaux | Jean-Claude Larrivé - Tapissier décorateur à Auxerre"
                description="Découvrez les matériaux utilisés : tissus durables avec certifications Green Line, H2OH, Pet friendly, rPET. Matériaux choisis pour leur qualité, confort et respect de l’environnement."
                keywords="matériaux durables, tissus écologiques, Green Line, H2OH, Pet friendly, rPET, tissus recyclés, artisanat, motifs, uni Jean-Claude Larrivé"
            />
            <PageLayout className="p-10">
                <div className="w-full">
                    <h1 className="text-4xl parisienne-regular text-primary">Les matériaux utilisés</h1>
                    <div className="relative w-full h-[500px] lg:h-[550px] xl:h-[500px] mt-10 hidden sm:block">
                        {getTextBlock()}
                        {getImageList(true)}
                    </div>
                    <div className="block sm:hidden mt-10">
                        {getTextBlock()}
                        <div className="w-full h-[100vw] relative">
                            {getImageList(false)}
                        </div>
                    </div>
                    <div className="z-5 card card-border border-base-300 bg-base-200 rounded-md shadow-2xl h-fit w-fit mx-auto mt-[1vw] sm:mt-0">
                        <div className="card-body flex flex-row py-4 gap-4">
                            {
                                pictos.map((picto, index) => (
                                    <div key={index} className="sm:tooltip sm:tooltip-primary inline-block mr-2" data-tip={picto.alt}>
                                        <img src={`/pictos/${picto.src}`} alt={picto.alt} className="w-[12vh]" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    )
}