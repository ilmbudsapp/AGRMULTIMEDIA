import { useEffect } from "react";
import { useLocation } from "wouter";

/** Scroll window to top on every client-side route change. */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Hash targets (e.g. /#about) are handled on the home page — do not flash scroll-to-top first.
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
