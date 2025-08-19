import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Video, Play, Monitor, Layers, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function CorporateVideo() {
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
                Korporativni Video
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Predstavljanje kompanije kroz video
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
            <Badge className="bg-blue-500 text-white">Video Produkcija</Badge>
            <Badge className="bg-purple-500 text-white">Korporativni</Badge>
            <Badge className="bg-green-500 text-white">Motion Graphics</Badge>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Corporate Video Production"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-10 h-10 text-white ml-2" />
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Profesionalna Korporativna Video Produkcija
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Kreiram korporativne video materijale koji efikasno prenose vrednosti, viziju i misiju vaše kompanije. Kombinujem profesionalnu produkciju sa naprednim editovanjem u Adobe Premiere Pro i After Effects za kreiranje video sadržaja koji angažuje publiku i gradi poverenje.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">Profesionalno Snimanje</h3>
                  </div>
                  <p className="text-gray-600">
                    4K video snimanje sa profesionalnim kamerama, stabilizatorima i profesionalnim osvetljenjem.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">Adobe Premiere Editing</h3>
                  </div>
                  <p className="text-gray-600">
                    Napredne tehnike editovanja u Adobe Premiere Pro sa color grading-om i audio post-produkcijom.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold">After Effects Graphics</h3>
                  </div>
                  <p className="text-gray-600">
                    Motion graphics, animacije teksta, vizuelni efekti i kompositovanje u Adobe After Effects.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">Brend Integration</h3>
                  </div>
                  <p className="text-gray-600">
                    Uključivanje brend elemenata, logo animacija i konzistentnost sa vizuelnim identitetom.
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
                    <p className="text-gray-600">Korporativni Video</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Software</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Adobe Premiere Pro</Badge>
                      <Badge variant="outline">After Effects</Badge>
                      <Badge variant="outline">Audition</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Usluge</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Kreativni koncept</li>
                      <li>• Snimanje u studiju i lokaciji</li>
                      <li>• Professional lighting setup</li>
                      <li>• Video editing & post-produkcija</li>
                      <li>• Motion graphics dizajn</li>
                      <li>• Color grading</li>
                      <li>• Audio miksovanje</li>
                      <li>• Logo animacija</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Rezultati</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">65% povećanje engagement-a</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">250% više share-ova</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">Poboljšanje brend percepcije</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Video Editing Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Video Editing Process - Adobe Premiere Pro & After Effects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Adobe Premiere Pro Timeline"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="After Effects Composition"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Production Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Video Produkcioni Proces
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-500">1</span>
                </div>
                <h3 className="font-semibold mb-2">Pre-produkcija</h3>
                <p className="text-sm text-gray-600">Kreativni koncept, scenario, storyboard i planiranje snimanja</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-500">2</span>
                </div>
                <h3 className="font-semibold mb-2">Snimanje</h3>
                <p className="text-sm text-gray-600">Profesionalne kamere, osvetljenje i audio snimanje</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-500">3</span>
                </div>
                <h3 className="font-semibold mb-2">Post-produkcija</h3>
                <p className="text-sm text-gray-600">Editing u Premiere Pro, After Effects motion graphics</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">4</span>
                </div>
                <h3 className="font-semibold mb-2">Finalizacija</h3>
                <p className="text-sm text-gray-600">Color grading, audio miksovanje i optimizacija za platforme</p>
              </Card>
            </div>
          </div>

          {/* Software Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Software Expertise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Adobe Premiere Pro</h3>
                <p className="text-gray-600 mb-4">Profesionalno video editovanje sa naprednim tehnikama</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multi-camera editing</li>
                  <li>• Color correction & grading</li>
                  <li>• Audio synchronization</li>
                  <li>• Advanced transitions</li>
                </ul>
              </Card>

              <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-green-50">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Layers className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Adobe After Effects</h3>
                <p className="text-gray-600 mb-4">Motion graphics i vizuelni efekti</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 2D & 3D animacije</li>
                  <li>• Logo animacija</li>
                  <li>• Kompoziting</li>
                  <li>• Particle systems</li>
                </ul>
              </Card>

              <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-orange-50">
                <div className="w-20 h-20 bg-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Adobe Audition</h3>
                <p className="text-gray-600 mb-4">Profesionalna audio post-produkcija</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Noise reduction</li>
                  <li>• Audio enhancement</li>
                  <li>• Voice-over recording</li>
                  <li>• Surround sound mixing</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Spremni za Profesionalni Korporativni Video?
            </h3>
            <p className="text-lg mb-6">
              Kontaktirajte me za kreiranje impresivnog video materijala koji će predstaviti vašu kompaniju na najbolji način.
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-blue-500 hover:bg-gray-100">
                Kreiraj Moj Korporativni Video
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