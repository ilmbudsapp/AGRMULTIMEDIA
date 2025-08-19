import { useLanguage } from "@/contexts/LanguageContext";
import { Settings, TrendingUp, BarChart3, Users, CheckCircle, ArrowRight, Target, Clock, Trophy, Eye, ArrowLeft } from "lucide-react";
import consultingImage from "@assets/generated_images/Professional_digital_consulting_workspace_7a5b279f.png";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Consulting() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Target className="text-white text-2xl" />,
      title: t.consulting.services.digitalStrategy.title,
      description: t.consulting.services.digitalStrategy.description,
      features: t.consulting.services.digitalStrategy.features,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="text-white text-2xl" />,
      title: t.consulting.services.uxAudit.title,
      description: t.consulting.services.uxAudit.description,
      features: t.consulting.services.uxAudit.features,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="text-white text-2xl" />,
      title: t.consulting.services.analytics.title,
      description: t.consulting.services.analytics.description,
      features: t.consulting.services.analytics.features,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
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
                {t.consulting?.hero?.title || "Konsalting & Strategijsko Savetovanje"}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.consulting?.hero?.subtitle || "Ekspertsko savetovanje za digitalni uspeh"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy via-electric-blue to-purple-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="consulting-hero-title">
                {t.consulting.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100" data-testid="consulting-hero-subtitle">
                {t.consulting.hero.subtitle}
              </p>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed" data-testid="consulting-hero-description">
                {t.consulting.hero.description}
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-white text-navy px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center"
                data-testid="consulting-hero-cta"
              >
                {t.consulting.cta.button} <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="relative">
              <img 
                src={consultingImage} 
                alt="Digital Consulting Workspace"
                className="rounded-2xl shadow-2xl w-full h-auto object-contain"
                data-testid="consulting-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="consulting-services-title">
              {t.consulting.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="consulting-services-subtitle">
              {t.consulting.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover-scale border border-gray-100"
                data-testid={`consulting-service-card-${index}`}
              >
                <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-navy mb-4" data-testid={`consulting-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6" data-testid={`consulting-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600" data-testid={`consulting-service-feature-${index}-${featureIndex}`}>
                      <CheckCircle className="text-electric-blue w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="consulting-process-title">
              {t.consulting.process.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.consulting.process.steps.map((step, index) => (
              <div key={index} className="text-center" data-testid={`consulting-process-step-${index}`}>
                <div className="bg-gradient-to-r from-electric-blue to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4" data-testid={`consulting-process-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-gray-600" data-testid={`consulting-process-step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="consulting-benefits-title">
              {t.consulting.benefits.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.consulting.benefits.items.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" data-testid={`consulting-benefit-card-${index}`}>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-electric-blue to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3" data-testid={`consulting-benefit-title-${index}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600" data-testid={`consulting-benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-electric-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="consulting-cta-title">
            {t.consulting.cta.title}
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-testid="consulting-cta-description">
            {t.consulting.cta.description}
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-navy px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center"
            data-testid="consulting-cta-button"
          >
            {t.consulting.cta.button} <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}