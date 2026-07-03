import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { DONATION, LEGAL, PAYPAL_DONATION_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Uganda-Hilfe Unterland e.V. Demo-Website.",
};

/**
 * Final legal review required by the organization or legal advisor.
 */
export default function DatenschutzPage() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      subtitle="Informationen zur Verarbeitung personenbezogener Daten (Demo-Website)"
    >
      <p className="uhu-legal-note">
        Hinweis: Diese Datenschutzerklärung ist als Muster für die Demo-Website erstellt. Platzhalter
        müssen durch den Verein bzw. eine Rechtsberatung verbindlich ergänzt werden.
      </p>

      <h2>1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
        Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
        denen Sie persönlich identifiziert werden können.
      </p>
      <h3>Datenerfassung auf dieser Website</h3>
      <p>
        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
        <br />
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
        Kontaktdaten entnehmen Sie dem Abschnitt „Verantwortliche Stelle“ in dieser
        Datenschutzerklärung.
      </p>
      <p>
        <strong>Wie erfassen wir Ihre Daten?</strong>
        <br />
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per E-Mail
        oder Kontaktformular). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
        Besuch der Website durch unsere IT-Systeme erfasst (z. B. technische Daten wie Browser,
        Betriebssystem oder Uhrzeit des Seitenaufrufs).
      </p>

      <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
        behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
        Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>
      <p>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
        Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
        vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
      </p>

      <h2>3. Verantwortliche Stelle</h2>
      <p>
        Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
      </p>
      <p>
        <strong>{LEGAL.organization}</strong>
        <br />
        {LEGAL.address}
        <br />
        <br />
        Telefon: {SITE.phone}
        <br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      <p>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
        mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
      </p>

      <h2>4. Hosting</h2>
      <p>
        Diese Website wird extern gehostet. Personenbezogene Daten, die auf dieser Website erfasst
        werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um
        IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
        Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
      </p>
      <p>
        Host der Demo-Website: {LEGAL.hostingProvider}. Der Einsatz des Hosters erfolgt im Interesse
        einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs.
        1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
        Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung
        ist jederzeit widerrufbar.
      </p>

      <h2>5. Zugriffsdaten / Server-Logfiles</h2>
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
        Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind:
      </p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
        Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
        Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und
        Optimierung seiner Website.
      </p>

      <h2>6. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
        eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass
        die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
        Ihrer Browserzeile.
      </p>

      <h2>7. Kontaktaufnahme per E-Mail oder Telefon</h2>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
        hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
        Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
      </p>
      <p>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
        Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
        vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
        auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
        Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>8. Kontaktformular</h2>
      <p>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
        Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
        und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </p>
      <p>
        <strong>Demo-Hinweis:</strong> Das auf dieser Demo-Website eingebundene Kontaktformular ist ein
        Demonstrationsformular ohne produktive Übermittlung. In der Live-Version ist eine technische
        und datenschutzrechtliche Prüfung der Formularverarbeitung erforderlich.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vertragliche oder vorvertragliche
        Kommunikation) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von
        Anfragen).
      </p>

      <h2>9. Spenden über PayPal</h2>
      <p>
        Auf unserer Website bieten wir die Möglichkeit, Spenden über PayPal abzuwickeln. Anbieter
        dieses Zahlungsdienstes ist die PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard
        Royal, L-2449 Luxembourg.
      </p>
      <p>
        Wenn Sie eine Spende über PayPal tätigen, werden die von Ihnen eingegebenen Zahlungsdaten an
        PayPal übermittelt. Die Übermittlung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
        (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Vertragserfüllung).
      </p>
      <p>
        {PAYPAL_DONATION_URL.trim()
          ? "Bei Nutzung der PayPal-Spendenfunktion werden Sie auf die Website von PayPal weitergeleitet."
          : "Die PayPal-Spendenfunktion wird aktiviert, sobald der Verein einen gültigen PayPal-Spendenlink hinterlegt hat."}
      </p>
      <p>
        Details entnehmen Sie der Datenschutzerklärung von PayPal:{" "}
        <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer">
          https://www.paypal.com/de/webapps/mpp/ua/privacy-full
        </a>
      </p>

      <h2>10. SEPA / Banküberweisung</h2>
      <p>
        Wenn Sie uns per Banküberweisung oder SEPA-Lastschrift unterstützen, verarbeiten wir die
        dabei anfallenden Daten (z. B. Name, IBAN, Betrag, Verwendungszweck) zur Abwicklung der
        Spende und ggf. zur Ausstellung einer Spendenbescheinigung.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung der Spende) sowie ggf. Art. 6
        Abs. 1 lit. c DSGVO (gesetzliche Aufbewahrungspflichten). Bankverbindung des Vereins:{" "}
        {DONATION.holder}, IBAN {DONATION.iban}, BIC {DONATION.bic}.
      </p>
      <p>
        Das SEPA-Lastschriftformular kann auf der Seite{" "}
        <Link href="/downloads/" className="font-semibold text-[#40916c] hover:underline">
          Downloads
        </Link>{" "}
        heruntergeladen werden.
      </p>

      <h2>11. Cookies</h2>
      <p>
        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und
        richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer
        einer Sitzung (Session-Cookies) oder dauerhaft ( permanente Cookies) auf Ihrem Endgerät
        gespeichert.
      </p>
      <p>
        <strong>Demo-Hinweis:</strong> Diese Demo-Website setzt derzeit keine optionalen
        Tracking- oder Marketing-Cookies ein. Technisch notwendige Cookies können durch den Hosting-
        bzw. Sicherheitsbetrieb entstehen. Vor produktivem Einsatz ist ein Cookie-Consent-Management
        zu prüfen.
      </p>

      <h2>12. Eingebettete Inhalte / externe Links</h2>
      <p>
        Diese Website kann Links zu externen Websites enthalten (z. B. Social-Media-Profile,
        Partnerorganisationen). Beim Anklicken solcher Links verlassen Sie unsere Website. Für die
        Verarbeitung personenbezogener Daten auf den verlinkten Seiten ist ausschließlich der jeweilige
        Betreiber verantwortlich.
      </p>
      <p>
        Es werden keine externen Schriftarten von Google-Servern geladen. Schriftarten werden lokal
        aus dem Projekt bereitgestellt.
      </p>

      <h2>13. Social Media Links</h2>
      <p>
        Auf unserer Website befinden sich Verlinkungen zu unseren Profilen in sozialen Netzwerken
        (z. B. Facebook, Instagram). Beim Anklicken werden Sie auf die jeweilige Plattform
        weitergeleitet. Erst dann können personenbezogene Daten durch den jeweiligen Anbieter
        verarbeitet werden.
      </p>
      <p>
        Rechtsgrundlage für die Einbindung der Links ist unser berechtigtes Interesse an einer
        sichtbaren Präsenz in sozialen Medien (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>14. QR-Code</h2>
      <p>
        Auf dieser Website wird ein QR-Code angezeigt, der auf die URL dieser Demo-Website verweist
        ({SITE.url}). Der QR-Code wird lokal im Browser generiert und enthält keine personenbezogenen
        Daten. Beim Scannen wird lediglich die Ziel-URL aufgerufen; dabei gelten die unter
        „Zugriffsdaten / Server-Logfiles“ genannten Hinweise.
      </p>

      <h2>15. Rechte der betroffenen Personen</h2>
      <p>Sie haben jederzeit das Recht:</p>
      <ul>
        <li>gemäß Art. 15 DSGVO Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten;</li>
        <li>gemäß Art. 16 DSGVO Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
        <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die weitere Verarbeitung erforderlich ist;</li>
        <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
        <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
        <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen;</li>
        <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
      </ul>
      <p>
        Sofern die Verarbeitung auf Art. 6 Abs. 1 lit. e oder f DSGVO beruht, haben Sie das Recht,
        aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die
        Verarbeitung einzulegen.
      </p>

      <h2>16. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
        Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
        Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
      </p>
      <p>
        Zuständige Aufsichtsbehörde: {LEGAL.supervisoryAuthority} — bitte vom Verein verbindlich
        ergänzen (z. B. Landesbeauftragter für den Datenschutz Baden-Württemberg).
      </p>

      <p className="mt-10 text-sm text-[#52796f]">
        Stand: Demo-Version · Siehe auch{" "}
        <Link href="/impressum/" className="font-semibold text-[#40916c] hover:underline">
          Impressum
        </Link>
        .
      </p>
    </LegalLayout>
  );
}
