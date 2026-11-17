import type { Metadata } from "next";
import { Area } from "@/components/Area";
import { Hero } from "@/components/Hero";
import { HomeCompare } from "@/components/HomeCompare";
import { Leistungen } from "@/components/Leistungen";
import { Spotlight } from "@/components/Spotlight";
import { JsonLd } from "@/components/JsonLd";
import { ogImage, businessNode, graph, webPageNode, websiteNode } from "@/lib/jsonld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: site.title, description: site.description, images: [ogImage] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [ogImage.url] },
};

const jsonLd = graph([
  businessNode(),
  websiteNode(),
  webPageNode("/", site.title, site.description),
]);

export default function HomePage() {
  return (
    <main id="inhalt">
      <JsonLd data={jsonLd} />
      <Hero />
      <Leistungen />
      <Spotlight />
      <HomeCompare />
      <Area />
    </main>
  );
}
