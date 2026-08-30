import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PricingModels from "@/components/PricingModels";
import ServicePricingPackages from "@/components/ServicePricingPackages";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES } from "@/lib/siteRoutes";
import {
  WEBDESIGN_SEO_FAQ_DE,
  WEBDESIGN_SEO_SECTIONS_DE,
  WEBDESIGN_SEO_SECTIONS_EN,
} from "@/data/webdesignSeoContent";
import PageTableOfContents from "@/components/PageTableOfContents";
import SeoAeoEnhancement from "@/components/SeoAeoEnhancement";
import UpdateDate from "@/components/UpdateDate";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectResults from "@/components/ProjectResults";
import GeoAeoDefinitions from "@/components/GeoAeoDefinitions";
import ComparisonTable from "@/components/ComparisonTable";
import RelatedServices from "@/components/RelatedServices";
import GoogleReviewsLink from "@/components/GoogleReviewsLink";
import { faqPageNode } from "@/lib/localBusinessSchema";
import { enhancedLocalBusinessNode } from "@/lib/enhancedBusinessSchema";
import { breadcrumbListSchema } from "@/lib/breadcrumbs";
import { BUSINESS } from "@/lib/siteRoutes";

const WEBDESIGN_SEO_TOC = [
  { id: "paket-ueberblick", label: "Paket-Überblick" },
  { id: "vorteile", label: "Vorteile" },
  { id: "prozess", label: "Prozess" },
  { id: "beispiele", label: "Beispiele" },
  { id: "region", label: "Region & Lokales SEO" },
];

const INTRO: Record<string, { title: string; lead: string }> = {
  en: {
    title: "Web Design & SEO",
    lead: "Business websites with clear structure and on-page SEO — built in Geislingen for SMEs across Germany and the EU. Every project receives an individual quote after a free consultation.",
  },
  de: {
    title: "Webdesign & SEO",
    lead: "Business-Websites mit klarer Struktur und On-Page-SEO — entwickelt in Geislingen an der Steige für KMU in der Region. Jedes Projekt erhält ein individuelles Angebot nach einem kostenlosen Erstgespräch.",
  },
};

function ServiceJsonLd() {
  const pageUrl = `https://www.agrmultimedia.com${ROUTES.webdesignSeo}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      enhancedLocalBusinessNode(pageUrl),
      faqPageNode(pageUrl, WEBDESIGN_SEO_FAQ_DE),
      breadcrumbListSchema(ROUTES.webdesignSeo),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Webdesign & SEO",
        description: "Business-Websites mit klarer Struktur und On-Page-SEO für KMU in Baden-Württemberg.",
        dateModified: "2026-08-30",
        isPartOf: { "@id": `${BUSINESS.url}/#website` },
        author: { "@id": `${BUSINESS.url}/#person` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export default function WebdesignSeoPage() {
  const { currentLanguage } = useLanguage();
  const intro = INTRO[currentLanguage] ?? INTRO.en;
  const sections = currentLanguage === "de" ? WEBDESIGN_SEO_SECTIONS_DE : WEBDESIGN_SEO_SECTIONS_EN;
  const faq = currentLanguage === "de" ? WEBDESIGN_SEO_FAQ_DE : WEBDESIGN_SEO_FAQ_DE;

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07070b]">
      <Navigation />
      <BreadcrumbNav />
      <ServiceJsonLd />
      <main id="main-content" className="pt-4 md:pt-6">
        <header className="border-b border-[#333333] py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{intro.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">{intro.lead}</p>
            <UpdateDate />
            <p className="mt-6">
              <Link href={ROUTES.webdesignGeislingen} className="text-sm font-medium text-blue-200 hover:underline md:text-base">
                {currentLanguage === "de"
                  ? "Ausführlicher Guide: Webdesign Geislingen an der Steige"
                  : "Full guide: Web design Geislingen an der Steige"}
              </Link>
              {" · "}
              <Link href={ROUTES.blog} className="text-sm font-medium text-blue-200 hover:underline md:text-base">
                {currentLanguage === "de" ? "Blog: Webdesign & SEO Tipps" : "Blog: web design & SEO tips"}
              </Link>
            </p>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <PageTableOfContents items={WEBDESIGN_SEO_TOC} />
          {sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="mb-12">
              <h2 className="text-xl font-semibold text-white md:text-2xl">{sec.title}</h2>
              {sec.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-white/75">
                  {p}
                </p>
              ))}
              {sec.list ? (
                <ul className="mt-4 space-y-2 text-white/75">
                  {sec.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-400">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section id="seo-geo-erfolge" className="mb-12">
            <h2 className="text-xl font-semibold text-white md:text-2xl">SEO &amp; GEO Erfolge</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Unsere SEO-Arbeit liefert messbare Ergebnisse für kleine und mittlere Unternehmen. Bei FixBike haben wir den SEO-Score von 49 auf 88 Punkte gesteigert (Quelle: seoscore.tools), was zu deutlich besserer Auffindbarkeit in Google-Suchergebnissen führte. Durch technische Optimierungen konnten wir die Ladegeschwindigkeit um +50% verbessern (Google Lighthouse Performance-Score). Die KFZ-Werkstatt Tairovic verzeichnete eine Steigerung der Online-Sichtbarkeit um +18% durch verbesserte lokale Rankings (Google Analytics, organische Suchanfragen).
            </p>
            <p className="mt-4 leading-relaxed text-white/75">
              Diese Resultate zeigen die Bedeutung einer ganzheitlichen SEO-Strategie: Technisches SEO bildet die Grundlage mit schnellen Ladezeiten, mobilfreundlichem Design und sauberer Code-Struktur. On-Page SEO optimiert Inhalte, Meta-Tags und interne Verlinkung für maximale Relevanz. Lokales SEO stärkt die regionale Sichtbarkeit durch Google Business Profile und strukturierte Daten. Moderne GEO (Generative Engine Optimization) und AEO (Answer Engine Optimization) sorgen dafür, dass Ihre Inhalte auch in KI-gestützten Suchmaschinen wie ChatGPT, Perplexity oder Google Gemini optimal dargestellt werden.
            </p>
            <p className="mt-4 leading-relaxed text-white/75">
              Wichtig: Diese Zahlen basieren auf realen Projekten aus 2025-2026 und sind dokumentiert. Sie stellen keine Garantie für zukünftige Ergebnisse dar – jedes Unternehmen ist einzigartig und der Erfolg hängt von vielen Faktoren ab. Was wir garantieren: eine professionelle, moderne Website mit solider technischer Grundlage, die alle aktuellen SEO-, GEO- und AEO-Best-Practices erfüllt und Ihrem Unternehmen die bestmögliche Ausgangsbasis für Online-Erfolg bietet.
            </p>
          </section>

          <ProjectResults />

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-white md:text-2xl">FAQ — Webdesign &amp; SEO</h2>
            <dl className="mt-6 space-y-6">
              {faq.map((item) => (
                <div key={item.question}>
                  <dt className="font-medium text-white">{item.question}</dt>
                  <dd className="mt-2 text-white/75">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <ProcessSteps />
          <ProjectResults />
          <GeoAeoDefinitions />
          <ComparisonTable />
          <RelatedServices variant="seo" />
          
          <div className="mt-16 flex justify-center">
            <GoogleReviewsLink />
          </div>

          <SeoAeoEnhancement variant="webdesign-seo" />

          <p className="mt-10 text-center">
            <Link href={ROUTES.kontakt} className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a0a0f] hover:bg-white/90">
              {currentLanguage === "de" ? "Kostenlose Beratung anfragen" : "Request a free consultation"}
            </Link>
          </p>
        </article>

        <ServicePricingPackages />
        <PricingModels />
      </main>
      <Footer />
    </div>
  );
}
