import { ServiceView } from "@/components/ServiceView";
import { serviceMetadata } from "@/lib/page-meta";

export const metadata = serviceMetadata("bodenbelag");

export default async function BodenPage({
  searchParams,
}: {
  searchParams: Promise<{ arbeit?: string }>;
}) {
  const { arbeit } = await searchParams;
  return (
    <main id="inhalt">
      <ServiceView id="bodenbelag" photo={arbeit} />
    </main>
  );
}
