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
    caseTitle: string;
    caseLead: string;
    beforeLabel: string;
    afterLabel: string;
    placeholderNote: string;
    cta: string;
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
    subheading: "Modern and fast websites for small businesses",
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
    tableCaption: "Real audit-style scores (example benchmark)",
    colArea: "Area",
    colScore: "Score",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Overall",
    gradeLine: "Grade A (87) — above the bar for technical and content quality",
    caseTitle: "Case study (preview) — before & after",
    caseLead:
      "Example: a regional service brand (FixBike) — from high-risk (orange) to the green zone after technical and on-page work. You will drop in final screenshots in the next step.",
    beforeLabel: "Before (placeholder)",
    afterLabel: "After (placeholder)",
    placeholderNote: "Screenshot area — add your report exports here",
    cta: "Request a free SEO/AI analysis of your site",
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
    subheading: "Moderne und schnelle Websites fur kleine Unternehmen",
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
    tableCaption: "Reale Audit-Scores (Beispiel-Benchmark)",
    colArea: "Bereich",
    colScore: "Score",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Gesamt",
    gradeLine: "Grade A (87) — über der Schwelle für Technik und Content",
    caseTitle: "Fallstudie (Preview) — vorher & nachher",
    caseLead:
      "Beispiel: eine lokale Service-Marke (FixBike) — vom kritischen Bereich (Orange) in die grüne Zone nach technischer und inhaltlicher Arbeit. Screenshots folgen im nächsten Schritt.",
    beforeLabel: "Vorher (Platzhalter)",
    afterLabel: "Nachher (Platzhalter)",
    placeholderNote: "Screenshot-Bereich — hier Reports einfügen",
    cta: "Kostenlose SEO/KI-Analyse Ihrer Website anfordern",
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
    subheading: "Moderne i brze web stranice koje donose nove klijente",
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
    tableCaption: "Stvarni audit skorovi (referentni benchmark)",
    colArea: "Oblast",
    colScore: "Skor",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Ukupno",
    gradeLine: "Grade A (87) — iznad praga za tehnički nivo i sadržaj",
    caseTitle: "Studija slučaja (pregled) — pre i posle",
    caseLead:
      "Primer: regionalni servis brend (FixBike) — iz rizične (narandžaste) zone u zelenu posle tehničkih i on-page izmena. Finalne slike dodajete u sledećem koraku.",
    beforeLabel: "Pre (placeholder)",
    afterLabel: "Posle (placeholder)",
    placeholderNote: "Polje za screenshot — ovde ubacujete izveštaje",
    cta: "Zatražite besplatnu SEO/AI analizu vašeg sajta",
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
    subheading: "Siti web moderni e veloci per piccole imprese",
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
    tableCaption: "Punteggi reali di audit (benchmark di esempio)",
    colArea: "Area",
    colScore: "Punteggio",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Totale",
    gradeLine: "Grade A (87) — sopra la soglia per tecnica e contenuto",
    caseTitle: "Case study (anteprima) — prima e dopo",
    caseLead:
      "Esempio: un marchio di servizio locale (FixBike) — dalla zona critica (arancione) alla zona verde dopo interventi tecnici e on-page. Gli screenshot finali arriveranno al passo successivo.",
    beforeLabel: "Prima (placeholder)",
    afterLabel: "Dopo (placeholder)",
    placeholderNote: "Area screenshot — inserire qui i report",
    cta: "Richiedi un’analisi SEO/AI gratuita del tuo sito",
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
    subheading: "Faqe moderne dhe te shpejta per biznese te vogla",
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
    tableCaption: "Rezultate reale auditimi (benchmark shembull)",
    colArea: "Fusha",
    colScore: "Rezultati",
    rowSeo: "SEO",
    rowAeo: "AEO",
    rowGeo: "GEO",
    rowOverall: "Totali",
    gradeLine: "Grade A (87) — mbi pragun për teknikë dhe përmbajtje",
    caseTitle: "Studim rasti (parapamje) — para dhe pas",
    caseLead:
      "Shembull: një markë shërbimi rajonale (FixBike) — nga zona kritike (portokalli) në zonën e gjelbër pas punës teknike dhe on-page. Pamjet finale shtohen në hapin tjetër.",
    beforeLabel: "Para (placeholder)",
    afterLabel: "Pas (placeholder)",
    placeholderNote: "Vend për screenshot — vendosni këtu eksportet e raporteve",
    cta: "Kërko analizë falas SEO/AI të faqes suaj",
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
