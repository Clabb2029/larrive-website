import Head from 'next/head'

export default function SEO({ title, description, keywords }: { title: string, description: string, keywords: string }) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Jean-Claude Larrivé" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://www.atelier-larrive.fr" />
        </Head>
    )
}