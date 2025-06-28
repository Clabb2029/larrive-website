// components/SEO.js
import Head from 'next/head'

export default function SEO({ title, description, keywords }: { title: string, description: string, keywords: string }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Jean-Claude Larrivé" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
    )
}
