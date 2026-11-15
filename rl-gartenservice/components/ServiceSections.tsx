import { serviceAreas } from "@/content/site";

export function ServiceSections() {
  return (
    <>
      {serviceAreas.map((area) => (
        <section
          key={area.id}
          id={area.id}
          className={area.featured ? "band band-featured" : "band"}
        >
          <div className="band-inner">
            <div className="band-copy">
              <p className="eyebrow">{area.featured ? "Schwerpunkt" : "Weiterer Bereich"}</p>
              <h2>{area.title}</h2>
              <p className="intro">{area.intro}</p>
              <div className="service-groups">
                {area.groups.map((group) => (
                  <div key={group.title ?? area.id}>
                    {group.title ? <h3>{group.title}</h3> : null}
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {area.image ? (
              <figure className="band-photo">
                <img src={area.image.src} alt={area.image.alt} loading="lazy" />
              </figure>
            ) : null}
          </div>
        </section>
      ))}
    </>
  );
}
