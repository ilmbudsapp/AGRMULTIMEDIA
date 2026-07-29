import type { Metadata } from "next";
import "@/index.css";
import "@/styles/fonts.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agrmultimedia.eu"),
  title: {
    default: "AGR Multimedia | Webdesign Geislingen",
    template: "%s | AGR Multimedia",
  },
  description:
    "Webdesign, SEO, GEO & AEO in Geislingen an der Steige — professionelle Websites für lokale Unternehmen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
