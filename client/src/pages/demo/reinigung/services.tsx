import { Link } from "wouter";
import { Check } from "lucide-react";
import { MagicWipe } from "@/components/demo/reinigung/MagicWipe";
import WhatsAppButton from "@/components/demo/reinigung/WhatsAppButton";
import { GlassCard } from "@/components/demo/reinigung/GlassCard";
import { BODY_TEXT, GRADIENT_H1, GRADIENT_H2, LINK_ACCENT, SECTION } from "@/components/demo/reinigung/styles";
import DemoReinigungLayout from "./DemoReinigungLayout";
import { DEMO_BASE, SERVICES, SPRING_OFFER } from "./data";

const SEO =
  "Möbel-, Polster-, Kfz- und Allergen-Reinigung in Stuttgart: Tiefenreinigung, Geruchsbeseitigung und professionelle Pflege — Demo Innenreinigung Kfzundmöbel.";

export default function DemoReinigungServices() {
  return (
    <DemoReinigungLayout seoDescription={SEO}>
      <section className={SECTION}>
        <div className="mx-auto max-w-6xl">
          <MagicWipe className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{SPRING_OFFER.badge}</p>
            <h1 className={`${GRADIENT_H1} mt-4 text-4xl md:text-5xl`}>Unsere Leistungen</h1>
            <p className={`mt-6 text-lg ${BODY_TEXT}`}>
              Professionelle Tiefenreinigung für Möbel, Fahrzeuge und allergenbelastete Bereiche — mit Ergebnissen,
              die Sie sehen und fühlen.
            </p>
          </MagicWipe>

          <div className="mt-16 space-y-8">
            {SERVICES.map((service, i) => (
              <MagicWipe key={service.id} delay={i * 0.08}>
                <GlassCard className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-4xl shadow-inner ring-1 ring-white/80"
                    aria-hidden
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h2 className={`${GRADIENT_H2} text-2xl md:text-3xl`}>{service.title}</h2>
                    <p className={`mt-3 ${BODY_TEXT}`}>{service.teaser}</p>
                    <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm text-slate-700 md:text-base">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </MagicWipe>
            ))}
          </div>

          <MagicWipe className="mt-16">
            <GlassCard className="flex flex-col items-center gap-6 text-center">
              <h2 className={`${GRADIENT_H2} text-2xl md:text-3xl`}>Bereit für Ihre Frühlingsaktion?</h2>
              <p className={`max-w-md ${BODY_TEXT}`}>{SPRING_OFFER.text}</p>
              <WhatsAppButton size="lg" />
              <Link href={`${DEMO_BASE}/galerie`} className={LINK_ACCENT}>
                Zur Galerie mit Vorher/Nachher-Bildern →
              </Link>
            </GlassCard>
          </MagicWipe>
        </div>
      </section>
    </DemoReinigungLayout>
  );
}
