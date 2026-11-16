import type { CSSProperties } from "react";

export function MaskWords({ text }: { text: string }) {
  return text.split(" ").map((word, index) => (
    <span className="mask-line" key={`${word}-${index}`} style={{ "--w": index } as CSSProperties}>
      <span>{word}</span>
    </span>
  ));
}
