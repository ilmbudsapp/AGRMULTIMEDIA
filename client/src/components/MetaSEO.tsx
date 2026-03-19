import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";

function setMetaContent(metaId: string, value: string) {
  const el = document.getElementById(metaId) as HTMLMetaElement | null;
  if (el) el.setAttribute("content", value);
}

export default function MetaSEO() {
  const { currentLanguage, tSpec, t } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    // Runs on client after language changes so meta tags match the active language.
    let title = tSpec.seo.title;
    let description = tSpec.seo.description;
    let keywords = tSpec.seo.keywords;

    const path = typeof location === "string" ? location : window.location.pathname;
    if (path === "/blog/food-truck-web-500" || path.endsWith("/blog/food-truck-web-500")) {
      title = t.blog.posts.foodTruck.title;
      description = t.blog.posts.foodTruck.description;
      const keywordsByLang: Record<string, string> = {
        sr: "web dizajn Geislingen, web dizajn, food truck web, digital marketing",
        en: "web design Geislingen, web design, food truck website, digital marketing",
        de: "Webdesign Geislingen, Webdesign, Food-Truck Website, digitales Marketing",
        it: "web design Geislingen, web design, sito web food truck, digital marketing",
        al: "dizajn web Geislingen, dizajn web, faqe web food truck, marketing digjital",
      };
      keywords = keywordsByLang[currentLanguage] ?? keywordsByLang.sr;
    }

    document.title = title;
    setMetaContent("meta-description", description);
    setMetaContent("meta-keywords", keywords);

    setMetaContent("og-title", title);
    setMetaContent("og-description", description);

    setMetaContent("twitter-title", title);
    setMetaContent("twitter-description", description);
  }, [currentLanguage, location, tSpec.seo.title, tSpec.seo.description, tSpec.seo.keywords, t.blog.posts.foodTruck.title, t.blog.posts.foodTruck.description]);

  return null;
}

