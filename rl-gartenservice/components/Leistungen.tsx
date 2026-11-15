import type { CSSProperties } from "react";
import { IconBadge } from "@/components/Icons";
import { leistungen } from "@/content/site";

export function Leistungen() {
  return (
    <section className="leistungen" id="leistungen" aria-labelledby="leistungen-title">
      <h2 id="leistungen-title" data-reveal>
        Unsere Leistungen
      </h2>
      <ul className="leistung-grid">
        {leistungen.map((item, index) => (
          <li key={item.title} data-reveal style={{ "--d": `${index * 55}ms` } as CSSProperties}>
            <a className="leistung-card" href={item.href}>
              <IconBadge name={item.icon} />
              <span className="leistung-copy">
                <strong>{item.title}</strong>
                {item.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
