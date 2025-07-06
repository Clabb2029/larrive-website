import Head from 'next/head'

export default function SEO({ title, description, keywords, canonical }: { title: string, description: string, keywords: string, canonical?: string }) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Jean-Claude Larrivé" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={`https://www.atelier-larrive.fr ${canonical}`} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/head_icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/head_icons/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/head_icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/head_icons/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/head_icons/android-chrome-512x512.png" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "LocalBusiness",
                                "name": "Jean-Claude Larrivé",
                                "alternateName": "Jean Claude Larrivé",
                                "jobTitle": "Tapissier décorateur, tapissier d'ameublement",
                                "image": "https://www.atelier-larrive.fr/interieur.jpg",
                                "logo": "https://www.atelier-larrive.fr/logo-schema.png",
                                "telephone": "06 87 12 53 85",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "26 rue Haute-Perrière",
                                    "addressLocality": "Auxerre",
                                    "postalCode": "89000",
                                    "addressCountry": "FR"
                                },
                                "url": "https://www.atelier-larrive.fr",
                                "description": "Tapissier décorateur à Auxerre. Réfection de fauteuils, sièges et rideaux d'intérieur.",
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 47.7924256,
                                    "longitude": 3.5695084
                                },
                                "sameAs": [
                                    "https://www.facebook.com/jeanclaude.larrive.16"
                                ],
                                "areaServed": [
                                    { "@type": "Place", "name": "Auxerre" },
                                    { "@type": "Place", "name": "Avallon" }
                                ]
                            },
                            {
                                "@type": "Person",
                                "name": "Jean-Claude Larrivé",
                                "alternateName": "Jean Claude Larrivé",
                                "jobTitle": "Tapissier décorateur, tapissier d'ameublement",
                                "url": "https://www.atelier-larrive.fr",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "26 rue Haute-Perrière",
                                    "addressLocality": "Auxerre",
                                    "postalCode": "89000",
                                    "addressCountry": "FR"
                                },
                                "areaServed": [
                                    { "@type": "Place", "name": "Auxerre" },
                                    { "@type": "Place", "name": "Avallon" }
                                ]
                            },
                            {
                                "@type": "Organization",
                                "name": "Jean-Claude Larrivé",
                                "alternateName": "Jean Claude Larrivé",
                                "url": "https://www.atelier-larrive.fr",
                                "founder": {
                                    "@type": "Person",
                                    "name": "Jean-Claude Larrivé"
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "26 rue Haute-Perrière",
                                    "addressLocality": "Auxerre",
                                    "postalCode": "89000",
                                    "addressCountry": "FR"
                                },
                                "logo": "https://www.atelier-larrive.fr/logo-schema.png",
                                "areaServed": [
                                    { "@type": "Place", "name": "Auxerre" },
                                    { "@type": "Place", "name": "Avallon" }
                                ]
                            }
                        ]
                    }),
                }}
            />
        </Head>
    )
}