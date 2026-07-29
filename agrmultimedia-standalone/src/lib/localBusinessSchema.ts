import { BUSINESS } from "@/lib/siteRoutes";

export function localBusinessNode(pageUrl = `${BUSINESS.url}/`) {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Webdesign und SEO in Geislingen an der Steige — professionelle Websites für Handwerk, Dienstleister und kleine Unternehmen in der Region.",
    url: pageUrl,
    image: `${BUSINESS.url}/og-image.jpg`,
    logo: `${BUSINESS.url}/agr-logo-white.webp`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.6242,
      longitude: 9.8272,
    },
    areaServed: [
      { "@type": "City", name: "Geislingen an der Steige" },
      { "@type": "City", name: "Göppingen" },
      { "@type": "City", name: "Ulm" },
      { "@type": "AdministrativeArea", name: "Landkreis Göppingen" },
    ],
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
    },
    sameAs: [
      "https://www.facebook.com/halidosmani74",
      "https://www.instagram.com/agrondesign/",
      "https://www.linkedin.com/in/agron-osmani-228947266/",
      "https://wa.me/4915560873124",
    ],
    knowsAbout: [
      "Webdesign",
      "Lokales SEO",
      "Responsive Webdesign",
      "WordPress",
      "Kleinunternehmen Websites",
    ],
  };
}

export function faqPageNode(
  pageUrl: string,
  items: ReadonlyArray<{ readonly question: string; readonly answer: string }>,
) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
