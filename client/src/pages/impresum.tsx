import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getImpressumCopy } from "@/lib/legal/impressumI18n";

export default function Impresum() {
  const { currentLanguage } = useLanguage();
  const legal = getImpressumCopy(currentLanguage);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-navy mb-4">{legal.title}</h1>
              <p className="text-xl text-gray-600">{legal.subtitle}</p>
            </div>

            <div className="space-y-10">
              {legal.sections.map((section) => (
                <section key={section.id} className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                    <div className="w-1 h-8 bg-electric-blue mr-3 rounded" aria-hidden />
                    {section.title}
                  </h2>
                  <div className="space-y-2 text-gray-700">
                    {section.paragraphs.map((p, idx) => (
                      <p key={idx} className={idx === 0 && section.id === "operator" ? "font-medium text-lg" : "leading-relaxed whitespace-pre-line"}>
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
