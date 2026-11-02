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

type ContactProps = {
  /** When true (dedicated /contact route), main heading is H1; on home, H2 under hero H1. */
  asPage?: boolean;
};

export default function Contact({ asPage = false }: ContactProps) {
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
    <section ref={sectionRef} id="contact" className="scroll-mt-24 py-20 md:py-28 bg-[var(--studio-bg)] border-t border-[var(--studio-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="contact-reveal text-[var(--studio-accent)] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
          {t.nav.contact}
        </p>
        {asPage ? (
          <h1
            className="contact-reveal mb-4 font-display text-4xl font-medium tracking-tight text-[var(--studio-text)] md:text-5xl"
            data-testid="contact-title"
          >
            {t.contact.title}
          </h1>
        ) : (
          <h2
            className="contact-reveal mb-4 font-display text-4xl font-medium tracking-tight text-[var(--studio-text)] md:text-5xl"
            data-testid="contact-title"
          >
            {t.contact.title}
          </h2>
        )}
        <p
          className="contact-reveal mb-8 font-display text-xl text-[var(--studio-muted)]"
          data-testid="contact-subtitle"
        >
          {t.contact.subtitle}
        </p>

        <p className="contact-reveal mx-auto mb-12 max-w-xl text-base leading-relaxed text-[var(--studio-muted)] md:text-lg">
          {t.contact.instruction}
        </p>

        <form
          onSubmit={handleSubmit}
          className="contact-reveal premium-card mx-auto mb-14 max-w-xl px-5 py-6 text-left sm:px-8 sm:py-8"
          noValidate
          data-testid="contact-form"
        >
          <h3 className="text-lg font-semibold text-[var(--studio-text)] mb-1">{t.contact.form.title}</h3>
          <p className="mb-6 text-sm leading-relaxed text-[var(--studio-muted)]">{t.contact.form.intro}</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="text-[var(--studio-muted)]">
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
                className="border-[var(--studio-border)] bg-[#f7f2ea] text-[var(--studio-text)] placeholder:text-[var(--studio-muted)] focus-visible:ring-[var(--studio-accent)]/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email" className="text-[var(--studio-muted)]">
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
                className="border-[var(--studio-border)] bg-[#f7f2ea] text-[var(--studio-text)] placeholder:text-[var(--studio-muted)] focus-visible:ring-[var(--studio-accent)]/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message" className="text-[var(--studio-muted)]">
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
                className="min-h-[120px] resize-y border-[var(--studio-border)] bg-[#f7f2ea] text-[var(--studio-text)] placeholder:text-[var(--studio-muted)] focus-visible:ring-[var(--studio-accent)]/40"
              />
            </div>
          </div>

          {submitState === "success" && (
            <div
              className="mt-5 rounded-xl border border-emerald-700/25 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
              role="status"
              data-testid="contact-form-success"
            >
              <p className="font-medium text-emerald-900">{t.contact.success.title}</p>
              <p className="mt-1 text-emerald-800">{t.contact.success.description}</p>
            </div>
          )}

          {submitState === "error" && feedback && (
            <div
              className="mt-5 rounded-xl border border-red-700/25 bg-red-50 px-4 py-3 text-sm text-red-900"
              role="alert"
              data-testid="contact-form-error"
            >
              <p className="font-medium text-red-900">{t.contact.error.title}</p>
              <p className="mt-1 text-red-800">{feedback}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitState === "loading"}
            className="premium-cta mt-6 w-full rounded-full px-4 py-3 text-sm font-semibold disabled:opacity-60"
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
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--studio-border)] bg-[#f7f2ea] transition-colors group-hover:border-[var(--studio-accent)]">
              <Mail className="text-[var(--studio-accent)] w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--studio-muted)]">
                {t.contact.info.email}
              </p>
              <p className="text-[var(--studio-text)] font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                {EMAIL}
              </p>
            </div>
          </a>

          <a
            href={PHONE_LINK}
            className="contact-reveal contact-glass-card w-full flex items-center gap-4 rounded-2xl px-6 py-4 justify-center sm:justify-start group"
            data-testid="contact-phone"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--studio-border)] bg-[#f7f2ea] transition-colors group-hover:border-[var(--studio-accent)]">
              <Phone className="text-[var(--studio-accent)] w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--studio-muted)]">
                {t.contact.info.phone}
              </p>
              <p className="text-[var(--studio-text)] font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">
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
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--studio-border)] bg-[#f7f2ea] transition-colors group-hover:border-[var(--studio-accent)]">
              <MapPin className="text-[var(--studio-accent)] w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--studio-muted)]">
                {t.contact.info.title}
              </p>
              <p className="text-[var(--studio-text)] font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                {t.contact.info.location}
              </p>
            </div>
          </a>
        </div>

        <div className="mt-10 contact-reveal">
          <p className="text-sm text-[var(--studio-muted)]" data-testid="contact-trust-line">
            {t.contact.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
