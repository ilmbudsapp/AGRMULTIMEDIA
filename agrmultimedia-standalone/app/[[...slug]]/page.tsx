import { STATIC_ROUTES } from "@/lib/staticRoutes";
import PageClient from "./PageClient";

export function generateStaticParams() {
  return STATIC_ROUTES.map((route) => ({
    slug: route === "/" ? [] : route.slice(1).split("/"),
  }));
}

export default function CatchAllPage() {
  return <PageClient />;
}
