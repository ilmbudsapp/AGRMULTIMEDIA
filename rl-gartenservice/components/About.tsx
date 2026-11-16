import { aboutText } from "@/content/site";

export function About() {
  return (
    <section className="about" id="ueber-uns">
      <div data-reveal="card">
      <div className="about-inner card-motion">
        <p className="eyebrow">Über uns</p>
        <h1>Über uns</h1>
        <blockquote>
          <p>{aboutText}</p>
        </blockquote>
        <a className="button button-gold page-cta" href="/kontakt">
          Jetzt kostenlos und unverbindlich anfragen
        </a>
      </div>
      </div>
    </section>
  );
}
