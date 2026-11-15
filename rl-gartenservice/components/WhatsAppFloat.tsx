import { site } from "@/content/site";
import { Icon } from "@/components/Icons";

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={site.whatsappUrl}
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${site.whatsappDisplay}`}
    >
      <span className="wa-spin" aria-hidden="true" />
      <Icon name="whatsapp" />
    </a>
  );
}
