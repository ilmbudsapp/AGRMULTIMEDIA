import { About } from "@/components/About";
import { Area } from "@/components/Area";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { ServiceSections } from "@/components/ServiceSections";
import { places, serviceAreas, site, socials } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}/media/hero-terrasse.jpg`,
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
    itemOffered: {
      "@type": "Service",
      name: area.title,
      description: area.intro,
      areaServed: "Augsburg und Umgebung",
    },
  })),
};

export default function HomePage() {
  return (
    <main id="inhalt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ServiceSections />
      <About />
      <Gallery />
      <Area />
      <Contact />
    </main>
  );
}
