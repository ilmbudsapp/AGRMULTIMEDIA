import { BUSINESS } from "./siteRoutes";

/**
 * Complete LocalBusiness Schema.org JSON-LD with all required fields
 * for E-E-A-T, GEO/AEO optimization and Google August 2026 update compliance
 */
export function enhancedLocalBusinessNode(pageUrl: string) {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.url}/agr-logo-white.webp`,
      width: "512",
      height: "512",
    },
    image: {
      "@type": "ImageObject",
      url: `${BUSINESS.url}/og-image.jpg`,
      width: "1200",
      height: "630",
    },
    description:
      "Webdesign, SEO, GEO/AEO, Video und Grafik für Handwerk, Dienstleister und KMU in Baden-Württemberg. Persönliches Studio in Geislingen an der Steige.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.6233",
      longitude: "9.8283",
    },
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank Transfer, Credit Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Geislingen an der Steige",
      },
      {
        "@type": "City",
        name: "Göppingen",
      },
      {
        "@type": "City",
        name: "Ulm",
      },
      {
        "@type": "AdministrativeArea",
        name: "Landkreis Göppingen",
      },
      {
        "@type": "AdministrativeArea",
        name: "Baden-Württemberg",
      },
      {
        "@type": "Country",
        name: "Germany",
      },
    ],
    founder: {
      "@type": "Person",
      "@id": `${BUSINESS.url}/#person`,
      name: BUSINESS.owner,
      givenName: "Agron",
      familyName: "Osmani",
      jobTitle: "Founder & Creative Lead",
      url: "https://www.linkedin.com/in/agron-osmani-228947266/",
      email: BUSINESS.email,
      telephone: BUSINESS.phone,
      description:
        "Gründer und Creative Lead von AGR Multimedia. Spezialisiert auf Webdesign, lokales SEO, GEO/AEO und Multimedia für KMU in Baden-Württemberg. Über 5 Jahre Erfahrung mit Referenzprojekten in Handwerk und Dienstleistung.",
      knowsAbout: [
        "Web design",
        "Small business websites",
        "Graphic design",
        "Brand identity",
        "Video production",
        "Local SEO",
        "GEO optimization",
        "AEO optimization",
      ],
      sameAs: [
        "https://www.linkedin.com/in/agron-osmani-228947266/",
        "https://www.facebook.com/halidosmani74",
        "https://www.instagram.com/agrondesign/",
        "https://www.youtube.com/@AGRMultimedia",
      ],
    },
    sameAs: [
      "https://www.facebook.com/halidosmani74",
      "https://www.instagram.com/agrondesign/",
      "https://www.linkedin.com/in/agron-osmani-228947266/",
      "https://www.youtube.com/@AGRMultimedia",
      "https://wa.me/4915560873124",
      "https://g.page/r/agr-multimedia-reviews",
    ],
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Client Testimonial",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Professionelle Arbeit, schnelle Kommunikation und top Ergebnisse. Website ist modern und SEO-optimiert.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AGR Multimedia Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Webdesign für lokale Firmen",
            description: "Business-Websites mit SEO, GEO/AEO für Handwerk und KMU",
            category: "Web Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Lokales SEO",
            description: "Sichtbarkeit bei Google und Maps für regionale Suchanfragen",
            category: "SEO Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video & Motion Design",
            description: "Showreels, Social-Clips, Corporate Videos",
            category: "Video Production",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Grafikdesign & Branding",
            description: "Logo, Corporate Design, Print Materialien",
            category: "Graphic Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Content & Multimedia",
            description: "AI-gestützte Content-Erstellung mit menschlicher Qualitätskontrolle",
            category: "Content Creation",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      contactType: "customer service",
      availableLanguage: ["de", "en"],
      areaServed: "DE",
    },
    slogan: "Moderne Websites, die Kunden bringen",
    award: "Grade A+ SEO/AEO/GEO Audit (seoscore.tools, August 2026)",
  };
}

/**
 * Enhanced Article schema for blog posts
 */
export function enhancedArticleNode(
  url: string,
  title: string,
  description: string,
  datePublished: string,
  dateModified: string,
  imageUrl?: string
) {
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      "@id": `${BUSINESS.url}/#person`,
      name: BUSINESS.owner,
      url: "https://www.linkedin.com/in/agron-osmani-228947266/",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: {
        "@type": "ImageObject",
        url: `${BUSINESS.url}/agr-logo-white.webp`,
        width: "512",
        height: "512",
      },
    },
    image: imageUrl
      ? {
          "@type": "ImageObject",
          url: imageUrl,
          width: "1200",
          height: "630",
        }
      : undefined,
    inLanguage: "de",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
