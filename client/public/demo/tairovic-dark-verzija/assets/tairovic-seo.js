/**
 * SEO / GEO / AEO — canonical, Open Graph, Twitter, JSON-LD @graph.
 * Tairovic domain only — no AGR URLs.
 */
(function (global) {
  const ORIGIN = "https://www.tairovic-gebaeudeservice.de";
  const OG_IMAGE = ORIGIN + "/demo/tairovic-dark-verzija/assets/logo.webp";

  const PATH_BY_PAGE = {
    home: "/",
    about: "/ueber-uns",
    reinigung: "/gebaeudereinigung",
    hausmeister: "/hausmeisterservice",
    garten: "/gartenpflege",
    winter: "/winterdienst",
    arbeiten: "/unsere-arbeiten",
    kontakt: "/kontakt",
    impressum: "/impressum",
    datenschutz: "/datenschutz",
  };

  const PAGE_NAMES = {
    home: "Startseite",
    about: "Über uns",
    reinigung: "Gebäudereinigung",
    hausmeister: "Hausmeisterservice",
    garten: "Gartenpflege",
    winter: "Winterdienst",
    arbeiten: "Unsere Arbeiten",
    kontakt: "Kontakt",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  };

  const SLUG_TO_PAGE = {
    "": "home",
    "ueber-uns": "about",
    "gebaeudereinigung": "reinigung",
    "hausmeisterservice": "hausmeister",
    "gartenpflege": "garten",
    "winterdienst": "winter",
    "unsere-arbeiten": "arbeiten",
    "kontakt": "kontakt",
    "impressum": "impressum",
    "datenschutz": "datenschutz",
  };

  const TITLES = {
    home: "Tairovic Gebäudeservice | Gebäudereinigung & Hausmeisterservice in Neuwied",
    reinigung: "Gebäudereinigung Neuwied | Treppenhausreinigung — Tairovic",
    hausmeister: "Hausmeisterservice Neuwied | Objektbetreuung — Tairovic",
    garten: "Gartenpflege Neuwied | Außenanlagenpflege — Tairovic",
    winter: "Winterdienst Neuwied | Schneeräumung & Streudienst — Tairovic",
    arbeiten: "Unsere Arbeiten | Gebäudereinigung Neuwied — Tairovic",
    about: "Über uns | Tairovic Gebäudeservice Neuwied",
    kontakt: "Kontakt & Angebot | Tairovic Gebäudeservice Neuwied",
    impressum: "Impressum — Tairovic Gebäudeservice",
    datenschutz: "Datenschutzerklärung — Tairovic Gebäudeservice",
  };

  const META = {
    home: "Professionelle Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst in Neuwied. Jetzt kostenloses Angebot anfordern.",
    reinigung:
      "Gebäudereinigung Neuwied: Treppenhausreinigung, Grundreinigung und Objektreinigung für Wohnanlagen und Gewerbe. Individuelles Angebot von Tairovic.",
    hausmeister:
      "Hausmeisterservice Neuwied: Objektkontrollen, Kleinreparaturen und zuverlässige Objektbetreuung für Wohnanlagen und Gewerbe.",
    garten:
      "Gartenpflege Neuwied: Rasen, Hecken, Beete und Außenanlagenpflege. Saisonale Pflege für Wohnanlagen und Privatkunden.",
    winter:
      "Winterdienst Neuwied: Schneeräumung, Streudienst und sichere Wege für Wohnanlagen, Gewerbeobjekte und Privatkunden.",
    arbeiten:
      "Unsere Arbeiten: Gebäudereinigung, Treppenhausreinigung und Vorher-Nachher-Ergebnisse in Neuwied — Tairovic Gebäudeservice.",
    about:
      "Familie Tairovic — Gebäudeservice aus Neuwied. Gebäudereinigung, Hausmeister, Garten und Winterdienst aus einer Hand.",
    kontakt:
      "Kontakt Tairovic Gebäudeservice Neuwied: Angebot für Reinigung, Hausmeister, Gartenpflege oder Winterdienst anfragen.",
    impressum: "Impressum — Tairovic Gebäudeservice, Neuwied. Angaben gemäß DDG.",
    datenschutz: "Datenschutzerklärung — Tairovic Gebäudeservice, Neuwied.",
  };

  const SERVICE_NAMES = [
    "Gebäudereinigung",
    "Hausmeisterservice",
    "Gartenpflege",
    "Winterdienst",
    "Objektbetreuung",
    "Treppenhausreinigung",
    "Außenanlagenpflege",
    "Schneeräumung",
    "Streudienst",
  ];

  const BUSINESS_ID = ORIGIN + "/#business";
  const WEBSITE_ID = ORIGIN + "/#website";

  function absoluteUrl(page) {
    const path = PATH_BY_PAGE[page] ?? "/";
    return path === "/" ? ORIGIN + "/" : ORIGIN + path;
  }

  function pageFromPathname() {
    const slug = location.pathname.replace(/^\/+|\/+$/g, "");
    return SLUG_TO_PAGE[slug] ?? null;
  }

  function resolvePageKey(page) {
    if (global.TAIROVIC_SITE?.PROD) {
      const fromPath = pageFromPathname();
      if (fromPath) return fromPath;
    }
    return page && PATH_BY_PAGE[page] ? page : "home";
  }

  function faqDomSectionId(page) {
    if (page === "arbeiten") return "reinigung";
    return page;
  }

  function localBusinessNode() {
    return {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "Tairovic Gebäudeservice",
      url: ORIGIN + "/",
      image: OG_IMAGE,
      telephone: "+49-1520-8531992",
      email: "ramizajet2018@gmail.com",
      founder: {
        "@type": "Person",
        name: "Mevlida Tairovic",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kirchstr. 32",
        postalCode: "56564",
        addressLocality: "Neuwied",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.4336,
        longitude: 7.4711,
      },
      areaServed: [
        { "@type": "City", name: "Neuwied" },
        { "@type": "City", name: "Koblenz" },
        { "@type": "City", name: "Andernach" },
        { "@type": "City", name: "Bendorf" },
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungen",
        itemListElement: SERVICE_NAMES.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    };
  }

  function professionalServiceNode() {
    return {
      "@type": "ProfessionalService",
      "@id": ORIGIN + "/#professional-service",
      name: "Tairovic Gebäudeservice — Hausmeisterservice & Objektbetreuung",
      url: ORIGIN + "/",
      provider: { "@id": BUSINESS_ID },
      areaServed: [
        { "@type": "City", name: "Neuwied" },
        { "@type": "City", name: "Koblenz" },
        { "@type": "City", name: "Andernach" },
        { "@type": "City", name: "Bendorf" },
      ],
    };
  }

  function cleaningServiceNode() {
    return {
      "@type": "CleaningService",
      "@id": ORIGIN + "/#cleaning-service",
      name: "Tairovic Gebäudereinigung",
      url: ORIGIN + "/gebaeudereinigung",
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "City", name: "Neuwied" },
    };
  }

  function websiteNode() {
    return {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: ORIGIN + "/",
      name: "Tairovic Gebäudeservice",
      description: META.home,
      publisher: { "@id": BUSINESS_ID },
      inLanguage: "de-DE",
    };
  }

  function breadcrumbSchema(page) {
    const url = absoluteUrl(page);
    const items = [
      { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN + "/" },
    ];
    if (page && page !== "home") {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: PAGE_NAMES[page] || page,
        item: url,
      });
    }
    return {
      "@type": "BreadcrumbList",
      "@id": url + "#breadcrumb",
      itemListElement: items,
    };
  }

  function faqFromPage(page) {
    const sectionId = faqDomSectionId(page);
    const root = document.getElementById(sectionId);
    if (!root) return null;
    const faq = root.querySelector('.faq-list[itemtype="https://schema.org/FAQPage"]');
    if (!faq) return null;
    const entities = [];
    faq.querySelectorAll(".faq-item").forEach((el) => {
      const q = el.querySelector('[itemprop="name"]');
      const a = el.querySelector('[itemprop="text"]');
      if (!q || !a) return;
      entities.push({
        "@type": "Question",
        name: q.textContent.trim(),
        acceptedAnswer: { "@type": "Answer", text: a.textContent.trim() },
      });
    });
    if (!entities.length) return null;
    return {
      "@type": "FAQPage",
      "@id": absoluteUrl(page) + "#faq",
      mainEntity: entities,
    };
  }

  const FAQ_PAGES = new Set(["reinigung", "hausmeister", "garten", "winter", "arbeiten"]);

  function buildGraph(page) {
    const graph = [
      websiteNode(),
      localBusinessNode(),
      professionalServiceNode(),
      cleaningServiceNode(),
      breadcrumbSchema(page),
    ];
    if (FAQ_PAGES.has(page)) {
      const faq = faqFromPage(page);
      if (faq) graph.push(faq);
    }
    return { "@context": "https://schema.org", "@graph": graph };
  }

  function setMeta(attr, key, value) {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  }

  function ensureCanonical() {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    return link;
  }

  function ensureJsonLd() {
    let script = document.getElementById("ld-graph");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-graph";
      document.head.appendChild(script);
    }
    return script;
  }

  function apply(page) {
    const key = resolvePageKey(page);
    const title = TITLES[key] || TITLES.home;
    const desc = META[key] || META.home;
    const url = absoluteUrl(key);

    document.title = title;
    setMeta("name", "description", desc);
    setMeta("property", "og:site_name", "Tairovic Gebäudeservice");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", "de_DE");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", OG_IMAGE);

    ensureCanonical().href = url;

    const graph = buildGraph(key);
    ensureJsonLd().textContent = JSON.stringify(graph);
  }

  function applyLegal(page) {
    if (page !== "impressum" && page !== "datenschutz") return;
    apply(page);
  }

  function initLegalFromPath() {
    const slug = location.pathname.replace(/^\/+|\/+$/g, "");
    if (slug === "impressum" || slug === "datenschutz") applyLegal(slug);
  }

  global.TAIROVIC_SEO = {
    ORIGIN,
    TITLES,
    META,
    PATH_BY_PAGE,
    apply,
    applyLegal,
    initLegalFromPath,
    absoluteUrl,
    resolvePageKey,
    pageFromPathname,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLegalFromPath);
  } else {
    initLegalFromPath();
  }
})(window);
