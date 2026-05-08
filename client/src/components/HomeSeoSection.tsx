import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import AuthorByline from "@/components/AuthorByline";
import VisibleAuthorCredit from "@/components/VisibleAuthorCredit";
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
  /** Short answer-style lead for AEO (directly under H2). */
  answerLead: string;
  expertQuote: string;
  quoteAttribution: string;
  collaborationStepsTitle: string;
  collaborationSteps: string[];
};

const SECTION_COPY: Record<SectionLangKey, SectionCopy> = {
  sr: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafika, AI i digitalni marketing za mala preduzeća",
    subtitle:
      "Mi pripremamo ovaj sadržaj da bude jasan mala preduzećima u EU. Ovde je detaljan pregled usluga, našeg toka rada i odgovornog korišćenja veštačke inteligencije. Pored toga, linkovi vode ka stranici usluga, O nama i politici privatnosti. Stoga brzo pronalazite ono što vam treba pre prvog razgovora.",
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
      "Šta dobijate u web dizajnu?",
      "Brend: štampa i ekran",
      "Gde AI pomaže, gde ne",
      "Prednosti i mane AI",
      "Zašto hibrid model?",
      "Zašto baš mi?",
      "Kako početi projekat?",
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
    answerLead:
      "Ukratko: naša misija su brze, SEO-prijateljske stranice i dosledan brend. AI koristimo gde ubrzava rad. Međutim, ja lično pazim da odluke koje grade poverenje ostanu ljudske. Pre objave proveravamo performanse i jasnoću poruke — za vas, ne samo za algoritam.",
    expertQuote:
      "„Merljivost mora da bude dogovorena pre dizajna — inače lep izgled ostaje samo estetika bez odgovornosti za rezultat.”",
    quoteAttribution: "Agron Osmani · CEO, AGR Multimedia · Geislingen an der Steige",
    collaborationStepsTitle: "Pet koraka od prvog upita do objave",
    collaborationSteps: [
      "Upit ili konsultacija — ciljevi, budžet i rokovi u jednoj poruci.",
      "Briefing i struktura stranica (informaciona arhitektura, stubovi poruka).",
      "Dizajn i razvoj u iteracijama — vaš feedback pre svake faze.",
      "Testiranje performansi, mobilnog prikaza i formi pre javnog puštanja.",
      "Objava, osnovno praćenje i dogovor o sledećim koracima (marketing, sadržaj, širenje).",
    ],
  },
  en: {
    eyebrow: "AGR Multimedia",
    title: "Web design, graphics, AI & digital marketing for small businesses",
    subtitle:
      "We publish this guide so your team knows exactly how we work. It is a full overview of services, our delivery process, and responsible AI use. In addition, internal links jump to services, about, and privacy. Therefore you can orient quickly before you email us or book a call.",
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
    answerLead:
      "In short: our mission is fast, SEO-aware websites and a coherent brand. We use AI where it saves time. However, I personally review trust-critical choices before launch. After that, we still check performance and clarity — for your customers, not only for bots.",
    expertQuote:
      "“If we cannot state what success looks like before design starts, we only ship decoration — not outcomes.”",
    quoteAttribution: "Agron Osmani · CEO, AGR Multimedia · Geislingen an der Steige",
    collaborationStepsTitle: "Five steps from first enquiry to launch",
    collaborationSteps: [
      "Enquiry or consultation — goals, budget, and timeline in one thread.",
      "Briefing and page structure (information architecture, core messages).",
      "Design and development in iterations — your feedback gates each phase.",
      "Performance, mobile, and form QA before public launch.",
      "Go-live, baseline checks, and next steps (marketing, content, expansion).",
    ],
  },
  de: {
    eyebrow: "AGR Multimedia",
    title: "Webdesign, Grafik, KI & Digitalmarketing für kleine Unternehmen",
    subtitle:
      "Wir schreiben diesen Leitfaden bewusst ausführlich für kleine Unternehmen in der EU. Sie finden hier Leistungen, unseren Ablauf und einen klaren Umgang mit KI. Außerdem führen Links zu Service-Seiten, Über uns und Datenschutz. Damit Sie sich vor dem ersten Gespräch schnell orientieren können.",
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
    answerLead:
      "Kurz: Unsere Mission sind schnelle, SEO-fähige Websites und ein konsistentes Markenbild. KI nutzen wir dort, wo sie Zeit spart. Dennoch prüfe ich persönlich vertrauenskritische Entscheidungen vor dem Livegang. Außerdem testen wir Performance und Klarheit der Botschaft — für Ihre Kundschaft.",
    expertQuote:
      "„Ohne klare Erfolgskriterien vor dem Design bleibt nur Dekoration — keine messbare Wirkung.“",
    quoteAttribution: "Agron Osmani · CEO, AGR Multimedia · Geislingen an der Steige",
    collaborationStepsTitle: "Fünf Schritte vom ersten Kontakt bis zum Launch",
    collaborationSteps: [
      "Anfrage oder Erstgespräch — Ziele, Budget und Timing.",
      "Briefing und Seitenstruktur (Informationsarchitektur, Kernbotschaften).",
      "Design und Umsetzung in Iterationen — Ihr Feedback steuert die Phasen.",
      "Performance-, Mobile- und Formulartests vor dem Livegang.",
      "Launch, Basis-Monitoring und nächste Schritte (Marketing, Content, Ausbau).",
    ],
  },
  it: {
    eyebrow: "AGR Multimedia",
    title: "Web design, grafica, AI e digital marketing per le PMI",
    subtitle:
      "Pubblichiamo questa guida perché i team capiscano come lavoriamo noi. Qui trovi servizi, il nostro metodo e un uso responsabile dell'intelligenza artificiale. Inoltre i link portano a servizi, chi siamo e privacy. Perciò ti orienti in pochi minuti prima della prima call.",
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
    answerLead:
      "In sintesi: la nostra missione sono siti veloci, SEO-ready e un brand coerente. Usiamo l'intelligenza artificiale dove accelera. Tuttavia supervisiono io le scelte che creano fiducia prima del go-live. Inoltre controlliamo performance e chiarezza — per i vostri clienti.",
    expertQuote:
      "“Senza definire il successo prima della progettazione, il design resta solo estetica — non risultati.”",
    quoteAttribution: "Agron Osmani · CEO, AGR Multimedia · Geislingen an der Steige",
    collaborationStepsTitle: "Cinque passaggi dalla prima richiesta al lancio",
    collaborationSteps: [
      "Richiesta o call — obiettivi, budget e tempistiche.",
      "Briefing e struttura delle pagine (architettura dell’informazione, messaggi chiave).",
      "Design e sviluppo in iterazioni — il tuo feedback tra una fase e l’altra.",
      "Test su performance, mobile e moduli prima del go-live.",
      "Pubblicazione, controlli base e prossimi passi (marketing, contenuti, scalabilità).",
    ],
  },
  al: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafikë, AI dhe marketing digjital për biznese të vogla",
    subtitle:
      "Ne e kemi shkruar këtë udhëzues që ekipet të dinë qartë si punojmë ne. Këtu janë shërbimet, mënyra jonë e punës dhe përdorimi i përgjegjshëm i AI. Për më tepër, lidhjet çojnë te shërbimet, rreth nesh dhe privatësia. Prandaj orientoheni shpejt para kontaktit të parë.",
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
    answerLead:
      "Shkurt: misioni ynë janë faqe të shpejta miqësore me SEO dhe një sistem marke qëndror. AI përdoret ku kursen kohë. Megjithatë unë personalisht kontrolloj vendimet që ndërtojnë besimin para publikimit. Gjithashtu verifikojmë performancën dhe qartësinë — për klientët tuaj.",
    expertQuote:
      "„Pa matën e suksesit përpara dizajnit, mbetet vetëm estetikë — jo rezultate të matshme.“",
    quoteAttribution: "Agron Osmani · CEO, AGR Multimedia · Geislingen an der Steige",
    collaborationStepsTitle: "Pesë hapa nga pyetja e parë deri te publikimi",
    collaborationSteps: [
      "Pyetje ose konsultë — qëllime, buxhet dhe afate.",
      "Briefing dhe struktura faqesh (arkitektura e informacionit, mesazhet kryesore).",
      "Dizajn dhe zhvillim në iteracione — feedback-u juaj drejton fazat.",
      "Teste performance, mobile dhe formularësh para publikimit.",
      "Go-live, kontroll bazë dhe hapat e radhës (marketing, përmbajtje, zgjerim).",
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
          <VisibleAuthorCredit className="mb-3" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <img
              src="/agr-logo-white.png"
              alt="Agron Osmani - AGR Multimedia Web Dizajn i SEO"
              width={140}
              height={46}
              loading="lazy"
              decoding="async"
              className="h-11 w-auto shrink-0 opacity-90"
            />
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">{copy.eyebrow}</p>
              <h2
                id="seo-section-title"
                className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                {copy.title}
              </h2>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
            <AuthorByline className="!text-white/95" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{copy.subtitle}</p>
          <p id="seo-answer-lead" className="mt-3 text-sm font-medium leading-relaxed text-white/90">
            {copy.answerLead}
          </p>
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

        <blockquote
          cite="https://www.linkedin.com/in/agron-osmani-228947266/"
          className="my-12 border-l-4 border-blue-400/45 bg-white/[0.02] py-4 pl-5 pr-2 text-[0.9375rem] italic leading-relaxed text-white/85"
        >
          <p>{copy.expertQuote}</p>
          <footer className="mt-3 text-xs not-italic text-white/55">{copy.quoteAttribution}</footer>
        </blockquote>

        <section className="border-t border-white/10 pt-10" aria-labelledby="seo-collab-steps-heading">
          <h3 id="seo-collab-steps-heading" className="text-lg font-semibold text-white">
            {copy.collaborationStepsTitle}
          </h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-white/80 marker:text-blue-300/80">
            {copy.collaborationSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

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
