import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import Contact from "@/components/Contact";
import { CASE_STUDIES, type CaseStudy } from "@/data/caseStudies";
import { ROUTES } from "@/lib/siteRoutes";

type Props = { study: CaseStudy };

export default function CaseStudyPage({ study }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [study.slug]);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      <Navigation />
      <BreadcrumbNav />
      <main id="main-content" className="pt-8 pb-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href={ROUTES.portfolio} className="inline-flex items-center gap-2 text-sm text-blue-300 hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Zurück zum Portfolio
          </Link>

          <header className="mt-8">
            <p className="text-sm font-medium uppercase tracking-wider text-blue-300/90">
              {study.industry} · {study.location}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Case Study: {study.clientName}
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Wie AGR Multimedia einem lokalen Unternehmen zu mehr Sichtbarkeit, Vertrauen und Anfragen verholfen hat.
            </p>
          </header>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={study.heroImage}
              alt={`${study.clientName} — Website Projekt AGR Multimedia`}
              className="h-56 w-full object-cover md:h-80"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {study.services.map((s) => (
              <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-300">
                {s}
              </span>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white">Ausgangslage — das Problem</h2>
            <ul className="mt-4 space-y-3 text-gray-300">
              {study.problem.map((p) => (
                <li key={p.slice(0, 40)} className="flex gap-2 leading-relaxed">
                  <span className="text-red-400" aria-hidden>
                    ·
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white">Unsere Lösung</h2>
            <ul className="mt-4 space-y-3 text-gray-300">
              {study.solution.map((s) => (
                <li key={s.slice(0, 40)} className="flex gap-2 leading-relaxed">
                  <span className="text-blue-400" aria-hidden>
                    ·
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white">Ergebnis</h2>
            {study.metrics && study.metrics.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-3">
                {study.metrics.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            ) : null}
            <ul className="mt-4 space-y-3 text-gray-300">
              {study.result.map((r) => (
                <li key={r.slice(0, 40)} className="flex gap-2 leading-relaxed">
                  <span className="text-emerald-400" aria-hidden>
                    ·
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition hover:bg-white/90"
            >
              Live-Website ansehen
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href={ROUTES.kontakt}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Ähnliches Projekt anfragen
            </Link>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Weitere Referenzen:{" "}
            <Link href={ROUTES.webdesignGeislingen} className="text-blue-300 hover:underline">
              Webdesign Geislingen
            </Link>
            {" · "}
            <Link href={ROUTES.bewertungen} className="text-blue-300 hover:underline">
              Google Bewertungen
            </Link>
          </p>
        </article>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
