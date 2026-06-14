import { localBusinessNode } from "@/lib/localBusinessSchema";
import { BUSINESS } from "@/lib/siteRoutes";

/** LocalBusiness + ProfessionalService JSON-LD for homepage. */
export default function HomeLocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    ...localBusinessNode(`${BUSINESS.url}/`),
  };
  return (
    <script
      id="home-localbusiness-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
