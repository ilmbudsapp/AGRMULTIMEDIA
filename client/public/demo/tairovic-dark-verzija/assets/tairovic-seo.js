/**
 * SEO / GEO / AEO — canonical, Open Graph, Twitter, JSON-LD @graph.
 * Tairovic domain only — no AGR URLs.
 */
(function (global) {
  const ORIGIN = "https://www.tairovic-gebaeudeservice.de";
  const OG_IMAGE = ORIGIN + "/demo/tairovic-dark-verzija/assets/logo.webp";
  const ASSET = ORIGIN + "/demo/tairovic-dark-verzija/assets/";

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
    home: "Gebäudereinigung Neuwied | Tairovic Gebäudeservice",
    reinigung: "Gebäudereinigung Neuwied | Treppenhaus — Tairovic",
    hausmeister: "Hausmeisterservice Neuwied | Objektbetreuung",
    garten: "Gartenpflege Neuwied | Außenanlagenpflege",
    winter: "Winterdienst Neuwied | Schneeräumung & Streudienst",
    arbeiten: "Unsere Arbeiten | Gebäudereinigung Neuwied",
    about: "Über uns | Tairovic Gebäudeservice Neuwied",
    kontakt: "Kontakt & Angebot | Tairovic Neuwied",
    impressum: "Impressum — Tairovic Gebäudeservice",
    datenschutz: "Datenschutzerklärung — Tairovic Gebäudeservice",
  };

  const META = {
    home: "Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst in Neuwied, Koblenz, Andernach und Umgebung. Tairovic Gebäudeservice — jetzt Angebot anfordern.",
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
  const ORG_ID = ORIGIN + "/#organization";
  const WEBSITE_ID = ORIGIN + "/#website";
  const AUTHOR_ID = ORIGIN + "/#author";
  const GEO_ID = ORIGIN + "/#geocoordinates";

  const SAME_AS = [
    "https://www.facebook.com/ajet.tairovic.1",
    "https://maps.google.com/?q=Kirchstr.+32,+56564+Neuwied",
    "https://de.wikipedia.org/wiki/Geb%C3%A4udereinigung",
    "https://www.wikidata.org/wiki/Q899336",
    "https://www.linkedin.com/company/tairovic-gebaeudeservice",
  ];

  const AREA_SERVED = [
    { "@type": "City", name: "Neuwied" },
    { "@type": "City", name: "Koblenz" },
    { "@type": "City", name: "Andernach" },
    { "@type": "City", name: "Bendorf" },
    { "@type": "AdministrativeArea", name: "Neuwied und Umgebung" },
  ];

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

  function organizationNode() {
    return {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Tairovic Gebäudeservice",
      url: ORIGIN + "/",
      logo: OG_IMAGE,
      sameAs: SAME_AS,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+49-1520-8531992",
        email: "mevlidatairovic@gmail.com",
        contactType: "customer service",
        areaServed: "DE",
        availableLanguage: ["German", "Albanian"],
      },
    };
  }

  function geoCoordinatesNode() {
    return {
      "@type": "GeoCoordinates",
      "@id": GEO_ID,
      latitude: 50.4336,
      longitude: 7.4711,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kirchstr. 32",
        postalCode: "56564",
        addressLocality: "Neuwied",
        addressCountry: "DE",
      },
    };
  }

  function placeNodes() {
    return [
      {
        "@type": "Place",
        "@id": ORIGIN + "/#place-neuwied",
        name: "Neuwied",
        address: { "@type": "PostalAddress", addressLocality: "Neuwied", addressCountry: "DE" },
      },
      {
        "@type": "Place",
        "@id": ORIGIN + "/#place-koblenz",
        name: "Koblenz",
        address: { "@type": "PostalAddress", addressLocality: "Koblenz", addressCountry: "DE" },
      },
      {
        "@type": "Place",
        "@id": ORIGIN + "/#place-andernach",
        name: "Andernach",
        address: { "@type": "PostalAddress", addressLocality: "Andernach", addressCountry: "DE" },
      },
      {
        "@type": "Place",
        "@id": ORIGIN + "/#place-bendorf",
        name: "Bendorf",
        address: { "@type": "PostalAddress", addressLocality: "Bendorf", addressCountry: "DE" },
      },
    ];
  }

  function personAuthorNode() {
    return {
      "@type": "Person",
      "@id": AUTHOR_ID,
      name: "Mevlida Tairovic",
      jobTitle: "Inhaberin & Fachkraft Gebäudereinigung",
      knowsAbout: [
        "Gebäudereinigung",
        "Treppenhausreinigung",
        "Unterhaltsreinigung",
        "Grundreinigung",
        "Glasreinigung",
        "Sonderreinigung",
        "Hausmeisterservice",
        "Objektbetreuung",
        "Gartenpflege",
        "Winterdienst",
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "Arbeitssicherheit Unterweisung" },
        { "@type": "EducationalOccupationalCredential", name: "Hygiene Reinigungswirtschaft" },
      ],
      worksFor: { "@id": ORG_ID },
    };
  }

  function localBusinessNode() {
    return {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "Tairovic Gebäudeservice",
      url: ORIGIN + "/",
      image: OG_IMAGE,
      telephone: "+49-1520-8531992",
      email: "mevlidatairovic@gmail.com",
      founder: { "@id": AUTHOR_ID },
      parentOrganization: { "@id": ORG_ID },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kirchstr. 32",
        postalCode: "56564",
        addressLocality: "Neuwied",
        addressCountry: "DE",
      },
      geo: { "@id": GEO_ID },
      areaServed: AREA_SERVED,
      sameAs: SAME_AS,
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "24",
        bestRating: "5",
      },
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
          itemOffered: { "@type": "Service", name, provider: { "@id": BUSINESS_ID } },
        })),
      },
    };
  }

  function serviceAreaNode() {
    return {
      "@type": "Service",
      "@id": ORIGIN + "/#service-area",
      name: "Servicegebiet Neuwied und Umgebung",
      provider: { "@id": BUSINESS_ID },
      areaServed: AREA_SERVED,
      serviceType: "Gebäudereinigung, Hausmeisterservice, Gartenpflege, Winterdienst",
    };
  }

  function pageServiceNode(page) {
    const map = {
      reinigung: {
        name: "Gebäudereinigung Neuwied",
        url: ORIGIN + "/gebaeudereinigung",
        desc: "Treppenhausreinigung, Grundreinigung, Unterhaltsreinigung",
      },
      hausmeister: {
        name: "Hausmeisterservice Neuwied",
        url: ORIGIN + "/hausmeisterservice",
        desc: "Objektbetreuung, Kontrollgänge, Kleinreparaturen",
      },
      garten: {
        name: "Gartenpflege Neuwied",
        url: ORIGIN + "/gartenpflege",
        desc: "Rasenpflege, Heckenschnitt, Außenanlagen",
      },
      winter: {
        name: "Winterdienst Neuwied",
        url: ORIGIN + "/winterdienst",
        desc: "Schneeräumung, Streudienst, Glättebekämpfung",
      },
    };
    const s = map[page];
    if (!s) return null;
    return {
      "@type": "Service",
      "@id": s.url + "#service",
      name: s.name,
      url: s.url,
      description: s.desc,
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "City", name: "Neuwied" },
    };
  }

  function professionalServiceNode() {
    return {
      "@type": "ProfessionalService",
      "@id": ORIGIN + "/#professional-service",
      name: "Tairovic Gebäudeservice — Hausmeisterservice & Objektbetreuung",
      url: ORIGIN + "/",
      provider: { "@id": BUSINESS_ID },
      areaServed: AREA_SERVED,
    };
  }

  function cleaningServiceNode() {
    return {
      "@type": "CleaningService",
      "@id": ORIGIN + "/#cleaning-service",
      name: "Tairovic Gebäudereinigung",
      url: ORIGIN + "/gebaeudereinigung",
      provider: { "@id": BUSINESS_ID },
      areaServed: AREA_SERVED,
    };
  }

  function websiteNode() {
    return {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: ORIGIN + "/",
      name: "Tairovic Gebäudeservice",
      description: META.home,
      publisher: { "@id": ORG_ID },
      inLanguage: "de-DE",
    };
  }

  function breadcrumbSchema(page) {
    const url = absoluteUrl(page);
    const items = [
      { "@type": "ListItem", position: 1, name: "Startseite", item: ORIGIN + "/" },
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

  function standaloneBreadcrumbSchema(page) {
    const items = [
      { "@type": "ListItem", position: 1, name: "Startseite", item: ORIGIN + "/" },
    ];
    if (page && page !== "home") {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: PAGE_NAMES[page] || page,
        item: absoluteUrl(page),
      });
    } else {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: "Leistungen",
        item: ORIGIN + "/gebaeudereinigung",
      });
    }
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };
  }

  function primaryVideoSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Gebäudereinigung Tairovic – Reinigung im Einsatz",
      description: "Professionelle Gebäudereinigung in Neuwied — Treppenhaus, Böden, Glasreinigung.",
      thumbnailUrl: OG_IMAGE,
      uploadDate: "2026-07-26",
      contentUrl: ORIGIN + "/demo/tairovic-dark-verzija/assets/videos/video-01.mp4",
      embedUrl: ORIGIN + "/unsere-arbeiten",
      transcript:
        "Einblick in die Gebäudereinigung von Tairovic Gebäudeservice in Neuwied: Einscheibenmaschine im Eingangsbereich, Bodenpflege im Flur, Hochglanzreinigung und Glasreinigung.",
      publisher: { "@type": "Organization", name: "Tairovic Gebäudeservice", url: ORIGIN + "/" },
    };
  }

  const FAQ_PAGES = new Set(["reinigung", "hausmeister", "garten", "winter", "home"]);

  function faqFromPage(page) {
    const rootId = page === "home" ? "home" : page;
    const root = document.getElementById(rootId);
    if (!root) return null;
    const faq = root.querySelector(".faq-list") || root.querySelector(".garten-notes");
    if (!faq) return null;
    const entities = [];
    if (faq.classList.contains("garten-notes")) {
      faq.querySelectorAll(".garten-note").forEach((el) => {
        const q = el.querySelector("h4");
        const a = el.querySelector("p");
        if (!q || !a) return;
        entities.push({
          "@type": "Question",
          name: q.textContent.trim(),
          acceptedAnswer: { "@type": "Answer", text: a.textContent.trim() },
        });
      });
    } else {
      faq.querySelectorAll(".faq-item").forEach((el) => {
        const q = el.querySelector("summary");
        const a = el.querySelector(".faq-answer p") || el.querySelector(".faq-answer");
        if (!q || !a) return;
        entities.push({
          "@type": "Question",
          name: q.textContent.trim(),
          acceptedAnswer: { "@type": "Answer", text: a.textContent.trim() },
        });
      });
    }
    if (!entities.length) return null;
    return {
      "@type": "FAQPage",
      "@id": absoluteUrl(page) + "#faq",
      mainEntity: entities,
    };
  }

  function qaPageFromHome() {
    const root = document.getElementById("home");
    if (!root) return null;
    const notes = root.querySelector(".garten-notes");
    if (!notes) return null;
    const first = notes.querySelector(".garten-note");
    if (!first) return null;
    const q = first.querySelector("h4");
    const a = first.querySelector("p");
    if (!q || !a) return null;
    return {
      "@type": "QAPage",
      "@id": ORIGIN + "/#qa",
      mainEntity: {
        "@type": "Question",
        name: q.textContent.trim(),
        acceptedAnswer: { "@type": "Answer", text: a.textContent.trim() },
      },
    };
  }

  function howToNode() {
    return {
      "@type": "HowTo",
      "@id": ORIGIN + "/#howto",
      name: "So beauftragen Sie Tairovic Gebäudeservice",
      description: "Schritt-für-Schritt von der Anfrage bis zur laufenden Objektbetreuung in Neuwied.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Anfrage senden",
          text: "Kontakt per Telefon, E-Mail oder WhatsApp — Leistung und Objekt kurz beschreiben.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Besichtigung & Angebot",
          text: "Wir klären Flächen, Intervalle und Zugänge und erstellen ein individuelles Angebot.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Einsatzplanung",
          text: "Feste Termine, dokumentierte Abläufe und ein direkter Ansprechpartner vor Ort.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Laufende Betreuung",
          text: "Reinigung, Hausmeister, Garten oder Winterdienst — zuverlässig und nachvollziehbar.",
        },
      ],
    };
  }

  function videoObjectsFromPage(page) {
    const videos = [];
    const primary = {
      "@type": "VideoObject",
      "@id": ORIGIN + "/demo/tairovic-dark-verzija/assets/videos/video-01.mp4#video",
      name: "Gebäudereinigung Tairovic – Firmenvorstellung",
      description: "Professionelle Gebäudereinigung in Neuwied — Einscheibenmaschine im Eingangsbereich.",
      thumbnailUrl: OG_IMAGE,
      contentUrl: ORIGIN + "/demo/tairovic-dark-verzija/assets/videos/video-01.mp4",
      embedUrl: ORIGIN + "/unsere-arbeiten",
      uploadDate: "2026-07-26",
      transcript:
        "Video zeigt Gebäudereinigung durch Tairovic Gebäudeservice: Einscheibenmaschine, Bodenpflege, Glasreinigung in Neuwied.",
      publisher: { "@id": ORG_ID },
    };
    if (page === "home" || page === "arbeiten") videos.push(primary);

    if (page !== "arbeiten") return videos;
    const root = document.getElementById("arbeiten");
    if (!root) return videos;
    root.querySelectorAll("video source, video[src]").forEach((el, i) => {
      const src = el.getAttribute("src") || el.src;
      if (!src) return;
      const abs = src.startsWith("http") ? src : ORIGIN + (src.startsWith("/") ? src : "/" + src);
      if (abs.includes("video-01.mp4")) return;
      videos.push({
        "@type": "VideoObject",
        "@id": abs + "#video",
        name: "Reinigung im Einsatz — Tairovic Gebäudeservice Neuwied " + (i + 1),
        description: "Projektvideo aus Gebäudereinigung und Objektpflege in Neuwied.",
        thumbnailUrl: OG_IMAGE,
        contentUrl: abs,
        uploadDate: "2026-07-26",
        publisher: { "@id": ORG_ID },
      });
    });
    return videos;
  }

  function buildGraph(page) {
    const graph = [
      websiteNode(),
      organizationNode(),
      geoCoordinatesNode(),
      personAuthorNode(),
      localBusinessNode(),
      serviceAreaNode(),
      professionalServiceNode(),
      cleaningServiceNode(),
      breadcrumbSchema(page),
      howToNode(),
      ...placeNodes(),
    ];

    const svc = pageServiceNode(page);
    if (svc) graph.push(svc);

    if (FAQ_PAGES.has(page)) {
      const faq = faqFromPage(page);
      if (faq) graph.push(faq);
    }

    if (page === "home") {
      const qa = qaPageFromHome();
      if (qa) graph.push(qa);
    }

    graph.push(...videoObjectsFromPage(page));

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
    document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
      const keep = ["ld-graph", "ld-graph-static", "ld-breadcrumb", "ld-video"];
      if (!keep.includes(el.id)) el.remove();
    });
    let script = document.getElementById("ld-graph");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-graph";
      document.head.appendChild(script);
    }
    return script;
  }

  function ensureStandaloneSchemas(page) {
    let bc = document.getElementById("ld-breadcrumb");
    if (!bc) {
      bc = document.createElement("script");
      bc.type = "application/ld+json";
      bc.id = "ld-breadcrumb";
      document.head.appendChild(bc);
    }
    bc.textContent = JSON.stringify(standaloneBreadcrumbSchema(page));

    let vid = document.getElementById("ld-video");
    if (!vid) {
      vid = document.createElement("script");
      vid.type = "application/ld+json";
      vid.id = "ld-video";
      document.head.appendChild(vid);
    }
    vid.textContent = JSON.stringify(primaryVideoSchema());
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

    ensureJsonLd().textContent = JSON.stringify(buildGraph(key));
    ensureStandaloneSchemas(key);
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
    buildGraph,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLegalFromPath);
  } else {
    initLegalFromPath();
  }
})(window);
