import { serviceAreas } from "@/content/site";

const focusIds = ["gartenpflege", "hausmeisterservice"] as const;

export function Spotlight() {
  const photo = {
    src: "/media/terrasse-nachher.webp",
    alt: "Fertige Holzterrasse mit Rasen und geschnittenen Hecken",
  };
  const items = focusIds
    .map((id) => serviceAreas.find((area) => area.id === id))
    .filter((area) => area !== undefined);

  return (
    <section className="spotlight" aria-labelledby="spotlight-title">
      {photo ? (
        <figure className="spotlight-media" data-reveal="photo">
          <img src={photo.src} alt={photo.alt} />
        </figure>
      ) : null}
      <div className="spotlight-copy">
        <p className="eyebrow" id="spotlight-title">
          Schwerpunkte
        </p>
        {items.map((area) => (
          <article key={area.id} data-reveal>
            <h2>{area.title}</h2>
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
