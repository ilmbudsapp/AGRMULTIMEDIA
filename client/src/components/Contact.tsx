import { Phone, Mail, MapPin } from "lucide-react";
import { useCallback, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "+49 155 67204598";
const PHONE_LINK = "tel:+4915567204598";
const EMAIL = "agron6922@gmail.com";
const EMAIL_LINK = "mailto:agron6922@gmail.com";

export default function Contact() {
  const { t, currentLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contact.info.location)}`;

  const runReveal = useCallback(() => {
    const root = sectionRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    return gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 40,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      });
    }, root);
  }, []);

  useLayoutEffect(() => {
    const ctx = runReveal();
    return () => ctx?.revert();
  }, [runReveal, currentLanguage]);

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="contact-reveal text-electric-blue font-semibold text-sm uppercase tracking-[0.2em] mb-3">
          {t.nav.contact}
        </p>
        <h2
          className="contact-reveal text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          data-testid="contact-title"
        >
          {t.contact.title}
        </h2>
        <p
          className="contact-reveal text-xl text-gray-300 mb-8"
          data-testid="contact-subtitle"
        >
          {t.contact.subtitle}
        </p>

        <p className="contact-reveal text-gray-400 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          {t.contact.instruction}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center items-center">
          <a
            href={EMAIL_LINK}
            className="contact-reveal w-full flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 justify-center lg:justify-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            data-testid="contact-email"
          >
            <div className="bg-electric-blue/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-electric-blue/30 transition-colors">
              <Mail className="text-electric-blue w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                {t.contact.info.email}
              </p>
              <p className="text-white font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                {EMAIL}
              </p>
            </div>
          </a>

          <a
            href={PHONE_LINK}
            className="contact-reveal w-full flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 justify-center sm:justify-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            data-testid="contact-phone"
          >
            <div className="bg-electric-blue/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-electric-blue/30 transition-colors">
              <Phone className="text-electric-blue w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                {t.contact.info.phone}
              </p>
              <p className="text-white font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                {PHONE}
              </p>
            </div>
          </a>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-reveal w-full flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 justify-center sm:justify-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            data-testid="contact-location"
          >
            <div className="bg-electric-blue/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-electric-blue/30 transition-colors">
              <MapPin className="text-electric-blue w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                {t.contact.info.title}
              </p>
              <p className="text-white font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                {t.contact.info.location}
              </p>
            </div>
          </a>
        </div>
        {t.contact.form?.trustLine && (
          <div className="mt-8 contact-reveal">
            <p className="text-gray-500 text-sm" data-testid="contact-trust-line">
              {t.contact.form.trustLine}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
