import { Link } from "wouter";
import { Check } from "lucide-react";
import { MagicWipe } from "@/components/demo/reinigung/MagicWipe";
import WhatsAppButton from "@/components/demo/reinigung/WhatsAppButton";
import { GlassCard } from "@/components/demo/reinigung/GlassCard";
import DemoReinigungLayout from "./DemoReinigungLayout";
import { DEMO_BASE, SERVICES, SPRING_OFFER } from "./data";

const SEO =
  "Möbel-, Polster-, Kfz- und Allergen-Reinigung in Stuttgart: Tiefenreinigung, Geruchsbeseitigung und professionelle Pflege — Demo Innenreinigung Kfzundmöbel.";

export default function DemoReinigungServices() {
  return (
    <DemoReinigungLayout seoDescription={SEO}>
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <MagicWipe className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">{SPRING_OFFER.badge}</p>
            <h1 className="reinigung-display mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
              Unsere Leistungen
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Professionelle Tiefenreinigung für Möbel, Fahrzeuge und allergenbelastete Bereiche — mit Ergebnissen,
              die Sie sehen und fühlen.
            </p>
          </MagicWipe>

          <div className="mt-14 space-y-8">
            {SERVICES.map((service, i) => (
              <MagicWipe key={service.id} delay={i * 0.06}>
                <GlassCard className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 text-3xl shadow-inner"
                    aria-hidden
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="reinigung-display text-2xl font-bold text-slate-900 md:text-3xl">{service.title}</h2>
                    <p className="mt-2 text-slate-600">{service.teaser}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm text-slate-700 md:text-base">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </MagicWipe>
            ))}
          </div>

          <MagicWipe className="mt-14">
            <GlassCard className="flex flex-col items-center gap-5 text-center">
              <h2 className="reinigung-display text-2xl font-bold text-slate-900">Bereit für Ihre Frühlingsaktion?</h2>
              <p className="max-w-md text-slate-600">{SPRING_OFFER.text}</p>
              <WhatsAppButton size="lg" />
              <Link href={`${DEMO_BASE}/galerie`} className="text-sm font-semibold text-cyan-700 hover:underline">
                Zur Galerie mit Vorher/Nachher-Bildern →
              </Link>
            </GlassCard>
          </MagicWipe>
        </div>
      </section>
    </DemoReinigungLayout>
  );
}