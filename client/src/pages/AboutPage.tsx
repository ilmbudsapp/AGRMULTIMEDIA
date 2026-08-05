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
    "@graph": [localBusinessNode(`https://www.agrmultimedia.eu${ROUTES.about}`)],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function AboutPage() {
  const { tSpec, currentLanguage } = useLanguage();
  const ext = getAboutExtended(currentLanguage);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
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
              className="h-40 w-40 shrink-0 rounded-2xl border border-white/10 object-cover"
              loading="eager"
              decoding="async"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{tSpec.aboutPage.pageH1}</h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-400">{tSpec.aboutPage.intro}</p>
              <p className="mt-3 text-sm text-gray-500">Autor: Agron Osmani · CEO &amp; Gründer, AGR Multimedia</p>
            </div>
          </div>

          <section className="mb-14">
            <h2 className="mb-6 text-2xl font-bold text-white">{ext.storyTitle}</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {ext.storyParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">{ext.whyTitle}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {ext.whyBullets.map((b) => (
                <li key={b} className="flex gap-2 text-gray-300">
                  <span className="text-blue-400" aria-hidden>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="mb-6 text-2xl font-bold text-white">{ext.projectsTitle}</h2>
            <ul className="space-y-4">
              {CASE_STUDIES.map((cs) => (
                <li key={cs.slug} className="rounded-xl border border-white/10 p-4">
                  <h3 className="font-semibold text-white">
                    <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                      {cs.clientName}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{cs.industry} · {cs.location}</p>
                  <Link
                    href={`${ROUTES.portfolio}/${cs.slug}`}
                    className="mt-2 inline-block text-sm text-blue-300 hover:underline"
                  >
                    Case Study →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-white">{ext.languagesTitle}</h2>
              <p className="text-gray-400 leading-relaxed">{ext.languagesText}</p>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-white">{ext.specializationTitle}</h2>
              <p className="text-gray-400 leading-relaxed">{ext.specializationText}</p>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="mb-4 text-2xl font-bold text-white">{ext.educationTitle}</h2>
            <ul className="space-y-2 text-gray-400">
              {ext.educationItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <h2 className="mb-6 text-2xl font-bold text-white">{tSpec.aboutPage.skillsTitle}</h2>
          <ul className="mb-16 grid gap-3 sm:grid-cols-2 text-gray-400">
            {tSpec.aboutPage.tools.map((tool, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-white/50">·</span> {tool}
              </li>
            ))}
          </ul>

          <h2 className="mb-6 text-2xl font-bold text-white">{tSpec.aboutPage.timelineTitle}</h2>
          <div className="mb-16 space-y-4 text-gray-400">
            <p>{tSpec.aboutPage.milestone1}</p>
            <p>{tSpec.aboutPage.milestone2}</p>
            <p>{tSpec.aboutPage.milestone3}</p>
          </div>

          <p className="mb-6 text-gray-400">{tSpec.aboutPage.ctaTitle}</p>
          <Link href={ROUTES.kontakt} aria-label={`${tSpec.aboutPage.ctaButton}: contact page`}>
            <button type="button" className="rounded-2xl bg-white px-8 py-4 font-bold text-[#0a0a0f] transition-all hover:bg-white/90">
              {tSpec.aboutPage.ctaButton}
            </button>
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  );
}
