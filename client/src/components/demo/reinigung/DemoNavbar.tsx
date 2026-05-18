import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GLASS_PANEL_STATIC } from "./styles";
import {
  COMPANY_NAME,
  DEMO_BASE,
  NAV_ITEMS,
  WA_CTA,
  WA_HREF,
} from "@/pages/demo/reinigung/data";

function normalizePath(p: string): string {
  const q = p.split("?")[0] ?? p;
  if (q.length > 1 && q.endsWith("/")) return q.slice(0, -1);
  return q || "/";
}

export default function DemoNavbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const path = normalizePath(location);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/60 ${GLASS_PANEL_STATIC} shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] backdrop-saturate-150`}
    >
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:px-8 md:py-4"
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href={DEMO_BASE}
          className="group rounded-lg outline-none ring-offset-2 ring-offset-slate-50 transition focus-visible:ring-2 focus-visible:ring-cyan-500/80"
          onClick={() => setOpen(false)}
        >
          <span className="block font-bold leading-tight tracking-tight">
            <span className="reinigung-display block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-lg text-transparent md:text-xl lg:text-[1.35rem]">
              Innenreinigung
            </span>
            <span className="mt-0.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 md:text-sm">
              Kfz &amp; Möbel
            </span>
          </span>
          <span className="sr-only">{COMPANY_NAME} — Demo Startseite</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Demo Navigation">
          {NAV_ITEMS.map((item) => {
            const active = path === normalizePath(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-500/15 to-cyan-400/15 text-blue-800 shadow-sm"
                    : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2.5 text-xs font-bold text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition hover:scale-[1.03] md:inline-flex"
        >
          WhatsApp
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/80 text-slate-700 shadow-sm md:hidden"
          aria-expanded={open}
          aria-controls="reinigung-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      {open ? (
        <nav
          id="reinigung-mobile-nav"
          className="border-t border-white/50 bg-white/90 px-4 py-4 backdrop-blur-xl md:hidden"
          aria-label="Mobile Demo Navigation"
        >
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3 text-center text-sm font-bold text-white shadow-lg"
                onClick={() => setOpen(false)}
              >
                {WA_CTA}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
