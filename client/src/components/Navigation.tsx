import { useState, useLayoutEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import LanguageSwitcherInline from "./LanguageSwitcherInline";

function LogoMorph() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const letters = root.querySelectorAll<HTMLElement>(".logo-morph-letter");
    if (!letters.length) return;

    const ctx = gsap.context(() => {
      gsap.from(letters, {
        scale: 0,
        y: -50,
        duration: 1.2,
        stagger: 0.05,
        ease: "elastic.out(1, 0.35)",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const agr = ["A", "G", "R"] as const;
  const multimedia = "MULTIMEDIA".split("");

  return (
    <div
      ref={rootRef}
      className="logo-morph flex flex-wrap items-center gap-x-[0.15em] text-white select-none"
      aria-hidden
    >
      {agr.map((c, i) => (
        <span key={`agr-${i}`} className="logo-morph-letter font-bold">
          {c}
        </span>
      ))}
      <span className="logo-morph-multimedia ml-1 flex gap-x-[0.12em] md:ml-1.5">
        {multimedia.map((c, i) => (
          <span key={`mm-${i}`} className="logo-morph-letter font-semibold">
            {c}
          </span>
        ))}
      </span>
    </div>
  );
}

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
    { id: "home", label: tSpec.nav.home, href: "/", section: "home" },
    { id: "services", label: tSpec.nav.services, href: "/services", section: "services-preview" },
    { id: "portfolio", label: tSpec.nav.portfolio, href: "/portfolio", section: "portfolio" },
    { id: "about", label: tSpec.nav.about, href: "/about", section: "about" },
    { id: "blog", label: tSpec.nav.blog, href: "/blog", section: "blog" },
    { id: "contact", label: tSpec.nav.contact, href: "/#contact", section: "contact" },
  ];

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/80"
              data-testid="logo-button"
              aria-label="AGR Multimedia"
            >
              <LogoMorph />
            </Link>
          </div>

          <div className="nav-links-desktop hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.section!)}
                  className="nav-link-item text-white/90 hover:text-white font-medium"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : item.id === "contact" ? (
                <Link
                  key={item.id}
                  href={isHomePage ? "/#contact" : "/contact"}
                  className="nav-link-cta shrink-0 rounded-full bg-white/95 text-[#0a0a0f] px-5 py-2.5 font-semibold shadow-sm transition-all duration-300 hover:bg-white hover:shadow-[0_0_24px_rgba(96,165,250,0.55)]"
                  data-testid="nav-contact-cta"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="nav-link-item text-white/90 hover:text-white font-medium"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <LanguageSwitcherInline />
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-white hover:bg-white/10 transition-colors"
              data-testid="mobile-menu-toggle"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden nav-glass border-t border-white/20 border-b-0 shadow-inner"
          data-testid="mobile-menu"
        >
          <div className="px-4 py-4 space-y-2">
            <div className="pb-3 mb-2 border-b border-white/15">
              <LanguageSwitcherInline />
            </div>
            {navItems.map((item) =>
              isHomePage && item.section ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.section!)}
                  className="nav-link-item block w-full text-left text-white/90 font-medium py-2"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : item.id === "contact" ? (
                <Link
                  key={item.id}
                  href={isHomePage ? "/#contact" : "/contact"}
                  className="block w-full text-center rounded-full bg-white/95 text-[#0a0a0f] py-3 font-semibold mt-2 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-shadow"
                  data-testid="mobile-nav-contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="nav-link-item block w-full text-left text-white/90 font-medium py-2"
                  data-testid={`mobile-nav-${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
