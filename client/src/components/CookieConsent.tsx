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
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-[var(--studio-border)] bg-[var(--studio-surface)] p-5 text-[var(--studio-text)] shadow-[0_16px_40px_-16px_rgba(80,52,28,0.28)] sm:p-6">
        <h2 id="cookie-consent-title" className="mb-2 font-display text-lg font-semibold">
          {copy.title}
        </h2>
        <p id="cookie-consent-desc" className="mb-4 text-sm leading-relaxed text-[var(--studio-muted)]">
          {copy.body}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3 text-xs text-[var(--studio-muted)]">
            <Link href="/privacy-policy" className="underline hover:text-[var(--studio-accent)]">
              {copy.privacyLink}
            </Link>
            <Link href="/cookies" className="underline hover:text-[var(--studio-accent)]">
              {copy.cookiesLink}
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => choose("essential")}
              className="rounded-full border border-[var(--studio-border)] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--studio-accent)] hover:text-[var(--studio-accent)]"
            >
              {copy.essential}
            </button>
            <button
              type="button"
              onClick={() => choose("analytics")}
              className="premium-cta rounded-full px-4 py-2.5 text-sm font-semibold"
            >
              {copy.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
