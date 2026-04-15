import type { ServiceLang } from "@/lib/servicePageI18n";

/** Served from `client/public/Video Ai/` — URL-encode spaces in browser via encodeURI in template. */
const B = "/Video Ai";

export const videoKreiraniSaAiGalleryByLang: Record<ServiceLang, { src: string; title: string }[]> = {
  en: [
    { src: `${B}/01.mp4`, title: "AI video 1" },
    { src: `${B}/02.mp4`, title: "AI video 2" },
    { src: `${B}/03.mp4`, title: "AI video 3" },
    { src: `${B}/04.mp4`, title: "AI video 4" },
    { src: `${B}/05.mp4`, title: "AI video 5" },
    { src: `${B}/06.mp4`, title: "AI video 6" },
    { src: `${B}/07.mp4`, title: "AI video 7" },
  ],
  de: [
    { src: `${B}/01.mp4`, title: "KI-Video 1" },
    { src: `${B}/02.mp4`, title: "KI-Video 2" },
    { src: `${B}/03.mp4`, title: "KI-Video 3" },
    { src: `${B}/04.mp4`, title: "KI-Video 4" },
    { src: `${B}/05.mp4`, title: "KI-Video 5" },
    { src: `${B}/06.mp4`, title: "KI-Video 6" },
    { src: `${B}/07.mp4`, title: "KI-Video 7" },
  ],
  it: [
    { src: `${B}/01.mp4`, title: "Video IA 1" },
    { src: `${B}/02.mp4`, title: "Video IA 2" },
    { src: `${B}/03.mp4`, title: "Video IA 3" },
    { src: `${B}/04.mp4`, title: "Video IA 4" },
    { src: `${B}/05.mp4`, title: "Video IA 5" },
    { src: `${B}/06.mp4`, title: "Video IA 6" },
    { src: `${B}/07.mp4`, title: "Video IA 7" },
  ],
  sr: [
    { src: `${B}/01.mp4`, title: "AI video klip 1" },
    { src: `${B}/02.mp4`, title: "AI video klip 2" },
    { src: `${B}/03.mp4`, title: "AI video klip 3" },
    { src: `${B}/04.mp4`, title: "AI video klip 4" },
    { src: `${B}/05.mp4`, title: "AI video klip 5" },
    { src: `${B}/06.mp4`, title: "AI video klip 6" },
    { src: `${B}/07.mp4`, title: "AI video klip 7" },
  ],
  al: [
    { src: `${B}/01.mp4`, title: "Video AI 1" },
    { src: `${B}/02.mp4`, title: "Video AI 2" },
    { src: `${B}/03.mp4`, title: "Video AI 3" },
    { src: `${B}/04.mp4`, title: "Video AI 4" },
    { src: `${B}/05.mp4`, title: "Video AI 5" },
    { src: `${B}/06.mp4`, title: "Video AI 6" },
    { src: `${B}/07.mp4`, title: "Video AI 7" },
  ],
};
