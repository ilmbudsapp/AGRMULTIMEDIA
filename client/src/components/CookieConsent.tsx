import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCookieConsentCopy } from "@/lib/cookieConsentI18n";
import { consentNeedsPrompt, setConsent, type ConsentChoice } from "@/lib/consent";
import { initGA } from "@/lib/analytics";

function applyAnalyticsConsent() {
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    initGA();
  }
}

export default function CookieConsent() {
  const { currentLanguage } = useLanguage();
  const copy = getCookieConsentCopy(currentLanguage);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(consentNeedsPrompt());
  }, []);

  function choose(choice: ConsentChoice) {
    setConsent(choice);
    setVisible(false);
    if (choice === "analytics") applyAnalyticsConsent();
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[9998] p-4 sm:p-6 pointer-events-none"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0f0f14]/95 backdrop-blur-xl shadow-2xl p-5 sm:p-6 text-white">
        <h2 id="cookie-consent-title" className="text-lg font-bold mb-2">
          {copy.title}
        </h2>
        <p id="cookie-consent-desc" className="text-sm text-gray-300 leading-relaxed mb-4">
          {copy.body}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
          <div className="flex flex-wrap gap-3 text-xs text-gray-400">
            <Link href="/privacy-policy" className="underline hover:text-white">
              {copy.privacyLink}
            </Link>
            <Link href="/cookies" className="underline hover:text-white">
              {copy.cookiesLink}
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => choose("essential")}
              className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              {copy.essential}
            </button>
            <button
              type="button"
              onClick={() => choose("analytics")}
              className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold hover:bg-violet-500 transition-colors"
            >
              {copy.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
