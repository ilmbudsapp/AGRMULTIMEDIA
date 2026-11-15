import { site } from "@/content/site";
import { Icon } from "@/components/Icons";

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={site.whatsappUrl} rel="noopener noreferrer" aria-label={`WhatsApp ${site.whatsappDisplay}`}>
      <Icon name="whatsapp" />
    </a>
  );
}
