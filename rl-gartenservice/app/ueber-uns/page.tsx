import { About } from "@/components/About";
import { JsonLd } from "@/components/JsonLd";
import { simpleMetadata } from "@/lib/page-meta";
import { breadcrumbNode, businessNode, graph, webPageNode, websiteNode } from "@/lib/jsonld";

const title = "Über RL Gartenservice in Gersthofen | RL Gartenservice";
const description =
  "RL Gartenservice wird von Rakip Lleshi in Gersthofen geführt. Gartenpflege, Gartenbau, Hausmeisterservice und Bodenbeläge für Augsburg und Umgebung.";

export const metadata = simpleMetadata(title, description, "/ueber-uns");

export default function AboutPage() {
  return (
    <main id="inhalt">
      <JsonLd
        data={graph([
          businessNode(),
          websiteNode(),
          webPageNode("/ueber-uns", title, description),
          breadcrumbNode("/ueber-uns", [
            { name: "Startseite", path: "/" },
            { name: "Über uns", path: "/ueber-uns" },
          ]),
        ])}
      />
      <About />
    </main>
  );
}
