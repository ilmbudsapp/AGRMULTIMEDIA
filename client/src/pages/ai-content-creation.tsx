import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import UpdateDate from "@/components/UpdateDate";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectResults from "@/components/ProjectResults";
import GeoAeoDefinitions from "@/components/GeoAeoDefinitions";
import ComparisonTable from "@/components/ComparisonTable";
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
  contentSectionTitle: string;
  contentSectionText: string;
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
    contentSectionTitle: "AI-Powered Content with Human Quality Control",
    contentSectionText: "We leverage advanced AI tools like Google Gemini and Veo 3.1 for rapid content generation, but every asset goes through professional human review and refinement. AI content creation is not about replacing creative judgment—it's about accelerating production while maintaining quality standards. For blog articles, we use AI to draft initial content structures and research summaries, then our team edits for accuracy, tone, and SEO optimization. Visual content follows the same hybrid workflow: AI generates initial concepts and variations, human experts select the best outputs, then refine in Adobe Photoshop or Premiere Pro for production-ready delivery. This approach proved effective in our portfolio projects—AI-generated social media content for seasonal campaigns delivered faster turnaround while maintaining brand consistency. Real-world applications include product photography alternatives for e-commerce (when physical shoots aren't feasible), video promos for service businesses (combining AI footage with brand messaging), and blog content that ranks well because it's AI-assisted but human-verified. The key advantage is speed without sacrificing quality: we can produce campaign-ready visuals in days instead of weeks, test multiple creative directions simultaneously, and scale content production for businesses that need consistent output across channels.",
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
    contentSectionTitle: "KI-Content mit menschlicher Qualitätskontrolle",
    contentSectionText: "Wir nutzen fortschrittliche KI-Tools wie Google Gemini und Veo 3.1 für schnelle Content-Generierung, aber jedes Asset durchläuft professionelle menschliche Prüfung und Verfeinerung. KI-Content-Erstellung ersetzt nicht kreatives Urteilsvermögen—sie beschleunigt die Produktion bei gleichbleibenden Qualitätsstandards. Für Blog-Artikel nutzen wir KI für initiale Content-Strukturen und Recherche-Zusammenfassungen, dann bearbeitet unser Team für Genauigkeit, Ton und SEO-Optimierung. Visuelle Inhalte folgen dem gleichen hybriden Workflow: KI generiert initiale Konzepte und Variationen, menschliche Experten wählen die besten Outputs, dann Verfeinerung in Adobe Photoshop oder Premiere Pro für produktionsfertige Lieferung. Dieser Ansatz bewährte sich in unseren Portfolio-Projekten—KI-generierter Social-Media-Content für saisonale Kampagnen lieferte schnellere Durchlaufzeiten bei Markenkonsistenz. Reale Anwendungen umfassen Produktfotografie-Alternativen für E-Commerce (wenn physische Shootings nicht machbar sind), Video-Promos für Dienstleistungsunternehmen und Blog-Content, der gut rankt, weil er KI-unterstützt aber menschlich verifiziert ist.",
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
      "File pronti all'uso per web, social e canali a pagamento",
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
    whyChooseTitle: "Casi d'uso / processo",
    whyChoosePoints: [
      "Visual di brand per offerte, lanci e campagne stagionali",
      "Video promozionali per annunci, landing page e social",
      "Produzione creativa social rapida con controllo dello stile",
    ],
    ctaTitle: "Ti servono visual IA per il tuo brand?",
    ctaText: "Costruiamo insieme il prossimo progetto IA di foto e video.",
    ctaButton: "Avvia progetto contenuti IA",
    contentSectionTitle: "Contenuti IA con controllo qualità umano",
    contentSectionText: "Sfruttiamo strumenti IA avanzati come Google Gemini e Veo 3.1 per generazione rapida di contenuti, ma ogni asset passa attraverso revisione e raffinamento professionale umano. La creazione di contenuti IA non sostituisce il giudizio creativo—accelera la produzione mantenendo standard qualitativi. Per articoli di blog, usiamo l'IA per abbozzare strutture di contenuto iniziali e riassunti di ricerca, poi il nostro team modifica per accuratezza, tono e ottimizzazione SEO. I contenuti visivi seguono lo stesso workflow ibrido: l'IA genera concetti iniziali e variazioni, esperti umani selezionano i migliori output, poi raffinano in Adobe Photoshop o Premiere Pro per consegna production-ready. Questo approccio si è dimostrato efficace nei nostri progetti portfolio—contenuti social generati da IA per campagne stagionali hanno consegnato tempi di consegna più rapidi mantenendo la coerenza del brand. Applicazioni reali includono alternative alla fotografia di prodotto per e-commerce (quando gli shoot fisici non sono fattibili), video promozionali per aziende di servizi e contenuti blog che si posizionano bene perché assistiti da IA ma verificati umanamente.",
  },
  "sr-Latn": {
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
    contentSectionTitle: "AI sadržaj sa ljudskom kontrolom kvaliteta",
    contentSectionText: "Koristimo napredne AI alate kao što su Google Gemini i Veo 3.1 za brzu generaciju sadržaja, ali svaki materijal prolazi kroz profesionalnu ljudsku proveru i doradu. AI kreiranje sadržaja ne zamenjuje kreativnu prosudbu—ubrzava produkciju uz održavanje standarda kvaliteta. Za blog članke, koristimo AI za izradu početnih struktura sadržaja i rezimea istraživanja, zatim naš tim uređuje za tačnost, ton i SEO optimizaciju. Vizuelni sadržaj prati isti hibridni tok rada: AI generiše početne koncepte i varijacije, ljudski eksperti biraju najbolje izlaze, zatim dorađuju u Adobe Photoshop ili Premiere Pro za isporuku spremnu za produkciju. Ovaj pristup se pokazao efikasnim u našim portfolio projektima—AI generisan sadržaj za društvene mreže za sezonske kampanje omogućio je brže vreme izvršenja uz održavanje konzistentnosti brenda. Stvarne primene uključuju alternative fotografisanju proizvoda za e-commerce (kada fizičko snimanje nije izvodljivo), promo video za servisne kompanije i blog sadržaj koji dobro rangira jer je AI-asistiran ali ljudski verifikovan.",
  },
  sq: {
    eyebrow: "Shërbim",
    h1: "Krijimi i përmbajtjes me inteligjencë artificiale",
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
    contentSectionTitle: "Përmbajtje IA me kontroll cilësie njerëzore",
    contentSectionText: "Ne shfrytëzojmë mjete të avancuara IA si Google Gemini dhe Veo 3.1 për gjenerimin e shpejtë të përmbajtjes, por çdo asset kalon nëpër rishikim dhe përmirësim profesional njerëzor. Krijimi i përmbajtjes me IA nuk zëvendëson gjykimin krijues—përshpejton prodhimin duke ruajtur standardet e cilësisë. Për artikujt e blogut, ne përdorim IA për të hartuar strukturat fillestare të përmbajtjes dhe përmbledhjet e kërkimit, pastaj ekipi ynë redakton për saktësi, ton dhe optimizim SEO. Përmbajtja vizuale ndjek të njëjtin proces hibrid: IA gjeneron koncepte fillestare dhe variante, ekspertët njerëzorë zgjedhin rezultatet më të mira, pastaj përmirësojnë në Adobe Photoshop ose Premiere Pro për dorëzim gati për prodhim. Ky qasje u provua efektive në projektet tona të portfolios—përmbajtja e rrjeteve sociale e gjeneruar nga IA për fushata sezonale ofroi kohë më të shpejtë kthimi duke ruajtur konsistencën e markës. Aplikacionet reale përfshijnë alternativa fotografimi produkti për e-commerce (kur fotografimet fizike nuk janë të realizueshme), video promo për biznese shërbimi dhe përmbajtje blogu që renditen mirë sepse janë të asistuar nga IA por të verifikuar nga njerëzit.",
  },
};

export default function AIContentCreation() {
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
    <>
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
      
      {/* Additional Content Section */}
      <section className="border-t border-[#2a2a30] bg-[#0c0c10] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card rounded-2xl p-8 md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {copy.contentSectionTitle}
              </h2>
              <UpdateDate />
            </div>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              {copy.contentSectionText}
            </p>
          </div>
        </div>
      </section>
      
      <ProcessSteps />
      <ProjectResults />
      <GeoAeoDefinitions />
      <ComparisonTable />
    </>
  );
}
