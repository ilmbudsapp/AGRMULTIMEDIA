import { Code, Palette, Video, Megaphone, Camera, Settings, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Code className="text-white text-2xl" />,
      title: t.services.items.webDesign.title,
      description: t.services.items.webDesign.description,
      features: t.services.items.webDesign.features,
      gradient: "from-electric-blue to-purple-500",
      link: "/web-design"
    },
    {
      icon: <Palette className="text-white text-2xl" />,
      title: t.services.items.graphicDesign.title,
      description: t.services.items.graphicDesign.description,
      features: t.services.items.graphicDesign.features,
      gradient: "from-purple-500 to-pink-500",
      link: "/graphic-design"
    },
    {
      icon: <Video className="text-white text-2xl" />,
      title: t.services.items.videoProduction.title,
      description: t.services.items.videoProduction.description,
      features: t.services.items.videoProduction.features,
      gradient: "from-red-500 to-orange-500",
      link: "/video-production"
    },
    {
      icon: <Megaphone className="text-white text-2xl" />,
      title: t.services.items.digitalMarketing.title,
      description: t.services.items.digitalMarketing.description,
      features: t.services.items.digitalMarketing.features,
      gradient: "from-green-500 to-teal-500",
      link: "/digital-marketing"
    },
    {
      icon: <Camera className="text-white text-2xl" />,
      title: t.services.items.photography.title,
      description: t.services.items.photography.description,
      features: t.services.items.photography.features,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Settings className="text-white text-2xl" />,
      title: t.services.items.consulting.title,
      description: t.services.items.consulting.description,
      features: t.services.items.consulting.features,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="services-title">{t.services.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-subtitle">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover-scale border border-gray-100"
              data-testid={`service-card-${index}`}
            >
              <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600" data-testid={`service-feature-${index}-${featureIndex}`}>
                    <Check className="text-electric-blue w-4 h-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              {service.link ? (
                <Link href={service.link}>
                  <button className="inline-flex items-center text-electric-blue font-semibold hover:text-purple-500 transition-colors duration-300" data-testid={`service-cta-${index}`}>
                    {t.services.learnMore} <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              ) : (
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center text-electric-blue font-semibold hover:text-purple-500 transition-colors duration-300"
                  data-testid={`service-cta-${index}`}
                >
                  {t.services.learnMore} <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
