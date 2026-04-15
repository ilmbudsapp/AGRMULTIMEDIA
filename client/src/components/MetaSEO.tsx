import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";

function setMetaContent(metaId: string, value: string) {
  const el = document.getElementById(metaId) as HTMLMetaElement | null;
  if (el) el.setAttribute("content", value);
}

function setLinkHref(linkId: string, value: string) {
  const el = document.getElementById(linkId) as HTMLLinkElement | null;
  if (el) el.setAttribute("href", value);
}

type RouteSeo = { title: string; description: string; keywords: string };
type Lang = "de" | "en" | "it" | "sr" | "al";

const ROUTE_SEO_BY_LANG: Record<Lang, Record<string, RouteSeo>> = {
  en: {
    "/services": {
      title: "Services for Small Businesses | AGR Multimedia",
      description:
        "Explore five focused services: graphic design, video editing, AI content creation, web design + SEO, and custom application design.",
      keywords:
        "small business services, graphic design services, video editing services, ai content creation, web design and seo, custom application design",
    },
    "/graphic-design": {
      title: "Graphic Design Services for Small Businesses | AGR Multimedia",
      description:
        "Logo design, branding systems, and marketing visuals that help small businesses look clear and professional.",
      keywords:
        "graphic design services for small businesses, logo design, branding services, business marketing visuals",
    },
    "/video-production": {
      title: "Professional Video Editing Services | AGR Multimedia",
      description:
        "Professional video editing for social media, ad campaigns, websites, and business communication.",
      keywords:
        "professional video editing services, social media video editing, ad video editing, business video editing",
    },
    "/ai-content-creation": {
      title: "AI Content Creation for Business Marketing | AGR Multimedia",
      description:
        "AI images, AI product visuals, and AI video creation using practical workflows, including Veo 3.1-based content.",
      keywords:
        "ai content creation for business marketing, ai images, ai product visuals, ai marketing visuals, ai video creation veo 3.1",
    },
    "/digital-marketing": {
      title: "AI Content Creation for Business Marketing | AGR Multimedia",
      description:
        "AI images, AI product visuals, and AI video creation using practical workflows, including Veo 3.1-based content.",
      keywords:
        "ai content creation for business marketing, ai images, ai product visuals, ai marketing visuals, ai video creation veo 3.1",
    },
    "/web-design": {
      title: "Web Design and SEO for Small Businesses | AGR Multimedia",
      description:
        "Mobile-friendly websites with on-page SEO, website structure optimization, and fast loading setup.",
      keywords:
        "web design and seo for small businesses, on-page seo, website structure optimization, mobile-friendly web design, fast loading website",
    },
    "/application-design-development": {
      title: "Custom Application Design for Businesses | AGR Multimedia",
      description:
        "Custom app concepts, prototype interfaces, and useful digital tools for practical business workflows.",
      keywords:
        "custom application design for businesses, app concepts, prototype interfaces, simple custom applications, business tools",
    },
  },
  de: {
    "/services": {
      title: "Leistungen für kleine Unternehmen | AGR Multimedia",
      description:
        "Fünf klare Leistungsbereiche: Grafikdesign, Videoschnitt, KI-Content, Webdesign + SEO und individuelle App-Konzepte.",
      keywords:
        "leistungen für kleine unternehmen, grafikdesign dienstleistungen, videoschnitt, ki content erstellung, webdesign seo, app design",
    },
    "/graphic-design": {
      title: "Grafikdesign für kleine Unternehmen | AGR Multimedia",
      description:
        "Logo-Design, Branding-Systeme und Marketing-Visuals für einen professionellen und klaren Markenauftritt.",
      keywords:
        "grafikdesign für kleine unternehmen, logo design, branding agentur, marketing visuals",
    },
    "/video-production": {
      title: "Professionelle Videoschnitt Dienstleistungen | AGR Multimedia",
      description:
        "Videoschnitt für Social Media, Werbeanzeigen, Websites und professionelle Unternehmenskommunikation.",
      keywords:
        "professioneller videoschnitt, video editing dienstleistung, social media videoschnitt, werbevideo schnitt",
    },
    "/ai-content-creation": {
      title: "KI Content Creation für Business Marketing | AGR Multimedia",
      description:
        "KI-Bilder, KI-Produktvisuals und KI-Videoerstellung mit praxisnahen Workflows, inklusive Veo 3.1.",
      keywords:
        "ki content creation marketing, ki bilder, ki produktvisuals, ki videoerstellung veo 3.1",
    },
    "/digital-marketing": {
      title: "KI Content Creation für Business Marketing | AGR Multimedia",
      description:
        "KI-Bilder, KI-Produktvisuals und KI-Videoerstellung mit praxisnahen Workflows, inklusive Veo 3.1.",
      keywords:
        "ki content creation marketing, ki bilder, ki produktvisuals, ki videoerstellung veo 3.1",
    },
    "/web-design": {
      title: "Webdesign und SEO für kleine Unternehmen | AGR Multimedia",
      description:
        "Mobile-freundliche Websites mit On-Page SEO, strukturierter Seitenarchitektur und schneller Ladezeit.",
      keywords:
        "webdesign und seo für kleine unternehmen, on-page seo, website struktur optimierung, mobile freundliches webdesign",
    },
    "/application-design-development": {
      title: "Individuelles App-Design für Unternehmen | AGR Multimedia",
      description:
        "App-Konzepte, Prototypen und praktische digitale Tools für klare Unternehmensprozesse.",
      keywords:
        "app design für unternehmen, app konzept, prototyp interfaces, individuelle business tools",
    },
  },
  it: {
    "/services": {
      title: "Servizi per Piccole Imprese | AGR Multimedia",
      description:
        "Cinque aree chiare: graphic design, video editing, contenuti AI, web design + SEO e design applicazioni custom.",
      keywords:
        "servizi per piccole imprese, graphic design, video editing, contenuti ai, web design seo, applicazioni custom",
    },
    "/graphic-design": {
      title: "Graphic Design Services for Small Businesses | AGR Multimedia",
      description:
        "Logo, branding e visual marketing per una comunicazione aziendale chiara e professionale.",
      keywords:
        "graphic design per piccole imprese, logo design, branding aziendale, visual marketing",
    },
    "/video-production": {
      title: "Professional Video Editing Services | AGR Multimedia",
      description:
        "Montaggio video professionale per social media, campagne ads, siti web e comunicazione business.",
      keywords:
        "video editing professionale, montaggio video social, video ads business, servizi video",
    },
    "/ai-content-creation": {
      title: "AI Content Creation for Business Marketing | AGR Multimedia",
      description:
        "Immagini AI, visual prodotto AI e creazione video AI con workflow pratici, incluso Veo 3.1.",
      keywords:
        "ai content creation marketing, immagini ai, visual prodotto ai, creazione video ai veo 3.1",
    },
    "/digital-marketing": {
      title: "AI Content Creation for Business Marketing | AGR Multimedia",
      description:
        "Immagini AI, visual prodotto AI e creazione video AI con workflow pratici, incluso Veo 3.1.",
      keywords:
        "ai content creation marketing, immagini ai, visual prodotto ai, creazione video ai veo 3.1",
    },
    "/web-design": {
      title: "Web Design and SEO for Small Businesses | AGR Multimedia",
      description:
        "Siti web mobile-friendly con SEO on-page, struttura ottimizzata e caricamento veloce.",
      keywords:
        "web design e seo per piccole imprese, seo on-page, ottimizzazione struttura sito, sito mobile-friendly",
    },
    "/application-design-development": {
      title: "Custom Application Design for Businesses | AGR Multimedia",
      description:
        "Concetti app, interfacce prototipo e strumenti digitali utili per flussi aziendali concreti.",
      keywords:
        "design applicazioni custom business, concetti app, interfacce prototipo, strumenti digitali aziendali",
    },
  },
  sr: {
    "/services": {
      title: "Usluge za mala preduzeća | AGR Multimedia",
      description:
        "Pet jasnih oblasti: grafički dizajn, video editing, AI content creation, web dizajn + SEO i razvoj aplikacija.",
      keywords:
        "usluge za mala preduzeca, graficki dizajn usluge, video editing usluge, ai content creation, web dizajn seo, razvoj aplikacija",
    },
    "/graphic-design": {
      title: "Graphic Design Services for Small Businesses | AGR Multimedia",
      description:
        "Logo dizajn, brending sistem i marketinški vizuali za profesionalan i dosledan nastup biznisa.",
      keywords:
        "graficki dizajn za mala preduzeca, logo dizajn, brending, marketinski vizuali",
    },
    "/video-production": {
      title: "Professional Video Editing Services | AGR Multimedia",
      description:
        "Profesionalna video montaža za društvene mreže, oglase, web sajtove i poslovnu komunikaciju.",
      keywords:
        "profesionalna video montaza, video editing usluge, montaza za drustvene mreze, poslovni video",
    },
    "/ai-content-creation": {
      title: "AI Content Creation for Business Marketing | AGR Multimedia",
      description:
        "AI slike, AI product vizuali i AI video kreacija kroz praktičan workflow, uključujući Veo 3.1.",
      keywords:
        "ai content creation za marketing, ai slike, ai product visuals, ai video creation veo 3.1",
    },
    "/digital-marketing": {
      title: "AI Content Creation for Business Marketing | AGR Multimedia",
      description:
        "AI slike, AI product vizuali i AI video kreacija kroz praktičan workflow, uključujući Veo 3.1.",
      keywords:
        "ai content creation za marketing, ai slike, ai product visuals, ai video creation veo 3.1",
    },
    "/web-design": {
      title: "Web Design and SEO for Small Businesses | AGR Multimedia",
      description:
        "Mobile-friendly sajtovi sa on-page SEO optimizacijom, boljom strukturom i brzim učitavanjem.",
      keywords:
        "web dizajn i seo za mala preduzeca, on-page seo, optimizacija strukture sajta, mobile-friendly dizajn",
    },
    "/application-design-development": {
      title: "Custom Application Design for Businesses | AGR Multimedia",
      description:
        "App koncepti, prototip interfejsi i korisni digitalni alati za realne potrebe kompanija.",
      keywords:
        "custom application design za biznis, app koncepti, prototip interfejs, digitalni alati za firme",
    },
  },
  al: {
    "/services": {
      title: "Shërbime për Biznese të Vogla | AGR Multimedia",
      description:
        "Pesë fusha të qarta: graphic design, video editing, AI content creation, web design + SEO dhe application design.",
      keywords:
        "sherbime per biznese te vogla, graphic design services, video editing services, ai content creation, web design seo",
    },
    "/graphic-design": {
      title: "Graphic Design Services for Small Businesses | AGR Multimedia",
      description:
        "Logo, branding dhe vizuale marketingu për një prezencë profesionale dhe të qartë biznesi.",
      keywords:
        "graphic design per biznese te vogla, logo design, branding, vizuale marketingu",
    },
    "/video-production": {
      title: "Professional Video Editing Services | AGR Multimedia",
      description:
        "Montazh profesional video për rrjete sociale, reklama, faqe web dhe komunikim biznesi.",
      keywords:
        "video editing profesional, montazh video rrjete sociale, video reklamuese biznesi",
    },
    "/ai-content-creation": {
      title: "AI Content Creation for Business Marketing | AGR Multimedia",
      description:
        "Imazhe AI, visuale produkti AI dhe krijim video AI me workflow praktik, përfshirë Veo 3.1.",
      keywords:
        "ai content creation per marketing biznesi, imazhe ai, ai product visuals, ai video creation veo 3.1",
    },
    "/digital-marketing": {
      title: "AI Content Creation for Business Marketing | AGR Multimedia",
      description:
        "Imazhe AI, visuale produkti AI dhe krijim video AI me workflow praktik, përfshirë Veo 3.1.",
      keywords:
        "ai content creation per marketing biznesi, imazhe ai, ai product visuals, ai video creation veo 3.1",
    },
    "/web-design": {
      title: "Web Design and SEO for Small Businesses | AGR Multimedia",
      description:
        "Faqe web mobile-friendly me SEO on-page, strukturë të optimizuar dhe shpejtësi të mirë ngarkimi.",
      keywords:
        "web design dhe seo per biznese te vogla, seo on-page, optimizim strukture faqeje, mobile-friendly design",
    },
    "/application-design-development": {
      title: "Custom Application Design for Businesses | AGR Multimedia",
      description:
        "Koncepte aplikacionesh, prototipe interfacesh dhe mjete dixhitale të dobishme për kompani.",
      keywords:
        "custom application design per biznese, app concepts, prototype interfaces, mjete dixhitale per kompani",
    },
  },
};

export default function MetaSEO() {
  const { currentLanguage, tSpec, t } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    // Runs on client after language changes so meta tags match the active language.
    let title = tSpec.seo.title;
    let description = tSpec.seo.description;
    let keywords = tSpec.seo.keywords;

    const path = typeof location === "string" ? location : window.location.pathname;
    const lang = (["de", "en", "it", "sr", "al"].includes(currentLanguage) ? currentLanguage : "en") as Lang;
    const routeSeo = ROUTE_SEO_BY_LANG[lang][path];
    if (routeSeo) {
      title = routeSeo.title;
      description = routeSeo.description;
      keywords = routeSeo.keywords;
    } else if (path === "/blog/food-truck-web-500" || path.endsWith("/blog/food-truck-web-500")) {
      title = t.blog.posts.foodTruck.title;
      description = t.blog.posts.foodTruck.description;
      const keywordsByLang: Record<string, string> = {
        sr: "web dizajn Geislingen, web dizajn, food truck web, digital marketing",
        en: "web design Geislingen, web design, food truck website, digital marketing",
        de: "Webdesign Geislingen, Webdesign, Food-Truck Website, digitales Marketing",
        it: "web design Geislingen, web design, sito web food truck, digital marketing",
        al: "dizajn web Geislingen, dizajn web, faqe web food truck, marketing digjital",
      };
      keywords = keywordsByLang[currentLanguage] ?? keywordsByLang.sr;
    }

    document.title = title;
    setMetaContent("meta-description", description);
    setMetaContent("meta-keywords", keywords);

    setMetaContent("og-title", title);
    setMetaContent("og-description", description);

    setMetaContent("twitter-title", title);
    setMetaContent("twitter-description", description);

    const canonical = `https://agrmultimedia.eu${path || "/"}`;
    setLinkHref("canonical-url", canonical);
    setMetaContent("og-url", canonical);
    setMetaContent("twitter-url", canonical);
    document.documentElement.lang = lang;
  }, [currentLanguage, location, tSpec.seo.title, tSpec.seo.description, tSpec.seo.keywords, t.blog.posts.foodTruck.title, t.blog.posts.foodTruck.description]);

  return null;
}

