import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Wrench, ArrowRight } from "lucide-react";
import type { LocalizedSubsection, ServiceTemplateLabels } from "@/lib/servicePageI18n";

type ServicePageTemplateProps = {
  labels: ServiceTemplateLabels;
  eyebrow: string;
  h1: string;
  intro: string;
  whatIoffer: string[];
  serviceCategoriesTitle: string;
  subsections: LocalizedSubsection[];
  selectedWorkTitle: string;
  selectedWorkIntro: string;
  toolsTitle: string;
  tools: string[];
  whyChooseTitle: string;
  whyChoosePoints: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  localNote?: string;
};

export default function ServicePageTemplate({
  labels,
  eyebrow,
  h1,
  intro,
  whatIoffer,
  serviceCategoriesTitle,
  subsections,
  selectedWorkTitle,
  selectedWorkIntro,
  toolsTitle,
  tools,
  whyChooseTitle,
  whyChoosePoints,
  ctaTitle,
  ctaText,
  ctaButton,
  localNote,
}: ServicePageTemplateProps) {
  const anchorLinks = [
    { href: "#what-i-offer", label: labels.whatIOffer },
    { href: "#service-categories", label: labels.serviceCategories },
    { href: "#selected-work-placeholder", label: labels.selectedWorkPlaceholder },
    { href: "#tools-software", label: labels.toolsSoftware },
    { href: "#why-choose", label: labels.whyChoose },
    { href: "#contact-cta", label: labels.contactCta },
  ];

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
          <nav
            aria-label="Service page sections"
            className="mt-8 flex flex-wrap gap-2 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm"
          >
            {anchorLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:bg-neutral-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        <section id="what-i-offer" className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{labels.whatIOffer}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {whatIoffer.map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="service-categories" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">{serviceCategoriesTitle}</h2>
          <div className="mt-5 space-y-5">
            {subsections.map((sub) => {
              const hasVideoGallery = Boolean(sub.workVideoGallery?.length);
              const hasImageGallery = Boolean(sub.workGallery?.length);
              const hasWorkMedia = hasVideoGallery || hasImageGallery;

              return (
              <article key={sub.id} id={sub.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{sub.h3}</h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">{sub.intro}</p>

                <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-neutral-700">
                  {labels.whatThisIncludes}
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {sub.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={
                    hasWorkMedia
                      ? "mt-5 space-y-4"
                      : "mt-5 grid gap-3 md:grid-cols-2"
                  }
                >
                  <div
                    className={`rounded-xl p-4 ${
                      hasWorkMedia
                        ? "border border-neutral-200 bg-neutral-50"
                        : "border border-dashed border-neutral-300 bg-neutral-50"
                    }`}
                  >
                    <h4 className="text-sm font-semibold text-neutral-800">
                      {hasVideoGallery
                        ? labels.videoExamples
                        : hasImageGallery
                          ? labels.workExamples
                          : labels.selectedWorkPlaceholder}
                    </h4>
                    {hasVideoGallery ? (
                      <div className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
                        {sub.workVideoGallery!.map((vid) => (
                          <figure
                            key={vid.src}
                            className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 shadow-sm"
                          >
                            <video
                              className="aspect-video w-full bg-neutral-900 object-contain"
                              controls
                              playsInline
                              preload="none"
                              poster={encodeURI(vid.poster)}
                              aria-label={vid.title}
                            >
                              <source src={encodeURI(vid.src)} type="video/mp4" />
                            </video>
                            <figcaption className="bg-neutral-50 px-2 py-2 text-center text-xs text-neutral-600">
                              {vid.title}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : hasImageGallery ? (
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {sub.workGallery!.map((img) => (
                          <figure
                            key={img.src}
                            className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-sm"
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              loading="lazy"
                              decoding="async"
                              className="h-auto w-full max-h-[min(70vh,520px)] object-contain"
                            />
                          </figure>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-sm text-neutral-600">{sub.workPlaceholder}</p>
                    )}
                  </div>
                  <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 md:max-w-xl">
                    <h4 className="text-sm font-semibold text-neutral-800">{labels.toolsPlaceholder}</h4>
                    <p className="mt-2 text-sm text-neutral-600">{sub.toolsPlaceholder}</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
                >
                  {sub.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
              );
            })}
          </div>
        </section>

        <section id="selected-work-placeholder" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{selectedWorkTitle}</h2>
            <p className="mt-3 text-neutral-600">{selectedWorkIntro}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-600">
                {labels.selectedWorkSlot} 1 ({labels.futureProject})
              </div>
              <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-600">
                {labels.selectedWorkSlot} 2 ({labels.futureProject})
              </div>
              <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-600">
                {labels.selectedWorkSlot} 3 ({labels.futureProject})
              </div>
            </div>
          </article>
        </section>

        <section id="tools-software" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{toolsTitle}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {tools.map((tool) => (
                <li key={tool} className="flex items-start gap-2 text-sm text-neutral-700">
                  <Wrench className="mt-0.5 h-4 w-4 text-neutral-500" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="why-choose" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{whyChooseTitle}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyChoosePoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="contact-cta" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
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
