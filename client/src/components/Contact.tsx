import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE = "+49 155 67204598";
const PHONE_LINK = "tel:+4915567204598";
const EMAIL = "agron6922@gmail.com";
const EMAIL_LINK = "mailto:agron6922@gmail.com";

export default function Contact() {
  const { t } = useLanguage();
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contact.info.location)}`;

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-electric-blue font-semibold text-sm uppercase tracking-[0.2em] mb-3">
          {t.nav.contact}
        </p>
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          data-testid="contact-title"
        >
          {t.contact.title}
        </h2>
        <p
          className="text-xl text-gray-300 mb-8"
          data-testid="contact-subtitle"
        >
          {t.contact.subtitle}
        </p>

        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          {t.contact.instruction}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center items-center">
          <a
            href={EMAIL_LINK}
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 justify-center lg:justify-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            data-testid="contact-email"
          >
            <div className="bg-electric-blue/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-electric-blue/30 transition-colors">
              <Mail className="text-electric-blue w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                {t.contact.info.email}
              </p>
              <p className="text-white font-bold text-sm sm:text-lg whitespace-nowrap">{EMAIL}</p>
            </div>
          </a>

          <a
            href={PHONE_LINK}
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 w-full sm:w-auto justify-center sm:justify-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            data-testid="contact-phone"
          >
            <div className="bg-electric-blue/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-electric-blue/30 transition-colors">
              <Phone className="text-electric-blue w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                {t.contact.info.phone}
              </p>
              <p className="text-white font-bold text-sm sm:text-lg whitespace-nowrap">{PHONE}</p>
            </div>
          </a>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 w-full sm:w-auto justify-center sm:justify-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            data-testid="contact-location"
          >
            <div className="bg-electric-blue/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-electric-blue/30 transition-colors">
              <MapPin className="text-electric-blue w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                {t.contact.info.title}
              </p>
              <p className="text-white font-bold text-sm sm:text-lg whitespace-nowrap">{t.contact.info.location}</p>
            </div>
          </a>
        </div>
        {t.contact.form?.trustLine && (
          <div className="mt-8">
            <p className="text-gray-500 text-sm" data-testid="contact-trust-line">
              {t.contact.form.trustLine}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
