import { MagicWipe } from "@/components/demo/reinigung/MagicWipe";
import ReinigungImageGallery from "@/components/demo/reinigung/ReinigungImageGallery";
import VideoGrid from "@/components/demo/reinigung/VideoGrid";
import { BODY_TEXT, GRADIENT_H1, GRADIENT_H2, SECTION } from "@/components/demo/reinigung/styles";
import DemoReinigungLayout from "./DemoReinigungLayout";
import { PHOTOS, VIDEOS } from "./data";

const SEO =
  "Galerie: Vorher/Nachher-Fotos und Videos der professionellen Innenreinigung für Möbel, Teppiche und Kfz in Stuttgart.";

export default function DemoReinigungGalerie() {
  return (
    <DemoReinigungLayout seoDescription={SEO}>
      <section className={SECTION}>
        <div className="mx-auto max-w-6xl">
          <MagicWipe className="mx-auto max-w-3xl text-center">
            <h1 className={`${GRADIENT_H1} text-4xl md:text-5xl`}>Galerie</h1>
            <p className={`mt-6 text-lg ${BODY_TEXT}`}>
              Überzeugen Sie sich selbst: Klicken Sie auf ein Foto für die Vollansicht — Videos starten bei Hover.
            </p>
          </MagicWipe>

          <MagicWipe className="mt-16" delay={0.08}>
            <h2 className={`${GRADIENT_H2} mb-8 text-2xl md:text-3xl`}>Fotos</h2>
            <ReinigungImageGallery items={PHOTOS} />
          </MagicWipe>

          <MagicWipe className="mt-20" delay={0.1}>
            <h2 className={`${GRADIENT_H2} mb-8 text-2xl md:text-3xl`}>Videos</h2>
            <VideoGrid videos={VIDEOS} />
          </MagicWipe>
        </div>
      </section>
    </DemoReinigungLayout>
  );
}
