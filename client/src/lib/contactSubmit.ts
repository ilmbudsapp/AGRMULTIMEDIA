import { getEmailJsErrorMessage, isEmailJsConfigured, sendContactViaEmailJs } from "@/lib/emailjsContact";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

/**
 * 1) POST /api/contact (Vercel serverless + SMTP) — primarni kanal na produkciji.
 * 2) EmailJS — rezerva ako API nije dostupan ili SMTP nije podešen / pošalje grešku.
 */
export async function submitContactForm(
  payload: ContactPayload,
): Promise<{ ok: true } | { ok: false; detail: string }> {
  let apiStatus = 0;
  let apiMessage = "";

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    apiStatus = res.status;
    const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

    if (res.ok && data.success) {
      return { ok: true };
    }

    apiMessage = typeof data.message === "string" ? data.message : "";

    if (res.status === 400) {
      return { ok: false, detail: apiMessage || "validation" };
    }
  } catch {
    apiStatus = 0;
  }

  if (!isEmailJsConfigured()) {
    if (apiStatus === 0) {
      return {
        ok: false,
        detail:
          apiMessage ||
          "API unreachable and EmailJS env vars missing — use agron6922@gmail.com",
      };
    }
    return {
      ok: false,
      detail:
        apiMessage ||
        "SMTP not configured on server and EmailJS missing — use agron6922@gmail.com",
    };
  }

  try {
    await sendContactViaEmailJs({
      fromName: payload.name,
      fromEmail: payload.email,
      message: payload.message,
      subject: payload.subject,
    });
    return { ok: true };
  } catch (err) {
    const ej = getEmailJsErrorMessage(err);
    const extra = apiMessage ? ` · ${apiMessage}` : "";
    return { ok: false, detail: `${ej}${extra}` };
  }
}
