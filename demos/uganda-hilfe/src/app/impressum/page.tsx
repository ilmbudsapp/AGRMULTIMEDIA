import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der Uganda-Hilfe Unterland e.V.",
};

/**
 * Final legal review required by the organization or legal advisor.
 */
export default function ImpressumPage() {
  return (
    <LegalLayout
      title="Impressum"
      subtitle="Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV (Demo-Website)"
    >
      <p className="uhu-legal-note">
        Hinweis: Dies ist eine Demo-Website. Die folgenden Angaben enthalten Platzhalter, wo
        verbindliche Vereinsdaten noch eingetragen werden müssen.
      </p>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        <strong>{LEGAL.organization}</strong>
        <br />
        {LEGAL.legalForm}
        <br />
        {LEGAL.address}
      </p>

      <h2>Vertreten durch</h2>
      <p>{LEGAL.representedBy}</p>

      <h2>Kontakt</h2>
      <p>
        Telefon:{" "}
        <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: {LEGAL.registerCourt}
        <br />
        Registernummer: {LEGAL.registerNumber}
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>{LEGAL.contentResponsible}</p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
        den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
        jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
        allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
        ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
        erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
        werden wir derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
        nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
        Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
        umgehend entfernen.
      </p>

      <p className="mt-10 text-sm text-[#52796f]">
        Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
        <Link href="/datenschutz/" className="font-semibold text-[#40916c] hover:underline">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </LegalLayout>
  );
}
