import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "phone"
  | "whatsapp"
  | "mail"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "leaf"
  | "mower"
  | "shears"
  | "broom"
  | "floor"
  | "grass"
  | "paver"
  | "terrace"
  | "house"
  | "fence"
  | "arrow"
  | "pin";

const glyphs: Record<IconName, ReactNode> = {
  phone: (
    <path
      fill="currentColor"
      stroke="none"
      d="M8.2 3.4h1.5c.5 0 .9.3 1 .8l.6 2.3a1 1 0 0 1-.4 1.05L9.4 8.7a10.2 10.2 0 0 0 5.9 5.9l1.15-1.5a1 1 0 0 1 1.05-.4l2.3.6c.45.12.75.52.75.98V16.4A1.6 1.6 0 0 1 19 18 12.6 12.6 0 0 1 6 5a1.6 1.6 0 0 1 2.2-1.6Z"
    />
  ),
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 3.2a8.7 8.7 0 0 0-7.5 13L3.4 20.6l4.5-1a8.7 8.7 0 1 0 4.1-16.4Zm0 15.7c-1.3 0-2.5-.3-3.6-.9l-.3-.2-2.6.6.6-2.5-.2-.3A7 7 0 1 1 12 18.9Zm3.9-5.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1a5.8 5.8 0 0 1-1.7-1.1 6.4 6.4 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.2-.3.2-.4 0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.4-.1 1.3-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3Z"
    />
  ),
  mail: (
    <>
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  facebook: (
    <path
      fill="currentColor"
      stroke="none"
      d="M13.8 8.4V6.8c0-.7.4-.9 1-.9h1.5V3.2h-2.4C11.2 3.2 9.6 4.9 9.6 7.4v1H7.6v2.8h2V20.2h3.2V11.2h2.2l.4-2.8h-2.6Z"
    />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.7" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <path
      fill="currentColor"
      stroke="none"
      d="M14.2 3.4v8.6a3.5 3.5 0 1 1-2.5-3.4V6.2a6.4 6.4 0 0 0 4.2 1.7V5.4a4.2 4.2 0 0 1-1.7-.8V3.4h0Zm-2.5 12.2a1.7 1.7 0 1 0-1.7-1.7 1.7 1.7 0 0 0 1.7 1.7Z"
    />
  ),
  leaf: (
    <>
      <path d="M6 18.5C12.8 17.6 18 12.2 19.2 5.2 12.4 6 6.8 10.2 6 18.5Z" />
      <path d="M9.2 15.2c2.2-2 5-3.8 8-4.8" />
    </>
  ),
  grass: (
    <>
      <path d="M12 20V8.5" />
      <path d="M12 17.5C10 13.5 8.2 11 6.2 9.2" />
      <path d="M12 17.5C14 13.5 15.8 11 17.8 9.2" />
      <path d="M12 16.2C9.2 14.2 7 13.2 4.6 13" />
      <path d="M12 16.2c2.8-2 5-3 7.4-3.2" />
      <path d="M12 15.2C10.4 11 9.6 8.2 9.4 5.6" />
      <path d="M12 15.2c1.6-4.2 2.4-7 2.6-9.6" />
    </>
  ),
  mower: (
    <>
      <path d="M3.2 14.2h10.4l1.5-2.8H6Z" />
      <circle cx="6.2" cy="17.6" r="2.15" />
      <circle cx="13.2" cy="17.6" r="2.15" />
      <path d="M11.4 11.6 16.8 5.6" />
      <path d="M16.8 5.6h3.2" />
    </>
  ),
  paver: (
    <>
      <rect x="4" y="4" width="4.6" height="4.6" rx="0.4" />
      <rect x="9.7" y="4" width="4.6" height="4.6" rx="0.4" />
      <rect x="15.4" y="4" width="4.6" height="4.6" rx="0.4" />
      <rect x="4" y="9.7" width="4.6" height="4.6" rx="0.4" />
      <rect x="9.7" y="9.7" width="4.6" height="4.6" rx="0.4" />
      <rect x="15.4" y="9.7" width="4.6" height="4.6" rx="0.4" />
      <rect x="4" y="15.4" width="4.6" height="4.6" rx="0.4" />
      <rect x="9.7" y="15.4" width="4.6" height="4.6" rx="0.4" />
      <rect x="15.4" y="15.4" width="4.6" height="4.6" rx="0.4" />
    </>
  ),
  shears: (
    <>
      <circle cx="6.2" cy="6.4" r="2.5" />
      <circle cx="6.2" cy="17.6" r="2.5" />
      <path d="M8.4 8 20.6 16.8" />
      <path d="M8.4 16 20.6 7.2" />
    </>
  ),
  terrace: (
    <>
      <path d="M4 9.2h16" />
      <path d="M6.2 9.2V6.2h11.6v3" />
      <path d="M7.4 9.2V18.8" />
      <path d="M16.6 9.2V18.8" />
      <path d="M5.2 14.2h13.6" />
      <path d="M5.2 18.8h13.6" />
    </>
  ),
  broom: (
    <>
      <path d="M14.6 3.4 9.4 12.2" />
      <path d="M5.4 13h9.6" />
      <path d="M6.4 13.2 5.4 20" />
      <path d="M8.6 13.2 8.2 20.4" />
      <path d="M10.8 13.2v7.2" />
      <path d="M13 13.2 13.8 20" />
      <path d="M14.8 13 16.2 19.2" />
    </>
  ),
  house: (
    <>
      <path d="M3.6 11.4 12 4.4l8.4 7" />
      <path d="M6.2 10.6V20h11.6V10.6" />
      <path d="M10.6 20v-5.2h2.8V20" />
    </>
  ),
  floor: (
    <>
      <path d="M4 6.2h16v3.2H4z" />
      <path d="M4 10.4h16v3.2H4z" />
      <path d="M4 14.6h16v3.2H4z" />
      <path d="M11 6.2v3.2" />
      <path d="M15 10.4v3.2" />
      <path d="M9 14.6v3.2" />
    </>
  ),
  fence: (
    <>
      <path d="M6 19.6V8.8" />
      <path d="M12 19.6V8.8" />
      <path d="M18 19.6V8.8" />
      <path d="M6 8.8 7.4 5.8 8.8 8.8" />
      <path d="M12 8.8 13.4 5.8 14.8 8.8" />
      <path d="M18 8.8 19.4 5.8l1.4 3" />
      <path d="M4.2 12.2h16.4" />
      <path d="M4.2 15.8h16.4" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="M13 6.5 18.5 12 13 17.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="1.8" />
    </>
  ),
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {glyphs[name]}
    </svg>
  );
}

export function IconBadge({ name }: { name: IconName }) {
  return (
    <span className="icon-badge">
      <Icon name={name} />
    </span>
  );
}
