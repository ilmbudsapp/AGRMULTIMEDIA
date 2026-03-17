import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM =
  process.env.SMTP_FROM || (SMTP_USER ? `AGR MULTIMEDIA <${SMTP_USER}>` : "");
const SMTP_TO = process.env.SMTP_TO || "agron6922@gmail.com";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const body = req.body || {};
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const subject = String(body.subject || "Kontakt").trim() || "Kontakt";

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Ime, email i poruka su obavezni.",
      errors: [],
    });
  }

  if (!SMTP_USER || !SMTP_PASS) {
    console.warn("SMTP_USER / SMTP_PASS nisu podešeni na Vercel-u.");
    return res.status(500).json({
      success: false,
      message: "Email servis nije podešen. Molimo kontaktirajte nas direktno na agron6922@gmail.com.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const emailSubject = `Novi kontakt sa sajta: ${subject}`;
  const text = [
    `Ime i prezime: ${name}`,
    `Email posetioca: ${email}`,
    "",
    "Poruka:",
    message,
  ].join("\n");
  const html = `
    <h2>Novi kontakt sa sajta AGR MULTIMEDIA</h2>
    <p><strong>Ime i prezime:</strong> ${name}</p>
    <p><strong>Email posetioca:</strong> ${email}</p>
    <hr />
    <p><strong>Poruka:</strong></p>
    <p style="white-space: pre-line;">${message.replace(/</g, "&lt;")}</p>
  `;

  try {
    await transporter.sendMail({
      to: SMTP_TO,
      from: SMTP_FROM,
      replyTo: email,
      subject: emailSubject,
      text,
      html,
    });
    return res.status(200).json({
      success: true,
      message: "Poruka je uspešno poslata!",
    });
  } catch (error) {
    console.error("Greška pri slanju email-a:", error);
    return res.status(500).json({
      success: false,
      message: "Greška pri slanju. Molimo pokušajte ponovo ili pišite na agron6922@gmail.com.",
    });
  }
}
