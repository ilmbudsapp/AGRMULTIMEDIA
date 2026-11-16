import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von RL Gartenservice.",
  alternates: { canonical: "/datenschutz" },
};

export default function PrivacyPage() {
  return (
    <main id="inhalt">
      <div data-reveal="card">
        <div className="legal card-motion">
          <h1>Datenschutzerklärung</h1>
          <p>
            Diese Erklärung beschreibt die Verarbeitung personenbezogener Daten auf dieser Website nach dem
            Stand der hier tatsächlich eingesetzten Funktionen.
          </p>

          <h2>Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist {site.name}, {site.owner},{" "}
            {site.address.street}, {site.address.postalCode} {site.address.city}, {site.address.country}.
          </p>
          <p>
            Telefon: <a href={site.phoneTel}>{site.phoneDisplay}</a>
            <br />
            E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>Ein Datenschutzbeauftragter ist nicht benannt.</p>

          <h2>Hosting</h2>
          <p>
            Beim Aufruf der Website verarbeitet der jeweilige Hosting-Anbieter die Verbindungsdaten, die
            erforderlich sind, um die Seite auszuliefern und den Betrieb abzusichern. Rechtsgrundlage ist
            Artikel 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ist der sichere und funktionsfähige
            Betrieb der Website.
          </p>
          <p>
            Der konkrete Hosting-Anbieter, der genaue Inhalt der Serverprotokolle und deren Speicherdauer
            sind für den öffentlichen Betrieb noch nicht festgelegt. Diese Angaben werden ergänzt, sobald der
            produktive Anbieter feststeht. Die Registrierung der Domain begründet für sich genommen nicht,
            wer die Website hostet.
          </p>

          <h2>Kontakt per Telefon und E-Mail</h2>
          <p>
            Wenn Sie uns anrufen oder eine E-Mail senden, verarbeiten wir die von Ihnen mitgeteilten Angaben,
            um die Anfrage zu beantworten und gegebenenfalls ein Angebot vorzubereiten. Das sind in der Regel
            Ihr Name, Ihre Telefonnummer oder E-Mail-Adresse und der Inhalt Ihrer Mitteilung.
          </p>
          <p>
            Rechtsgrundlage ist Artikel 6 Abs. 1 lit. b DSGVO, soweit es um vorvertragliche Schritte auf Ihre
            Anfrage geht. Soweit wir die Anfrage im Übrigen bearbeiten, ist Rechtsgrundlage Artikel 6 Abs. 1
            lit. f DSGVO. Das berechtigte Interesse ist die Beantwortung von Anfragen an den Betrieb.
          </p>
          <p>
            Nachrichten an {site.email} erreichen ein Postfach bei Google. Google verarbeitet diese Nachrichten
            als Anbieter des Postfachs. Dabei kann eine Übermittlung in ein Land außerhalb des Europäischen
            Wirtschaftsraums stattfinden. Google stützt solche Übermittlungen auf seine geltenden
            Datenschutzrahmen, insbesondere Standardvertragsklauseln, soweit kein Angemessenheitsbeschluss
            greift.
          </p>

          <h2>Google Maps</h2>
          <p>
            Auf der Kontaktseite zeigen wir den Betriebssitz auf einer Karte von Google Maps: {site.address.street},{" "}
            {site.address.postalCode} {site.address.city}. Beim Öffnen dieser Seite lädt Ihr Browser die Karte von
            Google. Dabei wird eine Verbindung zu Google aufgebaut. Google kann die IP-Adresse und technische
            Angaben zum Gerät verarbeiten, auch außerhalb des Europäischen Wirtschaftsraums.
          </p>
          <p>
            Google stützt solche Übermittlungen auf seine geltenden Datenschutzrahmen, insbesondere
            Standardvertragsklauseln, soweit kein Angemessenheitsbeschluss greift. Hinweise von Google stehen unter{" "}
            <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>.
          </p>
          <p>
            Rechtsgrundlage ist Artikel 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ist, Besuchern den
            Standort des Betriebs zu zeigen. Der Link „Route in Google Maps öffnen“ baut erst beim Anklicken eine
            weitere Verbindung zu Google auf.
          </p>

          <h2>WhatsApp</h2>
          <p>
            Der WhatsApp-Link und die Schaltfläche öffnen WhatsApp erst, wenn Sie sie anklicken. Beim bloßen
            Aufruf dieser Website wird keine Verbindung zu WhatsApp aufgebaut und kein WhatsApp-Inhalt
            eingebettet.
          </p>
          <p>
            Wenn Sie uns über WhatsApp schreiben, verarbeitet Meta Platforms die Nachricht nach den Bedingungen
            von WhatsApp. Wir verarbeiten den Inhalt, den Sie uns dort senden, um die Anfrage zu beantworten.
            Rechtsgrundlage ist Artikel 6 Abs. 1 lit. b DSGVO, soweit vorvertragliche Schritte betroffen sind,
            sonst Artikel 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ist die Bearbeitung der an uns
            gerichteten Nachricht. Die Nummer für WhatsApp lautet {site.whatsappDisplay}.
          </p>

          <h2>Instagram, Facebook und TikTok</h2>
          <p>
            Links zu Instagram und Facebook sind gewöhnliche externe Links. Erst Ihr Klick stellt eine
            Verbindung zu der jeweiligen Plattform her. Es sind keine Social-Media-Plugins, keine
            Like-Schaltflächen und keine eingebetteten Beiträge auf der Seite, die schon beim Laden eine
            Verbindung aufbauen.
          </p>
          <p>
            Verlinkt sind die Profile rl_gartenservice_augsburg und rlbodenlegeraugsburg auf Instagram sowie
            das Facebook-Profil von RL Gartenservice. TikTok wird namentlich genannt. Solange keine Adresse
            hinterlegt ist, ist der Name kein Link und es entsteht keine Verbindung zu TikTok.
          </p>

          <h2>Schriften, Karten, Video und Zugriffe auf das Endgerät</h2>
          <p>
            Die Schrift wird mit der Website ausgeliefert. Beim Seitenaufruf wird keine Schrift von Google
            oder einem anderen Schriftdienst nachgeladen. Es sind keine Analysewerkzeuge und keine Werbe-
            oder Marketingdienste eingebunden. Die einzige eingebettete Karte ist Google Maps auf der
            Kontaktseite; sie ist im Abschnitt „Google Maps“ beschrieben.
          </p>
          <p>
            Auf der Startseite läuft ein kurzes Video der Gartenansicht. Es liegt auf dem Server dieser
            Website, hat keinen Ton und ruft kein externes Videoportal auf. Geladen wird nur die Fassung
            für das jeweilige Gerät. Wer reduzierte Bewegung eingestellt hat, sieht stattdessen das
            Standbild. Fotos und Videos in der Galerie liegen ebenfalls auf diesem Server. Ein Galerievideo
            wird erst geladen, wenn Sie es öffnen.
          </p>
          <p>
            Diese Website selbst speichert keine optionalen Cookies und kein Tracking. Eine Einwilligung
            nach § 25 TDDDG holen wir für eigene Cookies nicht ein, weil wir keine setzen. Beim Laden der
            Google-Karte auf der Kontaktseite kann Google eigene Cookies speichern. Technisch nötige
            Verbindungsdaten des Hostings fallen unter die oben genannte Interessenabwägung. Es gibt keine
            Schaltfläche zum Widerruf einer Einwilligung, weil wir selbst keine solche Einwilligung einholen.
          </p>

          <h2>Empfänger</h2>
          <p>
            Empfänger sind der noch nicht benannte Hosting-Anbieter, soweit er die Seite ausliefert, sowie
            Google als Anbieter des E-Mail-Postfachs, sobald eine Nachricht dort ankommt, und als Anbieter
            der Karte, sobald die Kontaktseite geladen wird. Bei einem WhatsApp-, Instagram- oder
            Facebook-Klick ist die jeweilige Plattform Empfängerin der dann entstehenden Verbindung. Eine
            Weitergabe zu Werbezwecken findet nicht statt.
          </p>

          <h2>Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und
            Datenübertragbarkeit. Soweit wir Daten auf Grundlage von Artikel 6 Abs. 1 lit. f DSGVO
            verarbeiten, können Sie widersprechen. Eine Einwilligung können Sie mit Wirkung für die Zukunft
            widerrufen, sobald eine Verarbeitung auf einer Einwilligung beruht. Das ist bei den hier
            beschriebenen Vorgängen derzeit nicht der Fall.
          </p>
          <p>
            Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Für den nicht-öffentlichen
            Bereich in Bayern ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18,
            91522 Ansbach,{" "}
            <a href="https://www.lda.bayern.de/">https://www.lda.bayern.de/</a>, zuständig.
          </p>
          <p>Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.</p>
        </div>
      </div>
    </main>
  );
}
