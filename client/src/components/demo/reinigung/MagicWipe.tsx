import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

/** Magic wipe + fade-in-up on scroll */
export function MagicWipe({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -8% 0px" });
  const reduceMotion = useReducedMotion();

  const variants: Variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: {
          opacity: 0,
          y: 48,
          filter: "blur(12px)",
          clipPath: "inset(0 100% 0 0 round 24px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          clipPath: "inset(0 0% 0 0 round 24px)",
          transition: { duration: 0.9, ease: easeOut, delay },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.75, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}
