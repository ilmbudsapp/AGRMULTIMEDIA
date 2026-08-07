import { Link } from "wouter";
import { ROUTES } from "@/lib/siteRoutes";

type Variant = "home" | "webdesign-seo" | "pillar";

const COPY: Record<
  Variant,
  {
    takeawaysTitle: string;
    takeaways: string[];
    qaTitle: string;
    qa: { q: string; a: string }[];
    defsTitle: string;
    defs: { term: string; def: string }[];
    stat: string;
    statSource: string;
    quote: string;
    quoteCite: string;
    tipsTitle: string;
    tips: string[];
    conclusionTitle: string;
    conclusion: string;
    cta: string;
  }
> = {
  home: {
    takeawaysTitle: "Das Wichtigste auf einen Blick",
    takeaways: [
      "Webdesign für lokale Firmen in Geislingen — primärer Fokus von AGR Multimedia.",
      "Werbeagentur-Leistungen mit klarem Schwerpunkt: Websites, die Anfragen bringen.",
      "Grafikdesign und Social Media ergänzen das Angebot — auf eigenen Service-Seiten.",
      "Kostenlose Erstberatung, Antwort meist innerhalb von 24 Stunden.",
    ],
    qaTitle: "Kurze Antworten",
    qa: [
      {
        q: "Was macht AGR Multimedia?",
        a: "Webdesign und Webentwicklung für lokale Firmen in Geislingen an der Steige — Handwerk, Dienstleister und KMU. Grafikdesign und Marketing ergänzend.",
      },
      {
        q: "Was kostet eine Website?",
        a: "Ab ca. 890 € für eine Basis-Website; SEO-Pakete ab ca. 1.490 €. Jedes Projekt ist individuell — Sie erhalten ein transparentes Angebot nach dem Erstgespräch.",
      },
      {
        q: "Sind Sie eine Werbeagentur in Geislingen?",
        a: "Ja — mit Fokus auf Webdesign für lokale Unternehmen. Social Media, Grafikdesign und KI-Multimedia biete ich ergänzend an.",
      },
      {
        q: "Warum sind professionelle Websites wichtig?",
        a: "Viele Kunden suchen zuerst online. Ohne professionellen Auftritt verlieren Sie Anfragen an Konkurrenten — auch wenn Ihre Arbeit vor Ort exzellent ist.",
      },
    ],
    defsTitle: "Begriffe kurz erklärt",
    defs: [
      {
        term: "Webdesign",
        def: "Gestaltung und Umsetzung Ihrer Website — Layout, Struktur und Inhalte für Vertrauen und Anfragen.",
      },
      {
        term: "Werbeagentur",
        def: "Agentur für Marketing und Online-Auftritt — hier mit Schwerpunkt Webdesign für lokale Firmen in Geislingen.",
      },
      {
        term: "Lokales SEO",
        def: "Optimierung für regionale Google-Suchen (z. B. „Webdesign Geislingen“) und Google Maps.",
      },
      {
        term: "Grafikdesign",
        def: "Logo, Flyer und Markenvisuals — ergänzend zum Webauftritt, nicht im Vordergrund.",
      },
    ],
    stat:
      "Laut Branchenanalysen (u. a. Google Think, 2024) steigert eine mobil optimierte, klar strukturierte lokale Website die Wahrscheinlichkeit einer Kontaktanfrage deutlich — oft im zweistelligen Prozentbereich.",
    statSource: "Quelle: Google Think / HubSpot Local Marketing Reports",
    quote:
      "Lokale Sichtbarkeit und Vertrauenssignale sind für KMU oft wichtiger als teure Werbekampagnen — die Website ist der zentrale Anker.",
    quoteCite: "Praxis E-E-A-T & lokales Marketing, AGR Multimedia",
    tipsTitle: "Praktische Tipps",
    tips: [
      "Sie sollten Telefon und Kontaktformular auf jeder wichtigen Seite sichtbar platzieren.",
      "Probieren Sie, Ihre Leistungen in Alltagssprache zu erklären — nicht in Fachjargon.",
      "Achten Sie darauf, dass Name, Adresse und Telefon überall identisch sind (Website, Google, Impressum).",
    ],
    conclusionTitle: "Fazit",
    conclusion:
      "Kurz gesagt: AGR Multimedia positioniert sich als Webdesigner für lokale Firmen in Geislingen — Werbeagentur mit klarem Website-Fokus. Grafikdesign und Marketing ergänzen das Angebot. Kostenlose Erstberatung, Antwort in 24h.",
    cta: "Kostenlose Beratung anfragen",
  },
  "webdesign-seo": {
    takeawaysTitle: "Key Takeaways — Webdesign & SEO",
    takeaways: [
      "Webdesign und SEO gehören zusammen — Struktur von Anfang an planen.",
      "Lokale Signale (Geislingen, Göppingen) natürlich einbinden.",
      "Pakete ab 890 € — individuelles Angebot nach Erstgespräch.",
      "On-Page-SEO, Maps und klare CTAs sind Standard im SEO-Paket.",
    ],
    qaTitle: "Häufige Fragen — kompakt",
    qa: [
      {
        q: "Was kostet Webdesign mit SEO?",
        a: "SEO-optimierte Websites ab ca. 1.490 €; Komplettpaket ab ca. 2.290 € — jeweils als Richtwert „ab“.",
      },
      {
        q: "Wie lange dauert die Umsetzung?",
        a: "Zwei bis vier Wochen für eine übersichtliche Business-Website, abhängig von Inhalten und Umfang.",
      },
      {
        q: "Für wen eignet sich das Paket?",
        a: "Handwerk, Dienstleister und KMU in Geislingen, Göppingen und der Region.",
      },
    ],
    defsTitle: "Definitionen",
    defs: [
      { term: "On-Page-SEO", def: "Titel, Überschriften, Texte und technische Basis direkt auf Ihrer Website." },
      { term: "Lokales SEO", def: "Sichtbarkeit bei regionalen Suchanfragen und im Google Maps Paket." },
      { term: "Conversion", def: "Mehr Besucher, die tatsächlich anfragen — durch klare Nutzerführung." },
      { term: "Responsive Design", def: "Optimale Darstellung auf allen Geräten — Standard bei jedem Projekt." },
    ],
    stat:
      "Studien zu lokalem Suchverhalten (Google, 2024) zeigen: Ein großer Teil der KMU-Anfragen startet mobil — wer dort nicht überzeugt, verliert Kontakte.",
    statSource: "Quelle: Google / Statista Digital Marketing Outlook",
    quote: "SEO ohne gutes Webdesign ist wie Werbung ohne Ladenschild — beides muss zusammenpassen.",
    quoteCite: "AGR Multimedia — Webdesign Geislingen",
    tipsTitle: "Actionable Tips",
    tips: [
      "Sie sollten jede Hauptleistung auf einer eigenen Seite erklären.",
      "Probieren Sie, echte Projektfotos statt Stockbilder zu nutzen.",
      "Achten Sie darauf, dass Ladezeiten unter drei Sekunden bleiben.",
    ],
    conclusionTitle: "Verdict",
    conclusion:
      "Webdesign & SEO aus einer Hand spart Zeit und liefert stimmige Ergebnisse. Wenn Sie in Geislingen und Umgebung mehr Anfragen wollen, starten Sie mit einem unverbindlichen Gespräch.",
    cta: "Individuelles Angebot anfragen",
  },
  pillar: {
    takeawaysTitle: "Key Takeaways — Webdesign Geislingen",
    takeaways: [
      "Professionelles Webdesign vermittelt Vertrauen vor dem ersten Anruf.",
      "Lokales SEO und Google Maps gehören zur regionalen Sichtbarkeit.",
      "Handwerk und KMU brauchen klare, mobile Seiten — keine Überladung.",
      "Individuelle Angebote statt Pauschalpreise ohne Kontext.",
    ],
    qaTitle: "Schnelle Q&A",
    qa: [
      {
        q: "Was kostet eine Website in Geislingen?",
        a: "Basis ab ca. 890 €; nach Erstgespräch erhalten Sie ein transparentes Individualangebot.",
      },
      {
        q: "Wie lange dauert ein Projekt?",
        a: "Oft zwei bis vier Wochen für eine Standard-Business-Website.",
      },
      {
        q: "Warum lokales Webdesign?",
        a: "Weil Kunden regional suchen — und Sie persönlich erreichbar sein sollten.",
      },
    ],
    defsTitle: "Glossar",
    defs: [
      { term: "Webdesign", def: "Planung, Design und Umsetzung Ihrer Business-Website." },
      { term: "Lokales SEO", def: "Optimierung für Suchen mit Ortsbezug und Maps." },
      { term: "NAP", def: "Name, Adresse, Telefon — überall identisch für Google-Vertrauen." },
      { term: "Responsive Design", def: "Automatische Anpassung an Bildschirmgrößen." },
    ],
    stat:
      "Laut HubSpot State of Marketing (2025) nutzen die meisten B2C-Kunden vor dem Kauf mehrere Online-Quellen — Ihre Website ist oft die erste.",
    statSource: "Quelle: HubSpot / Google Business Profile Hilfe",
    quote:
      "Experten betonen: Für KMU in der Region ist die Kombination aus Website, Google-Profil und echten Bewertungen der stärkste lokale Hebel.",
    quoteCite: "Lokales Marketing — Branchenpraxis",
    tipsTitle: "Tipps für Betriebe",
    tips: [
      "Sie sollten Ihr Google-Unternehmensprofil parallel zur Website pflegen.",
      "Probieren Sie, Anfragen über WhatsApp zusätzlich anzubieten.",
      "Achten Sie darauf, Referenzen mit kurzen Ergebnissen zu zeigen.",
    ],
    conclusionTitle: "Fazit & nächster Schritt",
    conclusion:
      "Zusammengefasst lohnt sich professionelles Webdesign in Geislingen für jeden Betrieb, der online gefunden werden will. Der nächste Schritt: kurzes Erstgespräch — unverbindlich und klar.",
    cta: "Jetzt Beratung anfragen",
  },
};

type Props = { variant: Variant; className?: string };

export default function SeoAeoEnhancement({ variant, className = "" }: Props) {
  const c = COPY[variant];
  const sectionClass = `mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 ${className}`;

  return (
    <aside className={sectionClass} aria-label="SEO und AEO Ergänzungen">
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white md:text-2xl">{c.takeawaysTitle}</h2>
        <ul className="mt-4 space-y-2 text-white/75">
          {c.takeaways.map((t) => (
            <li key={t.slice(0, 30)} className="flex gap-2">
              <span className="text-blue-400">·</span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white md:text-2xl">{c.qaTitle}</h2>
        <dl className="mt-4 space-y-4">
          {c.qa.map((item) => (
            <div key={item.q}>
              <dt className="font-medium text-white">{item.q}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-white/75 md:text-base">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white md:text-2xl">{c.defsTitle}</h2>
        <dl className="mt-4 space-y-3">
          {c.defs.map((d) => (
            <div key={d.term}>
              <dt className="font-semibold text-blue-200">{d.term}</dt>
              <dd className="mt-1 text-sm text-white/75 md:text-base">{d.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mb-8 text-sm leading-relaxed text-white/70 md:text-base">
        <strong>Datenpunkt:</strong> {c.stat}{" "}
        <cite className="not-italic text-white/50">({c.statSource})</cite>
      </p>

      <blockquote className="mb-8 border-l-4 border-blue-400/60 pl-4 italic text-white/80">
        „{c.quote}" — <cite>{c.quoteCite}</cite>
      </blockquote>

      <section className="mb-12">
        <h2 className="text-lg font-semibold text-white">{c.tipsTitle}</h2>
        <ul className="mt-3 space-y-2 text-white/75">
          {c.tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-semibold text-white">{c.conclusionTitle}</h2>
        <p className="mt-3 leading-relaxed text-white/80">{c.conclusion}</p>
        <p className="mt-2 text-xs text-white/50">
          Stand: <time dateTime="2026-08-05">5. August 2026</time>
        </p>
        <Link
          href={ROUTES.kontakt}
          className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0a0a0f] hover:bg-white/90"
        >
          {c.cta}
        </Link>
      </section>
    </aside>
  );
}
