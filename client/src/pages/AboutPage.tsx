import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function AboutPage() {
  const { tSpec } = useLanguage();

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-400 leading-relaxed mb-16">
            {tSpec.aboutPage.intro}
          </p>
          <h2 className="text-2xl font-bold text-white mb-6">{tSpec.aboutPage.skillsTitle}</h2>
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
          <Link href="/#contact">
            <button className="bg-white text-[#0a0a0f] px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all">
              {tSpec.aboutPage.ctaButton}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
