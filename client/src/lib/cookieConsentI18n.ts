import type { Language } from "@/lib/i18n";

export type CookieConsentCopy = {
  title: string;
  body: string;
  essential: string;
  acceptAll: string;
  privacyLink: string;
  cookiesLink: string;
};

const de: CookieConsentCopy = {
  title: "Cookies & Datenschutz",
  body: "Wir verwenden technisch notwendige Speicher (Sprache, Cookie-Einstellung). Statistik über Google Analytics laden wir nur nach Ihrer Einwilligung. Details in der Datenschutzerklärung.",
  essential: "Nur notwendige",
  acceptAll: "Alle akzeptieren",
  privacyLink: "Datenschutz",
  cookiesLink: "Cookies",
};

const en: CookieConsentCopy = {
  title: "Cookies & privacy",
  body: "We use essential storage (language, cookie choice). Google Analytics statistics load only after your consent. See our privacy policy for details.",
  essential: "Essential only",
  acceptAll: "Accept all",
  privacyLink: "Privacy",
  cookiesLink: "Cookies",
};

const sr: CookieConsentCopy = {
  title: "Kolačići i privatnost",
  body: "Koristimo neophodno skladištenje (jezik, izbor kolačića). Google Analytics učitavamo samo uz vašu saglasnost. Detalji su u politici privatnosti.",
  essential: "Samo neophodno",
  acceptAll: "Prihvati sve",
  privacyLink: "Privatnost",
  cookiesLink: "Kolačići",
};

const it: CookieConsentCopy = {
  title: "Cookie e privacy",
  body: "Usiamo memorizzazione essenziale (lingua, scelta cookie). Google Analytics si carica solo con il tuo consenso. Dettagli nella privacy policy.",
  essential: "Solo necessari",
  acceptAll: "Accetta tutti",
  privacyLink: "Privacy",
  cookiesLink: "Cookie",
};

const al: CookieConsentCopy = {
  title: "Cookies dhe privatësia",
  body: "Përdorim ruajtje thelbësore (gjuha, zgjedhja e cookies). Google Analytics ngarkohet vetëm me pëlqimin tuaj. Detajet në politikën e privatësisë.",
  essential: "Vetëm thelbësore",
  acceptAll: "Prano të gjitha",
  privacyLink: "Privatësia",
  cookiesLink: "Cookies",
};

const map: Record<Language, CookieConsentCopy> = { de, en, sr, it, al, sq: al };

export function getCookieConsentCopy(lang: Language): CookieConsentCopy {
  return map[lang] ?? en;
}
