import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { simpleMetadata } from "@/lib/page-meta";
import { breadcrumbNode, businessNode, graph, webPageNode, websiteNode } from "@/lib/jsonld";

const title = "Referenzen in Augsburg und Umgebung | RL Gartenservice";
const description =
  "Referenzen von RL Gartenservice: Gartenpflege, Gartenbau, Terrassen, Zäune, Pflaster und Bodenbeläge in Augsburg und Umgebung.";

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
