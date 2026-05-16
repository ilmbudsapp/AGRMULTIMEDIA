import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import LanguageSwitcherInline from "./LanguageSwitcherInline";
import { NAV_LANDMARK_LABEL, NAV_MOBILE_TOGGLE } from "@/lib/a11yLandmarks";
import type { Language } from "@/lib/i18n";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tSpec, currentLanguage } = useLanguage();
  const [location, setLocation] = useLocation();

  const isHomePage = location === "/" || location.startsWith("/#");

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMenu();
  };

  const goToAbout = () => {
    closeMenu();
    if (location === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setLocation("/");
    window.history.replaceState(null, "", "/#about");
    window.setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  const navItems: { id: string; label: string; href: string; isAbout?: boolean }[] = [
    { id: "home", label: tSpec.nav.home, href: "/" },
    { id: "webdesign", label: tSpec.nav.webdesignSeo, href: "/webdesign-seo" },
    { id: "video", label: tSpec.nav.videoProduction, href: "/videoproduktion" },
    { id: "portfolio", label: tSpec.nav.portfolio, href: "/portfolio" },
    { id: "reviews", label: tSpec.nav.reviews, href: "/bewertungen" },
    { id: "about", label: tSpec.nav.about, href: "/#about", isAbout: true },
  ];

  const lang = currentLanguage as Language;
  const mobileToggle = NAV_MOBILE_TOGGLE[lang] ?? NAV_MOBILE_TOGGLE.en;

  const linkClass =
    "shrink-0 whitespace-nowrap text-[0.875rem] leading-none text-white/75 hover:text-blue-200 transition-colors lg:text-[0.9rem]";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#333333] bg-[#0a0a0a]/85 backdrop-blur-xl"
      aria-label={NAV_LANDMARK_LABEL[currentLanguage]}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 w-full min-w-0 items-center justify-between gap-4 md:h-16 md:gap-6">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex shrink-0 items-center outline-offset-4"
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
            </Link>
          </div>

          <div className="hidden min-w-0 shrink md:flex md:flex-nowrap md:items-center md:gap-2.5 lg:gap-3 xl:gap-4">
            {navItems.map((item) =>
              item.isAbout ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={goToAbout}
                  className={`${linkClass} cursor-pointer border-0 bg-transparent p-0`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link key={item.id} href={item.href} className={linkClass} data-testid={`nav-${item.id}`}>
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/kontakt"
              className="premium-cta shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[0.8125rem] font-semibold transition hover:brightness-110 lg:px-5 lg:text-[0.875rem]"
              data-testid="nav-contact-cta"
            >
              {tSpec.nav.ctaQuote}
            </Link>
            <LanguageSwitcherInline />
          </div>

          <div className="flex shrink-0 items-center gap-3 md:hidden">
            <LanguageSwitcherInline />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 text-white/90"
              data-testid="mobile-menu-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="site-mobile-menu-panel"
              aria-label={isMenuOpen ? mobileToggle.close : mobileToggle.open}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="site-mobile-menu-panel"
        className="border-t border-[#333333] bg-[#0a0a0a] md:hidden"
        data-testid="mobile-menu"
        role="region"
        aria-label={NAV_LANDMARK_LABEL[lang]}
        hidden={!isMenuOpen}
      >
        <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
          {navItems.map((item) =>
            item.isAbout ? (
              <button
                key={item.id}
                type="button"
                onClick={goToAbout}
                className="block w-full whitespace-nowrap py-3 text-left text-[0.9375rem] text-white/85"
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className="block w-full whitespace-nowrap py-3 text-[0.9375rem] text-white/85"
                data-testid={`mobile-nav-${item.id}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/kontakt"
            className="mt-3 block w-full rounded-full bg-white py-3 text-center text-[0.875rem] font-semibold text-[#0a0a0f]"
            data-testid="mobile-nav-contact"
            onClick={closeMenu}
          >
            {tSpec.nav.ctaQuote}
          </Link>
        </div>
      </div>
    </nav>
  );
}
