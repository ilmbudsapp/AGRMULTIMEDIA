import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
const EMAIL = "agron6922@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}`;
const WHATSAPP_PHONE = "+4915567204598";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}`;

export default function FinalCta() {
  const { tSpec } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {tSpec.finalCta.title}
        </h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          {tSpec.finalCta.text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          <a href={EMAIL_LINK} className="w-full sm:w-auto">
            <button className="bg-white text-[#0a0a0f] px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white/90 transition-all duration-300 w-full sm:w-auto">
              {tSpec.finalCta.button}
            </button>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="bg-white/5 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all duration-300 border border-white/10 w-full sm:w-auto">
              WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
