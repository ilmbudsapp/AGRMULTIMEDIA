import { useCallback, useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import type { PortfolioMediaItem } from "@/data/reinigungPortfolio";

type Props = {
  items: PortfolioMediaItem[];
  closeLabel?: string;
};

export default function PortfolioMediaGallery({ items, closeLabel = "Close" }: Props) {
  const [active, setActive] = useState<PortfolioMediaItem | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.src}
            className="flex min-h-[9rem] items-center justify-center sm:min-h-[10rem]"
          >
            <button
              type="button"
              className="group relative block w-full cursor-zoom-in touch-manipulation"
              onClick={() => setActive(item)}
              aria-haspopup="dialog"
              aria-label={item.alt}
            >
              {item.kind === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="mx-auto h-auto w-full max-h-52 object-contain shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition duration-300 group-hover:scale-[1.02] sm:max-h-56"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="relative block">
                  <video
                    src={item.src}
                    className="mx-auto h-auto w-full max-h-52 object-contain shadow-[0_8px_28px_rgba(0,0,0,0.35)] sm:max-h-56"
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
                      <Play className="h-5 w-5 fill-current" aria-hidden />
                    </span>
                  </span>
                </span>
              )}
            </button>
          </figure>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/94 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-white/15 sm:right-5 sm:top-5"
            aria-label={closeLabel}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          {active.kind === "image" ? (
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[min(90dvh,100%)] max-w-[min(96vw,100%)] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={active.src}
              className="max-h-[min(90dvh,100%)] max-w-[min(96vw,100%)] object-contain"
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      ) : null}
    </>
  );
}
