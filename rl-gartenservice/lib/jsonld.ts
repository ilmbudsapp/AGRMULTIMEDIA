import { places, serviceAreas, site, socials } from "@/content/site";

export const businessId = `${site.url}/#betrieb`;
export const websiteId = `${site.url}/#website`;

export const ogImage = {
  url: "/media/og-share.jpg",
  width: 1200,
  height: 630,
  alt: "RL Gartenservice: gepflegter Garten mit Rasen, Holzterrasse und Hecke",
};

const sameAs = [...socials.filter((item) => item.href).map((item) => item.href), site.mapsUrl];

export function businessNode() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: site.name,
    url: site.url,
    image: `${site.url}${ogImage.url}`,
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.4314932,
      longitude: 10.8798824,
    },
    founder: { "@type": "Person", name: site.owner },
    hasMap: site.mapsUrl,
    areaServed: [
      ...places.map((name) => ({ "@type": "City", name })),
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 48.4314932,
          longitude: 10.8798824,
        },
        geoRadius: 70000,
      },
    ],
    sameAs,
    makesOffer: serviceAreas.map((area) => ({
      "@type": "Offer",
      url: `${site.url}/${area.id}`,
      itemOffered: {
        "@type": "Service",
        "@id": `${site.url}/${area.id}#leistung`,
        name: area.title,
        description: area.intro,
        url: `${site.url}/${area.id}`,
        provider: { "@id": businessId },
        areaServed: "Augsburg und Umgebung bis 70 km",
      },
    })),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "de-DE",
    publisher: { "@id": businessId },
  };
}

export function pageUrl(path: string) {
  return path === "/" ? site.url : `${site.url}${path}`;
}

export function webPageNode(path: string, name: string, description: string) {
  const url = pageUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    inLanguage: "de-DE",
  };
}

export function breadcrumbNode(path: string, items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
