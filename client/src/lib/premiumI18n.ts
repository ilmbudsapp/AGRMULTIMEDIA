import type { Language } from "@/lib/i18n";

type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

type OptimizationPillar = {
  title: string;
  body: string;
};

type PremiumTranslations = {
  hero: {
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    ctaMeta: string;
  };
  optimizationExcellence: {
    eyebrow: string;
    title: string;
    lead: string;
    why2026: string;
    platforms: string;
    pillarSeo: OptimizationPillar;
    pillarAeo: OptimizationPillar;
    pillarGeo: OptimizationPillar;
    tableCaption: string;
    colArea: string;
    colScore: string;
    rowSeo: string;
    rowAeo: string;
    rowGeo: string;
    rowOverall: string;
    gradeLine: string;
    caseSite: string;
    caseTitle: string;
    caseLead: string;
    caseNarrative: string;
    beforeLabel: string;
    afterLabel: string;
    beforeBadge: string;
    afterBadge: string;
    beforeDate: string;
    afterDate: string;
    jumpTitle: string;
    jumpGeo: string;
    jumpAeo: string;
    jumpSeo: string;
    statsBeforeSummary: string;
    statsAfterSummary: string;
    imgAltBefore: string;
    imgAltAfter: string;
    cta: string;
    benchmarkEyebrow: string;
    benchmarkTitle: string;
    benchmarkTrust: string;
    benchmarkSaasNote: string;
    benchmarkReportMeta: string;
    benchmarkImgAlt: string;
    benchmarkTableCaption: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    description: string;
    items: { title: string; description: string }[];
  };
  caseStudies: {
    heading: string;
    description: string;
    problemLabel: string;
    solutionLabel: string;
    resultLabel: string;
    cards: CaseStudy[];
  };
  legal: {
    impressum: string;
    datenschutz: string;
  };
};

const en: PremiumTranslations = {
  hero: {
    heading: "Modern websites & brand systems for SMEs — AGR Multimedia, Geislingen",
    subheading:
      "We at AGR Multimedia build fast, SEO-ready websites, graphic systems, and practical AI workflows for SMEs. My experience in Geislingen an der Steige shows that clear messaging, technical SEO, and citable facts lift conversions and answer-engine visibility.",
    primaryCta: "Get a Free Consultation",
    secondaryCta: "View Projects",
    ctaMeta: "Free consultation • No obligation • Response within 24h",
  },
  optimizationExcellence: {
    eyebrow: "AI & search optimization",
    title: "Optimization excellence: technical SEO, AEO, and GEO",
    lead:
      "We align your site for classic search, answer engines, and generative discovery—backed by measurable scores and a transparent quality bar.",
    why2026:
      "In 2026, a “good enough” page is not enough: users and AI systems expect fast, verifiable, well-structured content. A Grade A signal means your brand looks technically sound and trustworthy before anyone reads a full paragraph.",
    platforms:
      "We optimize for Google and traditional search, and we structure content so models like ChatGPT and Gemini can quote your pages accurately when they recommend solutions.",
    pillarSeo: {
      title: "SEO & technical excellence",
      body: "Crawlability, performance, Core Web Vitals, structured data, and clean semantics—so search engines and assistants get a clear map of your expertise.",
    },
    pillarAeo: {
      title: "AEO / answer engines",
      body: "Direct answers, definitions, and scannable structure—so AI-powered answer surfaces can lift the right quote from the right section.",
    },
    pillarGeo: {
      title: "GEO / generative engine optimization",
      body: "Clarity, trustworthy sourcing, and consistent entity signals—so generative models can attribute and summarize your offer without guesswork.",
    },
    tableCaption: "fixbike.online — scores after optimization (May 9, 2026)",
    colArea: "Area",
    colScore: "Score",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Overall",
    gradeLine: "Grade A (88) — proof snapshot after AI-search optimization work",
    caseSite: "fixbike.online",
    caseTitle: "Case study — FixBike (real audit screenshots)",
    caseLead:
      "Same domain, two snapshots: baseline vs. less than 24 hours later. GEO and AEO lifts show how generative and answer-engine visibility can move when structure and signals align.",
    caseNarrative:
      "This example shows a local business moving from digital invisibility (Grade F) to a clear leadership signal (Grade A) in under 24 hours. By prioritizing Generative Engine Optimization (GEO), we increased visibility to AI models by 275%—from a GEO score of 24 to 90.",
    beforeLabel: "Before — May 8, 2026",
    afterLabel: "After — May 9, 2026",
    beforeBadge: "Critical · Grade F",
    afterBadge: "Excellent · Grade A",
    beforeDate: "May 8, 2026",
    afterDate: "May 9, 2026",
    jumpTitle: "Key performance lifts",
    jumpGeo: "GEO score +66 · 24 → 90",
    jumpAeo: "AEO score +54 · 31 → 85",
    jumpSeo: "SEO score +17 · 71 → 88",
    statsBeforeSummary: "Overall 49 · SEO 71 · AEO 31 · GEO 24",
    statsAfterSummary: "Overall 88 · SEO 88 · AEO 85 · GEO 90",
    imgAltBefore: "SEO AEO GEO audit report for fixbike.online — May 8 2026, Grade F overall",
    imgAltAfter: "SEO AEO GEO audit report for fixbike.online — May 9 2026, Grade A overall",
    cta: "Request a free SEO/AI analysis of your site",
    benchmarkEyebrow: "Our own benchmark",
    benchmarkTitle: "We apply the same bar to agrmultimedia.eu",
    benchmarkTrust:
      "Our site is not just a business card—it is proof of our expertise. We demonstrate our standard with an SEO score of 92, keeping our technology aligned with the latest search algorithms.",
    benchmarkSaasNote:
      "The audit engine classified this site as SaaS-type (50% confidence)—a useful signal of technical depth, productized delivery, and real functionality under the hood.",
    benchmarkReportMeta: "www.agrmultimedia.eu — report generated May 9, 2026",
    benchmarkImgAlt:
      "SEO AEO GEO report for www.agrmultimedia.eu — overall Grade A, SEO 92, AEO 83, GEO 78, site type SaaS",
    benchmarkTableCaption: "www.agrmultimedia.eu — current scores (May 9, 2026)",
  },
  services: {
    eyebrow: "Capabilities",
    heading: "Premium production and digital execution",
    description: "End-to-end creative systems tailored for growth-focused brands.",
    items: [
      { title: "Video Ads", description: "Paid social creatives with platform-specific hooks." },
      { title: "Web Design", description: "Conversion-driven pages with premium visual direction." },
      { title: "Brand Design", description: "Identity systems that increase trust and recall." },
      { title: "AI Content", description: "Scalable visual content pipelines for campaigns." },
    ],
  },
  caseStudies: {
    heading: "Case Studies",
    description: "Each project shows a clear path from challenge to measurable outcome.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    cards: [
      {
        title: "Local Service Brand Campaign",
        problem: "Low attention and weak ad retention in paid traffic.",
        solution: "Produced short-form ad variations with stronger visual hooks.",
        result: "Higher engagement and better lead quality within 30 days.",
      },
      {
        title: "Business Website Redesign",
        problem: "Outdated site with poor mobile conversion flow.",
        solution: "Rebuilt architecture, messaging hierarchy, and visual trust signals.",
        result: "Improved contact requests and reduced bounce rate.",
      },
      {
        title: "Brand + Content Refresh",
        problem: "Inconsistent visuals across social and web channels.",
        solution: "Created unified brand system and reusable content templates.",
        result: "Stronger brand recognition and faster campaign launches.",
      },
    ],
  },
  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const de: PremiumTranslations = {
  hero: {
    heading: "Moderne Websites und Branding für KMU — AGR Multimedia, Geislingen",
    subheading:
      "Wir bei AGR Multimedia liefern schnelle, SEO-taugliche Websites, Markengrafik und praxisnahe KI-Workflows für KMU. Meine Erfahrung in Geislingen an der Steige zeigt: klare Botschaften, technisches SEO und belegbare Fakten steigern Conversions und Sichtbarkeit in Answer Engines.",
    primaryCta: "Kostenlose Beratung anfordern",
    secondaryCta: "Projekte ansehen",
    ctaMeta: "Kostenlose Beratung • Unverbindlich • Antwort innerhalb von 24h",
  },
  optimizationExcellence: {
    eyebrow: "KI- & Suchoptimierung",
    title: "Optimierung auf höchstem Niveau: Technisches SEO, AEO und GEO",
    lead:
      "Wir richten Ihre Website für klassische Suche, Answer Engines und generative Discovery aus — mit messbaren Scores und klaren Qualitätskriterien.",
    why2026:
      "2026 reicht „ein bisschen optimiert“ nicht mehr: Nutzer und KI erwarten schnelle, überprüfbare, strukturierte Inhalte. Ein Grade-A-Signal zeigt: technisch solide und vertrauenswürdig — noch bevor jemand den Fließtext liest.",
    platforms:
      "Wir optimieren für Google und klassische Suche und strukturieren Inhalte so, dass Modelle wie ChatGPT und Gemini Ihre Seiten korrekt zitieren können, wenn Empfehlungen ausgesprochen werden.",
    pillarSeo: {
      title: "SEO & technische Exzellenz",
      body: "Crawlbarkeit, Performance, Core Web Vitals, strukturierte Daten und saubere Semantik — damit Suchmaschinen und Assistenten Ihre Expertise eindeutig erkennen.",
    },
    pillarAeo: {
      title: "AEO / Answer Engines",
      body: "Klare Antworten, Definitionen und scanbare Abschnitte — damit KI-gestutzte Antwortoberflachen das richtige Zitat aus dem richtigen Block ziehen.",
    },
    pillarGeo: {
      title: "GEO / Generative Engine Optimization",
      body: "Klarheit, glaubwurdige Quellen und konsistente Entity-Signale — damit generative Modelle Ihr Angebot zusammenfassen konnen, ohne zu raten.",
    },
    tableCaption: "fixbike.online — Scores nach Optimierung (9. Mai 2026)",
    colArea: "Bereich",
    colScore: "Score",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Gesamt",
    gradeLine: "Grade A (88) — Nachweis nach KI-Such-Optimierung",
    caseSite: "fixbike.online",
    caseTitle: "Fallstudie — FixBike (echte Audit-Screenshots)",
    caseLead:
      "Gleiche Domain, zwei Snapshots: Ausgangslage vs. weniger als 24 Stunden später. Die Sprünge bei GEO und AEO zeigen, wie Sichtbarkeit in generativen und Answer-Engine-Kontexten steigen kann.",
    caseNarrative:
      "Dieses Beispiel zeigt, wie ein lokales Unternehmen von digitaler Unsichtbarkeit (Grade F) zu einem klaren Führungssignal (Grade A) in unter 24 Stunden kommt. Mit Fokus auf Generative Engine Optimization (GEO) haben wir die Sichtbarkeit für KI-Modelle um 275 % gesteigert — vom GEO-Score 24 auf 90.",
    beforeLabel: "Vorher — 8. Mai 2026",
    afterLabel: "Nachher — 9. Mai 2026",
    beforeBadge: "Kritisch · Grade F",
    afterBadge: "Exzellent · Grade A",
    beforeDate: "8. Mai 2026",
    afterDate: "9. Mai 2026",
    jumpTitle: "Wichtigste Sprünge",
    jumpGeo: "GEO-Score +66 · 24 → 90",
    jumpAeo: "AEO-Score +54 · 31 → 85",
    jumpSeo: "SEO-Score +17 · 71 → 88",
    statsBeforeSummary: "Gesamt 49 · SEO 71 · AEO 31 · GEO 24",
    statsAfterSummary: "Gesamt 88 · SEO 88 · AEO 85 · GEO 90",
    imgAltBefore: "SEO/AEO/GEO Audit fixbike.online — 8. Mai 2026, Gesamt Grade F",
    imgAltAfter: "SEO/AEO/GEO Audit fixbike.online — 9. Mai 2026, Gesamt Grade A",
    cta: "Kostenlose SEO/KI-Analyse Ihrer Website anfordern",
    benchmarkEyebrow: "Unser eigener Benchmark",
    benchmarkTitle: "Wir messen auch agrmultimedia.eu an derselben Leiste",
    benchmarkTrust:
      "Unsere Website ist keine reine Visitenkarte, sondern ein Nachweis unserer Expertise. Mit einem SEO-Score von 92 zeigen wir unseren Standard und halten unsere Technologie an aktuelle Suchalgorithmen ausgerichtet.",
    benchmarkSaasNote:
      "Das Audit-System hat die Seite als SaaS-Typ klassifiziert (50 % Konfidenz)—ein zusätzliches Signal für technische Tiefe und echte Funktionalität hinter dem Auftritt.",
    benchmarkReportMeta: "www.agrmultimedia.eu — Bericht vom 9. Mai 2026",
    benchmarkImgAlt:
      "SEO/AEO/GEO Bericht www.agrmultimedia.eu — Gesamt Grade A, SEO 92, AEO 83, GEO 78, Site-Typ SaaS",
    benchmarkTableCaption: "www.agrmultimedia.eu — aktuelle Werte (9. Mai 2026)",
  },
  services: {
    eyebrow: "Leistungen",
    heading: "Premium Produktion und digitale Umsetzung",
    description: "Ganzheitliche Kreativsysteme fur wachstumsorientierte Marken.",
    items: [
      { title: "Video Ads", description: "Paid-Social Creatives mit starken Einstiegen." },
      { title: "Webdesign", description: "Conversion-orientierte Seiten mit Premium-Look." },
      { title: "Brand Design", description: "Markensysteme fur mehr Vertrauen und Wiedererkennung." },
      { title: "AI Content", description: "Skalierbare visuelle Inhalte fur Kampagnen." },
    ],
  },
  caseStudies: {
    heading: "Fallstudien",
    description: "Jedes Projekt zeigt den klaren Weg vom Problem zum messbaren Ergebnis.",
    problemLabel: "Problem",
    solutionLabel: "Losung",
    resultLabel: "Ergebnis",
    cards: [
      {
        title: "Kampagne fur lokalen Dienstleister",
        problem: "Wenig Aufmerksamkeit und schwache Anzeigenbindung.",
        solution: "Kurze Werbevarianten mit starkeren visuellen Hooks erstellt.",
        result: "Mehr Engagement und bessere Leads innerhalb von 30 Tagen.",
      },
      {
        title: "Neugestaltung einer Unternehmenswebsite",
        problem: "Veraltete Seite mit schwacher mobiler Conversion-Strecke.",
        solution: "Struktur, Botschaften und Vertrauenselemente neu aufgebaut.",
        result: "Mehr Kontaktanfragen und geringere Absprungrate.",
      },
      {
        title: "Marken- und Inhalts-Refresh",
        problem: "Uneinheitliche Visuals uber Social und Website hinweg.",
        solution: "Einheitliches Brand-System und Content-Templates entwickelt.",
        result: "Starkere Wiedererkennung und schnellere Kampagnenstarts.",
      },
    ],
  },
  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const sr: PremiumTranslations = {
  hero: {
    heading: "Moderne web stranice i dosledan brend za mala preduzeća — AGR Multimedia",
    subheading:
      "Mi u AGR Multimedia pravimo brze web stranice spremne za SEO, grafičke sisteme i praktične AI tokove za mala preduzeća. Moje iskustvo u Geislingen an der Steige pokazuje da jasna poruka, tehnički SEO i proverljivi izvori podižu konverzije i vidljivost u sistemima odgovora.",
    primaryCta: "Zatražite besplatnu konsultaciju",
    secondaryCta: "Pogledajte projekte",
    ctaMeta: "Besplatna konsultacija • Bez obaveza • Odgovor u roku od 24h",
  },
  optimizationExcellence: {
    eyebrow: "AI i optimizacija pretrage",
    title: "Izuzetnost u optimizaciji: tehnički SEO, AEO i GEO",
    lead:
      "Usklađujemo sajt za klasičnu pretragu, odgovorne sisteme i generativno pronalaženje — uz merljive skorove i jasnu kvalitetnu granicu.",
    why2026:
      "Godine 2026. „malo bolje“ više nije dovoljno: korisnici i AI sistemi očekuju brze, proverljive i strukturisane odgovore. Grade A signal znači da vas brend izgleda tehnički uredno i pouzdano pre nego što neko pročita ceo uvod.",
    platforms:
      "Optimizujemo za Google i klasičnu pretragu, a sadržaj strukturišemo tako da modeli kao ChatGPT i Gemini mogu tačno da citiraju vaše stranice kada predlažu rešenja.",
    pillarSeo: {
      title: "SEO i tehnička izvrsnost",
      body: "Indeksiranje, performanse, Core Web Vitals, strukturisani podaci i čista semantika — da pretraživači i asistenti jasno vide vašu ekspertizu.",
    },
    pillarAeo: {
      title: "AEO / sistemi odgovora",
      body: "Jasni odgovori, definicije i pregledna struktura — da AI odgovori mogu da izvuku pravi citat iz pravog dela stranice.",
    },
    pillarGeo: {
      title: "GEO / Generative Engine Optimization",
      body: "Transparentnost, pouzdani izvori i dosledni signali entiteta — da generativni modeli sumiraju ponudu bez nagađanja.",
    },
    tableCaption: "fixbike.online — skorovi posle optimizacije (9. maj 2026.)",
    colArea: "Oblast",
    colScore: "Skor",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Ukupno",
    gradeLine: "Grade A (88) — dokaz nakon AI-search optimizacije",
    caseSite: "fixbike.online",
    caseTitle: "Studija slučaja — FixBike (stvarni audit screenshot-i)",
    caseLead:
      "Isti domen, dva snimka stanja: polazna tačka naspram manje od 24 sata kasnije. Skokovi na GEO i AEO pokazuju kako raste vidljivost za generativne i „answer engine“ sisteme kada se struktura i signali usklade.",
    caseNarrative:
      "Ovaj primer pokazuje transformaciju lokalnog biznisa iz digitalne nevidljivosti (Grade F) u apsolutnog lidera (Grade A) za manje od 24 sata. Fokusiranjem na Generative Engine Optimization (GEO), povećali smo vidljivost za AI modele za neverovatnih 275%.",
    beforeLabel: "Pre — 8. maj 2026.",
    afterLabel: "Posle — 9. maj 2026.",
    beforeBadge: "Kritično · Grade F",
    afterBadge: "Odlično · Grade A",
    beforeDate: "8. maj 2026.",
    afterDate: "9. maj 2026.",
    jumpTitle: "Ključni skokovi u performansama",
    jumpGeo: "GEO skor +66 · 24 → 90",
    jumpAeo: "AEO skor +54 · 31 → 85",
    jumpSeo: "SEO skor +17 · 71 → 88",
    statsBeforeSummary: "Ukupno 49 · SEO 71 · AEO 31 · GEO 24",
    statsAfterSummary: "Ukupno 88 · SEO 88 · AEO 85 · GEO 90",
    imgAltBefore: "SEO/AEO/GEO izveštaj za fixbike.online — 8. maj 2026, ukupno Grade F",
    imgAltAfter: "SEO/AEO/GEO izveštaj za fixbike.online — 9. maj 2026, ukupno Grade A",
    cta: "Zatražite besplatnu SEO/AI analizu vašeg sajta",
    benchmarkEyebrow: "Naš sopstveni benchmark",
    benchmarkTitle: "Isti standard primenjujemo na agrmultimedia.eu",
    benchmarkTrust:
      "Naš sajt nije samo vizit karta, već dokaz naše ekspertize. Dokazujemo naš standard kroz SEO skor od 92, osiguravajući da naša tehnologija uvek prati najnovije algoritme pretrage.",
    benchmarkSaasNote:
      "Sistem je klasifikovao sajt kao SaaS tip (50% pouzdanosti klasifikacije), što dodatno naglašava našu tehničku dubinu i funkcionalnost koju gradimo.",
    benchmarkReportMeta: "www.agrmultimedia.eu — izveštaj od 9. maj 2026.",
    benchmarkImgAlt:
      "SEO/AEO/GEO izveštaj za www.agrmultimedia.eu — ukupno Grade A, SEO 92, AEO 83, GEO 78, tip sajta SaaS",
    benchmarkTableCaption: "www.agrmultimedia.eu — trenutni skorovi (9. maj 2026.)",
  },
  services: {
    eyebrow: "Usluge",
    heading: "Premium produkcija i digitalna realizacija",
    description: "Kompletan kreativni sistem za brendove koji zele rast.",
    items: [
      { title: "Video oglasi", description: "Placeni social formati sa jakim prvim sekundama." },
      { title: "Web dizajn", description: "Stranice koje podizu konverzije i poverenje." },
      { title: "Brending", description: "Vizuelni identitet koji je dosledan i prepoznatljiv." },
      { title: "AI sadrzaj", description: "Skalabilna vizuelna produkcija za kampanje." },
    ],
  },
  caseStudies: {
    heading: "Studije slucaja",
    description: "Svaki projekat prikazuje Problem, Resenje i Rezultat.",
    problemLabel: "Problem",
    solutionLabel: "Resenje",
    resultLabel: "Rezultat",
    cards: [
      {
        title: "Kampanja za lokalni servis",
        problem: "Niska paznja korisnika i slab retention oglasa.",
        solution: "Napravljene kratke ad varijacije sa jacim vizuelnim hookovima.",
        result: "Veci engagement i kvalitetniji leadovi u prvih 30 dana.",
      },
      {
        title: "Redizajn poslovnog sajta",
        problem: "Zastareo sajt i slab mobilni conversion flow.",
        solution: "Nova struktura, poruke i trust elementi kroz ceo funnel.",
        result: "Porast upita i manje bounce stope.",
      },
      {
        title: "Osvezenje brenda i sadrzaja",
        problem: "Nedosledan vizuelni identitet kroz kanale.",
        solution: "Definisan brend sistem i reusable content template-i.",
        result: "Bolja prepoznatljivost i brze lansiranje kampanja.",
      },
    ],
  },
  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const it: PremiumTranslations = {
  hero: {
    heading: "Siti web e identità visiva per PMI — AGR Multimedia, Geislingen",
    subheading:
      "Noi in AGR Multimedia realizziamo siti veloci e pronti per il SEO, sistemi grafici e workflow AI pratici per le PMI. La mia esperienza a Geislingen an der Steige mostra che messaggi chiari, SEO tecnico e fatti citabili aumentano conversioni e visibilità nei motori di risposta.",
    primaryCta: "Richiedi una consulenza gratuita",
    secondaryCta: "Vedi progetti",
    ctaMeta: "Consulenza gratuita • Senza impegno • Risposta entro 24h",
  },
  optimizationExcellence: {
    eyebrow: "Ottimizzazione AI e ricerca",
    title: "Eccellenza in ottimizzazione: SEO tecnico, AEO e GEO",
    lead:
      "Allineiamo il sito alla ricerca classica, ai motori di risposta e alla discovery generativa — con punteggi misurabili e standard di qualita chiari.",
    why2026:
      "Nel 2026, „abbastanza buono“ non basta più: utenti e sistemi AI si aspettano contenuti veloci, verificabili e strutturati. Un segnale Grade A comunica solidita tecnica e affidabilita prima ancora del testo lungo.",
    platforms:
      "Ottimizziamo per Google e la ricerca tradizionale e strutturiamo i contenuti perché modelli come ChatGPT e Gemini possano citare correttamente le pagine quando suggeriscono soluzioni.",
    pillarSeo: {
      title: "SEO ed eccellenza tecnica",
      body: "Crawlability, performance, Core Web Vitals, dati strutturati e semantica pulita — cosi motori e assistenti mappano chiaramente la vostra expertise.",
    },
    pillarAeo: {
      title: "AEO / motori di risposta",
      body: "Risposte dirette, definizioni e struttura scansionabile — cosi le superfici di risposta AI citano il passaggio giusto.",
    },
    pillarGeo: {
      title: "GEO / Generative Engine Optimization",
      body: "Chiarezza, fonti attendibili e segnali di entita coerenti — cosi i modelli generativi riassumono l’offerta senza improvvisare.",
    },
    tableCaption: "fixbike.online — punteggi dopo l’ottimizzazione (9 maggio 2026)",
    colArea: "Area",
    colScore: "Punteggio",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Totale",
    gradeLine: "Grade A (88) — prova dopo l’ottimizzazione AI-search",
    caseSite: "fixbike.online",
    caseTitle: "Case study — FixBike (screenshot reali di audit)",
    caseLead:
      "Stesso dominio, due screenshot: baseline vs. meno di 24 ore dopo. I salti su GEO e AEO mostrano come migliora la visibilita nei contesti generativi e answer-engine quando struttura e segnali sono allineati.",
    caseNarrative:
      "Questo esempio mostra il passaggio di un’attivita locale dall’invisibilita digitale (Grade F) a un segnale di leadership (Grade A) in meno di 24 ore. Concentrandoci sulla Generative Engine Optimization (GEO), abbiamo aumentato la visibilita verso i modelli AI del 275% — dal punteggio GEO 24 a 90.",
    beforeLabel: "Prima — 8 maggio 2026",
    afterLabel: "Dopo — 9 maggio 2026",
    beforeBadge: "Critico · Grade F",
    afterBadge: "Eccellente · Grade A",
    beforeDate: "8 maggio 2026",
    afterDate: "9 maggio 2026",
    jumpTitle: "Salto nelle performance",
    jumpGeo: "GEO +66 · 24 → 90",
    jumpAeo: "AEO +54 · 31 → 85",
    jumpSeo: "SEO +17 · 71 → 88",
    statsBeforeSummary: "Totale 49 · SEO 71 · AEO 31 · GEO 24",
    statsAfterSummary: "Totale 88 · SEO 88 · AEO 85 · GEO 90",
    imgAltBefore: "Report SEO/AEO/GEO fixbike.online — 8 mag 2026, totale Grade F",
    imgAltAfter: "Report SEO/AEO/GEO fixbike.online — 9 mag 2026, totale Grade A",
    cta: "Richiedi un’analisi SEO/AI gratuita del tuo sito",
    benchmarkEyebrow: "Il nostro benchmark interno",
    benchmarkTitle: "Applichiamo la stessa soglia anche ad agrmultimedia.eu",
    benchmarkTrust:
      "Il nostro sito non è solo un biglietto da visita: è la prova della nostra expertise. Lo dimostriamo con uno score SEO di 92, mantenendo lo stack allineato agli algoritmi di ricerca piu recenti.",
    benchmarkSaasNote:
      "Il motore di audit ha classificato il sito come tipo SaaS (confidenza 50%)—un segnale ulteriore di profondita tecnica e funzionalita reale.",
    benchmarkReportMeta: "www.agrmultimedia.eu — report del 9 maggio 2026",
    benchmarkImgAlt:
      "Report SEO/AEO/GEO www.agrmultimedia.eu — totale Grade A, SEO 92, AEO 83, GEO 78, tipo sito SaaS",
    benchmarkTableCaption: "www.agrmultimedia.eu — punteggi attuali (9 maggio 2026)",
  },
  services: {
    eyebrow: "Servizi",
    heading: "Produzione premium ed esecuzione digitale",
    description: "Sistemi creativi end-to-end pensati per brand orientati alla crescita.",
    items: [
      { title: "Video Ads", description: "Creativita social a pagamento con hook specifici per piattaforma." },
      { title: "Web Design", description: "Pagine orientate alla conversione con direzione visiva premium." },
      { title: "Brand Design", description: "Sistemi di identita che aumentano fiducia e riconoscibilita." },
      { title: "Contenuti AI", description: "Pipeline visive scalabili per campagne." },
    ],
  },
  caseStudies: {
    heading: "Casi studio",
    description: "Ogni progetto mostra un percorso chiaro dalla sfida al risultato misurabile.",
    problemLabel: "Problema",
    solutionLabel: "Soluzione",
    resultLabel: "Risultato",
    cards: [
      {
        title: "Campagna per brand di servizi locali",
        problem: "Bassa attenzione e scarsa retention degli annunci sul traffico a pagamento.",
        solution: "Creazione di varianti video brevi con hook visivi piu forti.",
        result: "Maggiore engagement e lead di qualita migliore in 30 giorni.",
      },
      {
        title: "Redesign sito aziendale",
        problem: "Sito obsoleto con flusso mobile debole per la conversione.",
        solution: "Ricostruita architettura, gerarchia dei messaggi e segnali di fiducia.",
        result: "Aumento delle richieste contatto e riduzione della frequenza di rimbalzo.",
      },
      {
        title: "Refresh brand e contenuti",
        problem: "Visual incoerenti tra social e canali web.",
        solution: "Creato sistema di brand unificato e template contenuti riutilizzabili.",
        result: "Migliore riconoscibilita del brand e lanci campagna piu rapidi.",
      },
    ],
  },
  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const al: PremiumTranslations = {
  hero: {
    heading: "Faqe moderne dhe sistem vizual për SME — AGR Multimedia, Geislingen",
    subheading:
      "Ne në AGR Multimedia ndërtojmë faqe të shpejta të gatshme për SEO, sisteme grafike dhe rrjedha AI praktike për SME. Përvoja ime në Geislingen an der Steige tregon se mesazhet e qarta, SEO teknik dhe faktet e citueshme rrisin konvertimet dhe dukshmërinë në motorët e përgjigjes.",
    primaryCta: "Kërko konsultë falas",
    secondaryCta: "Shiko projektet",
    ctaMeta: "Konsultë falas • Pa detyrim • Përgjigje brenda 24 orëve",
  },
  optimizationExcellence: {
    eyebrow: "Optimizim AI & kërkimi",
    title: "Ekselencë në optimizim: SEO teknik, AEO dhe GEO",
    lead:
      "Përputhim faqen me kërkimin klasik, motorët e përgjigjeve dhe zbulimin gjenerativ — me rezultate të matshme dhe kufi të qartë cilësie.",
    why2026:
      "Në 2026, „mjaft e mirë“ nuk mjafton: përdoruesit dhe sistemet AI presin përmbajtje të shpejtë, të verifikueshme dhe të strukturuar. Sinjali Grade A do të thotë që marka duket teknikeisht e qëndrueshme dhe e besueshme para se dikush të lexojë gjithë hyrjen.",
    platforms:
      "Optimizojmë për Google dhe kërkimin tradicional dhe strukturojmë përmbajtjen që modele si ChatGPT dhe Gemini të citojnë saktë faqet kur rekomandojnë zgjidhje.",
    pillarSeo: {
      title: "SEO dhe ekselencë teknike",
      body: "Crawlability, performanca, Core Web Vitals, të dhëna të strukturuara dhe semantikë e pastër — që motorët dhe asistentët të lexojnë qartë ekspertizën tuaj.",
    },
    pillarAeo: {
      title: "AEO / motorët e përgjigjes",
      body: "Përgjigje të drejtpërdrejta, përkufizime dhe strukturë e skanueshme — që sipërfaqet me përgjigje AI të nxjerrin citimin e duhur nga seksioni i duhur.",
    },
    pillarGeo: {
      title: "GEO / Generative Engine Optimization",
      body: "Qartësi, burime të besueshme dhe sinjale entiteti të qëndrueshme — që modelet gjenerative përmbledhin ofertën pa hamendje.",
    },
    tableCaption: "fixbike.online — rezultatet pas optimizimit (9 maj 2026)",
    colArea: "Fusha",
    colScore: "Rezultati",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Totali",
    gradeLine: "Grade A (88) — provë pas optimizimit AI-search",
    caseSite: "fixbike.online",
    caseTitle: "Studim rasti — FixBike (foto reale të auditimit)",
    caseLead:
      "I njëjti domain, dy pamje: gjendja fillestare kundrejt më pak se 24 orë më vonë. Hapat në GEO dhe AEO tregojnë si rritet dukshmëria për motorët gjenerativë dhe përgjigjet kur struktura dhe sinjalet përputhen.",
    caseNarrative:
      "Ky shembull tregon si një biznes lokal kalon nga padukshmëria digjitale (Grade F) në një sinjal qartë udhëheqjeje (Grade A) për më pak se 24 orë. Duke u fokusuar në Generative Engine Optimization (GEO), ne rritëm dukshmërinë për modelet AI me 275% — nga rezultati GEO 24 në 90.",
    beforeLabel: "Para — 8 maj 2026",
    afterLabel: "Pas — 9 maj 2026",
    beforeBadge: "Kritik · Grade F",
    afterBadge: "Ekselent · Grade A",
    beforeDate: "8 maj 2026",
    afterDate: "9 maj 2026",
    jumpTitle: "Hapat kryesorë në performancë",
    jumpGeo: "GEO +66 · 24 → 90",
    jumpAeo: "AEO +54 · 31 → 85",
    jumpSeo: "SEO +17 · 71 → 88",
    statsBeforeSummary: "Totali 49 · SEO 71 · AEO 31 · GEO 24",
    statsAfterSummary: "Totali 88 · SEO 88 · AEO 85 · GEO 90",
    imgAltBefore: "Raport SEO/AEO/GEO për fixbike.online — 8 maj 2026, total Grade F",
    imgAltAfter: "Raport SEO/AEO/GEO për fixbike.online — 9 maj 2026, total Grade A",
    cta: "Kërko analizë falas SEO/AI të faqes suaj",
    benchmarkEyebrow: "Benchmark-i ynë",
    benchmarkTitle: "E njëjta shiritë matjeje për agrmultimedia.eu",
    benchmarkTrust:
      "Faqja jonë nuk është thjesht një kartëvizitë, por provë e ekspertizës sonë. E dëshmojmë standardin me një skor SEO 92 dhe mbajmë teknologjinë të përputhur me algoritmet më të fundit të kërkimit.",
    benchmarkSaasNote:
      "Motori i auditimit e klasifikoi faqen si tip SaaS (50% besueshmëri)—një sinjal shtesë për thellësi teknike dhe funksionalitet të ndërtuar mirë.",
    benchmarkReportMeta: "www.agrmultimedia.eu — raporti i 9 maj 2026",
    benchmarkImgAlt:
      "Raport SEO/AEO/GEO për www.agrmultimedia.eu — total Grade A, SEO 92, AEO 83, GEO 78, lloji SaaS",
    benchmarkTableCaption: "www.agrmultimedia.eu — rezultatet aktuale (9 maj 2026)",
  },
  services: {
    eyebrow: "Sherbime",
    heading: "Prodhim premium dhe zbatim digjital",
    description: "Sisteme kreative nga fillimi ne fund, te pershtatura per marka me fokus rritjen.",
    items: [
      { title: "Video reklama", description: "Kreativa social me pagese me hyrje te forta sipas platformes." },
      { title: "Web dizajn", description: "Faqe te fokusuara ne konvertime me drejtim vizual premium." },
      { title: "Dizajn marke", description: "Sisteme identiteti qe rrisin besimin dhe kujtesen e markes." },
      { title: "Permbajtje AI", description: "Procese vizuale te shkallezueshme per fushata." },
    ],
  },
  caseStudies: {
    heading: "Studime rastesh",
    description: "Cdo projekt tregon rrugen e qarte nga sfida te rezultati i matshem.",
    problemLabel: "Problemi",
    solutionLabel: "Zgjidhja",
    resultLabel: "Rezultati",
    cards: [
      {
        title: "Fushate per marke sherbimesh lokale",
        problem: "Vemendje e ulet dhe mbajtje e dobet e reklamave ne trafik te paguar.",
        solution: "U krijuan variante reklamash te shkurtra me hook vizual me te forte.",
        result: "Angazhim me i larte dhe lead-e me cilesore brenda 30 diteve.",
      },
      {
        title: "Ridizajnim i faqes se biznesit",
        problem: "Faqe e vjeter me rrjedhe te dobet konvertimi ne celular.",
        solution: "U rindertua arkitektura, hierarkia e mesazheve dhe sinjalet e besimit.",
        result: "Me shume kerkesa kontakti dhe ulje e bounce rate.",
      },
      {
        title: "Rifreskim i markes dhe permbajtjes",
        problem: "Vizuale jo konsistente ne social dhe web.",
        solution: "U krijua sistem i unifikuar marke dhe template te riperdorshme.",
        result: "Rritje e njohjes se markes dhe nisje me te shpejte te fushatave.",
      },
    ],
  },
  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const byLang: Record<string, PremiumTranslations> = { en, de, sr, it, al, sq: al };

export function getPremiumTranslations(language: Language): PremiumTranslations {
  return byLang[language] ?? en;
}
