import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagicWipe } from "@/components/demo/reinigung/MagicWipe";
import WhatsAppButton from "@/components/demo/reinigung/WhatsAppButton";
import { GlassCard } from "@/components/demo/reinigung/GlassCard";
import { BADGE, BODY_TEXT, GRADIENT_H1, GRADIENT_H2, LINK_ACCENT, SECTION } from "@/components/demo/reinigung/styles";
import DemoReinigungLayout from "./DemoReinigungLayout";
import {
  DEMO_BASE,
  HERO_SUBTITLE,
  HERO_TITLE,
  LOCATION_LINE,
  HERO_PHOTO,
  SERVICES,
  SPRING_OFFER,
} from "./data";

const SEO =
  "Frühlingsaktion: Professionelle Tiefenreinigung für Möbel, Polster und Kfz in Stuttgart. Flecken, Gerüche und Allergene entfernen — Demo von AGR Multimedia.";

export default function DemoReinigungHome() {
  const reduceMotion = useReducedMotion();
  const heroImage = HERO_PHOTO.src;

  return (
    <DemoReinigungLayout seoDescription={SEO}>
      <section className={`${SECTION} overflow-hidden`}>
        <motion.div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MagicWipe className="space-y-8">
            <motion.span
              className={BADGE}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-500" aria-hidden />
              {SPRING_OFFER.badge}
            </motion.span>

            <h1 className={`${GRADIENT_H1} text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-[3.35rem]`}>
              {HERO_TITLE}
            </h1>

            <p className={`max-w-xl text-lg md:text-xl ${BODY_TEXT}`}>{HERO_SUBTITLE}</p>

            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">{LOCATION_LINE}</p>

            <motion.div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg" />
              <Link
                href={`${DEMO_BASE}/services`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/60 px-6 py-3.5 text-sm font-bold text-blue-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md"
              >
                Leistungen entdecken
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </MagicWipe>

          <MagicWipe delay={0.12} className="relative">
            <GlassCard className="relative overflow-hidden p-4">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" aria-hidden />
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt={HERO_PHOTO.alt}
                  className="w-full object-contain transition-transform duration-500 hover:scale-105"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </GlassCard>
          </MagicWipe>
        </motion.div>
      </section>

      <section className={SECTION}>
        <div className="mx-auto max-w-6xl">
          <MagicWipe>
            <GlassCard className="relative overflow-hidden text-center">
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-transparent to-blue-100/20"
                aria-hidden
              />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{SPRING_OFFER.badge}</p>
                <h2 className={`${GRADIENT_H2} mt-4 text-2xl md:text-3xl`}>{SPRING_OFFER.headline}</h2>
                <p className={`mx-auto mt-4 max-w-lg ${BODY_TEXT}`}>{SPRING_OFFER.text}</p>
                <div className="mt-8 flex justify-center">
                  <WhatsAppButton />
                </div>
              </div>
            </GlassCard>
          </MagicWipe>
        </div>
      </section>

      <section className={`${SECTION} pb-24`}>
        <div className="mx-auto max-w-6xl">
          <MagicWipe className="mb-14 text-center">
            <h2 className={`${GRADIENT_H2} text-3xl md:text-4xl`}>Unsere Schwerpunkte</h2>
            <p className={`mt-4 text-lg ${BODY_TEXT}`}>Möbel, Kfz und Allergene — alles aus einer Hand.</p>
          </MagicWipe>

          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <MagicWipe key={service.id} delay={i * 0.1}>
                <GlassCard className="flex h-full flex-col">
                  <span className="text-4xl" aria-hidden>
                    {service.icon}
                  </span>
                  <h3 className={`${GRADIENT_H2} mt-5 text-xl`}>{service.title}</h3>
                  <p className={`mt-3 flex-1 text-sm ${BODY_TEXT}`}>{service.teaser}</p>
                  <Link href={`${DEMO_BASE}/services`} className={`mt-5 inline-flex items-center gap-1 text-sm ${LINK_ACCENT}`}>
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
