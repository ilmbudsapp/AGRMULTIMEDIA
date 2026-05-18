import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import DemoNavbar from "@/components/demo/reinigung/DemoNavbar";
import DemoWhatsAppFloat from "@/components/demo/reinigung/DemoWhatsAppFloat";
import { COMPANY_NAME, DEMO_BASE, LOCATION_LINE } from "./data";
import { useDemoSeo } from "./useDemoSeo";

type Props = {
  children: ReactNode;
  seoDescription: string;
};

export default function DemoReinigungLayout({ children, seoDescription }: Props) {
  useDemoSeo(seoDescription);

  useEffect(() => {
    const id = "reinigung-demo-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@500;600;700;800&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <motion.div
      className="reinigung-demo relative min-h-[100dvh] overflow-x-hidden text-stone-800 antialiased selection:bg-amber-200/50 selection:text-stone-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <style>{`
        .reinigung-demo {
          font-family: "DM Sans", system-ui, sans-serif;
          background: linear-gradient(165deg, #faf7f2 0%, #f0e9dd 48%, #e6dac8 100%);
          background-attachment: fixed;
        }
        .reinigung-display {
          font-family: "Outfit", system-ui, sans-serif;
        }
        @keyframes reinigung-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(12px, -16px) scale(1.04); }
        }
      `}</style>

      <motion.div
        className="pointer-events-none fixed -left-32 top-24 h-80 w-80 rounded-full bg-amber-200/35 blur-[100px]"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -right-24 bottom-20 h-72 w-72 rounded-full bg-stone-300/30 blur-[90px]"
        style={{ animation: "reinigung-float 16s ease-in-out infinite" }}
        aria-hidden
      />

      <DemoNavbar />
      <DemoWhatsAppFloat />

      <main className="relative z-10 pt-[4.75rem]">{children}</main>

      <footer className="relative z-10 border-t border-[#e5d9c8]/80 bg-[#f7f2ea]/75 px-4 py-10 backdrop-blur-lg">
        <motion.div
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-stone-600 md:flex-row md:text-left"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="font-semibold text-stone-800">{COMPANY_NAME}</p>
            <p className="mt-1">{LOCATION_LINE}</p>
          </div>
          <p className="text-xs text-stone-500">
            Demo-Website von{" "}
            <a
              href="https://www.agrmultimedia.eu"
              className="font-semibold text-amber-900/85 underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AGR Multimedia
            </a>
          </p>
          <Link href={DEMO_BASE} className="text-xs font-medium text-amber-900/85 hover:underline">
            Zur Demo-Startseite
          </Link>
        </motion.div>
      </footer>
    </motion.div>
  );
}
