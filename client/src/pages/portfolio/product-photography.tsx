import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Camera, Zap, Eye, Palette, Users, TrendingUp, Star } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ProductPhotography() {
  const { t } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 dark:from-gray-900 dark:to-amber-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                Početna
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Product Photography
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Studijska fotografija proizvoda
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
            <Badge className="bg-amber-500 text-white">Fotografija</Badge>
            <Badge className="bg-orange-500 text-white">Studio</Badge>
            <Badge className="bg-green-500 text-white">E-commerce</Badge>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Product Photography Studio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Profesionalna Studijska Fotografija Proizvoda
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Kreiram visokokvalitetne fotografije proizvoda koje ističu njihove najbolje karakteristike i privlače kupce. Korištenjem profesionalne studio opreme, kontrolisanog osvetljenja i naprednih tehnika fotografisanja, stvaram slike koje povećavaju prodaju i grade poverenje u brend.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Camera className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl font-semibold">Studio Setup</h3>
                  </div>
                  <p className="text-gray-600">
                    Profesionalni studio sa kontrolisanim osvetljenjem, reflektorima i difuzorima za savršene rezultate.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">Napredna Oprema</h3>
                  </div>
                  <p className="text-gray-600">
                    Full-frame DSLR kamere, makro objektivi i specijalno osvetljenje za različite tipove proizvoda.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">Kreativni Pristup</h3>
                  </div>
                  <p className="text-gray-600">
                    Jedinstvene kompozicije i kreativno pozicioniranje koje ističe funkcionalnost i estetiku proizvoda.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">Post-produkcija</h3>
                  </div>
                  <p className="text-gray-600">
                    Adobe Photoshop obrada za uklanjanje imperfekcija, color correction i optimizaciju za web/print.
                  </p>
                </Card>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Detalji Usluge</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Kategorija</h4>
                    <p className="text-gray-600">Product Photography</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Oprema</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Canon 5D Mark IV</Badge>
                      <Badge variant="outline">Macro objektivi</Badge>
                      <Badge variant="outline">Studio Flash</Badge>
                      <Badge variant="outline">Light Box</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Tipovi Proizvoda</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Elektronika i gadžeti</li>
                      <li>• Moda i aksesoari</li>
                      <li>• Kozmetika i parfemi</li>
                      <li>• Hrana i piće</li>
                      <li>• Nakit i luksuzni proizvodi</li>
                      <li>• Industrijski proizvodi</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Isporuka</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• High-res RAW fotografije</li>
                      <li>• Obrađene JPEG verzije</li>
                      <li>• Web-optimizovane slike</li>
                      <li>• Različite formate i veličine</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Rezultati</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">45% povećanje konverzija</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Bolje korisničko iskustvo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-500" />
                        <span className="text-sm">Profesionalan brend imidž</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Product Showcase Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Portfolio Product Photography
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Watch Product Photography"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Headphones Product Photography"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Perfume Product Photography"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Photography Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Proces Fotografisanja
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-500">1</span>
                </div>
                <h3 className="font-semibold mb-2">Planiranje</h3>
                <p className="text-sm text-gray-600">Analiza proizvoda i kreiranje koncepta fotografisanja</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">2</span>
                </div>
                <h3 className="font-semibold mb-2">Studio Setup</h3>
                <p className="text-sm text-gray-600">Postavljanje osvetljenja, pozadine i opreme</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-500">3</span>
                </div>
                <h3 className="font-semibold mb-2">Fotografisanje</h3>
                <p className="text-sm text-gray-600">Različiti uglovi, kompozicije i makro detalji</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-500">4</span>
                </div>
                <h3 className="font-semibold mb-2">Post-produkcija</h3>
                <p className="text-sm text-gray-600">Photoshop obrada i optimizacija slika</p>
              </Card>
            </div>
          </div>

          {/* Lighting Techniques */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Osvetljavanje i Tehnike
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50">
                <h3 className="text-xl font-semibold mb-4">Studijsko Osvetljavanje</h3>
                <p className="text-gray-600 mb-4">
                  Korištenjem različitih tehnika osvetljavanja kreiram fotografije koje ističu teksturu, boju i oblik proizvoda.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Key light za glavno osvetljavanje</li>
                  <li>• Fill light za smanjenje senki</li>
                  <li>• Back light za izdvajanje od pozadine</li>
                  <li>• Difuzori za meko svetlo</li>
                  <li>• Reflektori za dodatno osvetljavanje</li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-xl font-semibold mb-4">Kompozicija i Uglovi</h3>
                <p className="text-gray-600 mb-4">
                  Kreativno pozicioniranje i različiti uglovi fotografisanja koji prikazuju proizvod iz najboljih perspektiva.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hero shots za glavnu prezentaciju</li>
                  <li>• Detail makro fotografije</li>
                  <li>• Lifestyle kontekstualne slike</li>
                  <li>• 360° rotacijski prikaz</li>
                  <li>• Pakovanje i brendiranje</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Vaši Proizvodi Zaslužuju Profesionalnu Prezentaciju!
            </h3>
            <p className="text-lg mb-6">
              Kontaktirajte me za kreiranje impresivnih fotografija koje će povećati prodaju i istaći kvalitet vaših proizvoda.
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-amber-500 hover:bg-gray-100">
                Fotografišite Vaše Proizvode Profesionalno
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