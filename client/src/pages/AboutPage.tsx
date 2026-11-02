import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { AUTHOR_PHOTO, getAboutExtended } from "@/lib/aboutPageExtended";
import { CASE_STUDIES } from "@/data/caseStudies";
import { ROUTES } from "@/lib/siteRoutes";
import { localBusinessNode } from "@/lib/localBusinessSchema";

function AboutJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessNode(`https://www.agrmultimedia.com${ROUTES.about}`)],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function AboutPage() {
  const { tSpec, currentLanguage } = useLanguage();
  const ext = getAboutExtended(currentLanguage);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[var(--studio-bg)]">
      <Navigation />
      <BreadcrumbNav />
      <AboutJsonLd />
      <main id="main-content" className="pt-24 pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start">
            <img
              src={AUTHOR_PHOTO}
              alt={ext.photoAlt}
              width={160}
              height={160}
              className="h-40 w-40 shrink-0 rounded-2xl border border-[var(--studio-border)] object-cover"
              loading="eager"
              decoding="async"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[var(--studio-text)] sm:text-4xl">{tSpec.aboutPage.pageH1}</h1>
              <p className="mt-4 text-lg leading-relaxed text-[var(--studio-muted)]">{tSpec.aboutPage.intro}</p>
              <p className="mt-3 text-sm text-[var(--studio-muted)]">Autor: Agron Osmani · CEO &amp; Gründer, AGR Multimedia</p>
            </div>
          </div>

          <section className="mb-14">
            <h2 className="mb-6 text-2xl font-bold text-[var(--studio-text)]">{ext.storyTitle}</h2>
            <div className="space-y-4 leading-relaxed text-[var(--studio-muted)]">
              {ext.storyParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>

          <section className="premium-card mb-14 p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl font-medium text-[var(--studio-text)]">{ext.whyTitle}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {ext.whyBullets.map((b) => (
                <li key={b} className="flex gap-2 text-[var(--studio-muted)]">
                  <span className="text-[var(--studio-accent)]" aria-hidden>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="mb-6 text-2xl font-bold text-[var(--studio-text)]">{ext.projectsTitle}</h2>
            <ul className="space-y-4">
              {CASE_STUDIES.map((cs) => (
                <li key={cs.slug} className="rounded-xl border border-[var(--studio-border)] bg-[var(--studio-surface)] p-4">
                  <h3 className="font-semibold text-[var(--studio-text)]">
                    <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--studio-accent)]">
                      {cs.clientName}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-[var(--studio-muted)]">{cs.industry} · {cs.location}</p>
                  <Link
                    href={`${ROUTES.portfolio}/${cs.slug}`}
                    className="mt-2 inline-block text-sm text-[var(--studio-accent)] hover:underline"
                  >
                    Case Study →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-[var(--studio-text)]">{ext.languagesTitle}</h2>
              <p className="leading-relaxed text-[var(--studio-muted)]">{ext.languagesText}</p>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-[var(--studio-text)]">{ext.specializationTitle}</h2>
              <p className="leading-relaxed text-[var(--studio-muted)]">{ext.specializationText}</p>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="mb-4 text-2xl font-bold text-[var(--studio-text)]">{ext.educationTitle}</h2>
            <ul className="space-y-2 text-[var(--studio-muted)]">
              {ext.educationItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <h2 className="mb-6 text-2xl font-bold text-[var(--studio-text)]">{tSpec.aboutPage.skillsTitle}</h2>
          <ul className="mb-16 grid gap-3 text-[var(--studio-muted)] sm:grid-cols-2">
            {tSpec.aboutPage.tools.map((tool, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[var(--studio-muted)]">·</span> {tool}
              </li>
            ))}
          </ul>

          <h2 className="mb-6 text-2xl font-bold text-[var(--studio-text)]">{tSpec.aboutPage.timelineTitle}</h2>
          <div className="mb-16 space-y-4 text-[var(--studio-muted)]">
            <p>{tSpec.aboutPage.milestone1}</p>
            <p>{tSpec.aboutPage.milestone2}</p>
            <p>{tSpec.aboutPage.milestone3}</p>
          </div>

          <p className="mb-6 text-[var(--studio-muted)]">{tSpec.aboutPage.ctaTitle}</p>
          <Link href={ROUTES.kontakt} aria-label={`${tSpec.aboutPage.ctaButton}: contact page`}>
            <button type="button" className="premium-cta rounded-full px-8 py-4 font-semibold">
              {tSpec.aboutPage.ctaButton}
            </button>
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  );
}
