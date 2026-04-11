/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
  /** EmailJS: Account → API keys (Public Key) */
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  /** EmailJS: Email Services → Service ID */
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  /** EmailJS: Email Templates → Template ID */
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}