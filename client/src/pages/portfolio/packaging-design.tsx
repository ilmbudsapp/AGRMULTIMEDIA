import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Palette, Award, Eye, Users, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function PackagingDesign() {
  const { t, currentLanguage } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-pink-900">
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
                Packaging Dizajn
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kreativna ambalažna rešenja
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
            <Badge className="bg-pink-500 text-white">Packaging</Badge>
            <Badge className="bg-purple-500 text-white">Dizajn</Badge>
            <Badge className="bg-orange-500 text-white">Brending</Badge>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Packaging Design Showcase"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Kreativni Packaging Dizajn koji Privlači Pažnju
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Kreiram inovativna ambalažna rešenja koja ne samo što štite proizvod, već i pričaju priču vašeg brenda. Od luksuznih kutija za sminku do elegantnih flašica za parfem, svaki dizajn je pažljivo osmišljen da maksimizuje vizuelni uticaj i poboljša korisničko iskustvo.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="w-6 h-6 text-pink-500" />
                    <h3 className="text-xl font-semibold">Strukturni Dizajn</h3>
                  </div>
                  <p className="text-gray-600">
                    Kreiranje funkcionalnih i estetski privlačnih formi kutija, flašica i drugih ambalažnih rešenja.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">Vizuelni Identitet</h3>
                  </div>
                  <p className="text-gray-600">
                    Integracija brend elemenata, tipografije i color palette-e za konzistentnu vizuelnu komunikaciju.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">Premium Finishing</h3>
                  </div>
                  <p className="text-gray-600">
                    Specijalni efekti kao što su foil stampa, embossing, spot UV lakiranje i druge luksuzne tehnike.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">Shelf Appeal</h3>
                  </div>
                  <p className="text-gray-600">
                    Dizajn koji se izdvaja na policama i privlači pogledu kupaca u prodavnicama i online.
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
                    <p className="text-gray-600">Packaging Design</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Industrije</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Kozmetika</Badge>
                      <Badge variant="outline">Parfemi</Badge>
                      <Badge variant="outline">Luksuz</Badge>
                      <Badge variant="outline">Hrana</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Tipovi Ambalaze</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Kutije za sminku i kozmetiku</li>
                      <li>• Flašice za parfeme</li>
                      <li>• Luksuzne gift kutije</li>
                      <li>• Food packaging</li>
                      <li>• Tube i ampule</li>
                      <li>• Shopping bags</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Isporuka</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 3D mockup vizualizacije</li>
                      <li>• Tehnički crteži za produkciju</li>
                      <li>• Print-ready file-ovi</li>
                      <li>• Materijal specifikacije</li>
                      <li>• Brend guidelines</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Rezultati</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">55% povećanje prodaje</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Veće prepoznavanje brenda</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-pink-500" />
                        <span className="text-sm">Premium pozicioniranje</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Packaging Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Portfolio Packaging Rešenja
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Cosmetic Packaging Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Perfume Bottle Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Luxury Gift Box"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Design Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Kategorije Packaging Dizajna
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Luksuzna Kozmetika</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Elegantni packaging za premium kozmetiku, sminku i parfeme sa naprednim finishing tehnikama.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Premium kutije sa magnetic closure</li>
                  <li>• Flašice sa custom shape dizajnom</li>
                  <li>• Foil stampa i embossing</li>
                  <li>• Soft-touch coating</li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Food & Beverage</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Funkcionalna i privlačna ambalažna rešenja za hranu i piće koja čuvaju svežinu i privlače kupce.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Eco-friendly materijali</li>
                  <li>• Resealable packaging</li>
                  <li>• Temperature resistant dizajn</li>
                  <li>• Clear product visibility</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Design Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Kreativni Proces Packaging Dizajna
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-500">1</span>
                </div>
                <h3 className="font-semibold mb-2">Research</h3>
                <p className="text-sm text-gray-600">Market analiza i konkurentska situacija</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-500">2</span>
                </div>
                <h3 className="font-semibold mb-2">Concept</h3>
                <p className="text-sm text-gray-600">Kreiranje koncepta i početnih skica</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-500">3</span>
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-gray-600">Digitalni dizajn i tipografija</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">4</span>
                </div>
                <h3 className="font-semibold mb-2">3D Mockup</h3>
                <p className="text-sm text-gray-600">Realistične vizualizacije proizvoda</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-500">5</span>
                </div>
                <h3 className="font-semibold mb-2">Production</h3>
                <p className="text-sm text-gray-600">Priprema za štampu i produkciju</p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Vaš Proizvod Zaslužuje Izuzetnu Ambalažu!
            </h3>
            <p className="text-lg mb-6">
              Kontaktirajte me za kreiranje packaging dizajna koji će izdvojiti vaš proizvod na tržištu i povećati prodaju.
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-pink-500 hover:bg-gray-100">
                Kreiraj Moj Packaging Dizajn
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