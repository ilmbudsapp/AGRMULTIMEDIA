import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

const LINKEDIN_AUTHOR_URL = "https://www.linkedin.com/in/agron-osmani-228947266/";

const COPY: Record<
  "sr" | "en" | "de" | "it" | "al",
  { line: string }
> = {
  sr: {
    line: "Agron Osmani — CEO i osnivač AGR Multimedia",
  },
  en: {
    line: "Agron Osmani — CEO & Founder of AGR Multimedia",
  },
  de: {
    line: "Agron Osmani — CEO & Gründer von AGR Multimedia",
  },
  it: {
    line: "Agron Osmani — CEO e fondatore di AGR Multimedia",
  },
  al: {
    line: "Agron Osmani — CEO dhe themelues i AGR Multimedia",
  },
};

const PREFIX: Record<keyof typeof COPY, string> = {
  sr: "Autor:",
  en: "By",
  de: "Von",
  it: "Di",
  al: "Nga",
};

function langKey(lang: Language): keyof typeof COPY {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

type Props = {
  variant?: "darkOnLight" | "lightOnDark";
  className?: string;
  language?: Language;
};

/**
 * E-E-A-T: visible author + link to LinkedIn (matches JSON-LD Person @id).
 */
export default function AuthorByline({ variant = "lightOnDark", className = "", language: languageProp }: Props) {
  const { currentLanguage } = useLanguage();
  const language = languageProp ?? currentLanguage;
  const k = langKey(language);
  const { line } = COPY[k];
  const prefix = PREFIX[k];
  const isBlog = variant === "darkOnLight";

  return (
    <p
      className={`text-sm ${isBlog ? "text-navy/75" : "text-white/60"} ${className}`}
      data-testid="author-byline"
    >
      <span className="text-current/85">{prefix}</span>{" "}
      <a
        href={LINKEDIN_AUTHOR_URL}
        target="_blank"
        rel="author noopener noreferrer"
        className={`font-semibold underline-offset-2 hover:underline ${
          isBlog ? "text-electric-blue" : "text-blue-300 hover:text-blue-200"
        }`}
      >
        {line}
      </a>
      .
    </p>
  );
}
