import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeComparisonsCopy } from "@/lib/homeComparisonsI18n";

export default function HomeComparisons() {
  const { currentLanguage } = useLanguage();
  const c = getHomeComparisonsCopy(currentLanguage);

  return (
    <section
      id="home-comparisons"
      aria-labelledby="home-comparisons-heading"
      className="scroll-mt-24 border-b border-white/[0.06] bg-[#07070b] py-14 md:py-18"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90">{c.eyebrow}</p>
        <h2
          id="home-comparisons-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          {c.title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">{c.lead}</p>

        <h3 className="mt-10 text-lg font-semibold text-white">{c.seoAeoGeoTitle}</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm text-white/85">
            <caption className="sr-only">{c.tableCaption}</caption>
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th scope="col" className="px-4 py-3 font-semibold text-sky-200">
                  {c.colTopic}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-sky-200">
                  {c.colFocus}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-sky-200">
                  {c.colBestFor}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map(([topic, focus, best]) => (
                <tr key={topic} className="border-b border-white/[0.06] last:border-0">
                  <td className="px-4 py-3 font-medium text-white">{topic}</td>
                  <td className="px-4 py-3">{focus}</td>
                  <td className="px-4 py-3">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <article className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white">{c.templateTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">{c.templateBody}</p>
        </article>

        <article className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white">{c.aiSiteTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">{c.aiSiteBody}</p>
        </article>
      </div>
    </section>
  );
}
