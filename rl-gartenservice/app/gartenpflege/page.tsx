import { ServiceView } from "@/components/ServiceView";
import { serviceMetadata } from "@/lib/page-meta";

export const metadata = serviceMetadata("gartenpflege");

export default async function GartenpflegePage({
  searchParams,
}: {
  searchParams: Promise<{ arbeit?: string }>;
}) {
  const { arbeit } = await searchParams;
  return (
    <main id="inhalt">
      <ServiceView id="gartenpflege" photo={arbeit} />
    </main>
  );
}
