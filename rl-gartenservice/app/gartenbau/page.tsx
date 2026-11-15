import { ServiceView } from "@/components/ServiceView";
import { serviceMetadata } from "@/lib/page-meta";

export const metadata = serviceMetadata("gartenbau");

export default function GartenbauPage() {
  return (
    <main id="inhalt">
      <ServiceView id="gartenbau" />
    </main>
  );
}
