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
        </p>
      </div>
      <nav aria-label="Rechtliches">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutzerklärung</a>
      </nav>
    </footer>
  );
}
