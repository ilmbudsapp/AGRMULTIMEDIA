import { notFound } from "next/navigation";
import { leistungen, serviceAreas } from "@/content/site";

export function ServiceView({ id }: { id: string }) {
  const area = serviceAreas.find((item) => item.id === id);
  if (!area) notFound();
  const jobs = leistungen.filter((item) => item.href === `/${area.id}`);

  return (
    <section className={area.featured ? "band band-featured" : "band"}>
      <div data-reveal="card">
      <div className="band-inner card-motion">
        <div className="band-copy">
          <p className="eyebrow">{area.featured ? "Schwerpunkt" : "Weiterer Bereich"}</p>
          <h1>{area.title}</h1>
          <p className="intro">{area.intro}</p>
          {jobs.length > 0 ? (
            <div className="band-jobs">
              {jobs.map((job) => (
                <figure key={job.title}>
                  <img src={job.image} alt={job.imageAlt} />
                  <figcaption>{job.title}</figcaption>
                </figure>
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
        {area.image ? (
          <figure className="band-photo">
            <img src={area.image.src} alt={area.image.alt} />
          </figure>
        ) : null}
      </div>
      </div>
    </section>
  );
}
