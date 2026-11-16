"use client";

import { useEffect, useRef, useState } from "react";
import { serviceAreas } from "@/content/site";

const focusIds = ["gartenpflege", "hausmeisterservice"] as const;

export function Spotlight() {
  const items = focusIds
    .map((id) => serviceAreas.find((area) => area.id === id))
    .filter((area) => area !== undefined);
  const scenes = items.flatMap((area) => (area.image ? [{ id: area.id, image: area.image }] : []));
  const articles = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = articles.current.filter((node): node is HTMLElement => node !== null);
    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { threshold: [0.35, 0.6], rootMargin: "-28% 0px -40% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="spotlight" aria-labelledby="spotlight-title">
      <div className="spotlight-stage">
        {scenes.map((scene) => (
          <img
            key={scene.id}
            src={scene.image.src}
            alt={scene.image.alt}
            aria-hidden={items[active]?.id !== scene.id}
            className={items[active]?.id === scene.id ? "is-shown" : undefined}
          />
        ))}
        <p className={items[active]?.image ? "stage-fallback" : "stage-fallback is-shown"} aria-hidden="true">
          {items[active]?.title}
        </p>
      </div>
      <div className="spotlight-copy">
        <p className="eyebrow" id="spotlight-title">
          Schwerpunkte
        </p>
        {items.map((area, index) => (
          <article
            key={area.id}
            ref={(node) => {
              articles.current[index] = node;
            }}
            className={index === active ? "is-active" : undefined}
          >
            {area.image ? (
              <figure className="spotlight-inline" data-reveal="photo">
                <img src={area.image.src} alt={area.image.alt} />
              </figure>
            ) : null}
            <h2 data-reveal="mask">
              <span className="mask-line">
                <span>{area.title}</span>
              </span>
            </h2>
            <p>{area.intro}</p>
            <a className="more-link" href={`/${area.id}`}>
              Mehr erfahren
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
