import { SITE } from "@/lib/site";

type CtaBandProps = {
  title: string;
  text?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "light" | "blue";
};

export default function CtaBand({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "blue",
}: CtaBandProps) {
  const waUrl = `https://wa.me/${SITE.whatsapp}`;

  return (
    <section className={`ctaBand ctaBand--${variant} fadeUp`}>
      <div className="ctaBandInner">
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <div className="ctaRow ctaRow--inline">
          <a href={primaryHref} className="btn primary">
            {primaryLabel}
          </a>
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref === "whatsapp" ? waUrl : secondaryHref}
              className="btn secondary"
              {...(secondaryHref === "whatsapp"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
