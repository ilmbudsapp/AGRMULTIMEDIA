import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import LanguageSwitcherInline from "./LanguageSwitcherInline";
import { NAV_LANDMARK_LABEL, NAV_MOBILE_TOGGLE, NAV_SCROLL_ON_PAGE_HINT } from "@/lib/a11yLandmarks";
import type { Language } from "@/lib/i18n";

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
    { id: "reviews", label: tSpec.nav.reviews, href: "/#bewertungen", section: "bewertungen" },
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 w-full min-w-0 items-center justify-between gap-6 md:h-16 md:gap-8">
          {/* Brand block: logo + tagline one line, tight to logo; tagline from lg up */}
          <div className="flex min-w-0 shrink items-center">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex min-w-0 items-center gap-1.5 md:gap-2 outline-offset-4"
              data-testid="logo-button"
              aria-label={tSpec.nav.home}
            >
              <picture className="shrink-0">
                <source srcSet="/agr-logo-white.webp" type="image/webp" />
                <img
                  src="/agr-logo-white.png"
                  alt="AGR Multimedia"
                  className="h-9 w-auto object-contain mix-blend-screen md:h-11"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <span className="hidden whitespace-nowrap text-[9px] font-medium uppercase leading-none tracking-[0.06em] text-white/80 lg:inline xl:text-[10px] 2xl:text-xs">
                {logoSeoText}
              </span>
            </Link>
          </div>

          <div className="hidden shrink-0 md:flex md:flex-nowrap md:items-center md:gap-4 lg:gap-5">
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.section!)}
                  className="shrink-0 whitespace-nowrap text-[0.875rem] leading-none text-white/75 hover:text-blue-200 transition-colors lg:text-[0.9rem]"
                  data-testid={`nav-${item.id}`}
                  aria-label={`${item.label} ${scrollHint}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="shrink-0 whitespace-nowrap text-[0.875rem] leading-none text-white/75 hover:text-blue-200 transition-colors lg:text-[0.9rem]"
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
                className="premium-cta shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[0.8125rem] font-semibold hover:brightness-110 transition lg:px-5 lg:text-[0.875rem]"
                data-testid="nav-contact-cta"
                aria-label={`${tSpec.nav.ctaQuote} ${scrollHint}`}
              >
                {tSpec.nav.ctaQuote}
              </button>
            ) : (
              <Link
                href={contactHref}
                className="premium-cta shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[0.8125rem] font-semibold hover:brightness-110 transition lg:px-5 lg:text-[0.875rem]"
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
