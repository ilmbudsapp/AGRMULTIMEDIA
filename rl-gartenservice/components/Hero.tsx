import type { CSSProperties } from "react";
import { CountUp } from "@/components/CountUp";
import { HeroMotion } from "@/components/HeroMotion";
import { hero, site } from "@/content/site";

function Letters({ text }: { text: string }) {
  return (
    <span className="letter-row">
      {Array.from(text).map((char, index) => (
        <span className="letter" key={`${char}-${index}`} style={{ "--i": index } as CSSProperties}>
          <span>{char === " " ? "\u00A0" : char}</span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero" id="start">
      <HeroMotion />
      <div className="hero-photo-frame">
        <picture>
          <source media="(max-width: 719px)" srcSet={hero.imageMobile} />
          <img className="hero-photo" src={hero.image} alt={hero.alt} fetchPriority="high" />
        </picture>
      </div>
      <div className="hero-shade" />
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            <span className="sr-only">
              {hero.title}. {hero.lead}
            </span>
            <span className="hero-line" aria-hidden="true">
              <Letters text={hero.title} />
            </span>
            <span className="hero-line hero-sub" aria-hidden="true">
              <span>Ihr zuverlässiger Partner</span>
            </span>
            <span className="hero-line hero-sub" aria-hidden="true">
              <span>rund um Haus & Garten</span>
            </span>
          </h1>
          <p className="hero-services">{hero.services}</p>
          <a className="button button-gold hero-cta" href="/kontakt">
            {hero.cta}
          </a>
        </div>
        <CountUp to={site.satisfiedClients} label="Zufriedene Kunden" />
      </div>
    </section>
  );
}
