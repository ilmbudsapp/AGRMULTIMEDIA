import { ServiceView } from "@/components/ServiceView";
import { serviceMetadata } from "@/lib/page-meta";

export const metadata = serviceMetadata("hausmeisterservice");

export default function HausmeisterPage() {
  return (
    <main id="inhalt">
      <ServiceView id="hausmeisterservice" />
    </main>
  );
}
