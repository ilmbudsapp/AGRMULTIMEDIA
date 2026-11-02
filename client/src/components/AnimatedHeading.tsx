import { createElement, type HTMLAttributes } from "react";

type HeadingTag = "h1" | "h2" | "h3";

type AnimatedHeadingProps = {
  as?: HeadingTag;
  children: string;
} & HTMLAttributes<HTMLHeadingElement>;

function splitWords(text: string) {
  return text.split(/(\s+)/);
}

export default function AnimatedHeading({
  as = "h2",
  children,
  className,
  ...rest
}: AnimatedHeadingProps) {
  const parts = splitWords(children);

  return createElement(
    as,
    {
      ...rest,
      className: ["studio-split-heading", className].filter(Boolean).join(" "),
    },
    parts.map((part, index) =>
      /^\s+$/.test(part) ? (
        <span key={`s-${index}`}>{part}</span>
      ) : (
        <span key={`w-${index}`} className="studio-split-word-wrap">
          <span className="studio-split-word">{part}</span>
        </span>
      ),
    ),
  );
}
