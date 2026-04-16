import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import LanguageSwitcherInline from "./LanguageSwitcherInline";
import logoImage from "@assets/MULTIMEDIA AGRONDESIGN LOGO IN BIANCO_1755555880911.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tSpec } = useLanguage();
  const [location] = useLocation();

  const isHomePage = location === "/";

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems: { id: string; label: string; href: string; section?: string }[] = [
    { id: "home", label: tSpec.nav.home, href: "/", section: "hero-h1" },
    { id: "services", label: tSpec.nav.services, href: "/services", section: "services-preview" },
    { id: "about", label: tSpec.nav.about, href: "/about", section: "about" },
  ];

  const contactHref = isHomePage ? "/#contact" : "/contact";
  const contactScroll = () => {
    if (isHomePage) scrollToSection("contact");
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#07070b]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex-shrink-0">
            {isHomePage ? (
              <button
                type="button"
                onClick={() => scrollToSection("hero-h1")}
                className="flex items-center"
                data-testid="logo-button"
                aria-label={tSpec.nav.home}
              >
                <img src={logoImage} alt="AGR Multimedia" className="h-7 md:h-8 w-auto" />
              </button>
            ) : (
              <Link href="/#hero-h1" className="flex items-center" data-testid="logo-button">
                <img src={logoImage} alt="AGR Multimedia" className="h-7 md:h-8 w-auto" />
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.section!)}
                  className="text-[0.9375rem] text-white/75 hover:text-white transition-colors"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-[0.9375rem] text-white/75 hover:text-white transition-colors"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </Link>
              ),
            )}
            {isHomePage ? (
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-white px-5 py-2 text-[0.875rem] font-semibold text-[#0a0a0f] hover:bg-white/90 transition-colors"
                data-testid="nav-contact-cta"
              >
                {tSpec.nav.ctaQuote}
              </button>
            ) : (
              <Link
                href={contactHref}
                className="rounded-full bg-white px-5 py-2 text-[0.875rem] font-semibold text-[#0a0a0f] hover:bg-white/90 transition-colors"
                data-testid="nav-contact-cta"
              >
                {tSpec.nav.ctaQuote}
              </Link>
            )}
            <LanguageSwitcherInline />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcherInline />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 p-1"
              data-testid="mobile-menu-toggle"
              aria-expanded={isMenuOpen}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#07070b]" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-1 max-w-6xl mx-auto">
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.section!)}
                  className="block w-full text-left py-3 text-white/85 text-[0.9375rem]"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block w-full py-3 text-white/85 text-[0.9375rem]"
                  data-testid={`mobile-nav-${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            {isHomePage ? (
              <button
                type="button"
                onClick={contactScroll}
                className="mt-3 w-full rounded-full bg-white py-3 text-center text-[0.875rem] font-semibold text-[#0a0a0f]"
                data-testid="mobile-nav-contact"
              >
                {tSpec.nav.ctaQuote}
              </button>
            ) : (
              <Link
                href="/contact"
                className="mt-3 block w-full rounded-full bg-white py-3 text-center text-[0.875rem] font-semibold text-[#0a0a0f]"
                data-testid="mobile-nav-contact"
                onClick={() => setIsMenuOpen(false)}
              >
                {tSpec.nav.ctaQuote}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
