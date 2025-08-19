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
  const { t, currentLanguage } = useLanguage();

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
{currentLanguage === 'sr' ? 'Početna' : 
                 currentLanguage === 'en' ? 'Home' :
                 currentLanguage === 'de' ? 'Startseite' : 
                 currentLanguage === 'sq' ? 'Kryefaqja' :
                 'Početna'}
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Product Photography
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {currentLanguage === 'sr' ? 'Studijska fotografija proizvoda' : 
                 currentLanguage === 'en' ? 'Professional product photography' :
                 currentLanguage === 'de' ? 'Professionelle Produktfotografie' : 
                 currentLanguage === 'sq' ? 'Fotografia profesionale e produkteve' :
                 'Studijska fotografija proizvoda'}
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
            <Badge className="bg-amber-500 text-white">
              {currentLanguage === 'sr' ? 'Fotografija' : 
               currentLanguage === 'en' ? 'Photography' :
               currentLanguage === 'de' ? 'Fotografie' : 
               currentLanguage === 'sq' ? 'Fotografia' :
               'Fotografija'}
            </Badge>
            <Badge className="bg-orange-500 text-white">
              {currentLanguage === 'sr' ? 'Studio' : 
               currentLanguage === 'en' ? 'Studio' :
               currentLanguage === 'de' ? 'Studio' : 
               currentLanguage === 'sq' ? 'Studio' :
               'Studio'}
            </Badge>
            <Badge className="bg-green-500 text-white">
              {currentLanguage === 'sr' ? 'E-commerce' : 
               currentLanguage === 'en' ? 'E-commerce' :
               currentLanguage === 'de' ? 'E-Commerce' : 
               currentLanguage === 'sq' ? 'E-commerce' :
               'E-commerce'}
            </Badge>
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
                {currentLanguage === 'sr' ? 'Profesionalna Studijska Fotografija Proizvoda' : 
                 currentLanguage === 'en' ? 'Professional Product Photography Studio' :
                 currentLanguage === 'de' ? 'Professionelles Produktfotografie-Studio' : 
                 currentLanguage === 'sq' ? 'Studio Profesionale e Fotografisë së Produkteve' :
                 'Profesionalna Studijska Fotografija Proizvoda'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {currentLanguage === 'sr' ? 'Kreiram visokokvalitetne fotografije proizvoda koje ističu njihove najbolje karakteristike i privlače kupce. Korištenjem profesionalne studio opreme, kontrolisanog osvetljenja i naprednih tehnika fotografisanja, stvaram slike koje povećavaju prodaju i grade poverenje u brend.' : 
                 currentLanguage === 'en' ? 'I create high-quality product photographs that highlight their best characteristics and attract customers. Using professional studio equipment, controlled lighting and advanced photography techniques, I create images that increase sales and build brand trust.' :
                 currentLanguage === 'de' ? 'Ich erstelle hochwertige Produktfotografien, die ihre besten Eigenschaften hervorheben und Kunden anziehen. Mit professioneller Studioausrüstung, kontrollierter Beleuchtung und fortgeschrittenen Fotografietechniken erstelle ich Bilder, die den Verkauf steigern und Markenvertrauen aufbauen.' : 
                 currentLanguage === 'sq' ? 'Krijoj fotografi cilësore të produkteve që theksojnë karakteristikat e tyre më të mira dhe tërheqin klientët. Duke përdorur pajisje profesionale studjoi, ndriçim të kontrolluar dhe teknika të avancuara fotografimi, krijoj imazhe që rrisin shitjet dhe ndërtojnë besimin në markë.' :
                 'Kreiram visokokvalitetne fotografije proizvoda koje ističu njihove najbolje karakteristike i privlače kupce. Korištenjem profesionalne studio opreme, kontrolisanog osvetljenja i naprednih tehnika fotografisanja, stvaram slike koje povećavaju prodaju i grade poverenje u brend.'}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Camera className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Studio Setup' : 
                       currentLanguage === 'en' ? 'Studio Setup' :
                       currentLanguage === 'de' ? 'Studio-Ausstattung' : 
                       currentLanguage === 'sq' ? 'Vendosja e Studios' :
                       'Studio Setup'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Profesionalni studio sa kontrolisanim osvetljenjem, reflektorima i difuzorima za savršene rezultate.' : 
                     currentLanguage === 'en' ? 'Professional studio with controlled lighting, reflectors and diffusers for perfect results.' :
                     currentLanguage === 'de' ? 'Professionelles Studio mit kontrollierter Beleuchtung, Reflektoren und Diffusoren für perfekte Ergebnisse.' : 
                     currentLanguage === 'sq' ? 'Studio profesionale me ndriçim të kontrolluar, reflektorë dhe difuzorë për rezultate të përsosura.' :
                     'Profesionalni studio sa kontrolisanim osvetljenjem, reflektorima i difuzorima za savršene rezultate.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Napredna Oprema' : 
                       currentLanguage === 'en' ? 'Advanced Equipment' :
                       currentLanguage === 'de' ? 'Fortgeschrittene Ausrüstung' : 
                       currentLanguage === 'sq' ? 'Pajisje të Avancuara' :
                       'Napredna Oprema'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Full-frame DSLR kamere, makro objektivi i specijalno osvetljenje za različite tipove proizvoda.' : 
                     currentLanguage === 'en' ? 'Full-frame DSLR cameras, macro lenses and specialized lighting for different types of products.' :
                     currentLanguage === 'de' ? 'Vollformat-DSLR-Kameras, Makroobjektive und spezielle Beleuchtung für verschiedene Produkttypen.' : 
                     currentLanguage === 'sq' ? 'Kamera DSLR me kornizë të plotë, lente makro dhe ndriçim të specializuar për tipe të ndryshme produktesh.' :
                     'Full-frame DSLR kamere, makro objektivi i specijalno osvetljenje za različite tipove proizvoda.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Kreativni Pristup' : 
                       currentLanguage === 'en' ? 'Creative Approach' :
                       currentLanguage === 'de' ? 'Kreativer Ansatz' : 
                       currentLanguage === 'sq' ? 'Qasja Kreative' :
                       'Kreativni Pristup'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Jedinstvene kompozicije i kreativno pozicioniranje koje ističe funkcionalnost i estetiku proizvoda.' : 
                     currentLanguage === 'en' ? 'Unique compositions and creative positioning that highlights product functionality and aesthetics.' :
                     currentLanguage === 'de' ? 'Einzigartige Kompositionen und kreative Positionierung, die Funktionalität und Ästhetik des Produkts hervorheben.' : 
                     currentLanguage === 'sq' ? 'Kompozime të veçanta dhe pozicionim kreativ që thekson funksionalitetin dhe estetikën e produktit.' :
                     'Jedinstvene kompozicije i kreativno pozicioniranje koje ističe funkcionalnost i estetiku proizvoda.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Post-produkcija' : 
                       currentLanguage === 'en' ? 'Post-production' :
                       currentLanguage === 'de' ? 'Nachbearbeitung' : 
                       currentLanguage === 'sq' ? 'Post-prodhimi' :
                       'Post-produkcija'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Adobe Photoshop obrada za uklanjanje imperfekcija, color correction i optimizaciju za web/print.' : 
                     currentLanguage === 'en' ? 'Adobe Photoshop processing for removing imperfections, color correction and optimization for web/print.' :
                     currentLanguage === 'de' ? 'Adobe Photoshop-Bearbeitung zur Entfernung von Unvollkommenheiten, Farbkorrektur und Optimierung für Web/Print.' : 
                     currentLanguage === 'sq' ? 'Përpunimi i Adobe Photoshop për heqjen e mangësive, korrigjimin e ngjyrave dhe optimizimin për web/print.' :
                     'Adobe Photoshop obrada za uklanjanje imperfekcija, color correction i optimizaciju za web/print.'}
                  </p>
                </Card>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">
                  {currentLanguage === 'sr' ? 'Detalji Usluge' : 
                   currentLanguage === 'en' ? 'Service Details' :
                   currentLanguage === 'de' ? 'Service-Details' : 
                   currentLanguage === 'sq' ? 'Detajet e Shërbimit' :
                   'Detalji Usluge'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Kategorija' : 
                       currentLanguage === 'en' ? 'Category' :
                       currentLanguage === 'de' ? 'Kategorie' : 
                       currentLanguage === 'sq' ? 'Kategoria' :
                       'Kategorija'}
                    </h4>
                    <p className="text-gray-600">Product Photography</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Oprema' : 
                       currentLanguage === 'en' ? 'Equipment' :
                       currentLanguage === 'de' ? 'Ausrüstung' : 
                       currentLanguage === 'sq' ? 'Pajisjet' :
                       'Oprema'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Canon 5D Mark IV</Badge>
                      <Badge variant="outline">
                        {currentLanguage === 'sr' ? 'Macro objektivi' : 
                         currentLanguage === 'en' ? 'Macro Lenses' :
                         currentLanguage === 'de' ? 'Makro-Objektive' : 
                         currentLanguage === 'sq' ? 'Lente Makro' :
                         'Macro objektivi'}
                      </Badge>
                      <Badge variant="outline">Studio Flash</Badge>
                      <Badge variant="outline">Light Box</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Tipovi Proizvoda' : 
                       currentLanguage === 'en' ? 'Product Types' :
                       currentLanguage === 'de' ? 'Produkttypen' : 
                       currentLanguage === 'sq' ? 'Llojet e Produkteve' :
                       'Tipovi Proizvoda'}
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• {currentLanguage === 'sr' ? 'Elektronika i gadžeti' : 
                             currentLanguage === 'en' ? 'Electronics and gadgets' :
                             currentLanguage === 'de' ? 'Elektronik und Gadgets' : 
                             currentLanguage === 'sq' ? 'Elektronika dhe paisje' :
                             'Elektronika i gadžeti'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Moda i aksesoari' : 
                             currentLanguage === 'en' ? 'Fashion and accessories' :
                             currentLanguage === 'de' ? 'Mode und Accessoires' : 
                             currentLanguage === 'sq' ? 'Moda dhe aksesorë' :
                             'Moda i aksesoari'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Kozmetika i parfemi' : 
                             currentLanguage === 'en' ? 'Cosmetics and perfumes' :
                             currentLanguage === 'de' ? 'Kosmetik und Parfums' : 
                             currentLanguage === 'sq' ? 'Kozmetika dhe parfume' :
                             'Kozmetika i parfemi'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Hrana i piće' : 
                             currentLanguage === 'en' ? 'Food and beverages' :
                             currentLanguage === 'de' ? 'Lebensmittel und Getränke' : 
                             currentLanguage === 'sq' ? 'Ushqim dhe pije' :
                             'Hrana i piće'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Nakit i luksuzni proizvodi' : 
                             currentLanguage === 'en' ? 'Jewelry and luxury products' :
                             currentLanguage === 'de' ? 'Schmuck und Luxusprodukte' : 
                             currentLanguage === 'sq' ? 'Bizhuteri dhe produkte luksoze' :
                             'Nakit i luksuzni proizvodi'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Industrijski proizvodi' : 
                             currentLanguage === 'en' ? 'Industrial products' :
                             currentLanguage === 'de' ? 'Industrieprodukte' : 
                             currentLanguage === 'sq' ? 'Produkte industriale' :
                             'Industrijski proizvodi'}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Isporuka' : 
                       currentLanguage === 'en' ? 'Delivery' :
                       currentLanguage === 'de' ? 'Lieferung' : 
                       currentLanguage === 'sq' ? 'Dorëzimi' :
                       'Isporuka'}
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• {currentLanguage === 'sr' ? 'High-res RAW fotografije' : 
                             currentLanguage === 'en' ? 'High-res RAW photographs' :
                             currentLanguage === 'de' ? 'Hochauflösende RAW-Fotografien' : 
                             currentLanguage === 'sq' ? 'Fotografi RAW me rezolucion të lartë' :
                             'High-res RAW fotografije'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Obrađene JPEG verzije' : 
                             currentLanguage === 'en' ? 'Processed JPEG versions' :
                             currentLanguage === 'de' ? 'Bearbeitete JPEG-Versionen' : 
                             currentLanguage === 'sq' ? 'Versione JPEG të përpunuara' :
                             'Obrađene JPEG verzije'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Web-optimizovane slike' : 
                             currentLanguage === 'en' ? 'Web-optimized images' :
                             currentLanguage === 'de' ? 'Web-optimierte Bilder' : 
                             currentLanguage === 'sq' ? 'Imazhe të optimizuara për web' :
                             'Web-optimizovane slike'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Različite formate i veličine' : 
                             currentLanguage === 'en' ? 'Various formats and sizes' :
                             currentLanguage === 'de' ? 'Verschiedene Formate und Größen' : 
                             currentLanguage === 'sq' ? 'Formate dhe madhësi të ndryshme' :
                             'Različite formate i veličine'}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Rezultati' : 
                       currentLanguage === 'en' ? 'Results' :
                       currentLanguage === 'de' ? 'Ergebnisse' : 
                       currentLanguage === 'sq' ? 'Rezultatet' :
                       'Rezultati'}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? '45% povećanje konverzija' : 
                           currentLanguage === 'en' ? '45% increase in conversions' :
                           currentLanguage === 'de' ? '45% Steigerung der Konversionen' : 
                           currentLanguage === 'sq' ? '45% rritje e konvertimeve' :
                           '45% povećanje konverzija'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? 'Bolje korisničko iskustvo' : 
                           currentLanguage === 'en' ? 'Better user experience' :
                           currentLanguage === 'de' ? 'Bessere Benutzererfahrung' : 
                           currentLanguage === 'sq' ? 'Përvojë më e mirë e përdoruesit' :
                           'Bolje korisničko iskustvo'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? 'Profesionalan brend imidž' : 
                           currentLanguage === 'en' ? 'Professional brand image' :
                           currentLanguage === 'de' ? 'Professionelles Markenimage' : 
                           currentLanguage === 'sq' ? 'Imazh profesional i markës' :
                           'Profesionalan brend imidž'}
                        </span>
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
              {currentLanguage === 'sr' ? 'Portfolio Product Photography' : 
               currentLanguage === 'en' ? 'Product Photography Portfolio' :
               currentLanguage === 'de' ? 'Produktfotografie Portfolio' : 
               currentLanguage === 'sq' ? 'Portfolioja e Fotografisë së Produkteve' :
               'Portfolio Product Photography'}
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
              {currentLanguage === 'sr' ? 'Proces Fotografisanja' : 
               currentLanguage === 'en' ? 'Photography Process' :
               currentLanguage === 'de' ? 'Fotografieprozess' : 
               currentLanguage === 'sq' ? 'Procesi i Fotografisë' :
               'Proces Fotografisanja'}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-500">1</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Planiranje' : 
                   currentLanguage === 'en' ? 'Planning' :
                   currentLanguage === 'de' ? 'Planung' : 
                   currentLanguage === 'sq' ? 'Planifikimi' :
                   'Planiranje'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Analiza proizvoda i kreiranje koncepta fotografisanja' : 
                   currentLanguage === 'en' ? 'Product analysis and photography concept creation' :
                   currentLanguage === 'de' ? 'Produktanalyse und Erstellung von Fotografiekonzepten' : 
                   currentLanguage === 'sq' ? 'Analiza e produktit dhe krijimi i konceptit të fotografisë' :
                   'Analiza proizvoda i kreiranje koncepta fotografisanja'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">2</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Studio Setup' : 
                   currentLanguage === 'en' ? 'Studio Setup' :
                   currentLanguage === 'de' ? 'Studio-Aufbau' : 
                   currentLanguage === 'sq' ? 'Vendosja e Studios' :
                   'Studio Setup'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Postavljanje osvetljenja, pozadine i opreme' : 
                   currentLanguage === 'en' ? 'Setting up lighting, background and equipment' :
                   currentLanguage === 'de' ? 'Aufbau von Beleuchtung, Hintergrund und Ausrüstung' : 
                   currentLanguage === 'sq' ? 'Vendosja e ndriçimit, sfondit dhe pajisjeve' :
                   'Postavljanje osvetljenja, pozadine i opreme'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-500">3</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Fotografisanje' : 
                   currentLanguage === 'en' ? 'Photography' :
                   currentLanguage === 'de' ? 'Fotografie' : 
                   currentLanguage === 'sq' ? 'Fotografimi' :
                   'Fotografisanje'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Različiti uglovi, kompozicije i makro detalji' : 
                   currentLanguage === 'en' ? 'Different angles, compositions and macro details' :
                   currentLanguage === 'de' ? 'Verschiedene Winkel, Kompositionen und Makrodetails' : 
                   currentLanguage === 'sq' ? 'Kënd të ndryshëm, kompozime dhe detaje makro' :
                   'Različiti uglovi, kompozicije i makro detalji'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-500">4</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Post-produkcija' : 
                   currentLanguage === 'en' ? 'Post-production' :
                   currentLanguage === 'de' ? 'Nachbearbeitung' : 
                   currentLanguage === 'sq' ? 'Post-prodhimi' :
                   'Post-produkcija'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Photoshop obrada i optimizacija slika' : 
                   currentLanguage === 'en' ? 'Photoshop processing and image optimization' :
                   currentLanguage === 'de' ? 'Photoshop-Bearbeitung und Bildoptimierung' : 
                   currentLanguage === 'sq' ? 'Përpunimi i Photoshop dhe optimizimi i imazheve' :
                   'Photoshop obrada i optimizacija slika'}
                </p>
              </Card>
            </div>
          </div>

          {/* Lighting Techniques */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {currentLanguage === 'sr' ? 'Osvetljavanje i Tehnike' : 
               currentLanguage === 'en' ? 'Lighting and Techniques' :
               currentLanguage === 'de' ? 'Beleuchtung und Techniken' : 
               currentLanguage === 'sq' ? 'Ndriçimi dhe Teknikat' :
               'Osvetljavanje i Tehnike'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50">
                <h3 className="text-xl font-semibold mb-4">
                  {currentLanguage === 'sr' ? 'Studijsko Osvetljavanje' : 
                   currentLanguage === 'en' ? 'Studio Lighting' :
                   currentLanguage === 'de' ? 'Studiobeleuchtung' : 
                   currentLanguage === 'sq' ? 'Ndriçimi i Studios' :
                   'Studijsko Osvetljavanje'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Korištenjem različitih tehnika osvetljavanja kreiram fotografije koje ističu teksturu, boju i oblik proizvoda.' : 
                   currentLanguage === 'en' ? 'Using various lighting techniques, I create photographs that highlight the texture, color and shape of products.' :
                   currentLanguage === 'de' ? 'Mit verschiedenen Beleuchtungstechniken erstelle ich Fotografien, die Textur, Farbe und Form von Produkten hervorheben.' : 
                   currentLanguage === 'sq' ? 'Duke përdorur teknika të ndryshme ndriçimi, krijoj fotografi që theksojnë teksturën, ngjyrën dhe formën e produkteve.' :
                   'Korištenjem različitih tehnika osvetljavanja kreiram fotografije koje ističu teksturu, boju i oblik proizvoda.'}
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {currentLanguage === 'sr' ? 'Key light za glavno osvetljavanje' : 
                          currentLanguage === 'en' ? 'Key light for main illumination' :
                          currentLanguage === 'de' ? 'Key Light für Hauptbeleuchtung' : 
                          currentLanguage === 'sq' ? 'Drita kryesore për ndriçimin kryesor' :
                          'Key light za glavno osvetljavanje'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Fill light za smanjenje senki' : 
                          currentLanguage === 'en' ? 'Fill light for shadow reduction' :
                          currentLanguage === 'de' ? 'Fill Light zur Schattenreduzierung' : 
                          currentLanguage === 'sq' ? 'Drita plotësuese për reduktimin e hijes' :
                          'Fill light za smanjenje senki'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Back light za izdvajanje od pozadine' : 
                          currentLanguage === 'en' ? 'Back light for background separation' :
                          currentLanguage === 'de' ? 'Hintergrundlicht zur Trennung vom Hintergrund' : 
                          currentLanguage === 'sq' ? 'Drita e pasme për ndarjen nga sfondi' :
                          'Back light za izdvajanje od pozadine'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Difuzori za meko svetlo' : 
                          currentLanguage === 'en' ? 'Diffusers for soft light' :
                          currentLanguage === 'de' ? 'Diffusoren für weiches Licht' : 
                          currentLanguage === 'sq' ? 'Difuzorë për dritë të butë' :
                          'Difuzori za meko svetlo'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Reflektori za dodatno osvetljavanje' : 
                          currentLanguage === 'en' ? 'Reflectors for additional lighting' :
                          currentLanguage === 'de' ? 'Reflektoren für zusätzliche Beleuchtung' : 
                          currentLanguage === 'sq' ? 'Reflektorë për ndriçim shtesë' :
                          'Reflektori za dodatno osvetljavanje'}</li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-xl font-semibold mb-4">
                  {currentLanguage === 'sr' ? 'Kompozicija i Uglovi' : 
                   currentLanguage === 'en' ? 'Composition and Angles' :
                   currentLanguage === 'de' ? 'Komposition und Winkel' : 
                   currentLanguage === 'sq' ? 'Kompozimi dhe Këndet' :
                   'Kompozicija i Uglovi'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Kreativno pozicioniranje i različiti uglovi fotografisanja koji prikazuju proizvod iz najboljih perspektiva.' : 
                   currentLanguage === 'en' ? 'Creative positioning and different photography angles that showcase the product from the best perspectives.' :
                   currentLanguage === 'de' ? 'Kreative Positionierung und verschiedene Fotografiewinkel, die das Produkt aus den besten Perspektiven zeigen.' : 
                   currentLanguage === 'sq' ? 'Pozicionim kreativ dhe kënd të ndryshëm fotografimi që tregojnë produktin nga perspektivat më të mira.' :
                   'Kreativno pozicioniranje i različiti uglovi fotografisanja koji prikazuju proizvod iz najboljih perspektiva.'}
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {currentLanguage === 'sr' ? 'Hero shots za glavnu prezentaciju' : 
                          currentLanguage === 'en' ? 'Hero shots for main presentation' :
                          currentLanguage === 'de' ? 'Hero-Aufnahmen für die Hauptpräsentation' : 
                          currentLanguage === 'sq' ? 'Fotografi kryesore për prezantimin kryesor' :
                          'Hero shots za glavnu prezentaciju'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Detail makro fotografije' : 
                          currentLanguage === 'en' ? 'Detail macro photographs' :
                          currentLanguage === 'de' ? 'Detail-Makrofotografien' : 
                          currentLanguage === 'sq' ? 'Fotografi makro të detajeve' :
                          'Detail makro fotografije'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Lifestyle kontekstualne slike' : 
                          currentLanguage === 'en' ? 'Lifestyle contextual images' :
                          currentLanguage === 'de' ? 'Lifestyle-Kontextbilder' : 
                          currentLanguage === 'sq' ? 'Imazhe kontekstuale të stilit të jetesës' :
                          'Lifestyle kontekstualne slike'}</li>
                  <li>• {currentLanguage === 'sr' ? '360° rotacijski prikaz' : 
                          currentLanguage === 'en' ? '360° rotational view' :
                          currentLanguage === 'de' ? '360° Rotationsansicht' : 
                          currentLanguage === 'sq' ? 'Pamje rrotulluese 360°' :
                          '360° rotacijski prikaz'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Pakovanje i brendiranje' : 
                          currentLanguage === 'en' ? 'Packaging and branding' :
                          currentLanguage === 'de' ? 'Verpackung und Branding' : 
                          currentLanguage === 'sq' ? 'Paketimi dhe brandimi' :
                          'Pakovanje i brendiranje'}</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'sr' ? 'Vaši Proizvodi Zaslužuju Profesionalnu Prezentaciju!' : 
               currentLanguage === 'en' ? 'Your Products Deserve Professional Presentation!' :
               currentLanguage === 'de' ? 'Ihre Produkte verdienen eine professionelle Präsentation!' : 
               currentLanguage === 'sq' ? 'Produktet tuaja meritojnë prezantim profesional!' :
               'Vaši Proizvodi Zaslužuju Profesionalnu Prezentaciju!'}
            </h3>
            <p className="text-lg mb-6">
              {currentLanguage === 'sr' ? 'Kontaktirajte me za kreiranje impresivnih fotografija koje će povećati prodaju i istaći kvalitet vaših proizvoda.' : 
               currentLanguage === 'en' ? 'Contact me to create impressive photographs that will increase sales and highlight the quality of your products.' :
               currentLanguage === 'de' ? 'Kontaktieren Sie mich für die Erstellung beeindruckender Fotografien, die den Verkauf steigern und die Qualität Ihrer Produkte hervorheben.' : 
               currentLanguage === 'sq' ? 'Kontaktoni me për krijimin e fotografive impresionuese që do të rrisin shitjet dhe do të theksojnë cilësinë e produkteve tuaja.' :
               'Kontaktirajte me za kreiranje impresivnih fotografija koje će povećati prodaju i istaći kvalitet vaših proizvoda.'}
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-amber-500 hover:bg-gray-100">
                {currentLanguage === 'sr' ? 'Fotografišite Vaše Proizvode Profesionalno' : 
                 currentLanguage === 'en' ? 'Photograph Your Products Professionally' :
                 currentLanguage === 'de' ? 'Fotografieren Sie Ihre Produkte professionell' : 
                 currentLanguage === 'sq' ? 'Fotografoni Produktet tuaja Profesionalisht' :
                 'Fotografišite Vaše Proizvode Profesionalno'}
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