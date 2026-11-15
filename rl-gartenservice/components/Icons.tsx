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
  | "fence";

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
      <path d="M5.5 18.5C13 17.5 18 12 19.2 5.2 12.2 6 6.2 10.2 5.5 18.5Z" />
      <path d="M9 15.2c1.8-1.6 4.2-3.2 7.2-4.2" />
    </>
  ),
  mower: (
    <>
      <circle cx="7.2" cy="16.6" r="2.1" />
      <circle cx="16.2" cy="16.6" r="2.1" />
      <path d="M9.2 16.6h4.2l1.7-4.4H19" />
      <path d="M5 16.6H3.8" />
      <path d="M13.2 12.2V8.4h3.2" />
    </>
  ),
  shears: (
    <>
      <circle cx="6.2" cy="6.4" r="2.3" />
      <circle cx="6.2" cy="17.6" r="2.3" />
      <path d="M8.2 7.6 20 17.2" />
      <path d="M8.2 16.4 20 6.8" />
    </>
  ),
  broom: (
    <>
      <path d="M14.2 3.6 9.2 13" />
      <path d="M6.2 13h8.2l-.8 7.2H7.2L6.2 13Z" />
      <path d="M8.4 16.2h4.2" />
    </>
  ),
  floor: (
    <>
      <path d="M4 7.2h16v4.2H4z" />
      <path d="M4 11.4h16v4.2H4z" />
      <path d="M12 7.2v4.2" />
      <path d="M8.2 11.4v4.2" />
      <path d="M15.8 11.4v4.2" />
    </>
  ),
  grass: (
    <>
      <path d="M12 20V9.5" />
      <path d="M12 14c-2.6-.6-4.2-3.2-4.2-6.4 2.8.8 4.2 3.2 4.2 6.4Z" />
      <path d="M12 13.2c2.6-.6 4.6-3.2 4.6-6.4-2.8.8-4.6 3.2-4.6 6.4Z" />
      <path d="M4.5 20h15" />
    </>
  ),
  paver: (
    <>
      <rect x="3.8" y="3.8" width="6.6" height="6.6" rx="1.2" />
      <rect x="13.6" y="3.8" width="6.6" height="6.6" rx="1.2" />
      <rect x="3.8" y="13.6" width="6.6" height="6.6" rx="1.2" />
      <rect x="13.6" y="13.6" width="6.6" height="6.6" rx="1.2" />
    </>
  ),
  terrace: (
    <>
      <path d="M3.8 10.2h16.4" />
      <path d="M6 10.2V6.2h12v4" />
      <path d="M7.2 10.2V19" />
      <path d="M16.8 10.2V19" />
      <path d="M7.2 14.4h9.6" />
    </>
  ),
  house: (
    <>
      <path d="M3.8 11.2 12 4.2l8.2 7" />
      <path d="M6.6 10.4V20h10.8V10.4" />
      <path d="M10.6 20v-5h2.8v5" />
    </>
  ),
  fence: (
    <>
      <path d="M6 20V8.2" />
      <path d="M12 20V8.2" />
      <path d="M18 20V8.2" />
      <path d="M4.2 11.4h15.6" />
      <path d="M4.2 15.2h15.6" />
      <path d="M6 8.2 7.4 5.4 8.8 8.2" />
      <path d="M12 8.2 13.4 5.4 14.8 8.2" />
      <path d="M18 8.2 19.4 5.4 20.8 8.2" />
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
      strokeWidth={2}
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
