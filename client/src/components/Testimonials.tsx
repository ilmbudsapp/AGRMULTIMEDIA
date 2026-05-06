import { useLanguage } from "@/contexts/LanguageContext";

type TestimonialItem = {
  quote: string;
  name: string;
  business: string;
};

type TestimonialCopy = {
  heading: string;
  items: TestimonialItem[];
};

const COPY: Record<string, TestimonialCopy> = {
  en: {
    heading: "What Clients Say",
    items: [
      {
        quote:
          "Very professional and fast work. The website looks modern and helped us get more local customers.",
        name: "Shopping Deals",
        business: "Local Business Owner",
      },
      {
        quote:
          "Great communication and clean design. Everything was delivered exactly as agreed.",
        name: "theirrealmtv CAT",
        business: "Small Business Owner",
      },
      {
        quote:
          "Highly recommend for anyone who needs a modern website. Simple process and great result.",
        name: "Lendita Ademi",
        business: "Service Business",
      },
    ],
  },
  de: {
    heading: "Was Kunden sagen",
    items: [
      {
        quote:
          "Sehr professionelle und schnelle Arbeit. Die Website sieht modern aus und bringt uns mehr lokale Kunden.",
        name: "Shopping Deals",
        business: "Lokales Unternehmen",
      },
      {
        quote:
          "Sehr gute Kommunikation und sauberes Design. Alles wurde wie vereinbart umgesetzt.",
        name: "theirrealmtv CAT",
        business: "Kleinunternehmer",
      },
      {
        quote:
          "Klare Empfehlung für moderne Websites. Einfacher Ablauf und starkes Ergebnis.",
        name: "Lendita Ademi",
        business: "Dienstleistungsbetrieb",
      },
    ],
  },
  it: {
    heading: "Cosa dicono i clienti",
    items: [
      {
        quote:
          "Lavoro veloce e professionale. Il sito è moderno e ci ha portato più clienti locali.",
        name: "Shopping Deals",
        business: "Attività locale",
      },
      {
        quote:
          "Ottima comunicazione e design pulito. Tutto realizzato come concordato.",
        name: "theirrealmtv CAT",
        business: "Piccola impresa",
      },
      {
        quote:
          "Consigliato per chi vuole un sito moderno. Processo semplice e ottimo risultato.",
        name: "Lendita Ademi",
        business: "Servizi locali",
      },
    ],
  },
  sr: {
    heading: "Šta kažu klijenti",
    items: [
      {
        quote:
          "Profesionalan i brz rad. Web sajt izgleda moderno i doneo nam je više lokalnih klijenata.",
        name: "Shopping Deals",
        business: "Lokalni biznis",
      },
      {
        quote:
          "Odlična komunikacija i čist dizajn. Sve je urađeno kako je dogovoreno.",
        name: "theirrealmtv CAT",
        business: "Mali biznis",
      },
      {
        quote:
          "Preporučujem svima kojima treba moderan web sajt. Jednostavan proces i odličan rezultat.",
        name: "Lendita Ademi",
        business: "Uslužna delatnost",
      },
    ],
  },
  al: {
    heading: "Çfarë thonë klientët",
    items: [
      {
        quote:
          "Punë shumë profesionale dhe e shpejtë. Faqja duket moderne dhe na ka sjellë më shumë klientë lokalë.",
        name: "Shopping Deals",
        business: "Biznes lokal",
      },
      {
        quote:
          "Komunikim i shkëlqyer dhe dizajn i pastër. Gjithçka u realizua sipas marrëveshjes.",
        name: "theirrealmtv CAT",
        business: "Biznes i vogël",
      },
      {
        quote:
          "E rekomandoj për këdo që ka nevojë për një faqe moderne. Proces i thjeshtë dhe rezultat i shkëlqyer.",
        name: "Lendita Ademi",
        business: "Shërbime lokale",
      },
    ],
  },
};

export default function Testimonials() {
  const { currentLanguage } = useLanguage();
  const copy = COPY[currentLanguage] ?? COPY.en;

  return (
    <section id="testimonials" className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">{copy.heading}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.items.map((item, index) => (
            <blockquote key={`${item.name}-${index}`} className="premium-card rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:p-7">
              <p className="text-base leading-relaxed text-white/85">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 text-sm tracking-[0.08em] text-yellow-300/90">★★★★★</p>
              <footer>
                <p className="mt-3 font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/60">{item.business}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
