import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { SKIP_TO_MAIN_CONTENT } from "@/lib/a11yLandmarks";

function skipLabel(lang: Language): string {
  return SKIP_TO_MAIN_CONTENT[lang] ?? SKIP_TO_MAIN_CONTENT.en;
}

export default function SkipToContent() {
  const { currentLanguage } = useLanguage();

  return (
    <a
      href="#main-content"
      className="fixed left-4 top-0 z-[100] -translate-y-full rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0a0a0f] shadow-lg outline-none ring-2 ring-blue-500 transition-transform focus-visible:translate-y-4"
    >
      {skipLabel(currentLanguage)}
    </a>
  );
}
