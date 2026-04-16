import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";
import { ilmbudsAppGalleryByLang, ilmbudsPlayStoreLinkByLang } from "@/data/ilmbudsAppPortfolio";

type AppPageCopy = {
  eyebrow: string;
  h1: string;
  intro: string;
  offerTitle: string;
  offers: string[];
  processTitle: string;
  processSteps: { title: string; text: string }[];
  examplesTitle: string;
  examplesIntro: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

const copyByLang: Record<ServiceLang, AppPageCopy> = {
  en: {
    eyebrow: "Service",
    h1: "Application Design and Development Services",
    intro:
      "I build custom applications and modern app solutions for companies that need clear, usable digital tools. Every project focuses on user-friendly app design, responsive application interfaces, and business value.",
    offerTitle: "What I offer",
    offers: [
      "Application design services tailored to business workflows",
      "Custom application development for internal tools and client-facing products",
      "User-friendly app design with clean, modern interfaces",
      "Responsive app design for desktop, tablet, and mobile use",
      "Business software solutions built for practical daily use",
    ],
    processTitle: "Short process",
    processSteps: [
      { title: "01 — Planning", text: "Define goals, users, and core app functionality with a clear scope." },
      { title: "02 — Design", text: "Create modern application interfaces with clear UX and responsive layouts." },
      { title: "03 — Development", text: "Build, test, and launch a reliable app development solution." },
    ],
    examplesTitle: "Project preview",
    examplesIntro: "I created the ILMBUDS app — project preview with UI screenshots and Google Play publishing visuals.",
    ctaTitle: "Need a custom application for your business?",
    ctaText: "Let's build it together.",
    ctaButton: "Request application consultation",
  },
  de: {
    eyebrow: "Leistung",
    h1: "Anwendungsdesign und -entwicklung",
    intro:
      "Ich entwickle maßgeschneiderte Anwendungen und moderne App-Lösungen für Unternehmen mit klaren, alltagstauglichen digitalen Abläufen. Schwerpunkt: nutzerfreundliches App-Design, responsive Oberflächen und messbarer Nutzen.",
    offerTitle: "Was ich anbiete",
    offers: [
      "App-Design orientiert an realen Geschäftsprozessen",
      "Individuelle Anwendungsentwicklung für interne und kundenorientierte Produkte",
      "Nutzerfreundliches App-Design mit klaren, modernen Oberflächen",
      "Responsives App-Design für Desktop, Tablet und Smartphone",
      "Business-Software für den praktischen Tageseinsatz",
    ],
    processTitle: "Kurzer Prozess",
    processSteps: [
      { title: "01 — Planung", text: "Ziele, Nutzer und Kernfunktionen werden klar definiert." },
      { title: "02 — Design", text: "Moderne Anwendungsoberflächen mit klarer UX und responsivem Aufbau." },
      { title: "03 — Entwicklung", text: "Umsetzung, Tests und Go-live als verlässliche App-Lösung." },
    ],
    examplesTitle: "Projektvorschau",
    examplesIntro: "Ich habe die ILMBUDS-App erstellt — Projektvorschau mit UI-Screenshots und Google-Play-Publishing.",
    ctaTitle: "Brauchen Sie eine individuelle Anwendung für Ihr Unternehmen?",
    ctaText: "Lassen Sie uns sie gemeinsam entwickeln.",
    ctaButton: "App-Beratung anfragen",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Progettazione e sviluppo di applicazioni",
    intro:
      "Realizzo applicazioni su misura e soluzioni app moderne per aziende che vogliono strumenti digitali chiari e utilizzabili ogni giorno. Ogni progetto punta su design orientato all’utente e interfacce responsive.",
    offerTitle: "Cosa offro",
    offers: [
      "Progettazione applicativa legata a processi aziendali concreti",
      "Sviluppo di applicazioni personalizzate per strumenti interni e prodotti rivolti ai clienti",
      "Design di app facile da usare, con interfacce pulite e moderne",
      "Interfacce responsive per desktop, tablet e smartphone",
      "Software aziendale pensato per l’uso operativo quotidiano",
    ],
    processTitle: "Processo breve",
    processSteps: [
      { title: "01 — Pianificazione", text: "Obiettivi, utenti e funzionalità principali definiti in modo chiaro." },
      { title: "02 — Design", text: "Interfacce moderne con UX chiara e layout responsive." },
      { title: "03 — Sviluppo", text: "Realizzazione, test e pubblicazione della soluzione applicativa." },
    ],
    examplesTitle: "Anteprima progetto",
    examplesIntro: "Ho creato l’app ILMBUDS — anteprima con screenshot dell’interfaccia e pubblicazione su Google Play.",
    ctaTitle: "Ti serve un’applicazione su misura per la tua attività?",
    ctaText: "Costruiamola insieme con obiettivi chiari.",
    ctaButton: "Richiedi consulenza applicativa",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Dizajn i razvoj aplikacija",
    intro:
      "Radim prilagođene aplikacije i savremena rešenja za firme kojima trebaju jasni i korisni digitalni alati. Fokus je na dizajnu usmerenom na korisnika i responsive interfejsima pogodnim za svakodnevni rad.",
    offerTitle: "Šta nudim",
    offers: [
      "Dizajn aplikacija prilagođen stvarnim poslovnim procesima",
      "Razvoj prilagođenih aplikacija za interne alate i proizvode za klijente",
      "Lak za korišćenje dizajn aplikacije sa čistim i modernim interfejsom",
      "Responsive dizajn za desktop, tablet i mobilne uređaje",
      "Poslovni softver koji rešava konkretne potrebe u radu",
    ],
    processTitle: "Kratak proces",
    processSteps: [
      { title: "01 — Planiranje", text: "Definisanje ciljeva, korisnika i glavnih funkcionalnosti." },
      { title: "02 — Dizajn", text: "Izrada modernog interfejsa sa jasnim UX i responsive rasporedom." },
      { title: "03 — Razvoj", text: "Razvoj, testiranje i lansiranje aplikativnog rešenja." },
    ],
    examplesTitle: "Primer projekta",
    examplesIntro: "Kreirao sam ILMBUDS aplikaciju — pregled projekta sa UI snimcima ekrana i objavom na Google Play-u.",
    ctaTitle: "Trebaju vam prilagođene aplikacije za vaše poslovanje?",
    ctaText: "Hajde da ih zajedno izgradimo uz jasne ciljeve.",
    ctaButton: "Zatraži konsultacije za aplikaciju",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Dizajn dhe zhvillim i aplikacioneve",
    intro:
      "Krijoj aplikacione të personalizuara dhe zgjidhje moderne për biznese që kërkojnë mjete digjitale të qarta dhe të përditshme. Çdo projekt thekson dizajn miqësor me përdoruesin dhe ndërfaqe responsive.",
    offerTitle: "Çfarë ofroj",
    offers: [
      "Dizajn aplikacioni i përshtatur me proceset reale të biznesit",
      "Zhvillim aplikacionesh të personalizuara për mjete të brendshme dhe produkte për klientët",
      "Dizajn aplikacioni i lehtë për t’u përdorur me ndërfaqe të pastra dhe moderne",
      "Dizajn responsive për desktop, tablet dhe celular",
      "Softuer biznesi praktik për përdorim ditor",
    ],
    processTitle: "Proces i shkurtër",
    processSteps: [
      { title: "01 — Planifikim", text: "Përcaktim i objektivave, përdoruesve dhe funksioneve kryesore." },
      { title: "02 — Dizajn", text: "Ndërfaqe moderne me UX të qartë dhe layout responsive." },
      { title: "03 — Zhvillim", text: "Zhvillim, testim dhe publikim i zgjidhjes aplikative." },
    ],
    examplesTitle: "Parapamje projekti",
    examplesIntro: "Kam krijuar aplikacionin ILMBUDS — parapamje me pamje të ndërfaqes dhe publikim në Google Play.",
    ctaTitle: "Ju duhet një aplikacion i personalizuar për biznesin?",
    ctaText: "Le ta ndërtojmë së bashku me objektiva të qarta.",
    ctaButton: "Kërko konsultë për aplikacionin",
  },
};

export default function ApplicationDesignDevelopment() {
  const { currentLanguage } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = copyByLang[lang];
  const appGallery = ilmbudsAppGalleryByLang[lang].slice(0, 4);
  const playLink = ilmbudsPlayStoreLinkByLang[lang];

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

        <section id="short-process" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-2xl font-semibold tracking-tight">{copy.examplesTitle}</h2>
            <p className="mt-3 text-neutral-600">{copy.examplesIntro}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {appGallery.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full max-h-[min(65vh,460px)] object-contain"
                  />
                </figure>
              ))}
            </div>
            <p className="mt-4">
              <a
                href={playLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline"
              >
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                {playLink.label}
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
