/** Canonical and hreflang URL builders for de (/ path) vs en (?lang=en). */
export const SITE_ORIGIN = "https://www.agrmultimedia.eu";

export type SeoLocale = "de" | "en";

function normalizePath(pathname: string): string {
  const path = pathname === "" || pathname === "/" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  return path;
}

/** Indexable URL for a locale on a pathname (self-referencing canonical target). */
export function buildLocalePageUrl(pathname: string, locale: SeoLocale): string {
  const path = normalizePath(pathname);
  if (locale === "de") {
    return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
  }
  if (path === "/") return `${SITE_ORIGIN}/?lang=en`;
  return `${SITE_ORIGIN}${path}?lang=en`;
}

export function hreflangAlternates(pathname: string): { hreflang: string; href: string }[] {
  const path = normalizePath(pathname);
  return [
    { hreflang: "de", href: buildLocalePageUrl(path, "de") },
    { hreflang: "en", href: buildLocalePageUrl(path, "en") },
    { hreflang: "x-default", href: buildLocalePageUrl(path, "de") },
  ];
}
