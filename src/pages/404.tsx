import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PageLayout } from '@/components/PageLayout'
import TextBlock from '@/components/textBlock';
import SEO from '@/components/SEO';

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/");
        }, 2500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <SEO
                title="Page non trouvée | Tapissier à Auxerre – Jean-Claude Larrivé (Jean Claude Larrivé)"
                description="Page non trouvée. Cette page n’existe pas ou a été déplacée. Vous allez être redirigé vers l’accueil du site de Jean-Claude Larrivé, tapissier décorateur à Auxerre."
                keywords="404, page non trouvée, erreur, redirection, tapissier Auxerre, tapissier, décorateur, Auxerre, Jean-Claude Larrivé, décoration intérieure, accueil, Jean Claude Larrivé"
                canonical="/404"
            />
            <PageLayout>
                <TextBlock placement="bottom-right" className="w-fit p-4 my-auto mx-auto">
                    <p>Page introuvable. Redirection vers l’accueil...</p>
                </TextBlock>
            </PageLayout>
        </>
    )
}