import { BASE, SITE } from "@/lib/site";
import {
  PROCESS,
  PROJECTS,
  REVIEWS,
  SERVICES,
  STATS,
  TRUST_FEATURES,
} from "@/lib/content";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import FaqSection from "@/components/FaqSection";
import ServiceIcon from "@/components/ServiceIcon";

export default function Home() {
  const whatsappText = encodeURIComponent(
    "Guten Tag, ich interessiere mich für ein unverbindliches Angebot."
  );
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${whatsappText}`;
  const img = (name: string) => `${BASE}/images/${name}.jpg`;

  return (
    <main>
      <section id="start" className="hero" aria-labelledby="hero-heading">
        <div className="heroGrid">
          <div className="heroContent fadeUp">
            <p className="eyebrow">Malermeister · {SITE.city}</p>
            <h1 id="hero-heading">Ihr Malermeister für moderne Räume in Stuttgart</h1>
            <p className="heroText">
              Hochwertige Malerarbeiten, kreative Wandgestaltung und saubere Renovierungen für
              Privatkunden und Unternehmen.
            </p>

            <div className="ctaRow">
              <a href="#kontakt" className="btn primary">
                Kostenloses Angebot anfordern
              </a>
              <a href={waUrl} className="btn secondary" target="_blank" rel="noopener noreferrer">
                Per WhatsApp kontaktieren
              </a>
            </div>

            <ul className="heroBadges" aria-label="Qualitätsmerkmale">
              {TRUST_FEATURES.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="heroVisual fadeIn">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img("hero")}
              alt="Moderner renovierter Innenraum – Malerarbeiten Stuttgart"
              className="heroImage"
              fetchPriority="high"
            />
            <div className="heroCard">
              <span>Seit 2012</span>
              <strong>Meisterqualität</strong>
              <p>Sauber · Termintreu · Premium</p>
            </div>
          </div>
        </div>
      </section>

      <section id="intro" className="section intro">
        <div className="fadeUp">
          <p className="eyebrow">Warum {SITE.name}?</p>
          <h2>Ihr Malerbetrieb für Renovierung, Fassade und Wandgestaltung in Stuttgart</h2>
        </div>
        <p className="fadeUp">
          Als erfahrener Malermeister verbinden wir präzises Handwerk mit modernem Design – für
          Wohnungen, Büros, Praxen und exklusive Immobilien. Vertrauen Sie auf saubere Baustellen,
          transparente Beratung und Ergebnisse, die überzeugen.
        </p>
      </section>

      <section className="statsSection" aria-label="Zahlen und Fakten">
        <div className="statsGrid">
          {STATS.map((stat) => (
            <article className="statCard fadeUp" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="features" aria-label="Vorteile">
        {TRUST_FEATURES.map((item) => (
          <div className="feature fadeUp" key={item}>
            <span aria-hidden>✓</span>
            <h3>{item}</h3>
          </div>
        ))}
      </section>

      <section id="leistungen" className="section leistungen">
        <div className="sectionHead fadeUp">
          <p className="eyebrow">Leistungen</p>
          <h2>Professionelle Malerarbeiten für Innen, Außen und Renovierung</h2>
          <p className="sectionLead">
            Von Innenanstrich über Fassadenarbeiten bis zur kompletten Renovierung – Ihr
            Malerbetrieb in Stuttgart aus einer Hand.
          </p>
        </div>

        <div className="grid">
          {SERVICES.map(({ title, desc, icon }) => (
            <article className="service fadeUp" key={title}>
              <ServiceIcon name={icon} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Jetzt kostenlos beraten lassen"
        text="Wir beraten Sie unverbindlich zu Ihrem Projekt – ob Renovierung, Fassade oder Innenraum."
        primaryLabel="Unverbindliches Angebot anfordern"
        primaryHref="#kontakt"
        secondaryLabel="Per WhatsApp"
        secondaryHref="whatsapp"
      />

      <section id="projekte" className="section projects">
        <div className="sectionHead fadeUp">
          <p className="eyebrow">Referenzen</p>
          <h2>Ausgewählte Projekte unseres Malerbetriebs</h2>
          <p className="sectionLead">
            Ein Einblick in unsere Arbeiten – von eleganten Innenräumen bis zur Fassadengestaltung in
            Stuttgart.
          </p>
        </div>

        <div className="projectGrid">
          {PROJECTS.map((project, i) => (
            <article
              className={`project fadeUp${i === 0 ? " large" : ""}`}
              key={project.title}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img(project.image)} alt={project.alt} loading="lazy" />
              <div className="projectOverlay">
                <span>{project.category}</span>
                <strong>{project.title}</strong>
                <em>{project.location}</em>
              </div>
            </article>
          ))}
        </div>

        <div className="projectsCta fadeUp">
          <a href="#kontakt" className="btn primary">
            Projekt besprechen
          </a>
        </div>
      </section>

      <section id="vorher-nachher" className="beforeAfter section" aria-labelledby="before-after-heading">
        <div className="sectionHead fadeUp">
          <p className="eyebrow">Vorher / Nachher</p>
          <h2 id="before-after-heading">Der Unterschied liegt im Detail</h2>
          <p className="sectionLead">
            Sehen Sie selbst, wie professionelle Malerarbeiten einen Raum verwandeln – ziehen Sie den
            Regler, um den Vergleich zu sehen.
          </p>
        </div>
        <BeforeAfterSlider />
      </section>

      <section id="bewertungen" className="section reviews">
        <div className="sectionHead fadeUp">
          <p className="eyebrow">Kundenstimmen</p>
          <h2>Was unsere Kunden sagen</h2>
        </div>

        <div className="reviewGrid">
          {REVIEWS.map((review) => (
            <article className="review fadeUp" key={review.name}>
              <div className="stars" aria-label="5 von 5 Sternen">
                ★★★★★
              </div>
              <p>&ldquo;{review.text}&rdquo;</p>
              <strong>{review.name}</strong>
              <span className="reviewSource">Google Bewertung</span>
            </article>
          ))}
        </div>
      </section>

      <section id="ablauf" className="section process">
        <div className="sectionHead fadeUp">
          <p className="eyebrow">Ablauf</p>
          <h2>In 3 Schritten zu Ihrem neuen Raumgefühl</h2>
        </div>

        <div className="steps">
          {PROCESS.map((step) => (
            <article className="stepCard fadeUp" key={step.step}>
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <FaqSection />

      <section id="kontakt" className="contact section">
        <div className="contactGrid">
          <div className="contactInfo fadeUp">
            <p className="eyebrow eyebrowLight">Kontakt</p>
            <h2>Bereit für Ihr nächstes Projekt?</h2>
            <p>
              Fordern Sie jetzt Ihr unverbindliches Angebot an. Wir melden uns schnellstmöglich –
              telefonisch, per WhatsApp oder E-Mail.
            </p>

            <ul className="contactList">
              <li>
                <span>Telefon</span>
                <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <span>E-Mail</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <span>Region</span>
                <strong>{SITE.region}</strong>
              </li>
            </ul>

            <div className="ctaRow ctaRow--inline">
              <a href={waUrl} className="btn primary" target="_blank" rel="noopener noreferrer">
                Jetzt per WhatsApp
              </a>
              <a href={`tel:${SITE.phone}`} className="btn secondary btnSecondaryLight">
                Anrufen
              </a>
            </div>
          </div>

          <div className="contactFormWrap fadeUp">
            <h3>Anfrage senden</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer>
        <a href="#start" className="logo logoLink logoFooter" aria-label={`${SITE.name} – zurück zum Anfang`}>
          <span>AW</span>
          <div>
            <strong>{SITE.name}</strong>
            <small>{SITE.tagline} · {SITE.city}</small>
          </div>
        </a>

        <nav className="footerNav" aria-label="Footer Navigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#projekte">Projekte</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <p>
          Demo Website erstellt von{" "}
          <a href="https://www.agrmultimedia.eu/" target="_blank" rel="noopener noreferrer">
            AGRMULTIMEDIA
          </a>
        </p>
      </footer>
    </main>
  );
}
