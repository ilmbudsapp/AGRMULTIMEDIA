import { useEffect } from "react";
import { useLocation } from "wouter";

/** Scroll window to top instantly on every client-side route change. */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof history !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
