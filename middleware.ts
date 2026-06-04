const TAIROVIC_HOSTS = new Set([
  "www.tairovic-gebaeudeservice.de",
  "tairovic-gebaeudeservice.de",
]);

function isTairovicHost(hostHeader: string | null): boolean {
  const host = (hostHeader ?? "").split(":")[0].toLowerCase();
  return TAIROVIC_HOSTS.has(host);
}

function shouldPassThrough(pathname: string): boolean {
  return (
    pathname.startsWith("/demo/tairovic-dark-verzija") ||
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/api/")
  );
}

/** Serve Tairovic static site on client domain (same Vercel project as AGR). */
export default function middleware(request: Request): Response | undefined {
  if (!isTairovicHost(request.headers.get("host"))) {
    return undefined;
  }

  const url = new URL(request.url);
  if (shouldPassThrough(url.pathname)) {
    return undefined;
  }

  const rewriteUrl = new URL(request.url);
  rewriteUrl.pathname = "/demo/tairovic-dark-verzija/index.html";
  return new Response(null, {
    headers: {
      "x-middleware-rewrite": rewriteUrl.toString(),
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?|mp4|webm|txt|xml|json)$).*)",
  ],
};
