import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {
  WEBDESIGN_LANDING_FAQ,
  WEBDESIGN_LANDING_H1,
  WEBDESIGN_LANDING_SECTIONS,
} from "@/data/webdesignGeislingenContent";
import { breadcrumbListSchema } from "@/lib/breadcrumbs";
import { faqPageNode, localBusinessNode } from "@/lib/localBusinessSchema";
import { BUSINESS, ROUTES } from "@/lib/siteRoutes";

const PAGE_URL = `${BUSINESS.url}${ROUTES.webdesignGeislingen}`;

function LandingJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(PAGE_URL),
      faqPageNode(PAGE_URL, WEBDESIGN_LANDING_FAQ),
      breadcrumbListSchema(ROUTES.webdesignGeislingen),
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

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
                Moderne Business-Websites mit lokalem SEO für Handwerk, Dienstleister und kleine Firmen — persönlich
                umgesetzt von AGR Multimedia.
              </p>
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
            </div>

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
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
