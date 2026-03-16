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
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentLanguage === 'sr' ? 'Brend Identitet' : 
                 currentLanguage === 'en' ? 'Brand Identity' :
                 currentLanguage === 'de' ? 'Markenidentität' : 
                 currentLanguage === 'sq' ? 'Identiteti i Markës' :
                 'Brend Identitet'}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {currentLanguage === 'sr' ? 'Kompletan vizuelni identitet za startup' : 
                 currentLanguage === 'en' ? 'Complete visual identity for startup' :
                 currentLanguage === 'de' ? 'Vollständige visuelle Identität für Startup' : 
                 currentLanguage === 'sq' ? 'Identitet vizual i plotë për startup' :
                 'Kompletan vizuelni identitet za startup'}
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
            <Badge className="bg-purple-500 text-white">
              {currentLanguage === 'sr' ? 'Brending' : 
               currentLanguage === 'en' ? 'Branding' :
               currentLanguage === 'de' ? 'Branding' : 
               currentLanguage === 'sq' ? 'Branding' :
               'Brending'}
            </Badge>
            <Badge className="bg-pink-500 text-white">
              {currentLanguage === 'sr' ? 'Logo Dizajn' : 
               currentLanguage === 'en' ? 'Logo Design' :
               currentLanguage === 'de' ? 'Logo-Design' : 
               currentLanguage === 'sq' ? 'Dizajn Logo' :
               'Logo Dizajn'}
            </Badge>
            <Badge className="bg-blue-500 text-white">
              {currentLanguage === 'sr' ? 'Vizuelni Identitet' : 
               currentLanguage === 'en' ? 'Visual Identity' :
               currentLanguage === 'de' ? 'Visuelle Identität' : 
               currentLanguage === 'sq' ? 'Identiteti Vizual' :
               'Vizuelni Identitet'}
            </Badge>
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
                {currentLanguage === 'sr' ? 'Kreiranje Kompletnog Brendovskog Identiteta' : 
                 currentLanguage === 'en' ? 'Creating Complete Brand Identity' :
                 currentLanguage === 'de' ? 'Vollständige Markenidentität erstellen' : 
                 currentLanguage === 'sq' ? 'Krijimi i identitetit të plotë të markës' :
                 'Kreiranje Kompletnog Brendovskog Identiteta'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {currentLanguage === 'sr' ? 'Razvijam jedinstvene vizuelne identitete koji odražavaju vrednosti, misiju i viziju vašeg brenda. Od logo dizajna do kompletnog brend bukova, kreiram koherentan identitet koji se izdvaja na tržištu i ostaje u sećanju korisnika.' : 
                 currentLanguage === 'en' ? 'I develop unique visual identities that reflect your brand\'s values, mission and vision. From logo design to complete brand books, I create coherent identity that stands out in the market and stays in users\' memory.' :
                 currentLanguage === 'de' ? 'Ich entwickle einzigartige visuelle Identitäten, die die Werte, Mission und Vision Ihrer Marke widerspiegeln. Vom Logo-Design bis hin zu vollständigen Brand Books erstelle ich eine kohärente Identität, die sich auf dem Markt abhebt und im Gedächtnis der Nutzer bleibt.' : 
                 currentLanguage === 'sq' ? 'Zhvilloj identitete unike vizuale që pasqyrojnë vlerat, misionin dhe vizionin e markës suaj. Nga dizajni i logos deri tek librat e plotë të markës, krijoj identitet koherent që dallon në treg dhe mbetet në kujtesën e përdoruesve.' :
                 'Razvijam jedinstvene vizuelne identitete koji odražavaju vrednosti, misiju i viziju vašeg brenda. Od logo dizajna do kompletnog brend bukova, kreiram koherentan identitet koji se izdvaja na tržištu i ostaje u sećanju korisnika.'}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Logo Kreacija' : 
                       currentLanguage === 'en' ? 'Logo Creation' :
                       currentLanguage === 'de' ? 'Logo-Erstellung' : 
                       currentLanguage === 'sq' ? 'Krijimi i Logos' :
                       'Logo Kreacija'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Jedinstveni logotipi koji predstavljaju suštinu brenda kroz simboliku, tipografiju i boje.' : 
                     currentLanguage === 'en' ? 'Unique logos that represent the essence of the brand through symbolism, typography and colors.' :
                     currentLanguage === 'de' ? 'Einzigartige Logos, die das Wesen der Marke durch Symbolik, Typografie und Farben repräsentieren.' : 
                     currentLanguage === 'sq' ? 'Logo unike që përfaqësojnë thelbin e markës përmes simbolikës, tipografisë dhe ngjyrave.' :
                     'Jedinstveni logotipi koji predstavljaju suštinu brenda kroz simboliku, tipografiju i boje.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-pink-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Color Palette' : 
                       currentLanguage === 'en' ? 'Color Palette' :
                       currentLanguage === 'de' ? 'Farbpalette' : 
                       currentLanguage === 'sq' ? 'Paleta e Ngjyrave' :
                       'Color Palette'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Pažljivo odabrane boje koje prenose emocije i vrednosti brenda kroz sve marketing materijale.' : 
                     currentLanguage === 'en' ? 'Carefully selected colors that convey emotions and brand values through all marketing materials.' :
                     currentLanguage === 'de' ? 'Sorgfältig ausgewählte Farben, die Emotionen und Markenwerte durch alle Marketingmaterialien vermitteln.' : 
                     currentLanguage === 'sq' ? 'Ngjyra të përzgjedhura me kujdes që përçojnë emocione dhe vlerat e markës në të gjitha materialet marketingu.' :
                     'Pažljivo odabrane boje koje prenose emocije i vrednosti brenda kroz sve marketing materijale.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Vizuelni Stil' : 
                       currentLanguage === 'en' ? 'Visual Style' :
                       currentLanguage === 'de' ? 'Visueller Stil' : 
                       currentLanguage === 'sq' ? 'Stili Vizual' :
                       'Vizuelni Stil'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Konzistentan vizuelni jezik kroz tipografiju, ikonografiju i kompoziciju.' : 
                     currentLanguage === 'en' ? 'Consistent visual language through typography, iconography and composition.' :
                     currentLanguage === 'de' ? 'Konsistente visuelle Sprache durch Typografie, Ikonografie und Komposition.' : 
                     currentLanguage === 'sq' ? 'Gjuhë vizuale e qëndrueshme përmes tipografisë, ikonografisë dhe kompozicionit.' :
                     'Konzistentan vizuelni jezik kroz tipografiju, ikonografiju i kompoziciju.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Brand Guidelines' : 
                       currentLanguage === 'en' ? 'Brand Guidelines' :
                       currentLanguage === 'de' ? 'Marken-Richtlinien' : 
                       currentLanguage === 'sq' ? 'Udhëzimet e Markës' :
                       'Brand Guidelines'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Detaljan brend bukvar sa pravilima korišćenja za održavanje konzistentnosti.' : 
                     currentLanguage === 'en' ? 'Detailed brand book with usage rules for maintaining consistency.' :
                     currentLanguage === 'de' ? 'Detailliertes Markenbuch mit Verwendungsregeln zur Erhaltung der Konsistenz.' : 
                     currentLanguage === 'sq' ? 'Libër i detajuar i markës me rregulla përdorimi për ruajtjen e qëndrueshmërisë.' :
                     'Detaljan brend bukvar sa pravilima korišćenja za održavanje konzistentnosti.'}
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
                    <p className="text-gray-600">
                      {currentLanguage === 'sr' ? 'Brend Identitet' : 
                       currentLanguage === 'en' ? 'Brand Identity' :
                       currentLanguage === 'de' ? 'Markenidentität' : 
                       currentLanguage === 'sq' ? 'Identiteti i Markës' :
                       'Brend Identitet'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Industrija' : 
                       currentLanguage === 'en' ? 'Industry' :
                       currentLanguage === 'de' ? 'Branche' : 
                       currentLanguage === 'sq' ? 'Industria' :
                       'Industrija'}
                    </h4>
                    <p className="text-gray-600">
                      {currentLanguage === 'sr' ? 'Technology Startup' : 
                       currentLanguage === 'en' ? 'Technology Startup' :
                       currentLanguage === 'de' ? 'Technologie-Startup' : 
                       currentLanguage === 'sq' ? 'Startup Teknologjie' :
                       'Technology Startup'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Isporuka' : 
                       currentLanguage === 'en' ? 'Deliverables' :
                       currentLanguage === 'de' ? 'Lieferungen' : 
                       currentLanguage === 'sq' ? 'Dorëzimet' :
                       'Isporuka'}
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• {currentLanguage === 'sr' ? 'Logo dizajn (5 koncepata)' : 
                             currentLanguage === 'en' ? 'Logo design (5 concepts)' :
                             currentLanguage === 'de' ? 'Logo-Design (5 Konzepte)' : 
                             currentLanguage === 'sq' ? 'Dizajni i logos (5 koncepte)' :
                             'Logo dizajn (5 koncepata)'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Color palette' : 
                             currentLanguage === 'en' ? 'Color palette' :
                             currentLanguage === 'de' ? 'Farbpalette' : 
                             currentLanguage === 'sq' ? 'Paleta e ngjyrave' :
                             'Color palette'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Tipografija' : 
                             currentLanguage === 'en' ? 'Typography' :
                             currentLanguage === 'de' ? 'Typografie' : 
                             currentLanguage === 'sq' ? 'Tipografia' :
                             'Tipografija'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Ikone i piktogrami' : 
                             currentLanguage === 'en' ? 'Icons and pictograms' :
                             currentLanguage === 'de' ? 'Icons und Piktogramme' : 
                             currentLanguage === 'sq' ? 'Ikona dhe piktograme' :
                             'Ikone i piktogrami'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Vizitka dizajn' : 
                             currentLanguage === 'en' ? 'Business card design' :
                             currentLanguage === 'de' ? 'Visitenkarten-Design' : 
                             currentLanguage === 'sq' ? 'Dizajni i kartës së vizitës' :
                             'Vizitka dizajn'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Letterhead template' : 
                             currentLanguage === 'en' ? 'Letterhead template' :
                             currentLanguage === 'de' ? 'Briefkopf-Vorlage' : 
                             currentLanguage === 'sq' ? 'Modeli i kokës së letrës' :
                             'Letterhead template'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Social media templates' : 
                             currentLanguage === 'en' ? 'Social media templates' :
                             currentLanguage === 'de' ? 'Social Media Vorlagen' : 
                             currentLanguage === 'sq' ? 'Modelet e mediave sociale' :
                             'Social media templates'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Brand Guidelines PDF' : 
                             currentLanguage === 'en' ? 'Brand Guidelines PDF' :
                             currentLanguage === 'de' ? 'Marken-Richtlinien PDF' : 
                             currentLanguage === 'sq' ? 'PDF i udhëzimeve të markës' :
                             'Brand Guidelines PDF'}</li>
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
                          {currentLanguage === 'sr' ? '60% bolje prepoznavanje brenda' : 
                           currentLanguage === 'en' ? '60% better brand recognition' :
                           currentLanguage === 'de' ? '60% bessere Markenerkennung' : 
                           currentLanguage === 'sq' ? '60% më shumë njohje e markës' :
                           '60% bolje prepoznavanje brenda'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? '45% više engagement-a' : 
                           currentLanguage === 'en' ? '45% more engagement' :
                           currentLanguage === 'de' ? '45% mehr Engagement' : 
                           currentLanguage === 'sq' ? '45% më shumë angazhim' :
                           '45% više engagement-a'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? 'Konzistentan omni-channel identitet' : 
                           currentLanguage === 'en' ? 'Consistent omni-channel identity' :
                           currentLanguage === 'de' ? 'Konsistente Omni-Channel-Identität' : 
                           currentLanguage === 'sq' ? 'Identitet i qëndrueshëm omni-channel' :
                           'Konzistentan omni-channel identitet'}
                        </span>
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
              {currentLanguage === 'sr' ? 'Brend Elementi' : 
               currentLanguage === 'en' ? 'Brand Elements' :
               currentLanguage === 'de' ? 'Markenelemente' : 
               currentLanguage === 'sq' ? 'Elementet e Markës' :
               'Brend Elementi'}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Logo Mark' : 
                   currentLanguage === 'en' ? 'Logo Mark' :
                   currentLanguage === 'de' ? 'Logo-Zeichen' : 
                   currentLanguage === 'sq' ? 'Shenja Logo' :
                   'Logo Mark'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Simboličko predstavljanje brenda' : 
                   currentLanguage === 'en' ? 'Symbolic brand representation' :
                   currentLanguage === 'de' ? 'Symbolische Markendarstellung' : 
                   currentLanguage === 'sq' ? 'Përfaqësim simbolik i markës' :
                   'Simboličko predstavljanje brenda'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Boje' : 
                   currentLanguage === 'en' ? 'Colors' :
                   currentLanguage === 'de' ? 'Farben' : 
                   currentLanguage === 'sq' ? 'Ngjyrat' :
                   'Boje'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Primarna i sekundarna paleta' : 
                   currentLanguage === 'en' ? 'Primary and secondary palette' :
                   currentLanguage === 'de' ? 'Primäre und sekundäre Palette' : 
                   currentLanguage === 'sq' ? 'Paleta primare dhe sekondare' :
                   'Primarna i sekundarna paleta'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  Aa
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Tipografija' : 
                   currentLanguage === 'en' ? 'Typography' :
                   currentLanguage === 'de' ? 'Typografie' : 
                   currentLanguage === 'sq' ? 'Tipografia' :
                   'Tipografija'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Primarni i sekundarni fontovi' : 
                   currentLanguage === 'en' ? 'Primary and secondary fonts' :
                   currentLanguage === 'de' ? 'Primäre und sekundäre Schriftarten' : 
                   currentLanguage === 'sq' ? 'Fontet primare dhe sekondare' :
                   'Primarni i sekundarni fontovi'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Aplikacije' : 
                   currentLanguage === 'en' ? 'Applications' :
                   currentLanguage === 'de' ? 'Anwendungen' : 
                   currentLanguage === 'sq' ? 'Aplikacionet' :
                   'Aplikacije'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Primena na različitim materijalima' : 
                   currentLanguage === 'en' ? 'Application on various materials' :
                   currentLanguage === 'de' ? 'Anwendung auf verschiedenen Materialien' : 
                   currentLanguage === 'sq' ? 'Aplikim në materiale të ndryshme' :
                   'Primena na različitim materijalima'}
                </p>
              </Card>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {currentLanguage === 'sr' ? 'Kreativni Proces' : 
               currentLanguage === 'en' ? 'Creative Process' :
               currentLanguage === 'de' ? 'Kreativer Prozess' : 
               currentLanguage === 'sq' ? 'Procesi Kreativ' :
               'Kreativni Proces'}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Istraživanje' : 
                   currentLanguage === 'en' ? 'Research' :
                   currentLanguage === 'de' ? 'Forschung' : 
                   currentLanguage === 'sq' ? 'Hulumtimi' :
                   'Istraživanje'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Analiza tržišta, konkurencije i ciljne publike' : 
                   currentLanguage === 'en' ? 'Market, competition and target audience analysis' :
                   currentLanguage === 'de' ? 'Markt-, Konkurrenz- und Zielgruppenanalyse' : 
                   currentLanguage === 'sq' ? 'Analiza e tregut, konkurrencës dhe audiencës së synuar' :
                   'Analiza tržišta, konkurencije i ciljne publike'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Kreiranje' : 
                   currentLanguage === 'en' ? 'Creation' :
                   currentLanguage === 'de' ? 'Erstellung' : 
                   currentLanguage === 'sq' ? 'Krijimi' :
                   'Kreiranje'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Razvoj koncepata i početnih ideja' : 
                   currentLanguage === 'en' ? 'Development of concepts and initial ideas' :
                   currentLanguage === 'de' ? 'Entwicklung von Konzepten und ersten Ideen' : 
                   currentLanguage === 'sq' ? 'Zhvillimi i koncepteve dhe ideve fillestare' :
                   'Razvoj koncepata i početnih ideja'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Rafinirane' : 
                   currentLanguage === 'en' ? 'Refinement' :
                   currentLanguage === 'de' ? 'Verfeinerung' : 
                   currentLanguage === 'sq' ? 'Rafinimi' :
                   'Rafinirane'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Izbor najboljih rešenja i usavršavanje' : 
                   currentLanguage === 'en' ? 'Selection of best solutions and refinement' :
                   currentLanguage === 'de' ? 'Auswahl der besten Lösungen und Verfeinerung' : 
                   currentLanguage === 'sq' ? 'Përzgjedhja e zgjidhjeve më të mira dhe përmirësimi' :
                   'Izbor najboljih rešenja i usavršavanje'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Finalizacija' : 
                   currentLanguage === 'en' ? 'Finalization' :
                   currentLanguage === 'de' ? 'Fertigstellung' : 
                   currentLanguage === 'sq' ? 'Finalizimi' :
                   'Finalizacija'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Brend bukvar i finalni materijali' : 
                   currentLanguage === 'en' ? 'Brand book and final materials' :
                   currentLanguage === 'de' ? 'Markenbuch und finale Materialien' : 
                   currentLanguage === 'sq' ? 'Libri i markës dhe materialet finale' :
                   'Brend bukvar i finalni materijali'}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'sr' ? 'Vaš Brend Zaslužuje Jedinstvenu Vizuelinu!' : 
               currentLanguage === 'en' ? 'Your Brand Deserves a Unique Visual Identity!' :
               currentLanguage === 'de' ? 'Ihre Marke verdient eine einzigartige visuelle Identität!' : 
               currentLanguage === 'sq' ? 'Marka juaj meriton një identitet vizual unik!' :
               'Vaš Brend Zaslužuje Jedinstvenu Vizuelinu!'}
            </h3>
            <p className="text-lg mb-6">
              {currentLanguage === 'sr' ? 'Kontaktirajte me za kreiranje kompletnog brend identiteta koji će izdvojiti vašu kompaniju od konkurencije.' : 
               currentLanguage === 'en' ? 'Contact me to create a complete brand identity that will set your company apart from the competition.' :
               currentLanguage === 'de' ? 'Kontaktieren Sie mich für die Erstellung einer vollständigen Markenidentität, die Ihr Unternehmen von der Konkurrenz abhebt.' : 
               currentLanguage === 'sq' ? 'Kontaktoni me për të krijuar një identitet të plotë të markës që do të dallojë kompaninë tuaj nga konkurrenca.' :
               'Kontaktirajte me za kreiranje kompletnog brend identiteta koji će izdvojiti vašu kompaniju od konkurencije.'}
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-purple-500 hover:bg-gray-100">
                {currentLanguage === 'sr' ? 'Kreiraj Moj Brend Identitet' : 
                 currentLanguage === 'en' ? 'Create My Brand Identity' :
                 currentLanguage === 'de' ? 'Erstelle meine Markenidentität' : 
                 currentLanguage === 'sq' ? 'Krijo Identitetin e Markës Sime' :
                 'Kreiraj Moj Brend Identitet'}
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