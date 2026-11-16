import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/Icons";
import { site, socials } from "@/content/site";

export function Contact() {
  const query = `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.country}`;
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&hl=de&output=embed`;
  const route = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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

  return (
    <section className="contact" id="kontakt">
      <div className="contact-grid">
        <div data-reveal="card">
          <div className="contact-panel card-motion">
            <p className="eyebrow">Kontakt</p>
            <h1>Kostenlos und unverbindlich anfragen</h1>
            <address>
              <Icon name="pin" className="contact-icon" />
              <span>
                <strong>{site.name}</strong>
                <span>{site.owner}</span>
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </span>
            </address>
            <ul className="contact-links">
              {channels.map((item) => {
                const body = (
                  <>
                    <Icon name={item.icon} className="contact-icon" />
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
        </div>

        <div data-reveal="card" style={{ "--d": "160ms" } as CSSProperties}>
          <div className="map-panel card-motion">
            <iframe
              title={`Karte: ${site.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`}
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p className="map-note">
              <a href={route}>Route in Google Maps öffnen</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
