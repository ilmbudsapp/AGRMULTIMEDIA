import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export type ReinigungGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  items: readonly ReinigungGalleryItem[];
};

export default function ReinigungImageGallery({ items }: Props) {
  const [active, setActive] = useState<ReinigungGalleryItem | null>(null);
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
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-6%" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {items.map((item) => (
          <motion.figure
            key={item.src}
            variants={{
              hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
            }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/50 p-3 shadow-[0_12px_40px_rgba(14,165,233,0.1)] backdrop-blur-lg"
          >
            <button
              type="button"
              className="flex min-h-[12rem] flex-1 cursor-zoom-in items-center justify-center rounded-xl bg-gradient-to-br from-sky-50/80 to-cyan-50/50 p-2 touch-manipulation"
              onClick={() => setActive(item)}
              aria-haspopup="dialog"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="mx-auto h-auto max-h-56 w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </button>
            {item.caption ? (
              <figcaption className="mt-3 text-center text-sm font-semibold text-slate-700">
                {item.caption}
              </figcaption>
            ) : null}
          </motion.figure>
        ))}
      </motion.div>

      {active ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Vorschau schließen"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[min(82dvh,100%)] max-w-[min(96vw,100%)] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {active.caption ? (
            <p className="mt-4 max-w-xl text-center text-sm font-medium text-cyan-100/95">{active.caption}</p>
          ) : null}
        </motion.div>
      ) : null}
    </>
  );
}
