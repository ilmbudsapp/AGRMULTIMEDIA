export const CONSENT_KEY = "rl-maps-consent";
export const CONSENT_EVENT = "rl-consent-change";
export const CONSENT_OPEN = "rl-consent-open";

export type ConsentChoice = "accepted" | "rejected";

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  window.localStorage.setItem(CONSENT_KEY, choice);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
