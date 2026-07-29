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
    h1: "KI-Inhaltserstellung für Marken",
    intro:
      "KI-generierte Bilder, KI-Video und kreative KI-Visuals für Marken, die schnell produzieren und einen hochwertigen Look brauchen. Das Portfolio direkt unten.",
    whatIoffer: [
      "KI-Bilder für Kampagnen, Anzeigen und Social-Media-Beiträge",
      "KI-Videos für kurze Promos, Reels und Produktgeschichten",
      "Kreative KI-Visuals mit einheitlicher Bildsprache",
      "Einsatzfertige Dateien für Website, soziale Netzwerke und bezahlte Kanäle",
    ],
    serviceCategoriesTitle: "KI-Showcase",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "KI-generierte Bilder" },
      { id: "video-kreirani-sa-ai", h3: "KI-generierte Videos" },
    ],
    selectedWorkTitle: "Portfolio-Hinweis",
    selectedWorkIntro: "Weitere KI-Beispiele nach Branche und Kampagnentyp auf Anfrage.",
    toolsTitle: "Werkzeuge im Ablauf",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Einsatzgebiete / Ablauf",
    whyChoosePoints: [
      "Markenvisuals für Angebote, Launches und saisonale Kampagnen",
      "Promo-Videos für Anzeigen, Landingpages und soziale Netzwerke",
      "Schnelle Content-Produktion mit klarer Stilführung",
    ],
    ctaTitle: "Brauchen Sie KI-Visuals für Ihre Marke?",
    ctaText: "Lassen Sie uns Ihr nächstes KI-Foto- und Video-Projekt umsetzen.",
    ctaButton: "KI-Content-Projekt starten",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Creazione di contenuti con intelligenza artificiale",
    intro:
      "Immagini generate con IA, video con IA e visual creativi per brand che vogliono produzione rapida e qualità elevata. Il portfolio è subito sotto.",
    whatIoffer: [
      "Immagini generate con IA per campagne, annunci e social",
      "Video con IA per promo brevi, reel e storytelling di prodotto",
      "Visual coerenti per brand con direzione creativa stabile",
      "File pronti all’uso per web, social e canali a pagamento",
    ],
    serviceCategoriesTitle: "Showcase IA",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "Immagini generate con IA" },
      { id: "video-kreirani-sa-ai", h3: "Contenuti video con IA" },
    ],
    selectedWorkTitle: "Nota sul portfolio",
    selectedWorkIntro: "Altri casi studio IA disponibili in base a settore e tipo di campagna.",
    toolsTitle: "Strumenti di lavoro",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Casi d’uso / processo",
    whyChoosePoints: [
      "Visual di brand per offerte, lanci e campagne stagionali",
      "Video promozionali per annunci, landing page e social",
      "Produzione creativa social rapida con controllo dello stile",
    ],
    ctaTitle: "Ti servono visual IA per il tuo brand?",
    ctaText: "Costruiamo insieme il prossimo progetto IA di foto e video.",
    ctaButton: "Avvia progetto contenuti IA",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Kreiranje AI sadržaja za brendove",
    intro:
      "AI generisane slike, AI video i kreativni vizuelni sadržaj za brendove kojima treba brza produkcija i premium izgled. Portfolio je odmah ispod.",
    whatIoffer: [
      "AI slike za kampanje, oglase i sadržaj na društvenim mrežama",
      "AI video za kratke promocije, reels i priču o proizvodu",
      "Kreativni vizueli sa doslednim kreativnim smerom",
      "Fajlovi spremni za upotrebu na webu, društvenim mrežama i plaćenim kanalima",
    ],
    serviceCategoriesTitle: "AI izložba radova",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "AI generisane fotografije" },
      { id: "video-kreirani-sa-ai", h3: "AI video sadržaj" },
    ],
    selectedWorkTitle: "Napomena o portfoliju",
    selectedWorkIntro: "Dodatni primeri AI projekata dostupni po industriji i vrsti kampanje.",
    toolsTitle: "Alati u radnom toku",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Primena / proces",
    whyChoosePoints: [
      "Vizuelni materijal brenda za ponude, lansiranja i sezonske kampanje",
      "Promo video za oglase, landing stranice i društvene mreže",
      "Brža produkcija sadržaja uz jasnu kontrolu stila",
    ],
    ctaTitle: "Trebaju vam AI vizueli za vaš brend?",
    ctaText: "Hajde da zajedno uradimo sledeći AI foto i video projekat.",
    ctaButton: "Pokreni AI sadržaj projekat",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Krijimi i përmbajtjes me inteligencë artificiale",
    intro:
      "Imazhe të gjeneruara me IA, video me IA dhe pamje kreative për brende që duan prodhim të shpejtë dhe cilësi të lartë. Portfolio më poshtë.",
    whatIoffer: [
      "Imazhe IA për fushata, reklama dhe përmbajtje në rrjete sociale",
      "Video IA për promo të shkurtra, reels dhe histori produkti",
      "Pamje kreative me drejtim të qëndrueshëm vizual",
      "Skedarë gati për përdorim në web, rrjete sociale dhe kanale me pagesë",
    ],
    serviceCategoriesTitle: "Showcase IA",
    subsectionTitles: [
      { id: "foto-kreirane-sa-ai", h3: "Foto të gjeneruara me IA" },
      { id: "video-kreirani-sa-ai", h3: "Përmbajtje video me IA" },
    ],
    selectedWorkTitle: "Shënim mbi portfolion",
    selectedWorkIntro: "Raste të tjera IA mund të ndahen sipas industrisë dhe objektivit.",
    toolsTitle: "Mjetet në punë",
    tools: ["Google Gemini", "Veo 3.1", "Adobe Photoshop + Premiere Pro"],
    whyChooseTitle: "Përdorimi / procesi",
    whyChoosePoints: [
      "Pamje brandi për oferta, lansime dhe fushata sezonale",
      "Video promo për reklama, faqe ulëse dhe rrjete sociale",
      "Prodhim më i shpejtë i përmbajtjes me kontroll të qartë të stilit",
    ],
    ctaTitle: "Ju duhen pamje IA për brendin tuaj?",
    ctaText: "Le të krijojmë së bashku projektin tjetër të fotos dhe videos me IA.",
    ctaButton: "Nis projekt përmbajtjeje me IA",
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
