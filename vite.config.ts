import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  /** Da se učitava `client/.env` (config fajl je u korenu repoa) */
  envDir: path.resolve(import.meta.dirname, "client"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/node_modules\/(react\/|react-dom\/|scheduler\/)/.test(id)) {
            return "react-vendor";
          }
          if (id.includes("@tanstack/react-query")) return "query";
          if (id.includes("wouter")) return "wouter";
          if (id.includes("gsap")) return "gsap";
          if (id.includes("lucide-react")) return "lucide";
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
