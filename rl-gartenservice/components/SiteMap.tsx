"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, readConsent, writeConsent } from "@/lib/consent";
import { site } from "@/content/site";

export function SiteMap() {
  const query = `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.country}`;
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&hl=de&output=embed`;
  const route = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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
        <a href={route}>Route in Google Maps öffnen</a>
      </p>
    </div>
  );
}
