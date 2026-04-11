import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM =
  process.env.SMTP_FROM || (SMTP_USER ? `AGR MULTIMEDIA <${SMTP_USER}>` : "");
const SMTP_TO = process.env.SMTP_TO || "agron6922@gmail.com";

let transporter: nodemailer.Transporter | null = null;

if (!SMTP_USER || !SMTP_PASS) {
  console.warn(
    "SMTP_USER / SMTP_PASS nisu podešeni – kontakt emailovi se NE šalju (samo se loguju u server logu)."
  );
} else {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(
  formData: ContactFormData
): Promise<boolean> {
  try {
    if (!transporter || !SMTP_FROM) {
      console.log(
        "Kontakt forma – email nije poslat jer SMTP kredencijali nisu podešeni. Podaci:",
        formData
      );
      return true;
    }

    const text = [
      `Ime i prezime: ${formData.name}`,
      `Email posetioca: ${formData.email}`,
      "",
      "Poruka:",
      formData.message,
    ].join("\n");

    const subject = `Novi kontakt sa sajta: ${formData.subject || "Kontakt"}`;

    const html = `
      <h2>Novi kontakt sa sajta AGR MULTIMEDIA</h2>
      <p><strong>Ime i prezime:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Email posetioca:</strong> ${escapeHtml(formData.email)}</p>
      <hr />
      <p><strong>Poruka:</strong></p>
      <p style="white-space: pre-line;">${escapeHtml(formData.message)}</p>
    `;

    await transporter.sendMail({
      to: SMTP_TO,
      from: SMTP_FROM,
      replyTo: formData.email || SMTP_FROM,
      subject,
      text,
      html,
    });

    return true;
  } catch (error) {
    console.error("Greška pri slanju email-a:", error);
    return false;
  }
}

