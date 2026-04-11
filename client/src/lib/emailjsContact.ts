import emailjs from "@emailjs/browser";

/** U EmailJS šablonu koristi iste ključeve: from_name, from_email, reply_to, message, subject */
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
      from_name: params.fromName,
      from_email: params.fromEmail,
      reply_to: params.fromEmail,
      message: params.message,
      subject: params.subject,
    },
    { publicKey: PUBLIC_KEY },
  );
}
