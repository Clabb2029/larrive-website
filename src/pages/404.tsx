import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PageLayout } from '@/components/PageLayout'
import TextBlock from '@/components/textBlock';

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/");
        }, 2500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <PageLayout>
            <TextBlock placement="bottom-right" className="w-fit p-4 my-auto mx-auto">
                <p>Page introuvable. Redirection vers l’accueil...</p>
            </TextBlock>
        </PageLayout>
    )
}