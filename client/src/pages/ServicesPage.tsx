import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function ServicesPage() {
  const { tSpec } = useLanguage();
  const sections = [
    { id: "ai-content-video", ...tSpec.servicesPage.videoMotion },
    { id: "web-design", ...tSpec.servicesPage.webUi },
    { id: "custom-ai", ...tSpec.servicesPage.aiServices },
  ];

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-400 leading-relaxed mb-16">
            {tSpec.servicesPage.intro}
          </p>
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-gray-400 mb-4">{section.description}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                {section.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              {section.startingFrom && (
                <p className="text-sm text-white/70">{section.startingFrom}</p>
              )}
            </section>
          ))}
          <p className="text-gray-400 mt-12 mb-10">{tSpec.servicesPage.cta}</p>
          <Link href="/#contact">
            <button className="bg-white text-[#0a0a0f] px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all">
              {tSpec.contactPage.submit}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
