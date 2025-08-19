import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Palette, Eye, Target, Zap, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function BrandIdentity() {
  const { t, currentLanguage } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
{t("portfolioPages.common.backToHome")}
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Brend Identitet
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kompletan vizuelni identitet za startup
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge className="bg-purple-500 text-white">Brending</Badge>
            <Badge className="bg-pink-500 text-white">Logo Dizajn</Badge>
            <Badge className="bg-blue-500 text-white">Vizuelni Identitet</Badge>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Brand Identity Design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Kreiranje Kompletnog Brendovskog Identiteta
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Razvijam jedinstvene vizuelne identitete koji odražavaju vrednosti, misiju i viziju vašeg brenda. Od logo dizajna do kompletnog brend bukova, kreiram koherentan identitet koji se izdvaja na tržištu i ostaje u sećanju korisnika.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">Logo Kreacija</h3>
                  </div>
                  <p className="text-gray-600">
                    Jedinstveni logotipi koji predstavljaju suštinu brenda kroz simboliku, tipografiju i boje.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-pink-500" />
                    <h3 className="text-xl font-semibold">Color Palette</h3>
                  </div>
                  <p className="text-gray-600">
                    Pažljivo odabrane boje koje prenose emocije i vrednosti brenda kroz sve marketing materijale.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">Vizuelni Stil</h3>
                  </div>
                  <p className="text-gray-600">
                    Konzistentan vizuelni jezik kroz tipografiju, ikonografiju i kompoziciju.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold">Brand Guidelines</h3>
                  </div>
                  <p className="text-gray-600">
                    Detaljan brend bukvar sa pravilima korišćenja za održavanje konzistentnosti.
                  </p>
                </Card>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Detalji Projekta</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Kategorija</h4>
                    <p className="text-gray-600">Brend Identitet</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Industrija</h4>
                    <p className="text-gray-600">Technology Startup</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Isporuka</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Logo dizajn (5 koncepata)</li>
                      <li>• Color palette</li>
                      <li>• Tipografija</li>
                      <li>• Ikone i piktogrami</li>
                      <li>• Vizitka dizajn</li>
                      <li>• Letterhead template</li>
                      <li>• Social media templates</li>
                      <li>• Brand Guidelines PDF</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Rezultati</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">60% bolje prepoznavanje brenda</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">45% više engagement-a</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">Konzistentan omni-channel identitet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Brand Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Brend Elementi
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Logo Mark</h3>
                <p className="text-sm text-gray-600">Simboličko predstavljanje brenda</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Boje</h3>
                <p className="text-sm text-gray-600">Primarna i sekundarna paleta</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  Aa
                </div>
                <h3 className="font-semibold mb-2">Tipografija</h3>
                <p className="text-sm text-gray-600">Primarni i sekundarni fontovi</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Aplikacije</h3>
                <p className="text-sm text-gray-600">Primena na različitim materijalima</p>
              </Card>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Kreativni Proces
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Istraživanje</h3>
                <p className="text-sm text-gray-600">Analiza tržišta, konkurencije i ciljne publike</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Kreiranje</h3>
                <p className="text-sm text-gray-600">Razvoj koncepata i početnih ideja</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Rafinirane</h3>
                <p className="text-sm text-gray-600">Izbor najboljih rešenja i usavršavanje</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Finalizacija</h3>
                <p className="text-sm text-gray-600">Brend bukvar i finalni materijali</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Vaš Brend Zaslužuje Jedinstvenu Vizuelinu!
            </h3>
            <p className="text-lg mb-6">
              Kontaktirajte me za kreiranje kompletnog brend identiteta koji će izdvojiti vašu kompaniju od konkurencije.
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-purple-500 hover:bg-gray-100">
                Kreiraj Moj Brend Identitet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}