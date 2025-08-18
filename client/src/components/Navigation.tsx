import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import LanguageSelector from "./LanguageSelector";
import logoImage from '@assets/MULTIMEDIA AGRONDESIGN LOGO IN NERO_1755440866155.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const [location] = useLocation();
  
  const isHomePage = location === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" data-testid="logo-button">
              <img 
                src={logoImage} 
                alt="MULTIMEDIA AGRONDESIGN" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {isHomePage ? (
                <>
                  <button 
                    onClick={() => scrollToSection('home')} 
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-home"
                  >
                    {t.nav.home}
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-about"
                  >
                    {t.nav.about}
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-services"
                  >
                    {t.nav.services}
                  </button>
                  <button 
                    onClick={() => scrollToSection('portfolio')} 
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-portfolio"
                  >
                    {t.nav.portfolio}
                  </button>
                  <button 
                    onClick={() => scrollToSection('blog')} 
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-blog"
                  >
                    {t.nav.blog}
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/"
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-home"
                  >
                    {t.nav.home}
                  </Link>
                  <Link 
                    href="/#about"
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-about"
                  >
                    {t.nav.about}
                  </Link>
                  <Link 
                    href="/#services"
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-services"
                  >
                    {t.nav.services}
                  </Link>
                  <Link 
                    href="/#portfolio"
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-portfolio"
                  >
                    {t.nav.portfolio}
                  </Link>
                  <Link 
                    href="/#blog"
                    className="text-gray-700 hover:text-electric-blue transition-colors duration-300"
                    data-testid="nav-blog"
                  >
                    {t.nav.blog}
                  </Link>
                </>
              )}
              <LanguageSelector />
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-gradient-to-r from-electric-blue to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                  data-testid="nav-contact-cta"
                >
                  {t.nav.contact}
                </button>
              ) : (
                <Link 
                  href="/#contact"
                  className="bg-gradient-to-r from-electric-blue to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                  data-testid="nav-contact-cta"
                >
                  {t.nav.contact}
                </Link>
              )}
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
            {isHomePage ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-home"
                >
                  {t.nav.home}
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-about"
                >
                  {t.nav.about}
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-services"
                >
                  {t.nav.services}
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-portfolio"
                >
                  {t.nav.portfolio}
                </button>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-blog"
                >
                  {t.nav.blog}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block bg-gradient-to-r from-electric-blue to-purple-500 text-white px-6 py-2 rounded-full text-center"
                  data-testid="mobile-nav-contact"
                >
                  {t.nav.contact}
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/"
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-home"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.home}
                </Link>
                <Link 
                  href="/#about"
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.about}
                </Link>
                <Link 
                  href="/#services"
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-services"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.services}
                </Link>
                <Link 
                  href="/#portfolio"
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-portfolio"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.portfolio}
                </Link>
                <Link 
                  href="/#blog"
                  className="block w-full text-left text-gray-700 hover:text-electric-blue transition-colors duration-300"
                  data-testid="mobile-nav-blog"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.blog}
                </Link>
                <Link 
                  href="/#contact"
                  className="block bg-gradient-to-r from-electric-blue to-purple-500 text-white px-6 py-2 rounded-full text-center"
                  data-testid="mobile-nav-contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.contact}
                </Link>
              </>
            )}
            <div className="py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
