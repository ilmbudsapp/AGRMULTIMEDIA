import { useEffect } from "react";
import { useLocation } from "wouter";
import { COMPANY_NAME } from "./data";

const SITE_ORIGIN = "https://www.agrmultimedia.eu";

function setMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkCanonical(href: string) {
  const el = document.getElementById("canonical-url") as HTMLLinkElement | null;
  if (el) el.setAttribute("href", href);
}

const PAGE_TITLES: Record<string, string> = {
  "/demo-reinigung": `${COMPANY_NAME} — Frühlingsaktion Stuttgart`,
  "/demo-reinigung/services": `Leistungen | ${COMPANY_NAME}`,
  "/demo-reinigung/galerie": `Galerie | ${COMPANY_NAME}`,
  "/demo-reinigung/kontakt": `Kontakt | ${COMPANY_NAME}`,
};

export function useDemoSeo(pageDescription: string) {
  const [location] = useLocation();

  useEffect(() => {
    const path = location.split("?")[0]?.replace(/\/$/, "") || "/demo-reinigung";
    const lookup = path === "/demo-reinigung/" ? "/demo-reinigung" : path;
    const title = PAGE_TITLES[lookup] ?? `${COMPANY_NAME} — Demo`;
    const canonical = `${SITE_ORIGIN}${lookup === "/demo-reinigung" ? "/demo-reinigung" : lookup}`;

    const prevLang = document.documentElement.lang;
    document.documentElement.lang = "de";
    document.title = title;

    setMetaByName("robots", "noindex, nofollow");
    setMetaByName("description", pageDescription);
    setLinkCanonical(canonical);

    const metaDesc = document.getElementById("meta-description");
    if (metaDesc) metaDesc.setAttribute("content", pageDescription);

    return () => {
      document.documentElement.lang = prevLang;
      setMetaByName("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    };
  }, [location, pageDescription]);
}
