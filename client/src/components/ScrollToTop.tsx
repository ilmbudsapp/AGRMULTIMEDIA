import { useEffect } from "react";
import { useLocation } from "wouter";

/** Scroll window to top on every client-side route change. */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
