import { useEffect } from "react";
import { useLocation } from "wouter";

/** Client-side redirect for legacy paths (301-like UX in SPA). */
export default function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation(to, { replace: true });
  }, [to, setLocation]);

  return null;
}
