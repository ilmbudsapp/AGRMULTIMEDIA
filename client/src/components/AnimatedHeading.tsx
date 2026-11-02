import { createElement, Fragment, type HTMLAttributes } from "react";

type HeadingTag = "h1" | "h2" | "h3";

type AnimatedHeadingProps = {
  as?: HeadingTag;
  children: string;
  /** Insert a line break after this 0-based word index, keeping the real space in the DOM. */
  breakAfter?: number;
} & HTMLAttributes<HTMLHeadingElement>;

function splitWords(text: string) {
  return text.split(/(\s+)/);
}

export default function AnimatedHeading({
  as = "h2",
  children,
  className,
  breakAfter,
  ...rest
}: AnimatedHeadingProps) {
  const parts = splitWords(children);
  let wordIndex = -1;

  return createElement(
    as,
    {
      ...rest,
      className: ["studio-split-heading", className].filter(Boolean).join(" "),
    },
    parts.map((part, index) => {
      if (/^\s+$/.test(part)) {
        return <span key={`s-${index}`}>{part}</span>;
      }
      wordIndex += 1;
      const word = (
        <span key={`w-${index}`} className="studio-split-word-wrap">
          <span className="studio-split-word">{part}</span>
        </span>
      );
      if (breakAfter === wordIndex) {
        return (
          <Fragment key={`b-${index}`}>
            {word}
            <br />
          </Fragment>
        );
      }
      return word;
    }),
  );
}
