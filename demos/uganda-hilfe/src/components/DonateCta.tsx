import Link from "next/link";

type Props = {
  title?: string;
  text?: string;
  compact?: boolean;
};

export default function DonateCta({
  title = "Ihre Spende schafft Bildung und Perspektive",
  text = "Mit Ihrer Unterstützung ermöglichen wir Schulgeld, Verpflegung, Lernmaterial und sichere Räume für Kinder in Kasanje.",
  compact = false,
}: Props) {
  return (
    <section className={`${compact ? "py-10" : "uhu-section"} bg-[#14532d] text-white`} aria-labelledby="donate-cta-heading">
      <div className="uhu-container flex flex-col items-center gap-6 text-center">
        <h2 id="donate-cta-heading" className="max-w-2xl text-2xl font-extrabold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{text}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/spenden/" className="uhu-btn-primary bg-[#52b788]">
            Jetzt spenden
          </Link>
          <Link href="/projekte/" className="uhu-btn-secondary">
            Unsere Projekte
          </Link>
          <Link href="/kontakt/" className="uhu-btn-secondary">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
