import { Phone } from "lucide-react";
import { MagicWipe } from "@/components/demo/reinigung/MagicWipe";
import WhatsAppButton from "@/components/demo/reinigung/WhatsAppButton";
import { GlassCard } from "@/components/demo/reinigung/GlassCard";
import DemoReinigungLayout from "./DemoReinigungLayout";
import { LOCATION_LINE, PHONE_DISPLAY, PHONE_TEL, WA_HREF } from "./data";

const SEO =
  "Kontakt Innenreinigung Kfzundmöbel Stuttgart: Termin per WhatsApp oder Telefon 0152 59534456 — Frühlingsaktion Tiefenreinigung.";

export default function DemoReinigungKontakt() {
  return (
    <DemoReinigungLayout seoDescription={SEO}>
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <MagicWipe className="text-center">
            <h1 className="reinigung-display text-4xl font-extrabold text-stone-900 md:text-5xl">Kontakt</h1>
            <p className="mt-4 text-lg text-stone-600">
              Sichern Sie sich jetzt Ihren Termin für die Frühlingsaktion — schnell und unkompliziert per WhatsApp.
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-amber-800/90">{LOCATION_LINE}</p>
          </MagicWipe>

          <MagicWipe className="mt-10" delay={0.08}>
            <GlassCard className="flex flex-col items-center gap-6 text-center">
              <WhatsAppButton size="lg" className="w-full max-w-md sm:w-auto" />

              <div className="w-full border-t border-[#e5d9c8]/80 pt-6">
                <p className="text-sm font-medium text-stone-500">Oder telefonisch:</p>
                <a
                  href={PHONE_TEL}
                  className="reinigung-display mt-2 inline-flex items-center gap-2 text-2xl font-bold text-stone-900 transition hover:text-amber-900"
                >
                  <Phone className="h-6 w-6 text-amber-800/80" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </div>

              <p className="text-sm text-stone-500">
                WhatsApp-Link:{" "}
                <a href={WA_HREF} className="font-semibold text-amber-900/90 hover:underline" target="_blank" rel="noopener noreferrer">
                  wa.me/4915259534456
                </a>
              </p>
            </GlassCard>
          </MagicWipe>

          <MagicWipe className="mt-8" delay={0.14}>
            <GlassCard className="text-center text-sm text-stone-600">
              <p>
                <strong className="text-stone-800">Innenreinigung Kfzundmöbel</strong> — Ihr Partner für Möbel-,
                Polster- und Kfz-Tiefenreinigung in Stuttgart und Umgebung.
              </p>
            </GlassCard>
          </MagicWipe>
        </div>
      </section>
    </DemoReinigungLayout>
  );
}
