import { ServiceView } from "@/components/ServiceView";
import { serviceMetadata } from "@/lib/page-meta";

export const metadata = serviceMetadata("gartenbau");

export default async function GartenbauPage({
  searchParams,
}: {
  searchParams: Promise<{ arbeit?: string }>;
}) {
  const { arbeit } = await searchParams;
  return (
    <main id="inhalt">
      <ServiceView id="gartenbau" photo={arbeit} />
    </main>
  );
}
