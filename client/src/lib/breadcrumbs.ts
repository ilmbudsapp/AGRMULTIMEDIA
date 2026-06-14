import { BUSINESS, ROUTES } from "@/lib/siteRoutes";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

const PAGE_LABELS: Record<string, string> = {
  [ROUTES.webdesignGeislingen]: "Webdesign Geislingen",
  [ROUTES.webdesignSeo]: "Webdesign & SEO",
  [ROUTES.portfolio]: "Portfolio",
  [ROUTES.bewertungen]: "Bewertungen",
  [ROUTES.about]: "Über mich",
  [ROUTES.kontakt]: "Kontakt",
  [ROUTES.blog]: "Blog",
  "/videoproduktion": "Videoproduktion",
  "/graphic-design": "Grafikdesign",
  "/digital-marketing": "Digital Marketing",
  "/ai-content-creation": "KI Content",
  "/application-design-development": "App Design",
  "/photography": "Fotografie",
  "/consulting": "Beratung",
  "/services": "Leistungen",
  "/privacy-policy": "Datenschutz",
  "/terms": "AGB",
  "/cookies": "Cookies",
  "/impresum": "Impressum",
};

export function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: "Start", path: ROUTES.home }];
  if (pathname === ROUTES.home || pathname === "") return items;

  const label = PAGE_LABELS[pathname];
  if (label) {
    items.push({ name: label, path: pathname });
  }
  return items;
}

export function breadcrumbListSchema(pathname: string) {
  const items = getBreadcrumbItems(pathname);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${BUSINESS.url}/` : `${BUSINESS.url}${item.path}`,
    })),
  };
}
