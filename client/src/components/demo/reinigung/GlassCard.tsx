import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/80 bg-white/55 p-6 shadow-[0_12px_40px_rgba(14,165,233,0.1)] backdrop-blur-lg md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
