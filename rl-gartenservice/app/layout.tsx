import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { preload } from "react-dom";
import { Consent } from "@/components/Consent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { hero, site } from "@/content/site";
import { ogImage } from "@/lib/jsonld";
import "./globals.css";

const body = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | RL Gartenservice",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  preload(hero.imageMobile, { as: "image", fetchPriority: "high", media: "(max-width: 719px)" });
  preload(hero.image, { as: "image", fetchPriority: "high", media: "(min-width: 720px)" });
  return (
    <html lang="de" className={body.variable}>
      <body>
        <Reveal />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <Consent />
      </body>
    </html>
  );
}
