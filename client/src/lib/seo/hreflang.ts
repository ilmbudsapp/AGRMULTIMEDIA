import { hreflangAlternates } from "@/lib/seo/multilingualUrls";

/** Injects / refreshes hreflang link tags for the current pathname (SPA-safe). */
export function syncHreflangAlternates(pathname: string): void {
  document.querySelectorAll('link[data-seo-hreflang="1"]').forEach((el) => el.remove());
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => {
    const href = el.getAttribute("href") ?? "";
    if (href.includes("agrmultimedia.eu")) el.remove();
  });
  for (const { hreflang, href } of hreflangAlternates(pathname)) {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = hreflang;
    link.href = href;
    link.setAttribute("data-seo-hreflang", "1");
    document.head.appendChild(link);
  }
}
