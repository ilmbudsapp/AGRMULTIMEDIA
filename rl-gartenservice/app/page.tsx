import type { Metadata } from "next";
import { Area } from "@/components/Area";
import { Hero } from "@/components/Hero";
import { HomeCompare } from "@/components/HomeCompare";
import { Leistungen } from "@/components/Leistungen";
import { Spotlight } from "@/components/Spotlight";
import { places, serviceAreas, site, socials } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}/media/hero-desktop.jpg`,
  logo: `${site.url}/logo.png`,
  telephone: "+491777928689",
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: "DE",
  },
  founder: { "@type": "Person", name: site.owner },
  areaServed: places.map((name) => ({ "@type": "City", name })),
  sameAs: socials.filter((item) => item.href).map((item) => item.href),
  makesOffer: serviceAreas.map((area) => ({
    "@type": "Offer",
    url: `${site.url}/${area.id}`,
    itemOffered: {
      "@type": "Service",
      name: area.title,
      description: area.intro,
      url: `${site.url}/${area.id}`,
      areaServed: "Augsburg und Umgebung",
    },
  })),
};

export default function HomePage() {
  return (
    <main id="inhalt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Leistungen />
      <Spotlight />
      <HomeCompare />
      <Area />
    </main>
  );
}
