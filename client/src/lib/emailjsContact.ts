import emailjs from "@emailjs/browser";

/**
 * Mora da se poklopi sa EmailJS šablonom (npr. name, email, message, title, time).
 * Tvoj "Contact Us" šablon koristi: {{title}}, {{name}}, {{email}}, {{message}}, {{time}}
 *
 * Ako pada na produkciji: EmailJS → Account → Security → dozvoli origin
 * (npr. https://www.agrmultimedia.eu i https://agrmultimedia.eu).
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

export function isEmailJsConfigured(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendContactViaEmailJs(params: {
  fromName: string;
  fromEmail: string;
  message: string;
  subject: string;
}): Promise<void> {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: params.fromName,
      email: params.fromEmail,
      message: params.message,
      title: params.subject,
      time: new Date().toLocaleString(),
    },
    { publicKey: PUBLIC_KEY },
  );
}

/** Tekst iz EmailJS odgovora (status 4xx/5xx) — pokaži korisniku radi dijagnostike */
export function getEmailJsErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "text" in err && typeof (err as { text: unknown }).text === "string") {
    return (err as { text: string }).text;
  }
  if (err instanceof Error) return err.message;
  return String(err);
}
