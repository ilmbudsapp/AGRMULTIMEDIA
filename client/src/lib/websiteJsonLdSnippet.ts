/** Minimal WebSite + SearchAction JSON-LD example for GEO / technical credibility */
export const WEBSITE_JSON_LD_SNIPPET = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AGR Multimedia",
  "url": "https://www.agrmultimedia.eu/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.agrmultimedia.eu/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}`;
