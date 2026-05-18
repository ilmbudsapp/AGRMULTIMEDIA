import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_HREF } from "@/pages/demo/reinigung/data";

export default function DemoWhatsAppFloat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-[0_0_24px_rgba(16,185,129,0.5)] md:h-16 md:w-16 [bottom:calc(1.25rem+env(safe-area-inset-bottom,0px))] [right:calc(1.25rem+env(safe-area-inset-right,0px))]"
      aria-label="Jetzt Termin sichern via WhatsApp"
      initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.6 }}
      whileHover={reduceMotion ? {} : { scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {!reduceMotion ? (
        <span
          className="reinigung-cta-pulse absolute inset-0 rounded-full bg-emerald-400/50"
          aria-hidden
        />
      ) : null}
      <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" aria-hidden />
    </motion.a>
  );
}
