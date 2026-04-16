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
  localNote?: string;
};

const aiByLang: Record<ServiceLang, AIContent> = {
  en: {
    eyebrow: "Service",
    h1: "AI Content Creation Services",
    intro:
      "AI-generated images, AI video creation, and creative AI marketing content for brands that want faster production and premium visuals. Portfolio samples below.",
    whatIoffer: [
      "AI-generated images for campaigns, ads, and social media content creation",
      "AI video creation for short promos, reels, and product storytelling",
      "Creative AI visuals for brands with consistent visual direction",
      "Production-ready files tailored for web, social, and paid channels",
    ],
    serviceCategoriesTitle: "AI showcase",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "AI-generated images" },
      { id: "video-kreirani-sa-ai", h3: "AI video content" },
    ],
    selectedWorkTitle: "Portfolio note",
    selectedWorkIntro: "More AI case studies can be shared per niche and campaign type.",
    toolsTitle: "Workflow tools",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Use cases / process",
    whyChoosePoints: [
      "Brand visuals for offers, launches, and seasonal campaigns",
      "Promo videos for ads, landing pages, and social platforms",
      "Fast social media creative production with clear style control",
    ],
    ctaTitle: "Need AI visuals for your brand?",
    ctaText: "Let us create your next AI photo and video project.",
    ctaButton: "Start AI content project",
  },
  de: {
    eyebrow: "Leistung",
    h1: "AI Content Creation Services",
    intro:
      "AI-generierte Bilder, AI-Videoerstellung und kreative AI-Visuals für Marken mit schneller Produktion und hochwertigem Look. Portfolio direkt unten.",
    whatIoffer: [
      "AI-generierte Bilder für Kampagnen, Ads und Social Media Content",
      "AI Video Creation für kurze Promo-Clips, Reels und Produktstorys",
      "Kreative AI Visuals for Brands mit konsistenter Stilführung",
      "Produktionsreife Dateien für Website, Social Media und Ads",
    ],
    serviceCategoriesTitle: "AI Showcase",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "AI-generierte Bilder" },
      { id: "video-kreirani-sa-ai", h3: "AI-generierte Videos" },
    ],
    selectedWorkTitle: "Portfolio-Hinweis",
    selectedWorkIntro: "Weitere AI-Cases nach Branche und Kampagnentyp auf Anfrage.",
    toolsTitle: "Workflow-Tools",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Use Cases / Prozess",
    whyChoosePoints: [
      "Brand-Visuals für Angebote, Launches und saisonale Kampagnen",
      "Promo-Videos für Ads, Landingpages und Social Media",
      "Schnelle Content-Produktion mit klarer visueller Kontrolle",
    ],
    ctaTitle: "Brauchen Sie AI-Visuals für Ihre Marke?",
    ctaText: "Lassen Sie uns Ihr nächstes AI-Foto- und Video-Projekt erstellen.",
    ctaButton: "AI-Content-Projekt starten",
  },
  it: {
    eyebrow: "Servizio",
    h1: "AI Content Creation Services",
    intro:
      "Immagini AI-generated, AI video creation e visual creativi per brand che vogliono output rapido e look premium. Portfolio qui sotto.",
    whatIoffer: [
      "AI-generated images per campagne, ads e social media content creation",
      "AI video creation per promo brevi, reels e storytelling prodotto",
      "AI visuals for brands con direzione stilistica coerente",
      "File pronti per web, social e canali advertising",
    ],
    serviceCategoriesTitle: "AI showcase",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "Immagini AI-generated" },
      { id: "video-kreirani-sa-ai", h3: "Contenuti video AI" },
    ],
    selectedWorkTitle: "Nota portfolio",
    selectedWorkIntro: "Altri case study AI disponibili per settore e obiettivo campagna.",
    toolsTitle: "Strumenti workflow",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Use cases / processo",
    whyChoosePoints: [
      "Visual brand per offerte, lanci e campagne stagionali",
      "Video promo per ads, landing page e social",
      "Produzione creativa social rapida con controllo stile",
    ],
    ctaTitle: "Need AI visuals for your brand?",
    ctaText: "Let's create your next AI photo and video project.",
    ctaButton: "Avvia progetto AI content",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "AI Content Creation Services",
    intro:
      "AI-generated images, AI video creation i creative AI marketing content za brendove kojima treba brza produkcija i premium vizuelni stil. Portfolio je odmah ispod.",
    whatIoffer: [
      "AI-generated images za kampanje, oglase i social media content creation",
      "AI video creation za kratke promo klipove, reels i prikaz proizvoda",
      "AI visuals for brands sa doslednim kreativnim pravcem",
      "Finalni fajlovi spremni za web, društvene mreže i ads kampanje",
    ],
    serviceCategoriesTitle: "AI showcase",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "AI-generated fotografije" },
      { id: "video-kreirani-sa-ai", h3: "AI video sadržaj" },
    ],
    selectedWorkTitle: "Portfolio napomena",
    selectedWorkIntro: "Dodatni AI case study primeri dostupni po industriji i cilju kampanje.",
    toolsTitle: "Workflow alati",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Use cases / proces",
    whyChoosePoints: [
      "Brand visuals za ponude, lansiranja i sezonske kampanje",
      "Promo video sadržaj za oglase, landing stranice i društvene mreže",
      "Brža social media produkcija uz jasan kreativni kontrolni proces",
    ],
    ctaTitle: "Need AI visuals for your brand?",
    ctaText: "Let's create your next AI photo and video project.",
    ctaButton: "Pokreni AI content projekat",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "AI Content Creation Services",
    intro:
      "AI-generated images, AI video creation dhe creative AI marketing content për brende që duan prodhim të shpejtë dhe pamje premium. Portfolio më poshtë.",
    whatIoffer: [
      "AI-generated images për fushata, ads dhe social media content creation",
      "AI video creation për promo të shkurtra, reels dhe prezantim produkti",
      "AI visuals for brands me drejtim kreativ të qëndrueshëm",
      "Skedarë finalë gati për web, rrjete sociale dhe ads",
    ],
    serviceCategoriesTitle: "AI showcase",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "Foto AI-generated" },
      { id: "video-kreirani-sa-ai", h3: "Përmbajtje video AI" },
    ],
    selectedWorkTitle: "Shënim portfolio",
    selectedWorkIntro: "Raste të tjera AI mund të ndahen sipas industrisë dhe objektivit.",
    toolsTitle: "Mjete workflow",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Use cases / proces",
    whyChoosePoints: [
      "Brand visuals për oferta, lansime dhe fushata sezonale",
      "Video promo për ads, landing pages dhe social media",
      "Prodhim më i shpejtë social me kontroll të qartë stilistik",
    ],
    ctaTitle: "Need AI visuals for your brand?",
    ctaText: "Let's create your next AI photo and video project.",
    ctaButton: "Nis projekt AI content",
  },
};

export default function DigitalMarketing() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = aiByLang[lang];

  const subsections = buildSubsections(lang, copy.subsectionTitles).map((sub) => {
    if (sub.id === "foto-kreirane-sa-ai") {
      return {
        ...sub,
        compactMediaOnly: true,
        workGallery: fotoKreiraneSaAiGalleryByLang[lang],
      };
    }
    if (sub.id === "video-kreirani-sa-ai") {
      return {
        ...sub,
        compactMediaOnly: true,
        workVideoGallery: videoKreiraniSaAiGalleryByLang[lang],
      };
    }
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
      showcaseFirst
      hideSelectedWorkSection
      hideToolsSection
    />
  );
}
