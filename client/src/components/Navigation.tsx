import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-2xl font-bold gradient-text"
              data-testid="logo-button"
            >
              AGR Multimedia
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                data-testid="nav-home"
              >
                Početna
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                data-testid="nav-about"
              >
                O nama
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                data-testid="nav-services"
              >
                Usluge
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                data-testid="nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                data-testid="nav-blog"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-electric-blue to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                data-testid="nav-contact-cta"
              >
                Kontakt
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-electric-blue"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
              data-testid="mobile-nav-home"
            >
              Početna
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
              data-testid="mobile-nav-about"
            >
              O nama
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
              data-testid="mobile-nav-services"
            >
              Usluge
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
              data-testid="mobile-nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
              data-testid="mobile-nav-blog"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block bg-gradient-to-r from-electric-blue to-purple-500 text-white px-6 py-2 rounded-full text-center"
              data-testid="mobile-nav-contact"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
