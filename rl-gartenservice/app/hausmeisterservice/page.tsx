import { ServiceView } from "@/components/ServiceView";
import { serviceMetadata } from "@/lib/page-meta";

export const metadata = serviceMetadata("hausmeisterservice");

export default async function HausmeisterPage({
  searchParams,
}: {
  searchParams: Promise<{ arbeit?: string }>;
}) {
  const { arbeit } = await searchParams;
  return (
    <main id="inhalt">
      <ServiceView id="hausmeisterservice" photo={arbeit} />
    </main>
  );
}
