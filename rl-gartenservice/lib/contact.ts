import { serviceOptions } from "@/content/site";

export const LIMITS = {
  maxFiles: 5,
  maxBytes: 8 * 1024 * 1024,
  nameMax: 120,
  contactMax: 160,
  placeMax: 80,
  messageMax: 4000,
  messageMin: 10,
};

export type ContactFields = {
  name: string;
  contact: string;
  service: string;
  place: string;
  message: string;
  companyWebsite: string;
};

export type FieldErrors = Partial<Record<keyof ContactFields | "photos", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateFields(fields: ContactFields): FieldErrors {
  const errors: FieldErrors = {};
  const name = fields.name.trim();
  const contact = fields.contact.trim();
  const service = fields.service.trim();
  const place = fields.place.trim();
  const message = fields.message.trim();

  if (name.length < 2) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  } else if (name.length > LIMITS.nameMax) {
    errors.name = "Der Name ist zu lang.";
  }

  if (!contact) {
    errors.contact = "Bitte geben Sie eine Telefonnummer oder eine E-Mail-Adresse an.";
  } else if (contact.includes("@")) {
    if (!emailPattern.test(contact) || contact.length > LIMITS.contactMax) {
      errors.contact = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    }
  } else {
    const digits = contact.replace(/\D/g, "");
    if (digits.length < 6 || contact.length > LIMITS.contactMax) {
      errors.contact = "Bitte geben Sie eine gültige Telefonnummer oder E-Mail-Adresse an.";
    }
  }

  if (!serviceOptions.includes(service as (typeof serviceOptions)[number])) {
    errors.service = "Bitte wählen Sie die gewünschte Dienstleistung.";
  }

  if (place.length < 2) {
    errors.place = "Bitte geben Sie Ort oder Postleitzahl an.";
  } else if (place.length > LIMITS.placeMax) {
    errors.place = "Die Angabe zu Ort oder Postleitzahl ist zu lang.";
  }

  if (message.length < LIMITS.messageMin) {
    errors.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";
  } else if (message.length > LIMITS.messageMax) {
    errors.message = "Die Nachricht ist zu lang.";
  }

  return errors;
}

export function detectImageType(bytes: Uint8Array): "jpeg" | "png" | "webp" | null {
  if (bytes.length < 64) return null;
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return "jpeg";
  }
  if (
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[12] === 0x49 &&
    bytes[13] === 0x48 &&
    bytes[14] === 0x44 &&
    bytes[15] === 0x52
  ) {
    return "png";
  }
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "webp";
  }
  return null;
}
