import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edwin Jarrín Rivadeneira",
  description:
    "Sitio oficial del Dr. Edwin Jarrín Rivadeneira, Asambleísta del Ecuador por la provincia de Morona Santiago",
  icons: {
    icon: [
      {
        url: "/logo-Edwin.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-Edwin.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo-Edwin.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-D2N3V1B0HP" />
      </body>
    </html>
  )
}
