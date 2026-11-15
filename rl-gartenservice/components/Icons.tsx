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
  | "arrow";

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
      <path d="M5.2 18.6C12.6 17.8 18 12.4 19.4 4.8 12.2 5.6 6.2 9.8 5.2 18.6Z" />
      <path d="M8.6 15.4c2-1.8 4.6-3.4 7.6-4.4" />
    </>
  ),
  mower: (
    <>
      <path d="M3.4 13.6h11.2l1.4-2.6H6.2Z" />
      <circle cx="6.4" cy="17.2" r="2.35" />
      <circle cx="13.6" cy="17.2" r="2.35" />
      <path d="M11.6 11.2 17.4 5" />
      <path d="M17.4 5h3" />
    </>
  ),
  shears: (
    <>
      <circle cx="6.4" cy="6.6" r="2.15" />
      <circle cx="6.4" cy="17.4" r="2.15" />
      <path d="M8.2 7.8 19.6 16.6" />
      <path d="M8.2 16.2 19.6 7.4" />
    </>
  ),
  broom: (
    <>
      <path d="M14.2 3.2 10.2 11.2" />
      <path d="M5.2 12h10.4" />
      <path d="M6.2 12.2 5 19.2" />
      <path d="M8.4 12.2 7.8 19.8" />
      <path d="M10.6 12.2v7.8" />
      <path d="M12.8 12.2 13.6 19.4" />
      <path d="M14.8 12.2 16.2 18.6" />
    </>
  ),
  floor: (
    <>
      <path d="M4.2 17.2 7.6 6.8h2.6L6.6 17.2Z" />
      <path d="M8.4 17.2 11.8 6.8h2.6l-3.6 10.4Z" />
      <path d="M12.6 17.2 16 6.8h2.6l-3.6 10.4Z" />
    </>
  ),
  grass: (
    <>
      <path d="M12 20c0-6-2.2-10-4.4-13.2" />
      <path d="M12 20V4.2" />
      <path d="M12 20c0-6 2.6-9.4 5-12.4" />
    </>
  ),
  paver: (
    <>
      <rect x="3.4" y="6.2" width="10.2" height="7.6" rx="2" />
      <rect x="12.6" y="11.2" width="7.6" height="6" rx="1.6" />
    </>
  ),
  terrace: (
    <>
      <path d="M3.4 9.4C6 6 8.8 4.6 12 4.6s6 1.4 8.6 4.8" />
      <path d="M12 4.6v4.8" />
      <path d="M4.2 14.4h15.6" />
      <path d="M4.2 17.2h15.6" />
      <path d="M4.2 20h15.6" />
      <path d="M12 9.4V20" />
    </>
  ),
  house: (
    <>
      <path d="M3.2 11.4 9.2 6.2l6 5.2" />
      <path d="M5 10.6V18.6h8.4V10.6" />
      <path d="M15.6 7.4h3.6v2.1h-3.6Z" />
      <path d="M17.4 9.5v7.2" />
    </>
  ),
  fence: (
    <>
      <path d="M5.2 20V9.2" />
      <path d="M12 20V9.2" />
      <path d="M18.8 20V9.2" />
      <path d="M5.2 9.2 6.7 6.2 8.2 9.2" />
      <path d="M12 9.2 13.5 6.2 15 9.2" />
      <path d="M18.8 9.2 20.3 6.2l1.5 3" />
      <path d="M3.6 12.4h17.6" />
      <path d="M3.6 16h17.6" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="M13 6.5 18.5 12 13 17.5" />
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
