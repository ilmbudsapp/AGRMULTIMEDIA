import { useRef } from "react";
import { motion } from "framer-motion";
import { GLASS_PANEL } from "./styles";

export type ReinigungVideoItem = {
  src: string;
  title: string;
  caption: string;
};

type Props = {
  videos: readonly ReinigungVideoItem[];
};

export default function VideoGrid({ videos }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-6%" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.14 } },
      }}
    >
      {videos.map((video) => (
        <VideoCard key={video.src} video={video} />
      ))}
    </motion.div>
  );
}

function VideoCard({ video }: { video: ReinigungVideoItem }) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => undefined);
  };

  const pause = () => {
    const el = ref.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <motion.figure
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={`group overflow-hidden p-3 ${GLASS_PANEL}`}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/40 to-cyan-50/30 p-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] ring-1 ring-white/70 transition-all duration-300 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_24px_rgba(34,211,238,0.25)]">
        <video
          ref={ref}
          src={video.src}
          className="aspect-[9/16] w-full rounded-xl bg-slate-900 object-cover md:aspect-video md:object-contain"
          muted
          playsInline
          loop
          preload="metadata"
          aria-label={video.title}
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/30 via-transparent to-cyan-100/10" aria-hidden />
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-800 shadow-sm backdrop-blur-sm">
          Hover · Vorschau
        </span>
      </div>
      <figcaption className="mt-4 text-center text-sm font-semibold leading-snug text-slate-700">
        {video.caption}
      </figcaption>
    </motion.figure>
  );
}
