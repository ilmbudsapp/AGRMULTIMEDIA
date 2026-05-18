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
    <motion.a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-bold text-white shadow-[0_12px_36px_rgba(16,185,129,0.35)] transition hover:shadow-[0_16px_44px_rgba(16,185,129,0.45)] ${
        large ? "px-8 py-4 text-base md:text-lg" : "px-6 py-3 text-sm"
      } ${className}`}
      whileHover={reduceMotion ? {} : { scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className={large ? "h-6 w-6" : "h-5 w-5"} aria-hidden />
      {WA_CTA}
    </motion.a>
  );
}
