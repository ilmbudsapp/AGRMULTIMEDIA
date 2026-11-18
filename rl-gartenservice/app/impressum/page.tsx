import { JsonLd } from "@/components/JsonLd";
import { Crumbs } from "@/components/Crumbs";
import { site } from "@/content/site";
import { breadcrumbNode, businessNode, graph, webPageNode, websiteNode } from "@/lib/jsonld";
import { simpleMetadata } from "@/lib/page-meta";

const title = "Impressum | RL Gartenservice";
const description = "Impressum von RL Gartenservice, Rakip Lleshi, Gersthofen.";

export const metadata = simpleMetadata(title, description, "/impressum");

export default function ImpressumPage() {
  return (
    <main id="inhalt">
      <JsonLd
        data={graph([
          businessNode(),
          websiteNode(),
          webPageNode("/impressum", title, description),
          breadcrumbNode("/impressum", [
            { name: "Startseite", path: "/" },
            { name: "Impressum", path: "/impressum" },
          ]),
        ])}
      />
      <div data-reveal="card">
        <div className="legal card-motion">
          <Crumbs items={[{ href: "/", label: "Startseite" }, { label: "Impressum" }]} />
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
          <h2>Bild- und Videohinweise</h2>
          <p>
            Auf dieser Website werden auch digital erstellte Symbolbilder und Visualisierungen verwendet. Diese
            dienen der Veranschaulichung unseres Leistungsangebots. Solche Darstellungen sind keine Dokumentation
            tatsächlich ausgeführter Kundenprojekte und bilden keine tatsächlichen Mitarbeitenden von RL
            Gartenservice ab.
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
