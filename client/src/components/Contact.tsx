import { Phone, Mail, MapPin } from "lucide-react";
import { useCallback, useLayoutEffect, useRef, useState, FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "+49 155 67204598";
const PHONE_LINK = "tel:+4915567204598";
const EMAIL = "agron6922@gmail.com";
const EMAIL_LINK = "mailto:agron6922@gmail.com";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t, currentLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const formBlockRef = useRef<HTMLDivElement>(null);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contact.info.location)}`;

  const form = t.contact.form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

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

      const formRoot = formBlockRef.current;
      if (formRoot) {
        gsap.from(".contact-form-reveal", {
          opacity: 0,
          y: 32,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRoot,
            start: "top 88%",
            once: true,
          },
        });
      }
    }, root);
  }, []);

  useLayoutEffect(() => {
    const ctx = runReveal();
    return () => ctx?.revert();
  }, [runReveal, currentLanguage, form]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form) return;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: t.contact.title,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-[#06060d]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="contact-reveal text-violet-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
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
            className="contact-reveal contact-glass-card w-full flex items-center gap-4 rounded-2xl px-6 py-4 justify-center lg:justify-start group"
            data-testid="contact-email"
          >
            <div className="bg-violet-500/15 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors border border-violet-400/20">
              <Mail className="text-violet-300 w-5 h-5" />
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
            className="contact-reveal contact-glass-card w-full flex items-center gap-4 rounded-2xl px-6 py-4 justify-center sm:justify-start group"
            data-testid="contact-phone"
          >
            <div className="bg-violet-500/15 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors border border-violet-400/20">
              <Phone className="text-violet-300 w-5 h-5" />
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
            className="contact-reveal contact-glass-card w-full flex items-center gap-4 rounded-2xl px-6 py-4 justify-center sm:justify-start group sm:col-span-2 lg:col-span-1"
            data-testid="contact-location"
          >
            <div className="bg-violet-500/15 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors border border-violet-400/20">
              <MapPin className="text-violet-300 w-5 h-5" />
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

        {form && (
          <div ref={formBlockRef} id="contact-form-block" className="mt-16 text-left max-w-xl mx-auto">
            <h3 className="contact-form-reveal text-xl font-bold text-white text-center mb-6">{form.title}</h3>
            <form onSubmit={onSubmit} className="contact-glass-panel rounded-2xl p-6 md:p-8 space-y-5 border border-white/10">
              <div className="contact-form-reveal">
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  {form.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={form.namePlaceholder}
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                />
              </div>
              <div className="contact-form-reveal">
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  {form.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={form.emailPlaceholder}
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                />
              </div>
              <div className="contact-form-reveal">
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  {form.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={form.messagePlaceholder}
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-y min-h-[120px]"
                />
              </div>
              <div className="contact-form-reveal flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto rounded-xl bg-white text-[#0a0a0f] px-8 py-3.5 font-bold hover:bg-violet-100 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? form.sending : form.submit}
                </button>
                {status === "success" && (
                  <p className="text-emerald-400 text-sm font-medium">{t.contact.success.title}</p>
                )}
                {status === "error" && (
                  <p className="text-rose-400 text-sm font-medium">{t.contact.error.validation}</p>
                )}
              </div>
            </form>
          </div>
        )}

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
