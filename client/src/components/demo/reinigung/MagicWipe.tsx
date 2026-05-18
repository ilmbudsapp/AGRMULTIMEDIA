import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

export function MagicWipe({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -6% 0px" });
  const reduceMotion = useReducedMotion();

  const variants: Variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: {
          opacity: 0.25,
          filter: "blur(14px)",
          clipPath: "inset(0 100% 0 0 round 12px)",
        },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          clipPath: "inset(0 0% 0 0 round 12px)",
          transition: { duration: 1.05, ease: easeOut, delay },
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

export function MagicWipeStagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });
  const reduceMotion = useReducedMotion();

  const container: Variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
      };

  const item: Variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: {
          opacity: 0.2,
          filter: "blur(12px)",
          clipPath: "inset(0 90% 0 0 round 10px)",
          y: 18,
        },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          clipPath: "inset(0 0% 0 0 round 10px)",
          y: 0,
          transition: { duration: 0.95, ease: easeOut },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
