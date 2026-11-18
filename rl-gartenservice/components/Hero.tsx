import type { CSSProperties } from "react";
import { HeroMedia } from "@/components/HeroMedia";
import { HeroMotion } from "@/components/HeroMotion";
import { hero } from "@/content/site";

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
      <HeroMedia />
      <p className="hero-symbol">Symbolbild zur Veranschaulichung der Leistung</p>
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
      </div>
    </section>
  );
}
