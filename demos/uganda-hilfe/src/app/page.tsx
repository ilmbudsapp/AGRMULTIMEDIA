import Link from "next/link";
import DonateCta from "@/components/DonateCta";
import Hero from "@/components/Hero";
import HomeDonationSection from "@/components/HomeDonationSection";
import ScrollReveal from "@/components/ScrollReveal";
import { NewsCards, ProjectCards } from "@/components/Sections";
import StatsSection from "@/components/StatsSection";
import { BASE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />

      <section className="uhu-section" aria-labelledby="mission-heading">
        <div className="uhu-container grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#40916c]">St. Monica Junior School</p>
              <h2 id="mission-heading" className="mt-3 text-3xl font-extrabold text-[#14532d] md:text-4xl">
                Bildung, die Kinder stärkt
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#52796f]">
                Die St. Monica Junior School in Kasanje erfüllt die akademischen, körperlichen, sozialen und emotionalen
                Bedürfnisse von Kindern in diesem sensiblen Alter — mit zwei Mahlzeiten täglich, Schuluniform und
                liebevoller Betreuung.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#52796f]">
                Der Verein Uganda-Hilfe Unterland e.V. entstand 2015 aus einer Freundschaft zwischen Wolfgang Friederich
                und Denis Mpanga und unterstützt seither Bau, Ausstattung und Betrieb der Schule.
              </p>
              <Link href="/ueber-uns/" className="uhu-btn-outline mt-8">
                Mehr über uns
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="uhu-photo-shadow overflow-hidden rounded-3xl">
              <Link href="/galerie/" className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/images/school-1.jpg`} alt="Schulgebäude in Kasanje" className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="uhu-section bg-[#f0faf3]" aria-labelledby="projects-preview-heading">
        <div className="uhu-container">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#40916c]">Projekte</p>
                <h2 id="projects-preview-heading" className="mt-2 text-3xl font-extrabold text-[#14532d] md:text-4xl">
                  Wo Ihre Hilfe ankommt
                </h2>
              </div>
              <Link href="/projekte/" className="uhu-btn-outline">
                Alle Projekte
              </Link>
            </div>
          </ScrollReveal>
          <ProjectCards />
        </div>
      </section>

      <section className="uhu-section" aria-labelledby="news-preview-heading">
        <div className="uhu-container">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#40916c]">Aktuelles</p>
                <h2 id="news-preview-heading" className="mt-2 text-3xl font-extrabold text-[#14532d] md:text-4xl">
                  Neuigkeiten aus Uganda
                </h2>
              </div>
              <Link href="/aktuelles/" className="uhu-btn-outline">
                Alle Beiträge
              </Link>
            </div>
          </ScrollReveal>
          <NewsCards limit={2} />
        </div>
      </section>

      <HomeDonationSection />
      <DonateCta />
    </>
  );
}
