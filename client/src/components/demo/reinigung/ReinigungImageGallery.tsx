import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { GLASS_PANEL } from "./styles";

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
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-6%" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {items.map((item) => (
          <motion.figure
            key={item.src}
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
            }}
            className={`group flex flex-col overflow-hidden p-3 ${GLASS_PANEL}`}
          >
            <button
              type="button"
              className="relative flex min-h-[12rem] flex-1 cursor-zoom-in overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50/90 to-blue-50/50 p-2 touch-manipulation"
              onClick={() => setActive(item)}
              aria-haspopup="dialog"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="mx-auto h-auto max-h-56 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </button>
            {item.caption ? (
              <figcaption className="mt-4 text-center text-sm font-semibold text-slate-700">{item.caption}</figcaption>
            ) : null}
          </motion.figure>
        ))}
      </motion.div>

      {active ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900/92 p-4 backdrop-blur-lg"
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
            <p className="mt-4 max-w-xl text-center text-sm font-medium text-cyan-100">{active.caption}</p>
          ) : null}
        </motion.div>
      ) : null}
    </>
  );
}
