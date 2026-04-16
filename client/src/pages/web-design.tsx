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
    h1: "Custom Web Design für kleine Unternehmen",
    intro:
      "Ich biete web design services mit Fokus auf moderne Business-Websites, die professionell wirken und klar konvertieren. Jedes Projekt basiert auf responsive web design und einer SEO-friendly Website-Struktur.",
    offerTitle: "Was ich anbiete",
    offers: [
      "Custom website design passend zu Angebot und Zielgruppe",
      "Responsive web design für Mobil, Tablet und Desktop",
      "Business website design mit klarer Struktur und Conversion-Fokus",
      "SEO-friendly websites mit sauberer Hierarchie und On-page-Basis",
      "Moderne, schnelle Seiten für Kampagnen und Wachstum",
    ],
    processTitle: "Schneller Prozess",
    processSteps: [
      { title: "01 — Strategie", text: "Ziele, Seitenstruktur und Conversion-Prioritäten werden klar definiert." },
      { title: "02 — Design & Umsetzung", text: "Custom Website-Design mit responsive Layouts und moderner Optik." },
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
    h1: "Custom Web Design for Small Businesses",
    intro:
      "Offro web design services orientati a modern business websites con stile professionale e struttura chiara. Ogni progetto nasce come responsive web design con base SEO-friendly websites.",
    offerTitle: "Cosa offro",
    offers: [
      "Custom website design su misura per offerta e pubblico",
      "Responsive web design per mobile, tablet e desktop",
      "Business website design con percorso chiaro verso la conversione",
      "SEO-friendly websites con gerarchia pulita e fondamenta on-page",
      "Pagine moderne e veloci pronte per campagne marketing",
    ],
    processTitle: "Quick process",
    processSteps: [
      { title: "01 — Strategia", text: "Definiamo obiettivi, pagine e priorità di conversione." },
      { title: "02 — Design & sviluppo", text: "Creo custom website design con layout responsive e look moderno." },
      { title: "03 — Lancio & ottimizzazione", text: "Pubblicazione con struttura SEO-friendly e miglioramenti pratici." },
    ],
    projectTitle: "Project preview — FixBike",
    projectIntro: "Ho progettato e realizzato il sito FixBike per Fahrradservice & E-Bike Service Neuwied.",
    projectLinkLabel: "Visita fixbike.online",
    ctaTitle: "Need a modern website for your business?",
    ctaText: "Let's create it together.",
    ctaButton: "Richiedi consulenza web design",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Custom Web Design for Small Businesses",
    intro:
      "Nudim web design services fokusirane na modern business websites koje izgledaju profesionalno i vode ka jasnoj konverziji. Svaki projekat radim kao responsive web design sa SEO-friendly websites osnovom.",
    offerTitle: "Šta nudim",
    offers: [
      "Custom website design prilagođen tvojoj ponudi i ciljnoj publici",
      "Responsive web design za mobile, tablet i desktop",
      "Business website design sa jasnom strukturom i konverzionim tokom",
      "SEO-friendly websites sa čistom hijerarhijom i on-page osnovama",
      "Moderan i brz sajt spreman za marketing kampanje",
    ],
    processTitle: "Brz proces",
    processSteps: [
      { title: "01 — Strategija", text: "Definišemo cilj, strukturu stranica i prioritete konverzije." },
      { title: "02 — Dizajn i izrada", text: "Radim custom website design sa responsive rasporedom i modernim izgledom." },
      { title: "03 — Lansiranje i optimizacija", text: "Objava sajta uz SEO-friendly strukturu i praktična poboljšanja." },
    ],
    projectTitle: "Primer projekta — FixBike",
    projectIntro: "Ja sam dizajnirao i izradio FixBike sajt za Fahrradservice & E-Bike Service Neuwied.",
    projectLinkLabel: "Poseti fixbike.online",
    ctaTitle: "Need a modern website for your business?",
    ctaText: "Let's create it together.",
    ctaButton: "Zatraži web design konsultacije",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Custom Web Design for Small Businesses",
    intro:
      "Ofroj web design services të fokusuara në modern business websites me pamje profesionale dhe strukturë që konverton. Çdo projekt ndërtohet si responsive web design me bazë SEO-friendly websites.",
    offerTitle: "Çfarë ofroj",
    offers: [
      "Custom website design i përshtatur me ofertën dhe audiencën",
      "Responsive web design për mobile, tablet dhe desktop",
      "Business website design me strukturë të qartë dhe rrjedhë konvertimi",
      "SEO-friendly websites me hierarki të pastër dhe bazë on-page",
      "Faqe moderne dhe të shpejta gati për marketing",
    ],
    processTitle: "Proces i shpejtë",
    processSteps: [
      { title: "01 — Strategji", text: "Përcaktojmë objektivat, faqet kryesore dhe prioritetet e konvertimit." },
      { title: "02 — Dizajn & zhvillim", text: "Krijoj custom website design me layout responsive dhe stil modern." },
      { title: "03 — Publikim & optimizim", text: "Publikim me strukturë SEO-friendly dhe përmirësime praktike." },
    ],
    projectTitle: "Project preview — FixBike",
    projectIntro: "Unë e kam dizajnuar dhe zhvilluar faqen FixBike për Fahrradservice & E-Bike Service Neuwied.",
    projectLinkLabel: "Hape fixbike.online",
    ctaTitle: "Need a modern website for your business?",
    ctaText: "Let's create it together.",
    ctaButton: "Kërko konsultë web design",
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
