"use client";

import { openCookieSettings } from "@/lib/cookie-consent";

type Props = {
  className?: string;
};

export default function CookieSettingsLink({ className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
