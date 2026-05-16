import { useRef } from "react";

export type PortfolioVideoClip = {
  id: string;
  src: string;
  poster: string;
};

type Props = {
  clips: PortfolioVideoClip[];
  clipAriaLabel: (index: number) => string;
};

export default function PortfolioVideoClipGrid({ clips, clipAriaLabel }: Props) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {clips.map((clip, index) => (
        <PortfolioVideoClipCard key={clip.id} clip={clip} ariaLabel={clipAriaLabel(index + 1)} />
      ))}
    </div>
  );
}

function PortfolioVideoClipCard({
  clip,
  ariaLabel,
}: {
  clip: PortfolioVideoClip;
  ariaLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playOnHover = () => {
    const el = videoRef.current;
    if (!el) return;
    void el.play().catch(() => undefined);
  };

  const pauseOnLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <figure
      className="group overflow-hidden rounded-xl border border-white/[0.08] bg-black/40"
      onMouseEnter={playOnHover}
      onMouseLeave={pauseOnLeave}
      onFocus={playOnHover}
      onBlur={pauseOnLeave}
    >
      <video
        ref={videoRef}
        className="aspect-video w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={clip.poster}
        aria-label={ariaLabel}
      >
        <source src={clip.src} type="video/mp4" />
      </video>
    </figure>
  );
}
