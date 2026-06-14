import type { Metadata } from "next";
import { Montserrat, Public_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { SiteChrome } from "@/components/site-chrome";

// Montserrat: fuente primaria (titulares y marca)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Public Sans: fuente de texto (cuerpo e interfaz)
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dicars.es"),
  title: {
    default: "Dicars — Coches importados desde Alemania a España",
    template: "%s | Dicars — Coches importados de Alemania",
  },
  description:
    "Importamos coches desde Alemania a España: búsqueda, inspección, transporte y matriculación. Tu coche importado de Alemania, revisado y sin sorpresas.",
  keywords: [
    "coches importados de Alemania",
    "importar coche de Alemania",
    "importación de coches desde Alemania",
    "comprar coche en Alemania",
    "coches de importación Alemania España",
    "Dicars",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Dicars",
    title: "Dicars — Coches importados desde Alemania a España",
    description:
      "Importamos coches desde Alemania a España: búsqueda, inspección, transporte y matriculación. Tu coche importado de Alemania, revisado y sin sorpresas.",
  },
  icons: {
    icon: [{ url: "/favicondicars.png", type: "image/png" }],
    apple: "/favicondicars.png",
    shortcut: "/favicondicars.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteChrome
          header={<SiteHeader />}
          footer={
            <>
              <SiteFooter />
              <WhatsappFloat />
            </>
          }
        >
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
