import { useRef } from "react";
import { motion } from "framer-motion";
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
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
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
        hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75 } },
      }}
      className="group overflow-hidden rounded-2xl border border-cyan-100/90 bg-white/55 p-3 shadow-[0_16px_48px_rgba(14,165,233,0.12)] backdrop-blur-lg"
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl ring-2 ring-cyan-200/60 transition duration-300 group-hover:ring-teal-400/80"
        whileHover={{ scale: 1.01 }}
      >
        <video
          ref={ref}
          src={video.src}
          className="aspect-[9/16] w-full bg-slate-900 object-cover md:aspect-video md:object-contain"
          muted
          playsInline
          loop
          preload="metadata"
          aria-label={video.title}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-900/35 via-transparent to-transparent opacity-80"
          initial={false}
        />
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-800 backdrop-blur-sm">
          Hover · Vorschau
        </span>
      </motion.div>
      <figcaption className="mt-3 text-center text-sm font-semibold leading-snug text-slate-700">
        {video.caption}
      </figcaption>
    </motion.figure>
  );
}
