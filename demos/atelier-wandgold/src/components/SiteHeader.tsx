"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "#start", label: "Start" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#vorher-nachher", label: "Vorher/Nachher" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`siteHeader${scrolled ? " isScrolled" : ""}`}>
      <div className="siteHeaderInner">
        <a href="#start" className="logo logoLink" aria-label={`${SITE.name} – zurück zum Anfang`}>
          <span>AW</span>
          <div>
            <strong>{SITE.name}</strong>
            <small>{SITE.tagline}</small>
          </div>
        </a>

        <nav className="navLinksDesktop" aria-label="Hauptnavigation">
          {NAV.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="navActions">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className="navWaBtn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Anfrage"
          >
            WhatsApp
          </a>

          <button
            type="button"
            className="menuToggle"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden />
            <span aria-hidden />
            <span aria-hidden />
          </button>
        </div>
      </div>

      <nav
        id="mobileNav"
        className={`mobileNav${menuOpen ? " isOpen" : ""}`}
        aria-label="Mobile Navigation"
      >
        {NAV.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          className="mobileNavWa"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          WhatsApp Anfrage
        </a>
      </nav>
    </header>
  );
}
