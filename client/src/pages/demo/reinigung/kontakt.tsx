import { Phone } from "lucide-react";
import { MagicWipe } from "@/components/demo/reinigung/MagicWipe";
import WhatsAppButton from "@/components/demo/reinigung/WhatsAppButton";
import { GlassCard } from "@/components/demo/reinigung/GlassCard";
import { BODY_TEXT, GRADIENT_H1, SECTION } from "@/components/demo/reinigung/styles";
import DemoReinigungLayout from "./DemoReinigungLayout";
import { LOCATION_LINE, PHONE_DISPLAY, PHONE_TEL, WA_HREF } from "./data";

const SEO =
  "Kontakt Innenreinigung Kfzundmöbel Stuttgart: Termin per WhatsApp oder Telefon 0152 59534456 — Frühlingsaktion Tiefenreinigung.";

export default function DemoReinigungKontakt() {
  return (
    <DemoReinigungLayout seoDescription={SEO}>
      <section className={SECTION}>
        <div className="mx-auto max-w-3xl">
          <MagicWipe className="text-center">
            <h1 className={`${GRADIENT_H1} text-4xl md:text-5xl`}>Kontakt</h1>
            <p className={`mt-6 text-lg ${BODY_TEXT}`}>
              Sichern Sie sich jetzt Ihren Termin für die Frühlingsaktion — schnell und unkompliziert per WhatsApp.
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">{LOCATION_LINE}</p>
          </MagicWipe>

          <MagicWipe className="mt-12" delay={0.08}>
            <GlassCard className="flex flex-col items-center gap-8 text-center">
              <WhatsAppButton size="lg" className="w-full max-w-md sm:w-auto" />

              <div className="w-full border-t border-white/60 pt-8">
                <p className="text-sm font-medium text-slate-500">Oder telefonisch:</p>
                <a
                  href={PHONE_TEL}
                  className="reinigung-display mt-3 inline-flex items-center gap-2 text-2xl font-bold text-slate-900 transition hover:text-cyan-700"
                >
                  <Phone className="h-6 w-6 text-cyan-600" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </div>

              <p className="text-sm text-slate-500">
                WhatsApp-Link:{" "}
                <a href={WA_HREF} className="font-semibold text-cyan-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  wa.me/4915259534456
                </a>
              </p>
            </GlassCard>
          </MagicWipe>

          <MagicWipe className="mt-8" delay={0.14}>
            <GlassCard hover={false} className="text-center text-sm">
              <p className={BODY_TEXT}>
                <strong className="text-slate-800">Innenreinigung Kfzundmöbel</strong> — Ihr Partner für Möbel-,
                Polster- und Kfz-Tiefenreinigung in Stuttgart und Umgebung.
              </p>
            </GlassCard>
          </MagicWipe>
        </div>
      </section>
    </DemoReinigungLayout>
  );
}
