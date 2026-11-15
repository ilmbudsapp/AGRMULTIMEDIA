"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/site";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "alle">("alle");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const visible = gallery.filter((item) => filter === "alle" || item.category === filter);
  const emptyNote =
    filter === "hausmeisterservice" || filter === "reinigung"
      ? "Für diesen Bereich liegen noch keine Referenzfotos oder Videos vor."
      : "In dieser Auswahl sind noch keine Referenzen hinterlegt.";

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
        <p className="eyebrow">Referenzen</p>
        <h2>Galerie / Referenzen</h2>
        <p className="intro">
          Eine Auswahl ausgeführter Arbeiten. Vorher- und Nachher-Bilder zeigen denselben Auftrag.
        </p>
      </div>
      <div className="filters" role="tablist" aria-label="Galerie filtern">
        {galleryCategories.map((category) => (
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
      <p className="gallery-note">
        Für Hausmeisterservice und Reinigung liegen noch keine Fotos oder Videos vor. Angezeigt werden nur vorhandene Referenzen.
      </p>
      {visible.length === 0 ? (
        <p className="gallery-empty">{emptyNote}</p>
      ) : (
        <ul className="gallery-grid">
          {visible.map((item) => (
            <li key={item.id} data-reveal="photo" style={{ "--d": `${(visible.indexOf(item) % 3) * 80}ms` } as CSSProperties}>
              <button
                type="button"
                className="shot"
                aria-label={item.kind === "compare" ? `${item.title}: Vorher und Nachher` : item.alt}
                onClick={() => setActive(item)}
              >
                {item.kind === "compare" ? (
                  <img src={item.after.src} alt={item.after.alt} loading="lazy" />
                ) : item.kind === "video" ? (
                  <img src={item.poster} alt={item.alt} loading="lazy" />
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" />
                )}
                {item.kind === "compare" ? <span className="badge">Vorher / Nachher</span> : null}
                {item.kind === "video" ? <span className="badge">Video</span> : null}
              </button>
            </li>
          ))}
        </ul>
      )}

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
              <Compare before={active.before} after={active.after} />
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

function Compare({
  before,
  after,
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}) {
  const [value, setValue] = useState(50);
  const labelId = useId();
  return (
    <div className="compare">
      <div className="compare-frame">
        <img src={after.src} alt={after.alt} />
        <img src={before.src} alt={before.alt} style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }} />
        <span className="compare-tag before-tag">Vorher</span>
        <span className="compare-tag after-tag">Nachher</span>
      </div>
      <label id={labelId} htmlFor="compare-range">
        Vorher und Nachher vergleichen
      </label>
      <input
        id="compare-range"
        type="range"
        min={0}
        max={100}
        value={value}
        aria-labelledby={labelId}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}
