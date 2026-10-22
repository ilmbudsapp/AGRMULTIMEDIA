/** Classic Premiere Pro portfolio clips from `client/public/Video editing`. */
const BASE = "/Video editing";

const CLIP_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export type VideoEditingClip = {
  id: string;
  src: string;
  poster: string;
  portrait?: boolean;
};

function asset(file: string): string {
  return encodeURI(`${BASE}/${file}`);
}

function posterFor(n: number): string {
  return asset(`posters/${n}.webp`);
}

function videoFileFor(n: number): string {
  return n === 5 ? "5-osoba.mp4" : `${n}.mp4`;
}

/** Kickstarter highlight + all editing samples from `/Video editing`. */
const AI = "/Video Ai";

export const VIDEO_EDITING_CLIPS: VideoEditingClip[] = [
  {
    id: "agr-reklama",
    src: encodeURI(`${AI}/14.mp4`),
    poster: encodeURI(`${AI}/posters/14.webp`),
    portrait: true,
  },
  {
    id: "unternehmen",
    src: encodeURI(`${AI}/10.mp4`),
    poster: encodeURI(`${AI}/posters/10.webp`),
    portrait: true,
  },
  {
    id: "movie-werbung",
    src: encodeURI(`${AI}/11.mp4`),
    poster: encodeURI(`${AI}/posters/11.webp`),
    portrait: true,
  },
  {
    id: "thear",
    src: encodeURI("/Case Studio/THEAR REALM TV-Video clip.mp4"),
    poster: encodeURI("/Case Studio/06.jpg"),
  },
  ...CLIP_NUMBERS.map((n) => ({
    id: String(n),
    src: asset(videoFileFor(n)),
    poster: posterFor(n),
  })),
];
