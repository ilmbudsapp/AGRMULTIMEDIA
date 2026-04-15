import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildSubsections, getServiceTemplateLabels, toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

type AppContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  whatIoffer: string[];
  serviceCategoriesTitle: string;
  subsectionTitles: { id: string; h3: string }[];
  selectedWorkTitle: string;
  selectedWorkIntro: string;
  toolsTitle: string;
  tools: string[];
  whyChooseTitle: string;
  whyChoosePoints: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  localNote: string;
};

const appByLang: Record<ServiceLang, AppContent> = {
  en: {
    eyebrow: "Service",
    h1: "Custom Application Design for Businesses",
    intro: "Practical digital solutions for companies that need useful tools, clear interfaces, and business-focused workflows.",
    whatIoffer: [
      "Application concepts tied to operational goals",
      "Simple custom tools for internal teams",
      "Prototype interfaces before full development",
      "Structured web application foundations for growth",
    ],
    serviceCategoriesTitle: "Service Categories",
    subsectionTitles: [
      { id: "custom-business-applications", h3: "Custom Business Applications" },
      { id: "simple-internal-tools", h3: "Simple Internal Tools" },
      { id: "prototype-app-design", h3: "Prototype App Design for Small Businesses" },
      { id: "business-dashboard-concepts", h3: "Business Dashboard Concepts" },
      { id: "client-focused-web-applications", h3: "Client-Focused Web Applications" },
      { id: "digital-tools-small-businesses", h3: "Digital Business Tools for Companies" },
    ],
    selectedWorkTitle: "Selected Work Placeholder",
    selectedWorkIntro: "Reserved for future app and tool showcases after architecture approval.",
    toolsTitle: "Tools / Software I Use",
    tools: ["Figma", "React + TypeScript", "Node.js patterns", "API integration flows", "Versioned Git workflow"],
    whyChooseTitle: "Why Choose This Service",
    whyChoosePoints: [
      "Business utility first, complexity second",
      "Prototype-first method lowers risk",
      "Structured path from concept to usable tool",
      "Scalable foundation for future features",
    ],
    ctaTitle: "Need practical digital tools for your company?",
    ctaText: "Describe your workflow challenge and I will propose a clear application structure.",
    ctaButton: "Request application consultation",
    localNote: "Built for small businesses in Germany that need useful, maintainable digital tools.",
  },
  de: {
    eyebrow: "Leistung",
    h1: "Custom Application Design für Unternehmen",
    intro: "Praktische digitale Lösungen für Firmen, die nützliche Tools, klare Interfaces und business-orientierte Workflows brauchen.",
    whatIoffer: [
      "App-Konzepte mit Bezug zu operativen Zielen",
      "Einfache Custom Tools für interne Teams",
      "Prototyp-Interfaces vor voller Entwicklung",
      "Strukturierte Web-App Basis für Wachstum",
    ],
    serviceCategoriesTitle: "Service-Kategorien",
    subsectionTitles: [
      { id: "custom-business-applications", h3: "Custom Business Applications" },
      { id: "simple-internal-tools", h3: "Simple Internal Tools" },
      { id: "prototype-app-design", h3: "Prototype App Design for Small Businesses" },
      { id: "business-dashboard-concepts", h3: "Business Dashboard Concepts" },
      { id: "client-focused-web-applications", h3: "Client-Focused Web Applications" },
      { id: "digital-tools-small-businesses", h3: "Digital Business Tools for Companies" },
    ],
    selectedWorkTitle: "Platzhalter für ausgewählte Arbeiten",
    selectedWorkIntro: "Reserviert für zukünftige App- und Tool-Beispiele nach Architekturfreigabe.",
    toolsTitle: "Tools / Software, die ich nutze",
    tools: ["Figma", "React + TypeScript", "Node.js Muster", "API Integrationen", "Versionierter Git-Workflow"],
    whyChooseTitle: "Warum diese Leistung wählen",
    whyChoosePoints: [
      "Business-Nutzen zuerst, Komplexität danach",
      "Prototype-first reduziert Projektrisiko",
      "Klarer Weg von Konzept zu nutzbarem Tool",
      "Skalierbare Basis für spätere Features",
    ],
    ctaTitle: "Brauchen Sie praktische digitale Tools für Ihr Unternehmen?",
    ctaText: "Beschreiben Sie Ihren Workflow-Bedarf und ich erstelle eine klare App-Struktur.",
    ctaButton: "App-Beratung anfragen",
    localNote: "Entwickelt für kleine Unternehmen in Deutschland mit Fokus auf nutzbare, wartbare digitale Tools.",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Custom Application Design for Businesses",
    intro: "Soluzioni digitali pratiche per aziende che hanno bisogno di strumenti utili, interfacce chiare e workflow business.",
    whatIoffer: [
      "Concetti applicativi legati a obiettivi operativi",
      "Strumenti custom semplici per team interni",
      "Interfacce prototipo prima dello sviluppo completo",
      "Base web app strutturata per crescita futura",
    ],
    serviceCategoriesTitle: "Categorie di servizio",
    subsectionTitles: [
      { id: "custom-business-applications", h3: "Custom Business Applications" },
      { id: "simple-internal-tools", h3: "Simple Internal Tools" },
      { id: "prototype-app-design", h3: "Prototype App Design for Small Businesses" },
      { id: "business-dashboard-concepts", h3: "Business Dashboard Concepts" },
      { id: "client-focused-web-applications", h3: "Client-Focused Web Applications" },
      { id: "digital-tools-small-businesses", h3: "Digital Business Tools for Companies" },
    ],
    selectedWorkTitle: "Placeholder lavori selezionati",
    selectedWorkIntro: "Riservato a futuri showcase app e tool dopo approvazione architettura.",
    toolsTitle: "Tools / Software che uso",
    tools: ["Figma", "React + TypeScript", "Pattern Node.js", "Flussi integrazione API", "Workflow Git versionato"],
    whyChooseTitle: "Perché scegliere questo servizio",
    whyChoosePoints: [
      "Utilità business prima della complessità",
      "Metodo prototype-first riduce il rischio",
      "Percorso chiaro da concetto a tool utilizzabile",
      "Base scalabile per funzionalità future",
    ],
    ctaTitle: "Ti servono strumenti digitali pratici per la tua azienda?",
    ctaText: "Descrivi il tuo workflow e preparo una struttura applicativa chiara.",
    ctaButton: "Richiedi consulenza applicativa",
    localNote: "Pensato per piccole imprese in Germania con bisogno di strumenti digitali utili e sostenibili.",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Custom Application Design for Businesses",
    intro: "Praktična digitalna rešenja za kompanije kojima trebaju korisni alati, jasni interfejsi i poslovni workflow procesi.",
    whatIoffer: [
      "App koncepti vezani za operativne ciljeve",
      "Jednostavni custom alati za interne timove",
      "Prototip interfejsi pre pune izrade",
      "Strukturisana web app osnova za rast",
    ],
    serviceCategoriesTitle: "Kategorije usluga",
    subsectionTitles: [
      { id: "custom-business-applications", h3: "Custom Business Applications" },
      { id: "simple-internal-tools", h3: "Simple Internal Tools" },
      { id: "prototype-app-design", h3: "Prototype App Design for Small Businesses" },
      { id: "business-dashboard-concepts", h3: "Business Dashboard Concepts" },
      { id: "client-focused-web-applications", h3: "Client-Focused Web Applications" },
      { id: "digital-tools-small-businesses", h3: "Digital Business Tools for Companies" },
    ],
    selectedWorkTitle: "Placeholder za odabrane radove",
    selectedWorkIntro: "Rezervisano za buduće app i tool primere nakon odobrenja arhitekture.",
    toolsTitle: "Alati / softver koji koristim",
    tools: ["Figma", "React + TypeScript", "Node.js obrasci", "API integracioni tokovi", "Verzionisan Git workflow"],
    whyChooseTitle: "Zašto izabrati ovu uslugu",
    whyChoosePoints: [
      "Poslovna korisnost je prioritet",
      "Prototype-first pristup smanjuje rizik",
      "Jasan put od koncepta do upotrebljivog alata",
      "Skalabilna osnova za buduće funkcionalnosti",
    ],
    ctaTitle: "Trebaju vam praktični digitalni alati za firmu?",
    ctaText: "Opišite workflow izazov i predložiću jasnu aplikativnu strukturu.",
    ctaButton: "Zatraži konsultacije za aplikacije",
    localNote: "Namenjeno malim biznisima u Nemačkoj kojima trebaju korisni i održivi digitalni alati.",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Custom Application Design for Businesses",
    intro: "Zgjidhje praktike digjitale për kompani që kanë nevojë për mjete të dobishme, interface të qarta dhe workflow biznesi.",
    whatIoffer: [
      "Koncepte app të lidhura me objektiva operativë",
      "Mjete custom të thjeshta për ekipe të brendshme",
      "Interface prototip para zhvillimit të plotë",
      "Bazë e strukturuar web app për rritje",
    ],
    serviceCategoriesTitle: "Kategoritë e shërbimit",
    subsectionTitles: [
      { id: "custom-business-applications", h3: "Custom Business Applications" },
      { id: "simple-internal-tools", h3: "Simple Internal Tools" },
      { id: "prototype-app-design", h3: "Prototype App Design for Small Businesses" },
      { id: "business-dashboard-concepts", h3: "Business Dashboard Concepts" },
      { id: "client-focused-web-applications", h3: "Client-Focused Web Applications" },
      { id: "digital-tools-small-businesses", h3: "Digital Business Tools for Companies" },
    ],
    selectedWorkTitle: "Placeholder për punë të zgjedhura",
    selectedWorkIntro: "I rezervuar për shembuj të ardhshëm app dhe tools pas miratimit të arkitekturës.",
    toolsTitle: "Tools / Software që përdor",
    tools: ["Figma", "React + TypeScript", "Modele Node.js", "Flukse integrimi API", "Workflow Git i versionuar"],
    whyChooseTitle: "Pse të zgjidhni këtë shërbim",
    whyChoosePoints: [
      "Dobishmëria për biznesin është prioritet",
      "Qasja prototype-first ul rrezikun",
      "Rrugë e qartë nga koncepti te mjeti i përdorshëm",
      "Bazë e shkallëzueshme për funksione të ardhshme",
    ],
    ctaTitle: "Keni nevojë për mjete digjitale praktike për kompaninë?",
    ctaText: "Përshkruani sfidën e workflow-it dhe unë propozoj strukturë të qartë aplikative.",
    ctaButton: "Kërko konsultë për aplikacione",
    localNote: "I krijuar për biznese të vogla në Gjermani që kërkojnë mjete digjitale të dobishme dhe të mirëmbajtshme.",
  },
};

export default function ApplicationDesignDevelopment() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = appByLang[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServicePageTemplate
      labels={getServiceTemplateLabels(lang)}
      eyebrow={copy.eyebrow}
      h1={copy.h1}
      intro={copy.intro}
      whatIoffer={copy.whatIoffer}
      serviceCategoriesTitle={copy.serviceCategoriesTitle}
      subsections={buildSubsections(lang, copy.subsectionTitles)}
      selectedWorkTitle={copy.selectedWorkTitle}
      selectedWorkIntro={copy.selectedWorkIntro}
      toolsTitle={copy.toolsTitle}
      tools={copy.tools}
      whyChooseTitle={copy.whyChooseTitle}
      whyChoosePoints={copy.whyChoosePoints}
      ctaTitle={copy.ctaTitle}
      ctaText={copy.ctaText}
      ctaButton={copy.ctaButton}
      localNote={copy.localNote}
    />
  );
}
