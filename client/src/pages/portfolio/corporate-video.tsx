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
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
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
                {currentLanguage === 'sr' ? 'Korporativni Video' : 
                 currentLanguage === 'en' ? 'Corporate Video' :
                 currentLanguage === 'de' ? 'Unternehmensvideo' : 
                 currentLanguage === 'sq' ? 'Video Korporativ' :
                 'Korporativni Video'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {currentLanguage === 'sr' ? 'Predstavljanje kompanije kroz video' : 
                 currentLanguage === 'en' ? 'Presenting company through video' :
                 currentLanguage === 'de' ? 'Unternehmenspräsentation durch Video' : 
                 currentLanguage === 'sq' ? 'Prezantimi i kompanisë përmes videos' :
                 'Predstavljanje kompanije kroz video'}
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
            <Badge className="bg-blue-500 text-white">
              {currentLanguage === 'sr' ? 'Video Produkcija' : 
               currentLanguage === 'en' ? 'Video Production' :
               currentLanguage === 'de' ? 'Videoproduktion' : 
               currentLanguage === 'sq' ? 'Prodhimi i Videos' :
               'Video Produkcija'}
            </Badge>
            <Badge className="bg-purple-500 text-white">
              {currentLanguage === 'sr' ? 'Korporativni' : 
               currentLanguage === 'en' ? 'Corporate' :
               currentLanguage === 'de' ? 'Unternehmen' : 
               currentLanguage === 'sq' ? 'Korporativ' :
               'Korporativni'}
            </Badge>
            <Badge className="bg-green-500 text-white">
              {currentLanguage === 'sr' ? 'Motion Graphics' : 
               currentLanguage === 'en' ? 'Motion Graphics' :
               currentLanguage === 'de' ? 'Motion Graphics' : 
               currentLanguage === 'sq' ? 'Grafika në Lëvizje' :
               'Motion Graphics'}
            </Badge>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Corporate video production case study — project hero"
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
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
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {currentLanguage === 'sr' ? 'Profesionalna Korporativna Video Produkcija' : 
                 currentLanguage === 'en' ? 'Professional Corporate Video Production' :
                 currentLanguage === 'de' ? 'Professionelle Unternehmensvideoproduktion' : 
                 currentLanguage === 'sq' ? 'Prodhimi Profesional i Videos Korporative' :
                 'Profesionalna Korporativna Video Produkcija'}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {currentLanguage === 'sr' ? 'Kreiram korporativne video materijale koji efikasno prenose vrednosti, viziju i misiju vaše kompanije. Kombinujem profesionalnu produkciju sa naprednim editovanjem u Adobe Premiere Pro i After Effects za kreiranje video sadržaja koji angažuje publiku i gradi poverenje.' : 
                 currentLanguage === 'en' ? 'I create corporate video materials that effectively convey your company\'s values, vision and mission. I combine professional production with advanced editing in Adobe Premiere Pro and After Effects to create video content that engages audiences and builds trust.' :
                 currentLanguage === 'de' ? 'Ich erstelle Unternehmensvideos, die die Werte, Vision und Mission Ihres Unternehmens effektiv vermitteln. Ich kombiniere professionelle Produktion mit fortgeschrittener Bearbeitung in Adobe Premiere Pro und After Effects, um Videoinhalte zu erstellen, die das Publikum ansprechen und Vertrauen aufbauen.' : 
                 currentLanguage === 'sq' ? 'Krijoj materiale video korporative që përcjellin në mënyrë efektive vlerat, vizionin dhe misionin e kompanisë suaj. Kombinoj prodhimin profesional me editimin e avancuar në Adobe Premiere Pro dhe After Effects për të krijuar përmbajtje video që angazhon audiencën dhe ndërton besim.' :
                 'Kreiram korporativne video materijale koji efikasno prenose vrednosti, viziju i misiju vaše kompanije. Kombinujem profesionalnu produkciju sa naprednim editovanjem u Adobe Premiere Pro i After Effects za kreiranje video sadržaja koji angažuje publiku i gradi poverenje.'}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Profesionalno Snimanje' : 
                       currentLanguage === 'en' ? 'Professional Filming' :
                       currentLanguage === 'de' ? 'Professionelle Aufnahme' : 
                       currentLanguage === 'sq' ? 'Filmimi Profesional' :
                       'Profesionalno Snimanje'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? '4K video snimanje sa profesionalnim kamerama, stabilizatorima i profesionalnim osvetljenjem.' : 
                     currentLanguage === 'en' ? '4K video recording with professional cameras, stabilizers and professional lighting.' :
                     currentLanguage === 'de' ? '4K-Videoaufnahme mit professionellen Kameras, Stabilisatoren und professioneller Beleuchtung.' : 
                     currentLanguage === 'sq' ? 'Regjistrimi 4K video me kamera profesionale, stabilizatorë dhe ndriçim profesional.' :
                     '4K video snimanje sa profesionalnim kamerama, stabilizatorima i profesionalnim osvetljenjem.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Adobe Premiere Editing' : 
                       currentLanguage === 'en' ? 'Adobe Premiere Editing' :
                       currentLanguage === 'de' ? 'Adobe Premiere Bearbeitung' : 
                       currentLanguage === 'sq' ? 'Editimi Adobe Premiere' :
                       'Adobe Premiere Editing'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Napredne tehnike editovanja u Adobe Premiere Pro sa color grading-om i audio post-produkcijom.' : 
                     currentLanguage === 'en' ? 'Advanced editing techniques in Adobe Premiere Pro with color grading and audio post-production.' :
                     currentLanguage === 'de' ? 'Fortgeschrittene Bearbeitungstechniken in Adobe Premiere Pro mit Color Grading und Audio-Postproduktion.' : 
                     currentLanguage === 'sq' ? 'Teknika të avancuara editimi në Adobe Premiere Pro me korrigjim ngjyre dhe post-prodhim audio.' :
                     'Napredne tehnike editovanja u Adobe Premiere Pro sa color grading-om i audio post-produkcijom.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'After Effects Graphics' : 
                       currentLanguage === 'en' ? 'After Effects Graphics' :
                       currentLanguage === 'de' ? 'After Effects Grafiken' : 
                       currentLanguage === 'sq' ? 'Grafikat After Effects' :
                       'After Effects Graphics'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Motion graphics, animacije teksta, vizuelni efekti i kompositovanje u Adobe After Effects.' : 
                     currentLanguage === 'en' ? 'Motion graphics, text animations, visual effects and compositing in Adobe After Effects.' :
                     currentLanguage === 'de' ? 'Motion Graphics, Textanimationen, visuelle Effekte und Compositing in Adobe After Effects.' : 
                     currentLanguage === 'sq' ? 'Grafika në lëvizje, animacione teksti, efekte vizuale dhe kompozitim në Adobe After Effects.' :
                     'Motion graphics, animacije teksta, vizuelni efekti i kompositovanje u Adobe After Effects.'}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold">
                      {currentLanguage === 'sr' ? 'Brend Integration' : 
                       currentLanguage === 'en' ? 'Brand Integration' :
                       currentLanguage === 'de' ? 'Marken-Integration' : 
                       currentLanguage === 'sq' ? 'Integrimi i Markës' :
                       'Brend Integration'}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {currentLanguage === 'sr' ? 'Uključivanje brend elemenata, logo animacija i konzistentnost sa vizuelnim identitetom.' : 
                     currentLanguage === 'en' ? 'Incorporation of brand elements, logo animations and consistency with visual identity.' :
                     currentLanguage === 'de' ? 'Einbindung von Markenelementen, Logo-Animationen und Konsistenz mit der visuellen Identität.' : 
                     currentLanguage === 'sq' ? 'Përfshirja e elementeve të markës, animacionet e logos dhe qëndrueshmëria me identitetin vizual.' :
                     'Uključivanje brend elemenata, logo animacija i konzistentnost sa vizuelnim identitetom.'}
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
                      {currentLanguage === 'sr' ? 'Korporativni Video' : 
                       currentLanguage === 'en' ? 'Corporate Video' :
                       currentLanguage === 'de' ? 'Unternehmensvideo' : 
                       currentLanguage === 'sq' ? 'Video Korporativ' :
                       'Korporativni Video'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Software' : 
                       currentLanguage === 'en' ? 'Software' :
                       currentLanguage === 'de' ? 'Software' : 
                       currentLanguage === 'sq' ? 'Softueri' :
                       'Software'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Adobe Premiere Pro</Badge>
                      <Badge variant="outline">After Effects</Badge>
                      <Badge variant="outline">Audition</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {currentLanguage === 'sr' ? 'Usluge' : 
                       currentLanguage === 'en' ? 'Services' :
                       currentLanguage === 'de' ? 'Dienstleistungen' : 
                       currentLanguage === 'sq' ? 'Shërbimet' :
                       'Usluge'}
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• {currentLanguage === 'sr' ? 'Kreativni koncept' : 
                             currentLanguage === 'en' ? 'Creative concept' :
                             currentLanguage === 'de' ? 'Kreatives Konzept' : 
                             currentLanguage === 'sq' ? 'Koncepti kreativ' :
                             'Kreativni koncept'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Snimanje u studiju i lokaciji' : 
                             currentLanguage === 'en' ? 'Studio and location filming' :
                             currentLanguage === 'de' ? 'Studio- und Außenaufnahmen' : 
                             currentLanguage === 'sq' ? 'Filmimi në studio dhe lokacion' :
                             'Snimanje u studiju i lokaciji'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Professional lighting setup' : 
                             currentLanguage === 'en' ? 'Professional lighting setup' :
                             currentLanguage === 'de' ? 'Professionelle Beleuchtung' : 
                             currentLanguage === 'sq' ? 'Vendosja e ndriçimit profesional' :
                             'Professional lighting setup'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Video editing & post-produkcija' : 
                             currentLanguage === 'en' ? 'Video editing & post-production' :
                             currentLanguage === 'de' ? 'Videobearbeitung & Postproduktion' : 
                             currentLanguage === 'sq' ? 'Editimi i videos & post-prodhimi' :
                             'Video editing & post-produkcija'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Motion graphics dizajn' : 
                             currentLanguage === 'en' ? 'Motion graphics design' :
                             currentLanguage === 'de' ? 'Motion Graphics Design' : 
                             currentLanguage === 'sq' ? 'Dizajni i grafikave në lëvizje' :
                             'Motion graphics dizajn'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Color grading' : 
                             currentLanguage === 'en' ? 'Color grading' :
                             currentLanguage === 'de' ? 'Color Grading' : 
                             currentLanguage === 'sq' ? 'Korrigjimi i ngjyrave' :
                             'Color grading'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Audio miksovanje' : 
                             currentLanguage === 'en' ? 'Audio mixing' :
                             currentLanguage === 'de' ? 'Audio-Mixing' : 
                             currentLanguage === 'sq' ? 'Miksi i audios' :
                             'Audio miksovanje'}</li>
                      <li>• {currentLanguage === 'sr' ? 'Logo animacija' : 
                             currentLanguage === 'en' ? 'Logo animation' :
                             currentLanguage === 'de' ? 'Logo-Animation' : 
                             currentLanguage === 'sq' ? 'Animacioni i logos' :
                             'Logo animacija'}</li>
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
                          {currentLanguage === 'sr' ? '65% povećanje engagement-a' : 
                           currentLanguage === 'en' ? '65% increase in engagement' :
                           currentLanguage === 'de' ? '65% Steigerung des Engagements' : 
                           currentLanguage === 'sq' ? '65% rritje e angazhimit' :
                           '65% povećanje engagement-a'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? '250% više share-ova' : 
                           currentLanguage === 'en' ? '250% more shares' :
                           currentLanguage === 'de' ? '250% mehr Shares' : 
                           currentLanguage === 'sq' ? '250% më shumë ndarja' :
                           '250% više share-ova'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">
                          {currentLanguage === 'sr' ? 'Poboljšanje brend percepcije' : 
                           currentLanguage === 'en' ? 'Improved brand perception' :
                           currentLanguage === 'de' ? 'Verbesserte Markenwahrnehmung' : 
                           currentLanguage === 'sq' ? 'Perceptim i përmirësuar i markës' :
                           'Poboljšanje brend percepcije'}
                        </span>
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
              {currentLanguage === 'sr' ? 'Video Editing Process - Adobe Premiere Pro & After Effects' : 
               currentLanguage === 'en' ? 'Video Editing Process - Adobe Premiere Pro & After Effects' :
               currentLanguage === 'de' ? 'Video-Bearbeitungsprozess - Adobe Premiere Pro & After Effects' : 
               currentLanguage === 'sq' ? 'Procesi i Editimit të Videos - Adobe Premiere Pro & After Effects' :
               'Video Editing Process - Adobe Premiere Pro & After Effects'}
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
              {currentLanguage === 'sr' ? 'Video Produkcioni Proces' : 
               currentLanguage === 'en' ? 'Video Production Process' :
               currentLanguage === 'de' ? 'Videoproduktionsprozess' : 
               currentLanguage === 'sq' ? 'Procesi i Prodhimit të Videos' :
               'Video Produkcioni Proces'}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-500">1</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Pre-produkcija' : 
                   currentLanguage === 'en' ? 'Pre-production' :
                   currentLanguage === 'de' ? 'Vorproduktion' : 
                   currentLanguage === 'sq' ? 'Para-prodhimi' :
                   'Pre-produkcija'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Kreativni koncept, scenario, storyboard i planiranje snimanja' : 
                   currentLanguage === 'en' ? 'Creative concept, scenario, storyboard and filming planning' :
                   currentLanguage === 'de' ? 'Kreatives Konzept, Drehbuch, Storyboard und Drehplanung' : 
                   currentLanguage === 'sq' ? 'Koncepti kreativ, skenari, storyboard dhe planifikimi i filmimit' :
                   'Kreativni koncept, scenario, storyboard i planiranje snimanja'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-500">2</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Snimanje' : 
                   currentLanguage === 'en' ? 'Filming' :
                   currentLanguage === 'de' ? 'Aufnahme' : 
                   currentLanguage === 'sq' ? 'Filmimi' :
                   'Snimanje'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Profesionalne kamere, osvetljenje i audio snimanje' : 
                   currentLanguage === 'en' ? 'Professional cameras, lighting and audio recording' :
                   currentLanguage === 'de' ? 'Professionelle Kameras, Beleuchtung und Audioaufnahme' : 
                   currentLanguage === 'sq' ? 'Kamera profesionale, ndriçim dhe regjistrim audio' :
                   'Profesionalne kamere, osvetljenje i audio snimanje'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-500">3</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Post-produkcija' : 
                   currentLanguage === 'en' ? 'Post-production' :
                   currentLanguage === 'de' ? 'Postproduktion' : 
                   currentLanguage === 'sq' ? 'Post-prodhimi' :
                   'Post-produkcija'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Editing u Premiere Pro, After Effects motion graphics' : 
                   currentLanguage === 'en' ? 'Editing in Premiere Pro, After Effects motion graphics' :
                   currentLanguage === 'de' ? 'Bearbeitung in Premiere Pro, After Effects Motion Graphics' : 
                   currentLanguage === 'sq' ? 'Editimi në Premiere Pro, grafika të lëvizshme After Effects' :
                   'Editing u Premiere Pro, After Effects motion graphics'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">4</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {currentLanguage === 'sr' ? 'Finalizacija' : 
                   currentLanguage === 'en' ? 'Finalization' :
                   currentLanguage === 'de' ? 'Fertigstellung' : 
                   currentLanguage === 'sq' ? 'Finalizimi' :
                   'Finalizacija'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'sr' ? 'Color grading, audio miksovanje i optimizacija za platforme' : 
                   currentLanguage === 'en' ? 'Color grading, audio mixing and platform optimization' :
                   currentLanguage === 'de' ? 'Color Grading, Audio-Mixing und Plattform-Optimierung' : 
                   currentLanguage === 'sq' ? 'Korrigjimi i ngjyrave, miksi i audios dhe optimizimi për platforma' :
                   'Color grading, audio miksovanje i optimizacija za platforme'}
                </p>
              </Card>
            </div>
          </div>

          {/* Software Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {currentLanguage === 'sr' ? 'Professional Software Expertise' : 
               currentLanguage === 'en' ? 'Professional Software Expertise' :
               currentLanguage === 'de' ? 'Professionelle Software-Expertise' : 
               currentLanguage === 'sq' ? 'Ekspertiza Profesionale e Softuerit' :
               'Professional Software Expertise'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Adobe Premiere Pro</h3>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Profesionalno video editovanje sa naprednim tehnikama' : 
                   currentLanguage === 'en' ? 'Professional video editing with advanced techniques' :
                   currentLanguage === 'de' ? 'Professionelle Videobearbeitung mit fortgeschrittenen Techniken' : 
                   currentLanguage === 'sq' ? 'Editimi profesional i videos me teknika të avancuara' :
                   'Profesionalno video editovanje sa naprednim tehnikama'}
                </p>
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
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Motion graphics i vizuelni efekti' : 
                   currentLanguage === 'en' ? 'Motion graphics and visual effects' :
                   currentLanguage === 'de' ? 'Motion Graphics und visuelle Effekte' : 
                   currentLanguage === 'sq' ? 'Grafika në lëvizje dhe efekte vizuale' :
                   'Motion graphics i vizuelni efekti'}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {currentLanguage === 'sr' ? '2D & 3D animacije' : 
                          currentLanguage === 'en' ? '2D & 3D animations' :
                          currentLanguage === 'de' ? '2D & 3D Animationen' : 
                          currentLanguage === 'sq' ? 'Animacione 2D & 3D' :
                          '2D & 3D animacije'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Logo animacija' : 
                          currentLanguage === 'en' ? 'Logo animation' :
                          currentLanguage === 'de' ? 'Logo-Animation' : 
                          currentLanguage === 'sq' ? 'Animacion logo' :
                          'Logo animacija'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Kompoziting' : 
                          currentLanguage === 'en' ? 'Compositing' :
                          currentLanguage === 'de' ? 'Compositing' : 
                          currentLanguage === 'sq' ? 'Kompozitimi' :
                          'Kompoziting'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Particle systems' : 
                          currentLanguage === 'en' ? 'Particle systems' :
                          currentLanguage === 'de' ? 'Partikelsysteme' : 
                          currentLanguage === 'sq' ? 'Sistemet e grimcave' :
                          'Particle systems'}</li>
                </ul>
              </Card>

              <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-orange-50">
                <div className="w-20 h-20 bg-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Adobe Audition</h3>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'sr' ? 'Profesionalna audio post-produkcija' : 
                   currentLanguage === 'en' ? 'Professional audio post-production' :
                   currentLanguage === 'de' ? 'Professionelle Audio-Postproduktion' : 
                   currentLanguage === 'sq' ? 'Post-prodhimi profesional i audios' :
                   'Profesionalna audio post-produkcija'}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {currentLanguage === 'sr' ? 'Noise reduction' : 
                          currentLanguage === 'en' ? 'Noise reduction' :
                          currentLanguage === 'de' ? 'Rauschunterdrückung' : 
                          currentLanguage === 'sq' ? 'Zvogëlimi i zhurmës' :
                          'Noise reduction'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Audio enhancement' : 
                          currentLanguage === 'en' ? 'Audio enhancement' :
                          currentLanguage === 'de' ? 'Audio-Verbesserung' : 
                          currentLanguage === 'sq' ? 'Përmirësimi i audios' :
                          'Audio enhancement'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Voice-over recording' : 
                          currentLanguage === 'en' ? 'Voice-over recording' :
                          currentLanguage === 'de' ? 'Voice-Over-Aufnahme' : 
                          currentLanguage === 'sq' ? 'Regjistrimi i zërit' :
                          'Voice-over recording'}</li>
                  <li>• {currentLanguage === 'sr' ? 'Surround sound mixing' : 
                          currentLanguage === 'en' ? 'Surround sound mixing' :
                          currentLanguage === 'de' ? 'Surround-Sound-Mixing' : 
                          currentLanguage === 'sq' ? 'Miksi i zërit rrethues' :
                          'Surround sound mixing'}</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'sr' ? 'Spremni za Profesionalni Korporativni Video?' : 
               currentLanguage === 'en' ? 'Ready for Professional Corporate Video?' :
               currentLanguage === 'de' ? 'Bereit für professionelles Unternehmensvideo?' : 
               currentLanguage === 'sq' ? 'Gati për Video Korporativ Profesional?' :
               'Spremni za Profesionalni Korporativni Video?'}
            </h3>
            <p className="text-lg mb-6">
              {currentLanguage === 'sr' ? 'Kontaktirajte me za kreiranje impresivnog video materijala koji će predstaviti vašu kompaniju na najbolji način.' : 
               currentLanguage === 'en' ? 'Contact me to create impressive video content that will present your company in the best way.' :
               currentLanguage === 'de' ? 'Kontaktieren Sie mich für die Erstellung beeindruckender Videoinhalte, die Ihr Unternehmen optimal präsentieren.' : 
               currentLanguage === 'sq' ? 'Kontaktoni me për krijimin e përmbajtjes video impresionuese që do ta prezantojë kompanin tuaj në mënyrën më të mirë.' :
               'Kontaktirajte me za kreiranje impresivnog video materijala koji će predstaviti vašu kompaniju na najbolji način.'}
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-blue-500 hover:bg-gray-100">
                {currentLanguage === 'sr' ? 'Kreiraj Moj Korporativni Video' : 
                 currentLanguage === 'en' ? 'Create My Corporate Video' :
                 currentLanguage === 'de' ? 'Mein Unternehmensvideo erstellen' : 
                 currentLanguage === 'sq' ? 'Krijo Video Korporativ' :
                 'Kreiraj Moj Korporativni Video'}
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