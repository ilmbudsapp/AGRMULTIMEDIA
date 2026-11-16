import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

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
  images: { unoptimized: true },
  outputFileTracingRoot: appRoot,
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
