import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" id="start">
      <img className="hero-photo" src={hero.image} alt={hero.alt} fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            <span className="hero-line">
              <span>{hero.title}</span>
            </span>
            <span className="hero-line">
              <span>{hero.lead}</span>
            </span>
          </h1>
          <p className="hero-services">{hero.services}</p>
          <a className="button button-gold hero-cta" href="/kontakt">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
