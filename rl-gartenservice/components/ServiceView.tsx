import { notFound } from "next/navigation";
import { serviceAreas } from "@/content/site";

export function ServiceView({ id }: { id: string }) {
  const area = serviceAreas.find((item) => item.id === id);
  if (!area) notFound();

  return (
    <section className={area.featured ? "band band-featured" : "band"}>
      <div className="band-inner">
        <div className="band-copy" data-reveal>
          <p className="eyebrow">{area.featured ? "Schwerpunkt" : "Weiterer Bereich"}</p>
          <h1>{area.title}</h1>
          <p className="intro">{area.intro}</p>
          <div className="service-groups">
            {area.groups.map((group) => (
              <div key={group.title ?? area.id}>
                {group.title ? <h2 className="group-title">{group.title}</h2> : null}
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a className="button button-gold page-cta" href="/kontakt">
            Jetzt kostenlos und unverbindlich anfragen
          </a>
        </div>
        {area.image ? (
          <figure className="band-photo" data-reveal="photo">
            <img src={area.image.src} alt={area.image.alt} />
          </figure>
        ) : null}
      </div>
    </section>
  );
}
