import { useLanguage } from "@/contexts/LanguageContext";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { tSpec } = useLanguage();
  const cards = [
    tSpec.testimonials.card1,
    tSpec.testimonials.card2,
    tSpec.testimonials.card3,
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {tSpec.testimonials.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <blockquote
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <Quote className="w-10 h-10 text-white/30 mb-4" />
              <p className="text-gray-300 leading-relaxed mb-6">&ldquo;{card.quote}&rdquo;</p>
              <footer>
                <p className="font-semibold text-white">{card.author}</p>
                <p className="text-sm text-gray-500">{card.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
