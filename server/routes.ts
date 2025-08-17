import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Sačuvaj kontakt u bazi podataka
      const contact = await storage.createContact(validatedData);
      
      // Pošalji email notifikaciju
      const emailSent = await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      });
      
      if (!emailSent) {
        console.warn('Email nije poslat, ali kontakt je sačuvan u bazi');
      }
      
      res.json({ 
        success: true, 
        message: "Poruka je uspešno poslana!",
        contactId: contact.id 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Neispravni podaci u formi",
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Greška na serveru. Molimo pokušajte ponovo." 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error('Get contacts error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Greška pri dohvatanju kontakata" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
