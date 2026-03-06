import { useLanguage } from "@/contexts/LanguageContext";
import { specLangCodes, specLangDisplay } from "@/lib/specTranslations";
import type { Language } from "@/lib/i18n";

export default function LanguageSwitcherInline() {
  const { currentLanguage, setLanguage } = useLanguage();
  const displayLang = currentLanguage === "al" ? "al" : currentLanguage === "sq" ? "al" : currentLanguage;

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {specLangCodes.map((code, i) => {
        const isActive = displayLang === code;
        return (
          <span key={code} className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setLanguage(code as Language)}
              className={`transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
              aria-label={`Switch to ${code.toUpperCase()}`}
            >
              {specLangDisplay[code]}
            </button>
            {i < specLangCodes.length - 1 && (
              <span className="text-white/50 select-none">|</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
