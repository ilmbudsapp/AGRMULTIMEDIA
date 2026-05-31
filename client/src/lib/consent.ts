/** Cookie / analytics consent — stored locally; analytics loads only after opt-in (DSGVO). */
export type ConsentChoice = "essential" | "analytics";

export type ConsentRecord = {
  choice: ConsentChoice;
  updatedAt: string;
};

const STORAGE_KEY = "agr-cookie-consent";

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed?.choice === "essential" || parsed?.choice === "analytics") return parsed;
  } catch {
    /* ignore */
  }
  return null;
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.choice === "analytics";
}

export function setConsent(choice: ConsentChoice): ConsentRecord {
  const record: ConsentRecord = { choice, updatedAt: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("agr-consent-change", { detail: record }));
  }
  return record;
}

export function consentNeedsPrompt(): boolean {
  return getConsent() === null;
}
