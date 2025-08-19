import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Smartphone, CreditCard, Search, Star, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function EcommerceSite() {
  const { t, currentLanguage } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
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
{currentLanguage === 'sr' ? 'E-commerce Sajt' : 
                 currentLanguage === 'en' ? 'E-commerce Site' :
                 currentLanguage === 'de' ? 'E-Commerce Website' : 
                 'E-commerce Sajt'}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
{currentLanguage === 'sr' ? 'Kompletan online shopping doživljaj' : 
                 currentLanguage === 'en' ? 'Complete online shopping experience' :
                 currentLanguage === 'de' ? 'Komplettes Online-Shopping-Erlebnis' : 
                 currentLanguage === 'sq' ? 'Përvojë e plotë e blerjeve online' :
                 'Kompletan online shopping doživljaj'}
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
            <Badge className="bg-electric-blue text-white">
              {currentLanguage === 'sr' ? 'Web Dizajn' : 
               currentLanguage === 'en' ? 'Web Design' :
               currentLanguage === 'de' ? 'Web-Design' : 
               currentLanguage === 'sq' ? 'Dizajn Web' :
               'Web Dizajn'}
            </Badge>
            <Badge className="bg-green-500 text-white">E-commerce</Badge>
            <Badge className="bg-purple-500 text-white">
              {currentLanguage === 'sr' ? 'Mobilno Optimizovan' : 
               currentLanguage === 'en' ? 'Mobile Optimized' :
               currentLanguage === 'de' ? 'Mobil Optimiert' : 
               currentLanguage === 'sq' ? 'Optimizuar për Mobil' :
               'Mobilno Optimizovan'}
            </Badge>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="E-commerce Website"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {currentLanguage === 'sr' ? 'Profesionalni E-commerce Sajt za Modernu Trgovinu' : 
                 currentLanguage === 'en' ? 'Professional E-commerce Site for Modern Commerce' :
                 currentLanguage === 'de' ? 'Professionelle E-Commerce-Website für modernen Handel' : 
                 currentLanguage === 'sq' ? 'Faqe Profesionale E-commerce për Tregtinë Moderne' :
                 'Profesionalni E-commerce Sajt za Modernu Trgovinu'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {currentLanguage === 'sr' ? 'Kreiram moderna e-commerce rešenja koja omogućavaju kompanijama da prodaju svoje proizvode online sa profesionalnim izgledom i funkcionalnostima koje povećavaju konverzije. Ovaj sajt kombinuje elegantan dizajn sa naprednim e-commerce funkcijama.' : 
                 currentLanguage === 'en' ? 'I create modern e-commerce solutions that enable companies to sell their products online with a professional look and features that increase conversions. This site combines elegant design with advanced e-commerce functionality.' :
                 currentLanguage === 'de' ? 'Ich erstelle moderne E-Commerce-Lösungen, die es Unternehmen ermöglichen, ihre Produkte online mit professionellem Aussehen und Funktionen zu verkaufen, die Conversions steigern. Diese Website kombiniert elegantes Design mit erweiterten E-Commerce-Funktionen.' : 
                 currentLanguage === 'sq' ? 'Krijoj zgjidhje moderne e-commerce që u mundësojnë kompanive të shesin produktet e tyre online me pamje profesionale dhe funksione që rrisin konvertimet. Kjo faqe kombinon dizajnin elegant me funksionalitetet e avancuara e-commerce.' :
                 'Kreiram moderna e-commerce rešenja koja omogućavaju kompanijama da prodaju svoje proizvode online sa profesionalnim izgledom i funkcionalnostima koje povećavaju konverzije. Ovaj sajt kombinuje elegantan dizajn sa naprednim e-commerce funkcijama.'}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ShoppingCart className="w-6 h-6 text-electric-blue" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Napredna Korpa' : 
                       currentLanguage === 'en' ? 'Advanced Cart' :
                       currentLanguage === 'de' ? 'Erweiterte Warenkorb' : 
                       currentLanguage === 'sq' ? 'Shporta e Avancuar' :
                       'Napredna Korpa'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Intuitivna shopping korpa sa mogućnostima dodavanja, uklanjanja i menjanja količine proizvoda u realnom vremenu.' : 
                     currentLanguage === 'en' ? 'Intuitive shopping cart with options to add, remove and change product quantities in real time.' :
                     currentLanguage === 'de' ? 'Intuitiver Warenkorb mit Optionen zum Hinzufügen, Entfernen und Ändern von Produktmengen in Echtzeit.' : 
                     currentLanguage === 'sq' ? 'Shportë intuitiva blerjesh me opsione për të shtuar, hequr dhe ndryshuar sasitë e produkteve në kohë reale.' :
                     'Intuitivna shopping korpa sa mogućnostima dodavanja, uklanjanja i menjanja količine proizvoda u realnom vremenu.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Sigurno Plaćanje' : 
                       currentLanguage === 'en' ? 'Secure Payment' :
                       currentLanguage === 'de' ? 'Sichere Zahlung' : 
                       currentLanguage === 'sq' ? 'Pagesa e Sigurtë' :
                       'Sigurno Plaćanje'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Integracija sa sigurnim payment gateway-ima za bezbedan proces plaćanja kartice i PayPal.' : 
                     currentLanguage === 'en' ? 'Integration with secure payment gateways for safe credit card and PayPal payment processing.' :
                     currentLanguage === 'de' ? 'Integration mit sicheren Payment-Gateways für sichere Kreditkarten- und PayPal-Zahlungsabwicklung.' : 
                     currentLanguage === 'sq' ? 'Integrim me portat e pagesave të sigurta për përpunimin e sigurt të pagesave me kartë krediti dhe PayPal.' :
                     'Integracija sa sigurnim payment gateway-ima za bezbedan proces plaćanja kartice i PayPal.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Napredna Pretraga' : 
                       currentLanguage === 'en' ? 'Advanced Search' :
                       currentLanguage === 'de' ? 'Erweiterte Suche' : 
                       currentLanguage === 'sq' ? 'Kërkim i Avancuar' :
                       'Napredna Pretraga'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Filteri po kategoriji, ceni, brendu i drugim karakteristikama za brže pronalaženje proizvoda.' : 
                     currentLanguage === 'en' ? 'Filters by category, price, brand and other characteristics for faster product discovery.' :
                     currentLanguage === 'de' ? 'Filter nach Kategorie, Preis, Marke und anderen Eigenschaften für schnellere Produktfindung.' : 
                     currentLanguage === 'sq' ? 'Filtra sipas kategorisë, çmimit, markës dhe karakteristikave të tjera për zbulim më të shpejtë të produkteve.' :
                     'Filteri po kategoriji, ceni, brendu i drugim karakteristikama za brže pronalaženje proizvoda.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Mobile-First Dizajn' : 
                       currentLanguage === 'en' ? 'Mobile-First Design' :
                       currentLanguage === 'de' ? 'Mobile-First-Design' : 
                       currentLanguage === 'sq' ? 'Dizajn Mobile-First' :
                       'Mobile-First Dizajn'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Potpuno responzivan dizajn optimizovan za savršen shopping doživljaj na mobilnim uređajima.' : 
                     currentLanguage === 'en' ? 'Fully responsive design optimized for perfect shopping experience on mobile devices.' :
                     currentLanguage === 'de' ? 'Vollständig responsives Design, optimiert für perfekte Shopping-Erfahrung auf Mobilgeräten.' : 
                     currentLanguage === 'sq' ? 'Dizajn plotësisht përgjigjes i optimizuar për përvojë të përkryer blerjesh në pajisjet mobile.' :
                     'Potpuno responzivan dizajn optimizovan za savršen shopping doživljaj na mobilnim uređajima.'}
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
                      {currentLanguage === 'sr' ? 'E-commerce Web Sajt' : 
                       currentLanguage === 'en' ? 'E-commerce Website' :
                       currentLanguage === 'de' ? 'E-Commerce-Website' : 
                       currentLanguage === 'sq' ? 'Faqe E-commerce' :
                       'E-commerce Web Sajt'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Tehnologije' : 
                       currentLanguage === 'en' ? 'Technologies' :
                       currentLanguage === 'de' ? 'Technologien' : 
                       currentLanguage === 'sq' ? 'Teknologjitë' :
                       'Tehnologije'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">Stripe</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Funkcije' : 
                       currentLanguage === 'en' ? 'Features' :
                       currentLanguage === 'de' ? 'Funktionen' : 
                       currentLanguage === 'sq' ? 'Veçoritë' :
                       'Funkcije'}
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• {currentLanguage === 'sr' ? 'Upravljanje proizvodima' : 
                             currentLanguage === 'en' ? 'Product management' :
                             currentLanguage === 'de' ? 'Produktverwaltung' : 
                             currentLanguage === 'sq' ? 'Menaxhimi i produkteve' :
                             'Upravljanje proizvodima'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Sistem korisnika' : 
                             currentLanguage === 'en' ? 'User system' :
                             currentLanguage === 'de' ? 'Benutzersystem' : 
                             currentLanguage === 'sq' ? 'Sistemi i përdoruesve' :
                             'Sistem korisnika'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Praćenje porudžbina' : 
                             currentLanguage === 'en' ? 'Order tracking' :
                             currentLanguage === 'de' ? 'Bestellverfolgung' : 
                             currentLanguage === 'sq' ? 'Ndjekja e porosive' :
                             'Praćenje porudžbina'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Inventory management' : 
                             currentLanguage === 'en' ? 'Inventory management' :
                             currentLanguage === 'de' ? 'Bestandsverwaltung' : 
                             currentLanguage === 'sq' ? 'Menaxhimi i inventarit' :
                             'Inventory management'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Analytics dashboard' : 
                             currentLanguage === 'en' ? 'Analytics dashboard' :
                             currentLanguage === 'de' ? 'Analytics-Dashboard' : 
                             currentLanguage === 'sq' ? 'Paneli i analizave' :
                             'Analytics dashboard'}</li>
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
                          {currentLanguage === 'sr' ? '40% povećanje konverzija' : 
                           currentLanguage === 'en' ? '40% increase in conversions' :
                           currentLanguage === 'de' ? '40% Steigerung der Konversionen' : 
                           currentLanguage === 'sq' ? '40% rritje e konvertimeve' :
                           '40% povećanje konverzija'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? '300+ registrovanih korisnika' : 
                           currentLanguage === 'en' ? '300+ registered users' :
                           currentLanguage === 'de' ? '300+ registrierte Benutzer' : 
                           currentLanguage === 'sq' ? '300+ përdorues të regjistruar' :
                           '300+ registrovanih korisnika'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? '4.9/5 korisničkih ocena' : 
                           currentLanguage === 'en' ? '4.9/5 user ratings' :
                           currentLanguage === 'de' ? '4.9/5 Nutzerbewertungen' : 
                           currentLanguage === 'sq' ? '4.9/5 vlerësime përdoruesish' :
                           '4.9/5 korisničkih ocena'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {currentLanguage === 'sr' ? 'Ključne Funkcije E-commerce Sajta' : 
               currentLanguage === 'en' ? 'Key E-commerce Features' :
               currentLanguage === 'de' ? 'Wichtige E-Commerce-Funktionen' : 
               currentLanguage === 'sq' ? 'Veçoritë Kryesore të E-commerce' :
               'Ključne Funkcije E-commerce Sajta'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {currentLanguage === 'sr' ? 'Lako Upravljanje' : 
                   currentLanguage === 'en' ? 'Easy Management' :
                   currentLanguage === 'de' ? 'Einfache Verwaltung' : 
                   currentLanguage === 'sq' ? 'Menaxhim i Lehtë' :
                   'Lako Upravljanje'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'sr' ? 'Jednostavan admin panel za dodavanje proizvoda, kategorija i upravljanje inventarom.' : 
                   currentLanguage === 'en' ? 'Simple admin panel for adding products, categories and inventory management.' :
                   currentLanguage === 'de' ? 'Einfaches Admin-Panel zum Hinzufügen von Produkten, Kategorien und Inventarverwaltung.' : 
                   currentLanguage === 'sq' ? 'Panel administrativ i thjeshtë për shtimin e produkteve, kategorive dhe menaxhimin e inventarit.' :
                   'Jednostavan admin panel za dodavanje proizvoda, kategorija i upravljanje inventarom.'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {currentLanguage === 'sr' ? 'Sigurne Transakcije' : 
                   currentLanguage === 'en' ? 'Secure Transactions' :
                   currentLanguage === 'de' ? 'Sichere Transaktionen' : 
                   currentLanguage === 'sq' ? 'Transaksione të Sigurta' :
                   'Sigurne Transakcije'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'sr' ? 'SSL enkripcija i sigurni payment gateway-i za zaštićeno online plaćanje.' : 
                   currentLanguage === 'en' ? 'SSL encryption and secure payment gateways for protected online payments.' :
                   currentLanguage === 'de' ? 'SSL-Verschlüsselung und sichere Payment-Gateways für geschützte Online-Zahlungen.' : 
                   currentLanguage === 'sq' ? 'Enkriptim SSL dhe porta pagimesh të sigurta për pagesa online të mbrojtura.' :
                   'SSL enkripcija i sigurni payment gateway-i za zaštićeno online plaćanje.'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {currentLanguage === 'sr' ? 'Analytics & SEO' : 
                   currentLanguage === 'en' ? 'Analytics & SEO' :
                   currentLanguage === 'de' ? 'Analytics & SEO' : 
                   currentLanguage === 'sq' ? 'Analitika & SEO' :
                   'Analytics & SEO'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'sr' ? 'Detaljne analytics i SEO optimizacija za bolje rangiranje u pretragama.' : 
                   currentLanguage === 'en' ? 'Detailed analytics and SEO optimization for better search rankings.' :
                   currentLanguage === 'de' ? 'Detaillierte Analysen und SEO-Optimierung für bessere Suchranking.' : 
                   currentLanguage === 'sq' ? 'Analitika të detajuara dhe optimizim SEO për renditje më të mira në kërkim.' :
                   'Detaljne analytics i SEO optimizacija za bolje rangiranje u pretragama.'}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-electric-blue to-purple-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'sr' ? 'Spremni za Vaš E-commerce Sajt?' : 
               currentLanguage === 'en' ? 'Ready for Your E-commerce Site?' :
               currentLanguage === 'de' ? 'Bereit für Ihre E-Commerce-Website?' : 
               currentLanguage === 'sq' ? 'Gati për Faqen tuaj E-commerce?' :
               'Spremni za Vaš E-commerce Sajt?'}
            </h3>
            <p className="text-lg mb-6">
              {currentLanguage === 'sr' ? 'Kontaktirajte me za kreiranje profesionalnog e-commerce rešenja koje će povećati vaše online prodaje.' : 
               currentLanguage === 'en' ? 'Contact me to create a professional e-commerce solution that will increase your online sales.' :
               currentLanguage === 'de' ? 'Kontaktieren Sie mich für die Erstellung einer professionellen E-Commerce-Lösung, die Ihre Online-Verkäufe steigern wird.' : 
               currentLanguage === 'sq' ? 'Kontaktoni me për të krijuar një zgjidhje profesionale e-commerce që do të rrisë shitjet tuaja online.' :
               'Kontaktirajte me za kreiranje profesionalnog e-commerce rešenja koje će povećati vaše online prodaje.'}
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-electric-blue hover:bg-gray-100">
                {currentLanguage === 'sr' ? 'Počnite Svoj Online Biznis' : 
                 currentLanguage === 'en' ? 'Start Your Online Business' :
                 currentLanguage === 'de' ? 'Starten Sie Ihr Online-Geschäft' : 
                 currentLanguage === 'sq' ? 'Filloni Biznesin tuaj Online' :
                 'Počnite Svoj Online Biznis'}
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