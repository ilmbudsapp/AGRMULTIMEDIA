import { notFound } from "next/navigation";
import { Crumbs } from "@/components/Crumbs";
import { JsonLd } from "@/components/JsonLd";
import { serviceCopy } from "@/content/service-copy";
import { leistungen, serviceAreas, site } from "@/content/site";
import { breadcrumbNode, businessId, businessNode, graph, pageUrl, webPageNode, websiteNode } from "@/lib/jsonld";
import { cardSrc } from "@/lib/media";

export function ServiceView({ id, photo }: { id: string; photo?: string }) {
  const area = serviceAreas.find((item) => item.id === id);
  const copy = serviceCopy[id];
  if (!area || !copy) notFound();
  const jobs = leistungen.filter((item) => item.href === `/${area.id}`);
  const chosen = jobs.find((item) => item.slug === photo) ?? jobs[0];
  const path = `/${area.id}`;
  const data = graph([
    businessNode(),
    websiteNode(),
    webPageNode(path, copy.metaTitle, copy.metaDescription),
    breadcrumbNode(path, [
      { name: "Startseite", path: "/" },
      { name: area.title, path },
    ]),
    {
      "@type": "Service",
      "@id": `${pageUrl(path)}#leistung`,
      name: copy.heading,
      serviceType: area.title,
      description: copy.metaDescription,
      url: pageUrl(path),
      provider: { "@id": businessId },
      areaServed: "Augsburg und Umgebung bis 70 km",
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl(path)}#faq`,
      mainEntity: copy.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ]);

  return (
    <section className={area.featured ? "band band-featured" : "band"}>
      <JsonLd data={data} />
      <div data-reveal="card">
        <div className="band-inner card-motion">
          <div className="band-copy">
            <Crumbs items={[{ href: "/", label: "Startseite" }, { label: area.title }]} />
            <p className="eyebrow">{area.featured ? "Schwerpunkt" : "Weiterer Bereich"}</p>
            <h1>{copy.heading}</h1>
            <p className="intro">{area.intro}</p>
            {jobs.length > 0 ? (
              <ul className="job-links">
                {jobs.map((job) => (
                  <li key={job.slug}>
                    <a href={`${path}?arbeit=${job.slug}`} aria-current={chosen?.slug === job.slug ? "page" : undefined}>
                      {job.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            {chosen ? (
              <div className="inside-photos">
                {chosen.photos.map((item) => (
                  <img key={item.src} src={cardSrc(item.src)} alt={item.alt} width={480} height={360} loading="lazy" decoding="async" />
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
            <div className="service-block">
              <h2>Für wen</h2>
              <p>{copy.forWhom}</p>
              <h2>So läuft die Anfrage</h2>
              <p>{copy.ablauf}</p>
              <h2>Angaben für ein Angebot</h2>
              <p>{copy.angebot}</p>
            </div>
            <div className="service-block">
              <h2>Häufige Fragen</h2>
              <div className="faq">
                {copy.faqs.map((item) => (
                  <div key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="service-links">
              <a href="/galerie">Galerie ansehen</a>
              <a href="/kontakt">Kontakt zu {site.name}</a>
            </p>
            <a className="button button-gold page-cta" href="/kontakt">
              Jetzt kostenlos und unverbindlich anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
