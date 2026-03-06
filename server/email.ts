// import sgMail from '@sendgrid/mail';

// if (!process.env.SENDGRID_API_KEY) {
//   throw new Error("SENDGRID_API_KEY environment variable must be set");
// }

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    // Email servis je privremeno onemogućen
    console.log('Email servis je onemogućen - kontakt forma:', formData);
    return true;
  } catch (error) {
    console.error('Greška pri slanju email-a:', error);
    return false;
  }
}