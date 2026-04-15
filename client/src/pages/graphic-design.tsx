import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildSubsections, getServiceTemplateLabels, toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

type GraphicContent = {
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

const graphicByLang: Record<ServiceLang, GraphicContent> = {
  en: {
    eyebrow: "Service",
    h1: "Graphic Design Services for Small Businesses",
    intro: "Clean and practical visual communication for businesses that need professional branding across web, social, and print.",
    whatIoffer: [
      "Brand-consistent visual systems",
      "Design assets ready for real marketing use",
      "Clear structure for ongoing design production",
      "Professional formatting for digital and print channels",
    ],
    serviceCategoriesTitle: "Service Categories",
    subsectionTitles: [
      { id: "brand-identity-design", h3: "Brand Identity Design for Local Businesses" },
      { id: "logo-design-services", h3: "Professional Logo Design Services" },
      { id: "photo-retouching-services", h3: "Photo Retouching and Image Enhancement" },
      { id: "social-media-graphic-design", h3: "Social Media Graphics for Business Promotion" },
      { id: "marketing-materials-design", h3: "Marketing Materials Design" },
    ],
    selectedWorkTitle: "Selected Work Placeholder",
    selectedWorkIntro: "Reserved for curated project examples in the next phase.",
    toolsTitle: "Tools / Software I Use",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva Pro"],
    whyChooseTitle: "Why Choose This Service",
    whyChoosePoints: [
      "Design decisions tied to business positioning",
      "Reusable assets and templates",
      "Consistent style across channels",
      "Clear structure for future growth",
    ],
    ctaTitle: "Need a stronger visual identity?",
    ctaText: "Share your current materials and I will map a clear design structure for your next phase.",
    ctaButton: "Request graphic design consultation",
    localNote: "Available for businesses in Germany and Balkan-owned businesses operating in Germany.",
  },
  de: {
    eyebrow: "Leistung",
    h1: "Graphic Design Services für kleine Unternehmen",
    intro: "Klare und praktische visuelle Kommunikation für Unternehmen, die professionelles Branding für Web, Social Media und Print brauchen.",
    whatIoffer: [
      "Markenkonsistente visuelle Systeme",
      "Design-Assets für echte Marketing-Nutzung",
      "Klare Struktur für laufende Designproduktion",
      "Professionelle Aufbereitung für digitale und Print-Kanäle",
    ],
    serviceCategoriesTitle: "Service-Kategorien",
    subsectionTitles: [
      { id: "brand-identity-design", h3: "Brand Identity Design für lokale Unternehmen" },
      { id: "logo-design-services", h3: "Professionelle Logo Design Services" },
      { id: "photo-retouching-services", h3: "Foto-Retusche und Bildoptimierung" },
      { id: "social-media-graphic-design", h3: "Social Media Grafiken für Business-Promotion" },
      { id: "marketing-materials-design", h3: "Design von Marketingmaterialien" },
    ],
    selectedWorkTitle: "Platzhalter für ausgewählte Arbeiten",
    selectedWorkIntro: "Dieser Bereich ist für kuratierte Projektbeispiele in der nächsten Phase reserviert.",
    toolsTitle: "Tools / Software, die ich nutze",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva Pro"],
    whyChooseTitle: "Warum diese Leistung wählen",
    whyChoosePoints: [
      "Design-Entscheidungen mit klarem Business-Fokus",
      "Wiederverwendbare Assets und Templates",
      "Einheitlicher Stil über alle Kanäle",
      "Klare Struktur für zukünftiges Wachstum",
    ],
    ctaTitle: "Brauchen Sie eine stärkere visuelle Identität?",
    ctaText: "Senden Sie Ihr aktuelles Material und ich erstelle eine klare Design-Struktur für den nächsten Schritt.",
    ctaButton: "Grafikdesign-Beratung anfragen",
    localNote: "Verfügbar für Unternehmen in Deutschland und Balkan-Unternehmen mit Sitz in Deutschland.",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Graphic Design Services per Piccole Imprese",
    intro: "Comunicazione visiva chiara e pratica per aziende che vogliono un branding professionale su web, social e stampa.",
    whatIoffer: [
      "Sistemi visivi coerenti con il brand",
      "Asset grafici pronti per marketing reale",
      "Struttura chiara per produzione continuativa",
      "Formati professionali per digitale e stampa",
    ],
    serviceCategoriesTitle: "Categorie di servizio",
    subsectionTitles: [
      { id: "brand-identity-design", h3: "Brand Identity Design per attività locali" },
      { id: "logo-design-services", h3: "Professional Logo Design Services" },
      { id: "photo-retouching-services", h3: "Photo Retouching and Image Enhancement" },
      { id: "social-media-graphic-design", h3: "Social Media Graphics per promozione business" },
      { id: "marketing-materials-design", h3: "Design materiali marketing" },
    ],
    selectedWorkTitle: "Placeholder lavori selezionati",
    selectedWorkIntro: "Sezione riservata a esempi progetto curati nella prossima fase.",
    toolsTitle: "Tools / Software che uso",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva Pro"],
    whyChooseTitle: "Perché scegliere questo servizio",
    whyChoosePoints: [
      "Decisioni di design legate agli obiettivi business",
      "Asset e template riutilizzabili",
      "Stile coerente su tutti i canali",
      "Struttura chiara per crescita futura",
    ],
    ctaTitle: "Hai bisogno di un'identità visiva più forte?",
    ctaText: "Inviami i materiali attuali e preparo una struttura di design chiara per il prossimo step.",
    ctaButton: "Richiedi consulenza graphic design",
    localNote: "Disponibile per imprese in Germania e business balcanici attivi nel mercato tedesco.",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Graphic Design Services za mala preduzeća",
    intro: "Jasna i praktična vizuelna komunikacija za biznise kojima treba profesionalan brending za web, društvene mreže i štampu.",
    whatIoffer: [
      "Vizuelni sistem usklađen sa brendom",
      "Dizajn materijali spremni za realnu marketinšku upotrebu",
      "Jasna struktura za kontinuiranu produkciju sadržaja",
      "Profesionalna priprema za digital i print kanale",
    ],
    serviceCategoriesTitle: "Kategorije usluga",
    subsectionTitles: [
      { id: "brand-identity-design", h3: "Brand Identity Design za lokalne biznise" },
      { id: "logo-design-services", h3: "Professional Logo Design Services" },
      { id: "photo-retouching-services", h3: "Photo Retouching and Image Enhancement" },
      { id: "social-media-graphic-design", h3: "Social Media Graphics za promociju biznisa" },
      { id: "marketing-materials-design", h3: "Dizajn marketinških materijala" },
    ],
    selectedWorkTitle: "Placeholder za odabrane radove",
    selectedWorkIntro: "Ovaj blok je rezervisan za kurirane primere radova u sledećoj fazi.",
    toolsTitle: "Alati / softver koji koristim",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva Pro"],
    whyChooseTitle: "Zašto izabrati ovu uslugu",
    whyChoosePoints: [
      "Dizajn odluke vezane za poslovno pozicioniranje",
      "Ponovo upotrebljivi materijali i šabloni",
      "Dosledan stil kroz sve kanale",
      "Jasna struktura za budući rast",
    ],
    ctaTitle: "Treba vam jači vizuelni identitet?",
    ctaText: "Pošaljite postojeće materijale i pripremiću jasnu dizajn strukturu za sledeći korak.",
    ctaButton: "Zatraži graphic design konsultacije",
    localNote: "Dostupno za biznise u Nemačkoj i balkanske firme koje posluju u Nemačkoj.",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Graphic Design Services për Biznese të Vogla",
    intro: "Komunikim vizual i qartë dhe praktik për biznese që kanë nevojë për branding profesional në web, social dhe print.",
    whatIoffer: [
      "Sistem vizual i qëndrueshëm me brandin",
      "Materiale dizajni gati për marketing real",
      "Strukturë e qartë për prodhim të vazhdueshëm",
      "Formate profesionale për kanale digjitale dhe print",
    ],
    serviceCategoriesTitle: "Kategoritë e shërbimit",
    subsectionTitles: [
      { id: "brand-identity-design", h3: "Brand Identity Design për biznese lokale" },
      { id: "logo-design-services", h3: "Professional Logo Design Services" },
      { id: "photo-retouching-services", h3: "Photo Retouching and Image Enhancement" },
      { id: "social-media-graphic-design", h3: "Social Media Graphics për promovim biznesi" },
      { id: "marketing-materials-design", h3: "Dizajn i materialeve të marketingut" },
    ],
    selectedWorkTitle: "Placeholder për punë të zgjedhura",
    selectedWorkIntro: "Ky bllok është rezervuar për shembuj pune në fazën tjetër.",
    toolsTitle: "Tools / Software që përdor",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva Pro"],
    whyChooseTitle: "Pse të zgjidhni këtë shërbim",
    whyChoosePoints: [
      "Vendime dizajni të lidhura me pozicionimin e biznesit",
      "Materiale dhe template të ripërdorshme",
      "Stil i njëtrajtshëm në të gjitha kanalet",
      "Strukturë e qartë për rritje të ardhshme",
    ],
    ctaTitle: "Keni nevojë për identitet vizual më të fortë?",
    ctaText: "Dërgoni materialet ekzistuese dhe unë do përgatis një strukturë të qartë dizajni për hapin tjetër.",
    ctaButton: "Kërko konsultë graphic design",
    localNote: "I disponueshëm për biznese në Gjermani dhe biznese ballkanike që operojnë në Gjermani.",
  },
};

export default function GraphicDesign() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = graphicByLang[lang];

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
