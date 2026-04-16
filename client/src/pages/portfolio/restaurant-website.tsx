import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Utensils, Clock, MapPin, Phone, Star, Users, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function RestaurantWebsite() {
  const { t, currentLanguage } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-orange-900">
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
                {currentLanguage === 'sr' ? 'Restoran Website' : 
                 currentLanguage === 'en' ? 'Restaurant Website' :
                 currentLanguage === 'de' ? 'Restaurant-Website' : 
                 currentLanguage === 'sq' ? 'Faqja e Restorantit' :
                 'Restoran Website'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {currentLanguage === 'sr' ? 'Elegantno online prisustvo' : 
                 currentLanguage === 'en' ? 'Elegant online presence' :
                 currentLanguage === 'de' ? 'Elegante Online-Präsenz' : 
                 currentLanguage === 'sq' ? 'Prezencë elegante online' :
                 'Elegantno online prisustvo'}
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
            <Badge className="bg-orange-500 text-white">
              {currentLanguage === 'sr' ? 'Restoran' : 
               currentLanguage === 'en' ? 'Restaurant' :
               currentLanguage === 'de' ? 'Restaurant' : 
               currentLanguage === 'sq' ? 'Restorant' :
               'Restoran'}
            </Badge>
            <Badge className="bg-amber-500 text-white">
              {currentLanguage === 'sr' ? 'Web Dizajn' : 
               currentLanguage === 'en' ? 'Web Design' :
               currentLanguage === 'de' ? 'Web-Design' : 
               currentLanguage === 'sq' ? 'Dizajn Web' :
               'Web Dizajn'}
            </Badge>
            <Badge className="bg-green-500 text-white">
              {currentLanguage === 'sr' ? 'Online Rezervacije' : 
               currentLanguage === 'en' ? 'Online Reservations' :
               currentLanguage === 'de' ? 'Online-Reservierungen' : 
               currentLanguage === 'sq' ? 'Rezervime Online' :
               'Online Rezervacije'}
            </Badge>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Restaurant Website"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {currentLanguage === 'sr' ? 'Moderni Website za Restorane i Ugostiteljske Objekte' : 
                 currentLanguage === 'en' ? 'Modern Websites for Restaurants and Hospitality' :
                 currentLanguage === 'de' ? 'Moderne Websites für Restaurants und Gastronomie' : 
                 currentLanguage === 'sq' ? 'Faqe të Reja për Restorante dhe Hoteleri' :
                 'Moderni Website za Restorane i Ugostiteljske Objekte'}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {currentLanguage === 'sr' ? 'Kreiram elegantne web sajtove za restorane koji prikazuju atmosferu, jelovnik i omogućavaju lakše rezervacije. Kombinujem vizuelno atraktivan dizajn sa funkcionalnostima koje povećavaju broj gostiju i poboljšavaju korisničko iskustvo.' : 
                 currentLanguage === 'en' ? 'I create elegant restaurant websites that showcase atmosphere, menus, and enable easy reservations. I combine visually attractive design with features that increase guest numbers and improve user experience.' :
                 currentLanguage === 'de' ? 'Ich erstelle elegante Restaurant-Websites, die Atmosphäre und Menüs präsentieren und einfache Reservierungen ermöglichen. Ich kombiniere visuell ansprechendes Design mit Funktionen, die die Gästezahl erhöhen und das Benutzererlebnis verbessern.' : 
                 currentLanguage === 'sq' ? 'Krijoj faqe elegante për restorante që tregojnë atmosferën, menytë dhe mundësojnë rezervime të lehta. Kombinoj dizajnin tërheqës vizual me funksione që rrisin numrin e mysafirëve dhe përmirësojnë përvojën e përdoruesit.' :
                 'Kreiram elegantne web sajtove za restorane koji prikazuju atmosferu, jelovnik i omogućavaju lakše rezervacije. Kombinujem vizuelno atraktivan dizajn sa funkcionalnostima koje povećavaju broj gostiju i poboljšavaju korisničko iskustvo.'}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Utensils className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Interaktivni Meni' : 
                       currentLanguage === 'en' ? 'Interactive Menu' :
                       currentLanguage === 'de' ? 'Interaktive Speisekarte' : 
                       currentLanguage === 'sq' ? 'Menu Interaktive' :
                       'Interaktivni Meni'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Digitalni jelovnik sa slikama jela, cenama, opisima i mogućnostima filtriranja po kategorijama i alergentima.' : 
                     currentLanguage === 'en' ? 'Digital menu with dish images, prices, descriptions and filtering options by categories and allergens.' :
                     currentLanguage === 'de' ? 'Digitale Speisekarte mit Bildern, Preisen, Beschreibungen und Filtermöglichkeiten nach Kategorien und Allergenen.' : 
                     currentLanguage === 'sq' ? 'Menu dixhitale me imazhe të ushqimeve, çmime, përshkrime dhe mundësi filtrimi sipas kategorive dhe alergjeve.' :
                     'Digitalni jelovnik sa slikama jela, cenama, opisima i mogućnostima filtriranja po kategorijama i alergentima.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Online Rezervacije' : 
                       currentLanguage === 'en' ? 'Online Reservations' :
                       currentLanguage === 'de' ? 'Online-Reservierungen' : 
                       currentLanguage === 'sq' ? 'Rezervime Online' :
                       'Online Rezervacije'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Sistem rezervacije stolova u realnom vremenu sa kalendar integracijom i potvrdom putem email-a.' : 
                     currentLanguage === 'en' ? 'Real-time table reservation system with calendar integration and email confirmation.' :
                     currentLanguage === 'de' ? 'Echtzeit-Tischreservierungssystem mit Kalenderintegration und E-Mail-Bestätigung.' : 
                     currentLanguage === 'sq' ? 'Sistem rezervimi tavolinash në kohë reale me integrim kalendari dhe konfirmim me email.' :
                     'Sistem rezervacije stolova u realnom vremenu sa kalendar integracijom i potvrdom putem email-a.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Lokacija & Kontakt' : 
                       currentLanguage === 'en' ? 'Location & Contact' :
                       currentLanguage === 'de' ? 'Standort & Kontakt' : 
                       currentLanguage === 'sq' ? 'Vendndodhja & Kontakti' :
                       'Lokacija & Kontakt'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Integrisana Google mapa, radno vreme, kontakt informacije i jednostavne direkcije.' : 
                     currentLanguage === 'en' ? 'Integrated Google map, working hours, contact information and simple directions.' :
                     currentLanguage === 'de' ? 'Integrierte Google-Karte, Öffnungszeiten, Kontaktinformationen und einfache Wegbeschreibungen.' : 
                     currentLanguage === 'sq' ? 'Harta e integruar Google, oraret e punës, informacionet e kontaktit dhe udhëzimet e thjeshta.' :
                     'Integrisana Google mapa, radno vreme, kontakt informacije i jednostavne direkcije.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Reviews & Galerija' : 
                       currentLanguage === 'en' ? 'Reviews & Gallery' :
                       currentLanguage === 'de' ? 'Bewertungen & Galerie' : 
                       currentLanguage === 'sq' ? 'Vlerësimet & Galeria' :
                       'Reviews & Galerija'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Prikaz korisničkih recenzija, foto galerija ambijenata i specijalnosta restorana.' : 
                     currentLanguage === 'en' ? 'Display of customer reviews, photo gallery of ambience and restaurant specialties.' :
                     currentLanguage === 'de' ? 'Anzeige von Kundenbewertungen, Fotogalerie von Ambiente und Restaurant-Spezialitäten.' : 
                     currentLanguage === 'sq' ? 'Shfaqja e vlerësimeve të klientëve, galeri fotografish të ambientit dhe specialiteteve të restorantit.' :
                     'Prikaz korisničkih recenzija, foto galerija ambijenata i specijalnosta restorana.'}
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
                      {currentLanguage === 'sr' ? 'Restoran Website' : 
                       currentLanguage === 'en' ? 'Restaurant Website' :
                       currentLanguage === 'de' ? 'Restaurant-Website' : 
                       currentLanguage === 'sq' ? 'Faqja e Restorantit' :
                       'Restoran Website'}
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
                      {currentLanguage === 'sr' ? 'Ugostiteljstvo' : 
                       currentLanguage === 'en' ? 'Hospitality' :
                       currentLanguage === 'de' ? 'Gastronomie' : 
                       currentLanguage === 'sq' ? 'Hoteleria' :
                       'Ugostiteljstvo'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Ključne Funkcije' : 
                       currentLanguage === 'en' ? 'Key Features' :
                       currentLanguage === 'de' ? 'Hauptfunktionen' : 
                       currentLanguage === 'sq' ? 'Karakteristikat Kryesore' :
                       'Ključne Funkcije'}
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• {currentLanguage === 'sr' ? 'Digitalni meni sa slikama' : 
                             currentLanguage === 'en' ? 'Digital menu with images' :
                             currentLanguage === 'de' ? 'Digitale Speisekarte mit Bildern' : 
                             currentLanguage === 'sq' ? 'Menu dixhitale me imazhe' :
                             'Digitalni meni sa slikama'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Online rezervacija stolova' : 
                             currentLanguage === 'en' ? 'Online table reservations' :
                             currentLanguage === 'de' ? 'Online-Tischreservierungen' : 
                             currentLanguage === 'sq' ? 'Rezervime tavolinash online' :
                             'Online rezervacija stolova'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Event kalendar' : 
                             currentLanguage === 'en' ? 'Event calendar' :
                             currentLanguage === 'de' ? 'Veranstaltungskalender' : 
                             currentLanguage === 'sq' ? 'Kalendari i ngjarjeve' :
                             'Event kalendar'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Galerija ambijenata' : 
                             currentLanguage === 'en' ? 'Ambiance gallery' :
                             currentLanguage === 'de' ? 'Ambiente-Galerie' : 
                             currentLanguage === 'sq' ? 'Galeri e ambientit' :
                             'Galerija ambijenata'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Social media integracija' : 
                             currentLanguage === 'en' ? 'Social media integration' :
                             currentLanguage === 'de' ? 'Social Media Integration' : 
                             currentLanguage === 'sq' ? 'Integrim me mediat sociale' :
                             'Social media integracija'}</li>
                      <li>• {currentLanguage === 'sr' ? 'MultiJezička podrška' : 
                             currentLanguage === 'en' ? 'Multi-language support' :
                             currentLanguage === 'de' ? 'Mehrsprachige Unterstützung' : 
                             currentLanguage === 'sq' ? 'Mbështetje shumëgjuhëshe' :
                             'MultiJezička podrška'}</li>
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
                        <Users className="w-4 h-4 text-green-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? '35% više rezervacija' : 
                           currentLanguage === 'en' ? '35% more reservations' :
                           currentLanguage === 'de' ? '35% mehr Reservierungen' : 
                           currentLanguage === 'sq' ? '35% më shumë rezervime' :
                           '35% više rezervacija'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? '50% brže rezervacije' : 
                           currentLanguage === 'en' ? '50% faster reservations' :
                           currentLanguage === 'de' ? '50% schnellere Reservierungen' : 
                           currentLanguage === 'sq' ? '50% rezervime më të shpejta' :
                           '50% brže rezervacije'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? 'Poboljšane online recenzije' : 
                           currentLanguage === 'en' ? 'Improved online reviews' :
                           currentLanguage === 'de' ? 'Verbesserte Online-Bewertungen' : 
                           currentLanguage === 'sq' ? 'Vlerësime të përmirësuara online' :
                           'Poboljšane online recenzije'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Restaurant Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {currentLanguage === 'sr' ? 'Restoran Ambijent & Jela' : 
               currentLanguage === 'en' ? 'Restaurant Ambiance & Dishes' :
               currentLanguage === 'de' ? 'Restaurant-Ambiente & Gerichte' : 
               currentLanguage === 'sq' ? 'Ambienti i Restorantit & Pjatat' :
               'Restoran Ambijent & Jela'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-64 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-64 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
                  alt="Restoran Jela"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-64 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
                  alt="Menu Items"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {currentLanguage === 'sr' ? 'Šta Čini Dobar Restoran Website?' : 
               currentLanguage === 'en' ? 'What Makes a Good Restaurant Website?' :
               currentLanguage === 'de' ? 'Was macht eine gute Restaurant-Website aus?' : 
               currentLanguage === 'sq' ? 'Çka e bën një faqe të mirë restorani?' :
               'Šta Čini Dobar Restoran Website?'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {currentLanguage === 'sr' ? 'Vizuelno Atraktivan Dizajn' : 
                     currentLanguage === 'en' ? 'Visually Attractive Design' :
                     currentLanguage === 'de' ? 'Visuell ansprechendes Design' : 
                     currentLanguage === 'sq' ? 'Dizajn tërheqës vizual' :
                     'Vizuelno Atraktivan Dizajn'}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Kreiranje atmosfere kroz fotografije, boje i tipografiju koja odražava identitet restorana.' : 
                   currentLanguage === 'en' ? 'Creating atmosphere through photography, colors and typography that reflects restaurant identity.' :
                   currentLanguage === 'de' ? 'Atmosphäre schaffen durch Fotografie, Farben und Typografie, die die Restaurant-Identität widerspiegelt.' : 
                   currentLanguage === 'sq' ? 'Krijimi i atmosferës përmes fotografive, ngjyrave dhe tipografisë që reflekton identitetin e restorantit.' :
                   'Kreiranje atmosfere kroz fotografije, boje i tipografiju koja odražava identitet restorana.'}
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• {currentLanguage === 'sr' ? 'Profesionalne fotografije jela' : 
                         currentLanguage === 'en' ? 'Professional food photography' :
                         currentLanguage === 'de' ? 'Professionelle Food-Fotografie' : 
                         currentLanguage === 'sq' ? 'Fotografi profesionale të ushqimit' :
                         'Profesionalne fotografije jela'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Galerija ambijenata' : 
                         currentLanguage === 'en' ? 'Ambiance gallery' :
                         currentLanguage === 'de' ? 'Ambiente-Galerie' : 
                         currentLanguage === 'sq' ? 'Galeri e ambientit' :
                         'Galerija ambijenata'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Brend konzistentnost' : 
                         currentLanguage === 'en' ? 'Brand consistency' :
                         currentLanguage === 'de' ? 'Marken-Konsistenz' : 
                         currentLanguage === 'sq' ? 'Konsistenca e markës' :
                         'Brend konzistentnost'}</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {currentLanguage === 'sr' ? 'Funkcionalnost Prvi' : 
                     currentLanguage === 'en' ? 'Functionality First' :
                     currentLanguage === 'de' ? 'Funktionalität zuerst' : 
                     currentLanguage === 'sq' ? 'Funksionaliteti i parë' :
                     'Funkcionalnost Prvi'}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Praktične funkcije koje omogućavaju gostima lako pronalaženje informacija i rezervacije.' : 
                   currentLanguage === 'en' ? 'Practical features that enable guests to easily find information and make reservations.' :
                   currentLanguage === 'de' ? 'Praktische Funktionen, die Gästen das einfache Finden von Informationen und Reservierungen ermöglichen.' : 
                   currentLanguage === 'sq' ? 'Veçoritë praktike që u mundësojnë mysafirëve të gjejnë lehtë informacion dhe të bëjnë rezervime.' :
                   'Praktične funkcije koje omogućavaju gostima lako pronalaženje informacija i rezervacije.'}
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• {currentLanguage === 'sr' ? 'Online rezervacije' : 
                         currentLanguage === 'en' ? 'Online reservations' :
                         currentLanguage === 'de' ? 'Online-Reservierungen' : 
                         currentLanguage === 'sq' ? 'Rezervime online' :
                         'Online rezervacije'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Digital meni sa cenama' : 
                         currentLanguage === 'en' ? 'Digital menu with prices' :
                         currentLanguage === 'de' ? 'Digitale Speisekarte mit Preisen' : 
                         currentLanguage === 'sq' ? 'Menu dixhitale me çmime' :
                         'Digital meni sa cenama'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Kontakt informacije' : 
                         currentLanguage === 'en' ? 'Contact information' :
                         currentLanguage === 'de' ? 'Kontaktinformationen' : 
                         currentLanguage === 'sq' ? 'Informacionet e kontaktit' :
                         'Kontakt informacije'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'sr' ? 'Vaš Restoran Zaslužuje Odličan Website!' : 
               currentLanguage === 'en' ? 'Your Restaurant Deserves an Excellent Website!' :
               currentLanguage === 'de' ? 'Ihr Restaurant verdient eine exzellente Website!' : 
               currentLanguage === 'sq' ? 'Restoranti juaj meriton një faqe të shkëlqyer!' :
               'Vaš Restoran Zaslužuje Odličan Website!'}
            </h3>
            <p className="text-lg mb-6">
              {currentLanguage === 'sr' ? 'Kontaktirajte me za kreiranje moderne web prezentacije koja će privući više gostiju u vaš restoran.' : 
               currentLanguage === 'en' ? 'Contact me for creating a modern web presentation that will attract more guests to your restaurant.' :
               currentLanguage === 'de' ? 'Kontaktieren Sie mich für die Erstellung einer modernen Web-Präsentation, die mehr Gäste in Ihr Restaurant lockt.' : 
               currentLanguage === 'sq' ? 'Kontaktoni për krijimin e një prezantimi modern web që do të tërheqë më shumë mysafirë në restorantin tuaj.' :
               'Kontaktirajte me za kreiranje moderne web prezentacije koja će privući više gostiju u vaš restoran.'}
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-orange-500 hover:bg-gray-100">
                {currentLanguage === 'sr' ? 'Kreirajte Vaš Restoran Website' : 
                 currentLanguage === 'en' ? 'Create Your Restaurant Website' :
                 currentLanguage === 'de' ? 'Erstellen Sie Ihre Restaurant-Website' : 
                 currentLanguage === 'sq' ? 'Krijoni Faqen e Restorantit tuaj' :
                 'Kreirajte Vaš Restoran Website'}
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