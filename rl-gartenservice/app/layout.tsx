import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/content/site";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

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
    images: [
      {
        url: "/media/hero-team.jpg",
        alt: "Zwei Gärtner von RL Gartenservice bei der Arbeit im Garten",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body>
        <Reveal />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
