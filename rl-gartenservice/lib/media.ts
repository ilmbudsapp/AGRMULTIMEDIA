export function fileName(src: string) {
  return src.split("/").pop() ?? src;
}

export function fitSrc(src: string) {
  return `/media/fit/${fileName(src)}`;
}

export function cardSrc(src: string) {
  return `/media/cardfit/${fileName(src)}`;
}
