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
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-pink-900">
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
                 currentLanguage === 'sq' ? 'Kreu' :
                 'Početna'}
              </Button>
            </Link>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentLanguage === 'sr' ? 'Packaging Dizajn' : 
                 currentLanguage === 'en' ? 'Packaging Design' :
                 currentLanguage === 'de' ? 'Verpackungsdesign' : 
                 currentLanguage === 'sq' ? 'Dizajni i Paketimit' :
                 'Packaging Dizajn'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {currentLanguage === 'sr' ? 'Kreativna ambalažna rešenja' : 
                 currentLanguage === 'en' ? 'Creative packaging solutions' :
                 currentLanguage === 'de' ? 'Kreative Verpackungslösungen' : 
                 currentLanguage === 'sq' ? 'Zgjidhje kreative paketimi' :
                 'Kreativna ambalažna rešenja'}
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
            <Badge className="bg-pink-500 text-white">
              {currentLanguage === 'sr' ? 'Packaging' : 
               currentLanguage === 'en' ? 'Packaging' :
               currentLanguage === 'de' ? 'Verpackung' : 
               currentLanguage === 'sq' ? 'Paketimi' :
               'Packaging'}
            </Badge>
            <Badge className="bg-purple-500 text-white">
              {currentLanguage === 'sr' ? 'Dizajn' : 
               currentLanguage === 'en' ? 'Design' :
               currentLanguage === 'de' ? 'Design' : 
               currentLanguage === 'sq' ? 'Dizajni' :
               'Dizajn'}
            </Badge>
            <Badge className="bg-orange-500 text-white">
              {currentLanguage === 'sr' ? 'Brending' : 
               currentLanguage === 'en' ? 'Branding' :
               currentLanguage === 'de' ? 'Branding' : 
               currentLanguage === 'sq' ? 'Brandimi' :
               'Brending'}
            </Badge>
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
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {currentLanguage === 'sr' ? 'Kreativni Packaging Dizajn koji Privlači Pažnju' : 
                 currentLanguage === 'en' ? 'Creative Packaging Design that Attracts Attention' :
                 currentLanguage === 'de' ? 'Kreatives Verpackungsdesign, das Aufmerksamkeit erregt' : 
                 currentLanguage === 'sq' ? 'Dizajn Kreativ Paketimi që Tërheq Vëmendjen' :
                 'Kreativni Packaging Dizajn koji Privlači Pažnju'}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {currentLanguage === 'sr' ? 'Kreiram inovativna ambalažna rešenja koja ne samo što štite proizvod, već i pričaju priču vašeg brenda. Od luksuznih kutija za sminku do elegantnih flašica za parfem, svaki dizajn je pažljivo osmišljen da maksimizuje vizuelni uticaj i poboljša korisničko iskustvo.' : 
                 currentLanguage === 'en' ? 'I create innovative packaging solutions that not only protect the product, but also tell your brand story. From luxury makeup boxes to elegant perfume bottles, each design is carefully crafted to maximize visual impact and improve user experience.' :
                 currentLanguage === 'de' ? 'Ich entwickle innovative Verpackungslösungen, die nicht nur das Produkt schützen, sondern auch die Geschichte Ihrer Marke erzählen. Von luxuriösen Make-up-Boxen bis hin zu eleganten Parfümflaschen ist jedes Design sorgfältig durchdacht, um die visuelle Wirkung zu maximieren und die Benutzererfahrung zu verbessern.' : 
                 currentLanguage === 'sq' ? 'Krijoj zgjidhje inovative paketimi që jo vetëm mbrojnë produktin, por edhe tregojnë historinë e markës suaj. Nga kutitë luksoze të makeup-it te shishet elegante parfumi, çdo dizajn është menduar me kujdes për të maksimizuar impaktin vizual dhe përmirësuar përvojën e përdoruesit.' :
                 'Kreiram inovativna ambalažna rešenja koja ne samo što štite proizvod, već i pričaju priču vašeg brenda. Od luksuznih kutija za sminku do elegantnih flašica za parfem, svaki dizajn je pažljivo osmišljen da maksimizuje vizuelni uticaj i poboljša korisničko iskustvo.'}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="w-6 h-6 text-pink-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Strukturni Dizajn' : 
                       currentLanguage === 'en' ? 'Structural Design' :
                       currentLanguage === 'de' ? 'Strukturelles Design' : 
                       currentLanguage === 'sq' ? 'Dizajni Strukturor' :
                       'Strukturni Dizajn'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Kreiranje funkcionalnih i estetski privlačnih formi kutija, flašica i drugih ambalažnih rešenja.' : 
                     currentLanguage === 'en' ? 'Creating functional and aesthetically appealing forms of boxes, bottles and other packaging solutions.' :
                     currentLanguage === 'de' ? 'Schaffung funktionaler und ästhetisch ansprechender Formen von Boxen, Flaschen und anderen Verpackungslösungen.' : 
                     currentLanguage === 'sq' ? 'Krijimi i formave funksionale dhe estetikisht tërheqëse të kutive, shisheve dhe zgjidhjeve të tjera paketimi.' :
                     'Kreiranje funkcionalnih i estetski privlačnih formi kutija, flašica i drugih ambalažnih rešenja.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Vizuelni Identitet' : 
                       currentLanguage === 'en' ? 'Visual Identity' :
                       currentLanguage === 'de' ? 'Visuelle Identität' : 
                       currentLanguage === 'sq' ? 'Identiteti Vizual' :
                       'Vizuelni Identitet'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Integracija brend elemenata, tipografije i color palette-e za konzistentnu vizuelnu komunikaciju.' : 
                     currentLanguage === 'en' ? 'Integration of brand elements, typography and color palette for consistent visual communication.' :
                     currentLanguage === 'de' ? 'Integration von Markenelementen, Typografie und Farbpalette für konsistente visuelle Kommunikation.' : 
                     currentLanguage === 'sq' ? 'Integrimi i elementeve të markës, tipografisë dhe paletës së ngjyrave për komunikim vizual të qëndrueshëm.' :
                     'Integracija brend elemenata, tipografije i color palette-e za konzistentnu vizuelnu komunikaciju.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Premium Finishing' : 
                       currentLanguage === 'en' ? 'Premium Finishing' :
                       currentLanguage === 'de' ? 'Premium-Veredelung' : 
                       currentLanguage === 'sq' ? 'Përfundimi Premium' :
                       'Premium Finishing'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Specijalni efekti kao što su foil stampa, embossing, spot UV lakiranje i druge luksuzne tehnike.' : 
                     currentLanguage === 'en' ? 'Special effects such as foil stamping, embossing, spot UV coating and other luxury techniques.' :
                     currentLanguage === 'de' ? 'Spezialeffekte wie Folienstempelung, Prägung, Spot-UV-Beschichtung und andere Luxustechniken.' : 
                     currentLanguage === 'sq' ? 'Efekte speciale si damgosja me folie, reliefi, veshja spot UV dhe teknika të tjera luksoze.' :
                     'Specijalni efekti kao što su foil stampa, embossing, spot UV lakiranje i druge luksuzne tehnike.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Shelf Appeal' : 
                       currentLanguage === 'en' ? 'Shelf Appeal' :
                       currentLanguage === 'de' ? 'Regal-Ausstrahlung' : 
                       currentLanguage === 'sq' ? 'Tërheqja në Raft' :
                       'Shelf Appeal'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Dizajn koji se izdvaja na policama i privlači pogledu kupaca u prodavnicama i online.' : 
                     currentLanguage === 'en' ? 'Design that stands out on shelves and attracts customers\' attention in stores and online.' :
                     currentLanguage === 'de' ? 'Design, das in den Regalen auffällt und die Aufmerksamkeit der Kunden in Geschäften und online auf sich zieht.' : 
                     currentLanguage === 'sq' ? 'Dizajn që dallon në raftet dhe tërheq vëmendjen e klientëve në dyqane dhe online.' :
                     'Dizajn koji se izdvaja na policama i privlači pogledu kupaca u prodavnicama i online.'}
                  </p>
                </Card>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">
                  {currentLanguage === 'sr' ? 'Detalji Projekta' : 
                   currentLanguage === 'en' ? 'Project Details' :
                   currentLanguage === 'de' ? 'Projektdetails' : 
                   currentLanguage === 'sq' ? 'Detajet e Projektit' :
                   'Detalji Projekta'}
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
                    <p className="text-gray-600">Packaging Design</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Industrije' : 
                       currentLanguage === 'en' ? 'Industries' :
                       currentLanguage === 'de' ? 'Branchen' : 
                       currentLanguage === 'sq' ? 'Industritë' :
                       'Industrije'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">
                        {currentLanguage === 'sr' ? 'Kozmetika' : 
                         currentLanguage === 'en' ? 'Cosmetics' :
                         currentLanguage === 'de' ? 'Kosmetik' : 
                         currentLanguage === 'sq' ? 'Kozmetika' :
                         'Kozmetika'}
                      </Badge>
                      <Badge variant="outline">
                        {currentLanguage === 'sr' ? 'Parfemi' : 
                         currentLanguage === 'en' ? 'Perfumes' :
                         currentLanguage === 'de' ? 'Parfums' : 
                         currentLanguage === 'sq' ? 'Parfume' :
                         'Parfemi'}
                      </Badge>
                      <Badge variant="outline">
                        {currentLanguage === 'sr' ? 'Luksuz' : 
                         currentLanguage === 'en' ? 'Luxury' :
                         currentLanguage === 'de' ? 'Luxus' : 
                         currentLanguage === 'sq' ? 'Luksi' :
                         'Luksuz'}
                      </Badge>
                      <Badge variant="outline">
                        {currentLanguage === 'sr' ? 'Hrana' : 
                         currentLanguage === 'en' ? 'Food' :
                         currentLanguage === 'de' ? 'Lebensmittel' : 
                         currentLanguage === 'sq' ? 'Ushqim' :
                         'Hrana'}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Tipovi Ambalaze' : 
                       currentLanguage === 'en' ? 'Package Types' :
                       currentLanguage === 'de' ? 'Verpackungstypen' : 
                       currentLanguage === 'sq' ? 'Llojet e Paketimit' :
                       'Tipovi Ambalaze'}
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• {currentLanguage === 'sr' ? 'Kutije za sminku i kozmetiku' : 
                             currentLanguage === 'en' ? 'Makeup and cosmetic boxes' :
                             currentLanguage === 'de' ? 'Make-up- und Kosmetikboxen' : 
                             currentLanguage === 'sq' ? 'Kutitë e makeup-it dhe kozmetikës' :
                             'Kutije za sminku i kozmetiku'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Flašice za parfeme' : 
                             currentLanguage === 'en' ? 'Perfume bottles' :
                             currentLanguage === 'de' ? 'Parfümflaschen' : 
                             currentLanguage === 'sq' ? 'Shishe parfumi' :
                             'Flašice za parfeme'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Luksuzne gift kutije' : 
                             currentLanguage === 'en' ? 'Luxury gift boxes' :
                             currentLanguage === 'de' ? 'Luxus-Geschenkboxen' : 
                             currentLanguage === 'sq' ? 'Kutitë luksoze dhuratash' :
                             'Luksuzne gift kutije'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Food packaging' : 
                             currentLanguage === 'en' ? 'Food packaging' :
                             currentLanguage === 'de' ? 'Lebensmittelverpackung' : 
                             currentLanguage === 'sq' ? 'Paketimi i ushqimit' :
                             'Food packaging'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Tube i ampule' : 
                             currentLanguage === 'en' ? 'Tubes and ampoules' :
                             currentLanguage === 'de' ? 'Tuben und Ampullen' : 
                             currentLanguage === 'sq' ? 'Tuba dhe ampula' :
                             'Tube i ampule'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Shopping bags' : 
                             currentLanguage === 'en' ? 'Shopping bags' :
                             currentLanguage === 'de' ? 'Einkaufstaschen' : 
                             currentLanguage === 'sq' ? 'Qese blerjesh' :
                             'Shopping bags'}</li>
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
                      <li>• {currentLanguage === 'sr' ? '3D mockup vizualizacije' : 
                             currentLanguage === 'en' ? '3D mockup visualizations' :
                             currentLanguage === 'de' ? '3D-Mockup-Visualisierungen' : 
                             currentLanguage === 'sq' ? 'Vizualizime 3D mockup' :
                             '3D mockup vizualizacije'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Tehnički crteži za produkciju' : 
                             currentLanguage === 'en' ? 'Technical drawings for production' :
                             currentLanguage === 'de' ? 'Technische Zeichnungen für die Produktion' : 
                             currentLanguage === 'sq' ? 'Vizatime teknike për prodhim' :
                             'Tehnički crteži za produkciju'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Print-ready file-ovi' : 
                             currentLanguage === 'en' ? 'Print-ready files' :
                             currentLanguage === 'de' ? 'Druckfertige Dateien' : 
                             currentLanguage === 'sq' ? 'Dosje të gatshme për printim' :
                             'Print-ready file-ovi'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Materijal specifikacije' : 
                             currentLanguage === 'en' ? 'Material specifications' :
                             currentLanguage === 'de' ? 'Materialspezifikationen' : 
                             currentLanguage === 'sq' ? 'Specifikimet e materialit' :
                             'Materijal specifikacije'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Brend guidelines' : 
                             currentLanguage === 'en' ? 'Brand guidelines' :
                             currentLanguage === 'de' ? 'Markenrichtlinien' : 
                             currentLanguage === 'sq' ? 'Udhëzime të markës' :
                             'Brend guidelines'}</li>
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
                          {currentLanguage === 'sr' ? '55% povećanje prodaje' : 
                           currentLanguage === 'en' ? '55% increase in sales' :
                           currentLanguage === 'de' ? '55% Umsatzsteigerung' : 
                           currentLanguage === 'sq' ? '55% rritje e shitjeve' :
                           '55% povećanje prodaje'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? 'Veće prepoznavanje brenda' : 
                           currentLanguage === 'en' ? 'Greater brand recognition' :
                           currentLanguage === 'de' ? 'Größere Markenbekanntheit' : 
                           currentLanguage === 'sq' ? 'Njohje më e madhe e markës' :
                           'Veće prepoznavanje brenda'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-pink-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? 'Premium pozicioniranje' : 
                           currentLanguage === 'en' ? 'Premium positioning' :
                           currentLanguage === 'de' ? 'Premium-Positionierung' : 
                           currentLanguage === 'sq' ? 'Pozicionim premium' :
                           'Premium pozicioniranje'}
                        </span>
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
              {currentLanguage === 'sr' ? 'Portfolio Packaging Rešenja' : 
               currentLanguage === 'en' ? 'Packaging Solutions Portfolio' :
               currentLanguage === 'de' ? 'Verpackungslösungen Portfolio' : 
               currentLanguage === 'sq' ? 'Portfolioja e Zgjidhjeve të Paketimit' :
               'Portfolio Packaging Rešenja'}
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
              {currentLanguage === 'sr' ? 'Kategorije Packaging Dizajna' : 
               currentLanguage === 'en' ? 'Packaging Design Categories' :
               currentLanguage === 'de' ? 'Verpackungsdesign-Kategorien' : 
               currentLanguage === 'sq' ? 'Kategoritë e Dizajnit të Paketimit' :
               'Kategorije Packaging Dizajna'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {currentLanguage === 'sr' ? 'Luksuzna Kozmetika' : 
                     currentLanguage === 'en' ? 'Luxury Cosmetics' :
                     currentLanguage === 'de' ? 'Luxus-Kosmetik' : 
                     currentLanguage === 'sq' ? 'Kozmetika Luksoze' :
                     'Luksuzna Kozmetika'}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Elegantni packaging za premium kozmetiku, sminku i parfeme sa naprednim finishing tehnikama.' : 
                   currentLanguage === 'en' ? 'Elegant packaging for premium cosmetics, makeup and perfumes with advanced finishing techniques.' :
                   currentLanguage === 'de' ? 'Elegante Verpackungen für Premium-Kosmetik, Make-up und Parfums mit fortschrittlichen Veredelungstechniken.' : 
                   currentLanguage === 'sq' ? 'Paketim elegant për kozmetikë premium, makeup dhe parfume me teknika të avancuara përfundimi.' :
                   'Elegantni packaging za premium kozmetiku, sminku i parfeme sa naprednim finishing tehnikama.'}
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• {currentLanguage === 'sr' ? 'Premium kutije sa magnetic closure' : 
                          currentLanguage === 'en' ? 'Premium boxes with magnetic closure' :
                          currentLanguage === 'de' ? 'Premium-Boxen mit Magnetverschluss' : 
                          currentLanguage === 'sq' ? 'Kutitë premium me mbyllje magnetike' :
                          'Premium kutije sa magnetic closure'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Flašice sa custom shape dizajnom' : 
                          currentLanguage === 'en' ? 'Bottles with custom shape design' :
                          currentLanguage === 'de' ? 'Flaschen mit individuellem Formdesign' : 
                          currentLanguage === 'sq' ? 'Shishe me dizajn forme të personalizuar' :
                          'Flašice sa custom shape dizajnom'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Foil stampa i embossing' : 
                          currentLanguage === 'en' ? 'Foil stamping and embossing' :
                          currentLanguage === 'de' ? 'Folienstempelung und Prägung' : 
                          currentLanguage === 'sq' ? 'Damgosja me folie dhe relievi' :
                          'Foil stampa i embossing'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Soft-touch coating' : 
                          currentLanguage === 'en' ? 'Soft-touch coating' :
                          currentLanguage === 'de' ? 'Soft-Touch-Beschichtung' : 
                          currentLanguage === 'sq' ? 'Veshje soft-touch' :
                          'Soft-touch coating'}</li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {currentLanguage === 'sr' ? 'Food & Beverage' : 
                     currentLanguage === 'en' ? 'Food & Beverage' :
                     currentLanguage === 'de' ? 'Lebensmittel & Getränke' : 
                     currentLanguage === 'sq' ? 'Ushqim & Pije' :
                     'Food & Beverage'}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Funkcionalna i privlačna ambalažna rešenja za hranu i piće koja čuvaju svežinu i privlače kupce.' : 
                   currentLanguage === 'en' ? 'Functional and attractive packaging solutions for food and beverages that preserve freshness and attract customers.' :
                   currentLanguage === 'de' ? 'Funktionale und attraktive Verpackungslösungen für Lebensmittel und Getränke, die Frische bewahren und Kunden anziehen.' : 
                   currentLanguage === 'sq' ? 'Zgjidhje paketimi funksionale dhe tërheqëse për ushqim dhe pije që ruajnë freskësinë dhe tërheqin klientët.' :
                   'Funkcionalna i privlačna ambalažna rešenja za hranu i piće koja čuvaju svežinu i privlače kupce.'}
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• {currentLanguage === 'sr' ? 'Eco-friendly materijali' : 
                          currentLanguage === 'en' ? 'Eco-friendly materials' :
                          currentLanguage === 'de' ? 'Umweltfreundliche Materialien' : 
                          currentLanguage === 'sq' ? 'Materiale miqësore ndaj mjedisit' :
                          'Eco-friendly materijali'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Resealable packaging' : 
                          currentLanguage === 'en' ? 'Resealable packaging' :
                          currentLanguage === 'de' ? 'Wiederverschließbare Verpackung' : 
                          currentLanguage === 'sq' ? 'Paketim i rimb yllshëm' :
                          'Resealable packaging'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Temperature resistant dizajn' : 
                          currentLanguage === 'en' ? 'Temperature resistant design' :
                          currentLanguage === 'de' ? 'Temperaturbeständiges Design' : 
                          currentLanguage === 'sq' ? 'Dizajn rezistent ndaj temperaturës' :
                          'Temperature resistant dizajn'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Clear product visibility' : 
                          currentLanguage === 'en' ? 'Clear product visibility' :
                          currentLanguage === 'de' ? 'Klare Produktsichtbarkeit' : 
                          currentLanguage === 'sq' ? 'Dukshmëri e qartë e produktit' :
                          'Clear product visibility'}</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Design Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {currentLanguage === 'sr' ? 'Kreativni Proces Packaging Dizajna' : 
               currentLanguage === 'en' ? 'Creative Packaging Design Process' :
               currentLanguage === 'de' ? 'Kreativer Verpackungsdesign-Prozess' : 
               currentLanguage === 'sq' ? 'Procesi Kreativ i Dizajnit të Paketimit' :
               'Kreativni Proces Packaging Dizajna'}
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-500">1</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Research' : 
                   currentLanguage === 'en' ? 'Research' :
                   currentLanguage === 'de' ? 'Forschung' : 
                   currentLanguage === 'sq' ? 'Hulumtimi' :
                   'Research'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Market analiza i konkurentska situacija' : 
                   currentLanguage === 'en' ? 'Market analysis and competitive situation' :
                   currentLanguage === 'de' ? 'Marktanalyse und Wettbewerbssituation' : 
                   currentLanguage === 'sq' ? 'Analiza e tregut dhe situata konkurruese' :
                   'Market analiza i konkurentska situacija'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-500">2</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Concept' : 
                   currentLanguage === 'en' ? 'Concept' :
                   currentLanguage === 'de' ? 'Konzept' : 
                   currentLanguage === 'sq' ? 'Koncepti' :
                   'Concept'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Kreiranje koncepta i početnih skica' : 
                   currentLanguage === 'en' ? 'Creating concepts and initial sketches' :
                   currentLanguage === 'de' ? 'Konzept- und Erstskizzenerstellung' : 
                   currentLanguage === 'sq' ? 'Krijimi i koncepteve dhe skicave fillestare' :
                   'Kreiranje koncepta i početnih skica'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-500">3</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Design' : 
                   currentLanguage === 'en' ? 'Design' :
                   currentLanguage === 'de' ? 'Design' : 
                   currentLanguage === 'sq' ? 'Dizajni' :
                   'Design'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Digitalni dizajn i tipografija' : 
                   currentLanguage === 'en' ? 'Digital design and typography' :
                   currentLanguage === 'de' ? 'Digitales Design und Typografie' : 
                   currentLanguage === 'sq' ? 'Dizajni dixhital dhe tipografia' :
                   'Digitalni dizajn i tipografija'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">4</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? '3D Mockup' : 
                   currentLanguage === 'en' ? '3D Mockup' :
                   currentLanguage === 'de' ? '3D-Mockup' : 
                   currentLanguage === 'sq' ? '3D Mockup' :
                   '3D Mockup'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Realistične vizualizacije proizvoda' : 
                   currentLanguage === 'en' ? 'Realistic product visualizations' :
                   currentLanguage === 'de' ? 'Realistische Produktvisualisierungen' : 
                   currentLanguage === 'sq' ? 'Vizualizime realiste produktesh' :
                   'Realistične vizualizacije proizvoda'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-500">5</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Production' : 
                   currentLanguage === 'en' ? 'Production' :
                   currentLanguage === 'de' ? 'Produktion' : 
                   currentLanguage === 'sq' ? 'Prodhimi' :
                   'Production'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Priprema za štampu i produkciju' : 
                   currentLanguage === 'en' ? 'Preparation for printing and production' :
                   currentLanguage === 'de' ? 'Vorbereitung für Druck und Produktion' : 
                   currentLanguage === 'sq' ? 'Përgatitja për printim dhe prodhim' :
                   'Priprema za štampu i produkciju'}
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'sr' ? 'Vaš Proizvod Zaslužuje Izuzetnu Ambalažu!' : 
               currentLanguage === 'en' ? 'Your Product Deserves Exceptional Packaging!' :
               currentLanguage === 'de' ? 'Ihr Produkt verdient außergewöhnliche Verpackung!' : 
               currentLanguage === 'sq' ? 'Produkti juaj meriton paketim të jashtëzakonshëm!' :
               'Vaš Proizvod Zaslužuje Izuzetnu Ambalažu!'}
            </h3>
            <p className="text-lg mb-6">
              {currentLanguage === 'sr' ? 'Kontaktirajte me za kreiranje packaging dizajna koji će izdvojiti vaš proizvod na tržištu i povećati prodaju.' : 
               currentLanguage === 'en' ? 'Contact me to create packaging design that will make your product stand out in the market and increase sales.' :
               currentLanguage === 'de' ? 'Kontaktieren Sie mich, um ein Verpackungsdesign zu erstellen, das Ihr Produkt am Markt hervorhebt und den Umsatz steigert.' : 
               currentLanguage === 'sq' ? 'Më kontaktoni për të krijuar dizajn paketimi që do ta bëjë produktin tuaj të dallohet në treg dhe të rrisë shitjet.' :
               'Kontaktirajte me za kreiranje packaging dizajna koji će izdvojiti vaš proizvod na tržištu i povećati prodaju.'}
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-pink-500 hover:bg-gray-100">
                {currentLanguage === 'sr' ? 'Kreiraj Moj Packaging Dizajn' : 
                 currentLanguage === 'en' ? 'Create My Packaging Design' :
                 currentLanguage === 'de' ? 'Mein Verpackungsdesign erstellen' : 
                 currentLanguage === 'sq' ? 'Krijo Dizajnin Tim të Paketimit' :
                 'Kreiraj Moj Packaging Dizajn'}
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