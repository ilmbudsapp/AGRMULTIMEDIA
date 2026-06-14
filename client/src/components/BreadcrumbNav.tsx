import { Link, useLocation } from "wouter";
import { getBreadcrumbItems } from "@/lib/breadcrumbs";
import { ROUTES } from "@/lib/siteRoutes";

export default function BreadcrumbNav() {
  const [pathname] = useLocation();
  const items = getBreadcrumbItems(pathname);

  if (pathname === ROUTES.home || pathname === "" || items.length < 2) {
    return null;
  }

  return (
    <nav
      aria-label="Brotkrumen-Navigation"
      className="mx-auto max-w-6xl px-4 pb-4 pt-2 sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 md:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-white/30" aria-hidden>
                  /
                </span>
              )}
              {isLast ? (
                <span className="font-medium text-blue-200/90" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="underline-offset-2 transition hover:text-white/80 hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
