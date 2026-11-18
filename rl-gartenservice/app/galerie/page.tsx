import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { simpleMetadata } from "@/lib/page-meta";
import { breadcrumbNode, businessNode, graph, webPageNode, websiteNode } from "@/lib/jsonld";

const title = "Bilder und Videos | RL Gartenservice";
const description =
  "Fotos und Videos von Gartenpflege, Gartenbau, Terrassen, Zäunen, Pflaster und Bodenbelägen.";

export const metadata = simpleMetadata(title, description, "/galerie");

export default function GalleryPage() {
  return (
    <main id="inhalt">
      <JsonLd
        data={graph([
          businessNode(),
          websiteNode(),
          webPageNode("/galerie", title, description),
          breadcrumbNode("/galerie", [
            { name: "Startseite", path: "/" },
            { name: "Galerie", path: "/galerie" },
          ]),
        ])}
      />
      <Gallery />
    </main>
  );
}
