import type { Language } from "@/lib/i18n";

type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

type PremiumTranslations = {
  hero: {
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
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
    heading: "High-Impact Video Ads that Drive Sales & Engagement.",
    subheading:
      "Transforming your brand's message into high-converting video content. 20 years of expertise in visual storytelling.",
    primaryCta: "Start a Project",
    secondaryCta: "View My Case Studies",
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
    heading: "Hochwirksame Videoanzeigen, die Umsatz und Engagement steigern.",
    subheading:
      "Wir verwandeln Ihre Markenbotschaft in hochkonvertierende Videoinhalte. 20 Jahre Erfahrung im visuellen Storytelling.",
    primaryCta: "Projekt starten",
    secondaryCta: "Meine Fallstudien ansehen",
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
    heading: "Video oglasi visokog uticaja koji povećavaju prodaju i angažman.",
    subheading:
      "Pretvaramo poruku vaseg brenda u video sadrzaj koji donosi visoke konverzije. 20 godina iskustva u vizuelnom pripovedanju.",
    primaryCta: "Pokreni projekat",
    secondaryCta: "Pogledaj studije slucaja",
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
    heading: "Video ads ad alto impatto che aumentano vendite e coinvolgimento.",
    subheading:
      "Trasformiamo il messaggio del tuo brand in contenuti video ad alta conversione. 20 anni di esperienza nello storytelling visivo.",
    primaryCta: "Avvia un progetto",
    secondaryCta: "Guarda i miei casi studio",
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
    heading: "Video reklama me impakt te larte qe rrisin shitjet dhe angazhimin.",
    subheading:
      "E kthejme mesazhin e markes suaj ne permbajtje video me konvertim te larte. 20 vite eksperience ne storytelling vizual.",
    primaryCta: "Nis nje projekt",
    secondaryCta: "Shiko studimet e rasteve",
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
