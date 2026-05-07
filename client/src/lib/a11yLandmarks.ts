import type { Language } from "@/lib/i18n";

/** Visible landmark labels for screen readers and structured navigation. */
export const NAV_LANDMARK_LABEL: Record<Language, string> = {
  sr: "Glavna navigacija",
  en: "Primary navigation",
  de: "Hauptnavigation",
  it: "Navigazione principale",
  sq: "Navigimi kryesor",
  al: "Navigimi kryesor",
};

export const MAIN_LANDMARK_LABEL: Record<Language, string> = {
  sr: "Glavni sadržaj",
  en: "Main content",
  de: "Hauptinhalt",
  it: "Contenuto principale",
  sq: "Përmbajtja kryesore",
  al: "Përmbajtja kryesore",
};

/** Skip navigation — first focusable control for keyboard users */
export const SKIP_TO_MAIN_CONTENT: Record<Language, string> = {
  sr: "Preskoči na glavni sadržaj",
  en: "Skip to main content",
  de: "Zum Hauptinhalt springen",
  it: "Vai al contenuto principale",
  sq: "Kapërce te përmbajtja kryesore",
  al: "Kapërce te përmbajtja kryesore",
};

/** Appended to nav item label when button scrolls on home */
/** Mobile nav burger button — paired labels */
export const NAV_MOBILE_TOGGLE: Record<Language, { open: string; close: string }> = {
  sr: { open: "Otvori meni navigacije", close: "Zatvori meni navigacije" },
  en: { open: "Open navigation menu", close: "Close navigation menu" },
  de: { open: "Navigationsmenü öffnen", close: "Navigationsmenü schließen" },
  it: { open: "Apri menu di navigazione", close: "Chiudi menu di navigazione" },
  sq: { open: "Hap menunë e navigimit", close: "Mbyll menunë e navigimit" },
  al: { open: "Hap menunë e navigimit", close: "Mbyll menunë e navigimit" },
};

export const NAV_SCROLL_ON_PAGE_HINT: Record<Language, string> = {
  sr: "— skok na odeljak na ovoj strani",
  en: "— jump to section on this page",
  de: "— zum Abschnitt auf dieser Seite springen",
  it: "— vai alla sezione in questa pagina",
  sq: "— kalo te seksioni në këtë faqe",
  al: "— kalo te seksioni në këtë faqe",
};
