import { ServiceView } from "@/components/ServiceView";
import { serviceMetadata } from "@/lib/page-meta";

export const metadata = serviceMetadata("bodenbelag");

export default function BodenPage() {
  return (
    <main id="inhalt">
      <ServiceView id="bodenbelag" />
    </main>
  );
}
