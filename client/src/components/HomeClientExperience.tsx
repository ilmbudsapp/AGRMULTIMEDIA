import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeExperienceCopy } from "@/lib/homeExperienceI18n";

export default function HomeClientExperience() {
  const { currentLanguage } = useLanguage();
  const c = getHomeExperienceCopy(currentLanguage);

  return (
    <section
      id="home-client-experience"
      aria-labelledby="home-experience-heading"
      className="scroll-mt-24 border-b border-[var(--studio-border)] py-14 md:py-18"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90">{c.eyebrow}</p>
        <h2
          id="home-experience-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-[var(--studio-text)] md:text-3xl"
        >
          {c.title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--studio-muted)] md:text-base">{c.lead}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[var(--studio-border)] bg-white/[0.02] p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[var(--studio-text)]">{c.fixbikeTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--studio-muted)] md:text-base">{c.fixbikeBody}</p>
          </article>
          <article className="rounded-2xl border border-indigo-500/25 bg-indigo-500/[0.06] p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[var(--studio-text)]">{c.agrTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--studio-muted)] md:text-base">{c.agrBody}</p>
          </article>
        </div>

        <aside className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-[var(--studio-muted)]">
          <p className="font-semibold text-[var(--studio-text)]">{c.sourcesTitle}</p>
          <ul className="mt-2 space-y-1">
            {c.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 underline-offset-2 hover:text-[var(--studio-accent)] hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
