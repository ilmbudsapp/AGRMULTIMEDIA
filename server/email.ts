import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_FROM_EMAIL =
  process.env.SENDGRID_FROM_EMAIL || "no-reply@agrmultimedia.eu";
const SENDGRID_TO_EMAIL =
  process.env.SENDGRID_TO_EMAIL || "agron6922@gmail.com";

if (!SENDGRID_API_KEY) {
  console.warn(
    "SENDGRID_API_KEY nije podešen – kontakt emailovi se NE šalju (samo se loguju u server logu)."
  );
} else {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(
  formData: ContactFormData
): Promise<boolean> {
  try {
    if (!SENDGRID_API_KEY) {
      console.log(
        "Kontakt forma – email nije poslat jer SENDGRID_API_KEY nije podešen. Podaci:",
        formData
      );
      return true;
    }

    const subject = `Novi kontakt sa sajta: ${formData.subject || "Kontakt"}`;

    const text = [
      `Ime i prezime: ${formData.name}`,
      `Email posetioca: ${formData.email}`,
      "",
      "Poruka:",
      formData.message,
    ].join("\n");

    const html = `
      <h2>Novi kontakt sa sajta AGR MULTIMEDIA</h2>
      <p><strong>Ime i prezime:</strong> ${formData.name}</p>
      <p><strong>Email posetioca:</strong> ${formData.email}</p>
      <hr />
      <p><strong>Poruka:</strong></p>
      <p style="white-space: pre-line;">${formData.message}</p>
    `;

    await sgMail.send({
      to: SENDGRID_TO_EMAIL,
      from: SENDGRID_FROM_EMAIL,
      replyTo: formData.email || SENDGRID_FROM_EMAIL,
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

