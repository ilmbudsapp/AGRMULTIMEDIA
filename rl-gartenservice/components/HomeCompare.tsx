"use client";

import { useEffect, useState } from "react";
import { Compare } from "@/components/Compare";
import { MaskWords } from "@/components/MaskWords";
import { gallery } from "@/content/site";

export function HomeCompare() {
  const feature = gallery.find((item) => item.kind === "compare" && item.id === "terrasse");
  const [link, setLink] = useState<"plain" | "held" | "in">("plain");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLink("in");
      return;
    }
    setLink((current) => (current === "in" ? current : "held"));
  }, []);

  if (!feature || feature.kind !== "compare") return null;

  return (
    <section className="home-compare" aria-labelledby="compare-title">
      <div data-reveal="card">
      <div className="home-compare-inner card-motion">
        <p className="eyebrow">Referenzen</p>
        <h2 id="compare-title" className="word-title" data-reveal="mask">
          <MaskWords text="Vorher und Nachher" />
        </h2>
        <p className="intro">Dieselbe Terrasse vor und nach dem Bau.</p>
        <Compare
          story
          before={{ ...feature.before, focus: "38% 42%" }}
          after={{ ...feature.after, focus: "32% 38%" }}
          title={feature.title}
          onSettled={() => setLink("in")}
        />
        <a
          className={link === "in" ? "more-link is-in" : link === "held" ? "more-link is-held" : "more-link"}
          href="/galerie"
        >
          Alle Bilder ansehen
        </a>
      </div>
      </div>
    </section>
  );
}
