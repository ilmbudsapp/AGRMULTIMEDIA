import type { Metadata } from "next";
import { serviceAreas } from "@/content/site";

export function serviceMetadata(id: string): Metadata {
  const area = serviceAreas.find((item) => item.id === id);
  if (!area) return {};
  const path = `/${area.id}`;
  return {
    title: area.title,
    description: area.intro,
    alternates: { canonical: path },
    openGraph: { title: area.title, description: area.intro, url: path },
  };
}

export function simpleMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
