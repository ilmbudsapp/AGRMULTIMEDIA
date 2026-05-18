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

const BUBBLES = [
  { className: "left-[-8%] top-[12%] h-72 w-72 bg-cyan-300", delay: 0 },
  { className: "right-[-6%] top-[28%] h-96 w-96 bg-blue-200", delay: 1.2 },
  { className: "left-[20%] bottom-[8%] h-64 w-64 bg-teal-200", delay: 2.4 },
  { className: "right-[18%] bottom-[22%] h-80 w-80 bg-sky-300", delay: 0.8 },
] as const;

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
      className="reinigung-demo relative min-h-[100dvh] overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white text-slate-800 antialiased selection:bg-cyan-200/50 selection:text-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <style>{`
        .reinigung-demo {
          font-family: "DM Sans", system-ui, sans-serif;
        }
        .reinigung-display {
          font-family: "Outfit", system-ui, sans-serif;
        }
        @keyframes reinigung-bubble-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(18px, -22px) scale(1.06); }
          66% { transform: translate(-14px, 12px) scale(0.97); }
        }
        @keyframes reinigung-cta-pulse {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.12); opacity: 0.15; }
        }
        .reinigung-cta-pulse {
          animation: reinigung-cta-pulse 2.4s ease-in-out infinite;
        }
        .reinigung-cta-pulse-delay {
          animation-delay: 1.2s;
        }
        @media (prefers-reduced-motion: reduce) {
          .reinigung-cta-pulse,
          .reinigung-cta-pulse-delay {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(186,230,253,0.35),transparent)]"
        aria-hidden
      />

      {BUBBLES.map((b, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute rounded-full blur-3xl opacity-20 ${b.className}`}
          animate={{ opacity: [0.14, 0.24, 0.14], scale: [1, 1.08, 1] }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
          style={{ animation: "reinigung-bubble-float 18s ease-in-out infinite" }}
          aria-hidden
        />
      ))}

      <DemoNavbar />
      <DemoWhatsAppFloat />

      <main className="relative z-10 pt-[5rem] md:pt-[5.25rem]">{children}</main>

      <footer className="relative z-10 border-t border-white/50 bg-white/40 px-4 py-12 backdrop-blur-xl">
        <motion.div
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-600 md:flex-row md:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div>
            <p className="font-semibold text-slate-800">{COMPANY_NAME}</p>
            <p className="mt-1">{LOCATION_LINE}</p>
          </motion.div>
          <p className="text-xs text-slate-500">
            Demo-Website von{" "}
            <a
              href="https://www.agrmultimedia.eu"
              className="font-semibold text-cyan-700 underline-offset-2 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              AGR Multimedia
            </a>
          </p>
          <Link href={DEMO_BASE} className="text-xs font-medium text-cyan-700 hover:text-blue-600">
            Zur Demo-Startseite
          </Link>
        </motion.div>
      </footer>
    </motion.div>
  );
}
