"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BASE, NAV } from "@/lib/site";
import { HeaderLogo } from "./DemoBar";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-9 z-50 border-b border-[#14532d]/10 bg-white/95 backdrop-blur-md">
      <div className="uhu-container flex h-16 items-center justify-between gap-4">
        <HeaderLogo className="mr-2" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname === item.href.replace(/\/$/, "") || (item.href === "/" && pathname === "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                  active ? "bg-[#d8f3dc] text-[#14532d]" : "text-[#52796f] hover:bg-[#f0faf3] hover:text-[#14532d]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/spenden/" className="uhu-btn-primary hidden px-4 py-2 text-sm sm:inline-flex">
            Jetzt spenden
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#14532d]/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-[#14532d]/10 bg-white px-4 py-4 lg:hidden" aria-label="Mobile Navigation">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-[#14532d] hover:bg-[#f0faf3]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
