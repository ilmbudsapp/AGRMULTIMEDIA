import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeConclusionCopy } from "@/lib/homeConclusionI18n";

export default function HomeConclusion() {
  const { currentLanguage } = useLanguage();
  const c = getHomeConclusionCopy(currentLanguage);

  return (
    <section
      id="home-conclusion"
      aria-labelledby="home-conclusion-heading"
      className="scroll-mt-24 border-t border-white/[0.08] bg-gradient-to-b from-[#08080f] to-[#07070b] py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          id="home-key-takeaways"
          className="rounded-2xl border border-emerald-400/30 bg-emerald-500/[0.06] p-6 md:p-8"
          role="region"
          aria-labelledby="home-takeaways-heading"
        >
          <h2 id="home-takeaways-heading" className="text-xl font-semibold text-white md:text-2xl">
            {c.takeawaysTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/85 md:text-base">
            {c.takeaways.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300/90">{c.whatTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{c.whatWeDo}</p>
          </article>
          <article className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300/90">{c.whoTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{c.whoFor}</p>
          </article>
        </div>

        <h2
          id="home-conclusion-heading"
          className="mt-12 text-xl font-semibold tracking-tight text-white md:text-2xl"
        >
          {c.conclusionTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">{c.conclusion}</p>

        <h3 className="mt-10 text-lg font-semibold text-white">{c.actionTitle}</h3>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-white/80 md:text-base">
          {c.actions.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <p className="mt-8">
          <Link
            href="/kontakt"
            className="premium-cta inline-flex min-h-[48px] items-center rounded-full px-8 py-3 text-sm font-semibold"
          >
            {currentLanguage === "de"
              ? "Kostenlose Beratung"
              : currentLanguage === "sr"
                ? "Besplatna konsultacija"
                : "Free consultation"}
          </Link>
        </p>
      </div>
    </section>
  );
}
