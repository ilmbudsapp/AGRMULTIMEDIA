import type { ServiceLang } from "@/lib/servicePageI18n";

/** MP4s in `client/public/Video Ai/` — posters JPG in `posters/` (see scripts/extract-video-posters.mjs). */
const V = "/Video Ai";
const P = `${V}/posters`;

const clips: { src: string; poster: string }[] = [
  { src: `${V}/01.mp4`, poster: `${P}/01.jpg` },
  { src: `${V}/02.mp4`, poster: `${P}/02.jpg` },
  { src: `${V}/03.mp4`, poster: `${P}/03.jpg` },
  { src: `${V}/04.mp4`, poster: `${P}/04.jpg` },
  { src: `${V}/05.mp4`, poster: `${P}/05.jpg` },
  { src: `${V}/06.mp4`, poster: `${P}/06.jpg` },
  { src: `${V}/07.mp4`, poster: `${P}/07.jpg` },
];

export const videoKreiraniSaAiGalleryByLang: Record<ServiceLang, { src: string; title: string; poster: string }[]> = {
  en: clips.map((c, i) => ({ ...c, title: `AI video ${i + 1}` })),
  de: clips.map((c, i) => ({ ...c, title: `KI-Video ${i + 1}` })),
  it: clips.map((c, i) => ({ ...c, title: `Video IA ${i + 1}` })),
  sr: clips.map((c, i) => ({ ...c, title: `AI video klip ${i + 1}` })),
  al: clips.map((c, i) => ({ ...c, title: `Video AI ${i + 1}` })),
};
