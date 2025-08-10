import React from "react"
import type {Metadata, Viewport} from "next"
import {Lato} from "next/font/google"
import "./globals.css"
import {ThemeProvider} from "next-themes";
import MainLayout from "@/shared/ui/templates/Layout";

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-lato",
})

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#ffffff"},
        {media: "(prefers-color-scheme: dark)", color: "#000000"},
    ],
}

export const metadata: Metadata = {
    title: "Nexorf | Ingeniería de Software Personalizada - Quito, Ecuador",
    description:
        "Nexorf es una empresa ecuatoriana especializada en desarrollo de software a medida. Creamos ERP, POS, apps móviles, sitios web y e-commerce con tecnología de vanguardia.",
    keywords:
        "desarrollo software, ERP Ecuador, POS Ecuador, apps móviles, sitios web, e-commerce, Quito, software personalizado",
    authors: [{name: "Nexorf"}],
    creator: "Nexorf",
    publisher: "Nexorf",
    robots: "index, follow",
    openGraph: {
        title: "Nexorf | Ingeniería de Software Personalizada",
        description: "Tecnología con propósito, diseño con visión, soluciones con resultados.",
        url: "https://nexorf.com",
        siteName: "Nexorf",
        locale: "es_EC",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nexorf | Ingeniería de Software Personalizada",
        description: "Tecnología con propósito, diseño con visión, soluciones con resultados.",
    },
    icons: {
        icon: "/favicon.ico",
    },
}


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {


    return (
        <html lang="es"
              className={lato.variable}
              suppressHydrationWarning
        >
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
      (function() {
        const theme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const mode = theme === 'dark' || (!theme && systemDark) ? 'dark' : 'light';
        document.documentElement.setAttribute('data-mode', mode);
      })();
    `,
                }}
            />
        </head>
        <body
            className={`${lato.className} antialiased transition-colors duration-500 ease-in-out`}
        >
        <ThemeProvider attribute="data-mode"
                       defaultTheme="system"
                       enableSystem
                       disableTransitionOnChange
        >
            <MainLayout>
                {children}
            </MainLayout>
        </ThemeProvider>
        </body>
        </html>
    )
}
