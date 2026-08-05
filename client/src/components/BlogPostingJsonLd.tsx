import { BUSINESS } from "@/lib/siteRoutes";
import { LINKEDIN_URL } from "@/lib/socialLinks";

const PERSON_ID = `${BUSINESS.url}/#person`;
const ORG_ID = `${BUSINESS.url}/#organization`;

export type BlogPostingSchemaProps = {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
};

/** ISO date from DE display date like "03.06.2026" */
export function deDateToIso(deDate: string): string {
  const m = deDate.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!m) return "2026-06-03";
  return `${m[3]}-${m[2]}-${m[1]}`;
}

export default function BlogPostingJsonLd({
  slug,
  headline,
  description,
  datePublished,
  dateModified,
  image,
}: BlogPostingSchemaProps) {
  const pageUrl = `${BUSINESS.url}/blog/${slug}`;
  const isoPublished = datePublished.includes(".") ? deDateToIso(datePublished) : datePublished;
  const isoModified = dateModified
    ? dateModified.includes(".")
      ? deDateToIso(dateModified)
      : dateModified
    : isoPublished;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline,
        description,
        datePublished: isoPublished,
        dateModified: isoModified,
        inLanguage: "de",
        url: pageUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        author: { "@type": "Person", "@id": PERSON_ID, name: BUSINESS.owner, url: LINKEDIN_URL },
        publisher: { "@type": "Organization", "@id": ORG_ID, name: BUSINESS.name },
        ...(image ? { image: { "@type": "ImageObject", url: image } } : {}),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
