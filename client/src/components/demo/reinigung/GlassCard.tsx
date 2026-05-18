import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-[#e5d9c8]/90 bg-[#fffcf7]/75 p-6 shadow-[0_12px_40px_rgba(101,78,52,0.1)] backdrop-blur-lg md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
