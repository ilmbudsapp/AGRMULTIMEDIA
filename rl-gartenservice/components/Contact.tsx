"use client";

import { FormEvent, useState } from "react";
import { Icon, type IconName } from "@/components/Icons";
import { serviceOptions, site, socials } from "@/content/site";
import { LIMITS, type FieldErrors } from "@/lib/contact";

const empty = {
  name: "",
  contact: "",
  service: "",
  place: "",
  message: "",
};

export function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const channels: { icon: IconName; label: string; value: string; href: string }[] = [
    { icon: "phone", label: "Tel", value: site.phoneDisplay, href: site.phoneTel },
    { icon: "whatsapp", label: "WhatsApp", value: site.whatsappDisplay, href: site.whatsappUrl },
    { icon: "mail", label: "E-Mail", value: site.email, href: `mailto:${site.email}` },
    ...socials.map((item) => ({
      icon: item.icon,
      label: item.label,
      value: item.handle,
      href: item.href,
    })),
  ];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    setErrors({});
    const form = event.currentTarget;
    const data = new FormData(form);
    const fallback =
      "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns an oder schreiben Sie per WhatsApp.";
    try {
      const response = await fetch("/api/kontakt", { method: "POST", body: data });
      const body = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: FieldErrors;
      };
      if (response.ok && body.ok && body.message) {
        setStatus("success");
        setMessage(body.message);
        setValues(empty);
        form.reset();
        return;
      }
      setStatus("error");
      setErrors(body.errors ?? {});
      setMessage(body.errors ? "" : (body.message ?? fallback));
    } catch {
      setStatus("error");
      setMessage(
        "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns an oder schreiben Sie per WhatsApp.",
      );
    }
  }

  return (
    <section className="contact" id="kontakt">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Kostenlos und unverbindlich anfragen</h2>
          <address>
            <strong>{site.name}</strong>
            <span>{site.owner}</span>
            <span>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </span>
          </address>
          <ul className="contact-links">
            {channels.map((item) => {
              const body = (
                <>
                  <Icon name={item.icon} />
                  <span>
                    <strong>{item.label}</strong>
                    {item.value}
                  </span>
                </>
              );
              return (
                <li key={`${item.label}-${item.value}`}>
                  {item.href ? (
                    <a href={item.href} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {body}
                    </a>
                  ) : (
                    <span className="channel">{body}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <figure className="qr-block">
            <img src="/qr-website.svg" width={168} height={168} alt="QR-Code zur Website von RL Gartenservice" />
            <figcaption>
              Website entdecken
              <span>{site.url.replace("https://", "")}</span>
            </figcaption>
          </figure>
        </div>

        <form className="inquiry" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              maxLength={LIMITS.nameMax}
              value={values.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              onChange={(event) => setValues({ ...values, name: event.target.value })}
            />
            {errors.name ? <p id="name-error">{errors.name}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="contact">Telefonnummer oder E-Mail</label>
            <input
              id="contact"
              name="contact"
              autoComplete="tel"
              maxLength={LIMITS.contactMax}
              value={values.contact}
              aria-invalid={Boolean(errors.contact)}
              aria-describedby={errors.contact ? "contact-error" : undefined}
              onChange={(event) => setValues({ ...values, contact: event.target.value })}
            />
            {errors.contact ? <p id="contact-error">{errors.contact}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="service">Gewünschte Dienstleistung</label>
            <select
              id="service"
              name="service"
              value={values.service}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
              onChange={(event) => setValues({ ...values, service: event.target.value })}
            >
              <option value="">Bitte auswählen</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service ? <p id="service-error">{errors.service}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="place">Ort / Postleitzahl</label>
            <input
              id="place"
              name="place"
              autoComplete="postal-code"
              maxLength={LIMITS.placeMax}
              value={values.place}
              aria-invalid={Boolean(errors.place)}
              aria-describedby={errors.place ? "place-error" : undefined}
              onChange={(event) => setValues({ ...values, place: event.target.value })}
            />
            {errors.place ? <p id="place-error">{errors.place}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="message">Nachricht</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={LIMITS.messageMax}
              value={values.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onChange={(event) => setValues({ ...values, message: event.target.value })}
            />
            {errors.message ? <p id="message-error">{errors.message}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="photos">Fotos hochladen</label>
            <input
              id="photos"
              name="photos"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              aria-invalid={Boolean(errors.photos)}
              aria-describedby={errors.photos ? "photos-error photos-hint" : "photos-hint"}
            />
            <p id="photos-hint">Optional. Bis zu 5 Fotos, JPG, PNG oder WEBP, jeweils höchstens 8 MB.</p>
            {errors.photos ? <p id="photos-error">{errors.photos}</p> : null}
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor="companyWebsite">Website</label>
            <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" />
          </div>
          <button className="button button-gold" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status === "success" || status === "error" ? message : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
