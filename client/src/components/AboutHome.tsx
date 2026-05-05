import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import brandingImage from "@/assets/branding-image.jpg";

/** Kompaktna „About“ sekcija na početnoj — bez statistika i dugačkih skill gridova */
export default function AboutHome() {
  const { t, tSpec } = useLanguage();

  return (
    <section id="about" className="premium-section scroll-mt-24 py-20 md:py-28 border-t border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/80 mb-3">{tSpec.nav.about}</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{t.about.title}</h2>
            <p className="mt-4 text-white/75 leading-relaxed">{tSpec.homeAbout.lead}</p>
            <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base">{t.about.storyP1}</p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-200 underline-offset-4 hover:underline"
            >
              {tSpec.homeAbout.moreAbout}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="premium-card premium-card-hover relative overflow-hidden">
            <img
              src={brandingImage}
              alt=""
              className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
