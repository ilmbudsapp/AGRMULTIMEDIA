"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BASE } from "@/lib/site";

function isHomePath(pathname: string | null) {
  if (!pathname) return false;
  const path = pathname.replace(/\/$/, "") || "/";
  return path === "/" || path === "/demo/uganda-hilfe";
}

function scrollToHomeTop() {
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  window.scrollTo({ top: 0, behavior });
}

type HeaderLogoProps = {
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
};

export function HeaderLogo({
  className = "",
  imgClassName = "h-[3.25rem] w-auto object-contain",
  width = 156,
  height = 65,
}: HeaderLogoProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      scroll={!isHomePath(pathname)}
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Uganda-Hilfe Unterland e.V. – Startseite"
      onClick={(e) => {
        if (isHomePath(pathname)) {
          e.preventDefault();
          scrollToHomeTop();
        }
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/images/logo.png`}
        alt="Uganda-Hilfe Unterland e.V."
        width={width}
        height={height}
        className={imgClassName}
      />
    </Link>
  );
}
