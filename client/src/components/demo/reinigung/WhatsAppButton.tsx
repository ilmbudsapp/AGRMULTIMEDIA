import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_CTA, WA_HREF } from "@/pages/demo/reinigung/data";

type Props = {
  className?: string;
  size?: "md" | "lg";
};

export default function WhatsAppButton({ className = "", size = "md" }: Props) {
  const reduceMotion = useReducedMotion();
  const large = size === "lg";

  return (
    <span className={`relative inline-flex ${className}`}>
      {!reduceMotion ? (
        <>
          <span
            className="reinigung-cta-pulse absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-70"
            aria-hidden
          />
          <span
            className="reinigung-cta-pulse reinigung-cta-pulse-delay absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-40"
            aria-hidden
          />
        </>
      ) : null}
      <motion.a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-bold text-white shadow-[0_0_28px_rgba(16,185,129,0.45),0_8px_24px_rgba(6,182,212,0.35)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.55),0_12px_32px_rgba(6,182,212,0.45)] ${
          large ? "px-8 py-4 text-base md:text-lg" : "px-6 py-3.5 text-sm"
        }`}
        whileHover={reduceMotion ? {} : { scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <MessageCircle className={large ? "h-6 w-6" : "h-5 w-5"} aria-hidden />
        {WA_CTA}
      </motion.a>
    </span>
  );
}
