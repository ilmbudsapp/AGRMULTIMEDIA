import { notFound } from "next/navigation";
import { leistungen, serviceAreas } from "@/content/site";

export function ServiceView({ id, photo }: { id: string; photo?: string }) {
  const area = serviceAreas.find((item) => item.id === id);
  if (!area) notFound();
  const jobs = leistungen.filter((item) => item.href === `/${area.id}`);
  const chosen = jobs.find((item) => item.slug === photo) ?? jobs[0];

  return (
    <section className={area.featured ? "band band-featured" : "band"}>
      <div data-reveal="card">
      <div className="band-inner card-motion">
        <div className="band-copy">
          <p className="eyebrow">{area.featured ? "Schwerpunkt" : "Weiterer Bereich"}</p>
          <h1>{area.title}</h1>
          <p className="intro">{area.intro}</p>
          {chosen ? (
            <div className="inside-photos">
              {chosen.photos.map((item) => (
                <img key={item.src} src={item.src} alt={item.alt} />
              ))}
            </div>
          ) : null}
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
      </div>
      </div>
    </section>
  );
}
