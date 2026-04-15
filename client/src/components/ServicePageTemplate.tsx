import type { ReactNode } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Wrench, ArrowRight } from "lucide-react";

type ServicePageTemplateProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  deliverablesTitle: string;
  deliverables: string[];
  toolsTitle: string;
  tools: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  localNote?: string;
  extraBlock?: ReactNode;
};

export default function ServicePageTemplate({
  eyebrow,
  h1,
  intro,
  overviewTitle,
  overviewText,
  deliverablesTitle,
  deliverables,
  toolsTitle,
  tools,
  ctaTitle,
  ctaText,
  ctaButton,
  localNote,
  extraBlock,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#f5f4f2] text-neutral-900">
      <Navigation />
      <main className="pt-24 pb-20">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">{intro}</p>
          {localNote ? <p className="mt-4 max-w-3xl text-sm text-neutral-500">{localNote}</p> : null}
        </section>

        <section className="mx-auto mt-14 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:gap-10 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">{overviewTitle}</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">{overviewText}</p>
            {extraBlock ? <div className="mt-6">{extraBlock}</div> : null}
          </article>

          <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight">{toolsTitle}</h2>
            <ul className="mt-4 space-y-2">
              {tools.map((tool) => (
                <li key={tool} className="flex items-start gap-2 text-sm text-neutral-700">
                  <Wrench className="mt-0.5 h-4 w-4 text-neutral-500" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{deliverablesTitle}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white shadow-[0_16px_40px_rgba(15,23,42,0.22)]">
            <h2 className="text-2xl font-semibold tracking-tight">{ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-neutral-300">{ctaText}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
            >
              {ctaButton}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
