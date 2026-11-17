import { Icon } from "@/components/Icons";
import { Motif } from "@/components/Motif";
import { leistungen } from "@/content/site";
import { cardSrc } from "@/lib/media";

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
            <a className="leistung-card card-motion" href={`${item.href}?arbeit=${item.slug}`}>
              <span className="card-sheen" aria-hidden="true" />
              <img
                className="card-photo"
                src={cardSrc(item.photos[0].src)}
                alt={item.photos[0].alt}
                width={480}
                height={360}
                loading="lazy"
                decoding="async"
              />
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
