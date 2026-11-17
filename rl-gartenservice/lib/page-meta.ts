import type { Metadata } from "next";
import { serviceCopy } from "@/content/service-copy";
import { serviceAreas, site } from "@/content/site";
import { ogImage } from "@/lib/jsonld";

export function simpleMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export function serviceMetadata(id: string): Metadata {
  const area = serviceAreas.find((item) => item.id === id);
  const copy = serviceCopy[id];
  if (!area || !copy) return {};
  return simpleMetadata(copy.metaTitle, copy.metaDescription, `/${area.id}`);
}
