import { ConsentSettings } from "@/components/Consent";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{site.name}</strong>
        <p>
          {site.owner}
          <br />
          {site.address.street}
          <br />
          {site.address.postalCode} {site.address.city}
          <br />
          <a href={site.mapsUrl} rel="noopener noreferrer">
            Google Unternehmensprofil
          </a>
        </p>
      </div>
      <nav aria-label="Rechtliches">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutzerklärung</a>
        <ConsentSettings />
      </nav>
      <p className="footer-sign">
        <span>
          Webdesign von Agron Osmani – <a href="https://www.agrmultimedia.com/">AGRMULTIMEDIA</a>
        </span>
        <a className="footer-sign-url" href="https://www.agrmultimedia.com/">
          www.agrmultimedia.com
        </a>
      </p>
    </footer>
  );
}
