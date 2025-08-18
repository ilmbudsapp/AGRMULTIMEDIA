import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Monitor, Smartphone, Tablet, Globe, Code, Palette, Search, Shield, Zap, Users } from "lucide-react";
import { Link } from "wouter";
import smartHomeImage from "@assets/generated_images/SmartHome_Control_App_Interface_b31d7e87.png";

export default function WebDesign() {
  const { t } = useLanguage();

  const portfolioItems = [
    {
      id: 1,
      title: "TechFlow Business Solutions",
      description: "Kompleksna web platforma za upravljanje biznisom",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      type: "website",
      features: ["React", "Node.js", "PostgreSQL", "Real-time Analytics"]
    },
    {
      id: 2,
      title: "EcoMarket Online Store",
      description: "E-commerce platforma za ekološke proizvode",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      type: "website",
      features: ["Payment Gateway", "Inventory Management", "Multi-language", "Mobile First"]
    },
    {
      id: 3,
      title: "FitLife Mobile App",
      description: "Personalizovana fitness aplikacija za Android i iOS",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop",
      type: "mobile",
      features: ["Workout Tracking", "Nutrition Plans", "Social Features", "Offline Mode"]
    },
    {
      id: 4,
      title: "SmartHome Control",
      description: "IoT aplikacija za upravljanje pametnim domom",
      image: smartHomeImage,
      type: "mobile",
      features: ["Device Control", "Automation", "Voice Commands", "Energy Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
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
                {t.services.items.webDesign.title}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.services.items.webDesign.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-navy to-electric-blue bg-clip-text text-transparent">
            {t.webDesign.hero.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.webDesign.hero.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">{t.webDesign.services.websites.title}</CardTitle>
              <CardDescription>{t.webDesign.services.websites.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {t.webDesign.services.websites.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">{t.webDesign.services.mobileApps.title}</CardTitle>
              <CardDescription>{t.webDesign.services.mobileApps.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {t.webDesign.services.mobileApps.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Tablet className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">{t.webDesign.services.responsive.title}</CardTitle>
              <CardDescription>{t.webDesign.services.responsive.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {t.webDesign.services.responsive.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.webDesign.process.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.webDesign.process.steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-navy to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.webDesign.portfolio.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant={item.type === 'website' ? 'default' : 'secondary'}>
                      {item.type === 'website' ? 'Website' : 'Mobile App'}
                    </Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.webDesign.technologies.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t.webDesign.technologies.frontend.title}
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {t.webDesign.technologies.frontend.items.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t.webDesign.technologies.backend.title}
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {t.webDesign.technologies.backend.items.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t.webDesign.technologies.mobile.title}
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {t.webDesign.technologies.mobile.items.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-navy to-electric-blue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">{t.webDesign.cta.title}</h3>
          <p className="text-lg mb-6 opacity-90">{t.webDesign.cta.description}</p>
          <Link href="/#contact">
            <Button size="lg" variant="secondary" className="bg-white text-navy hover:bg-gray-100" data-testid="button-contact-us">
              {t.webDesign.cta.button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}