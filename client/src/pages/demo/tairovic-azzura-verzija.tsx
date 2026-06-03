import { useEffect } from "react";

/** Sends visitors to the static demo under /demo/tairovic-azzura-verzija/. */
export default function TairovicAzzuraVerzijaDemoRedirect() {
  useEffect(() => {
    window.location.replace("/demo/tairovic-azzura-verzija/index.html");
  }, []);

  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[#0a0a0f] text-white/70 text-sm">
      Učitavanje demo sajta…
    </div>
  );
}
