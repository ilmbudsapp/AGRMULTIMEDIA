import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background-hologram.png";

export default function Hero() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Gradient overlay for artistic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-navy/50 to-black/35"></div>
      
      {/* Subtle animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-blue rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-purple-500 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-electric-blue to-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up" data-testid="hero-title">
          {t.hero.title.split(' ')[0]} <span className="gradient-text">{t.hero.title.split(' ')[1]}</span> {t.hero.title.split(' ').slice(2).join(' ')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up max-w-3xl mx-auto" 
           style={{animationDelay: '0.3s'}} 
           data-testid="hero-subtitle">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-gradient-to-r from-electric-blue to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            data-testid="hero-services-cta"
          >
            {t.hero.servicesButton}
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
            data-testid="hero-portfolio-cta"
          >
            {t.hero.portfolioButton}
          </button>
        </div>
        
        <div className="mt-12 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <p className="text-gray-400 mb-4" data-testid="hero-location-title">{t.hero.locationTitle}</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {t.hero.locations.map((location, index) => (
              <span key={index}>
                <span className="text-gray-400 font-medium">{location}</span>
                {index < t.hero.locations.length - 1 && <span className="text-gray-400 ml-8">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-electric-blue transition-colors duration-300"
          data-testid="scroll-down-button"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
