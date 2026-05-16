/** AI-generated portfolio clips served from `client/public/Video Ai`. */
const BASE = "/Video Ai";

export type VideoAiClip = {
  id: string;
  src: string;
  poster: string;
};

function asset(file: string): string {
  return encodeURI(`${BASE}/${file}`);
}

export const VIDEO_AI_CLIPS: VideoAiClip[] = [
  { id: "01", src: asset("01.mp4"), poster: asset("posters/01.webp") },
  { id: "02", src: asset("02.mp4"), poster: asset("posters/02.webp") },
  { id: "03", src: asset("03.mp4"), poster: asset("posters/03.webp") },
  { id: "04", src: asset("04.mp4"), poster: asset("posters/04.webp") },
  { id: "05", src: asset("05.mp4"), poster: asset("posters/05.webp") },
  { id: "06", src: asset("06.mp4"), poster: asset("posters/06.webp") },
  { id: "07", src: asset("07.mp4"), poster: asset("posters/07.webp") },
  { id: "08", src: asset("08.mp4"), poster: asset("posters/08.webp") },
];
