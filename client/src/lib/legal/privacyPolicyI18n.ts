import type { Language } from "@/lib/i18n";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type PrivacyPolicyCopy = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const CONTACT_EMAIL = "agron6922@gmail.com";
const OPERATOR = "Agron Osmani / AGRONDESIGN (AGR Multimedia)";
const ADDRESS = "Luise-Hainlen-Weg 4/4, 73312 Geislingen an der Steige, Deutschland";

const de: PrivacyPolicyCopy = {
  title: "Datenschutzerklärung",
  subtitle: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO und BDSG",
  lastUpdated: "Mai 2026",
  sections: [
    {
      id: "controller",
      title: "1. Verantwortlicher",
      paragraphs: [
        `Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n\n${OPERATOR}\n${ADDRESS}\nE-Mail: ${CONTACT_EMAIL}`,
        "Sofern Sie uns per E-Mail oder Kontaktformular erreichen, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen.",
      ],
    },
    {
      id: "overview",
      title: "2. Allgemeine Hinweise",
      paragraphs: [
        "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website, zur Kommunikation oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.",
        "Diese Erklärung beschreibt den Stand der auf agrmultimedia.eu eingesetzten Technologien. Wir passen sie an, wenn sich Funktionen oder Dienstleister ändern.",
      ],
    },
    {
      id: "hosting",
      title: "3. Hosting",
      paragraphs: [
        "Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden technisch erforderliche Verbindungsdaten verarbeitet, damit die Seite ausgeliefert werden kann.",
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung). Sofern ein Auftragsverarbeitungsvertrag mit Standardvertragsklauseln vorliegt, stützt sich die Übermittlung in Drittländer darauf. Details entnehmen Sie bitte der Datenschutzerklärung von Vercel.",
      ],
    },
    {
      id: "logs",
      title: "4. Server-Logfiles",
      paragraphs: [
        "Der Hosting-Anbieter bzw. der Server kann automatisch Informationen erfassen, die Ihr Browser übermittelt, z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene URL, Referrer-URL, Browsertyp und Betriebssystem.",
        "Diese Daten werden vorübergehend gespeichert, um Stabilität, Sicherheit und Fehleranalyse zu gewährleisten. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht, sofern nicht gesetzlich erforderlich. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.",
      ],
    },
    {
      id: "contact",
      title: "5. Kontaktformular und E-Mail-Kontakt",
      paragraphs: [
        "Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Nachrichtentext) zur Bearbeitung Ihrer Anfrage.",
        "Das Kontaktformular nutzt den Dienst EmailJS (EmailJS.com). Dabei werden Ihre Eingaben an die Server von EmailJS übermittelt, um die Nachricht an uns weiterzuleiten. Anbieter: EmailJS Pte. Ltd. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Kommunikation) bzw. lit. f DSGVO (allgemeine Anfragen).",
        "Bitte übermitteln Sie uns keine besonderen Kategorien personenbezogener Daten (z. B. Gesundheitsdaten), sofern dies nicht erforderlich ist.",
      ],
    },
    {
      id: "storage-local",
      title: "6. Lokale Speicherung (localStorage)",
      paragraphs: [
        "Wir speichern in Ihrem Browser lokal: Ihre Sprachwahl (preferred-language), Ihre Cookie-/Einwilligungsentscheidung (agr-cookie-consent) sowie ggf. sprachspezifische Demo-Einstellungen auf Unterseiten.",
        "Diese Speicherung ist technisch bzw. einwilligungsbasiert erforderlich, damit die Website Ihre Präferenzen beim nächsten Besuch wiedererkennt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO bzw. lit. a DSGVO (Einwilligung für Analytics).",
      ],
    },
    {
      id: "cookies",
      title: "7. Cookies",
      paragraphs: [
        "Cookies sind kleine Textdateien auf Ihrem Endgerät. Wir setzen derzeit vor allem technisch notwendige bzw. präferenzbezogene Speicher ein (siehe Abschnitt 6).",
        "Statistik-Cookies (Google Analytics) werden erst gesetzt, nachdem Sie im Cookie-Banner „Alle akzeptieren“ wählen. Weitere Details finden Sie in unserer Cookie-Richtlinie unter /cookies.",
      ],
    },
    {
      id: "analytics",
      title: "8. Google Analytics (nur nach Einwilligung)",
      paragraphs: [
        "Sofern Sie eingewilligt haben, verwenden wir Google Analytics 4 (Google Ireland Limited / Google LLC) zur anonymisierten bzw. pseudonymisierten Auswertung der Website-Nutzung. Dabei können Cookies gesetzt und Nutzungsprofile erstellt werden.",
        "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre Browser-Daten löschen und beim nächsten Besuch „Nur notwendige“ wählen.",
        "Weitere Informationen: https://policies.google.com/privacy",
      ],
    },
    {
      id: "fonts",
      title: "9. Schriftarten (lokal gehostet)",
      paragraphs: [
        "Zur einheitlichen Darstellung laden wir Schriftarten ausschließlich vom eigenen Webserver bzw. aus dem Website-Bundle (self-hosted .woff2). Es erfolgt keine Verbindung zu Google Fonts (fonts.googleapis.com / fonts.gstatic.com) beim Seitenaufruf.",
        "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (technisch konsistente Darstellung ohne Datenübermittlung an Drittanbieter-Font-CDNs).",
      ],
    },
    {
      id: "external-links",
      title: "10. Externe Links und Dienste",
      paragraphs: [
        "Unsere Website enthält Links zu externen Plattformen (z. B. Facebook, Instagram, LinkedIn, WhatsApp, Google Maps-Suche). Beim Anklicken verlassen Sie unsere Website; für die dortige Verarbeitung gelten die Datenschutzhinweise des jeweiligen Anbieters.",
        "Es werden keine YouTube-Videos, Google-Maps-Karten oder reCAPTCHA-Widgets eingebettet. Externe Bilder (z. B. Portfolio-Unsplash) werden nur beim Laden der jeweiligen Seite vom Drittanbieter abgerufen.",
      ],
    },
    {
      id: "ssl",
      title: "11. SSL- bzw. TLS-Verschlüsselung",
      paragraphs: [
        "Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.",
      ],
    },
    {
      id: "retention",
      title: "12. Speicherdauer",
      paragraphs: [
        "Personenbezogene Daten aus Anfragen speichern wir nur so lange, wie es für die Bearbeitung, gesetzliche Aufbewahrungspflichten oder die Geltendmachung/Rechtsverteidigung von Ansprüchen erforderlich ist.",
        "Server-Logdaten werden durch den Hosting-Anbieter nach deren Richtlinien rotiert gelöscht. Analytics-Daten unterliegen den Aufbewahrungsfristen von Google, sofern Analytics aktiviert wurde.",
      ],
    },
    {
      id: "rights",
      title: "13. Rechte der betroffenen Personen",
      paragraphs: [
        "Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten: Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21).",
        "Sofern die Verarbeitung auf Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).",
        "Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig kann u. a. die Landesbeauftragte für den Datenschutz Baden-Württemberg sein.",
      ],
    },
    {
      id: "objection",
      title: "14. Widerspruchsrecht",
      paragraphs: [
        "Verarbeiten wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch einzulegen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, es liegen zwingende schutzwürdige Gründe vor.",
        "Widerspruch richten Sie bitte an: " + CONTACT_EMAIL,
      ],
    },
    {
      id: "updates",
      title: "15. Aktualität",
      paragraphs: [
        "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder Änderungen unserer Leistungen abbildet.",
      ],
    },
  ],
};

const en: PrivacyPolicyCopy = {
  title: "Privacy Policy",
  subtitle: "Information on personal data processing under GDPR",
  lastUpdated: "May 2026",
  sections: [
    {
      id: "controller",
      title: "1. Data controller",
      paragraphs: [
        `The controller for this website is:\n\n${OPERATOR}\n${ADDRESS}\nEmail: ${CONTACT_EMAIL}`,
      ],
    },
    {
      id: "overview",
      title: "2. General information",
      paragraphs: [
        "We process personal data only where necessary to operate the website, respond to enquiries, or comply with legal obligations.",
        "This policy reflects the technologies currently used on agrmultimedia.eu and will be updated when services change.",
      ],
    },
    {
      id: "hosting",
      title: "3. Hosting",
      paragraphs: [
        "The site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Connection data is processed to deliver pages.",
        "Legal basis: Art. 6(1)(f) GDPR. Transfers to third countries may rely on standard contractual clauses where applicable.",
      ],
    },
    {
      id: "logs",
      title: "4. Server log files",
      paragraphs: [
        "The server may log IP address, timestamp, URL, referrer, browser and OS for security and stability. Legal basis: Art. 6(1)(f) GDPR.",
      ],
    },
    {
      id: "contact",
      title: "5. Contact form and email",
      paragraphs: [
        "When you contact us, we process the data you provide (name, email, message) to handle your request.",
        "The form uses EmailJS; your input is transmitted to EmailJS servers to forward the message. Legal basis: Art. 6(1)(b) or (f) GDPR.",
      ],
    },
    {
      id: "storage-local",
      title: "6. Local storage (localStorage)",
      paragraphs: [
        "We store language preference, cookie consent choice, and demo language settings locally in your browser.",
      ],
    },
    {
      id: "cookies",
      title: "7. Cookies",
      paragraphs: [
        "We use essential/preference storage. Analytics cookies (Google Analytics) are set only after you choose “Accept all” in the cookie banner. See /cookies.",
      ],
    },
    {
      id: "analytics",
      title: "8. Google Analytics (consent only)",
      paragraphs: [
        "If you consent, we use Google Analytics 4 to analyse usage. Legal basis: Art. 6(1)(a) GDPR. You may withdraw consent at any time.",
      ],
    },
    {
      id: "fonts",
      title: "9. Fonts (self-hosted)",
      paragraphs: [
        "Fonts are loaded from our own server/bundle (.woff2). No connection to Google Fonts CDNs is made when you visit the site.",
      ],
    },
    {
      id: "external-links",
      title: "10. External links",
      paragraphs: [
        "Links to social networks, WhatsApp and Google Maps search open third-party sites with their own privacy policies. No YouTube embeds, map embeds or reCAPTCHA.",
      ],
    },
    {
      id: "ssl",
      title: "11. SSL/TLS encryption",
      paragraphs: ["The site is served over HTTPS."],
    },
    {
      id: "retention",
      title: "12. Retention",
      paragraphs: [
        "Enquiry data is kept only as long as needed for processing or legal obligations. Log and analytics retention follows provider policies.",
      ],
    },
    {
      id: "rights",
      title: "13. Your rights",
      paragraphs: [
        "You have rights of access, rectification, erasure, restriction, portability and objection under GDPR. You may lodge a complaint with a supervisory authority.",
      ],
    },
    {
      id: "objection",
      title: "14. Right to object",
      paragraphs: [`Object to processing based on legitimate interests by emailing ${CONTACT_EMAIL}.`],
    },
    {
      id: "updates",
      title: "15. Updates",
      paragraphs: ["We may update this policy to reflect legal or technical changes."],
    },
  ],
};

const sr: PrivacyPolicyCopy = {
  title: "Politika privatnosti",
  subtitle: "Informacije o obradi ličnih podataka u skladu sa GDPR-om",
  lastUpdated: "maj 2026.",
  sections: en.sections.map((s, i) => ({
    ...s,
    title: de.sections[i]?.title.replace(/^\d+\.\s*/, `${i + 1}. `) ?? s.title,
    paragraphs:
      i === 0
        ? [`Odgovorno lice:\n\n${OPERATOR}\n${ADDRESS}\nEmail: ${CONTACT_EMAIL}`]
        : i === 4
          ? [
              "Kada nas kontaktirate, obrađujemo podatke koje pošaljete (ime, email, poruka).",
              "Formular koristi EmailJS; podaci se prosleđuju EmailJS serverima. Pravni osnov: čl. 6(1)(b) ili (f) GDPR.",
            ]
          : i === 8
            ? ["Fontovi se učitavaju lokalno sa našeg servera (.woff2). Nema Google Fonts CDN zahteva."]
            : i === 7
              ? ["Google Analytics 4 učitavamo samo nakon vaše saglasnosti u cookie baneru."]
              : s.paragraphs,
  })),
};

// Serbian with proper translations for key sections
sr.sections[1] = {
  id: "overview",
  title: "2. Opšte napomene",
  paragraphs: [
    "Lične podatke obrađujemo samo kada je to neophodno za rad sajta, odgovor na upite ili zakonske obaveze.",
    "Ova politika odražava tehnologije na agrmultimedia.eu i biće ažurirana po potrebi.",
  ],
};
sr.sections[2] = {
  id: "hosting",
  title: "3. Hosting",
  paragraphs: [
    "Sajt hostuje Vercel Inc., SAD. Tehnički podaci o konekciji obrađuju se radi isporuke stranica.",
    "Pravni osnov: čl. 6(1)(f) GDPR.",
  ],
};

const it: PrivacyPolicyCopy = {
  ...en,
  title: "Informativa sulla privacy",
  subtitle: "Informazioni sul trattamento dei dati personali (GDPR)",
  lastUpdated: "maggio 2026",
  sections: [
    {
      id: "controller",
      title: "1. Titolare del trattamento",
      paragraphs: [`Titolare:\n\n${OPERATOR}\n${ADDRESS}\nEmail: ${CONTACT_EMAIL}`],
    },
    ...en.sections.slice(1).map((s, idx) => ({
      ...s,
      title: [
        "2. Informazioni generali",
        "3. Hosting",
        "4. File di log del server",
        "5. Modulo di contatto ed e-mail",
        "6. Archiviazione locale (localStorage)",
        "7. Cookie",
        "8. Google Analytics (solo con consenso)",
        "9. Font (self-hosted)",
        "10. Link esterni",
        "11. Crittografia SSL/TLS",
        "12. Conservazione",
        "13. Diritti dell'interessato",
        "14. Diritto di opposizione",
        "15. Aggiornamenti",
      ][idx],
    })),
  ],
};

const al: PrivacyPolicyCopy = {
  ...en,
  title: "Politika e privatësisë",
  subtitle: "Informacion mbi përpunimin e të dhënave personale (GDPR)",
  lastUpdated: "maj 2026",
  sections: en.sections.map((s, i) => ({
    ...s,
    title:
      [
        "1. Përgjegjësi",
        "2. Informacion i përgjithshëm",
        "3. Hosting",
        "4. Skedarët e regjistrit të serverit",
        "5. Formulari i kontaktit dhe email",
        "6. Ruajtja lokale (localStorage)",
        "7. Cookies",
        "8. Google Analytics (vetëm me pëlqim)",
        "9. Fontet (të hostuara lokalisht)",
        "10. Lidhje të jashtme",
        "11. Enkriptimi SSL/TLS",
        "12. Afati i ruajtjes",
        "13. Të drejtat tuaja",
        "14. E drejta e kundërshtimit",
        "15. Përditësime",
      ][i] ?? s.title,
  })),
};

al.sections[0].paragraphs = [
  `Përgjegjës:\n\n${OPERATOR}\n${ADDRESS}\nEmail: ${CONTACT_EMAIL}`,
];

const map: Record<Language, PrivacyPolicyCopy> = { de, en, sr, it, al, sq: al };

export function getPrivacyPolicy(lang: Language): PrivacyPolicyCopy {
  return map[lang] ?? de;
}
