import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, Camera, Image, Palette, Film, Brush, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect } from 'react';
import posterRagazzo from '@assets/Ragazzo con lanterne_1755565190060.jpg';
import posterAnto from '@assets/ANTO IL SILENZIO DELL BOSS_1755565202925.jpg';
import posterKong from '@assets/KING KONG_1755565210288.jpg';
import posterGardijan from '@assets/GARDIJAN POSTER_1755565214483.jpg';
import posterAbandoned from '@assets/MOVIE POSTER ABANDONED_1755565219158.jpg';

export default function Photography() {
  const { t } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const moviePostersData = t.photography?.moviePosters || [
    {
      title: "Ragazzo con Lanterne",
      description: "Kreativni fantazijski poster sa atmosferskim osvetljenjem",
      category: "Fantasy"
    },
    {
      title: "Il Silenzio del Boss",
      description: "Dramski poster u stilu filmova noir",
      category: "Drama"
    },
    {
      title: "Kong",
      description: "Epski akcioni poster sa kreaturom",
      category: "Action"
    },
    {
      title: "Gardijan",
      description: "Zimski atmosferski poster sa snegom",
      category: "Drama"
    },
    {
      title: "Abandoned",
      description: "Misterijski triler poster sa tamnom atmosferom",
      category: "Thriller"
    }
  ];

  const movieImages = [posterRagazzo, posterAnto, posterKong, posterGardijan, posterAbandoned];

  const moviePosters = moviePostersData.map((poster, index) => ({
    ...poster,
    image: movieImages[index]
  }));

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                {t.nav.home}
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.photography?.hero?.title || "Fotografija i Photomontaža"}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.photography?.hero?.subtitle || "Kreativna fotografija i digitalna umetnost"}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {t.photography?.hero?.title || "Fotografija i Photomontaža"}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t.photography?.hero?.description || "Kreiram profesionalne fotografije, restauturam stare slike, radim photomontaže svih vrsta i filmske postere sa vašom slikom - od kreativnih kompozicija do realističnih portreta."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    {t.photography?.cta?.button || "Kontaktiraj Me"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <Camera className="w-5 h-5 mr-2" />
                  {t.photography?.portfolioButtonText || "Portfolio Radova"}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={posterRagazzo} 
                  alt="Kreativni poster"
                  className="w-full h-64 object-contain rounded-xl shadow-lg bg-white/10 backdrop-blur-sm"
                />
                <img 
                  src={posterAnto} 
                  alt="Filmski poster"
                  className="w-full h-64 object-contain rounded-xl shadow-lg bg-white/10 backdrop-blur-sm mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.photography?.servicesTitle || "Moje Fotografske Usluge"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.photography?.servicesSubtitle || "Od profesionalnog fotografisanja do kreativnih photomontaža"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  <Camera className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {t.photography?.services?.professionalPhotography?.title || "Profesionalno Fotografisanje"}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {t.photography?.services?.professionalPhotography?.description || "Fotografije proizvoda, portreta, događaja i korporativne fotografije"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(t.photography?.services?.professionalPhotography?.features || ["Studijske fotografije", "Proizvodi i katalozi", "Portretna fotografija", "Event fotografija"]).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                  <Image className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {t.photography?.services?.restoration?.title || "Restauracija Starih Slika"}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {t.photography?.services?.restoration?.description || "Vraćam život oštećenim i izblelim fotografijama"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(t.photography?.services?.restoration?.features || ["Uklanjanje oštećenja", "Obnavljanje boja", "Digitalna restauracija", "Popravljanje starih fotografija"]).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                  <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {t.photography?.services?.photomontage?.title || "Photomontaže Svih Vrsta"}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {t.photography?.services?.photomontage?.description || "Kreativno kombinovanje elemenata u jedinstvene kompozicije"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(t.photography?.services?.photomontage?.features || ["Kreativne kompozicije", "Realistične montaže", "Fantazijske scene", "Reklamne photomontaže"]).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors">
                  <Film className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {t.photography?.services?.moviePosters?.title || "Filmski Posteri sa Vašom Slikom"}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {t.photography?.services?.moviePosters?.description || "Postavite sebe u središe filmskog postera"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(t.photography?.services?.moviePosters?.features || ["Personalizovani posteri", "Različiti filmski stilovi", "Profesionalna obrada", "Visoka rezolucija"]).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Movie Posters Portfolio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.photography?.portfolioTitle || "Portfolio Filmskih Postera"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.photography?.portfolioDescription || "Primeri mojih radova - kreiranje profesionalnih filmskih postera sa različitim stilovima i atmosferama"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {moviePosters.map((poster, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={poster.image} 
                    alt={poster.title}
                    className="w-full h-96 object-contain bg-gray-100 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      {poster.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {poster.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {poster.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.photography?.processTitle || "Kreativni Proces"}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {(t.photography?.processSteps || [
              {
                title: "Konsultacija",
                description: "Razgovaramo o vašoj ideji i potrebama",
                icon: "1"
              },
              {
                title: "Kreiranje Koncepta",
                description: "Razvijam kreativni pristup i stil",
                icon: "2"
              },
              {
                title: "Izrada",
                description: "Profesionalna fotografija ili digitalna obrada",
                icon: "3"
              },
              {
                title: "Finalizacija",
                description: "Poslednja obrada i isporuka u željenom formatu",
                icon: "4"
              }
            ]).map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.photography?.cta?.title || "Spremni za Kreativnu Fotografiju?"}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.photography?.cta?.description || "Kontaktirajte me za besplatnu konsultaciju o vašoj fotografiji ili photomontaži projektu"}
          </p>
          <Link href="/#contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              {t.photography?.cta?.button || "Kontaktiraj Me"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}