import type { Language } from "@/lib/i18n";

/** Visible landmark labels for screen readers and structured navigation. */
export const NAV_LANDMARK_LABEL: Record<Language, string> = {
  en: "Primary navigation",
  de: "Hauptnavigation",
};

export const MAIN_LANDMARK_LABEL: Record<Language, string> = {
  en: "Main content",
  de: "Hauptinhalt",
};

export const SKIP_TO_MAIN_CONTENT: Record<Language, string> = {
  en: "Skip to main content",
  de: "Zum Hauptinhalt springen",
};

export const NAV_MOBILE_TOGGLE: Record<Language, { open: string; close: string }> = {
  en: { open: "Open navigation menu", close: "Close navigation menu" },
  de: { open: "Navigationsmenü öffnen", close: "Navigationsmenü schließen" },
};

export const NAV_SCROLL_ON_PAGE_HINT: Record<Language, string> = {
  en: "— jump to section on this page",
  de: "— zum Abschnitt auf dieser Seite springen",
};
