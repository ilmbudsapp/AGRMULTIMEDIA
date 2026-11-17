import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const appRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(appRoot, "..");
const tracingRoot = process.env.VERCEL === "1" ? repoRoot : appRoot;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  allowedDevOrigins: ["192.168.178.91"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "rl-gartenservice.de" }],
        destination: "https://www.rl-gartenservice.de/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    const contentSecurityPolicyReportOnly = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.google.com https://*.googleapis.com https://*.gstatic.com https://*.ggpht.com https://*.googleusercontent.com",
      "media-src 'self'",
      "font-src 'self'",
      "connect-src 'self' https://*.google.com https://*.googleapis.com https://*.gstatic.com",
      "frame-src https://www.google.com https://maps.google.com",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; ");
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=15552000; includeSubDomains" },
          { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicyReportOnly },
        ],
      },
    ];
  },
  images: { unoptimized: true },
  outputFileTracingRoot: tracingRoot,
  turbopack: {
    root: tracingRoot,
  },
};

export default nextConfig;
