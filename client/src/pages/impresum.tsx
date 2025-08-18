import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Impresum() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-navy mb-4">
                {t.impresum.title}
              </h1>
              <p className="text-xl text-gray-600">
                {t.impresum.subtitle}
              </p>
            </div>
            
            <div className="space-y-10">
              {/* Company Information */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.impresum.sections.company.title}
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium text-lg">{t.impresum.sections.company.owner}</p>
                  <p className="whitespace-pre-line leading-relaxed">{t.impresum.sections.company.address}</p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.impresum.sections.contact.title}
                </h2>
                <div className="text-gray-700">
                  <p className="text-lg">{t.impresum.sections.contact.email}</p>
                </div>
              </section>

              {/* Representative */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.impresum.sections.representative.title}
                </h2>
                <div className="text-gray-700">
                  <p className="text-lg font-medium">{t.impresum.sections.representative.name}</p>
                </div>
              </section>

              {/* Tax Information */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.impresum.sections.tax.title}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p className="text-lg">{t.impresum.sections.tax.taxNumber}</p>
                  <p className="text-sm leading-relaxed">{t.impresum.sections.tax.vatNumber}</p>
                </div>
              </section>

              {/* Professional Title */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-navy mb-4 flex items-center">
                  <div className="w-1 h-8 bg-electric-blue mr-3 rounded"></div>
                  {t.impresum.sections.profession.title}
                </h2>
                <div className="text-gray-700">
                  <p className="text-lg font-medium">{t.impresum.sections.profession.description}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}