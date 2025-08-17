import { Code, Palette, Video, Megaphone, Camera, Settings, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="text-white text-2xl" />,
      title: "Web Dizajn",
      description: "Responsivni, SEO optimizovani web sajtovi koji privlače posetioce i konvertuju ih u klijente.",
      features: ["Custom dizajn", "Mobile responsivan", "SEO optimizacija"],
      gradient: "from-electric-blue to-purple-500"
    },
    {
      icon: <Palette className="text-white text-2xl" />,
      title: "Grafički Dizajn",
      description: "Kreativni vizuelni identiteti, logotipi i marketing materijali koji izdvajaju vaš brend.",
      features: ["Logo dizajn", "Brending", "Print materijali"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Video className="text-white text-2xl" />,
      title: "Video Produkcija",
      description: "Profesionalni video sadržaj koji prenosi vašu poruku i angažuje auditorijum.",
      features: ["Promocijski video", "Animacije", "Post-produkcija"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Megaphone className="text-white text-2xl" />,
      title: "Digitalni Marketing",
      description: "Strategije koje povećavaju vašu online vidljivost i privlače ciljnu publiku.",
      features: ["Social Media", "Google Ads", "Content Marketing"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Camera className="text-white text-2xl" />,
      title: "Fotografija",
      description: "Profesionalne fotografije proizvoda, događaja i portreta za vaš biznis.",
      features: ["Product photography", "Event coverage", "Post-processing"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Settings className="text-white text-2xl" />,
      title: "Konsalting",
      description: "Stručne konsultacije za digitalne strategije i optimizaciju vašeg online prisustva.",
      features: ["Digitalna strategija", "UX/UI audit", "Analitika"],
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="services-title">Naše usluge</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-subtitle">
            Sveobuhvatna multimedia rešenja prilagođena vašim potrebama
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
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center text-electric-blue font-semibold hover:text-purple-500 transition-colors duration-300"
                data-testid={`service-cta-${index}`}
              >
                Saznaj više <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
