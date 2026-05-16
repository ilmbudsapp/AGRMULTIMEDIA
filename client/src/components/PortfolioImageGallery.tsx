import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

export type GalleryItem = {
  src: string;
  alt: string;
};

type Props = {
  items: GalleryItem[];
  closeLabel?: string;
};

export default function PortfolioImageGallery({ items, closeLabel = "Close" }: Props) {
  const [active, setActive] = useState<GalleryItem | null>(null);
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
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.src}
            className="flex min-h-[8rem] items-center justify-center overflow-hidden rounded-lg border border-white/[0.06] bg-[#0a0a0f]/50 p-2 sm:min-h-[10rem] md:min-h-0 md:p-3"
          >
            <button
              type="button"
              className="block w-full cursor-zoom-in touch-manipulation"
              onClick={() => setActive(item)}
              aria-haspopup="dialog"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="mx-auto h-auto w-full max-h-48 object-contain sm:max-h-56 md:aspect-[4/3] md:max-h-none"
                loading="lazy"
                decoding="async"
              />
            </button>
          </figure>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
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
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[min(90dvh,100%)] max-w-[min(96vw,100%)] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
