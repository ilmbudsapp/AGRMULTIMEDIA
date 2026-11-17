"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, readConsent, writeConsent } from "@/lib/consent";
import { site } from "@/content/site";

export function SiteMap() {
  const query = `${site.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
  const embed = "https://maps.google.com/maps?cid=9027878247362474757&hl=de&z=16&output=embed";
  const route = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(readConsent() === "accepted");
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    <div className="map-panel card-motion">
      {allowed ? (
        <iframe
          title={`Karte: ${site.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`}
          src={embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map-hold">
          <p>
            {site.address.street}, {site.address.postalCode} {site.address.city}. Die Google-Karte bleibt aus,
            bis Sie Cookies für die Karte erlauben.
          </p>
          <button type="button" className="consent-accept" onClick={() => writeConsent("accepted")}>
            Karte erlauben
          </button>
        </div>
      )}
      <p className="map-note">
        <a href={site.mapsUrl} rel="noopener noreferrer">
          Google Unternehmensprofil
        </a>
        <a href={route} rel="noopener noreferrer">
          Route planen
        </a>
      </p>
    </div>
  );
}
