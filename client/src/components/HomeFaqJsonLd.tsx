import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeFaqJsonLd } from "@/lib/homeFaqSchemaI18n";

/** FAQPage JSON-LD per current language (homepage only). */
export default function HomeFaqJsonLd() {
  const { currentLanguage } = useLanguage();
  const jsonLd = getHomeFaqJsonLd(currentLanguage);

  return (
    <script
      id="home-faq-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
