import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { ABOUT_JSON_LD_SNIPPET } from "@/lib/aboutJsonLdSnippet";

export default function AboutPage() {
  const { tSpec } = useLanguage();

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      <Navigation />
      <main id="main-content" className="pt-24 pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">{tSpec.aboutPage.pageH1}</h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-400">{tSpec.aboutPage.intro}</p>

          <figure className="mb-16 overflow-hidden rounded-xl border border-white/10 bg-[#07070b] p-4">
            <figcaption className="mb-2 text-sm font-medium text-gray-300">
              JSON-LD primer (Schema.org Organization) — tehnička ilustracija
            </figcaption>
            <pre className="max-h-52 overflow-auto text-left text-xs leading-relaxed text-emerald-100/95">
              <code>{ABOUT_JSON_LD_SNIPPET}</code>
            </pre>
          </figure>

          <h2 className="mb-6 text-2xl font-bold text-white">{tSpec.aboutPage.skillsTitle}</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-400 mb-16">
            {tSpec.aboutPage.tools.map((tool, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-white/50">·</span> {tool}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold text-white mb-6">{tSpec.aboutPage.timelineTitle}</h2>
          <div className="space-y-4 text-gray-400 mb-16">
            <p>{tSpec.aboutPage.milestone1}</p>
            <p>{tSpec.aboutPage.milestone2}</p>
            <p>{tSpec.aboutPage.milestone3}</p>
          </div>
          <p className="text-gray-400 mb-6">{tSpec.aboutPage.ctaTitle}</p>
          <Link href="/#contact" aria-label={`${tSpec.aboutPage.ctaButton}: contact section on homepage`}>
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
