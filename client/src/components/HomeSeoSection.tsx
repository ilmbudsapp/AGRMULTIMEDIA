import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import AuthorByline from "@/components/AuthorByline";
import HomeSeoDefinitions from "@/components/HomeSeoDefinitions";
import { SrBody, EnBody, DeBody, ItBody, AlBody } from "@/components/HomeSeoBodies";
import { SEO_TOPIC_IDS } from "@/lib/seoTopicIds";

function bodyForLang(lang: Language) {
  switch (lang) {
    case "sr":
      return <SrBody />;
    case "en":
      return <EnBody />;
    case "de":
      return <DeBody />;
    case "it":
      return <ItBody />;
    case "al":
    case "sq":
      return <AlBody />;
    default:
      return <EnBody />;
  }
}

type SectionLangKey = "sr" | "en" | "de" | "it" | "al";

function sectionLangKey(lang: Language): SectionLangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

type SectionCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  aria: string;
  asideAria: string;
  asideLead: string;
  externalW3C: string;
  externalSchema: string;
  externalMdn: string;
  lastUpdatedIso: string;
  lastUpdatedDisplay: string;
  lastUpdatedSuffix: string;
  takeawaysTitle: string;
  takeaways: string[];
  tocNavAria: string;
  tocTitle: string;
  tocLabels: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const SECTION_COPY: Record<SectionLangKey, SectionCopy> = {
  sr: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafika, AI i digitalni marketing za mala preduzeća",
    subtitle:
      "Detaljan pregled usluga, načina rada i odgovornog korišćenja AI — sa internim linkovima ka ključnim stranicama.",
    aria: "Tekstualni pregled usluga, AI perspektiva i kontakt",
    asideAria: "Autoritativni izvori i otvoreni standardi",
    asideLead: "Rad usklađujemo sa javnim specifikacijama i referencama:",
    externalW3C: "W3C — veb standardi",
    externalSchema: "Schema.org — strukturisani podaci",
    externalMdn: "MDN — HTML dokumentacija",
    lastUpdatedIso: "2026-05-08",
    lastUpdatedDisplay: "8. maj 2026.",
    lastUpdatedSuffix: "Poslednje ažuriranje ovog teksta.",
    takeawaysTitle: "Ključne tačke",
    takeaways: [
      "Studio u Geislingen an der Steige — web, grafika i video za mala preduzeća u EU.",
      "Prvo struktura stranica i poruka, zatim dizajn; tehnički SEO i performanse od početka.",
      "AI koristimo za skicu i produkciju; konačni kvalitet i odgovornost su uvek ljudski.",
      "Na upit obično odgovaramo u roku od 24 sata; jasan obim i rokovi u pisanom dogovoru.",
    ],
    tocNavAria: "Sadržaj na ovoj stranici",
    tocTitle: "Na ovoj stranici",
    tocLabels: [
      "Web dizajn — šta dobijate",
      "Grafički dizajn i brend",
      "AI u produkciji",
      "Prednosti i mane AI",
      "Hibrid vs šablon",
      "Zašto AGR Multimedia",
      "Kako početi projekat",
    ],
    faqTitle: "Česta pitanja",
    faq: [
      {
        q: "Radite li samo u okolini Geislingena?",
        a: "Baza je Geislingen an der Steige (Baden-Württemberg), ali radimo sa klijentima širom EU i dalje — konsultacije mogu biti na srpskom, engleskom, nemačkom, italijanskom ili albanskom.",
      },
      {
        q: "Za koliko sati mogu očekivati odgovor?",
        a: "Na upite obično odgovaramo u roku od 24 sata i dogovaramo sledeće korake (ciljevi, obim, rokovi). Za hitno traženje koristite kontakt formu ili direktan poziv.",
      },
      {
        q: "Šta tačno ulazi u „web dizajn” kod vas?",
        a: "Zavisi od briefa: informaciona arhitektura, vizuelni koncept, razvoj, osnovni tehnički SEO, performanse i mobilni prikaz — sve dokumentovano pre objave. Za širi obim vide stranicu Usluge i portfolio.",
      },
    ],
  },
  en: {
    eyebrow: "AGR Multimedia",
    title: "Web design, graphics, AI & digital marketing for small businesses",
    subtitle:
      "In-depth services overview, workflow, and balanced AI guidance — with links to key sections of this site.",
    aria: "Services overview, AI perspectives, and contact paths",
    asideAria: "Authoritative references and open standards",
    asideLead: "Our work aligns with public specifications from:",
    externalW3C: "W3C web standards",
    externalSchema: "Schema.org structured data",
    externalMdn: "MDN Web Docs — HTML",
    lastUpdatedIso: "2026-05-08",
    lastUpdatedDisplay: "8 May 2026",
    lastUpdatedSuffix: "Last review of this section.",
    takeawaysTitle: "Key takeaways",
    takeaways: [
      "Germany-based studio (Geislingen an der Steige) serving SMEs across the EU.",
      "Information architecture and messaging before visuals; technical SEO and performance baked in.",
      "AI speeds drafts and production; trust-critical decisions stay human-reviewed.",
      "We typically reply within 24 hours with clear scope and milestones.",
    ],
    tocNavAria: "On-page contents",
    tocTitle: "On this page",
    tocLabels: [
      "Web design — deliverables",
      "Graphic design & brand",
      "AI in production",
      "Pros & cons of AI",
      "Hybrid vs templates",
      "Why AGR Multimedia",
      "How projects start",
    ],
    faqTitle: "Quick answers",
    faq: [
      {
        q: "Do you only work locally?",
        a: "We are based in Geislingen an der Steige but collaborate remotely across the EU. Briefings can be in Serbian, English, German, Italian, or Albanian.",
      },
      {
        q: "How fast do you respond?",
        a: "Usually within 24 hours with next steps (goals, scope, timelines). Use the contact form or phone for the fastest route.",
      },
      {
        q: "What is included in web design?",
        a: "Depends on the brief: IA, UI design, development, baseline technical SEO, performance, and mobile QA — documented before launch. See Services and Portfolio for scope examples.",
      },
    ],
  },
  de: {
    eyebrow: "AGR Multimedia",
    title: "Webdesign, Grafik, KI & Digitalmarketing für kleine Unternehmen",
    subtitle:
      "Ausführlicher Leistungsüberblick, Arbeitsweise und ein ausgewogener Blick auf KI — mit Links zu allen Bereichen.",
    aria: "Leistungen, KI-Perspektive und Kontakt",
    asideAria: "Normative Referenzen und offene Standards",
    asideLead: "Ausrichtung an öffentlichen Spezifikationen:",
    externalW3C: "W3C Webstandards",
    externalSchema: "Schema.org strukturierte Daten",
    externalMdn: "MDN Web Docs — HTML",
    lastUpdatedIso: "2026-05-08",
    lastUpdatedDisplay: "8. Mai 2026",
    lastUpdatedSuffix: "Letzte inhaltliche Überarbeitung dieses Abschnitts.",
    takeawaysTitle: "Kernaussagen",
    takeaways: [
      "Studio in Geislingen an der Steige — Web, Grafik und Video für KMU in der EU.",
      "Zuerst Informationsarchitektur und Botschaft, dann UI; technisches SEO und Performance von Anfang an.",
      "KI unterstützt Varianten und Produktion; finale Freigaben bleiben beim Team.",
      "Antwort typischerweise innerhalb von 24 Stunden mit klarem Scope.",
    ],
    tocNavAria: "Inhalt dieser Seite",
    tocTitle: "Auf dieser Seite",
    tocLabels: [
      "Webdesign — Deliverables",
      "Grafik & Branding",
      "KI im Prozess",
      "Vor- und Nachteile KI",
      "Hybrid vs Vorlagen",
      "Warum AGR Multimedia",
      "Projektstart",
    ],
    faqTitle: "Kurz gefragt",
    faq: [
      {
        q: "Arbeiten Sie nur regional?",
        a: "Standort ist Geislingen, Projekte betreuen wir EU-weit und remote. Arbeitssprachen: Serbisch, Englisch, Deutsch, Italienisch, Albanisch.",
      },
      {
        q: "Wie schnell ist Feedback möglich?",
        a: "In der Regel innerhalb von 24 Stunden mit nächsten Schritten. Kontaktformular oder Telefon für den schnellsten Weg.",
      },
      {
        q: "Was gehört zu Webdesign?",
        a: "Je nach Briefing: IA, UI, Umsetzung, Basis-SEO, Performance und Mobile-QA — dokumentiert vor Livegang. Details unter Leistungen und Portfolio.",
      },
    ],
  },
  it: {
    eyebrow: "AGR Multimedia",
    title: "Web design, grafica, AI e digital marketing per le PMI",
    subtitle:
      "Panoramica approfondita dei servizi, del metodo e del ruolo dell'AI — con collegamenti interni utili.",
    aria: "Panoramica servizi, prospettive AI e contatti",
    asideAria: "Fonti autorevoli e standard aperti",
    asideLead: "Allineamento alle specifiche pubbliche:",
    externalW3C: "W3C — standard web",
    externalSchema: "Schema.org — dati strutturati",
    externalMdn: "MDN Web Docs — HTML",
    lastUpdatedIso: "2026-05-08",
    lastUpdatedDisplay: "8 maggio 2026",
    lastUpdatedSuffix: "Ultimo aggiornamento di questo testo.",
    takeawaysTitle: "Punti chiave",
    takeaways: [
      "Studio a Geislingen an der Steige — web, grafica e video per PMI in UE.",
      "Prima architettura dell'informazione e messaggi, poi UI; SEO tecnico e performance integrate.",
      "L'AI accelera bozze e produzione; messaggi sensibili restano revisionati da persone.",
      "Di solito rispondiamo entro 24 ore con scope e milestone chiare.",
    ],
    tocNavAria: "Contenuti della pagina",
    tocTitle: "In questa pagina",
    tocLabels: [
      "Web design — cosa ottieni",
      "Grafica e brand",
      "AI nel flusso",
      "Pro e contro AI",
      "Approccio ibrido",
      "Perché AGR Multimedia",
      "Come inizia il progetto",
    ],
    faqTitle: "Domande rapide",
    faq: [
      {
        q: "Lavorate solo in zona?",
        a: "Sede a Geislingen; progetti in UE anche da remoto. Lingue: serbo, inglese, tedesco, italiano, albanese.",
      },
      {
        q: "Tempi di risposta?",
        a: "Di norma entro 24 ore con i passi successivi. Modulo contatti o telefono per urgenze.",
      },
      {
        q: "Cosa include il web design?",
        a: "Dipende dal brief: IA, UI, sviluppo, SEO tecnico di base, performance e QA mobile — documentato prima del go-live. Vedi Servizi e Portfolio.",
      },
    ],
  },
  al: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafikë, AI dhe marketing digjital për biznese të vogla",
    subtitle:
      "Përmbledhje e thelluar e shërbimeve, mënyrës së punës dhe përdorimit të përgjegjshëm të AI.",
    aria: "Shërbime, perspektiva AI dhe kontakt",
    asideAria: "Burime autoritative dhe standarde të hapura",
    asideLead: "Puna jonë përputhet me specifikimet publike:",
    externalW3C: "W3C — standardet e uebit",
    externalSchema: "Schema.org — të dhëna të strukturuara",
    externalMdn: "MDN Web Docs — HTML",
    lastUpdatedIso: "2026-05-08",
    lastUpdatedDisplay: "8 maj 2026",
    lastUpdatedSuffix: "Përditësimi i fundit i këtij teksti.",
    takeawaysTitle: "Pikat kryesore",
    takeaways: [
      "Studio në Geislingen an der Steige — web, grafikë dhe video për SME në BE.",
      "Së pari struktura dhe mesazhi, pastaj dizajni; SEO teknik dhe performanca që nga fillimi.",
      "AI përdoret për skica dhe prodhim; vendimet e besimit kalojnë në revizion njerëzor.",
      "Zakonisht përgjigjemi brenda 24 orëve me scope dhe afate të qarta.",
    ],
    tocNavAria: "Përmbajtja e faqes",
    tocTitle: "Në këtë faqe",
    tocLabels: [
      "Web dizajn — çfarë merrni",
      "Grafikë dhe brand",
      "AI në prodhim",
      "Anët për dhe kundër AI",
      "Qasje hibride",
      "Pse AGR Multimedia",
      "Si fillon projekti",
    ],
    faqTitle: "Pyetje të shpeshta",
    faq: [
      {
        q: "Punoni vetëm lokalisht?",
        a: "Baza është Geislingen; projektet në BE edhe në distancë. Gjuhë: serbisht, anglisht, gjermanisht, italisht, shqip.",
      },
      {
        q: "Sa shpejt përgjigjeni?",
        a: "Zakonisht brenda 24 orëve me hapat e radhës. Formulari i kontaktit ose telefoni për urgjenca.",
      },
      {
        q: "Çfarë përfshin web dizajni?",
        a: "Var nga brief-i: IA, UI, zhvillim, SEO bazë, performanca dhe QA mobile — dokumentuar para publikimit. Shiko Shërbimet dhe Portfolio.",
      },
    ],
  },
};

export default function HomeSeoSection() {
  const { currentLanguage } = useLanguage();
  const copy = SECTION_COPY[sectionLangKey(currentLanguage)];

  return (
    <section
      id="seo-content"
      className="premium-section scroll-mt-20 border-b border-[#333333] bg-[#07070b] py-16 md:py-20"
      aria-labelledby="seo-section-title"
    >
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="border-b border-white/10 pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">{copy.eyebrow}</p>
          <h2
            id="seo-section-title"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {copy.title}
          </h2>
          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
            <AuthorByline className="!text-white/95" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{copy.subtitle}</p>
        </header>

        <aside
          className="my-8 rounded-xl border border-blue-400/25 bg-blue-500/[0.07] px-4 py-4 text-sm leading-relaxed text-white/85"
          aria-label={copy.asideAria}
        >
          <p>
            <span className="font-medium text-white">{copy.asideLead}</span>{" "}
            <a
              href="https://www.w3.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-200 underline-offset-2 hover:text-white hover:underline"
              aria-label={copy.externalW3C}
            >
              W3C
            </a>
            {" · "}
            <a
              href="https://schema.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-200 underline-offset-2 hover:text-white hover:underline"
              aria-label={copy.externalSchema}
            >
              Schema.org
            </a>
            {" · "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-200 underline-offset-2 hover:text-white hover:underline"
              aria-label={copy.externalMdn}
            >
              MDN
            </a>
            .
          </p>
        </aside>

        <p className="text-xs text-white/55">
          <time dateTime={copy.lastUpdatedIso}>{copy.lastUpdatedDisplay}</time>
          <span className="sr-only"> — </span>
          <span aria-hidden="true"> · </span>
          {copy.lastUpdatedSuffix}
        </p>

        <div
          id="seo-takeaways"
          className="my-8 rounded-xl border border-emerald-400/30 bg-emerald-500/[0.06] px-4 py-5 text-sm leading-relaxed text-white/90"
          role="region"
          aria-labelledby="seo-takeaways-heading"
        >
          <p id="seo-takeaways-heading" className="text-sm font-semibold tracking-tight text-white">
            {copy.takeawaysTitle}
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-emerald-400/90">
            {copy.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <nav
          className="mb-10 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4"
          aria-label={copy.tocNavAria}
        >
          <p className="text-sm font-semibold text-white">{copy.tocTitle}</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-blue-200/95 marker:text-white/40">
            {SEO_TOPIC_IDS.map((id, i) => (
              <li key={id}>
                <a href={`#${id}`} className="underline-offset-2 hover:text-white hover:underline">
                  {copy.tocLabels[i]}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose-seo border-t border-white/10 pt-10">{bodyForLang(currentLanguage)}</div>

        <section className="mt-12 border-t border-white/10 pt-10" aria-labelledby="seo-faq-heading">
          <h3 id="seo-faq-heading" className="text-lg font-semibold text-white">
            {copy.faqTitle}
          </h3>
          <div className="mt-4 space-y-3">
            {copy.faq.map((item) => (
              <details
                key={item.q}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85 open:bg-white/[0.05]"
              >
                <summary className="cursor-pointer font-medium text-white outline-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 leading-relaxed text-white/75">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <HomeSeoDefinitions />
      </article>
    </section>
  );
}
