import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";

const DEMO_BASE = "/demo/tonis-autopflege";
const LOGO_SRC = `${DEMO_BASE}/${encodeURIComponent("TONI LOGO WEBP.webp")}`;
/** Client video: place `hero.mp4` in `public/demo/tonis-autopflege/`. Until then, a project clip is used. */
const HERO_VIDEO_PRIMARY = `${DEMO_BASE}/hero.mp4`;
const HERO_VIDEO_FALLBACK = "/Video%20Ai/01.mp4";
const HERO_POSTER = `${DEMO_BASE}/hero-poster.webp`;

const GALLERY = ["01", "02", "03", "04", "05", "06"].map(
  (n) => `${DEMO_BASE}/gallery-${n}.webp`,
);

const LEISTUNGEN = [
  {
    title: "Innenreinigung & Hygiene",
    text: "Tiefenreinigung von Cockpit, Sitzen, Teppichen und Verkleidungen — inklusive Geruchsbeseitigung und schonender Materialpflege.",
  },
  {
    title: "Außenwäsche & Vorbehandlung",
    text: "pH-neutrale Reinigung, Felgenreinigung und sorgfältige Vorbehandlung von Insekten und Umweltverschmutzung vor der Lackpflege.",
  },
  {
    title: "Lackaufbereitung & Politur",
    text: "Entfernung von Washline, Feinkratzern und Oxidation — mehrschichtige Politur für wiederkehrenden Tiefenglan.",
  },
  {
    title: "Keramikversiegelung",
    text: "Langanhaltender Schutz mit hydrophober Oberfläche: weniger Verschmutzung, bessere Ausbeulung und UV-Stabilität.",
  },
  {
    title: "Detailing & Feinarbeit",
    text: "Einstiegsleisten, Tankdeckel, Motorraum-Optikpflege und Finisharbeiten für ein durchgängig hochwertiges Erscheinungsbild.",
  },
  {
    title: "Tierhaarentfernung & Spezial",
    text: "Gezielte Entfernung von Tierhaaren sowie Aufbereitung von Cabrio-Verdeck und Kunststoffoberflächen auf Wunsch.",
  },
] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function TonisAutopflegeDemo() {
  const reduceMotion = useReducedMotion();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [heroVideoSrc, setHeroVideoSrc] = useState(HERO_VIDEO_PRIMARY);

  useEffect(() => {
    const prevLang = document.documentElement.lang;
    document.documentElement.lang = "de";
    return () => {
      document.documentElement.lang = prevLang;
    };
  }, []);

  useEffect(() => {
    const href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap";
    const id = "tonis-demo-fonts";
    if (document.getElementById(id)) {
      setFontsLoaded(true);
      return;
    }
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => setFontsLoaded(true);
    document.head.appendChild(link);
  }, []);

  const motionProps = useMemo(
    () =>
      reduceMotion
        ? { initial: false, animate: { opacity: 1, y: 0 } }
        : { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" } },
    [reduceMotion],
  );

  return (
    <div
      className="min-h-[100dvh] bg-[#050508] text-[#e8e4dc] antialiased"
      style={{
        fontFamily: fontsLoaded ? '"DM Sans", system-ui, sans-serif' : "system-ui, sans-serif",
      }}
    >
      <a
        href="#kontakt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#c9a227] focus:px-4 focus:py-2 focus:text-black focus:outline-none"
      >
        Zum Kontaktformular springen
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#c9a227]/15 bg-[#050508]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <button
            type="button"
            onClick={() => scrollToId("hero")}
            className="flex items-center gap-2 text-left transition-opacity hover:opacity-90"
          >
            <img
              src={LOGO_SRC}
              width={180}
              height={52}
              alt="Toni's Autopflege — Logo"
              className="h-9 w-auto object-contain md:h-10"
              decoding="async"
              fetchPriority="high"
            />
          </button>
          <nav className="hidden items-center gap-6 text-sm font-medium tracking-wide text-[#c9a227]/90 md:flex">
            <button type="button" onClick={() => scrollToId("leistungen")} className="hover:text-[#e6cf6b]">
              Leistungen
            </button>
            <button type="button" onClick={() => scrollToId("galerie")} className="hover:text-[#e6cf6b]">
              Galerie
            </button>
            <button type="button" onClick={() => scrollToId("ueber-uns")} className="hover:text-[#e6cf6b]">
              Über uns
            </button>
            <button
              type="button"
              onClick={() => scrollToId("kontakt")}
              className="rounded-full border border-[#c9a227]/50 px-4 py-1.5 text-[#f5e6b8] hover:border-[#c9a227] hover:bg-[#c9a227]/10"
            >
              Kontakt
            </button>
          </nav>
          <button
            type="button"
            onClick={() => scrollToId("kontakt")}
            className="rounded-full bg-[#c9a227] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black md:hidden"
          >
            Anfrage
          </button>
        </div>
      </header>

      <section id="hero" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-16">
        <video
          key={heroVideoSrc}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          poster={HERO_POSTER}
          preload="metadata"
          aria-hidden="true"
          onError={() => {
            setHeroVideoSrc((prev) => (prev === HERO_VIDEO_PRIMARY ? HERO_VIDEO_FALLBACK : prev));
          }}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#050508]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <motion.div {...motionProps} transition={{ duration: 0.55 }}>
            <img
              src={LOGO_SRC}
              width={640}
              height={186}
              alt=""
              aria-hidden
              className="mx-auto mb-8 h-auto w-[min(88vw,440px)] drop-shadow-[0_0_40px_rgba(201,162,39,0.25)]"
              decoding="async"
              fetchPriority="high"
            />
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#c9a227]/85 md:text-sm"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              Premium Fahrzeugpflege · Göppingen
            </p>
            <h1
              className="mb-5 text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Glanz, der bleibt.
              <span className="block text-[#c9a227]">Pflege auf höchstem Niveau.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-pretty text-base leading-relaxed text-stone-300 md:text-lg">
              Lackaufbereitung, Innenreinigung, Politur und Keramikversiegelung — präzise ausgeführt, mit
              professionellen Produkten und Liebe zum Detail.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollToId("kontakt")}
                className="rounded-full bg-[#c9a227] px-8 py-3 text-sm font-semibold text-black shadow-[0_0_32px_rgba(201,162,39,0.35)] transition hover:bg-[#d4b03a]"
              >
                Termin anfragen
              </button>
              <button
                type="button"
                onClick={() => scrollToId("leistungen")}
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-[#c9a227]/50 hover:text-[#f5e6b8]"
              >
                Leistungen
              </button>
            </div>
          </motion.div>
        </div>
        <div
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[#c9a227]/50"
          aria-hidden="true"
        >
          <span className="block h-8 w-px bg-gradient-to-b from-[#c9a227] to-transparent" />
        </div>
      </section>

      <section id="galerie" className="scroll-mt-20 border-t border-[#c9a227]/10 bg-[#08080c] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div {...motionProps} transition={{ duration: 0.5 }}>
            <h2
              className="mb-2 text-center text-3xl font-semibold text-white md:text-4xl"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Galerie
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-stone-400">
              Ausgewählte Arbeiten — alle Bilder als WebP für schnelle Ladezeiten. Sobald Ihre Fotos vorliegen,
              ersetzen Sie einfach die Dateien im Projektordner (gleiche Dateinamen).
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {GALLERY.map((src, i) => (
              <motion.figure
                key={src}
                {...motionProps}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : i * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg border border-[#c9a227]/10 bg-[#0c0c10] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={src}
                  alt={`Referenz ${i + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={600}
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs font-medium text-[#c9a227]/90 opacity-0 transition group-hover:opacity-100">
                  WebP · optimiert
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div {...motionProps} transition={{ duration: 0.5 }}>
            <h2
              className="mb-2 text-center text-3xl font-semibold text-white md:text-4xl"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Leistungen
            </h2>
            <p className="mx-auto mb-14 max-w-2xl text-center text-stone-400">
              Umfassende Autopflege mit klaren Schwerpunkten — von der Innenraumhygiene bis zur Keramikversiegelung.
            </p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {LEISTUNGEN.map((item, i) => (
              <motion.article
                key={item.title}
                {...motionProps}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : i * 0.04 }}
                className="rounded-xl border border-[#c9a227]/12 bg-gradient-to-br from-[#0f0f14] to-[#08080c] p-6 shadow-inner"
              >
                <div className="mb-3 h-px w-12 bg-[#c9a227]/60" />
                <h3 className="mb-2 text-lg font-semibold text-[#e6cf6b]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-stone-400">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="scroll-mt-20 border-t border-[#c9a227]/10 bg-[#08080c] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <motion.div {...motionProps} transition={{ duration: 0.5 }}>
            <h2
              className="mb-6 text-3xl font-semibold text-white md:text-4xl"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Über uns
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-stone-300 md:text-xl">
              <strong className="font-semibold text-white">Toni&apos;s Autopflege</strong> steht in Göppingen für
              handwerkliche Qualität und ehrliche Beratung. Wir behandeln jedes Fahrzeug so, als wäre es unser eigenes
              — mit Zeit, Ruhe und den richtigen Verfahren für Lack, Interieur und Langzeitschutz.
            </p>
            <p className="mt-6 text-pretty leading-relaxed text-stone-500">
              Diese Seite ist eine Demo-Präsentation. Inhalte und Kontaktdaten können vor dem Livegang angepasst
              werden.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-lg px-4 md:px-6">
          <motion.div {...motionProps} transition={{ duration: 0.5 }}>
            <h2
              className="mb-2 text-center text-3xl font-semibold text-white md:text-4xl"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Kontakt
            </h2>
            <p className="mb-8 text-center text-stone-400">
              Unverbindliche Anfrage — wir melden uns mit Terminvorschlägen und einer transparenten Einschätzung.
            </p>
            <form
              className="space-y-4 rounded-2xl border border-[#c9a227]/20 bg-[#0c0c10] p-6 shadow-[0_0_60px_rgba(201,162,39,0.08)]"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") ?? "").trim();
                const email = String(fd.get("email") ?? "").trim();
                const msg = String(fd.get("message") ?? "").trim();
                const body = encodeURIComponent(
                  `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${msg}`,
                );
                window.location.href = `mailto:kontakt@tonis-autopflege.de?subject=${encodeURIComponent("Anfrage Autopflege")}&body=${body}`;
              }}
            >
              <div>
                <label htmlFor="tonis-name" className="mb-1 block text-sm text-stone-400">
                  Name
                </label>
                <input
                  id="tonis-name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#050508] px-4 py-2.5 text-white outline-none ring-[#c9a227]/40 focus:ring-2"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="tonis-email" className="mb-1 block text-sm text-stone-400">
                  E-Mail
                </label>
                <input
                  id="tonis-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#050508] px-4 py-2.5 text-white outline-none ring-[#c9a227]/40 focus:ring-2"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="tonis-msg" className="mb-1 block text-sm text-stone-400">
                  Nachricht / Fahrzeug
                </label>
                <textarea
                  id="tonis-msg"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-y rounded-lg border border-white/10 bg-[#050508] px-4 py-2.5 text-white outline-none ring-[#c9a227]/40 focus:ring-2"
                  placeholder="z. B. Modell, Zustand, gewünschte Leistungen …"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#c9a227] py-3 text-sm font-semibold text-black transition hover:bg-[#d4b03a]"
              >
                Anfrage senden
              </button>
              <p className="text-center text-xs text-stone-500">
                Öffnet Ihr E-Mail-Programm — Adresse bei Bedarf im Code anpassen.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#c9a227]/10 py-10 text-center text-sm text-stone-500">
        <p>
          Demo-Entwicklung:{" "}
          <Link href="/" className="text-[#c9a227]/80 underline-offset-2 hover:text-[#e6cf6b] hover:underline">
            AGR Multimedia
          </Link>
        </p>
      </footer>
    </div>
  );
}
