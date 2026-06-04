const TAIROVIC_HOSTS = new Set([
  "www.tairovic-gebaeudeservice.de",
  "tairovic-gebaeudeservice.de",
]);

const TAIROVIC_INDEX = "/demo/tairovic-dark-verzija/index.html";

const TAIROVIC_LEGAL_PATHS: Record<string, string> = {
  "/impressum": "/demo/tairovic-dark-verzija/impressum.html",
  "/impressum.html": "/demo/tairovic-dark-verzija/impressum.html",
  "/datenschutz": "/demo/tairovic-dark-verzija/datenschutz.html",
  "/datenschutz.html": "/demo/tairovic-dark-verzija/datenschutz.html",
};

const TAIROVIC_SECTION_PATHS = new Set([
  "/gebaeudereinigung",
  "/hausmeisterservice",
  "/gartenpflege",
  "/arbeiten",
  "/kontakt",
]);

const DEMO_PREFIX = "/demo/tairovic-dark-verzija";

function isTairovicHost(hostHeader: string | null): boolean {
  const host = (hostHeader ?? "").split(":")[0].toLowerCase();
  return TAIROVIC_HOSTS.has(host);
}

function shouldPassThrough(pathname: string): boolean {
  return (
    pathname.startsWith(DEMO_PREFIX) ||
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/api/")
  );
}

function demoToCleanPath(pathname: string): string | null {
  if (!pathname.startsWith(DEMO_PREFIX)) return null;
  const rest = pathname.slice(DEMO_PREFIX.length).replace(/^\/+/, "");
  if (!rest || rest === "index.html") return "/";
  return null;
}

/** Serve Tairovic static site on client domain (same Vercel project as AGR). */
export default function middleware(request: Request): Response | undefined {
  if (!isTairovicHost(request.headers.get("host"))) {
    return undefined;
  }

  const url = new URL(request.url);

  const cleanRedirect = demoToCleanPath(url.pathname);
  if (cleanRedirect) {
    const target = new URL(request.url);
    target.pathname = cleanRedirect;
    return Response.redirect(target.toString(), 301);
  }

  if (shouldPassThrough(url.pathname)) {
    return undefined;
  }

  const legalPath = TAIROVIC_LEGAL_PATHS[url.pathname];
  const rewriteUrl = new URL(request.url);
  if (legalPath) {
    rewriteUrl.pathname = legalPath;
  } else if (url.pathname === "/" || TAIROVIC_SECTION_PATHS.has(url.pathname)) {
    rewriteUrl.pathname = TAIROVIC_INDEX;
  } else {
    rewriteUrl.pathname = TAIROVIC_INDEX;
  }

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
