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
            <h1 className="text-4xl font-bold text-navy mb-8 text-center">
              {t.footer.impresum}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-gray-700 leading-relaxed">
                {/* Tekstovi će biti dodati kada korisnik da sve jezike */}
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-electric-blue">
                  <p className="text-center text-gray-600">
                    Impresum sadržaj će biti ažuriran sa vašim podacima...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}