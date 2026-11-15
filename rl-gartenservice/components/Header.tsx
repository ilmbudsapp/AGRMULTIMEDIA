"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconBadge } from "@/components/Icons";
import { nav, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#inhalt">
        Zum Inhalt
      </a>
      <div className="header-bar">
        <a className="brand" href={pathname === "/" ? "#start" : "/#start"}>
          <img src="/logo.png" alt="" width={900} height={677} />
          <span>
            <strong>{site.name}</strong>
            <small>{site.subtitle}</small>
          </span>
        </a>
        <a className="header-call" href={site.phoneTel}>
          <IconBadge name="phone" />
          Anrufen
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </div>
      <nav id="site-nav" className={open ? "site-nav open" : "site-nav"} aria-label="Hauptnavigation">
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
