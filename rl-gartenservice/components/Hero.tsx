import { CountUp } from "@/components/CountUp";
import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" id="start">
      <img src={hero.image} alt={hero.alt} fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-lead">{hero.lead}</p>
          <p className="hero-services">{hero.services}</p>
          <a className="button button-gold" href="#kontakt">
            {hero.cta}
          </a>
        </div>
        <CountUp to={site.satisfiedClients} label="Zufriedene Kunden" />
      </div>
    </section>
  );
}
