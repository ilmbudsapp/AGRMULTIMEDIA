import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import DemoBar from "@/components/DemoBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyDonateButton from "@/components/StickyDonateButton";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE.shortName} | ${SITE.tagline}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: SITE.shortName,
    description: SITE.description,
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <DemoBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyDonateButton />
        <CookieConsent />
      </body>
    </html>
  );
}
