import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagicWipe } from "@/components/demo/reinigung/MagicWipe";
import WhatsAppButton from "@/components/demo/reinigung/WhatsAppButton";
import { GlassCard } from "@/components/demo/reinigung/GlassCard";
import DemoReinigungLayout from "./DemoReinigungLayout";
import {
  DEMO_BASE,
  HERO_SUBTITLE,
  HERO_TITLE,
  LOCATION_LINE,
  PHOTOS,
  SERVICES,
  SPRING_OFFER,
} from "./data";

const SEO =
  "Frühlingsaktion: Professionelle Tiefenreinigung für Möbel, Polster und Kfz in Stuttgart. Flecken, Gerüche und Allergene entfernen — Demo von AGR Multimedia.";

export default function DemoReinigungHome() {
  const reduceMotion = useReducedMotion();
  const heroImage = PHOTOS[0]?.src ?? `${DEMO_BASE}/01-vorher-nachher.jpg`;

  return (
    <DemoReinigungLayout seoDescription={SEO}>
      <section className="relative overflow-hidden px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <MagicWipe className="space-y-6">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 backdrop-blur-md"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {SPRING_OFFER.badge}
            </motion.span>

            <h1 className="reinigung-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-[3.25rem]">
              {HERO_TITLE}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">{HERO_SUBTITLE}</p>

            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-600">{LOCATION_LINE}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg" />
              <Link
                href={`${DEMO_BASE}/services`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-6 py-3.5 text-sm font-bold text-cyan-800 backdrop-blur-md transition hover:bg-white"
              >
                Leistungen entdecken
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </MagicWipe>

          <MagicWipe delay={0.12} className="relative">
            <GlassCard className="relative overflow-hidden p-3">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-300/30 blur-2xl" aria-hidden />
              <img
                src={heroImage}
                alt={PHOTOS[0]?.alt ?? "Vorher und nachher — professionelle Tiefenreinigung"}
                className="w-full rounded-xl object-contain"
                fetchPriority="high"
                decoding="async"
              />
            </GlassCard>
          </MagicWipe>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8">
        <div className="mx-auto max-w-6xl">
          <MagicWipe>
            <GlassCard className="relative overflow-hidden border-cyan-200/60 bg-gradient-to-br from-white/70 via-cyan-50/40 to-teal-50/30 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">{SPRING_OFFER.badge}</p>
              <h2 className="reinigung-display mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                {SPRING_OFFER.headline}
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-slate-600">{SPRING_OFFER.text}</p>
              <motion.div className="mt-6 flex justify-center">
                <WhatsAppButton />
              </motion.div>
            </GlassCard>
          </MagicWipe>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <MagicWipe className="mb-10 text-center">
            <h2 className="reinigung-display text-3xl font-bold text-slate-900">Unsere Schwerpunkte</h2>
            <p className="mt-2 text-slate-600">Möbel, Kfz und Allergene — alles aus einer Hand.</p>
          </MagicWipe>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <MagicWipe key={service.id} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <span className="text-3xl" aria-hidden>
                    {service.icon}
                  </span>
                  <h3 className="reinigung-display mt-4 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.teaser}</p>
                  <Link
                    href={`${DEMO_BASE}/services`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cyan-700 hover:underline"
                  >
                    Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </GlassCard>
              </MagicWipe>
            ))}
          </div>
        </div>
      </section>
    </DemoReinigungLayout>
  );
}
