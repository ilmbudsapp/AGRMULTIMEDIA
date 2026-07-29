import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPrivacyPolicy } from "@/lib/legal/privacyPolicyI18n";

export default function Privacy() {
  const { currentLanguage } = useLanguage();
  const policy = getPrivacyPolicy(currentLanguage);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-navy mb-4">{policy.title}</h1>
              <p className="text-xl text-gray-600">{policy.subtitle}</p>
              <p className="text-sm text-gray-500 mt-3">
                {currentLanguage === "de"
                  ? "Stand:"
                  : currentLanguage === "en"
                    ? "Last updated:"
                    : currentLanguage === "it"
                      ? "Aggiornato:"
                      : currentLanguage === "al"
                        ? "Përditësuar:"
                        : "Ažurirano:"}{" "}
                {policy.lastUpdated}
              </p>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              {policy.sections.map((section) => (
                <section key={section.id}>
                  <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                    <div className="w-1 h-8 bg-electric-blue mr-3 rounded" aria-hidden />
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
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
