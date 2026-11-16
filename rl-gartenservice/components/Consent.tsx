"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, CONSENT_OPEN, readConsent, writeConsent } from "@/lib/consent";

export function Consent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setOpen(true);
    const openBanner = () => setOpen(true);
    const onChoice = () => setOpen(false);
    window.addEventListener(CONSENT_OPEN, openBanner);
    window.addEventListener(CONSENT_EVENT, onChoice);
    return () => {
      window.removeEventListener(CONSENT_OPEN, openBanner);
      window.removeEventListener(CONSENT_EVENT, onChoice);
    };
  }, []);

  if (!open) return null;

  return (
    <aside className="consent" aria-label="Cookies">
      <p>
        <strong>Cookies.</strong> Diese Website setzt selbst keine Cookies. Die Google-Karte auf der
        Kontaktseite kann Cookies von Google speichern, aber nur wenn Sie das erlauben.{" "}
        <a href="/datenschutz">Datenschutzerklärung</a>
      </p>
      <div className="consent-actions">
        <button type="button" className="consent-accept" onClick={() => writeConsent("accepted")}>
          Akzeptieren
        </button>
        <button type="button" className="consent-reject" onClick={() => writeConsent("rejected")}>
          Ablehnen
        </button>
      </div>
    </aside>
  );
}

export function ConsentSettings() {
  return (
    <button type="button" className="consent-settings" onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN))}>
      Cookie-Einstellungen
    </button>
  );
}
