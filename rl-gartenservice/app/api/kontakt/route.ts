import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import { LIMITS, detectImageType, validateFields, type ContactFields } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const extensions = { jpeg: "jpg", png: "png", webp: "webp" } as const;

function text(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json(
      { ok: false, message: "Die Anfrage konnte nicht gelesen werden. Bitte versuchen Sie es erneut." },
      { status: 400 },
    );
  }

  const fields: ContactFields = {
    name: text(form, "name"),
    contact: text(form, "contact"),
    service: text(form, "service"),
    place: text(form, "place"),
    message: text(form, "message"),
    companyWebsite: text(form, "companyWebsite"),
  };

  if (fields.companyWebsite.trim()) {
    return Response.json({ ok: true });
  }

  const errors = validateFields(fields);
  const photos = form
    .getAll("photos")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (photos.length > LIMITS.maxFiles) {
    errors.photos = "Es sind höchstens 5 Fotos erlaubt.";
  }

  const stored: { filename: string; bytes: Buffer; type: string }[] = [];
  if (!errors.photos) {
    for (const photo of photos) {
      if (photo.size > LIMITS.maxBytes) {
        errors.photos = "Erlaubt sind nur JPG, PNG und WEBP bis 8 MB.";
        break;
      }
      const bytes = new Uint8Array(await photo.arrayBuffer());
      const type = detectImageType(bytes);
      if (!type) {
        errors.photos = "Erlaubt sind nur JPG, PNG und WEBP bis 8 MB.";
        break;
      }
      stored.push({
        filename: `foto-${stored.length + 1}.${extensions[type]}`,
        bytes: Buffer.from(bytes),
        type,
      });
    }
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const id = `${new Date().toISOString().replace(/[:.]/g, "-")}-${randomUUID().slice(0, 8)}`;
  const payload = {
    id,
    receivedAt: new Date().toISOString(),
    name: fields.name.trim(),
    contact: fields.contact.trim(),
    service: fields.service.trim(),
    place: fields.place.trim(),
    message: fields.message.trim(),
    photos: stored.map((file) => file.filename),
  };

  try {
    const sink = process.env.CONTACT_SINK;
    if (sink === "file") {
      const dir = path.join(process.cwd(), "data", "inquiries", id);
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, "anfrage.json"), JSON.stringify(payload, null, 2), "utf8");
      for (const file of stored) {
        await writeFile(path.join(dir, file.filename), file.bytes);
      }
    } else if (sink === "smtp") {
      await sendMail(payload, stored);
    } else {
      return Response.json(
        {
          ok: false,
          message:
            "Die Anfrage kann derzeit nicht zugestellt werden. Bitte rufen Sie uns an oder schreiben Sie per WhatsApp.",
        },
        { status: 503 },
      );
    }
  } catch (error) {
    console.error("Kontaktversand fehlgeschlagen", error);
    return Response.json(
      {
        ok: false,
        message:
          "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns an oder schreiben Sie per WhatsApp.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message: "Vielen Dank. Ihre Anfrage wurde gesendet. Wir melden uns zeitnah.",
  });
}

async function sendMail(
  payload: {
    name: string;
    contact: string;
    service: string;
    place: string;
    message: string;
  },
  files: { filename: string; bytes: Buffer; type: string }[],
) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO;
  const from = process.env.SMTP_FROM;
  if (!host || !user || !pass || !to || !from) {
    throw new Error("SMTP ist nicht vollständig konfiguriert.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_PORT === "465",
    auth: { user, pass },
  });

  const mime = { jpeg: "image/jpeg", png: "image/png", webp: "image/webp" } as const;
  await transporter.sendMail({
    from,
    to,
    replyTo: payload.contact.includes("@") ? payload.contact : undefined,
    subject: `Anfrage: ${payload.service} — ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Kontakt: ${payload.contact}`,
      `Dienstleistung: ${payload.service}`,
      `Ort / PLZ: ${payload.place}`,
      "",
      payload.message,
    ].join("\n"),
    attachments: files.map((file) => ({
      filename: file.filename,
      content: file.bytes,
      contentType: mime[file.type as keyof typeof mime],
    })),
  });
}
