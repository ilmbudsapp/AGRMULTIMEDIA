/** Site origin for canonical and multilingual alternates. */
export const SITE_ORIGIN = "https://www.agrmultimedia.eu";

/** hreflang uses ISO 639-1; Albanian is `sq` while the app query param remains `lang=al`. */
const LANG_ALTERNATES: { hreflang: string; langParam: string }[] = [
  { hreflang: "en", langParam: "en" },
  { hreflang: "de", langParam: "de" },
  { hreflang: "it", langParam: "it" },
  { hreflang: "sr", langParam: "sr" },
  { hreflang: "sq", langParam: "al" },
];

function langPageUrl(pathname: string, langParam: string): string {
  const path = pathname === "" || pathname === "/" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (path === "/") return `${SITE_ORIGIN}/?lang=${langParam}`;
  return `${SITE_ORIGIN}${path}?lang=${langParam}`;
}

/** Injects / refreshes hreflang link tags for the current pathname (SPA-safe). */
export function syncHreflangAlternates(pathname: string): void {
  document.querySelectorAll('link[data-seo-hreflang="1"]').forEach((el) => el.remove());
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
  x.href = langPageUrl(pathname, "sr");
  x.setAttribute("data-seo-hreflang", "1");
  document.head.appendChild(x);
}
