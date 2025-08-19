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
            <Badge className="bg-electric-blue text-white">Web Dizajn</Badge>
            <Badge className="bg-green-500 text-white">E-commerce</Badge>
            <Badge className="bg-purple-500 text-white">Mobilno Optimizovan</Badge>
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
                    <h3 className="text-xl font-semibold">Sigurno Plaćanje</h3>
                  </div>
                  <p className="text-gray-600">
                    Integracija sa sigurnim payment gateway-ima za bezbedan proces plaćanja kartice i PayPal.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">Napredna Pretraga</h3>
                  </div>
                  <p className="text-gray-600">
                    Filteri po kategoriji, ceni, brendu i drugim karakteristikama za brže pronalaženje proizvoda.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">Mobile-First Dizajn</h3>
                  </div>
                  <p className="text-gray-600">
                    Potpuno responzivan dizajn optimizovan za savršen shopping doživljaj na mobilnim uređajima.
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
                    <p className="text-gray-600">E-commerce Web Sajt</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Tehnologije</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">Stripe</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Funkcije</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Upravljanje proizvodima</li>
                      <li>• Sistem korisnika</li>
                      <li>• Praćenje porudžbina</li>
                      <li>• Inventory management</li>
                      <li>• Analytics dashboard</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Rezultati</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">40% povećanje konverzija</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">300+ registrovanih korisnika</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">4.9/5 korisničkih ocena</span>
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
              Ključne Funkcije E-commerce Sajta
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lako Upravljanje</h3>
                <p className="text-gray-600">
                  Jednostavan admin panel za dodavanje proizvoda, kategorija i upravljanje inventarom.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sigurne Transakcije</h3>
                <p className="text-gray-600">
                  SSL enkripcija i sigurni payment gateway-i za zaštićeno online plaćanje.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics & SEO</h3>
                <p className="text-gray-600">
                  Detaljne analytics i SEO optimizacija za bolje rangiranje u pretragama.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-electric-blue to-purple-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Spremni za Vaš E-commerce Sajt?
            </h3>
            <p className="text-lg mb-6">
              Kontaktirajte me za kreiranje profesionalnog e-commerce rešenja koje će povećati vaše online prodaje.
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-electric-blue hover:bg-gray-100">
                Počnite Svoj Online Biznis
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