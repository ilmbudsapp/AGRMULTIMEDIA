import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import UpdateDate from "@/components/UpdateDate";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectResults from "@/components/ProjectResults";
import GeoAeoDefinitions from "@/components/GeoAeoDefinitions";
import ComparisonTable from "@/components/ComparisonTable";
import { useLanguage } from "@/contexts/LanguageContext";
import { brandingGalleryByLang } from "@/data/brandingGallery";
import { fotomanipulacijeGalleryByLang } from "@/data/fotomanipulacijeGallery";
import { moviePosterGalleryByLang } from "@/data/moviePosterGallery";
import { retushRadoviGalleryByLang } from "@/data/retushRadoviGallery";
import { vizitKarticeGalleryByLang } from "@/data/vizitKarticeGallery";
import { buildSubsections, getServiceTemplateLabels, toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";
import { atembergeCaseByLang } from "@/data/atembergeCorporateDesign";

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
  contentSectionTitle: string;
  contentSectionText: string;
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
      { id: "corporate-design", h3: "Corporate Design" },
      { id: "fotomanipulacije", h3: "Photo manipulation" },
      { id: "branding", h3: "Branding" },
      { id: "vizit-kartice", h3: "Business cards" },
      { id: "movie-poster", h3: "Movie poster" },
      { id: "retush-radovi", h3: "Retouching work" },
    ],
    selectedWorkTitle: "Featured case study",
    selectedWorkIntro: "Atemberge — corporate design for a modern outdoor hiking brand, from moodboard to final logo and business card.",
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
    contentSectionTitle: "Visual Identity That Drives Business Results",
    contentSectionText: "Strong visual identity is more than aesthetics—it's a strategic business tool. Every logo design project I deliver starts with understanding your positioning, target market, and competitive landscape. For Atemberge, the outdoor hiking brand in our portfolio, we developed a complete corporate design system from concept to final business cards, ensuring the visual language communicated both adventure and professionalism. Branding projects like Tairovic Gebäudeservice demonstrate how consistent visual systems strengthen regional recognition—their cohesive design across digital and print channels contributed to +18% better local visibility. Whether it's business card design that makes the right first impression or comprehensive brand identity systems, every project follows a structured process: research, strategic positioning, visual exploration, and production-ready delivery. Portfolio work includes corporate design for service businesses, logo development with full brand guidelines, and print materials optimized for both digital distribution and professional printing. The goal is always the same: visual assets that support your business objectives and scale as you grow.",
  },
  de: {
    eyebrow: "Leistung",
    h1: "Grafikdesign für kleine Unternehmen",
    intro: "Klare und praktische visuelle Kommunikation für Unternehmen, die professionelles Branding für Web, Social Media und Print brauchen.",
    whatIoffer: [
      "Markenkonsistente visuelle Systeme",
      "Design-Assets für echte Marketing-Nutzung",
      "Klare Struktur für laufende Designproduktion",
      "Professionelle Aufbereitung für digitale und Print-Kanäle",
    ],
    serviceCategoriesTitle: "Service-Kategorien",
    subsectionTitles: [
      { id: "corporate-design", h3: "Corporate Design" },
      { id: "fotomanipulacije", h3: "Fotomanipulation" },
      { id: "branding", h3: "Branding" },
      { id: "vizit-kartice", h3: "Visitenkarten" },
      { id: "movie-poster", h3: "Filmplakat" },
      { id: "retush-radovi", h3: "Retusche-Arbeiten" },
    ],
    selectedWorkTitle: "Ausgewähltes Projekt",
    selectedWorkIntro: "Atemberge — Grafikdesign für eine Outdoor-Wandermarke: Moodboard, Logo und finale Visitenkarte.",
    toolsTitle: "Eingesetzte Tools und Software",
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
    contentSectionTitle: "Visuelle Identität, die Geschäftsergebnisse bringt",
    contentSectionText: "Eine starke visuelle Identität ist mehr als Ästhetik—sie ist ein strategisches Business-Tool. Jedes Logo-Design-Projekt beginnt mit dem Verständnis Ihrer Positionierung, Zielgruppe und Wettbewerbslandschaft. Für Atemberge, die Outdoor-Wandermarke in unserem Portfolio, haben wir ein komplettes Corporate-Design-System entwickelt—vom Konzept bis zur finalen Visitenkarte. Das visuelle Erscheinungsbild kommuniziert sowohl Abenteuer als auch Professionalität. Branding-Projekte wie Tairovic Gebäudeservice zeigen, wie konsistente visuelle Systeme die regionale Bekanntheit stärken—ihr kohärentes Design über digitale und Print-Kanäle trug zu +18% besserer lokaler Sichtbarkeit bei. Ob Visitenkarten-Design, das den richtigen ersten Eindruck hinterlässt, oder umfassende Markenidentitätssysteme—jedes Projekt folgt einem strukturierten Prozess: Recherche, strategische Positionierung, visuelle Exploration und produktionsfertige Lieferung. Portfolio-Arbeiten umfassen Corporate Design für Dienstleistungsunternehmen, Logo-Entwicklung mit vollständigen Brand Guidelines und Printmaterialien, optimiert für digitale Verteilung und professionellen Druck.",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Servizi di grafica per piccole imprese",
    intro: "Comunicazione visiva chiara e pratica per aziende che vogliono un branding professionale su web, social e stampa.",
    whatIoffer: [
      "Sistemi visivi coerenti con il brand",
      "Asset grafici pronti per marketing reale",
      "Struttura chiara per produzione continuativa",
      "Formati professionali per digitale e stampa",
    ],
    serviceCategoriesTitle: "Categorie di servizio",
    subsectionTitles: [
      { id: "corporate-design", h3: "Corporate design" },
      { id: "fotomanipulacije", h3: "Fotomanipolazione" },
      { id: "branding", h3: "Branding" },
      { id: "vizit-kartice", h3: "Biglietti da visita" },
      { id: "movie-poster", h3: "Locandina cinematografica" },
      { id: "retush-radovi", h3: "Lavori di ritocco" },
    ],
    selectedWorkTitle: "Esempi di lavori (in aggiornamento)",
    selectedWorkIntro: "Sezione riservata a esempi progetto curati nella prossima fase.",
    toolsTitle: "Strumenti e software che utilizzo",
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
    contentSectionTitle: "Identità visiva che porta risultati concreti",
    contentSectionText: "Un'identità visiva forte è più di un'estetica—è uno strumento strategico di business. Ogni progetto di logo design che realizzo parte dalla comprensione del tuo posizionamento, mercato target e panorama competitivo. Per Atemberge, il brand outdoor hiking del nostro portfolio, abbiamo sviluppato un sistema completo di corporate design dal concept ai biglietti da visita finali, assicurando che il linguaggio visivo comunicasse sia avventura che professionalità. Progetti di branding come Tairovic Gebäudeservice dimostrano come sistemi visivi coerenti rafforzino il riconoscimento regionale—il loro design coeso su canali digitali e stampa ha contribuito a +18% di visibilità locale. Che si tratti di design di biglietti da visita che lasciano la giusta prima impressione o sistemi di brand identity completi, ogni progetto segue un processo strutturato: ricerca, posizionamento strategico, esplorazione visiva e consegna production-ready. Il portfolio include corporate design per aziende di servizi, sviluppo logo con linee guida complete del brand e materiali print ottimizzati per distribuzione digitale e stampa professionale.",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Usluge grafičkog dizajna za mala preduzeća",
    intro: "Jasna i praktična vizuelna komunikacija za biznise kojima treba profesionalan brending za web, društvene mreže i štampu.",
    whatIoffer: [
      "Vizuelni sistem usklađen sa brendom",
      "Dizajn materijali spremni za realnu marketinšku upotrebu",
      "Jasna struktura za kontinuiranu produkciju sadržaja",
      "Profesionalna priprema za digital i print kanale",
    ],
    serviceCategoriesTitle: "Kategorije usluga",
    subsectionTitles: [
      { id: "corporate-design", h3: "Corporate design" },
      { id: "fotomanipulacije", h3: "Fotomanipulacije" },
      { id: "branding", h3: "Branding" },
      { id: "vizit-kartice", h3: "Vizit kartice" },
      { id: "movie-poster", h3: "Filmski poster" },
      { id: "retush-radovi", h3: "Retuš radovi" },
    ],
    selectedWorkTitle: "Primeri odabranih radova (uskoro)",
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
    ctaButton: "Zatraži konsultacije za grafički dizajn",
    localNote: "Dostupno za biznise u Nemačkoj i balkanske firme koje posluju u Nemačkoj.",
    contentSectionTitle: "Vizuelni identitet koji donosi poslovne rezultate",
    contentSectionText: "Jak vizuelni identitet je više od estetike—to je strategijski poslovni alat. Svaki projekat dizajna logoa koji realizujem počinje sa razumevanjem vašeg pozicioniranja, ciljnog tržišta i konkurentskog okruženja. Za Atemberge, outdoor hiking brend u našem portfoliju, razvili smo kompletan corporate design sistem od koncepta do finalnih vizit kartica, osiguravajući da vizuelni jezik komunicira i avanturu i profesionalnost. Brending projekti kao što je Tairovic Gebäudeservice pokazuju kako konzistentni vizuelni sistemi jačaju regionalnu prepoznatljivost—njihov koherentan dizajn kroz digitalne i print kanale doprineo je +18% boljoj lokalnoj vidljivosti. Bilo da je reč o dizajnu vizit kartica koje ostavljaju pravi prvi utisak ili sveobuhvatnim sistemima brendiranog identiteta, svaki projekat sledi strukturiran proces: istraživanje, strateško pozicioniranje, vizuelna eksploracija i isporuka spremna za produkciju. Portfolio radovi uključuju corporate design za servisne kompanije, razvoj logoa sa kompletnim brand smernicama i print materijale optimizovane za digitalnu distribuciju i profesionalnu štampu.",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Dizajn grafik për biznese të vogla",
    intro: "Komunikim vizual i qartë dhe praktik për biznese që kanë nevojë për branding profesional në web, social dhe print.",
    whatIoffer: [
      "Sistem vizual i qëndrueshëm me brandin",
      "Materiale dizajni gati për marketing real",
      "Strukturë e qartë për prodhim të vazhdueshëm",
      "Formate profesionale për kanale digjitale dhe print",
    ],
    serviceCategoriesTitle: "Kategoritë e shërbimit",
    subsectionTitles: [
      { id: "corporate-design", h3: "Corporate design" },
      { id: "fotomanipulacije", h3: "Fotomanipulimi" },
      { id: "branding", h3: "Branding" },
      { id: "vizit-kartice", h3: "Kartvizita" },
      { id: "movie-poster", h3: "Poster filmi" },
      { id: "retush-radovi", h3: "Punë retushi" },
    ],
    selectedWorkTitle: "Shembuj punësh të zgjedhura (së shpejti)",
    selectedWorkIntro: "Ky bllok është rezervuar për shembuj pune në fazën tjetër.",
    toolsTitle: "Mjetet dhe softuerët që përdor",
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
    ctaButton: "Kërko konsulencë për dizajn grafik",
    localNote: "I disponueshëm për biznese në Gjermani dhe biznese ballkanike që operojnë në Gjermani.",
    contentSectionTitle: "Identitet vizual që sjell rezultate biznesi",
    contentSectionText: "Identiteti vizual i fortë është më shumë se estetikë—është një mjet strategjik biznesi. Çdo projekt dizajni logo që realizoj fillon me kuptimin e pozicionimit tuaj, tregut të synuar dhe peisazhit konkurrues. Për Atemberge, brandi outdoor hiking në portfolion tonë, kemi zhvilluar një sistem të plotë corporate design nga koncepti deri te kartvizitat finale, duke siguruar që gjuha vizuale të komunikonte si aventurë ashtu edhe profesionalizëm. Projektet e brandimit si Tairovic Gebäudeservice demonstrojnë se si sistemet vizuale konsistente forcojnë njohjen rajonale—dizajni i tyre i qëndrueshëm në kanalet digjitale dhe print kontribuoi në +18% dukshmëri më të mirë lokale. Qoftë dizajni i kartvizitave që lënë përshtypjen e parë të duhur ose sistemet gjithëpërfshirëse të identitetit të markës, çdo projekt ndjek një proces të strukturuar: kërkimi, pozicionimi strategjik, eksplorimi vizual dhe dorëzimi i gatshëm për prodhim. Punët e portfolios përfshijnë corporate design për kompanitë e shërbimeve, zhvillimin e logos me udhëzime të plota të markës dhe materiale print të optimizuara për shpërndarje digjitale dhe printim profesional.",
  },
};

export default function GraphicDesign() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = graphicByLang[lang];

  const subsections = buildSubsections(lang, copy.subsectionTitles).map((sub) => {
    if (sub.id === "corporate-design") {
      const caseStudy = atembergeCaseByLang[lang];
      return {
        ...sub,
        h3: caseStudy.h3,
        intro: caseStudy.intro,
        includes: caseStudy.includes,
        toolsPlaceholder: caseStudy.toolsPlaceholder,
        workGallery: caseStudy.gallery,
        galleryFullWidth: true,
        featuredWorkImage: {
          ...caseStudy.businessCard,
          title: lang === "de" ? "Finale Visitenkarte" : "Final business card",
        },
      };
    }
    if (sub.id === "fotomanipulacije") return { ...sub, workGallery: fotomanipulacijeGalleryByLang[lang] };
    if (sub.id === "branding") return { ...sub, workGallery: brandingGalleryByLang[lang] };
    if (sub.id === "vizit-kartice") return { ...sub, workGallery: vizitKarticeGalleryByLang[lang] };
    if (sub.id === "movie-poster") return { ...sub, workGallery: moviePosterGalleryByLang[lang] };
    if (sub.id === "retush-radovi") return { ...sub, workGallery: retushRadoviGalleryByLang[lang] };
    return sub;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const raw = window.location.hash.replace(/^#/, "");
    if (!raw) return;
    const scrollToHash = () => {
      document.getElementById(raw)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const id = window.setTimeout(scrollToHash, 350);
    return () => window.clearTimeout(id);
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
