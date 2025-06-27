import ContactButton from "@/components/contactButton";
import { PageLayout } from "@/components/PageLayout";
import TextBlock from "@/components/textBlock";
import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export default function Realisations() {

    const seats = [
        { src: "fauteuil-1.png", alt: "Fauteuil blanc fleuri à motifs papillons" },
        { src: "fauteuil-2.png", alt: "Fauteuil noir fleuri" },
        { src: "fauteuil-3.png", alt: "Fauteuil noir uni" },
        { src: "fauteuil-4.png", alt: "Fauteuil en jean" },
        { src: "fauteuil-5.png", alt: "Fauteuil vert uni" },
        { src: "fauteuil-6.png", alt: "Fauteuil noir à motifs" },
        { src: "fauteuil-7.png", alt: "Fauteuil rouge fleuri" },
        { src: "fauteuil-8.png", alt: "Fauteuil blanc à motifs bleus" },
        { src: "fauteuil-9.png", alt: "Fauteuil blanc à motifs fleuris bleus" },
        { src: "fauteuil-10.png", alt: "Fauteuil marron uni" },
        { src: "fauteuil-11.png", alt: "Chaise blanche à motifs fleuris" },
        { src: "fauteuil-12.png", alt: "Fauteuil blanc à motifs fleuris noirs" },
        { src: "fauteuil-13.png", alt: "Fauteuil gris à motifs géométriques noirs" },
        { src: "fauteuil-14.png", alt: "Fauteuil blanc à motifs géométriques gris" }
    ];

    const largeScreenSeatsStyle = [
        { position: "sm:-top-[2%] sm:right-[40%] ", rotation: "-rotate-10" },
        { position: "sm:top-0 sm:right-[22%]", rotation: "rotate-10" },
        { position: "sm:-top-[10%] sm:right-[5%] ", rotation: "-rotate-10" },
        { position: "sm:top-[35%] sm:right-[62%] ", rotation: "-rotate-10" },
        { position: "sm:top-[30%] sm:right-[30%] ", rotation: "rotate-10" },
        { position: "sm:top-[32%] sm:left-[8%]", rotation: "rotate-10" },
        { position: "sm:top-[28%] sm:right-0", rotation: "rotate-10" },
        { position: "sm:top-[32%] sm:right-[13%]", rotation: "-rotate-10" },
        { position: "sm:top-[30%] sm:right-[48%]", rotation: "rotate-10" },
        { position: "sm:bottom-[0%] sm:right-[58%]", rotation: "rotate-10" },
        { position: "sm:bottom-[0%] sm:right-[40%] ", rotation: "-rotate-10" },
        { position: "sm:bottom-0 sm:right-[22%]", rotation: "rotate-10" },
        { position: "sm:bottom-[0%] sm:left-[13%]", rotation: "-rotate-10" },
        { position: "sm:bottom-[8%] sm:right-[2%]", rotation: "-rotate-10" },
    ];

    const smallScreenSeatsStyle = [
        { position: "top-0 left-[2%]", rotation: "rotate-10" },
        { position: "top-[2%] left-[35%]", rotation: "-rotate-15" },
        { position: "top-0 right-[2%]", rotation: "rotate-10" },
        { position: "top-[22%] left-[2%]", rotation: "-rotate-5" },
        { position: "top-[24%] left-[32%]", rotation: "rotate-10" },
        { position: "top-[22%] right-[5%]", rotation: "-rotate-10" },
        { position: "top-[38%] left-[2%]", rotation: "rotate-10" },
        { position: "top-[45%] left-[38%]", rotation: "-rotate-10" },
        { position: "top-[40%] right-[2%]", rotation: "rotate-10" },
        { position: "top-[55%] left-[2%]", rotation: "-rotate-10" },
        { position: "top-[64%] left-[32%]", rotation: "rotate-10" },
        { position: "bottom-[2%] left-[15%]", rotation: "rotate-10" },
        { position: "top-[60%] right-[5%]", rotation: "-rotate-10" },
        { position: "bottom-0 right-[10%]", rotation: "-rotate-10" }
    ];

    const getSeatsImageList = (isLargeScreen: boolean) => {
        const style = isLargeScreen ? largeScreenSeatsStyle : smallScreenSeatsStyle;
        return seats.map((seat, index) => (
            /* eslint-disable @next/next/no-img-element */
            <img
                key={index}
                src={`/creations/fauteuils/${seat.src}`}
                alt={seat.alt}
                className={`absolute ${style[index].position} ${style[index].rotation} w-[29%] sm:max-w-[14%] h-auto object-cover bg-base-100 border-3 border-primary shadow-lg transition-all duration-300`}
            />
        ))
    }

    const getSeatTextBlock = () => {
        return (
            <TextBlock placement="top-right" className="w-full sm:w-1/3 p-4 text-xs sm:text-[0.6rem] md:text-xs lg:text-sm mt-10 mb-10 sm:mb-0">
                {/* eslint-disable react/no-unescaped-entities */}
                <p>Je restaure et répare tous types de sièges en mettant en valeur leur caractère, qu'il soit classique, contemporain ou plus atypique.</p>
            </TextBlock>
        )
    }

    const otherCreations = [
        { src: "autre-1.png", alt: "Canapé avec assise noire et dossier noir à motifs fleuris blancs" },
        { src: "autre-2.png", alt: "Banquette grise" },
        { src: "autre-3.png", alt: "Canapé gris à motifs géométriques de différentes couleurs" },
        { src: "autre-4.png", alt: "Canapé blanc à motifs noirs (vache)" },
        { src: "autre-5.png", alt: "Canapé blanc à motifs géométriques de différentes couleurs" },
        { src: "autre-6.png", alt: "Tête de lit de différentes couleurs" },
        { src: "autre-7.png", alt: "Lampe de chevet à motifs fleuris" },
        { src: "autre-8.png", alt: "Canapé gris avec motifs fleuris argentés" }
    ];

    const largeScreenOtherCreationsStyle = [
        { position: "sm:top-[5%] sm:left-[20%]", rotation: "rotate-10" },
        { position: "sm:top-[25%] sm:left-[10%] xl:top-[28%] xl:left-0", rotation: "-rotate-10" },
        { position: "sm:top-[26%] sm:left-[28%] xl:top-[30%] xl:left-[15%]", rotation: "rotate-10" },
        { position: "sm:top-[24%] sm:left-[45%] xl:left-[50%]", rotation: "-rotate-10 xl:rotate-10" },
        { position: "sm:bottom-[10%] sm:left-[25%] xl:bottom-[0%] xl:left-[19%]", rotation: "rotate-10 xl:-rotate-10" },
        { position: "sm:top-[48%] sm:left-[57%] xl:top-[60%] xl:left-[50%] z-2", rotation: "rotate-10 xl:-rotate-10" },
        { position: "sm:bottom-[3%] sm:left-[42%] xl:left-[35%]", rotation: "-rotate-10" },
        { position: "sm:bottom-[10%] sm:left-[58%] xl:bottom-[16%] xl:left-[65%]", rotation: "-rotate-5 xl:rotate-10" }
    ];

    const smallScreenOtherCreationsStyle = [
        { position: "top-[10%] left-[35%]", rotation: "rotate-10" },
        { position: "top-[10%] left-[5%]", rotation: "-rotate-15" },
        { position: "top-[30%] left-[38%]", rotation: "rotate-10" },
        { position: "top-[15%] right-[6%]", rotation: "-rotate-10" },
        { position: "bottom-[16%] left-[23%]", rotation: "-rotate-5" },
        { position: "bottom-[6%] left-[50%]", rotation: "rotate-10" },
        { position: "bottom-[20%] right-[5%]", rotation: "-rotate-10" },
        { position: "top-[48%] left-[8%]", rotation: "rotate-10" }
    ];

    const getOtherCreationsImageList = (isLargeScreen: boolean) => {
        const style = isLargeScreen ? largeScreenOtherCreationsStyle : smallScreenOtherCreationsStyle;
        return otherCreations.map((creation, index) => (
            /* eslint-disable @next/next/no-img-element */
            <img
                key={index}
                src={`/creations/autres/${creation.src}`}
                alt={creation.alt}
                className={`absolute ${style[index].position} ${style[index].rotation} w-[29%] sm:max-w-[16%] h-auto object-cover bg-base-100 border-3 border-primary shadow-lg transition-all duration-300`}
            />
        ))
    }

    const getOtherCreationsTextBlock = () => {
        return (
            <TextBlock placement="top-left" className="w-full sm:w-1/3 ms-auto p-4 text-xs lg:text-sm mb-10 sm:mb-0">
                <p>Au-delà des sièges, je redonne aussi vie des pièces plus imposantes comme des canapés, banquettes, têtes et pieds de lit.</p>
            </TextBlock>
        )
    }

    useEffect(() => {
        const startTime = 42;
        const endTime = 55;

        let player: any;
        let checkInterval: NodeJS.Timeout;


        const initPlayer = () => {
            player = new window.YT.Player('player', {
                height: '100%',
                width: '100%',
                videoId: 'A8F-QOL9giI',
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    start: startTime,
                    end: endTime,
                    modestbranding: 1,
                    rel: 0
                },
                events: {
                    onReady: (event: any) => {
                        event.target.mute();
                        event.target.seekTo(startTime);
                        event.target.playVideo();
                    },
                    onStateChange: (event: any) => {
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            clearInterval(checkInterval);
                            checkInterval = setInterval(() => {
                                if (player && typeof player.getCurrentTime === "function") {
                                    const currentTime = player.getCurrentTime();
                                    if (currentTime >= endTime) {
                                        player.seekTo(startTime);
                                    }
                                }
                            }, 500);
                        }
                    }
                }
            });
        };

        const loadYoutubeAPI = () => {
            if (typeof window !== 'undefined') {
                if (!window.YT || !window.YT.Player) {
                    const tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    const firstScriptTag = document.getElementsByTagName('script')[0];
                    if (firstScriptTag?.parentNode) {
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    }
                    window.onYouTubeIframeAPIReady = initPlayer;
                } else {
                    initPlayer();
                }
            }
        };

        loadYoutubeAPI();

        return () => {
            clearInterval(checkInterval);
            if (player && typeof player.destroy === "function") {
                player.destroy();
            }
        };
    }, []);

    return (
        <PageLayout className="p-10">
            <div className="w-full">
                <h1 className="text-4xl parisienne-regular text-primary">Mes réalisations</h1>
                <div className="relative w-full aspect-[2/1] hidden sm:block">
                    {getSeatTextBlock()}
                    {getSeatsImageList(true)}
                </div>
                <div className="block sm:hidden mt-10">
                    {getSeatTextBlock()}
                    <div className="w-full h-[150vw] relative">
                        {getSeatsImageList(false)}
                    </div>
                </div>
                <div className="relative w-full aspect-[2/1] xl:max-h-[70vh] mt-20 hidden sm:block">
                    {getOtherCreationsTextBlock()}
                    {getOtherCreationsImageList(true)}
                </div>
                <div className="block sm:hidden mt-10">
                    {getOtherCreationsTextBlock()}
                    <div className="w-full h-[90vw] relative">
                        {getOtherCreationsImageList(false)}
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
                    <TextBlock placement="right" className="w-fit h-fit text-xs lg:text-sm p-4 mb-10 md:my-auto">
                        <p>J’interviens également dans la confection sur mesure et l’installation de rideaux, doubles-rideaux et différents types de stores d’intérieur : stores enrouleurs, bateaux, à lamelles verticales ou encore cloisons japonaises.</p>
                        <p>Mon savoir-faire s’adresse aussi bien aux particuliers qu’aux professionnels, avec un souci constant de qualité et de finition.</p>
                        <p>Chaque pièce est réalisée avec soin dans mon atelier, puis installée chez vous pour sublimer votre intérieur jusque dans les moindres détails.</p>
                    </TextBlock>
                    <div id="player" className="w-full aspect-video max-w-full col-span-2" />
                </div>
                <ContactButton buttonText="Demander un devis" className="mt-10 md:mt-20" />
            </div>
        </PageLayout>
    )
}