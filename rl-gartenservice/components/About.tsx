import { aboutText } from "@/content/site";

export function About() {
  return (
    <section className="about" id="ueber-uns">
      <div className="about-inner" data-reveal>
        <p className="eyebrow">Über uns</p>
        <h2>Über uns</h2>
        <blockquote>
          <p>{aboutText}</p>
        </blockquote>
      </div>
    </section>
  );
}
