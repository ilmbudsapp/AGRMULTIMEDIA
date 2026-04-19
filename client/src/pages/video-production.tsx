import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getServiceTemplateLabels, toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";

const VIDEO_CLIP_IDS = [1, 2, 3, 4, 5, 6, 7] as const;

function posterSrc(n: number) {
  return encodeURI(`/Video editing/posters/${n}.jpg`);
}

function clipSrc(n: number) {
  if (n === 5) {
    return encodeURI("/Video editing/5 osoba.mp4");
  }
  return encodeURI(`/Video editing/${n}.mp4`);
}

type Pillar = { title: string; body: string };

type VideoPageCopy = {
  eyebrow: string;
  h1: string;
  intro: string;
  /** Screen-reader / outline only — keeps one h2 on the page */
  servicesOverview: string;
  pillars: [Pillar, Pillar, Pillar];
  benefitsTitle: string;
  benefits: string[];
  toolsTitle: string;
  tools: string[];
  ctaQuote: string;
  samplesTitle: string;
  samplesIntro: string;
  /** Footer label before index, e.g. "Editing clip 1" — matches AI gallery figcaption style */
  clipCaptionPrefix: string;
  localNote: string;
};

const copyByLang: Record<ServiceLang, VideoPageCopy> = {
  en: {
    eyebrow: "Video",
    h1: "Professional Video Production & AI Motion Design",
    servicesOverview: "Three service focuses",
    intro:
      "Video Production Geislingen — sharp delivery for brands nearby and across the region. Short-form content for feeds and ads, Social Media Marketing assets that stay on-message, and AI Video speed when deadlines bite.",
    pillars: [
      {
        title: "Social Media Cuts",
        body:
          "Short-form content engineered for scroll-stopping hooks and ready-to-post vertical masters. Built for Instagram, TikTok, and paid campaigns — captions-friendly exports included.",
      },
      {
        title: "Corporate Brand Videos",
        body:
          "Polished stories for websites, pitches, and internal teams. Clear structure, consistent brand voice, and delivery formats that drop straight into presentations or YouTube.",
      },
      {
        title: "AI Enhanced Post-Production",
        body:
          "AI Video tools for faster rough cuts, cleanup, subtitles, and variations — ship more versions without drowning in manual busywork.",
      },
    ],
    benefitsTitle: "What you get",
    benefits: [
      "Feed-first edits designed to lift engagement on crowded timelines",
      "Ready-to-post vertical, square, and landscape masters",
      "Faster rounds with AI-assisted workflows where it saves you time",
      "Clear handoff: one agreed scope, structured revisions",
    ],
    toolsTitle: "Production stack",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro", "Frame.io"],
    ctaQuote: "Request a Quote",
    samplesTitle: "Sample clips",
    samplesIntro: "Recent cuts — press play to preview style and pacing.",
    clipCaptionPrefix: "Editing clip",
    localNote: "Serving Geislingen, the Stuttgart region, and remote teams across the EU.",
  },
  de: {
    eyebrow: "Video",
    h1: "Professionelle Videoproduktion & KI Motion Design",
    servicesOverview: "Drei Schwerpunkte",
    intro:
      "Videoproduktion Geislingen — schnelle Abstimmung, klare Lieferungen. Kurzformat-Content für Feeds und Ads, Social Media Marketing mit konsistenter Markenstimme, plus KI-Video-Geschwindigkeit bei engen Deadlines.",
    pillars: [
      {
        title: "Social-Media-Schnitte",
        body:
          "Kurzformat-Content mit Hook-first-Schnitt und vertikalen Masters für Reels & TikTok. Ideal für bezahltes Social und organische Posts — inklusive exportfertiger Untertitel-Layouts.",
      },
      {
        title: "Corporate & Brand-Filme",
        body:
          "Klare Stories für Website, Pitches und Teams. Einheitlicher Ton, saubere Grafik, Formate für Präsentationen oder YouTube — ohne Marketing-Fülltext.",
      },
      {
        title: "KI-gestützte Postproduktion",
        body:
          "KI-Video-Workflows für schnellere Grobschnitte, Cleanup, Untertitel und Varianten — mehr Output, weniger manuelle Kleinarbeit.",
      },
    ],
    benefitsTitle: "Ihr Nutzen",
    benefits: [
      "Schnitte, die Engagement auf überfüllten Feeds im Blick haben",
      "Posting-fertige Vertikal-, Quadrat- und Landscape-Versionen",
      "Schnellere Iteration durch KI-unterstützte Schritte — wo es Zeit spart",
      "Klare Übergabe: definierter Umfang, strukturierte Korrekturrunden",
    ],
    toolsTitle: "Stack & Tools",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro", "Frame.io"],
    ctaQuote: "Angebot anfragen",
    samplesTitle: "Beispielclips",
    samplesIntro: "Kurz Hineinhören — Stil und Tempo zeigen sich direkt im Player.",
    clipCaptionPrefix: "Schnittbeispiel",
    localNote: "Geislingen, Region Stuttgart — dazu Remote-Teams EU-weit.",
  },
  it: {
    eyebrow: "Video",
    h1: "Produzione video professionale & motion design con IA",
    servicesOverview: "Tre linee di servizio",
    intro:
      "Produzione video Geislingen — tempi chiari per brand locali e team distribuiti. Short-form content per feed e campagne, Social Media Marketing coerente con il brand, e AI video quando la scadenza stringe.",
    pillars: [
      {
        title: "Tagli social & ads",
        body:
          "Short-form content con hook forte e export verticali pronti da pubblicare. Ideale per Reels, TikTok e social ads — anche con layout sottotitoli già impostati.",
      },
      {
        title: "Video corporate & brand",
        body:
          "Storie pulite per sito, pitch e comunicazione interna. Voce di marca stabile, grafica curata, formati pronti per slide o YouTube.",
      },
      {
        title: "Post-produzione potenziata dall’IA",
        body:
          "Flussi AI video per prime cut più veloci, pulizia audio/immagine, sottotitoli e varianti — più versioni senza giorni persi su dettagli ripetitivi.",
      },
    ],
    benefitsTitle: "Risultati concreti",
    benefits: [
      "Montaggi pensati per l’engagement nei feed saturi di contenuti",
      "Master verticali, quadrati e orizzontali pronti al post",
      "Tempi più corti dove l’IA accelera davvero il flusso",
      "Scope chiaro e revisioni organizzate — niente sorprese",
    ],
    toolsTitle: "Stack tecnico",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro", "Frame.io"],
    ctaQuote: "Richiedi un preventivo",
    samplesTitle: "Clip di esempio",
    samplesIntro: "Anteprima rapida di stile e ritmo.",
    clipCaptionPrefix: "Clip montaggio",
    localNote: "Geislingen e regione — anche progetti remote in UE.",
  },
  sr: {
    eyebrow: "Video",
    h1: "Profesionalna video produkcija i AI motion dizajn",
    intro:
      "Video Production Geislingen — brza komunikacija i jasna isporuka. Short-form content za feed i kampanje, Social Media Marketing koji drži brend liniju, i AI video kada je rok kratak.",
    pillars: [
      {
        title: "Social / kratki formati",
        body:
          "Short-form content sa jakim uvodom i vertikalnim izlazima spremnim za objavu. Za Reels, TikTok i plaćene kampanje — plus titlovi kada treba.",
      },
      {
        title: "Korporativni i brend video",
        body:
          "Jasne priče za sajt, pitcheve i timove. Dosledan ton, čista grafika, formati za prezentacije ili YouTube.",
      },
      {
        title: "AI podržana postprodukcija",
        body:
          "AI video tokovi za brže rough cut-eve, čišćenje, titlove i varijante — više verzija bez beskonačnog ručnog kopanja.",
      },
    ],
    benefitsTitle: "Šta dobijate",
    benefits: [
      "Montaža fokusirana na angažman na zagušenim feedovima",
      "Vertikalni, kvadratni i široki masteri gotovi za post",
      "Brže iteracije gde AI stvarno skraćuje posao",
      "Jasan obim i uredne runde izmena",
    ],
    toolsTitle: "Alati / stack",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro", "Frame.io"],
    ctaQuote: "Zatraži ponudu",
    samplesTitle: "Primeri klipova",
    samplesIntro: "Kratki pregled stila i tempa.",
    clipCaptionPrefix: "Montažni klip",
    localNote: "Geislingen, region Štutgart — i daljinski timovi u EU.",
  },
  al: {
    eyebrow: "Video",
    h1: "Produksion profesional video dhe motion design me IA",
    servicesOverview: "Tre fokuse shërbimi",
    intro:
      "Video Production Geislingen — komunikim i shpejtë dhe dorëzim i qartë. Short-form content për rrjetet dhe reklamat, Social Media Marketing në linjë me brandin, dhe AI video kur afati është i ngushtë.",
    pillars: [
      {
        title: "Prerje për social media",
        body:
          "Short-form content me hook të fortë dhe eksporte vertikale gati për postim. Për Instagram, TikTok dhe fushata të paguara — përfshi titra kur duhet.",
      },
      {
        title: "Video korporativ dhe brand",
        body:
          "Histori të pastra për faqe, pitch dhe komunicim të brendshëm. Zë i qëndrueshëm i brandit, grafikë të rregullta, formate për prezantime ose YouTube.",
      },
      {
        title: "Post-produksion i përforcuar me IA",
        body:
          "Rrjedha AI video për prerje më të shpejtë, pastrim, titra dhe variante — më shumë versione pa humbur kohë në detaje të përsëritura.",
      },
    ],
    benefitsTitle: "Çfarë përfitoni",
    benefits: [
      "Montime të fokusuara në angazhim në feed të ngarkuar",
      "Master vertikalë, katrorë dhe horizontalë gati për publikim",
      "Iteracione më të shpejta ku IA kursen kohë",
      "Shtrirje e qartë dhe raunde rishikimi të strukturuara",
    ],
    toolsTitle: "Stack / mjetet",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro", "Frame.io"],
    ctaQuote: "Kërko ofertë",
    samplesTitle: "Shembuj klipesh",
    samplesIntro: "Shiko shpejt stilin dhe ritmin.",
    localNote: "Geislingen dhe rajoni — edhe ekipe remote në BE.",
  },
};

const pillarIcons = [Smartphone, Building2, Sparkles] as const;
const benefitIcons = [TrendingUp, Smartphone, Zap, Layers] as const;

export default function VideoProduction() {
  const { currentLanguage, tSpec } = useLanguage();
  const lang = toServiceLang(currentLanguage);
  const copy = copyByLang[lang];
  const clipAria = tSpec.servicesVideoEditing.videoAriaLabel;
  const tmplLabels = getServiceTemplateLabels(lang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /** Same grid + player chrome as AI video gallery (`ServicePageTemplate` + digital-marketing page): 2 cols on large screens, larger players */
  const selectedWorkSlots = (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
      <h4 className="text-sm font-semibold text-neutral-800">{tmplLabels.videoExamples}</h4>
      <div className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {VIDEO_CLIP_IDS.map((n) => (
          <figure key={n} className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 shadow-sm">
            <video
              controls
              playsInline
              preload="none"
              poster={posterSrc(n)}
              className="aspect-video w-full bg-neutral-900 object-contain"
              aria-label={`${clipAria} ${n}`}
            >
              <source src={clipSrc(n)} type="video/mp4" />
            </video>
            <figcaption className="bg-neutral-50 px-2 py-2 text-center text-xs text-neutral-600">
              {copy.clipCaptionPrefix} {n}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#f5f4f2] text-neutral-900">
      <Navigation />
      <main className="pb-20 pt-24">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{copy.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {copy.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">{copy.intro}</p>
          <p className="mt-4 max-w-3xl text-sm text-neutral-500">{copy.localNote}</p>
        </section>

        {/* Power of 3 */}
        <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8" aria-labelledby="video-services-overview">
          <h2 id="video-services-overview" className="sr-only">
            {copy.servicesOverview}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <article
                  key={pillar.title}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700">
                    <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Primary CTA — immediately after pillars */}
        <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-900 bg-neutral-900 p-8 text-center shadow-[0_16px_40px_rgba(15,23,42,0.22)] sm:p-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-900 transition hover:bg-neutral-200"
            >
              {copy.ctaQuote}
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{copy.benefitsTitle}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {copy.benefits.map((line, i) => {
              const BIcon = benefitIcons[i];
              return (
                <li
                  key={line}
                  className="flex gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                >
                  <BIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" strokeWidth={1.7} aria-hidden />
                  <span className="text-sm leading-relaxed text-neutral-700">{line}</span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Tools — compact */}
        <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-neutral-900">
              <Wrench className="h-5 w-5 text-neutral-500" aria-hidden />
              {copy.toolsTitle}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {copy.tools.map((tool) => (
                <li
                  key={tool}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Samples */}
        <section id="video-samples" className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{copy.samplesTitle}</h2>
            <p className="mt-2 text-sm text-neutral-600">{copy.samplesIntro}</p>
            <div className="mt-6">{selectedWorkSlots}</div>
          </article>
        </section>

      </main>
      <Footer />
    </div>
  );
}
