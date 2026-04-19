import { useLanguage } from "@/contexts/LanguageContext";

const CLIP_INDEXES = [1, 2, 3, 4, 5, 6, 7] as const;

function clipSrc(n: number) {
  return encodeURI(`/Video editing/${n}.mp4`);
}

export default function HomeVideoEditing() {
  const { tSpec } = useLanguage();
  const ve = tSpec.videoEditingShowcase;

  return (
    <section
      id="video-editing-showcase"
      className="scroll-mt-24 border-t border-white/10 bg-neutral-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">{ve.eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{ve.title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-300">{ve.subtitle}</p>
        <p className="mt-2 text-sm text-neutral-500">{ve.toolsLine}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLIP_INDEXES.map((n) => (
            <div
              key={n}
              className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full object-contain"
                aria-label={`${ve.videoAriaLabel} ${n}`}
              >
                <source src={clipSrc(n)} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
