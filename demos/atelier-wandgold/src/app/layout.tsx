import type { Metadata } from "next";
import DemoBar from "@/components/DemoBar";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SITE, SEO_KEYWORDS } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${SITE.name} | Malermeister & Malerbetrieb ${SITE.city}`,
  description: SITE.description,
  keywords: SEO_KEYWORDS,
  robots: { index: false, follow: false },
  openGraph: {
    title: `${SITE.name} – Malerbetrieb ${SITE.city}`,
    description: SITE.description,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="hasDemoBar">
        <DemoBar />
        <SiteHeader />
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
