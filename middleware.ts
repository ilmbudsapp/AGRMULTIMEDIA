import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
export function middleware(request: NextRequest) {
  if (!isTairovicHost(request.headers.get("host"))) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (shouldPassThrough(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/demo/tairovic-dark-verzija/index.html";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?|mp4|webm|txt|xml|json)$).*)",
  ],
};
