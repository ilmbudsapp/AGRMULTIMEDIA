import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function setMetaContent(metaId: string, value: string) {
  const el = document.getElementById(metaId) as HTMLMetaElement | null;
  if (el) el.setAttribute("content", value);
}

export default function MetaSEO() {
  const { currentLanguage, tSpec } = useLanguage();

  useEffect(() => {
    // Runs on client after language changes so meta tags match the active language.
    const title = tSpec.hero.h1;
    const description = tSpec.hero.subheadline;

    const keywordsByLang: Record<string, string> = {
      sr: "web dizajn, web dizajn za male biznise, digitalni marketing za male biznise, izrada web sajta, online marketing, AGR Multimedia",
      en: "web design, web design for small businesses, digital marketing for small businesses, website creation, online marketing, AGR Multimedia",
      de: "webdesign, webdesign für kleine Unternehmen, digitales Marketing für kleine Unternehmen, Website erstellen, Online Marketing, AGR Multimedia",
      it: "web design, web design per piccole imprese, digital marketing per piccole imprese, creazione siti web, marketing online, AGR Multimedia",
      al: "dizajn web, dizajn web për biznese të vogla, marketing digjital për biznese të vogla, krijim faqesh, marketing online, AGR Multimedia",
    };

    const keywords = keywordsByLang[currentLanguage] ?? keywordsByLang.sr;

    document.title = title;
    setMetaContent("meta-description", description);
    setMetaContent("meta-keywords", keywords);

    setMetaContent("og-title", title);
    setMetaContent("og-description", description);

    setMetaContent("twitter-title", title);
    setMetaContent("twitter-description", description);
  }, [currentLanguage, tSpec.hero.h1, tSpec.hero.subheadline]);

  return null;
}

