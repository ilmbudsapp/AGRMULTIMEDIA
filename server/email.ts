import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const msg = {
      to: 'agron6922@gmail.com', // Tvoj email
      from: 'agron6922@gmail.com', // Koristimo verifikovani Gmail
      replyTo: formData.email, // Da možeš direktno da odgovoriš klijentu
      subject: `Nova poruka sa sajta: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Nova poruka sa MULTIMEDIA AGRONDESIGN sajta
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ime:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Predmet:</strong> ${formData.subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Poruka:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #1e40af; border-radius: 4px;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Ova poruka je poslana sa kontakt forme na <strong>agrmultimedia.eu</strong></p>
            <p>Možeš direktno da odgovoriš na ovaj email da kontaktiraš klijenta.</p>
          </div>
        </div>
      `,
      text: `
Nova poruka sa MULTIMEDIA AGRONDESIGN sajta

Ime: ${formData.name}
Email: ${formData.email}
Predmet: ${formData.subject}

Poruka:
${formData.message}

---
Ova poruka je poslana sa kontakt forme na agrmultimedia.eu
      `
    };

    await sgMail.send(msg);
    console.log('Email uspešno poslat za:', formData.email);
    return true;
  } catch (error) {
    console.error('Greška pri slanju email-a:', error);
    return false;
  }
}