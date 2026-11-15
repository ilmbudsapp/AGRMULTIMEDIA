import { Gallery } from "@/components/Gallery";
import { simpleMetadata } from "@/lib/page-meta";

export const metadata = simpleMetadata(
  "Galerie / Referenzen",
  "Referenzen von RL Gartenservice: Gartenpflege, Gartenbau und Bodenbelagsarbeiten in Augsburg und Umgebung.",
  "/galerie",
);

export default function GalleryPage() {
  return (
    <main id="inhalt">
      <Gallery />
    </main>
  );
}
