import { BASE, SITE } from "@/lib/site";

export default function Home() {
  const whatsappText = encodeURIComponent(
    "Guten Tag, ich interessiere mich für ein unverbindliches Angebot."
  );
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${whatsappText}`;
  const img = (name: string) => `${BASE}/images/${name}.jpg`;

  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Hauptnavigation">
          <div className="logo">
            <span>AW</span>
            <div>
              <strong>{SITE.name}</strong>
              <small>{SITE.tagline}</small>
            </div>
          </div>

          <div className="navLinks">
            <a href="#leistungen">Leistungen</a>
            <a href="#projekte">Projekte</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>

        <div className="heroContent fadeUp">
          <p className="eyebrow">Premium Malerbetrieb in {SITE.city}</p>
          <h1>Edle Wandgestaltung für Räume mit Charakter.</h1>
          <p className="heroText">
            Hochwertige Malerarbeiten, moderne Oberflächen, Fassaden und Renovierungen für Privatkunden,
            Büros und exklusive Immobilien.
          </p>

          <div className="ctaRow">
            <a href="#kontakt" className="btn primary">
              Kostenloses Angebot
            </a>
            <a href={waUrl} className="btn secondary" target="_blank" rel="noopener noreferrer">
              WhatsApp Anfrage
            </a>
          </div>
        </div>

        <div className="heroCard fadeIn">
          <span>Seit 2012</span>
          <strong>Meisterqualität</strong>
          <p>Sauber. Termintreu. Hochwertig.</p>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">Warum {SITE.name}?</p>
          <h2>Wir streichen nicht nur Wände. Wir gestalten Atmosphäre.</h2>
        </div>
        <p>
          Ob moderne Wohnung, stilvolle Praxis, Bürofläche oder Fassade: Wir verbinden präzises Handwerk
          mit hochwertigem Design und sauberer Ausführung.
        </p>
      </section>

      <section className="features" aria-label="Vorteile">
        {[
          "Kostenlose Beratung",
          "Saubere Baustellen",
          "Termintreue Ausführung",
          "Hochwertige Materialien",
        ].map((item) => (
          <div className="feature fadeUp" key={item}>
            <span aria-hidden>✓</span>
            <h3>{item}</h3>
          </div>
        ))}
      </section>

      <section id="leistungen" className="section dark">
        <p className="eyebrow">Leistungen</p>
        <h2>Alles für einen perfekten ersten Eindruck.</h2>

        <div className="grid">
          {[
            ["Innenanstrich", "Moderne Farben, saubere Kanten und hochwertige Oberflächen."],
            ["Fassadenarbeiten", "Professioneller Schutz und neues Erscheinungsbild für Ihr Gebäude."],
            ["Tapezierarbeiten", "Exklusive Tapeten, Akzentwände und stilvolle Raumwirkung."],
            ["Lackierarbeiten", "Türen, Fenster, Geländer und Oberflächen in perfekter Ausführung."],
            ["Spachteltechniken", "Premium-Wanddesign mit moderner Struktur und Tiefe."],
            ["Renovierung", "Komplette Raumauffrischung für Wohnungen, Büros und Gewerbe."],
          ].map(([title, text]) => (
            <article className="service" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projekte" className="section projects">
        <p className="eyebrow">Referenzen</p>
        <h2>Ausgewählte Arbeiten</h2>

        <div className="projectGrid">
          <div className="project large">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("p1")} alt="Modernes Wohnzimmer nach Innenanstrich" loading="lazy" />
            <div>
              <span>Privathaus Stuttgart</span>
              <strong>Eleganter Innenanstrich</strong>
            </div>
          </div>

          <div className="project">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("p2")} alt="Renovierter Wohnraum" loading="lazy" />
            <div>
              <span>Wohnung</span>
              <strong>Komplette Renovierung</strong>
            </div>
          </div>

          <div className="project">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("p3")} alt="Fassadengestaltung eines Hauses" loading="lazy" />
            <div>
              <span>Außenbereich</span>
              <strong>Fassadengestaltung</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="beforeAfter" aria-labelledby="before-after-heading">
        <div className="section">
          <p className="eyebrow">Vorher / Nachher</p>
          <h2 id="before-after-heading">Der Unterschied liegt im Detail.</h2>
        </div>

        <div className="baGrid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("before")} alt="Raum vor der Renovierung" loading="lazy" />
            <span>Vorher</span>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("after")} alt="Raum nach der Renovierung" loading="lazy" />
            <span>Nachher</span>
          </div>
        </div>
      </section>

      <section className="reviews section dark">
        <p className="eyebrow">Kundenstimmen</p>
        <h2>Was Kunden über uns sagen</h2>

        <div className="reviewGrid">
          {[
            "Sehr saubere Arbeit und absolut zuverlässig. Unsere Wohnung sieht aus wie neu.",
            "Professionelle Beratung, schnelle Umsetzung und ein hochwertiges Ergebnis.",
            "Die Fassade wurde perfekt erneuert. Klare Empfehlung!",
          ].map((text, i) => (
            <div className="review" key={i}>
              <div className="stars" aria-hidden>
                ★★★★★
              </div>
              <p>{text}</p>
              <strong>Google Bewertung</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="process section">
        <p className="eyebrow">Ablauf</p>
        <h2>In 3 Schritten zu Ihrem neuen Raumgefühl.</h2>

        <div className="steps">
          <div>
            <span>01</span>
            <h3>Anfrage senden</h3>
            <p>Kontaktieren Sie uns per WhatsApp, Telefon oder Formular.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Beratung erhalten</h3>
            <p>Wir besprechen Ihre Wünsche und erstellen ein klares Angebot.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Umsetzung starten</h3>
            <p>Wir arbeiten sauber, zuverlässig und termingerecht.</p>
          </div>
        </div>
      </section>

      <section id="kontakt" className="contact">
        <div className="contactBox fadeUp">
          <p className="eyebrow">Kontakt</p>
          <h2>Bereit für einen neuen Look?</h2>
          <p>
            Fordern Sie jetzt Ihr unverbindliches Angebot an. Wir melden uns schnellstmöglich zurück.
          </p>

          <div className="ctaRow">
            <a href={waUrl} className="btn primary" target="_blank" rel="noopener noreferrer">
              Jetzt per WhatsApp
            </a>
            <a href={`tel:${SITE.phone}`} className="btn secondary">
              Anrufen
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo">
          <span>AW</span>
          <div>
            <strong>{SITE.name}</strong>
            <small>{SITE.tagline}</small>
          </div>
        </div>

        <p>Demo-Website erstellt von AGRMULTIMEDIA</p>
        <a href="https://www.agrmultimedia.eu/">www.agrmultimedia.eu</a>
      </footer>
    </main>
  );
}
