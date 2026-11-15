import { Icon } from "@/components/Icons";
import { leistungen } from "@/content/site";

export function Leistungen() {
  return (
    <section className="leistungen" id="leistungen" aria-labelledby="leistungen-title">
      <h2 id="leistungen-title" data-reveal>
        Unsere Leistungen
      </h2>
      <ul className="leistung-grid">
        {leistungen.map((item) => (
          <li key={item.title} data-reveal>
            <a className="leistung-card" href={item.href}>
              <Icon name={item.icon} className="svc-icon" />
              <span className="leistung-copy">
                <strong>{item.title}</strong>
                {item.text}
              </span>
              <span className="card-arrow" aria-hidden="true">
                <Icon name="arrow" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
