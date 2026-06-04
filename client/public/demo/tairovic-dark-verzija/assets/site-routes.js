/** Tairovic: clean URLs on client domain, demo paths on agrmultimedia.eu */
(function (global) {
  const PROD = /(^|\.)tairovic-gebaeudeservice\.de$/i.test(location.hostname);
  const ASSET_BASE = "/demo/tairovic-dark-verzija/";
  const PAGE_SLUG = {
    home: "",
    reinigung: "gebaeudereinigung",
    hausmeister: "hausmeisterservice",
    garten: "gartenpflege",
    winter: "winterdienst",
    about: "uber-uns",
    kontakt: "kontakt",
  };
  const SLUG_PAGE = { "": "home" };
  Object.keys(PAGE_SLUG).forEach((page) => {
    const slug = PAGE_SLUG[page];
    if (slug) SLUG_PAGE[slug] = page;
  });

  function urlFor(page) {
    const slug = PAGE_SLUG[page];
    if (slug === undefined) return PROD ? "/" : ASSET_BASE + "index.html";
    if (PROD) return slug ? "/" + slug : "/";
    return page === "home" ? ASSET_BASE + "index.html" : ASSET_BASE + "index.html#" + page;
  }

  function pageFromLocation() {
    if (PROD) {
      const slug = location.pathname.replace(/^\/+|\/+$/g, "");
      return SLUG_PAGE[slug] || "home";
    }
    const hash = (location.hash || "").replace(/^#/, "");
    if (hash === "arbeiten") return "about";
    if (hash && document.getElementById(hash)) return hash;
    return "home";
  }

  function legalUrl(which) {
    if (PROD) return which === "impressum" ? "/impressum" : "/datenschutz";
    return ASSET_BASE + which + ".html";
  }

  global.TAIROVIC_SITE = {
    PROD,
    ASSET_BASE,
    urlFor,
    pageFromLocation,
    legalUrl,
  };
})(window);
