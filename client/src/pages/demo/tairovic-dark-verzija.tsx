import { useEffect } from "react";

/** Sends visitors to the static demo under /demo/tairovic-dark-verzija/. */
export default function TairovicDarkVerzijaDemoRedirect() {
  useEffect(() => {
    window.location.replace("/demo/tairovic-dark-verzija/index.html");
  }, []);

  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[#0a0a0f] text-white/70 text-sm">
      Učitavanje demo sajta…
    </div>
  );
}
