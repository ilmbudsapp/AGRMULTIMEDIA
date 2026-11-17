"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/content/site";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [clip, setClip] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 719px)");
    const apply = () => {
      setPlaying(false);
      setClip(reduce.matches ? null : narrow.matches ? hero.videoMobile : hero.video);
    };
    apply();
    reduce.addEventListener("change", apply);
    narrow.addEventListener("change", apply);
    return () => {
      reduce.removeEventListener("change", apply);
      narrow.removeEventListener("change", apply);
    };
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !clip) return;
    node.defaultMuted = true;
    const start = () => {
      node.play().catch(() => undefined);
    };
    if (node.readyState >= 2) start();
    else node.addEventListener("canplay", start);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) node.play().catch(() => undefined);
      else node.pause();
    });
    observer.observe(node);
    return () => {
      node.removeEventListener("canplay", start);
      observer.disconnect();
    };
  }, [clip]);

  const poster = clip === hero.videoMobile ? hero.imageMobile : hero.image;

  return (
    <div className={playing ? "hero-photo-frame is-playing" : "hero-photo-frame"}>
      <picture>
        <source media="(max-width: 719px)" srcSet={hero.imageMobile} />
        <img
          className="hero-photo"
          src={hero.image}
          alt={hero.alt}
          width={1672}
          height={941}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      {clip ? (
        <video
          key={clip}
          ref={videoRef}
          className="hero-photo"
          src={clip}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          onError={() => setClip(null)}
        />
      ) : null}
    </div>
  );
}
