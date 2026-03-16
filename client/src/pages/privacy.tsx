import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-navy mb-4">
                {t.privacy.title}
              </h1>
              <p className="text-xl text-gray-600">
                {t.privacy.subtitle}
              </p>
            </div>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.privacy.sections.dataCollection.title}
                </h2>
                <p className="mb-4">{t.privacy.sections.dataCollection.content}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.privacy.sections.dataUsage.title}
                </h2>
                <p className="mb-4">{t.privacy.sections.dataUsage.content}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.privacy.sections.cookies.title}
                </h2>
                <p className="mb-4">{t.privacy.sections.cookies.content}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.privacy.sections.rights.title}
                </h2>
                <p className="mb-4">{t.privacy.sections.rights.content}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.privacy.sections.contact.title}
                </h2>
                <p className="mb-4">{t.privacy.sections.contact.content}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}