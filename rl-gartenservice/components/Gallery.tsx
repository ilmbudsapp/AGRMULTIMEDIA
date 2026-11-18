"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Compare } from "@/components/Compare";
import { Crumbs } from "@/components/Crumbs";
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/site";
import { fitSrc } from "@/lib/media";

const serviceLinks: Record<GalleryCategory, { href: string; label: string }> = {
  gartenpflege: { href: "/gartenpflege", label: "Zur Gartenpflege" },
  gartenbau: { href: "/gartenbau", label: "Zum Gartenbau" },
  hausmeisterservice: { href: "/hausmeisterservice", label: "Zum Hausmeisterservice" },
  reinigung: { href: "/hausmeisterservice", label: "Zur Reinigung" },
  boden: { href: "/bodenbelag", label: "Zu den Bodenbelagsarbeiten" },
};

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "alle">("alle");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const filters = galleryCategories.filter(
    (category) => category.id === "alle" || gallery.some((item) => item.category === category.id),
  );
  const visible = gallery.filter((item) => filter === "alle" || item.category === filter);

  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="gallery" id="galerie">
      <div className="gallery-head" data-reveal>
        <Crumbs items={[{ href: "/", label: "Startseite" }, { label: "Galerie" }]} />
        <p className="eyebrow">Galerie</p>
        <h1>Bilder und Videos aus der Arbeit</h1>
        <p className="intro">
          Fotos und Videos aus Gartenpflege, Gartenbau und Bodenbelägen. Die Vorher- und Nachher-Ansicht der
          Terrasse zeigt denselben Auftrag.
        </p>
      </div>
      <div className="filters" role="tablist" aria-label="Galerie filtern">
        {filters.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={filter === category.id}
            className={filter === category.id ? "is-active" : undefined}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="gallery-empty">In dieser Auswahl sind noch keine Bilder hinterlegt.</p>
      ) : (
        <ul className="gallery-grid" key={filter}>
          {visible.map((item) => (
            <li key={item.id} className={item.kind === "compare" ? "gallery-item is-feature" : "gallery-item"}>
              <div data-reveal="card">
              <div className="card-motion gallery-card">
              {item.kind === "compare" ? (
                <Compare before={item.before} after={item.after} title={item.title} />
              ) : (
                <>
                  <button
                    type="button"
                    className="shot"
                    aria-label={item.alt}
                    onClick={() => setActive(item)}
                  >
                    <img
                      src={fitSrc(item.kind === "video" ? item.poster : item.src)}
                      srcSet={`${fitSrc(item.kind === "video" ? item.poster : item.src)} 960w, ${item.kind === "video" ? item.poster : item.src} 1800w`}
                      sizes="(max-width: 719px) 92vw, (min-width: 980px) 340px, 46vw"
                      alt={item.alt}
                      width={960}
                      height={720}
                      loading="lazy"
                      decoding="async"
                    />
                    {item.kind === "video" ? <span className="badge">Video</span> : null}
                  </button>
                  <p className="gallery-caption">{item.alt}</p>
                </>
              )}
              <p className="gallery-more">
                <a href={serviceLinks[item.category].href}>{serviceLinks[item.category].label}</a>
              </p>
              </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <a className="button button-gold page-cta" href="/kontakt">
        Jetzt kostenlos und unverbindlich anfragen
      </a>

      {active ? (
        <div className="lightbox" role="presentation" onClick={() => setActive(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button ref={closeRef} type="button" className="lightbox-close" onClick={() => setActive(null)}>
              Schließen
            </button>
            <h3 id={titleId}>
              {active.kind === "compare" ? `${active.title}: Vorher / Nachher` : active.alt}
            </h3>
            {active.kind === "compare" ? (
              <Compare before={active.before} after={active.after} title={active.title} />
            ) : active.kind === "video" ? (
              <video controls preload="none" poster={active.poster} src={active.src} />
            ) : (
              <img src={active.src} alt={active.alt} />
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}

