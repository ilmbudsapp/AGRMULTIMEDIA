import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildSubsections, getServiceTemplateLabels, toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

type VideoContent = {
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

const videoByLang: Record<ServiceLang, VideoContent> = {
  en: {
    eyebrow: "Service",
    h1: "Professional Video Editing Services",
    intro: "Structured editing services for brands that need clear business communication across social, web, and campaign channels.",
    whatIoffer: ["Campaign-ready editing flow", "Platform-specific output formats", "Brand-consistent video style", "Reliable revision and delivery structure"],
    serviceCategoriesTitle: "Service Categories",
    subsectionTitles: [
      { id: "promotional-video-editing", h3: "Promotional Video Editing for Brands" },
      { id: "social-media-video-editing", h3: "Social Media Video Editing for Businesses" },
      { id: "short-form-video-content", h3: "Short-Form Video Editing for Instagram and TikTok" },
      { id: "business-presentation-videos", h3: "Business Presentation Videos" },
      { id: "reels-tiktok-editing", h3: "Reels and TikTok Video Editing" },
    ],
    selectedWorkTitle: "Selected Work Placeholder",
    selectedWorkIntro: "Reserved for curated video projects in the next phase.",
    toolsTitle: "Tools / Software I Use",
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve", "Frame.io review workflow"],
    whyChooseTitle: "Why Choose This Service",
    whyChoosePoints: ["Business-first editing approach", "Fast format adaptation", "Consistent visual storytelling", "Clear process from draft to final cut"],
    ctaTitle: "Need cleaner, stronger business videos?",
    ctaText: "Share your footage or brief and I will map a practical editing structure.",
    ctaButton: "Request video editing consultation",
    localNote: "Suitable for businesses in Germany and multilingual teams targeting EU markets.",
  },
  de: {
    eyebrow: "Leistung",
    h1: "Professioneller Videoschnitt",
    intro: "Strukturierte Schnittleistungen für Marken, die klare Business-Kommunikation über soziale Netzwerke, Website und Kampagnen brauchen.",
    whatIoffer: ["Kampagnenfähiger Schnitt-Workflow", "Plattformgerechte Exportformate", "Markenkonsistenter Videostil", "Verlässlicher Feedback- und Lieferprozess"],
    serviceCategoriesTitle: "Service-Kategorien",
    subsectionTitles: [
      { id: "promotional-video-editing", h3: "Werbevideoschnitt für Marken" },
      { id: "social-media-video-editing", h3: "Social-Media-Videoschnitt für Unternehmen" },
      { id: "short-form-video-content", h3: "Kurzform-Videoschnitt für Instagram und TikTok" },
      { id: "business-presentation-videos", h3: "Präsentationsvideos fürs Business" },
      { id: "reels-tiktok-editing", h3: "Reels- und TikTok-Schnitt" },
    ],
    selectedWorkTitle: "Platzhalter für ausgewählte Arbeiten",
    selectedWorkIntro: "Reserviert für kuratierte Video-Projekte in der nächsten Phase.",
    toolsTitle: "Eingesetzte Tools und Software",
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve", "Frame.io"],
    whyChooseTitle: "Warum diese Leistung wählen",
    whyChoosePoints: ["Business-orientierter Editing-Ansatz", "Schnelle Format-Anpassung", "Konsistentes visuelles Storytelling", "Klare Prozesse bis zum finalen Schnitt"],
    ctaTitle: "Brauchen Sie klarere und stärkere Business-Videos?",
    ctaText: "Senden Sie Ihr Material oder Briefing und ich erstelle eine praktische Editing-Struktur.",
    ctaButton: "Video-Editing-Beratung anfragen",
    localNote: "Geeignet für Unternehmen in Deutschland und mehrsprachige Teams mit EU-Zielgruppe.",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Montaggio video professionale",
    intro: "Servizi di montaggio strutturati per brand che vogliono comunicazione aziendale chiara su social, web e campagne.",
    whatIoffer: ["Flusso di montaggio pronto per le campagne", "Formati di export adatti a ogni piattaforma", "Stile video coerente con il brand", "Processo di revisione e consegna affidabile"],
    serviceCategoriesTitle: "Categorie di servizio",
    subsectionTitles: [
      { id: "promotional-video-editing", h3: "Montaggio video promozionale per brand" },
      { id: "social-media-video-editing", h3: "Montaggio video per social media aziendali" },
      { id: "short-form-video-content", h3: "Montaggio in formato corto per Instagram e TikTok" },
      { id: "business-presentation-videos", h3: "Video di presentazione aziendale" },
      { id: "reels-tiktok-editing", h3: "Montaggio per Reels e TikTok" },
    ],
    selectedWorkTitle: "Esempi di lavori (in aggiornamento)",
    selectedWorkIntro: "Riservato a progetti video curati nella fase successiva.",
    toolsTitle: "Strumenti e software che utilizzo",
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve", "Frame.io"],
    whyChooseTitle: "Perché scegliere questo servizio",
    whyChoosePoints: ["Approccio editing orientato al business", "Adattamento rapido dei formati", "Storytelling visivo coerente", "Processo chiaro fino al cut finale"],
    ctaTitle: "Hai bisogno di video business più efficaci?",
    ctaText: "Inviami materiale o brief e preparo una struttura di editing pratica.",
    ctaButton: "Richiedi consulenza video editing",
    localNote: "Adatto a imprese in Germania e team multilingua attivi nei mercati UE.",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Profesionalni video montaža",
    intro: "Strukturisane usluge montaže za brendove kojima treba jasna poslovna komunikacija kroz društvene mreže, web i kampanje.",
    whatIoffer: ["Montažni tok spreman za kampanje", "Formati prilagođeni platformama", "Dosledan video stil brenda", "Pouzdan proces revizije i isporuke"],
    serviceCategoriesTitle: "Kategorije usluga",
    subsectionTitles: [
      { id: "promotional-video-editing", h3: "Promotivni video montaža za brendove" },
      { id: "social-media-video-editing", h3: "Video montaža za društvene mreže (biznis)" },
      { id: "short-form-video-content", h3: "Kratki format — Instagram i TikTok" },
      { id: "business-presentation-videos", h3: "Prezentacioni video za poslovanje" },
      { id: "reels-tiktok-editing", h3: "Montaža za Reels i TikTok" },
    ],
    selectedWorkTitle: "Primeri odabranih radova (uskoro)",
    selectedWorkIntro: "Rezervisano za kurirane video projekte u sledećoj fazi.",
    toolsTitle: "Alati / softver koji koristim",
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve", "Frame.io"],
    whyChooseTitle: "Zašto izabrati ovu uslugu",
    whyChoosePoints: ["Editing pristup fokusiran na biznis", "Brza adaptacija formata", "Dosledan vizuelni storytelling", "Jasan proces od drafta do finala"],
    ctaTitle: "Trebaju vam kvalitetniji poslovni video sadržaji?",
    ctaText: "Pošaljite materijal ili brief i pripremiću praktičnu editing strukturu.",
    ctaButton: "Zatraži video editing konsultacije",
    localNote: "Pogodno za biznise u Nemačkoj i višejezične timove usmerene na EU tržišta.",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Montim profesional video",
    intro: "Shërbime montimi të strukturuara për brende që duan komunikim të qartë biznesi në rrjete sociale, web dhe fushata.",
    whatIoffer: ["Rrjedhë montimi e gatshme për fushata", "Formate të përshtatura për platforma", "Stil video i njëtrajtshëm me brandin", "Proces i besueshëm për rishikim dhe dorëzim"],
    serviceCategoriesTitle: "Kategoritë e shërbimit",
    subsectionTitles: [
      { id: "promotional-video-editing", h3: "Montim video promocional për brende" },
      { id: "social-media-video-editing", h3: "Montim video për rrjete sociale (biznes)" },
      { id: "short-form-video-content", h3: "Format i shkurtër — Instagram dhe TikTok" },
      { id: "business-presentation-videos", h3: "Video prezantimi për biznes" },
      { id: "reels-tiktok-editing", h3: "Montim për Reels dhe TikTok" },
    ],
    selectedWorkTitle: "Shembuj punësh të zgjedhura (së shpejti)",
    selectedWorkIntro: "I rezervuar për projekte video të kuruara në fazën e ardhshme.",
    toolsTitle: "Mjetet dhe softuerët që përdor",
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve", "Frame.io"],
    whyChooseTitle: "Pse të zgjidhni këtë shërbim",
    whyChoosePoints: ["Qasje editing e orientuar te biznesi", "Përshtatje e shpejtë e formateve", "Storytelling vizual i qëndrueshëm", "Proces i qartë nga drafti te finalja"],
    ctaTitle: "Ju duhen video biznesi më të forta?",
    ctaText: "Dërgoni materialin ose brief-in dhe unë përgatis një strukturë praktike editing.",
    ctaButton: "Kërko konsultë video editing",
    localNote: "I përshtatshëm për biznese në Gjermani dhe ekipe shumëgjuhëshe në tregjet e BE-së.",
  },
};

export default function VideoProduction() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = videoByLang[lang];

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
