import { Contact } from "@/components/Contact";
import { simpleMetadata } from "@/lib/page-meta";
import { site } from "@/content/site";

export const metadata = simpleMetadata(
  "Kontakt",
  `Kostenlos und unverbindlich anfragen bei ${site.name} in ${site.address.city}. Telefon ${site.phoneDisplay}.`,
  "/kontakt",
);

export default function ContactPage() {
  return (
    <main id="inhalt">
      <Contact />
    </main>
  );
}
