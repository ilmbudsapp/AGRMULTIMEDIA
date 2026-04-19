/** Per-route title / meta description / keywords for SPA routes (multilingual). */
export type RouteSeo = { title: string; description: string; keywords: string };
export type SeoLang = "de" | "en" | "it" | "sr" | "al";

function merge(...objs: Record<string, RouteSeo>[]): Record<string, RouteSeo> {
  return Object.assign({}, ...objs);
}

/* ─── Core service routes (shared structure) ─── */
const CORE_EN: Record<string, RouteSeo> = {
  "/services": {
    title: "Services for Small Businesses | AGR Multimedia Geislingen",
    description:
      "Graphic design, AI multimedia content, web design + SEO, and application design — clear packages for teams near Geislingen and remote clients.",
    keywords:
      "web design, AI multimedia, digital marketing, Geislingen, graphic design, small business services, SEO",
  },
  "/graphic-design": {
    title: "Graphic Design & Branding | AGR Multimedia Geislingen",
    description:
      "Logo design, branding systems, and marketing visuals that help small businesses look professional online and in print.",
    keywords:
      "graphic design Geislingen, branding, logo design, marketing visuals, AI multimedia, print design",
  },
  "/ai-content-creation": {
    title: "AI Content Creation & Multimedia | AGR Multimedia",
    description:
      "AI images, product visuals, and AI video workflows including Veo 3.1 — practical AI multimedia for marketing teams.",
    keywords:
      "AI multimedia, AI content creation, AI video, Veo 3.1, product visuals, digital marketing",
  },
  "/digital-marketing": {
    title: "Digital Marketing & AI Multimedia | AGR Multimedia Geislingen",
    description:
      "Digital marketing strategy, campaigns, and AI multimedia production — studio near Geislingen, clients across Europe.",
    keywords:
      "digital marketing, AI multimedia, online marketing, Geislingen, content strategy, SEO, web design",
  },
  "/web-design": {
    title: "Web Design & SEO for Business | AGR Multimedia Geislingen",
    description:
      "Mobile-friendly web design with on-page SEO, IA, and performance tuning — websites that rank and convert.",
    keywords:
      "web design Geislingen, SEO, on-page SEO, responsive web design, digital marketing, Core Web Vitals",
  },
  "/application-design-development": {
    title: "Application Design & Prototypes | AGR Multimedia",
    description:
      "Custom app concepts, UI prototypes, and lightweight tools for real business workflows.",
    keywords:
      "application design, UI prototype, custom app, digital tools, AI multimedia workflow",
  },
};

const CORE_DE: Record<string, RouteSeo> = {
  "/services": {
    title: "Leistungen für kleine Unternehmen | AGR Multimedia Geislingen",
    description:
      "Grafikdesign, KI-Multimedia, Webdesign + SEO und App-Konzepte — klar strukturiert für Teams in der Region Geislingen.",
    keywords:
      "Webdesign Geislingen, KI Multimedia, digitales Marketing, Grafikdesign, SEO, Kleinunternehmen",
  },
  "/graphic-design": {
    title: "Grafikdesign & Branding | AGR Multimedia Geislingen",
    description:
      "Logo-Design, Branding-Systeme und Marketing-Visuals für einen professionellen Auftritt online und im Print.",
    keywords:
      "Grafikdesign Geislingen, Branding, Logo-Design, Marketing Visuals, KI Multimedia",
  },
  "/ai-content-creation": {
    title: "KI Content Creation & Multimedia | AGR Multimedia",
    description:
      "KI-Bilder, Produktvisuals und KI-Video-Workflows inkl. Veo 3.1 — praxisnahe KI-Multimedia für Marketing.",
    keywords:
      "KI Multimedia, KI Content Creation, KI Video, Veo 3.1, digitales Marketing",
  },
  "/digital-marketing": {
    title: "Digital Marketing & KI Multimedia | AGR Multimedia Geislingen",
    description:
      "Digitales Marketing, Kampagnen und KI-Multimedia — Studio nahe Geislingen, Kunden in Europa und remote.",
    keywords:
      "Digital Marketing, KI Multimedia, Online-Marketing Geislingen, Marketingstrategie, SEO, Webdesign",
  },
  "/web-design": {
    title: "Webdesign & SEO für Unternehmen | AGR Multimedia Geislingen",
    description:
      "Mobile-freundliches Webdesign mit On-Page-SEO, Struktur und Performance — Websites die konvertieren.",
    keywords:
      "Webdesign Geislingen, SEO, On-Page SEO, responsives Webdesign, digitales Marketing",
  },
  "/application-design-development": {
    title: "App-Design & Prototypen | AGR Multimedia",
    description:
      "App-Konzepte, UI-Prototypen und digitale Tools für echte Geschäftsprozesse.",
    keywords:
      "App Design, UI Prototyp, Custom App, digitale Tools, KI Workflow",
  },
};

const CORE_IT: Record<string, RouteSeo> = {
  "/services": {
    title: "Servizi per piccole imprese | AGR Multimedia Geislingen",
    description:
      "Graphic design, contenuti AI multimedia, web design + SEO e app — pacchetti chiari per team vicino a Geislingen e clienti remoti.",
    keywords:
      "web design, AI multimedia, digital marketing, Geislingen, graphic design, SEO, piccole imprese",
  },
  "/graphic-design": {
    title: "Graphic design e branding | AGR Multimedia Geislingen",
    description:
      "Logo, identità visiva e materiali marketing per comunicazione professionale online e offline.",
    keywords:
      "graphic design Geislingen, branding, logo design, visual marketing, AI multimedia",
  },
  "/ai-content-creation": {
    title: "AI content creation e multimedia | AGR Multimedia",
    description:
      "Immagini AI, visual prodotto e video AI con workflow pratici, incluso Veo 3.1.",
    keywords:
      "AI multimedia, contenuti AI, video AI, Veo 3.1, digital marketing",
  },
  "/digital-marketing": {
    title: "Digital marketing e AI multimedia | AGR Multimedia Geislingen",
    description:
      "Strategia di digital marketing, campagne e produzione multimediale AI — studio vicino a Geislingen.",
    keywords:
      "digital marketing, AI multimedia, campagne online, Geislingen, SEO, web design",
  },
  "/web-design": {
    title: "Web design e SEO | AGR Multimedia Geislingen",
    description:
      "Siti responsive con SEO on-page, architettura informazione e performance.",
    keywords:
      "web design Geislingen, SEO on-page, sito mobile-friendly, digital marketing",
  },
  "/application-design-development": {
    title: "Design applicazioni e prototipi | AGR Multimedia",
    description:
      "Concetti app, interfacce prototipo e tool digitali per processi aziendali.",
    keywords:
      "application design, prototipo UI, app custom, strumenti digitali",
  },
};

const CORE_SR: Record<string, RouteSeo> = {
  "/services": {
    title: "Usluge za mala preduzeća | AGR Multimedia Geislingen",
    description:
      "Grafički dizajn, AI multimedija, web dizajn + SEO i aplikacije — jasni paketi za klijente u Geislingen regionu i dalje.",
    keywords:
      "web dizajn, AI multimedija, digitalni marketing, Geislingen, grafički dizajn, SEO",
  },
  "/graphic-design": {
    title: "Grafički dizajn i brending | AGR Multimedia Geislingen",
    description:
      "Logo, brending sistem i marketinški vizuali za profesionalan nastup na mreži i u štampi.",
    keywords:
      "grafički dizajn Geislingen, brending, logo dizajn, marketinški vizuali, AI multimedija",
  },
  "/ai-content-creation": {
    title: "AI content creation i multimedija | AGR Multimedia",
    description:
      "AI slike, product vizuali i AI video workflow, uključujući Veo 3.1 — praktična AI multimedija za marketing.",
    keywords:
      "AI multimedija, AI content creation, AI video, Veo 3.1, digitalni marketing",
  },
  "/digital-marketing": {
    title: "Digitalni marketing i AI multimedija | AGR Multimedia Geislingen",
    description:
      "Digitalna strategija, kampanje i AI multimedijalna produkcija — studio blizu Geislingena, klijenti širom Evrope.",
    keywords:
      "digitalni marketing, AI multimedija, online kampanje, Geislingen, SEO, web dizajn",
  },
  "/web-design": {
    title: "Web dizajn i SEO | AGR Multimedia Geislingen",
    description:
      "Mobile-friendly sajtovi sa on-page SEO, strukturom i performansama — sajtovi koji konvertuju.",
    keywords:
      "web dizajn Geislingen, SEO, on-page SEO, responsive dizajn, digitalni marketing",
  },
  "/application-design-development": {
    title: "Dizajn aplikacija i prototipovi | AGR Multimedia",
    description:
      "App koncepti, UI prototipi i digitalni alati za stvarne poslovne procese.",
    keywords:
      "application design, UI prototip, custom app, digitalni alati",
  },
};

const CORE_AL: Record<string, RouteSeo> = {
  "/services": {
    title: "Shërbime për biznese të vogla | AGR Multimedia Geislingen",
    description:
      "Graphic design, përmbajtje AI multimedia, web design + SEO dhe aplikacione — paketa të qarta për klientë pranë Geislingen dhe remote.",
    keywords:
      "web design, AI multimedia, marketing digjital, Geislingen, graphic design, SEO",
  },
  "/graphic-design": {
    title: "Graphic design dhe branding | AGR Multimedia Geislingen",
    description:
      "Logo, identitet vizual dhe materiale marketingu për prezencë profesionale online dhe në print.",
    keywords:
      "graphic design Geislingen, branding, logo design, marketing vizual, AI multimedia",
  },
  "/ai-content-creation": {
    title: "AI content creation dhe multimedia | AGR Multimedia",
    description:
      "Imazhe AI, visuale produkti dhe video AI me workflow praktik, përfshirë Veo 3.1.",
    keywords:
      "AI multimedia, përmbajtje AI, video AI, Veo 3.1, marketing digjital",
  },
  "/digital-marketing": {
    title: "Marketing digjital dhe AI multimedia | AGR Multimedia Geislingen",
    description:
      "Strategji marketingu digjital, fushata dhe prodhim multimediale AI — studio afër Geislingen.",
    keywords:
      "marketing digjital, AI multimedia, fushata online, Geislingen, SEO, web design",
  },
  "/web-design": {
    title: "Web design dhe SEO | AGR Multimedia Geislingen",
    description:
      "Faqe mobile-friendly me SEO on-page, strukturë dhe performancë të mirë.",
    keywords:
      "web design Geislingen, SEO, on-page SEO, dizajn responsive, marketing digjital",
  },
  "/application-design-development": {
    title: "Dizajn aplikacionesh dhe prototipe | AGR Multimedia",
    description:
      "Koncepte aplikacionesh, prototipe UI dhe mjete dixhitale për procese biznesi.",
    keywords:
      "application design, prototip UI, app custom, mjete dixhitale",
  },
};

/* ─── Extra pages (legal, blog, portfolio, etc.) ─── */
const EXTRA_EN: Record<string, RouteSeo> = {
  "/about": {
    title: "About AGR Multimedia | Web Design & AI Studio Geislingen",
    description:
      "Freelance web design, graphic design, and AI multimedia — Agron Osmani, based in Geislingen an der Steige, Germany.",
    keywords: "AGR Multimedia, Geislingen, web design, AI multimedia, digital marketing, freelance designer",
  },
  "/contact": {
    title: "Contact & Project Quotes | AGR Multimedia Geislingen",
    description:
      "Request a quote for web design, AI multimedia, or digital marketing — fast replies in DE · EN · IT · SR · AL.",
    keywords: "contact AGR Multimedia, Geislingen, web design quote, AI multimedia, digital marketing",
  },
  "/portfolio": {
    title: "Web Design & Creative Portfolio | AGR Multimedia",
    description:
      "Selected web design, branding, video, and AI multimedia projects — explore case studies and results.",
    keywords: "web design portfolio, Geislingen, branding case study, AI multimedia, digital marketing projects",
  },
  "/blog": {
    title: "Digital Marketing & Web Design Blog | AGR Multimedia",
    description:
      "Articles on digital marketing, web design, SEO, and AI multimedia trends for small businesses.",
    keywords: "digital marketing blog, web design tips, SEO, AI multimedia, Geislingen",
  },
  "/photography": {
    title: "Photography & Photomontage | AGR Multimedia Geislingen",
    description:
      "Creative photography, restoration, photomontage, and cinematic posters — professional visuals for brands.",
    keywords: "photography Geislingen, photomontage, movie poster design, digital marketing visuals",
  },
  "/consulting": {
    title: "Digital Strategy Consulting | AGR Multimedia",
    description:
      "UX audits, analytics, and digital strategy consulting to grow your marketing and web presence.",
    keywords: "digital consulting, UX audit, digital marketing strategy, web design consulting, Geislingen",
  },
  "/video-production": {
    title: "Professional Video Editing | Premiere Pro & After Effects | AGR Multimedia",
    description:
      "Video editing for brands and campaigns — Adobe Premiere Pro, After Effects, and structured delivery for social, web, and ads.",
    keywords:
      "video editing, Adobe Premiere Pro, After Effects, Geislingen, corporate video, social video, video post-production",
  },
  "/impresum": {
    title: "Impressum / Legal Notice | AGR Multimedia",
    description: "Legal disclosure and business details for AGR Multimedia in Germany.",
    keywords: "impressum, AGR Multimedia, Geislingen, legal notice",
  },
  "/privacy": {
    title: "Privacy Policy | AGR Multimedia",
    description: "How AGR Multimedia collects, uses, and protects your personal data.",
    keywords: "privacy policy, GDPR, AGR Multimedia, data protection",
  },
  "/terms": {
    title: "Terms of Service | AGR Multimedia",
    description: "Terms and conditions for using AGR Multimedia websites and services.",
    keywords: "terms of service, AGR Multimedia, legal",
  },
  "/cookies": {
    title: "Cookie Policy | AGR Multimedia",
    description: "Information about cookies and tracking technologies on agrmultimedia.eu.",
    keywords: "cookie policy, GDPR cookies, AGR Multimedia",
  },
  "/blog/digital-marketing-trends-2024": {
    title: "Digital Marketing Trends 2024 | AGR Multimedia Blog",
    description:
      "Key digital marketing and AI multimedia trends shaping small business growth this year.",
    keywords: "digital marketing trends, AI multimedia, web design, SEO, Geislingen",
  },
  "/blog/website-conversion-optimization": {
    title: "Website Conversion Optimization | AGR Multimedia Blog",
    description:
      "Improve conversions with UX, copy, and web design focused on measurable results.",
    keywords: "conversion optimization, web design, digital marketing, CRO, SEO",
  },
  "/blog/video-marketing-power": {
    title: "Video Marketing & AI Multimedia | AGR Multimedia Blog",
    description:
      "Why video belongs in your digital marketing mix — engagement, storytelling, and distribution.",
    keywords: "video marketing, AI multimedia, digital marketing, social video, Geislingen",
  },
  "/blog/food-truck-web-500": {
    title: "Food Truck Web Design Case Study | AGR Multimedia Geislingen",
    description:
      "Web design and digital marketing lessons from a high-performing food truck website project.",
    keywords: "web design Geislingen, food truck website, digital marketing, small business web design",
  },
  "/portfolio/ecommerce-site": {
    title: "E‑commerce Web Design Case Study | AGR Multimedia",
    description: "Online store UX, web design, and performance for a complete shopping experience.",
    keywords: "ecommerce web design, online shop, digital marketing, UX, Geislingen",
  },
  "/portfolio/restaurant-website": {
    title: "Restaurant Web Design Case Study | AGR Multimedia",
    description: "Hospitality-focused web design with menus, reservations, and brand storytelling.",
    keywords: "restaurant web design, hospitality website, digital marketing, Geislingen",
  },
  "/portfolio/brand-identity": {
    title: "Brand Identity Design Case Study | AGR Multimedia",
    description: "Logo systems, brand guidelines, and marketing collateral for cohesive identity.",
    keywords: "brand identity, graphic design, branding Geislingen, AI multimedia",
  },
  "/portfolio/corporate-video": {
    title: "Corporate Video Production Case Study | AGR Multimedia",
    description: "Corporate and promotional video — scripting, motion, and AI multimedia workflows.",
    keywords: "corporate video, video production, digital marketing, AI multimedia",
  },
  "/portfolio/product-photography": {
    title: "Product Photography Case Study | AGR Multimedia",
    description: "Studio and lifestyle product photography for ecommerce and campaigns.",
    keywords: "product photography, ecommerce photos, digital marketing, Geislingen",
  },
  "/portfolio/packaging-design": {
    title: "Packaging Design Case Study | AGR Multimedia",
    description: "Structural and graphic packaging design for retail and online brands.",
    keywords: "packaging design, graphic design, brand packaging, Geislingen",
  },
};

const EXTRA_DE: Record<string, RouteSeo> = {
  "/about": {
    title: "Über AGR Multimedia | Webdesign & KI Studio Geislingen",
    description:
      "Freiberufliches Webdesign, Grafikdesign und KI-Multimedia — Agron Osmani, Standort Geislingen an der Steige.",
    keywords: "AGR Multimedia, Geislingen, Webdesign, KI Multimedia, digitales Marketing",
  },
  "/contact": {
    title: "Kontakt & Angebote | AGR Multimedia Geislingen",
    description:
      "Anfrage für Webdesign, KI-Multimedia oder Marketing — schnelle Antworten auf DE · EN · IT · SR · AL.",
    keywords: "Kontakt AGR Multimedia, Geislingen, Webdesign Angebot, KI Multimedia",
  },
  "/portfolio": {
    title: "Portfolio Webdesign & Kreativ | AGR Multimedia",
    description:
      "Ausgewählte Projekte: Webdesign, Branding, Video und KI-Multimedia.",
    keywords: "Webdesign Portfolio, Geislingen, Branding, KI Multimedia, Fallstudien",
  },
  "/blog": {
    title: "Blog: Digitales Marketing & Webdesign | AGR Multimedia",
    description:
      "Artikel zu digitalem Marketing, Webdesign, SEO und KI-Multimedia für kleine Unternehmen.",
    keywords: "Digital Marketing Blog, Webdesign Tipps, SEO, KI Multimedia, Geislingen",
  },
  "/photography": {
    title: "Fotografie & Fotomontage | AGR Multimedia Geislingen",
    description:
      "Kreative Fotografie, Restaurierung, Fotomontage und Filmplakate — professionelle Visuals.",
    keywords: "Fotografie Geislingen, Fotomontage, Plakatdesign, digitales Marketing",
  },
  "/consulting": {
    title: "Digitalberatung & Strategie | AGR Multimedia",
    description:
      "UX-Audits, Analytics und Strategie für Wachstum im Web und Marketing.",
    keywords: "Digital Consulting, UX Audit, Marketingstrategie, Webdesign Beratung, Geislingen",
  },
  "/video-production": {
    title: "Professioneller Videoschnitt | Premiere Pro & After Effects | AGR Multimedia",
    description:
      "Videobearbeitung für Marken und Kampagnen — Adobe Premiere Pro, After Effects und strukturierte Auslieferung.",
    keywords:
      "Videoschnitt, Adobe Premiere Pro, After Effects, Geislingen, Unternehmensvideo, Social Video",
  },
  "/impresum": {
    title: "Impressum | AGR Multimedia",
    description: "Gesetzliche Angaben und Kontaktdaten von AGR Multimedia in Deutschland.",
    keywords: "Impressum, AGR Multimedia, Geislingen",
  },
  "/privacy": {
    title: "Datenschutz | AGR Multimedia",
    description: "Informationen zur Verarbeitung personenbezogener Daten bei AGR Multimedia.",
    keywords: "Datenschutz, DSGVO, AGR Multimedia",
  },
  "/terms": {
    title: "AGB | AGR Multimedia",
    description: "Allgemeine Geschäftsbedingungen für die Nutzung der Website und Leistungen.",
    keywords: "AGB, AGR Multimedia, Rechtliches",
  },
  "/cookies": {
    title: "Cookie-Richtlinie | AGR Multimedia",
    description: "Informationen zu Cookies und Tracking auf agrmultimedia.eu.",
    keywords: "Cookies, DSGVO, AGR Multimedia",
  },
  "/blog/digital-marketing-trends-2024": {
    title: "Digital-Marketing-Trends 2024 | AGR Multimedia Blog",
    description: "Trends in digitalem Marketing und KI-Multimedia für kleine Unternehmen.",
    keywords: "Digital Marketing, KI Multimedia, Webdesign, SEO, Geislingen",
  },
  "/blog/website-conversion-optimization": {
    title: "Website-Conversion optimieren | AGR Multimedia Blog",
    description: "Mehr Conversions durch UX, Text und Webdesign mit messbaren Ergebnissen.",
    keywords: "Conversion Optimierung, Webdesign, digitales Marketing, CRO",
  },
  "/blog/video-marketing-power": {
    title: "Video-Marketing & KI-Multimedia | AGR Multimedia Blog",
    description: "Warum Video im digitalen Marketing unverzichtbar ist.",
    keywords: "Video Marketing, KI Multimedia, digitales Marketing",
  },
  "/blog/food-truck-web-500": {
    title: "Food-Truck Webdesign Case Study | AGR Multimedia Geislingen",
    description: "Webdesign und digitales Marketing am Beispiel eines Food-Truck-Auftritts.",
    keywords: "Webdesign Geislingen, Food Truck Website, digitales Marketing",
  },
  "/portfolio/ecommerce-site": {
    title: "E‑Commerce Webdesign Case Study | AGR Multimedia",
    description: "Onlineshop-UX, Webdesign und Performance für ein starkes Einkaufserlebnis.",
    keywords: "E-Commerce Webdesign, Onlineshop, digitales Marketing, Geislingen",
  },
  "/portfolio/restaurant-website": {
    title: "Restaurant-Webdesign Case Study | AGR Multimedia",
    description: "Gastronomie-Website mit Speisekarte, Reservierung und Storytelling.",
    keywords: "Restaurant Webdesign, Gastronomie Website, Geislingen",
  },
  "/portfolio/brand-identity": {
    title: "Branding Case Study | AGR Multimedia",
    description: "Logo-Systeme, Guidelines und Marketingmaterial für starke Marken.",
    keywords: "Branding, Grafikdesign, Geislingen, KI Multimedia",
  },
  "/portfolio/corporate-video": {
    title: "Corporate Video Case Study | AGR Multimedia",
    description: "Unternehmens- und Werbevideo — Story, Motion, KI-Workflows.",
    keywords: "Corporate Video, Videoproduktion, digitales Marketing",
  },
  "/portfolio/product-photography": {
    title: "Produktfotografie Case Study | AGR Multimedia",
    description: "Studio- und Lifestyle-Produktfotos für Shop und Kampagnen.",
    keywords: "Produktfotografie, E-Commerce Fotos, Geislingen",
  },
  "/portfolio/packaging-design": {
    title: "Verpackungsdesign Case Study | AGR Multimedia",
    description: "Grafik- und Verpackungsdesign für Retail und Marken.",
    keywords: "Verpackungsdesign, Grafikdesign, Geislingen",
  },
};

const EXTRA_IT: Record<string, RouteSeo> = {
  "/about": {
    title: "Chi siamo | AGR Multimedia Geislingen",
    description:
      "Studio freelance di web design, graphic design e AI multimedia — Agron Osmani, Geislingen an der Steige.",
    keywords: "AGR Multimedia, Geislingen, web design, AI multimedia, digital marketing",
  },
  "/contact": {
    title: "Contatti e preventivi | AGR Multimedia Geislingen",
    description:
      "Richiedi un preventivo per web design, AI multimedia o marketing digitale.",
    keywords: "contatti AGR Multimedia, Geislingen, preventivo web design",
  },
  "/portfolio": {
    title: "Portfolio web design e creatività | AGR Multimedia",
    description: "Progetti selezionati: siti web, branding, video e contenuti AI.",
    keywords: "portfolio web design, Geislingen, case study, AI multimedia",
  },
  "/blog": {
    title: "Blog digital marketing e web design | AGR Multimedia",
    description: "Articoli su marketing digitale, web design, SEO e AI multimedia.",
    keywords: "blog digital marketing, web design, SEO, Geislingen",
  },
  "/photography": {
    title: "Fotografia e fotomontaggio | AGR Multimedia Geislingen",
    description: "Fotografia creativa, restauro, fotomontaggio e poster cinematografici.",
    keywords: "fotografia Geislingen, fotomontaggio, digital marketing",
  },
  "/consulting": {
    title: "Consulenza digitale | AGR Multimedia",
    description: "Audit UX, analytics e strategia per far crescere presenza web e marketing.",
    keywords: "consulenza digitale, UX audit, strategia marketing, Geislingen",
  },
  "/video-production": {
    title: "Montaggio video professionale | Premiere Pro e After Effects | AGR Multimedia",
    description:
      "Montaggio video per brand e campagne — Adobe Premiere Pro, After Effects e consegna strutturata per social, web e ads.",
    keywords:
      "montaggio video, Adobe Premiere Pro, After Effects, Geislingen, video aziendale, post-produzione video",
  },
  "/impresum": {
    title: "Note legali (Impressum) | AGR Multimedia",
    description: "Informazioni legali e dati aziendali per AGR Multimedia in Germania.",
    keywords: "impressum, AGR Multimedia, Geislingen",
  },
  "/privacy": {
    title: "Privacy policy | AGR Multimedia",
    description: "Come AGR Multimedia tratta i dati personali degli utenti.",
    keywords: "privacy, GDPR, AGR Multimedia",
  },
  "/terms": {
    title: "Termini di servizio | AGR Multimedia",
    description: "Condizioni d’uso del sito e dei servizi AGR Multimedia.",
    keywords: "termini, AGR Multimedia, legale",
  },
  "/cookies": {
    title: "Cookie policy | AGR Multimedia",
    description: "Informazioni su cookie e tracciamento su agrmultimedia.eu.",
    keywords: "cookie, GDPR, AGR Multimedia",
  },
  "/blog/digital-marketing-trends-2024": {
    title: "Trend digital marketing 2024 | Blog AGR Multimedia",
    description: "Tendenze di digital marketing e AI multimedia per le PMI.",
    keywords: "digital marketing, AI multimedia, web design, Geislingen",
  },
  "/blog/website-conversion-optimization": {
    title: "Ottimizzazione conversioni sito web | Blog AGR Multimedia",
    description: "Migliora conversioni con UX, copy e web design orientato ai risultati.",
    keywords: "conversion rate, web design, digital marketing, CRO",
  },
  "/blog/video-marketing-power": {
    title: "Video marketing e AI multimedia | Blog AGR Multimedia",
    description: "Perché il video è centrale nel mix di digital marketing.",
    keywords: "video marketing, AI multimedia, digital marketing",
  },
  "/blog/food-truck-web-500": {
    title: "Case study web food truck | AGR Multimedia Geislingen",
    description: "Web design e marketing digitale per un food truck ad alte prestazioni.",
    keywords: "web design Geislingen, food truck, digital marketing",
  },
  "/portfolio/ecommerce-site": {
    title: "Case study e‑commerce | AGR Multimedia",
    description: "UX negozio online, web design e performance.",
    keywords: "ecommerce web design, digital marketing, Geislingen",
  },
  "/portfolio/restaurant-website": {
    title: "Case study sito ristorante | AGR Multimedia",
    description: "Sito per hospitality con menu, prenotazioni e brand.",
    keywords: "restaurant web design, Geislingen",
  },
  "/portfolio/brand-identity": {
    title: "Case study brand identity | AGR Multimedia",
    description: "Sistemi di logo, linee guida e materiali marketing.",
    keywords: "brand identity, graphic design, Geislingen",
  },
  "/portfolio/corporate-video": {
    title: "Case study video corporate | AGR Multimedia",
    description: "Video aziendale e promozionale — motion e workflow AI.",
    keywords: "corporate video, video marketing, AI multimedia",
  },
  "/portfolio/product-photography": {
    title: "Case study product photography | AGR Multimedia",
    description: "Foto prodotto per ecommerce e campagne.",
    keywords: "product photography, ecommerce, Geislingen",
  },
  "/portfolio/packaging-design": {
    title: "Case study packaging design | AGR Multimedia",
    description: "Design di packaging per retail e brand.",
    keywords: "packaging design, graphic design, Geislingen",
  },
};

const EXTRA_SR: Record<string, RouteSeo> = {
  "/about": {
    title: "O nama | AGR Multimedia Geislingen",
    description:
      "Freelance web dizajn, grafički dizajn i AI multimedija — Agron Osmani, Geislingen an der Steige.",
    keywords: "AGR Multimedia, Geislingen, web dizajn, AI multimedija, digitalni marketing",
  },
  "/contact": {
    title: "Kontakt i ponude | AGR Multimedia Geislingen",
    description:
      "Zatražite ponudu za web dizajn, AI multimediju ili digitalni marketing — brzi odgovori.",
    keywords: "kontakt AGR Multimedia, Geislingen, ponuda web dizajn",
  },
  "/portfolio": {
    title: "Portfolio web dizajn i kreativni radovi | AGR Multimedia",
    description: "Izabrani projekti: sajtovi, brending, video i AI multimedija.",
    keywords: "portfolio web dizajn, Geislingen, case study, AI multimedija",
  },
  "/blog": {
    title: "Blog: digitalni marketing i web dizajn | AGR Multimedia",
    description: "Tekstovi o digitalnom marketingu, web dizajnu, SEO-u i AI multimediji.",
    keywords: "digitalni marketing blog, web dizajn saveti, Geislingen",
  },
  "/photography": {
    title: "Fotografija i fotomontaža | AGR Multimedia Geislingen",
    description: "Kreativna fotografija, restauracija, fotomontaža i filmski posteri.",
    keywords: "fotografija Geislingen, fotomontaža, digitalni marketing",
  },
  "/consulting": {
    title: "Digitalno savetovanje | AGR Multimedia",
    description: "UX revizije, analitika i strategija za rast prisustva na mreži.",
    keywords: "konsalting, UX audit, digitalni marketing strategija, Geislingen",
  },
  "/video-production": {
    title: "Profesionalni video montaža | Premiere Pro i After Effects | AGR Multimedia",
    description:
      "Montaža videa za brendove i kampanje — Adobe Premiere Pro, After Effects i strukturisana isporuka za web i društvene mreže.",
    keywords:
      "video montaža, Adobe Premiere Pro, After Effects, Geislingen, korporativni video, video postprodukcija",
  },
  "/impresum": {
    title: "Impresum / pravne napomene | AGR Multimedia",
    description: "Pravne informacije i poslovni podaci za AGR Multimedia u Nemačkoj.",
    keywords: "impresum, AGR Multimedia, Geislingen",
  },
  "/privacy": {
    title: "Politika privatnosti | AGR Multimedia",
    description: "Kako AGR Multimedia prikuplja i štiti lične podatke.",
    keywords: "privatnost, GDPR, AGR Multimedia",
  },
  "/terms": {
    title: "Uslovi korišćenja | AGR Multimedia",
    description: "Uslovi korišćenja sajta i usluga AGR Multimedia.",
    keywords: "uslovi, AGR Multimedia, pravno",
  },
  "/cookies": {
    title: "Politika kolačića | AGR Multimedia",
    description: "Informacije o kolačićima i praćenju na agrmultimedia.eu.",
    keywords: "kolačići, GDPR, AGR Multimedia",
  },
  "/blog/digital-marketing-trends-2024": {
    title: "Trendovi digitalnog marketinga 2024 | AGR Multimedia blog",
    description: "Trendovi digitalnog marketinga i AI multimedije za mala preduzeća.",
    keywords: "digitalni marketing, AI multimedija, web dizajn, Geislingen",
  },
  "/blog/website-conversion-optimization": {
    title: "Optimizacija konverzija na sajtu | AGR Multimedia blog",
    description: "Više konverzija kroz UX, kopiranje i web dizajn.",
    keywords: "konverzije, web dizajn, digitalni marketing, CRO",
  },
  "/blog/video-marketing-power": {
    title: "Video marketing i AI multimedija | AGR Multimedia blog",
    description: "Zašto video pripada digitalnom marketing miksu.",
    keywords: "video marketing, AI multimedija, digitalni marketing",
  },
  "/blog/food-truck-web-500": {
    title: "Case study: food truck web sajt | AGR Multimedia Geislingen",
    description: "Web dizajn i digitalni marketing za food truck sa visokim učinkom.",
    keywords: "web dizajn Geislingen, food truck, digitalni marketing",
  },
  "/portfolio/ecommerce-site": {
    title: "Case study e‑commerce sajt | AGR Multimedia",
    description: "UX online prodavnice, web dizajn i performanse.",
    keywords: "ecommerce web dizajn, digitalni marketing, Geislingen",
  },
  "/portfolio/restaurant-website": {
    title: "Case study sajt restorana | AGR Multimedia",
    description: "Sajt za ugostiteljstvo sa menijem i rezervacijama.",
    keywords: "restoran web dizajn, Geislingen",
  },
  "/portfolio/brand-identity": {
    title: "Case study brend identiteta | AGR Multimedia",
    description: "Logo sistemi, smernice i marketing materijali.",
    keywords: "brend identitet, grafički dizajn, Geislingen",
  },
  "/portfolio/corporate-video": {
    title: "Case study korporativni video | AGR Multimedia",
    description: "Korporativni i promotivni video — montaža i AI workflow.",
    keywords: "korporativni video, video produkcija, digitalni marketing",
  },
  "/portfolio/product-photography": {
    title: "Case study produkt fotografija | AGR Multimedia",
    description: "Produkt fotografija za ecommerce i kampanje.",
    keywords: "produkt fotografija, ecommerce, Geislingen",
  },
  "/portfolio/packaging-design": {
    title: "Case study dizajn pakovanja | AGR Multimedia",
    description: "Grafički dizajn pakovanja za maloprodaju i brendove.",
    keywords: "pakovanje dizajn, grafički dizajn, Geislingen",
  },
};

const EXTRA_AL: Record<string, RouteSeo> = {
  "/about": {
    title: "Rreth nesh | AGR Multimedia Geislingen",
    description:
      "Studio freelance për web design, graphic design dhe AI multimedia — Agron Osmani, Geislingen an der Steige.",
    keywords: "AGR Multimedia, Geislingen, web design, AI multimedia, marketing digjital",
  },
  "/contact": {
    title: "Kontakt dhe oferta | AGR Multimedia Geislingen",
    description:
      "Kërkoni ofertë për web design, AI multimedia ose marketing digjital.",
    keywords: "kontakt AGR Multimedia, Geislingen, ofertë web design",
  },
  "/portfolio": {
    title: "Portfolio web design dhe kreative | AGR Multimedia",
    description: "Projekte të zgjedhura: faqe web, branding, video dhe përmbajtje AI.",
    keywords: "portfolio web design, Geislingen, case study, AI multimedia",
  },
  "/blog": {
    title: "Blog marketing digjital dhe web design | AGR Multimedia",
    description: "Artikuj për marketing digjital, web design, SEO dhe AI multimedia.",
    keywords: "blog marketing digjital, web design, Geislingen",
  },
  "/photography": {
    title: "Fotografi dhe fotomontazh | AGR Multimedia Geislingen",
    description: "Fotografi kreative, restaurim, fotomontazh dhe posterë filmikë.",
    keywords: "fotografi Geislingen, fotomontazh, marketing digjital",
  },
  "/consulting": {
    title: "Konsulencë digjitale | AGR Multimedia",
    description: "Audit UX, analitikë dhe strategji për rritje në web dhe marketing.",
    keywords: "konsulencë digjitale, UX audit, strategji marketing, Geislingen",
  },
  "/video-production": {
    title: "Montim profesional video | Premiere Pro dhe After Effects | AGR Multimedia",
    description:
      "Montim video për brende dhe fushata — Adobe Premiere Pro, After Effects dhe dorëzim i strukturuar për web dhe rrjete sociale.",
    keywords:
      "montim video, Adobe Premiere Pro, After Effects, Geislingen, video biznesi, post-produksion video",
  },
  "/impresum": {
    title: "Impresum | AGR Multimedia",
    description: "Informacione ligjore për AGR Multimedia në Gjermani.",
    keywords: "impresum, AGR Multimedia, Geislingen",
  },
  "/privacy": {
    title: "Politika e privatësisë | AGR Multimedia",
    description: "Si trajtohen të dhënat personale nga AGR Multimedia.",
    keywords: "privatësi, GDPR, AGR Multimedia",
  },
  "/terms": {
    title: "Kushtet e shërbimit | AGR Multimedia",
    description: "Kushtet e përdorimit të faqes dhe shërbimeve.",
    keywords: "kushte, AGR Multimedia, ligjor",
  },
  "/cookies": {
    title: "Politika e cookies | AGR Multimedia",
    description: "Informacion për cookies dhe gjurmim në agrmultimedia.eu.",
    keywords: "cookies, GDPR, AGR Multimedia",
  },
  "/blog/digital-marketing-trends-2024": {
    title: "Trende marketingu digjital 2024 | Blog AGR Multimedia",
    description: "Trende marketingu digjital dhe AI multimedia për biznese të vogla.",
    keywords: "marketing digjital, AI multimedia, web design, Geislingen",
  },
  "/blog/website-conversion-optimization": {
    title: "Optimizim konvertimesh në faqe | Blog AGR Multimedia",
    description: "Më shumë konvertime me UX, kopje dhe web design.",
    keywords: "konvertim, web design, marketing digjital, CRO",
  },
  "/blog/video-marketing-power": {
    title: "Video marketing dhe AI multimedia | Blog AGR Multimedia",
    description: "Pse video është qendrore në marketingun digjital.",
    keywords: "video marketing, AI multimedia, marketing digjital",
  },
  "/blog/food-truck-web-500": {
    title: "Case study faqe food truck | AGR Multimedia Geislingen",
    description: "Web design dhe marketing digjital për një projekt food truck.",
    keywords: "web design Geislingen, food truck, marketing digjital",
  },
  "/portfolio/ecommerce-site": {
    title: "Case study e‑commerce | AGR Multimedia",
    description: "UX dyqani online, web design dhe performancë.",
    keywords: "ecommerce web design, marketing digjital, Geislingen",
  },
  "/portfolio/restaurant-website": {
    title: "Case study faqe restoranti | AGR Multimedia",
    description: "Faqe për hospitality me menu dhe rezervime.",
    keywords: "restaurant web design, Geislingen",
  },
  "/portfolio/brand-identity": {
    title: "Case study identitet marke | AGR Multimedia",
    description: "Sisteme logosh dhe materiale marketingu.",
    keywords: "brand identity, graphic design, Geislingen",
  },
  "/portfolio/corporate-video": {
    title: "Case study video korporativ | AGR Multimedia",
    description: "Video korporativ dhe promocional — motion dhe AI.",
    keywords: "corporate video, marketing digjital, AI multimedia",
  },
  "/portfolio/product-photography": {
    title: "Case study fotografi produkti | AGR Multimedia",
    description: "Fotografi produkti për ecommerce dhe fushata.",
    keywords: "product photography, ecommerce, Geislingen",
  },
  "/portfolio/packaging-design": {
    title: "Case study dizajn paketimi | AGR Multimedia",
    description: "Dizajn paketimi për shitje me pakicë dhe marka.",
    keywords: "packaging design, graphic design, Geislingen",
  },
};

export const ROUTE_SEO_BY_LANG: Record<SeoLang, Record<string, RouteSeo>> = {
  en: merge(CORE_EN, EXTRA_EN),
  de: merge(CORE_DE, EXTRA_DE),
  it: merge(CORE_IT, EXTRA_IT),
  sr: merge(CORE_SR, EXTRA_SR),
  al: merge(CORE_AL, EXTRA_AL),
};
