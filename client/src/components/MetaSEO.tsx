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
    const title = tSpec.seo.title;
    const description = tSpec.seo.description;
    const keywords = tSpec.seo.keywords;

    document.title = title;
    setMetaContent("meta-description", description);
    setMetaContent("meta-keywords", keywords);

    setMetaContent("og-title", title);
    setMetaContent("og-description", description);

    setMetaContent("twitter-title", title);
    setMetaContent("twitter-description", description);
  }, [currentLanguage, tSpec.seo.title, tSpec.seo.description, tSpec.seo.keywords]);

  return null;
}

