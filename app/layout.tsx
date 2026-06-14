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
  title: {
    default: "Dicars — Importación de coches desde Alemania",
    template: "%s | Dicars",
  },
  description:
    "Importamos tu coche desde Alemania a España: búsqueda, inspección, transporte y documentación sin sorpresas.",
  icons: {
    icon: [{ url: "/logo1.png", type: "image/png" }],
    apple: "/logo1.png",
    shortcut: "/logo1.png",
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
