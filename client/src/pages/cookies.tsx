import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Cookies() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-navy mb-4">
                {t.cookies.title}
              </h1>
              <p className="text-xl text-gray-600">
                {t.cookies.subtitle}
              </p>
            </div>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.cookies.sections.whatAre.title}
                </h2>
                <p className="mb-4">{t.cookies.sections.whatAre.content}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.cookies.sections.howWeUse.title}
                </h2>
                <p className="mb-4">{t.cookies.sections.howWeUse.content}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.cookies.sections.types.title}
                </h2>
                <p className="mb-4">{t.cookies.sections.types.content}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.cookies.sections.control.title}
                </h2>
                <p className="mb-4">{t.cookies.sections.control.content}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.cookies.sections.thirdParty.title}
                </h2>
                <p className="mb-4">{t.cookies.sections.thirdParty.content}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}