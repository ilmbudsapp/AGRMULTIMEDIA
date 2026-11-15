import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von RL Gartenservice.",
  alternates: { canonical: "/datenschutz" },
};

export default function PrivacyPage() {
  return (
    <main id="inhalt" className="legal">
      <h1>Datenschutzerklärung</h1>
      <p className="notice">
        Vor der Veröffentlichung den konkreten Hosting-Anbieter eintragen. Die Website setzt keine
        Analyse- oder Marketing-Cookies und bindet keine externen Karten, Schriften oder Social-Media-Plugins ein.
      </p>
      <h2>Verantwortlicher</h2>
      <p>
        {site.name}, {site.owner}, {site.address.street}, {site.address.postalCode} {site.address.city},{" "}
        E-Mail <a href={`mailto:${site.email}`}>{site.email}</a>, Telefon{" "}
        <a href={site.phoneTel}>{site.phoneDisplay}</a>.
      </p>
      <h2>Hosting und Serverdaten</h2>
      <p>
        Beim Aufruf der Website verarbeitet der Hosting-Anbieter die technisch erforderlichen
        Verbindungsdaten, insbesondere IP-Adresse, Datum, Uhrzeit, aufgerufene Seite und Browsertyp. Das
        geschieht, um die Website auszuliefern und die Sicherheit zu gewährleisten. Rechtsgrundlage ist
        Artikel 6 Abs. 1 lit. f DSGVO. Der konkrete Anbieter wird vor dem öffentlichen Start ergänzt.
      </p>
      <h2>Kontaktformular</h2>
      <p>
        Wenn Sie das Formular nutzen, verarbeiten wir die von Ihnen eingegebenen Angaben: Name,
        Telefonnummer oder E-Mail-Adresse, gewünschte Dienstleistung, Ort oder Postleitzahl, Nachricht und
        freiwillig hochgeladene Fotos. Die Verarbeitung dient dazu, Ihre Anfrage zu beantworten und
        gegebenenfalls ein Angebot vorzubereiten. Rechtsgrundlage ist Artikel 6 Abs. 1 lit. b DSGVO, soweit
        es um vorvertragliche Schritte geht, sonst Artikel 6 Abs. 1 lit. f DSGVO.
      </p>
      <p>
        Fotos werden nur zur Bearbeitung der Anfrage verwendet. Wir geben die Daten nicht zu Werbezwecken
        weiter. Die Angaben werden gelöscht, sobald die Anfrage erledigt ist und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen. Kommt ein Auftrag zustande, gelten die dafür üblichen
        Aufbewahrungsfristen.
      </p>
      <h2>WhatsApp, Instagram und weitere Profile</h2>
      <p>
        Telefon, E-Mail und die Links zu WhatsApp oder Instagram führen aus dieser Website hinaus. Erst wenn
        Sie einen solchen Link öffnen, gelten die Bedingungen des jeweiligen Anbieters. Auf der Website sind
        keine Social-Media-Plugins eingebunden. Für Facebook, TikTok und das Google-Unternehmensprofil werden
        hier keine Links gesetzt, solange die genauen Adressen nicht vorliegen.
      </p>
      <h2>Cookies</h2>
      <p>
        Diese Website setzt keine Analyse- oder Marketing-Cookies. Für den Betrieb des Kontaktformulars ist
        keine Einwilligung in optionale Cookies erforderlich. Es gibt daher keine gesonderten
        Cookie-Einstellungen.
      </p>
      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und
        Datenübertragbarkeit sowie das Recht, einer Verarbeitung auf Grundlage von Artikel 6 Abs. 1 lit. f
        DSGVO zu widersprechen. Außerdem können Sie sich bei einer Aufsichtsbehörde beschweren. Zuständig für
        Bayern ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA).
      </p>
    </main>
  );
}
