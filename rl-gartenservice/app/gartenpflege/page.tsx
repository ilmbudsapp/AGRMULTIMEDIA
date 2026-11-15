import { ServiceView } from "@/components/ServiceView";
import { serviceMetadata } from "@/lib/page-meta";

export const metadata = serviceMetadata("gartenpflege");

export default function GartenpflegePage() {
  return (
    <main id="inhalt">
      <ServiceView id="gartenpflege" />
    </main>
  );
}
