import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import { ROUTE_SEO_BY_LANG, type SeoLang } from "@/lib/seo/routeSeo";
import { syncHreflangAlternates } from "@/lib/seo/hreflang";

function setMetaContent(metaId: string, value: string) {
  const el = document.getElementById(metaId) as HTMLMetaElement | null;
  if (el) el.setAttribute("content", value);
}

function setLinkHref(linkId: string, value: string) {
  const el = document.getElementById(linkId) as HTMLLinkElement | null;
  if (el) el.setAttribute("href", value);
}

function normalizePathname(loc: string): string {
  const raw = typeof loc === "string" ? loc.split("?")[0] : window.location.pathname.split("?")[0];
  if (!raw || raw === "") return "/";
  return raw.startsWith("/") ? raw : `/${raw}`;
}

export default function MetaSEO() {
  const { currentLanguage, tSpec } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    let title = tSpec.seo.title;
    let description = tSpec.seo.description;
    let keywords = tSpec.seo.keywords;

    const path = normalizePathname(location);
    const lang = (["de", "en", "it", "sr", "al"].includes(currentLanguage) ? currentLanguage : "en") as SeoLang;
    const routeSeo = ROUTE_SEO_BY_LANG[lang][path];
    if (routeSeo) {
      title = routeSeo.title;
      description = routeSeo.description;
      keywords = routeSeo.keywords;
    }

    document.title = title;
    setMetaContent("meta-description", description);
    setMetaContent("meta-keywords", keywords);

    setMetaContent("og-title", title);
    setMetaContent("og-description", description);

    setMetaContent("twitter-title", title);
    setMetaContent("twitter-description", description);

    const canonicalFull = path === "/" ? "https://agrmultimedia.eu/" : `https://agrmultimedia.eu${path}`;
    setLinkHref("canonical-url", canonicalFull);
    setMetaContent("og-url", canonicalFull);
    setMetaContent("twitter-url", canonicalFull);

    document.documentElement.lang = lang === "al" ? "sq" : lang;

    syncHreflangAlternates(path);
  }, [currentLanguage, location, tSpec.seo.title, tSpec.seo.description, tSpec.seo.keywords]);

  return null;
}
