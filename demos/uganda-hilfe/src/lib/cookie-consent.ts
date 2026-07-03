/** Bump when categories or defaults change — triggers re-prompt. */
export const CONSENT_VERSION = 1;

export const CONSENT_STORAGE_KEY = "uhu-cookie-consent";

export type CookieCategory = "necessary" | "analytics" | "marketing";

export type CookieConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = {
  version: number;
  timestamp: string;
  preferences: CookieConsentPreferences;
};

export type OptionalCookieCategory = Exclude<CookieCategory, "necessary">;

export type ConsentScript = {
  id: string;
  category: OptionalCookieCategory;
  /** Called once when the user grants consent for this category. */
  load: () => void;
};

export const COOKIE_CATEGORIES: {
  id: CookieCategory;
  label: string;
  description: string;
  required: boolean;
}[] = [
  {
    id: "necessary",
    label: "Notwendige Cookies",
    description:
      "Erforderlich für den Betrieb der Website (z. B. Sicherheit, Speicherung Ihrer Cookie-Auswahl). Diese Cookies können nicht deaktiviert werden.",
    required: true,
  },
  {
    id: "analytics",
    label: "Statistik & Analyse",
    description:
      "Helfen uns zu verstehen, wie Besucher die Website nutzen (z. B. Google Analytics). Derzeit nicht aktiv – kann später aktiviert werden.",
    required: false,
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Ermöglichen personalisierte Werbung und Conversion-Tracking (z. B. Meta Pixel). Derzeit nicht aktiv – kann später aktiviert werden.",
    required: false,
  },
];

const scriptRegistry: ConsentScript[] = [];
const loadedScriptIds = new Set<string>();

export function registerConsentScript(script: ConsentScript) {
  if (scriptRegistry.some((entry) => entry.id === script.id)) return;
  scriptRegistry.push(script);
}

export const NECESSARY_ONLY: CookieConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const ACCEPT_ALL: CookieConsentPreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
};

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION || !parsed.preferences?.necessary) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(preferences: CookieConsentPreferences): StoredConsent {
  const stored: StoredConsent = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    preferences,
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  applyConsent(preferences);
  window.dispatchEvent(new CustomEvent("uhu:cookie-consent-changed", { detail: stored }));

  return stored;
}

export function applyConsent(preferences: CookieConsentPreferences) {
  for (const script of scriptRegistry) {
    if (!preferences[script.category]) continue;
    if (loadedScriptIds.has(script.id)) continue;

    loadedScriptIds.add(script.id);
    script.load();
  }
}

/** Re-open settings panel (e.g. from footer link). */
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("uhu:open-cookie-settings"));
}
