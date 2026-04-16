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
    examplesIntro: "ILMBUDS app case with UI screenshots and Google Play publishing visuals.",
    ctaTitle: "Need a custom application for your business?",
    ctaText: "Let's build it together.",
    ctaButton: "Request application consultation",
  },
  de: {
    eyebrow: "Leistung",
    h1: "Application Design and Development Services",
    intro:
      "Ich entwickle custom applications und moderne App-Lösungen für Unternehmen mit klaren, nutzbaren digitalen Prozessen. Fokus: user-friendly app design, responsive application interfaces und messbarer Business-Nutzen.",
    offerTitle: "Was ich anbiete",
    offers: [
      "Application design services für reale Geschäftsprozesse",
      "Custom application development für interne und kundennahe Anwendungen",
      "User-friendly App-Design mit klaren, modernen Interfaces",
      "Responsive App-Design für Desktop, Tablet und Mobile",
      "Business software solutions für den täglichen Einsatz",
    ],
    processTitle: "Kurzer Prozess",
    processSteps: [
      { title: "01 — Planung", text: "Ziele, Nutzer und Kernfunktionen werden klar definiert." },
      { title: "02 — Design", text: "Moderne Application Interfaces mit klarer UX und responsive Struktur." },
      { title: "03 — Entwicklung", text: "Umsetzung, Tests und Go-live als verlässliche App-Lösung." },
    ],
    examplesTitle: "Projektvorschau",
    examplesIntro: "ILMBUDS App Case mit UI-Screenshots und Google-Play-Publishing.",
    ctaTitle: "Brauchen Sie eine individuelle Anwendung für Ihr Unternehmen?",
    ctaText: "Lassen Sie uns sie gemeinsam entwickeln.",
    ctaButton: "App-Beratung anfragen",
  },
  it: {
    eyebrow: "Servizio",
    h1: "Application Design and Development Services",
    intro:
      "Creo custom applications e modern app solutions per aziende che vogliono strumenti digitali chiari e utili. Ogni progetto punta su user-friendly app design e responsive application interfaces.",
    offerTitle: "Cosa offro",
    offers: [
      "Application design services orientati a workflow business reali",
      "Custom application development per tool interni e prodotti clienti",
      "User-friendly app design con interfacce pulite e moderne",
      "Responsive app design per desktop, tablet e mobile",
      "Business software solutions pratiche per uso quotidiano",
    ],
    processTitle: "Short process",
    processSteps: [
      { title: "01 — Planning", text: "Definizione obiettivi, utenti e funzionalità chiave." },
      { title: "02 — Design", text: "Interfacce moderne con UX chiara e layout responsive." },
      { title: "03 — Development", text: "Sviluppo, test e rilascio della soluzione applicativa." },
    ],
    examplesTitle: "Project preview",
    examplesIntro: "Caso ILMBUDS con screenshot UI e visual pubblicazione Google Play.",
    ctaTitle: "Need a custom application for your business?",
    ctaText: "Let's build it together.",
    ctaButton: "Richiedi consulenza applicativa",
  },
  sr: {
    eyebrow: "Usluga",
    h1: "Application Design and Development Services",
    intro:
      "Radim custom applications i modern app solutions za firme kojima trebaju jasni i korisni digitalni alati. Fokus je na user-friendly app design pristupu i responsive application interfaces koje su praktične za svakodnevni rad.",
    offerTitle: "Šta nudim",
    offers: [
      "Application design services prilagođene poslovnim procesima",
      "Custom application development za interne i klijentske alate",
      "User-friendly app design sa čistim i modernim interfejsom",
      "Responsive app design za desktop, tablet i mobilne uređaje",
      "Business software solutions koje rešavaju konkretne potrebe",
    ],
    processTitle: "Kratak proces",
    processSteps: [
      { title: "01 — Planning", text: "Definisanje ciljeva, korisnika i glavnih funkcionalnosti." },
      { title: "02 — Design", text: "Izrada modernog interfejsa sa jasnim UX i responsive rasporedom." },
      { title: "03 — Development", text: "Razvoj, testiranje i lansiranje aplikativnog rešenja." },
    ],
    examplesTitle: "Primer projekta",
    examplesIntro: "ILMBUDS aplikacija sa UI screenshot-ovima i Google Play objavom.",
    ctaTitle: "Need a custom application for your business?",
    ctaText: "Let's build it together.",
    ctaButton: "Zatraži konsultacije za aplikaciju",
  },
  al: {
    eyebrow: "Shërbim",
    h1: "Application Design and Development Services",
    intro:
      "Krijoj custom applications dhe modern app solutions për biznese që kërkojnë mjete digjitale të qarta dhe funksionale. Çdo projekt fokusohet te user-friendly app design dhe responsive application interfaces.",
    offerTitle: "Çfarë ofroj",
    offers: [
      "Application design services të përshtatura me workflow biznesi",
      "Custom application development për mjete të brendshme dhe produkte klienti",
      "User-friendly app design me ndërfaqe të pastra dhe moderne",
      "Responsive app design për desktop, tablet dhe mobile",
      "Business software solutions praktike për përdorim ditor",
    ],
    processTitle: "Proces i shkurtër",
    processSteps: [
      { title: "01 — Planning", text: "Përcaktim i objektivave, përdoruesve dhe funksioneve kryesore." },
      { title: "02 — Design", text: "Ndërfaqe moderne me UX të qartë dhe layout responsive." },
      { title: "03 — Development", text: "Zhvillim, testim dhe publikim i zgjidhjes aplikative." },
    ],
    examplesTitle: "Project preview",
    examplesIntro: "Rasti ILMBUDS me pamje UI dhe publikim në Google Play.",
    ctaTitle: "Need a custom application for your business?",
    ctaText: "Let's build it together.",
    ctaButton: "Kërko konsultë aplikacioni",
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
