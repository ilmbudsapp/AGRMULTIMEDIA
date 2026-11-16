import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von RL Gartenservice, Rakip Lleshi, Gersthofen.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main id="inhalt">
      <div data-reveal="card">
        <div className="legal card-motion">
          <h1>Impressum</h1>
          <h2>Anbieter</h2>
          <p>
            {site.name}
            <br />
            {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            {site.address.country}
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={site.phoneTel}>{site.phoneDisplay}</a>
            <br />
            E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <h2>Inhaltlich Verantwortlicher</h2>
          <p>
            Diese Website ist eine Darstellung der angebotenen Dienstleistungen. Sie enthält kein
            journalistisch-redaktionell gestaltetes Angebot. § 18 Abs. 2 MStV ist deshalb nicht anzuwenden.
          </p>
        </div>
      </div>
    </main>
  );
}
