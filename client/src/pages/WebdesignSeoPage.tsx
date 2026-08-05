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
import { faqPageNode } from "@/lib/localBusinessSchema";
import { breadcrumbListSchema } from "@/lib/breadcrumbs";

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
  const pageUrl = `https://www.agrmultimedia.eu${ROUTES.webdesignSeo}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [faqPageNode(pageUrl, WEBDESIGN_SEO_FAQ_DE), breadcrumbListSchema(ROUTES.webdesignSeo)],
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
