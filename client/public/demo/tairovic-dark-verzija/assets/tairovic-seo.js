/**
 * SEO / GEO / AEO — meta, Open Graph, Twitter, JSON-LD graph, breadcrumbs.
 * No visual design changes.
 */
(function (global) {
  const ORIGIN = "https://www.tairovic-gebaeudeservice.de";
  const OG_IMAGE = ORIGIN + "/demo/tairovic-dark-verzija/assets/logo.webp";

  const PAGES = {
    home: { path: "/", name: "Startseite" },
    reinigung: { path: "/gebaeudereinigung", name: "Gebäudereinigung" },
    hausmeister: { path: "/hausmeisterservice", name: "Hausmeisterservice" },
    garten: { path: "/gartenpflege", name: "Gartenpflege" },
    winter: { path: "/winterdienst", name: "Winterdienst" },
    about: { path: "/ueber-uns", name: "Über uns" },
    arbeiten: { path: "/unsere-arbeiten", name: "Unsere Arbeiten" },
    kontakt: { path: "/kontakt", name: "Kontakt" },
  };

  const TITLES = {
    home: "Tairovic Gebäudeservice | Gebäudereinigung & Hausmeisterservice in Neuwied",
    reinigung: "Gebäudereinigung Neuwied | Treppenhausreinigung — Tairovic",
    hausmeister: "Hausmeisterservice Neuwied | Objektbetreuung — Tairovic",
    garten: "Gartenpflege Neuwied | Außenanlagenpflege — Tairovic",
    winter: "Winterdienst Neuwied | Schneeräumung & Streudienst — Tairovic",
    about: "Über uns | Tairovic Gebäudeservice Neuwied",
    kontakt: "Kontakt & Angebot | Tairovic Gebäudeservice Neuwied",
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
    about:
      "Familie Tairovic — Gebäudeservice aus Neuwied. Gebäudereinigung, Hausmeister, Garten und Winterdienst aus einer Hand.",
    kontakt:
      "Kontakt Tairovic Gebäudeservice Neuwied: Angebot für Reinigung, Hausmeister, Gartenpflege oder Winterdienst anfragen.",
  };

  const BUSINESS = {
    "@type": ["LocalBusiness", "ProfessionalService", "CleaningService"],
    "@id": ORIGIN + "/#business",
    name: "Tairovic Gebäudeservice",
    image: OG_IMAGE,
    url: ORIGIN,
    telephone: "+49-1520-8531992",
    email: "ramizajet2018@gmail.com",
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
  };

  function absoluteUrl(page) {
    const p = PAGES[page]?.path ?? "/";
    return p === "/" ? ORIGIN + "/" : ORIGIN + p;
  }

  function breadcrumbSchema(page) {
    const items = [{ "@type": "ListItem", position: 1, name: "Startseite", item: ORIGIN + "/" }];
    if (page && page !== "home" && PAGES[page]) {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: PAGES[page].name,
        item: absoluteUrl(page),
      });
    }
    return {
      "@type": "BreadcrumbList",
      "@id": absoluteUrl(page) + "#breadcrumb",
      itemListElement: items,
    };
  }

  function faqFromPage(pageId) {
    const root = document.getElementById(pageId);
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
      "@id": absoluteUrl(pageId) + "#faq",
      mainEntity: entities,
    };
  }

  function buildGraph(page) {
    const graph = [
      { ...BUSINESS },
      breadcrumbSchema(page),
    ];
    const faq = faqFromPage(page);
    if (faq) graph.push(faq);
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

  function apply(page) {
    if (!page || !document.getElementById(page)) page = "home";
    const title = TITLES[page] || TITLES.home;
    const desc = META[page] || META.home;
    const url = absoluteUrl(page);

    document.title = title;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", OG_IMAGE);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = url;

    let script = document.getElementById("ld-graph");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-graph";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildGraph(page));
  }

  global.TAIROVIC_SEO = { TITLES, META, apply, absoluteUrl, PAGES };
})(window);
