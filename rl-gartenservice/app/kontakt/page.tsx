import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { simpleMetadata } from "@/lib/page-meta";
import { site } from "@/content/site";
import { breadcrumbNode, businessNode, graph, webPageNode, websiteNode } from "@/lib/jsonld";

const title = "Kontakt RL Gartenservice in Gersthofen | RL Gartenservice";
const description = `Kostenlos und unverbindlich anfragen bei ${site.name} in ${site.address.city}. Telefon ${site.phoneDisplay}.`;

export const metadata = simpleMetadata(title, description, "/kontakt");

export default function ContactPage() {
  return (
    <main id="inhalt">
      <JsonLd
        data={graph([
          businessNode(),
          websiteNode(),
          webPageNode("/kontakt", title, description),
          breadcrumbNode("/kontakt", [
            { name: "Startseite", path: "/" },
            { name: "Kontakt", path: "/kontakt" },
          ]),
        ])}
      />
      <Contact />
    </main>
  );
}
