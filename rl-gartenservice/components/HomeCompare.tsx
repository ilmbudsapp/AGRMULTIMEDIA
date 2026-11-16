import { Compare } from "@/components/Compare";
import { gallery } from "@/content/site";

export function HomeCompare() {
  const feature = gallery.find((item) => item.kind === "compare" && item.id === "terrasse");
  if (!feature || feature.kind !== "compare") return null;

  return (
    <section className="home-compare" aria-labelledby="compare-title">
      <div className="home-compare-inner">
        <p className="eyebrow">Referenzen</p>
        <h2 id="compare-title">Vorher und Nachher</h2>
        <p className="intro">Dieselbe Terrasse vor und nach dem Bau.</p>
        <Compare demo before={feature.before} after={feature.after} title={feature.title} />
        <a className="more-link" href="/galerie">
          Alle Referenzen ansehen
        </a>
      </div>
    </section>
  );
}
