import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import LanguageSwitcherInline from "./LanguageSwitcherInline";
import logoImage from '@assets/MULTIMEDIA AGRONDESIGN LOGO IN BIANCO_1755555880911.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tSpec } = useLanguage();
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

  const navItems: { id: string; label: string; href: string; section?: string }[] = [
    { id: 'home', label: tSpec.nav.home, href: '/', section: 'home' },
    { id: 'services', label: tSpec.nav.services, href: '/services', section: 'services-preview' },
    { id: 'portfolio', label: tSpec.nav.portfolio, href: '/portfolio', section: 'portfolio' },
    { id: 'about', label: tSpec.nav.about, href: '/about', section: 'about' },
    { id: 'blog', label: tSpec.nav.blog, href: '/blog', section: 'blog' },
    { id: 'contact', label: tSpec.nav.contact, href: '/#contact', section: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" data-testid="logo-button">
              <img
                src={logoImage}
                alt="AGR Multimedia"
                className="h-8 md:h-9 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.section!)}
                  className="text-white/90 hover:text-white font-medium transition-colors duration-300"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : item.id === 'contact' ? (
                <Link
                  key={item.id}
                  href={isHomePage ? '/#contact' : '/contact'}
                  className="bg-white text-[#0a0a0f] px-5 py-2.5 rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
                  data-testid="nav-contact-cta"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium transition-colors duration-300"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <LanguageSwitcherInline />
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white hover:text-white/80"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-white/10" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-4">
            <div className="pb-3 border-b border-white/10">
              <LanguageSwitcherInline />
            </div>
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.section!)}
                  className="block w-full text-left text-white/90 hover:text-white transition-colors duration-300"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : item.id === 'contact' ? (
                <Link
                  key={item.id}
                  href={isHomePage ? '/#contact' : '/contact'}
                  className="block w-full text-center bg-white text-[#0a0a0f] py-3 rounded-full font-semibold"
                  data-testid="mobile-nav-contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block w-full text-left text-white/90 hover:text-white transition-colors duration-300"
                  data-testid={`mobile-nav-${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
