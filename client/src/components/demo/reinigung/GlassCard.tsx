import type { ReactNode } from "react";
import { GLASS_PANEL, GLASS_PANEL_STATIC } from "./styles";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className = "", hover = true }: Props) {
  return (
    <div className={`${hover ? GLASS_PANEL : GLASS_PANEL_STATIC} p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}
