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
      sr: "web dizajn Njemačka, web dizajn za male biznise, digitalni marketing za male biznise, izrada web sajta Njemačka, AGR Multimedia",
      en: "web design Germany, web design for small businesses, digital marketing for small businesses, business website Germany, AGR Multimedia",
      de: "Webdesign Deutschland, Webdesign für kleine Unternehmen, digitales Marketing für kleine Unternehmen, Website erstellen Deutschland, AGR Multimedia",
      it: "web design Germania, web design per piccole imprese, digital marketing per piccole imprese, sito web Germania, AGR Multimedia",
      al: "dizajn web Gjermani, dizajn web për biznese të vogla, marketing digjital për biznese të vogla, faqe interneti Gjermani, AGR Multimedia",
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

