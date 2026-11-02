import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeKmuCopy } from "@/lib/homeKmuI18n";
import AnimatedHeading from "./AnimatedHeading";

export default function HomeServiceLinks() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section
      id="leistungen"
      className="premium-section scroll-mt-24 border-t border-[var(--studio-border)] py-20 md:py-28"
      aria-labelledby="home-services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="studio-eyebrow text-center">{currentLanguage === "de" ? "Leistungen" : "Services"}</p>
        <AnimatedHeading
          as="h2"
          id="home-services-heading"
          className="font-display mx-auto mt-3 max-w-3xl text-center text-2xl font-semibold tracking-tight text-[var(--studio-text)] md:text-3xl lg:text-4xl"
        >
          {copy.serviceLinks.title}
        </AnimatedHeading>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[var(--studio-muted)] md:text-base">
          {copy.serviceLinks.intro}
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {copy.serviceLinks.items.map((item) => (
            <article key={item.href + item.title} className="premium-card premium-card-hover studio-service-link flex flex-col p-6 md:p-7">
              <h3 className="text-lg font-semibold text-[var(--studio-text)]">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--studio-muted)] md:text-base">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--studio-accent)] hover:text-[var(--studio-accent)]"
              >
                {currentLanguage === "de" ? "Zur Leistungsseite" : "View service page"}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
