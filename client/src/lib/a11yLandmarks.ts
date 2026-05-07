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
