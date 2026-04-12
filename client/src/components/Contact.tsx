import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { getEmailJsErrorMessage, isEmailJsConfigured, sendContactViaEmailJs } from "@/lib/emailjsContact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

gsap.registerPlugin(ScrollTrigger);

const PHONE = PHONE_DISPLAY;
const PHONE_LINK = `tel:${PHONE_TEL}`;
const EMAIL = "agron6922@gmail.com";
const EMAIL_LINK = "mailto:agron6922@gmail.com";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t, currentLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contact.info.location)}`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

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

  function clearSuccessOnEdit() {
    if (submitState === "success") setSubmitState("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFeedback(null);

    const n = name.trim();
    const em = email.trim();
    const msg = message.trim();
    if (!n || !em || !msg) {
      setSubmitState("error");
      setFeedback(t.contact.error.validation);
      return;
    }

    if (!isEmailJsConfigured()) {
      setSubmitState("error");
      setFeedback(t.contact.error.emailjsMissing);
      return;
    }

    setSubmitState("loading");
    try {
      await sendContactViaEmailJs({
        fromName: n,
        fromEmail: em,
        message: msg,
        subject: t.contact.form.emailSubject,
      });
      setSubmitState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setSubmitState("error");
      const detail = getEmailJsErrorMessage(err);
      setFeedback(`${t.contact.error.description} (${detail})`);
      if (import.meta.env.DEV) console.error("[EmailJS]", err);
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="scroll-mt-24 py-20 md:py-28 bg-[#06060d] border-t border-white/[0.06]">
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

        <form
          onSubmit={handleSubmit}
          className="contact-reveal text-left max-w-xl mx-auto mb-14 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-5 py-6 sm:px-8 sm:py-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
          noValidate
          data-testid="contact-form"
        >
          <h3 className="text-lg font-semibold text-white mb-1">{t.contact.form.title}</h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">{t.contact.form.intro}</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="text-gray-300">
                {t.contact.form.name}
              </Label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  clearSuccessOnEdit();
                  setName(e.target.value);
                }}
                disabled={submitState === "loading"}
                className="border-white/15 bg-[#0a0a12] text-white placeholder:text-gray-500 focus-visible:ring-violet-500/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email" className="text-gray-300">
                {t.contact.form.email}
              </Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  clearSuccessOnEdit();
                  setEmail(e.target.value);
                }}
                disabled={submitState === "loading"}
                className="border-white/15 bg-[#0a0a12] text-white placeholder:text-gray-500 focus-visible:ring-violet-500/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message" className="text-gray-300">
                {t.contact.form.message}
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => {
                  clearSuccessOnEdit();
                  setMessage(e.target.value);
                }}
                disabled={submitState === "loading"}
                className="min-h-[120px] resize-y border-white/15 bg-[#0a0a12] text-white placeholder:text-gray-500 focus-visible:ring-violet-500/50"
              />
            </div>
          </div>

          {submitState === "success" && (
            <div
              className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100"
              role="status"
              data-testid="contact-form-success"
            >
              <p className="font-medium text-emerald-50">{t.contact.success.title}</p>
              <p className="mt-1 text-emerald-100/90">{t.contact.success.description}</p>
            </div>
          )}

          {submitState === "error" && feedback && (
            <div
              className="mt-5 rounded-xl border border-red-500/35 bg-red-500/10 px-4 py-3 text-sm text-red-100"
              role="alert"
              data-testid="contact-form-error"
            >
              <p className="font-medium text-red-50">{t.contact.error.title}</p>
              <p className="mt-1 text-red-100/90">{feedback}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitState === "loading"}
            className="mt-6 w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-violet-500 disabled:opacity-60"
          >
            {submitState === "loading" ? (
              <span className="inline-flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                {t.contact.form.sending}
              </span>
            ) : (
              t.contact.form.submit
            )}
          </button>
        </form>

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

        <div className="mt-10 contact-reveal">
          <p className="text-gray-500 text-sm" data-testid="contact-trust-line">
            {t.contact.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
