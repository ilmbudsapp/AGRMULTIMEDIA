import { Crumbs } from "@/components/Crumbs";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { breadcrumbNode, businessNode, graph, webPageNode, websiteNode } from "@/lib/jsonld";
import { simpleMetadata } from "@/lib/page-meta";

const title = "Datenschutzerklärung | RL Gartenservice";
const description = "Datenschutzerklärung von RL Gartenservice.";

export const metadata = simpleMetadata(title, description, "/datenschutz");

export default function PrivacyPage() {
  return (
    <main id="inhalt">
      <JsonLd
        data={graph([
          businessNode(),
          websiteNode(),
          webPageNode("/datenschutz", title, description),
          breadcrumbNode("/datenschutz", [
            { name: "Startseite", path: "/" },
            { name: "Datenschutzerklärung", path: "/datenschutz" },
          ]),
        ])}
      />
      <div data-reveal="card">
        <div className="legal card-motion">
          <Crumbs items={[{ href: "/", label: "Startseite" }, { label: "Datenschutz" }]} />
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
            Diese Website wird von Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA,
            ausgeliefert. Das ergibt sich aus der Projektkonfiguration und aus der Server-Kennung der
            veröffentlichten Seite.
          </p>
          <p>
            Beim Aufruf verarbeitet Vercel die Verbindungsdaten, die nötig sind, um die Seite auszuliefern und
            den Betrieb abzusichern. Nach den veröffentlichten Angaben von Vercel gehören dazu insbesondere die
            IP-Adresse, daraus abgeleitete Angaben zu Stadt und Land sowie technische Angaben zur Anfrage.
            Eine genaue Standortbestimmung findet dabei nach diesen Angaben nicht statt. Rechtsgrundlage ist
            Artikel 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ist der sichere und funktionsfähige
            Betrieb der Website.
          </p>
          <p>
            Eine eigene Speicherdauer für diese Verbindungsdaten legt dieser Betrieb nicht fest. Sie richtet
            sich nach den Bedingungen von Vercel. Der für dieses Konto geltende Zeitraum ist in den Unterlagen
            dieses Auftritts nicht hinterlegt.
          </p>
          <p>
            Vercel beschreibt, dass die Verarbeitung vorrangig in den USA stattfindet und Daten auch in
            anderen Ländern verarbeitet werden können. Für Übermittlungen aus dem Europäischen Wirtschaftsraum
            verweist Vercel in seinen veröffentlichten Unterlagen auf Standardvertragsklauseln und eine
            Zertifizierung nach dem EU-US Data Privacy Framework. Ob für dieses Konto ein
            Auftragsverarbeitungsvertrag geschlossen ist, ist in den Unterlagen dieses Auftritts nicht
            hinterlegt. Hinweise von Vercel stehen unter{" "}
            <a href="https://vercel.com/legal/privacy-notice">vercel.com/legal/privacy-notice</a>.
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
            Auf der Kontaktseite können wir den Betriebssitz auf einer Karte von Google Maps zeigen:{" "}
            {site.address.street}, {site.address.postalCode} {site.address.city}. Die Karte wird erst geladen,
            wenn Sie das erlauben. Vorher sehen Sie die Adresse und die Links „Google Unternehmensprofil“ und
            „Route planen“. Der Profil-Link öffnet den öffentlichen Google-Eintrag von {site.name}. Derselbe
            Link steht auch in der Fußzeile. Diese Links bauen erst beim Anklicken eine Verbindung zu Google
            auf.
          </p>
          <p>
            Wenn Sie die Karte erlauben, lädt Ihr Browser sie von Google. Google kann dabei die IP-Adresse und
            technische Angaben zum Gerät verarbeiten und eigene Cookies speichern, auch außerhalb des
            Europäischen Wirtschaftsraums. Google stützt solche Übermittlungen auf seine geltenden
            Datenschutzrahmen, insbesondere Standardvertragsklauseln, soweit kein Angemessenheitsbeschluss
            greift. Hinweise von Google stehen unter{" "}
            <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>.
          </p>
          <p>
            Rechtsgrundlage für das Laden der Karte ist Ihre Einwilligung, Artikel 6 Abs. 1 lit. a DSGVO und
            § 25 Abs. 1 TDDDG. Die Entscheidung wird nur lokal in Ihrem Browser gespeichert, nicht auf unserem
            Server. Sie können sie jederzeit über „Cookie-Einstellungen“ unten auf der Seite ändern. Lehnen Sie
            ab oder widerrufen Sie die Einwilligung, wird die Karte nicht mehr von Google geladen.
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
            Links zu Instagram, Facebook und TikTok sind gewöhnliche externe Links. Erst Ihr Klick stellt eine
            Verbindung zu der jeweiligen Plattform her. Es sind keine Social-Media-Plugins, keine
            Like-Schaltflächen und keine eingebetteten Beiträge auf der Seite, die schon beim Laden eine
            Verbindung aufbauen.
          </p>
          <p>
            Verlinkt sind die Profile rl_gartenservice_augsburg und rlbodenlegeraugsburg auf Instagram, das
            Facebook-Profil von RL Gartenservice und das TikTok-Profil @rl.gartenservice.
          </p>

          <h2>Bilder, Videos und Schriften</h2>
          <p>
            Bilder, Videos und die Schrift werden mit dieser Website ausgeliefert. Es ist kein zusätzlicher
            Mediendienst eingebunden. Die dabei anfallenden Verbindungsdaten sind im Abschnitt „Hosting“
            beschrieben.
          </p>
          <p>
            Die Schrift ist Instrument Sans und liegt auf dem Server dieser Website. Beim Seitenaufruf wird
            keine Schrift von Google oder einem anderen Schriftdienst nachgeladen.
          </p>
          <p>
            Auf der Startseite folgt auf das Standbild ein kurzes Video ohne Ton. Geladen wird nur die Fassung
            für das jeweilige Gerät, und erst nachdem das Standbild angezeigt ist. Wer reduzierte Bewegung
            eingestellt hat, sieht das Standbild. Ein Video in der Galerie wird erst geladen, wenn Sie es
            öffnen. Es wird kein externes Videoportal aufgerufen.
          </p>
          <h2>Keine Analysewerkzeuge</h2>
          <p>
            Es sind keine Analysewerkzeuge und keine Werbe- oder Marketingdienste eingebunden. Die einzige
            eingebettete Karte ist Google Maps auf der Kontaktseite; sie ist im Abschnitt „Google Maps“
            beschrieben.
          </p>
          <p>
            Diese Website selbst setzt keine Cookies und kein Tracking. Eine Einwilligung fragen wir nur für
            die Google-Karte auf der Kontaktseite ab, weil Google dort eigene Cookies speichern kann. Die
            Schaltflächen stehen in dem Hinweis und später unter „Cookie-Einstellungen“. Technisch nötige
            Verbindungsdaten des Hostings fallen unter die oben genannte Interessenabwägung.
          </p>

          <h2>Empfänger</h2>
          <p>
            Empfänger der Auslieferung der Website, einschließlich der Bilder, Videos und Schriften, ist
            Vercel Inc. Google ist Empfänger, sobald eine E-Mail an das Postfach bei Google ankommt, sobald
            Sie die Karte erlaubt haben, und sobald Sie das Google Unternehmensprofil oder „Route planen“
            anklicken. Bei einem WhatsApp-, Instagram-, Facebook- oder TikTok-Klick ist die jeweilige
            Plattform Empfängerin der dann entstehenden Verbindung. Eine Weitergabe zu Werbezwecken findet
            nicht statt.
          </p>

          <h2>Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und
            Datenübertragbarkeit. Soweit wir Daten auf Grundlage von Artikel 6 Abs. 1 lit. f DSGVO
            verarbeiten, können Sie widersprechen. Die Einwilligung für die Google-Karte können Sie jederzeit
            über „Cookie-Einstellungen“ mit Wirkung für die Zukunft widerrufen.
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
