import { Crumbs } from "@/components/Crumbs";
import { aboutText, places, serviceAreas, site } from "@/content/site";

export function About() {
  return (
    <section className="about" id="ueber-uns">
      <div data-reveal="card">
        <div className="about-inner card-motion">
          <Crumbs items={[{ href: "/", label: "Startseite" }, { label: "Über uns" }]} />
          <p className="eyebrow">Über uns</p>
          <h1>Über RL Gartenservice in Gersthofen</h1>
          <p>{aboutText}</p>
          <h2>Wer den Betrieb führt</h2>
          <p>
            {site.name} wird von {site.owner} geführt. Der Sitz ist {site.address.street}, {site.address.postalCode}{" "}
            {site.address.city}.
          </p>
          <h2>Was wir anbieten</h2>
          <ul className="about-links">
            {serviceAreas.map((area) => (
              <li key={area.id}>
                <a href={`/${area.id}`}>{area.title}</a>
              </li>
            ))}
          </ul>
          <h2>Wo wir arbeiten</h2>
          <p>
            {site.areaLine}. Dazu gehören {places.join(", ")}. Weitere Orte nach Vereinbarung.
          </p>
          <h2>Referenzen</h2>
          <p>
            Ausgeführte Arbeiten aus Gartenpflege, Gartenbau und Bodenbelag zeigen wir in der{" "}
            <a href="/galerie">Galerie</a>. Für Hausmeisterservice und Reinigung liegen noch keine
            Referenzfotos vor. Die Fotos nennen nicht den Ort des einzelnen Auftrags.
          </p>
          <h2>So erreichen Sie uns</h2>
          <p>
            Telefon <a href={site.phoneTel}>{site.phoneDisplay}</a>, WhatsApp{" "}
            <a href={site.whatsappUrl}>{site.whatsappDisplay}</a> oder E-Mail{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Die Anfrage ist kostenlos und unverbindlich.
          </p>
          <a className="button button-gold page-cta" href="/kontakt">
            Jetzt kostenlos und unverbindlich anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
