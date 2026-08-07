import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeKmuCopy } from "@/lib/homeKmuI18n";

export default function HomeServiceLinks() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section
      id="leistungen"
      className="premium-section scroll-mt-24 border-t border-[#2a2a30] py-20 md:py-28"
      aria-labelledby="home-services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="studio-eyebrow text-center">{currentLanguage === "de" ? "Leistungen" : "Services"}</p>
        <h2
          id="home-services-heading"
          className="font-display mx-auto mt-3 max-w-3xl text-center text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl"
        >
          {copy.serviceLinks.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/65 md:text-base">
          {copy.serviceLinks.intro}
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {copy.serviceLinks.items.map((item) => (
            <article key={item.href + item.title} className="studio-service-link flex flex-col">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65 md:text-base">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300"
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
