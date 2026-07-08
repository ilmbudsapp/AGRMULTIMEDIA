"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="formSuccess" role="status">
        <strong>Vielen Dank für Ihre Anfrage!</strong>
        <p>Demo-Formular: In der Live-Version würde Ihre Nachricht direkt an uns gesendet.</p>
      </div>
    );
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formRow">
        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" required placeholder="Ihr Name" />
        </label>
        <label htmlFor="phone">
          Telefon
          <input id="phone" name="phone" type="tel" required placeholder="+49 …" />
        </label>
      </div>
      <label htmlFor="email">
        E-Mail
        <input id="email" name="email" type="email" required placeholder="name@beispiel.de" />
      </label>
      <label htmlFor="message">
        Nachricht
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Beschreiben Sie kurz Ihr Projekt …"
        />
      </label>
      <button type="submit" className="btn primary btnFull">
        Anfrage senden
      </button>
    </form>
  );
}
