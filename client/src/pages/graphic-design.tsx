import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Palette, Package, Shirt, Book, Eye, Lightbulb, Pencil, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import innovateTechLogo from "@assets/generated_images/InnovateTech_Solutions_Logo_316280d4.png";
import greenHarvestLogo from "@assets/generated_images/GreenHarvest_Organic_Logo_b1862bc1.png";
import aurumCraftLogo from "@assets/generated_images/AurumCraft_Jewelry_Logo_56980df7.png";
import powerFitBranding from "@assets/generated_images/PowerFit_Pro_Brand_Identity_3cf59135.png";
import aromaCollectiveBranding from "@assets/generated_images/Aroma_Collective_Branding_a7c6f9b6.png";
import printMaterialsMockup from "@assets/generated_images/Print_Materials_Mockup_f741f1f6.png";
import bookMockup from "@assets/generated_images/Professional_Book_Mockup_b23441d8.png";
import multimediaLogoWhite from "@assets/MULTIMEDIA AGRONDESIGN LOGO IN BIANCO_1755555880911.png";
import multimediaLogoBlack from "@assets/MULTIMEDIA AGRONDESIGN LOGO IN NERO_1755555880912.png";

export default function GraphicDesign() {
  const { t } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const logoItems = [
    {
      id: 1,
      title: t.graphicDesign.portfolio.logos.items[0].title,
      description: t.graphicDesign.portfolio.logos.items[0].description,
      category: t.graphicDesign.portfolio.logos.items[0].category,
      image: innovateTechLogo
    },
    {
      id: 2,
      title: t.graphicDesign.portfolio.logos.items[1].title,
      description: t.graphicDesign.portfolio.logos.items[1].description,
      category: t.graphicDesign.portfolio.logos.items[1].category,
      image: greenHarvestLogo
    },
    {
      id: 3,
      title: t.graphicDesign.portfolio.logos.items[2].title,
      description: t.graphicDesign.portfolio.logos.items[2].description,
      category: t.graphicDesign.portfolio.logos.items[2].category,
      image: aurumCraftLogo
    }
  ];

  const brandingItems = [
    {
      id: 1,
      title: t.graphicDesign.portfolio.branding.items[0].title,
      description: t.graphicDesign.portfolio.branding.items[0].description,
      category: t.graphicDesign.portfolio.branding.items[0].category,
      image: powerFitBranding
    },
    {
      id: 2,
      title: t.graphicDesign.portfolio.branding.items[1].title,
      description: t.graphicDesign.portfolio.branding.items[1].description,
      category: t.graphicDesign.portfolio.branding.items[1].category,
      image: aromaCollectiveBranding
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-gray-900 dark:to-slate-900">
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
                {t.services.items.graphicDesign.title}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.services.items.graphicDesign.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.graphicDesign.hero.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.graphicDesign.hero.description}
          </p>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <CardTitle>{t.graphicDesign.services.logoDesign.title}</CardTitle>
              <CardDescription>{t.graphicDesign.services.logoDesign.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {t.graphicDesign.services.logoDesign.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <CardTitle>{t.graphicDesign.services.branding.title}</CardTitle>
              <CardDescription>{t.graphicDesign.services.branding.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {t.graphicDesign.services.branding.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <CardTitle>{t.graphicDesign.services.printMaterials.title}</CardTitle>
              <CardDescription>{t.graphicDesign.services.printMaterials.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {t.graphicDesign.services.printMaterials.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Creative Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.graphicDesign.process.title}
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {t.graphicDesign.process.steps.map((step, index) => {
              const icons = [Lightbulb, Pencil, Eye, CheckCircle];
              const Icon = icons[index];
              
              return (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-8 left-16 w-12 h-0.5 bg-purple-200 hidden md:block last:hidden">
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.graphicDesign.portfolio.title}
          </h3>

          {/* Logo Design */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Palette className="w-6 h-6" />
              {t.graphicDesign.portfolio.logos.title}
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {logoItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-white p-8">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Branding */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Eye className="w-6 h-6" />
              {t.graphicDesign.portfolio.branding.title}
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {brandingItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-lg bg-gray-50">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Print Materials */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Shirt className="w-6 h-6" />
              {t.graphicDesign.portfolio.print.title}
            </h4>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg bg-gray-50">
                <img 
                  src={printMaterialsMockup} 
                  alt={t.graphicDesign.portfolio.print.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{t.graphicDesign.portfolio.print.title}</CardTitle>
                <CardDescription>{t.graphicDesign.portfolio.print.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Book Design */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Book className="w-6 h-6" />
              {t.graphicDesign.portfolio.books.title}
            </h4>
            <div className="flex justify-center">
              <Card className="group hover:shadow-lg transition-all duration-300 max-w-md">
                <div className="aspect-[3/4] overflow-hidden rounded-t-lg bg-white p-8">
                  <img 
                    src={bookMockup} 
                    alt={t.graphicDesign.portfolio.books.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{t.graphicDesign.portfolio.books.title}</CardTitle>
                  <CardDescription>{t.graphicDesign.portfolio.books.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* My Logos */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
              MULTIMEDIA AGRONDESIGN
            </h4>
            <div className="flex justify-center gap-8">
              <Card className="w-48 h-48 flex items-center justify-center bg-white">
                <img 
                  src={multimediaLogoBlack} 
                  alt="MULTIMEDIA AGRONDESIGN Black Logo"
                  className="w-32 h-auto object-contain"
                />
              </Card>
              <Card className="w-48 h-48 flex items-center justify-center bg-black">
                <img 
                  src={multimediaLogoWhite} 
                  alt="MULTIMEDIA AGRONDESIGN White Logo"
                  className="w-32 h-auto object-contain"
                />
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">{t.graphicDesign.cta.title}</h3>
          <p className="text-lg mb-6 opacity-90">{t.graphicDesign.cta.description}</p>
          <Link href="/#contact">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" data-testid="button-contact-us">
              {t.graphicDesign.cta.button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}