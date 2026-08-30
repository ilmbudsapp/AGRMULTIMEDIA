import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PageTableOfContents from "@/components/PageTableOfContents";
import SeoAeoEnhancement from "@/components/SeoAeoEnhancement";
import UpdateDate from "@/components/UpdateDate";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectResults from "@/components/ProjectResults";
import GeoAeoDefinitions from "@/components/GeoAeoDefinitions";
import ComparisonTable from "@/components/ComparisonTable";
import {
  WEBDESIGN_LANDING_FAQ,
  WEBDESIGN_LANDING_H1,
  WEBDESIGN_LANDING_SECTIONS,
} from "@/data/webdesignGeislingenContent";
import { breadcrumbListSchema } from "@/lib/breadcrumbs";
import { faqPageNode, localBusinessNode } from "@/lib/localBusinessSchema";
import { enhancedLocalBusinessNode } from "@/lib/enhancedBusinessSchema";
import { BUSINESS, ROUTES } from "@/lib/siteRoutes";

const PAGE_URL = `${BUSINESS.url}${ROUTES.webdesignGeislingen}`;

function LandingJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      enhancedLocalBusinessNode(PAGE_URL),
      faqPageNode(PAGE_URL, WEBDESIGN_LANDING_FAQ),
      breadcrumbListSchema(ROUTES.webdesignGeislingen),
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: WEBDESIGN_LANDING_H1,
        description: "Webdesign-Studio in Geislingen an der Steige: moderne Websites, SEO, GEO/AEO für Handwerk und KMU.",
        dateModified: "2026-08-30",
        isPartOf: { "@id": `${BUSINESS.url}/#website` },
        author: { "@id": `${BUSINESS.url}/#person` },
      },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

const TOC_ITEMS = [
  { id: "webdesign-geislingen-einleitung", label: "Webdesign in Geislingen" },
  { id: "moderne-business-websites", label: "Business-Websites" },
  { id: "seo-optimierte-seiten", label: "SEO-optimierte Seiten" },
  { id: "lokale-google-sichtbarkeit", label: "Lokale Google-Sichtbarkeit" },
  { id: "agr-multimedia-lokal", label: "AGR Multimedia vor Ort" },
  { id: "faq", label: "Häufige Fragen" },
];

export default function WebdesignGeislingenPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07070b]">
      <Navigation />
      <BreadcrumbNav />

      <main id="main-content" className="pt-4 md:pt-6">
        <LandingJsonLd />

        <article className="border-b border-[#333333] py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <header className="mb-12 text-center md:mb-16">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300/80">
                Webagentur · Geislingen an der Steige
              </p>
              <h1 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.35rem]">
                {WEBDESIGN_LANDING_H1}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Moderne Business-Websites mit lokalem SEO in Geislingen an der Steige — für Handwerk, Dienstleister und
                kleine Firmen, persönlich umgesetzt von AGR Multimedia.
              </p>
              <UpdateDate />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href={ROUTES.kontakt}
                  className="premium-cta rounded-full px-8 py-3 text-sm font-semibold"
                >
                  Angebot anfragen
                </Link>
                <Link
                  href={ROUTES.webdesignSeo}
                  className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white hover:border-blue-300/50"
                >
                  Webdesign & SEO
                </Link>
              </div>
            </header>

            <PageTableOfContents items={TOC_ITEMS} />

            <div className="space-y-14 text-white/75">
              {WEBDESIGN_LANDING_SECTIONS.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                  <h2
                    id={`${section.id}-heading`}
                    className="text-balance text-xl font-semibold leading-snug text-white md:text-2xl"
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-relaxed md:text-base">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm md:text-base">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section id="nachweisbare-erfolge" aria-labelledby="nachweisbare-erfolge-heading">
                <h2
                  id="nachweisbare-erfolge-heading"
                  className="text-balance text-xl font-semibold leading-snug text-white md:text-2xl"
                >
                  Nachweisbare Erfolge für lokale Unternehmen in Geislingen
                </h2>
                <p className="mt-4 text-sm leading-relaxed md:text-base">
                  Unsere Webdesign- und SEO-Arbeit liefert messbare Resultate für kleine und mittlere Unternehmen in der Region Geislingen. Bei Toni's Autopflege haben wir durch gezielte lokale SEO-Optimierung und eine moderne, mobilfreundliche Website einen Anstieg von +32% bei Kundenanfragen über die Website dokumentiert. Das Fahrradgeschäft FixBike konnte seinen SEO-Score von 49 auf 88 Punkte steigern, was zu deutlich besserer Auffindbarkeit in Google-Suchergebnissen führte. Die KFZ-Werkstatt Tairovic verzeichnete eine Steigerung der Online-Sichtbarkeit um +18% durch verbesserte lokale Rankings.
                </p>
                <p className="mt-4 text-sm leading-relaxed md:text-base">
                  Diese Ergebnisse aus 2025-2026 zeigen, wie wichtig moderne Technologien wie GEO (Generative Engine Optimization) und AEO (Answer Engine Optimization) für lokale Firmen geworden sind. GEO optimiert Ihre Inhalte speziell für KI-gestützte Suchmaschinen wie ChatGPT, Perplexity oder Google Gemini, während AEO sicherstellt, dass Ihre Website bei direkten Fragen in Suchergebnissen als präzise Antwort erscheint. Für einen Handwerksbetrieb in Geislingen bedeutet das: Wenn potenzielle Kunden nach "bester Autopflege in Geislingen" oder "Fahrradreparatur in meiner Nähe" fragen, erscheint Ihr Unternehmen prominent in den Antworten – nicht nur in traditionellen Suchergebnissen, sondern auch in KI-generierten Zusammenfassungen.
                </p>
                <p className="mt-4 text-sm leading-relaxed md:text-base">
                  Wichtig ist dabei: Diese Zahlen basieren auf tatsächlichen Projekten und sind dokumentiert, stellen jedoch keine Garantie für zukünftige Ergebnisse dar. Jedes Unternehmen ist einzigartig, und der Erfolg hängt von vielen Faktoren ab – von der Branche über den Wettbewerb bis zur Qualität der Inhalte. Was wir garantieren können: eine professionelle, moderne Website mit solider technischer Grundlage, die alle aktuellen SEO-, GEO- und AEO-Best-Practices erfüllt und Ihrem Unternehmen die bestmögliche Ausgangsbasis für Online-Erfolg bietet.
                </p>
              </section>
            </div>

            <ProjectResults />

            <section id="faq" className="mt-16 border-t border-[#333333] pt-14" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-semibold text-white md:text-3xl">
                Häufige Fragen zum Webdesign in Geislingen
              </h2>
              <div className="mt-8 space-y-3">
                {WEBDESIGN_LANDING_FAQ.map((item, index) => {
                  const isOpen = faqOpenIndex === index;
                  return (
                    <div
                      key={item.question}
                      className="overflow-hidden rounded-xl border border-[#333333] bg-white/[0.02]"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                        onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                      >
                        <span className="text-sm font-medium text-white md:text-base">{item.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-blue-300 transition ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>
                      {isOpen && (
                        <div className="border-t border-[#333333] px-5 py-4 text-sm leading-relaxed text-white/70 md:text-base">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            <ProcessSteps />
            <ProjectResults />
            <GeoAeoDefinitions />
            <ComparisonTable />

            <SeoAeoEnhancement variant="pillar" className="mt-16" />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
