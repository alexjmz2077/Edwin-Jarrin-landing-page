import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edwin Jarrín Rivadeneira - Asambleísta de Morona Santiago",
  description:
    "Sitio oficial del Dr. Edwin Jarrín Rivadeneira, Asambleísta del Ecuador por la provincia de Morona Santiago",
  icons: {
    icon: [
      { url: "/logo-Edwin.png", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/logo-Edwin.png",
    shortcut: "/logo-Edwin.png",
  },
  openGraph: {
    title: "Edwin Jarrín Rivadeneira",
    description: "Asambleísta del Ecuador por la provincia de Morona Santiago",
    url: "https://www.edwinjarrin.com",
    siteName: "Edwin Jarrín Rivadeneira",
    images: [
      {
        url: "/logo-Edwin.png",
        width: 1200,
        height: 630,
        alt: "Edwin Jarrín Rivadeneira",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin Jarrín Rivadeneira",
    description: "Asambleísta del Ecuador por la provincia de Morona Santiago",
    images: ["/logo-Edwin.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo-Edwin.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-Edwin.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Edwin Jarrín Rivadeneira",
                jobTitle: "Asambleísta",
                description: "Asambleísta del Ecuador por la provincia de Morona Santiago",
                url: "https://www.edwinjarrin.com",
                image: "https://www.edwinjarrin.com/logo-Edwin.png",
                sameAs: [
                  "https://www.facebook.com/edwinjarrinrivadeneira",
                  "https://www.instagram.com/edwinjarrinec/",
                  "https://x.com/edwinjarrinec"
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Edwin Jarrín Rivadeneira",
                url: "https://www.edwinjarrin.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.edwinjarrin.com/logo-Edwin.png",
                  width: 512,
                  height: 512
                },
                sameAs: [
                  "https://www.facebook.com/edwinjarrinrivadeneira",
                  "https://www.instagram.com/edwinjarrinec/",
                  "https://x.com/edwinjarrinec"
                ],
              }
            ]),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-D2N3V1B0HP" />
      </body>
    </html>
  )
}
