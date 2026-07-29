/** Site origin for canonical and multilingual alternates. */
export const SITE_ORIGIN = "https://www.agrmultimedia.eu";

const LANG_ALTERNATES: { hreflang: string; langParam: string }[] = [
  { hreflang: "de", langParam: "de" },
  { hreflang: "en", langParam: "en" },
];

function langPageUrl(pathname: string, langParam: string): string {
  const path = pathname === "" || pathname === "/" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (path === "/") return `${SITE_ORIGIN}/?lang=${langParam}`;
  return `${SITE_ORIGIN}${path}?lang=${langParam}`;
}

/** Injects / refreshes hreflang link tags for the current pathname (SPA-safe). */
export function syncHreflangAlternates(pathname: string): void {
  document.querySelectorAll('link[data-seo-hreflang="1"]').forEach((el) => el.remove());
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => {
    const href = el.getAttribute("href") ?? "";
    if (href.includes("agrmultimedia.eu")) el.remove();
  });
  for (const { hreflang, langParam } of LANG_ALTERNATES) {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = hreflang;
    link.href = langPageUrl(pathname, langParam);
    link.setAttribute("data-seo-hreflang", "1");
    document.head.appendChild(link);
  }
  const x = document.createElement("link");
  x.rel = "alternate";
  x.hreflang = "x-default";
  x.href = langPageUrl(pathname, "de");
  x.setAttribute("data-seo-hreflang", "1");
  document.head.appendChild(x);
}
