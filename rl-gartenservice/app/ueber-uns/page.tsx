import { About } from "@/components/About";
import { simpleMetadata } from "@/lib/page-meta";
import { aboutText } from "@/content/site";

export const metadata = simpleMetadata("Über uns", aboutText, "/ueber-uns");

export default function AboutPage() {
  return (
    <main id="inhalt">
      <About />
    </main>
  );
}
