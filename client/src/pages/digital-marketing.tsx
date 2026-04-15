import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { fotoKreiraneSaAiGalleryByLang } from "@/data/fotoKreiraneSaAiGallery";
import { videoKreiraniSaAiGalleryByLang } from "@/data/videoKreiraniSaAiGallery";
import { buildSubsections, getServiceTemplateLabels, toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

type AIContent = {
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

const aiByLang: Record<ServiceLang, AIContent> = {
  en: {
    eyebrow: "Service",
    h1: "AI Content Creation for Business Marketing",
    intro: "Practical AI content services with clear separation between AI image production and AI video production.",
    whatIoffer: [
      "AI image workflows for campaigns and product communication",
      "AI video creation workflows including Veo 3.1",
      "Business-focused output structure for marketing channels",
      "Controlled process for quality and consistency",
    ],
    serviceCategoriesTitle: "Service Categories",
    subsectionTitles: [
      { id: "ai-image-creation", h3: "AI Image Creation for Brands" },
      { id: "ai-product-marketing-visuals", h3: "AI Product Visuals for Advertising" },
      { id: "ai-photo-concepts", h3: "AI Photo Concepts" },
      { id: "foto-kreirane-sa-ai", h3: "AI-generated photos (Google Gemini)" },
      { id: "video-kreirani-sa-ai", h3: "AI-generated video clips (hosted on this site)" },
      { id: "ai-video-creation", h3: "AI Video Creation" },
      { id: "ai-videos-veo", h3: "AI Video Creation with Veo 3.1" },
      { id: "ai-content-business-promo", h3: "AI Content for Business Promotion" },
    ],
    selectedWorkTitle: "Selected Work Placeholder",
    selectedWorkIntro: "Reserved for curated AI image and AI video showcases in the next content phase.",
    toolsTitle: "Tools / Software I Use",
    tools: ["Google Gemini", "Midjourney", "Flux workflows", "Veo 3.1", "Runway", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Why Choose This Service",
    whyChoosePoints: [
      "AI image and AI video services are clearly separated",
      "Output is designed for real business use",
      "Consistent style and campaign structure",
      "Scalable process for ongoing content production",
    ],
    ctaTitle: "Need AI content that supports real marketing goals?",
    ctaText: "Send your campaign goal and channel plan and I will build a clear AI content structure.",
    ctaButton: "Request AI content consultation",
    localNote: "Useful for small businesses in Germany and Balkan businesses targeting German-speaking audiences.",
  },
  de: {
    eyebrow: "Leistung",
    h1: "AI Content Creation für Business Marketing",
    intro: "Praxisnahe AI-Content-Services mit klarer Trennung zwischen AI-Bildern und AI-Videos.",
    whatIoffer: [
      "AI-Bild-Workflows für Kampagnen und Produktkommunikation",
      "AI-Video-Workflows inklusive Veo 3.1",
      "Business-orientierte Ausspielung für Marketing-Kanäle",
      "Kontrollierter Prozess für Qualität und Konsistenz",
    ],
    serviceCategoriesTitle: "Service-Kategorien",
    subsectionTitles: [
      { id: "ai-image-creation", h3: "AI Image Creation für Brands" },
      { id: "ai-product-marketing-visuals", h3: "AI Product Visuals für Advertising" },
      { id: "ai-photo-concepts", h3: "AI Photo Concepts" },
      { id: "foto-kreirane-sa-ai", h3: "KI-generierte Fotos (Google Gemini)" },
      { id: "video-kreirani-sa-ai", h3: "KI-generierte Videos (auf dieser Website gehostet)" },
      { id: "ai-video-creation", h3: "AI Video Creation" },
      { id: "ai-videos-veo", h3: "AI Video Creation mit Veo 3.1" },
      { id: "ai-content-business-promo", h3: "AI Content für Business Promotion" },
    ],
    selectedWorkTitle: "Platzhalter für ausgewählte Arbeiten",
    selectedWorkIntro: "Reserviert für kuratierte AI-Bild- und AI-Video-Beispiele in der nächsten Phase.",
    toolsTitle: "Tools / Software, die ich nutze",
    tools: ["Google Gemini", "Midjourney", "Flux Workflows", "Veo 3.1", "Runway", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Warum diese Leistung wählen",
    whyChoosePoints: [
      "Klare Trennung zwischen AI-Bild- und AI-Video-Leistung",
      "Ergebnisse für echten Business-Einsatz",
      "Konsistenter Stil und Kampagnenstruktur",
      "Skalierbarer Prozess für laufende Content-Produktion",
    ],
    ctaTitle: "Brauchen Sie AI-Content mit klarem Marketingnutzen?",
    ctaText: "Senden Sie Kampagnenziel und Kanalplan, ich erstelle eine klare AI-Content-Struktur.",
    ctaButton: "AI-Content-Beratung anfragen",
    localNote: "Besonders nützlich für kleine Unternehmen in Deutschland und Balkan-Unternehmen mit deutschem Zielmarkt.",
  },
  it: {
    eyebrow: "Servizio",
    h1: "AI Content Creation for Business Marketing",
    intro: "Servizi AI pratici con separazione chiara tra produzione immagini AI e video AI.",
    whatIoffer: [
      "Workflow immagini AI per campagne e prodotti",
      "Workflow video AI inclusi processi Veo 3.1",
      "Output orientato ai canali marketing business",
      "Processo controllato per qualità e coerenza",
    ],
    serviceCategoriesTitle: "Categorie di servizio",
    subsectionTitles: [
      { id: "ai-image-creation", h3: "AI Image Creation for Brands" },
      { id: "ai-product-marketing-visuals", h3: "AI Product Visuals for Advertising" },
      { id: "ai-photo-concepts", h3: "AI Photo Concepts" },
      { id: "foto-kreirane-sa-ai", h3: "Foto generate con IA (Google Gemini)" },
      { id: "video-kreirani-sa-ai", h3: "Video generati con IA (su questo sito)" },
      { id: "ai-video-creation", h3: "AI Video Creation" },
      { id: "ai-videos-veo", h3: "AI Video Creation with Veo 3.1" },
      { id: "ai-content-business-promo", h3: "AI Content for Business Promotion" },
    ],
    selectedWorkTitle: "Placeholder lavori selezionati",
    selectedWorkIntro: "Riservato a showcase AI immagini/video nella prossima fase.",
    toolsTitle: "Tools / Software che uso",
    tools: ["Google Gemini", "Midjourney", "Flux workflows", "Veo 3.1", "Runway", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Perché scegliere questo servizio",
    whyChoosePoints: [
      "Separazione chiara tra servizi AI image e AI video",
      "Output pronto per uso business reale",
      "Stile coerente e struttura campagna",
      "Processo scalabile per produzione continua",
    ],
    ctaTitle: "Ti serve AI content utile per marketing reale?",
    ctaText: "Inviami obiettivo campagna e canali e preparo una struttura AI chiara.",
    ctaButton: "Richiedi consulenza AI content",
    localNote: "Utile per piccole imprese in Germania e business balcanici nel mercato tedesco.",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "AI Content Creation for Business Marketing",
    intro: "Praktične AI usluge sa jasnim razdvajanjem AI image produkcije i AI video produkcije.",
    whatIoffer: [
      "AI image workflow za kampanje i komunikaciju proizvoda",
      "AI video workflow uključujući Veo 3.1",
      "Poslovno orijentisan output za marketinške kanale",
      "Kontrolisan proces za kvalitet i doslednost",
    ],
    serviceCategoriesTitle: "Kategorije usluga",
    subsectionTitles: [
      { id: "ai-image-creation", h3: "AI Image Creation for Brands" },
      { id: "ai-product-marketing-visuals", h3: "AI Product Visuals for Advertising" },
      { id: "ai-photo-concepts", h3: "AI Photo Concepts" },
      { id: "foto-kreirane-sa-ai", h3: "Foto kreirane sa AI (Google Gemini)" },
      { id: "video-kreirani-sa-ai", h3: "Video kreirani sa AI (hostovano na sajtu)" },
      { id: "ai-video-creation", h3: "AI Video Creation" },
      { id: "ai-videos-veo", h3: "AI Video Creation with Veo 3.1" },
      { id: "ai-content-business-promo", h3: "AI Content for Business Promotion" },
    ],
    selectedWorkTitle: "Placeholder za odabrane radove",
    selectedWorkIntro: "Rezervisano za kurirane AI image i AI video primere u sledećoj fazi.",
    toolsTitle: "Alati / softver koji koristim",
    tools: ["Google Gemini", "Midjourney", "Flux workflow", "Veo 3.1", "Runway", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Zašto izabrati ovu uslugu",
    whyChoosePoints: [
      "Jasno razdvajanje AI image i AI video usluga",
      "Rezultati spremni za realnu poslovnu upotrebu",
      "Dosledan stil i struktura kampanja",
      "Skalabilan proces za kontinuiranu produkciju",
    ],
    ctaTitle: "Treba vam AI sadržaj koji pomaže realnom marketingu?",
    ctaText: "Pošaljite cilj kampanje i kanale, a ja ću postaviti jasnu AI content strukturu.",
    ctaButton: "Zatraži AI content konsultacije",
    localNote: "Korisno za mala preduzeća u Nemačkoj i balkanske firme ka nemačkom tržištu.",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "AI Content Creation for Business Marketing",
    intro: "Shërbime AI praktike me ndarje të qartë mes prodhimit AI image dhe AI video.",
    whatIoffer: [
      "Workflow AI image për fushata dhe produkte",
      "Workflow AI video duke përfshirë Veo 3.1",
      "Output i orientuar për kanale marketingu biznesi",
      "Proces i kontrolluar për cilësi dhe konsistencë",
    ],
    serviceCategoriesTitle: "Kategoritë e shërbimit",
    subsectionTitles: [
      { id: "ai-image-creation", h3: "AI Image Creation for Brands" },
      { id: "ai-product-marketing-visuals", h3: "AI Product Visuals for Advertising" },
      { id: "ai-photo-concepts", h3: "AI Photo Concepts" },
      { id: "foto-kreirane-sa-ai", h3: "Foto të krijuara me AI (Google Gemini)" },
      { id: "video-kreirani-sa-ai", h3: "Video të krijuara me AI (të hostuara në sajt)" },
      { id: "ai-video-creation", h3: "AI Video Creation" },
      { id: "ai-videos-veo", h3: "AI Video Creation with Veo 3.1" },
      { id: "ai-content-business-promo", h3: "AI Content for Business Promotion" },
    ],
    selectedWorkTitle: "Placeholder për punë të zgjedhura",
    selectedWorkIntro: "I rezervuar për shembuj AI image dhe AI video në fazën tjetër.",
    toolsTitle: "Tools / Software që përdor",
    tools: ["Google Gemini", "Midjourney", "Flux workflows", "Veo 3.1", "Runway", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Pse të zgjidhni këtë shërbim",
    whyChoosePoints: [
      "Ndarje e qartë mes shërbimeve AI image dhe AI video",
      "Output gati për përdorim real biznesi",
      "Stil i qëndrueshëm dhe strukturë fushatash",
      "Proces i shkallëzueshëm për prodhim të vazhdueshëm",
    ],
    ctaTitle: "Keni nevojë për AI content që mbështet marketingun real?",
    ctaText: "Dërgoni objektivin e fushatës dhe kanalet, dhe unë ndërtoj strukturë të qartë AI.",
    ctaButton: "Kërko konsultë AI content",
    localNote: "E dobishme për biznese të vogla në Gjermani dhe biznese ballkanike që synojnë tregun gjerman.",
  },
};

export default function DigitalMarketing() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = aiByLang[lang];

  const subsections = buildSubsections(lang, copy.subsectionTitles).map((sub) => {
    if (sub.id === "foto-kreirane-sa-ai") return { ...sub, workGallery: fotoKreiraneSaAiGalleryByLang[lang] };
    if (sub.id === "video-kreirani-sa-ai") return { ...sub, workVideoGallery: videoKreiraniSaAiGalleryByLang[lang] };
    return sub;
  });

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
