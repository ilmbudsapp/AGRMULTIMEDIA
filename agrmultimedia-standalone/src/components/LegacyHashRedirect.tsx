import { useEffect } from "react";
import { useLocation } from "wouter";

/** Old /#about bookmarks → dedicated About page (no in-page scroll). */
export default function LegacyHashRedirect() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (id !== "about") return;
    window.history.replaceState(null, "", "/about");
    setLocation("/about");
  }, [setLocation]);

  return null;
}
