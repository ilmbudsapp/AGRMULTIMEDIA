import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

type WebPageCopy = {
  eyebrow: string;
  h1: string;
  intro: string;
  offerTitle: string;
  offers: string[];
  processTitle: string;
  processSteps: { title: string; text: string }[];
  projectTitle: string;
  projectIntro: string;
  projectLinkLabel: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

const copyByLang: Record<ServiceLang, WebPageCopy> = {
  en: {
    eyebrow: "Service",
    h1: "Custom Web Design for Small Businesses",
    intro:
      "I provide web design services focused on modern business websites that look premium and convert clearly. Every project is built as responsive web design with SEO-friendly websites structure from day one.",
    offerTitle: "What I offer",
    offers: [
      "Custom website design tailored to your offer and target audience",
      "Responsive web design for mobile, tablet, and desktop screens",
      "Business website design with clear structure and conversion flow",
      "SEO-friendly websites with clean hierarchy and on-page fundamentals",
      "Modern, fast-loading pages ready for marketing campaigns",
    ],
    processTitle: "Quick process",
    processSteps: [
      { title: "01 — Strategy", text: "Define goals, pages, and conversion priorities for your business website." },
      { title: "02 — Design & build", text: "Create custom website design with responsive layouts and modern visual direction." },
      { title: "03 — Launch & optimize", text: "Go live with SEO-friendly structure and practical improvements for growth." },
    ],
    projectTitle: "Project preview — FixBike",
    projectIntro: "I designed and built the FixBike website for Fahrradservice & E-Bike Service Neuwied.",
    projectLinkLabel: "Visit fixbike.online",
    ctaTitle: "Need a modern website for your business?",
    ctaText: "Let's create it together.",
    ctaButton: "Request web design consultation",
  },
  de: {
    eyebrow: "Leistung",
    h1: "Individuelles Webdesign für kleine Unternehmen",
    intro:
      "Ich gestalte Websites für kleine Unternehmen: moderner Auftritt, klare Botschaften und eine Struktur, die zu Anfragen führt. Jedes Projekt ist responsiv und von Anfang an mit einer SEO-freundlichen Seitenarchitektur geplant.",
    offerTitle: "Was ich anbiete",
    offers: [
      "Websitedesign passend zu Angebot und Zielgruppe",
      "Responsives Layout für Smartphone, Tablet und Desktop",
      "Unternehmenswebsite mit klarer Struktur und Conversion-Fokus",
      "SEO-freundliche Seiten mit sauberer Hierarchie und technischer Basis",
      "Schnelle Seiten für Kampagnen und nachhaltiges Wachstum",
    ],
    processTitle: "Schneller Prozess",
    processSteps: [
      { title: "01 — Strategie", text: "Ziele, Seitenstruktur und Conversion-Prioritäten werden klar definiert." },
      { title: "02 — Design & Umsetzung", text: "Websitedesign mit responsiven Layouts und moderner Optik." },
      { title: "03 — Launch & Optimierung", text: "Livegang mit SEO-freundlicher Struktur und gezielten Verbesserungen." },
    ],
    projectTitle: "Projektvorschau — FixBike",
    projectIntro: "Ich habe die FixBike-Website für Fahrradservice & E-Bike Service Neuwied gestaltet und umgesetzt.",
    projectLinkLabel: "fixbike.online besuchen",
    ctaTitle: "Brauchen Sie eine moderne Website für Ihr Unternehmen?",
    ctaText: "Lassen Sie sie uns gemeinsam umsetzen.",
    ctaButton: "Webdesign-Beratung anfragen",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Siti web su misura per piccole imprese",
    intro:
      "Realizzo siti web per piccole imprese: design moderno, messaggi chiari e architettura pensata per convertire. Ogni progetto è responsive e parte con una base SEO on-page fin dal primo giorno.",
    offerTitle: "Cosa offro",
    offers: [
      "Design del sito adattato a offerta e pubblico di riferimento",
      "Layout responsive per smartphone, tablet e computer",
      "Struttura chiara e percorso verso la conversione",
      "SEO on-page con gerarchia ordinata e fondamenta tecniche",
      "Pagine veloci e pronte per campagne di marketing",
    ],
    processTitle: "Processo rapido",
    processSteps: [
      { title: "01 — Strategia", text: "Obiettivi, pagine e priorità di conversione definiti in modo chiaro." },
      { title: "02 — Design e realizzazione", text: "Interfacce responsive, direzione visiva moderna e contenuti strutturati." },
      { title: "03 — Pubblicazione e ottimizzazione", text: "Online con struttura adatta alla SEO e miglioramenti operativi." },
    ],
    projectTitle: "Anteprima progetto — FixBike",
    projectIntro: "Ho progettato e sviluppato il sito FixBike per Fahrradservice & E-Bike Service Neuwied.",
    projectLinkLabel: "Visita fixbike.online",
    ctaTitle: "Ti serve un sito moderno per la tua attività?",
    ctaText: "Costruiamolo insieme con obiettivi chiari.",
    ctaButton: "Richiedi consulenza web design",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Prilagođeni veb dizajn za mala preduzeća",
    intro:
      "Nudim izradu veb sajtova za mala preduzeća: savremen izgled, jasna poruka i struktura koja vodi ka konverziji. Svaki projekat je responsive i izgrađen sa SEO on-page osnovom od prvog dana.",
    offerTitle: "Šta nudim",
    offers: [
      "Dizajn sajta prilagođen ponudi i ciljnoj publici",
      "Responsive raspored za mobilne uređaje, tablet i desktop",
      "Poslovni sajt sa jasnim sadržajem i tokom ka konverziji",
      "SEO on-page sa urednom hijerarhijom i tehničkim osnovama",
      "Brze stranice spremne za marketinške kampanje",
    ],
    processTitle: "Brz proces",
    processSteps: [
      { title: "01 — Strategija", text: "Definišemo ciljeve, strukturu stranica i prioritete konverzije." },
      { title: "02 — Dizajn i izrada", text: "Kreiram responsive izgled i jasan korisnički tok." },
      { title: "03 — Objava i optimizacija", text: "Lansiranje uz SEO-friendly strukturu i praktična poboljšanja." },
    ],
    projectTitle: "Primer projekta — FixBike",
    projectIntro: "Dizajnirao sam i izradio FixBike sajt za Fahrradservice & E-Bike Service Neuwied.",
    projectLinkLabel: "Poseti fixbike.online",
    ctaTitle: "Trebaju vam savremeni poslovni veb sajt?",
    ctaText: "Hajde da ga zajedno uradimo uz jasne ciljeve.",
    ctaButton: "Zatraži konsultacije za veb dizajn",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Dizajn ueb-i i personalizuar për biznese të vogla",
    intro:
      "Ofroj faqe interneti për biznese të vogla: pamje moderne, mesazh i qartë dhe strukturë që drejton konvertimin. Çdo projekt është responsive dhe nis me bazë SEO on-page që nga fillimi.",
    offerTitle: "Çfarë ofroj",
    offers: [
      "Dizajn faqeje i përshtatur me ofertën dhe audiencën",
      "Layout responsive për celular, tablet dhe desktop",
      "Strukturë e qartë dhe rrjedhë drejt konvertimit",
      "SEO on-page me hierarki të pastër dhe baza teknike",
      "Faqe të shpejta gati për fushata marketingu",
    ],
    processTitle: "Proces i shpejtë",
    processSteps: [
      { title: "01 — Strategji", text: "Përcaktojmë objektivat, faqet dhe përparësitë e konvertimit." },
      { title: "02 — Dizajn dhe zhvillim", text: "Ndërtojmë pamje responsive dhe rrjedhë të qartë përdoruesi." },
      { title: "03 — Publikim dhe optimizim", text: "Online me strukturë miqësore për SEO dhe përmirësime praktike." },
    ],
    projectTitle: "Parapamje projekti — FixBike",
    projectIntro: "Kam dizajnuar dhe zhvilluar faqen FixBike për Fahrradservice & E-Bike Service Neuwied.",
    projectLinkLabel: "Hap fixbike.online",
    ctaTitle: "Ju duhet një faqe moderne për biznesin?",
    ctaText: "Le ta ndërtojmë së bashku me objektiva të qarta.",
    ctaButton: "Kërko konsultë për dizajn ueb-i",
  },
};

export default function WebDesign() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = copyByLang[lang];
  const fixbikeScreens = [
    "/portfolio/web-design/fixbike-fahrradservice-neuwied-hero.png",
    "/portfolio/web-design/fixbike-e-bike-vermietung.png",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#f5f4f2] text-neutral-900">
      <Navigation />
      <main className="pb-20 pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{copy.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {copy.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">{copy.intro}</p>
        </section>

        <section id="what-i-offer" className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.offerTitle}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {copy.offers.map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="quick-process" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.processTitle}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {copy.processSteps.map((step) => (
                <div key={step.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <h3 className="text-sm font-semibold tracking-wide text-neutral-800">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.text}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="project-preview" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.projectTitle}</h2>
            <p className="mt-3 text-neutral-600">{copy.projectIntro}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {fixbikeScreens.map((src) => (
                <figure key={src} className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-sm">
                  <img src={src} alt="FixBike website project screenshot" loading="lazy" decoding="async" className="h-auto w-full object-contain" />
                </figure>
              ))}
            </div>
            <p className="mt-4">
              <a
                href="https://fixbike.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline"
              >
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                {copy.projectLinkLabel}
              </a>
            </p>
          </article>
        </section>

        <section id="contact-cta" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white shadow-[0_16px_40px_rgba(15,23,42,0.22)]">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-neutral-300">{copy.ctaText}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
            >
              {copy.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
