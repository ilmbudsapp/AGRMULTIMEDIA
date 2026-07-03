"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import "@/lib/register-optional-scripts";
import {
  ACCEPT_ALL,
  type CookieConsentPreferences,
  COOKIE_CATEGORIES,
  NECESSARY_ONLY,
  applyConsent,
  readStoredConsent,
  saveConsent,
} from "@/lib/cookie-consent";

type View = "hidden" | "banner" | "settings";

export default function CookieConsent() {
  const titleId = useId();
  const descriptionId = useId();
  const settingsRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  const [view, setView] = useState<View>("hidden");
  const [preferences, setPreferences] = useState<CookieConsentPreferences>(NECESSARY_ONLY);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setPreferences(stored.preferences);
      applyConsent(stored.preferences);
      setView("hidden");
    } else {
      setView("banner");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("uhu-cookie-banner-visible", view !== "hidden");

    return () => {
      document.body.classList.remove("uhu-cookie-banner-visible");
    };
  }, [view]);

  useEffect(() => {
    const openSettings = () => {
      const stored = readStoredConsent();
      if (stored) setPreferences(stored.preferences);
      setView("settings");
    };

    window.addEventListener("uhu:open-cookie-settings", openSettings);
    return () => window.removeEventListener("uhu:open-cookie-settings", openSettings);
  }, []);

  useEffect(() => {
    if (view !== "settings") return;

    const timer = window.setTimeout(() => {
      firstFocusRef.current?.focus();
    }, 50);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const stored = readStoredConsent();
        setView(stored ? "hidden" : "banner");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [view]);

  const persist = useCallback((next: CookieConsentPreferences) => {
    setPreferences(next);
    saveConsent(next);
    setView("hidden");
  }, []);

  const acceptAll = () => persist(ACCEPT_ALL);
  const acceptNecessaryOnly = () => persist(NECESSARY_ONLY);

  const saveSelection = () => persist(preferences);

  const toggleCategory = (category: "analytics" | "marketing") => {
    setPreferences((current) => ({
      ...current,
      [category]: !current[category],
    }));
  };

  if (view === "hidden") return null;

  const isSettings = view === "settings";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div
        ref={settingsRef}
        className="uhu-container mx-auto max-w-4xl rounded-2xl border border-[#52b788]/25 bg-white shadow-[0_-8px_40px_rgba(15,61,34,0.18)] sm:rounded-3xl"
      >
        <div className="p-5 sm:p-6 md:p-7">
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0faf3] text-[#40916c]"
              aria-hidden
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 0-5-5 4 4 0 0 0-5-5" />
                <path d="M8.5 8.5v.01M15.5 9.5v.01M12 15.5a3 3 0 0 0 3-3" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h2 id={titleId} className="text-lg font-extrabold text-[#14532d] sm:text-xl">
                {isSettings ? "Cookie-Einstellungen" : "Cookies & Datenschutz"}
              </h2>
              <p id={descriptionId} className="mt-2 text-sm leading-relaxed text-[#52796f] sm:text-base">
                {isSettings
                  ? "Passen Sie Ihre Einwilligung an. Notwendige Cookies sind für den Betrieb der Website erforderlich."
                  : "Wir verwenden Cookies, um Ihre Auswahl zu speichern und die Website sicher bereitzustellen. Derzeit setzen wir nur technisch notwendige Cookies ein. Optionale Dienste wie Google Analytics oder Meta Pixel können später aktiviert werden."}
              </p>
              <p className="mt-2 text-sm text-[#52796f]">
                Weitere Informationen finden Sie in unserer{" "}
                <Link href="/datenschutz/" className="font-semibold text-[#40916c] underline underline-offset-2 hover:text-[#14532d]">
                  Datenschutzerklärung
                </Link>{" "}
                und im{" "}
                <Link href="/impressum/" className="font-semibold text-[#40916c] underline underline-offset-2 hover:text-[#14532d]">
                  Impressum
                </Link>
                .
              </p>
            </div>
          </div>

          {isSettings && (
            <div className="mt-5 space-y-3" role="group" aria-label="Cookie-Kategorien">
              {COOKIE_CATEGORIES.map((category) => {
                const checked =
                  category.id === "necessary" ? true : preferences[category.id as "analytics" | "marketing"];

                return (
                  <div
                    key={category.id}
                    className="rounded-xl border border-[#14532d]/10 bg-[#f0faf3]/60 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-[#14532d]">{category.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[#52796f]">{category.description}</p>
                      </div>
                      <label className="inline-flex shrink-0 items-center gap-2">
                        <span className="sr-only">{category.label}</span>
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-[#14532d]/30 text-[#40916c] focus:ring-[#40916c]/30 disabled:opacity-60"
                          checked={checked}
                          disabled={category.required}
                          onChange={() => {
                            if (category.id === "analytics" || category.id === "marketing") {
                              toggleCategory(category.id);
                            }
                          }}
                        />
                      </label>
                    </div>
                    {category.required && (
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#40916c]">
                        Immer aktiv
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {!isSettings ? (
              <>
                <button type="button" onClick={acceptAll} className="uhu-btn-primary w-full text-sm sm:w-auto">
                  Alle akzeptieren
                </button>
                <button
                  type="button"
                  onClick={acceptNecessaryOnly}
                  className="uhu-btn-outline w-full text-sm sm:w-auto"
                >
                  Nur notwendige Cookies
                </button>
                <button
                  type="button"
                  onClick={() => setView("settings")}
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#14532d]/20 px-5 py-3 text-sm font-bold text-[#14532d] transition hover:bg-[#f0faf3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40916c] sm:w-auto"
                >
                  Einstellungen
                </button>
              </>
            ) : (
              <>
                <button
                  ref={firstFocusRef}
                  type="button"
                  onClick={saveSelection}
                  className="uhu-btn-primary w-full text-sm sm:w-auto"
                >
                  Auswahl speichern
                </button>
                <button type="button" onClick={acceptAll} className="uhu-btn-outline w-full text-sm sm:w-auto">
                  Alle akzeptieren
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const stored = readStoredConsent();
                    setView(stored ? "hidden" : "banner");
                  }}
                  className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-[#52796f] transition hover:text-[#14532d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40916c] sm:w-auto"
                >
                  Abbrechen
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
