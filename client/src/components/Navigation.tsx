import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import LanguageSwitcherInline from "./LanguageSwitcherInline";
import { NAV_LANDMARK_LABEL, NAV_MOBILE_TOGGLE, NAV_SCROLL_ON_PAGE_HINT } from "@/lib/a11yLandmarks";
import type { Language } from "@/lib/i18n";

const logoImage = "/agr-logo-white.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tSpec, currentLanguage } = useLanguage();
  const [location] = useLocation();

  const isHomePage = location === "/";
  const logoSeoTextByLang: Record<string, string> = {
    en: "WEBDESIGN & SEO IN GEISLINGEN AN DER STEIGE",
    de: "WEBDESIGN & SEO IN GEISLINGEN AN DER STEIGE",
    it: "WEBDESIGN & SEO A GEISLINGEN AN DER STEIGE",
    sr: "WEBDESIGN & SEO U GEISLINGEN AN DER STEIGE",
    al: "WEBDESIGN & SEO NË GEISLINGEN AN DER STEIGE",
  };
  const logoSeoText = logoSeoTextByLang[currentLanguage] ?? logoSeoTextByLang.en;

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  const lang = currentLanguage as Language;
  const scrollHint = NAV_SCROLL_ON_PAGE_HINT[lang] ?? NAV_SCROLL_ON_PAGE_HINT.en;
  const mobileToggle = NAV_MOBILE_TOGGLE[lang] ?? NAV_MOBILE_TOGGLE.en;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#333333] bg-[#0a0a0a]/85 backdrop-blur-xl"
      aria-label={NAV_LANDMARK_LABEL[currentLanguage]}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3"
              data-testid="logo-button"
              aria-label={tSpec.nav.home}
            >
              <img
                src={logoImage}
                alt="AGR Multimedia"
                className="h-9 w-auto object-contain mix-blend-screen md:h-11"
                fetchPriority="high"
                decoding="async"
              />
              <span className="max-w-[185px] text-[10px] font-medium uppercase leading-tight tracking-[0.08em] text-white/80 sm:max-w-none sm:text-xs">
                {logoSeoText}
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.section!)}
                  className="text-[0.9375rem] text-white/75 hover:text-blue-200 transition-colors"
                  data-testid={`nav-${item.id}`}
                  aria-label={`${item.label} ${scrollHint}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-[0.9375rem] text-white/75 hover:text-blue-200 transition-colors"
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
                className="premium-cta rounded-full px-5 py-2 text-[0.875rem] font-semibold hover:brightness-110 transition"
                data-testid="nav-contact-cta"
                aria-label={`${tSpec.nav.ctaQuote} ${scrollHint}`}
              >
                {tSpec.nav.ctaQuote}
              </button>
            ) : (
              <Link
                href={contactHref}
                className="premium-cta rounded-full px-5 py-2 text-[0.875rem] font-semibold hover:brightness-110 transition"
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
              aria-controls="site-mobile-menu-panel"
              aria-label={isMenuOpen ? mobileToggle.close : mobileToggle.open}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="site-mobile-menu-panel"
        className="md:hidden border-t border-[#333333] bg-[#0a0a0a]"
        data-testid="mobile-menu"
        role="region"
        aria-label={NAV_LANDMARK_LABEL[lang]}
        hidden={!isMenuOpen}
      >
        <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.section!)}
                  className="block w-full text-left py-3 text-white/85 text-[0.9375rem]"
                  data-testid={`mobile-nav-${item.id}`}
                  aria-label={`${item.label} ${scrollHint}`}
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
                aria-label={`${tSpec.nav.ctaQuote} ${scrollHint}`}
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
    </nav>
  );
}
