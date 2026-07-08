"use client";

import { useState } from "react";
import { FAQ } from "@/lib/content";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section faqSection">
      <div className="sectionHead fadeUp">
        <p className="eyebrow">FAQ</p>
        <h2>Häufig gestellte Fragen</h2>
        <p className="sectionLead">
          Antworten auf die wichtigsten Fragen zu Angebot, Ablauf und unseren Leistungen als
          Malerbetrieb in Stuttgart.
        </p>
      </div>

      <div className="faqList">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <article key={item.q} className={`faqItem fadeUp${isOpen ? " isOpen" : ""}`}>
              <button
                type="button"
                className="faqQuestion"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faqIcon" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="faqAnswer">
                  <p>{item.a}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
