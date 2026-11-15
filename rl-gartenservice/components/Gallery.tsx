"use client";

import { useEffect, useId, useRef, useState } from "react";
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
        <h1>Galerie / Referenzen</h1>
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
        <ul className="gallery-grid" key={filter}>
          {visible.map((item) => (
            <li key={item.id} className={item.kind === "compare" ? "gallery-item is-feature" : "gallery-item"} data-reveal="photo">
              {item.kind === "compare" ? (
                <Compare before={item.before} after={item.after} title={item.title} />
              ) : (
                <button
                  type="button"
                  className="shot"
                  aria-label={item.alt}
                  onClick={() => setActive(item)}
                >
                  <img src={item.kind === "video" ? item.poster : item.src} alt={item.alt} loading="lazy" />
                  {item.kind === "video" ? <span className="badge">Video</span> : null}
                </button>
              )}
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

function Compare({
  before,
  after,
  title,
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  title: string;
}) {
  const [value, setValue] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const inputId = useId();

  function setFromClientX(clientX: number) {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, next)));
  }

  return (
    <div className="compare">
      <div
        className="compare-frame"
        ref={frame}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          setFromClientX(event.clientX);
        }}
        onPointerMove={(event) => {
          if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
          setFromClientX(event.clientX);
        }}
      >
        <img src={after.src} alt={after.alt} loading="lazy" draggable={false} />
        <img src={before.src} alt="" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }} loading="lazy" draggable={false} />
        <span className="compare-tag before-tag">Vorher</span>
        <span className="compare-tag after-tag">Nachher</span>
        <span className="compare-handle" style={{ left: `${value}%` }} aria-hidden="true" />
      </div>
      <label id={labelId} htmlFor={inputId}>
        {title}: Vorher und Nachher vergleichen
      </label>
      <input
        id={inputId}
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(value)}
        aria-labelledby={labelId}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}
