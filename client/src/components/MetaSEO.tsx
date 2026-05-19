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

    const path = normalizePathname(location);

    const lookupPath =
      path === "/contact"
        ? "/kontakt"
        : path === "/web-design"
          ? "/webdesign-seo"
          : path === "/video-production"
            ? "/videoproduktion"
            : path;
    const lang = (["de", "en", "it", "sr", "al"].includes(currentLanguage) ? currentLanguage : "en") as SeoLang;
    const routeSeo = ROUTE_SEO_BY_LANG[lang][lookupPath];
    if (routeSeo) {
      title = routeSeo.title;
      description = routeSeo.description;
    }

    document.title = title;
    setMetaContent("meta-description", description);

    setMetaContent("og-title", title);
    setMetaContent("og-description", description);

    const ogLocale =
      lang === "sr"
        ? "sr_RS"
        : lang === "de"
          ? "de_DE"
          : lang === "it"
            ? "it_IT"
            : lang === "al"
              ? "sq_AL"
              : "en_US";
    setMetaContent("og-locale", ogLocale);

    setMetaContent("twitter-title", title);
    setMetaContent("twitter-description", description);

    const canonicalPath = lookupPath;
    const canonicalFull =
      canonicalPath === "/" ? "https://www.agrmultimedia.eu/" : `https://www.agrmultimedia.eu${canonicalPath}`;
    setLinkHref("canonical-url", canonicalFull);
    setMetaContent("og-url", canonicalFull);
    setMetaContent("twitter-url", canonicalFull);

    document.documentElement.lang = lang === "al" ? "sq" : lang;

    syncHreflangAlternates(canonicalPath);
  }, [currentLanguage, location, tSpec.seo.title, tSpec.seo.description]);

  return null;
}
