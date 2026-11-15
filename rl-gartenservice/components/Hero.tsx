import { hero, overview } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" id="start">
      <img src={hero.image} alt={hero.alt} fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-lead">{hero.lead}</p>
        <p className="hero-services">{hero.services}</p>
        <a className="button button-gold" href="#kontakt">
          {hero.cta}
        </a>
      </div>
      <div className="overview">
        {overview.map((item) => (
          <a key={item.href} className={item.featured ? "overview-card featured" : "overview-card"} href={item.href}>
            <span>{item.featured ? "Schwerpunkt" : "Weiterer Bereich"}</span>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
