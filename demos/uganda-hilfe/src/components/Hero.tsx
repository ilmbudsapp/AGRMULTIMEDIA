import Link from "next/link";
import { BASE, SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[min(88vh,920px)] overflow-hidden" aria-labelledby="hero-heading">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/images/hero.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 uhu-gradient-hero" aria-hidden />
      <div className="relative z-10 flex min-h-[min(88vh,920px)] items-center">
        <div className="uhu-container py-16 text-white">
          <p className="uhu-animate-in mb-5 max-w-2xl border-l-2 border-[#52b788]/80 pl-4 text-sm font-medium leading-relaxed tracking-[0.12em] text-[#e8f5ec] md:text-base md:tracking-[0.16em] lg:text-lg lg:tracking-[0.18em]">
            Seit über 10 Jahren helfen wir Kindern in Uganda.
          </p>
          <h1 id="hero-heading" className="uhu-animate-in uhu-animate-in-delay-1 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            {SITE.tagline}
          </h1>
          <p className="uhu-animate-in uhu-animate-in-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Bildung, Verpflegung und ein liebevolles Umfeld für Kinder — unterstützt vom Uganda-Hilfe Unterland e.V.
          </p>
          <div className="uhu-animate-in uhu-animate-in-delay-3 mt-10 flex flex-wrap gap-4">
            <Link href="/spenden/" className="uhu-btn-primary">
              Jetzt spenden
            </Link>
            <Link href="/projekte/" className="uhu-btn-secondary">
              Unsere Projekte
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
