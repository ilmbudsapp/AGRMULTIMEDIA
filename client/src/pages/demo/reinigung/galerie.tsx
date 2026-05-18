import { MagicWipe } from "@/components/demo/reinigung/MagicWipe";
import ReinigungImageGallery from "@/components/demo/reinigung/ReinigungImageGallery";
import VideoGrid from "@/components/demo/reinigung/VideoGrid";
import DemoReinigungLayout from "./DemoReinigungLayout";
import { PHOTOS, VIDEOS } from "./data";

const SEO =
  "Galerie: Vorher/Nachher-Fotos und Videos der professionellen Innenreinigung für Möbel, Teppiche und Kfz in Stuttgart.";

export default function DemoReinigungGalerie() {
  return (
    <DemoReinigungLayout seoDescription={SEO}>
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <MagicWipe className="mx-auto max-w-3xl text-center">
            <h1 className="reinigung-display text-4xl font-extrabold text-slate-900 md:text-5xl">Galerie</h1>
            <p className="mt-4 text-lg text-slate-600">
              Überzeugen Sie sich selbst: Klicken Sie auf ein Foto für die Vollansicht — Videos starten bei Hover.
            </p>
          </MagicWipe>

          <MagicWipe className="mt-12" delay={0.08}>
            <h2 className="reinigung-display mb-6 text-2xl font-bold text-slate-900">Fotos</h2>
            <ReinigungImageGallery items={PHOTOS} />
          </MagicWipe>

          <MagicWipe className="mt-16" delay={0.1}>
            <h2 className="reinigung-display mb-6 text-2xl font-bold text-slate-900">Videos</h2>
            <VideoGrid videos={VIDEOS} />
          </MagicWipe>
        </div>
      </section>
    </DemoReinigungLayout>
  );
}
