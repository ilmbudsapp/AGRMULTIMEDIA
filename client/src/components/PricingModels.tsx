import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type PricingCard = {
  title: string;
  price: string;
  subtext: string;
  extraLine?: string;
  description: string;
  points: string[];
};

type PricingCopy = {
  heading: string;
  supporting: string;
  cardOne: PricingCard;
  cardTwo: PricingCard;
  cta: string;
  note: string;
};

const COPY: Record<string, PricingCopy> = {
  en: {
    heading: "2 Ways to Get Your Website",
    supporting: "Choose the model that best fits your budget and your business.",
    cardOne: {
      title: "One-Time Website",
      price: "From €500",
      subtext: "+ €30/month maintenance",
      description:
        "Ideal for businesses that want a professionally created website with low ongoing monthly costs.",
      points: [
        "Custom website design",
        "Mobile responsive layout",
        "Basic SEO setup",
        "Monthly maintenance",
        "2 small updates included per month",
        "Domain paid separately",
      ],
    },
    cardTwo: {
      title: "Website Subscription",
      price: "€59.99/month",
      subtext: "+ one-time domain payment",
      extraLine: "12-month contract",
      description:
        "Ideal for businesses that want a lower upfront cost and prefer to pay monthly under a yearly agreement.",
      points: [
        "Professional website",
        "Ongoing support",
        "Technical updates",
        "2 small updates included per month",
        "Domain paid separately",
      ],
    },
    cta: "ORDER YOUR WEBSITE",
    note: "Hosting, extra features, and custom extensions can be discussed individually if needed.",
  },
  de: {
    heading: "2 Wege zu Ihrer Website",
    supporting: "Wählen Sie das Modell, das am besten zu Ihrem Budget und Ihrem Unternehmen passt.",
    cardOne: {
      title: "Website als Einmalzahlung",
      price: "Ab 500 €",
      subtext: "+ 30 €/Monat Wartung",
      description:
        "Ideal für Unternehmen, die eine professionell erstellte Website mit niedrigen laufenden Monatskosten möchten.",
      points: [
        "Individuelles Webdesign",
        "Mobile-optimiertes Layout",
        "Grundlegendes SEO-Setup",
        "Monatliche Wartung",
        "2 kleine Updates pro Monat inklusive",
        "Domain wird separat bezahlt",
      ],
    },
    cardTwo: {
      title: "Website im Abo",
      price: "59,99 €/Monat",
      subtext: "+ einmalige Domain-Zahlung",
      extraLine: "12-Monats-Vertrag",
      description:
        "Ideal für Unternehmen, die mit niedrigeren Startkosten arbeiten und monatlich im Jahresvertrag zahlen möchten.",
      points: [
        "Professionelle Website",
        "Laufender Support",
        "Technische Updates",
        "2 kleine Updates pro Monat inklusive",
        "Domain wird separat bezahlt",
      ],
    },
    cta: "WEBSITE JETZT BEAUFTRAGEN",
    note: "Hosting, Zusatzfunktionen und individuelle Erweiterungen können bei Bedarf separat abgestimmt werden.",
  },
  it: {
    heading: "2 modi per avere il tuo sito web",
    supporting: "Scegli il modello più adatto al tuo budget e alla tua attività.",
    cardOne: {
      title: "Sito web una tantum",
      price: "Da 500 €",
      subtext: "+ 30 €/mese manutenzione",
      description:
        "Ideale per attività che vogliono un sito professionale con costi mensili continuativi contenuti.",
      points: [
        "Design sito personalizzato",
        "Layout responsive per mobile",
        "Setup SEO di base",
        "Manutenzione mensile",
        "2 piccoli aggiornamenti inclusi al mese",
        "Dominio pagato separatamente",
      ],
    },
    cardTwo: {
      title: "Abbonamento sito web",
      price: "59,99 €/mese",
      subtext: "+ pagamento dominio una tantum",
      extraLine: "Contratto di 12 mesi",
      description:
        "Ideale per attività che preferiscono un costo iniziale più basso e un pagamento mensile con accordo annuale.",
      points: [
        "Sito web professionale",
        "Supporto continuo",
        "Aggiornamenti tecnici",
        "2 piccoli aggiornamenti inclusi al mese",
        "Dominio pagato separatamente",
      ],
    },
    cta: "ORDINA IL TUO SITO WEB",
    note: "Hosting, funzionalità extra ed estensioni personalizzate possono essere concordati in base alle esigenze.",
  },
  sr: {
    heading: "2 načina da dobijete svoj web sajt",
    supporting: "Izaberite model koji najbolje odgovara vašem budžetu i vašem biznisu.",
    cardOne: {
      title: "Web sajt - jednokratno plaćanje",
      price: "Od 500 €",
      subtext: "+ 30 €/mesečno održavanje",
      description:
        "Idealno za biznise koji žele profesionalno izrađen web sajt uz niske tekuće mesečne troškove.",
      points: [
        "Prilagođen dizajn web sajta",
        "Mobile responsive raspored",
        "Osnovni SEO setup",
        "Mesečno održavanje",
        "2 male izmene mesečno uključene",
        "Domen se plaća odvojeno",
      ],
    },
    cardTwo: {
      title: "Pretplata za web sajt",
      price: "59.99 €/mesečno",
      subtext: "+ jednokratno plaćanje domena",
      extraLine: "Ugovor na 12 meseci",
      description:
        "Idealno za biznise koji žele manji početni trošak i preferiraju mesečno plaćanje kroz godišnji dogovor.",
      points: [
        "Profesionalan web sajt",
        "Kontinuirana podrška",
        "Tehnička ažuriranja",
        "2 male izmene mesečno uključene",
        "Domen se plaća odvojeno",
      ],
    },
    cta: "NARUČITE SVOJ WEB SAJT",
    note: "Hosting, dodatne funkcije i prilagođena proširenja mogu se dogovoriti individualno po potrebi.",
  },
  al: {
    heading: "2 mënyra për të marrë faqen tuaj web",
    supporting: "Zgjidhni modelin që i përshtatet më mirë buxhetit dhe biznesit tuaj.",
    cardOne: {
      title: "Faqe web me pagesë të vetme",
      price: "Nga 500 €",
      subtext: "+ 30 €/muaj mirëmbajtje",
      description:
        "Ideale për biznese që duan një faqe profesionale me kosto mujore të ulët në vazhdim.",
      points: [
        "Dizajn i personalizuar i faqes",
        "Strukturë responsive për mobile",
        "SEO bazë i konfiguruar",
        "Mirëmbajtje mujore",
        "2 përditësime të vogla të përfshira në muaj",
        "Domeni paguhet veçmas",
      ],
    },
    cardTwo: {
      title: "Abonim për faqe web",
      price: "59.99 €/muaj",
      subtext: "+ pagesë njëherëshe për domenin",
      extraLine: "Kontratë 12-mujore",
      description:
        "Ideale për biznese që duan kosto fillestare më të ulët dhe preferojnë pagesë mujore me marrëveshje vjetore.",
      points: [
        "Faqe web profesionale",
        "Mbështetje e vazhdueshme",
        "Përditësime teknike",
        "2 përditësime të vogla të përfshira në muaj",
        "Domeni paguhet veçmas",
      ],
    },
    cta: "POROSIT FAQEN TUAJ WEB",
    note: "Hosting-u, funksionet shtesë dhe zgjerimet e personalizuara mund të diskutohen veçmas sipas nevojës.",
  },
};

export default function PricingModels() {
  const { currentLanguage } = useLanguage();
  const copy = COPY[currentLanguage] ?? COPY.en;

  const cards = [copy.cardOne, copy.cardTwo];

  return (
    <section id="pricing-models" className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{copy.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">{copy.supporting}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="premium-card flex h-full flex-col rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white md:text-2xl">{card.title}</h3>
              <p className="mt-4 text-4xl font-bold tracking-tight text-blue-200 md:text-5xl">{card.price}</p>
              <p className="mt-2 text-sm font-medium text-white/70">{card.subtext}</p>
              {card.extraLine ? <p className="mt-1 text-xs uppercase tracking-[0.1em] text-blue-300/85">{card.extraLine}</p> : null}
              <p className="mt-5 text-sm leading-relaxed text-white/75 md:text-base">{card.description}</p>

              <ul className="mt-6 space-y-2.5">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-blue-300" />
                    <span className="text-sm text-white/85 md:text-[0.95rem]">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="premium-button inline-flex px-8 py-3 text-sm font-semibold tracking-[0.08em] text-white transition duration-200 hover:scale-[1.03] md:text-base"
          >
            {copy.cta}
          </a>
          <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-white/65 md:text-sm">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
