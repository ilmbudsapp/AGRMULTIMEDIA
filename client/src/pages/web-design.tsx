import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildSubsections, getServiceTemplateLabels, toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";
import {
  fixbikeBusinessWebsiteIntroByLang,
  fixbikeLiveSiteLinkByLang,
  fixbikeWebDesignGalleryByLang,
} from "@/data/fixbikeWebDesignGallery";

type WebContent = {
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

const webByLang: Record<ServiceLang, WebContent> = {
  en: {
    eyebrow: "Service",
    h1: "Web Design and SEO Services for Small Businesses",
    intro: "Structured website and SEO service with clear architecture, mobile-first UX, and practical search visibility setup.",
    whatIoffer: [
      "Business website structure designed for clear conversion flow",
      "SEO optimization as a visible and separate service layer",
      "Mobile-friendly layouts and performance-first setup",
      "Local SEO support for Germany-focused businesses",
    ],
    serviceCategoriesTitle: "Service Categories",
    subsectionTitles: [
      { id: "business-website-design", h3: "Business Website Design in Germany" },
      { id: "landing-page-design", h3: "Landing Page Design" },
      { id: "website-redesign", h3: "Website Redesign Services" },
      { id: "seo-optimization", h3: "SEO Optimization for Small Business Websites" },
      { id: "mobile-friendly-design", h3: "Mobile-Friendly Website Design" },
      { id: "fast-loading-setup", h3: "Fast-Loading Website Setup" },
      { id: "local-seo", h3: "Local SEO Services for Businesses in Germany" },
    ],
    selectedWorkTitle: "More selected work",
    selectedWorkIntro: "Room for additional client websites and SEO case studies beyond the examples in the categories above.",
    toolsTitle: "Tools / Software I Use",
    tools: ["Figma", "React + Vite", "Google Search Console", "On-page SEO audit tools", "Lighthouse and performance tools"],
    whyChooseTitle: "Why Choose This Service",
    whyChoosePoints: [
      "SEO, structure, and design are built together",
      "Clear hierarchy for users and search engines",
      "Mobile and speed optimization included by default",
      "Local SEO angle aligned with Germany market reality",
    ],
    ctaTitle: "Need a cleaner website with better SEO structure?",
    ctaText: "Send your website or service idea and I will propose a practical web + SEO architecture.",
    ctaButton: "Request web and SEO consultation",
    localNote: "Ideal for small businesses in Germany, including Baden-Württemberg and Balkan-owned companies in Germany.",
  },
  de: {
    eyebrow: "Leistung",
    h1: "Web Design and SEO Services für kleine Unternehmen",
    intro: "Strukturierter Website- und SEO-Service mit klarer Architektur, mobile-first UX und praxisnaher Suchsichtbarkeit.",
    whatIoffer: [
      "Business-Website-Struktur mit klarem Conversion-Fokus",
      "SEO-Optimierung als sichtbarer, separater Leistungsbereich",
      "Mobile-freundliche Layouts und performance-orientiertes Setup",
      "Local SEO Unterstützung für Unternehmen in Deutschland",
    ],
    serviceCategoriesTitle: "Service-Kategorien",
    subsectionTitles: [
      { id: "business-website-design", h3: "Business Website Design in Deutschland" },
      { id: "landing-page-design", h3: "Landing Page Design" },
      { id: "website-redesign", h3: "Website Redesign Services" },
      { id: "seo-optimization", h3: "SEO Optimization für Small Business Websites" },
      { id: "mobile-friendly-design", h3: "Mobile-Friendly Website Design" },
      { id: "fast-loading-setup", h3: "Fast-Loading Website Setup" },
      { id: "local-seo", h3: "Local SEO Services für Businesses in Deutschland" },
    ],
    selectedWorkTitle: "Weitere ausgewählte Arbeiten",
    selectedWorkIntro: "Platz für zusätzliche Kundenwebsites und SEO-Fallstudien jenseits der Beispiele in den Kategorien oben.",
    toolsTitle: "Tools / Software, die ich nutze",
    tools: ["Figma", "React + Vite", "Google Search Console", "On-page SEO Audit Tools", "Lighthouse"],
    whyChooseTitle: "Warum diese Leistung wählen",
    whyChoosePoints: [
      "SEO, Struktur und Design werden gemeinsam aufgebaut",
      "Klare Hierarchie für Nutzer und Suchmaschinen",
      "Mobile- und Speed-Optimierung standardmäßig enthalten",
      "Local SEO passend für den deutschen Markt",
    ],
    ctaTitle: "Brauchen Sie eine klarere Website mit besserer SEO-Struktur?",
    ctaText: "Senden Sie Ihre Website oder Service-Idee und ich schlage eine praktische Web + SEO Architektur vor.",
    ctaButton: "Web- und SEO-Beratung anfragen",
    localNote: "Ideal für kleine Unternehmen in Deutschland, inkl. Baden-Württemberg und Balkan-Unternehmen in Deutschland.",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Web Design and SEO Services for Small Businesses",
    intro: "Servizio web + SEO strutturato con architettura chiara, UX mobile-first e setup concreto per visibilità organica.",
    whatIoffer: [
      "Struttura sito business con flusso conversione chiaro",
      "SEO optimization visibile come parte separata del servizio",
      "Layout mobile-friendly e setup orientato alle performance",
      "Supporto local SEO per business in Germania",
    ],
    serviceCategoriesTitle: "Categorie di servizio",
    subsectionTitles: [
      { id: "business-website-design", h3: "Business Website Design in Germany" },
      { id: "landing-page-design", h3: "Landing Page Design" },
      { id: "website-redesign", h3: "Website Redesign Services" },
      { id: "seo-optimization", h3: "SEO Optimization for Small Business Websites" },
      { id: "mobile-friendly-design", h3: "Mobile-Friendly Website Design" },
      { id: "fast-loading-setup", h3: "Fast-Loading Website Setup" },
      { id: "local-seo", h3: "Local SEO Services for Businesses in Germany" },
    ],
    selectedWorkTitle: "Altri lavori selezionati",
    selectedWorkIntro: "Spazio per ulteriori siti clienti e casi SEO oltre agli esempi nelle categorie sopra.",
    toolsTitle: "Tools / Software che uso",
    tools: ["Figma", "React + Vite", "Google Search Console", "Tool audit SEO on-page", "Lighthouse"],
    whyChooseTitle: "Perché scegliere questo servizio",
    whyChoosePoints: [
      "SEO, struttura e design sviluppati insieme",
      "Gerarchia chiara per utenti e motori di ricerca",
      "Ottimizzazione mobile e velocità inclusa",
      "Approccio local SEO adatto al mercato tedesco",
    ],
    ctaTitle: "Ti serve un sito più chiaro con SEO migliore?",
    ctaText: "Inviami sito o idea servizio e preparo un'architettura web + SEO concreta.",
    ctaButton: "Richiedi consulenza web e SEO",
    localNote: "Ideale per piccole imprese in Germania e business balcanici attivi nel mercato tedesco.",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Web Design and SEO Services za mala preduzeća",
    intro: "Strukturisana web + SEO usluga sa jasnom arhitekturom, mobile-first UX pristupom i praktičnim setup-om za bolju pretragu.",
    whatIoffer: [
      "Struktura poslovnog sajta sa jasnim konverzionim tokom",
      "SEO optimizacija kao vidljiv i poseban deo usluge",
      "Mobile-friendly layout i performance-first setup",
      "Lokalni SEO fokus za biznise u Nemačkoj",
    ],
    serviceCategoriesTitle: "Kategorije usluga",
    subsectionTitles: [
      { id: "business-website-design", h3: "Business Website Design in Germany" },
      { id: "landing-page-design", h3: "Landing Page Design" },
      { id: "website-redesign", h3: "Website Redesign Services" },
      { id: "seo-optimization", h3: "SEO Optimization for Small Business Websites" },
      { id: "mobile-friendly-design", h3: "Mobile-Friendly Website Design" },
      { id: "fast-loading-setup", h3: "Fast-Loading Website Setup" },
      { id: "local-seo", h3: "Local SEO Services for Businesses in Germany" },
    ],
    selectedWorkTitle: "Još odabranih radova",
    selectedWorkIntro: "Prostor za dodatne klijentske sajtove i SEO studije slučaja pored primera u kategorijama iznad.",
    toolsTitle: "Alati / softver koji koristim",
    tools: ["Figma", "React + Vite", "Google Search Console", "On-page SEO audit alati", "Lighthouse"],
    whyChooseTitle: "Zašto izabrati ovu uslugu",
    whyChoosePoints: [
      "SEO, struktura i dizajn se grade zajedno",
      "Jasna hijerarhija za korisnike i pretraživače",
      "Mobilna optimizacija i brzina su uključeni",
      "Lokalni SEO pristup usklađen sa nemačkim tržištem",
    ],
    ctaTitle: "Treba vam čistiji sajt i bolja SEO struktura?",
    ctaText: "Pošaljite sajt ili ideju usluge i predložiću praktičnu web + SEO arhitekturu.",
    ctaButton: "Zatraži web i SEO konsultacije",
    localNote: "Idealno za mala preduzeća u Nemačkoj, uključujući Baden-Württemberg i balkanske firme u Nemačkoj.",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Web Design and SEO Services për Biznese të Vogla",
    intro: "Shërbim i strukturuar web + SEO me arkitekturë të qartë, UX mobile-first dhe setup praktik për dukshmëri në kërkim.",
    whatIoffer: [
      "Strukturë faqeje biznesi me flow të qartë konvertimi",
      "SEO optimization si shtresë e dukshme dhe e veçantë",
      "Layout mobile-friendly dhe setup i fokusuar në performancë",
      "Mbështetje local SEO për biznese në Gjermani",
    ],
    serviceCategoriesTitle: "Kategoritë e shërbimit",
    subsectionTitles: [
      { id: "business-website-design", h3: "Business Website Design in Germany" },
      { id: "landing-page-design", h3: "Landing Page Design" },
      { id: "website-redesign", h3: "Website Redesign Services" },
      { id: "seo-optimization", h3: "SEO Optimization for Small Business Websites" },
      { id: "mobile-friendly-design", h3: "Mobile-Friendly Website Design" },
      { id: "fast-loading-setup", h3: "Fast-Loading Website Setup" },
      { id: "local-seo", h3: "Local SEO Services for Businesses in Germany" },
    ],
    selectedWorkTitle: "Më shumë punë të zgjedhura",
    selectedWorkIntro: "Hapësirë për faqe të tjera klientësh dhe studime SEO përtej shembujve në kategoritë më sipër.",
    toolsTitle: "Tools / Software që përdor",
    tools: ["Figma", "React + Vite", "Google Search Console", "Mjete auditimi SEO on-page", "Lighthouse"],
    whyChooseTitle: "Pse të zgjidhni këtë shërbim",
    whyChoosePoints: [
      "SEO, struktura dhe dizajni ndërtohen së bashku",
      "Hierarki e qartë për përdorues dhe motorë kërkimi",
      "Optimizimi mobile dhe shpejtësia të përfshira",
      "Qasje local SEO e përshtatur për tregun gjerman",
    ],
    ctaTitle: "Keni nevojë për faqe më të qartë dhe SEO më të mirë?",
    ctaText: "Dërgoni faqen ose idenë e shërbimit dhe unë propozoj arkitekturë praktike web + SEO.",
    ctaButton: "Kërko konsultë web dhe SEO",
    localNote: "Ideale për biznese të vogla në Gjermani, përfshirë Baden-Württemberg dhe biznese ballkanike në Gjermani.",
  },
};

export default function WebDesign() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = webByLang[lang];

  const subsections = buildSubsections(lang, copy.subsectionTitles).map((sub) =>
    sub.id === "business-website-design"
      ? {
          ...sub,
          intro: fixbikeBusinessWebsiteIntroByLang[lang],
          workGallery: fixbikeWebDesignGalleryByLang[lang],
          workGalleryExternalLink: fixbikeLiveSiteLinkByLang[lang],
        }
      : sub,
  );

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
      subsections={subsections}
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
