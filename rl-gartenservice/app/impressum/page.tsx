import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von RL Gartenservice, Rakip Lleshi, Gersthofen.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main id="inhalt" className="legal">
      <h1>Impressum</h1>
      <p className="notice">
        Vor der Veröffentlichung ergänzen, falls vorhanden: Umsatzsteuer-Identifikationsnummer und
        Handelsregistereintrag. Diese Angaben liegen uns noch nicht vor und werden hier nicht erfunden.
      </p>
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
      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Verantwortlich nach § 18 Abs. 2 MStV: {site.owner}, {site.address.street}, {site.address.postalCode}{" "}
        {site.address.city}.
      </p>
      <h2>Streitschlichtung</h2>
      <p>
        Die Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle ist vor der
        Veröffentlichung mit dem Auftraggeber zu bestätigen. Solange keine andere Vorgabe vorliegt, sind wir
        nicht verpflichtet und nicht bereit, an einem solchen Verfahren teilzunehmen.
      </p>
    </main>
  );
}
