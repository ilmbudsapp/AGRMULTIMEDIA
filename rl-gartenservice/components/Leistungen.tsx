import { Icon } from "@/components/Icons";
import { Motif } from "@/components/Motif";
import { leistungen } from "@/content/site";

export function Leistungen() {
  return (
    <section className="leistungen" id="leistungen" aria-labelledby="leistungen-title">
      <Motif side="left" />
      <Motif side="right" />
      <h2 id="leistungen-title" className="split-title">
        <span className="mask-line">
          <span>Unsere</span>
        </span>{" "}
        <span className="mask-line">
          <span>Leistungen</span>
        </span>
      </h2>
      <ul className="leistung-grid">
        {leistungen.map((item) => (
          <li key={item.title} data-reveal="card">
            <a className="leistung-card" href={item.href}>
              <span className="card-sheen" aria-hidden="true" />
              <Icon name={item.icon} className={`svc-icon svc-${item.icon}`} />
              <span className="leistung-copy">
                <strong className="card-title">
                  <span>{item.title}</span>
                </strong>
                <span className="leistung-text">{item.text}</span>
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
