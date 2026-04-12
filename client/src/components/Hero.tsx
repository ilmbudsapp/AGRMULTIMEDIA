import { useLanguage } from "@/contexts/LanguageContext";
import bannerWeb from "@assets/BANNER 1_1755557330915.jpg";
import greenHarvest from "@assets/generated_images/GreenHarvest_Organic_Logo_b1862bc1.png";
import posterRagazzo from "@assets/Ragazzo con lanterne_1755565190060.jpg";
import printMockup from "@assets/generated_images/Print_Materials_Mockup_f741f1f6.png";

const collage = [
  { src: bannerWeb, labelKey: "collageWeb" as const, alt: "Website project" },
  { src: greenHarvest, labelKey: "collageBrand" as const, alt: "Branding / logo" },
  { src: posterRagazzo, labelKey: "collageVideo" as const, alt: "Video / creative frame" },
  { src: printMockup, labelKey: "collageCreative" as const, alt: "Print & layout" },
];

export default function Hero() {
  const { tSpec } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative scroll-mt-20 border-b border-neutral-200/90 bg-gradient-to-b from-[#faf9f7] via-[#f5f4f1] to-[#eef0f6] pt-[5.25rem] pb-14 md:pt-28 md:pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,rgba(99,102,241,0.07),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-10 lg:px-8">
        <div className="text-center lg:text-left">
          <h1
            className="text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:text-3xl md:text-[2.15rem] lg:text-[2.35rem]"
            data-testid="hero-title"
          >
            {tSpec.hero.h1}
          </h1>
          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600 lg:mx-0 lg:max-w-[28rem]"
            data-testid="hero-subtitle"
          >
            {tSpec.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-start lg:justify-start">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="min-h-[48px] rounded-full bg-neutral-900 px-8 py-3 text-[0.9375rem] font-semibold text-white shadow-sm transition hover:bg-neutral-800"
              data-testid="hero-cta-primary"
            >
              {tSpec.hero.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={() => scrollTo("portfolio")}
              className="min-h-[48px] rounded-full border border-neutral-300 bg-white/80 px-8 py-3 text-[0.9375rem] font-medium text-neutral-800 shadow-sm backdrop-blur-sm transition hover:bg-white"
              data-testid="hero-cta-secondary"
            >
              {tSpec.hero.ctaSecondary}
            </button>
          </div>

          <p className="mt-8 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-neutral-400">
            {tSpec.hero.availableIn}
          </p>
        </div>

        <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {collage.map((item) => (
              <figure
                key={item.labelKey}
                className="group overflow-hidden rounded-xl border border-neutral-200/90 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <figcaption className="border-t border-neutral-100 px-2 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-neutral-500 sm:text-[0.7rem]">
                  {tSpec.hero[item.labelKey]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
