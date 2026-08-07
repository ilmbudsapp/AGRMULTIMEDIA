import { Link } from "wouter";
import { ArrowRight, LayoutGrid, Palette, Megaphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeKmuCopy } from "@/lib/homeKmuI18n";

const ICONS = [LayoutGrid, Palette, Megaphone] as const;

export default function HomeServiceLinks() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section
      id="leistungen"
      className="premium-section scroll-mt-24 border-t border-[#333333] bg-white/[0.02] py-16 md:py-20"
      aria-labelledby="home-services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="home-services-heading"
          className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          {copy.serviceLinks.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          {copy.serviceLinks.intro}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {copy.serviceLinks.items.map((item, index) => {
            const Icon = ICONS[index] ?? LayoutGrid;
            return (
              <article
                key={item.href}
                className="premium-card flex flex-col rounded-2xl border border-white/[0.08] p-6 md:p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white"
                >
                  {currentLanguage === "de" ? "Leistung ansehen" : "View service"}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
