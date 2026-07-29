import type { StaticImageData } from "next/image";

/** Normalize Vite/Next static image imports for plain <img src>. */
export function assetSrc(src: string | StaticImageData): string {
  return typeof src === "string" ? src : src.src;
}
