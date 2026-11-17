import type { CSSProperties } from "react";
import { Crumbs } from "@/components/Crumbs";
import { Icon, type IconName } from "@/components/Icons";
import { SiteMap } from "@/components/SiteMap";
import { site, socials } from "@/content/site";

export function Contact() {
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
            <Crumbs items={[{ href: "/", label: "Startseite" }, { label: "Kontakt" }]} />
            <p className="eyebrow">Kontakt</p>
            <h1>Kontakt in Gersthofen</h1>
            <p className="intro">Kostenlos und unverbindlich anfragen, telefonisch, per WhatsApp oder per E-Mail.</p>
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
          <SiteMap />
        </div>
      </div>
    </section>
  );
}
