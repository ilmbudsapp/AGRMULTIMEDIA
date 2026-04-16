import { Code, Palette, Megaphone, Camera, Settings, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="text-white w-6 h-6" />,
      title: t.services.items.webDesign.title,
      description: t.services.items.webDesign.description,
      features: t.services.items.webDesign.features,
      gradient: "from-electric-blue to-cyan-500",
      link: "/web-design",
    },
    {
      icon: <Palette className="text-white w-6 h-6" />,
      title: t.services.items.graphicDesign.title,
      description: t.services.items.graphicDesign.description,
      features: t.services.items.graphicDesign.features,
      gradient: "from-purple-500 to-pink-500",
      link: "/graphic-design",
    },
    {
      icon: <Megaphone className="text-white w-6 h-6" />,
      title: t.services.items.digitalMarketing.title,
      description: t.services.items.digitalMarketing.description,
      features: t.services.items.digitalMarketing.features,
      gradient: "from-emerald-500 to-teal-500",
      link: "/digital-marketing",
    },
    {
      icon: <Camera className="text-white w-6 h-6" />,
      title: t.services.items.photography.title,
      description: t.services.items.photography.description,
      features: t.services.items.photography.features,
      gradient: "from-sky-500 to-blue-600",
      link: "/photography",
    },
    {
      icon: <Settings className="text-white w-6 h-6" />,
      title: t.services.items.consulting.title,
      description: t.services.items.consulting.description,
      features: t.services.items.consulting.features,
      gradient: "from-violet-500 to-purple-600",
      link: "/consulting",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-[#f0eff7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-electric-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            {t.nav.services}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy mb-6 tracking-tight" data-testid="services-title">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="services-subtitle">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover-lift card-glow overflow-hidden animate-fade-in-up ${
                index === 0 ? "animate-fade-in-up-delay-1" : ""
              } ${index === 1 ? "animate-fade-in-up-delay-2" : ""} ${
                index === 2 ? "animate-fade-in-up-delay-3" : ""
              } ${index === 3 ? "animate-fade-in-up-delay-4" : ""} ${
                index === 4 ? "animate-fade-in-up-delay-5" : ""
              } ${index === 5 ? "animate-fade-in-up-delay-6" : ""}`}
              data-testid={`service-card-${index}`}
            >
              <div
                className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3
                className="text-xl font-bold text-navy mb-3 group-hover:text-electric-blue transition-colors duration-300"
                data-testid={`service-title-${index}`}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 text-sm"
                    data-testid={`service-feature-${index}-${featureIndex}`}
                  >
                    <Check className="text-electric-blue w-4 h-4 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              {service.link ? (
                <Link href={service.link}>
                  <button
                    className="inline-flex items-center gap-2 text-electric-blue font-bold hover:gap-3 transition-all duration-300"
                    data-testid={`service-cta-${index}`}
                  >
                    {t.services.learnMore}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              ) : (
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-electric-blue font-bold hover:gap-3 transition-all duration-300"
                  data-testid={`service-cta-${index}`}
                >
                  {t.services.learnMore}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
