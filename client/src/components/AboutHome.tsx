import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import brandingJpg from "@/assets/branding-image.jpg";
import brandingWebp from "@/assets/branding-image.webp";
import { ABOUT_JSON_LD_SNIPPET } from "@/lib/aboutJsonLdSnippet";

const CODE_CAPTION: Record<string, string> = {
  en: "Example: minimal Organization JSON-LD (Schema.org) for search engines",
  de: "Beispiel: minimales Organization-JSON-LD (Schema.org) für Suchmaschinen",
  it: "Esempio: JSON-LD Organization (Schema.org) per i motori di ricerca",
  sr: "Primer: minimalan Organization JSON-LD (Schema.org) za pretraživače",
  al: "Shembull: JSON-LD Organization (Schema.org) minimal për kërkuesit",
};

const BRAND_FIGCAPTION: Record<string, string> = {
  en: "Branding and print-to-digital samples from AGR Multimedia client work.",
  sr: "Brending: od štampanog materijala do digitalnih izlaza — AGR Multimedia.",
  de: "Branding von Print bis Digital — Beispiele aus Kundenprojekten.",
  it: "Branding da stampa a digitale, esempi da progetti AGR Multimedia.",
  al: "Branding nga printi në digital, shembuj nga projektet tona.",
};

/** Kompaktna „About“ sekcija na početnoj */
export default function AboutHome() {
  const { t, tSpec, currentLanguage } = useLanguage();
  const cap = CODE_CAPTION[currentLanguage] ?? CODE_CAPTION.en;
  const brandCap = BRAND_FIGCAPTION[currentLanguage] ?? BRAND_FIGCAPTION.en;
  const moreAboutLabel = `${tSpec.homeAbout.moreAbout} (about page)`;

  return (
    <section id="about" className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <article className="min-w-0">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-300/80">{tSpec.nav.about}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{t.about.title}</h2>
            <p className="mt-4 leading-relaxed text-white/75">{tSpec.homeAbout.lead}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{t.about.storyP1}</p>

            <figure className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a12] p-4 text-left">
              <figcaption className="mb-2 text-xs font-medium text-white/80 md:text-sm">{cap}</figcaption>
              <pre className="max-h-48 overflow-x-auto overflow-y-auto text-[0.7rem] leading-relaxed text-emerald-100/95 md:text-xs">
                <code>{ABOUT_JSON_LD_SNIPPET}</code>
              </pre>
            </figure>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-200 underline-offset-4 hover:underline"
              aria-label={moreAboutLabel}
            >
              {tSpec.homeAbout.moreAbout}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </article>

          <aside className="min-w-0" aria-label="AGR Multimedia branding visual">
            <figure className="premium-card premium-card-hover relative overflow-hidden">
              <picture>
                <source srcSet={brandingWebp} type="image/webp" />
                <img
                  src={brandingJpg}
                  alt="AGR Multimedia branding and design workspace"
                  className="aspect-[4/3] h-auto w-full object-cover md:aspect-auto"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="border-t border-white/10 bg-black/25 px-3 py-2 text-center text-xs text-white/65">
                {brandCap}
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
