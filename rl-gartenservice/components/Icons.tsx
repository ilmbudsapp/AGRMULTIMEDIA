import type { SVGProps } from "react";

export type IconName = "phone" | "whatsapp" | "mail" | "facebook" | "instagram" | "tiktok";

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    focusable: false as const,
    ...props,
  };

  if (name === "phone") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M8.1 3.2h1.7c.5 0 .9.3 1 .8l.7 2.5a1 1 0 0 1-.4 1.1L9.4 8.8a10.8 10.8 0 0 0 5.8 5.8l1.2-1.7a1 1 0 0 1 1.1-.4l2.5.7c.4.1.7.5.7 1v1.7c0 .6-.5 1.1-1.1 1.1C11.4 17 7 12.6 7 7.3c0-.6.5-1.1 1.1-1.1Z"
        />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12 2.4A9.5 9.5 0 0 0 3.7 16.3L2.6 21l4.8-1.1A9.5 9.5 0 1 0 12 2.4Zm0 17.2c-1.4 0-2.7-.4-3.9-1l-.3-.2-2.8.6.6-2.7-.2-.3A7.7 7.7 0 1 1 12 19.6Zm4.2-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1a6.3 6.3 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.2-.5 0-.1 0-.3-.1-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 1.6.6 1.9.5 2.6.5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.2-.2-.2-.4-.3Z"
        />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5Zm8 7.2 7.2-5.2H4.8L12 12.7ZM4 16.2l4.7-3.4-1-1.2L4 14.2v2Zm16 0v-2l-3.7-2.6-1 1.2 4.7 3.4Z"
        />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M14.2 8.2V6.4c0-.6.4-.8 1-.8h1.3V3h-2.2C11.6 3 10 4.7 10 7.1v1.1H8v2.7h2V21h3.1v-10.1h2.1l.4-2.7h-2.4Z"
        />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm0 1.8A2.7 2.7 0 0 0 5.3 8v8A2.7 2.7 0 0 0 8 18.7h8A2.7 2.7 0 0 0 18.7 16V8A2.7 2.7 0 0 0 16 5.3H8Zm8.4 1.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.8a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        fill="currentColor"
        d="M14.2 3.2v9.1a3.4 3.4 0 1 1-2.3-3.2V6.4a6.6 6.6 0 0 0 4.3 1.6V5.4a4.4 4.4 0 0 1-2-.9V3.2h0Zm-2.3 12.6a1.6 1.6 0 1 0-1.6-1.6 1.6 1.6 0 0 0 1.6 1.6Z"
      />
    </svg>
  );
}
