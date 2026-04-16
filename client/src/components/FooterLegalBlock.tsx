import { Link } from "wouter";
import { Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getFooterLegal } from "@/lib/footerLegalI18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { PaymentMethodLogosRow } from "@/components/PaymentMethodLogos";

const itemShell =
  "!border-0 mb-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 shadow-none backdrop-blur-sm transition-colors data-[state=open]:border-white/15 data-[state=open]:bg-white/[0.07]";

export default function FooterLegalBlock() {
  const { currentLanguage } = useLanguage();
  const L = getFooterLegal(currentLanguage);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#07070b] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6">
      <h3 className="text-lg font-semibold tracking-tight text-white/95">{L.sectionTitle}</h3>

      <Accordion type="single" collapsible className="mt-4 w-full space-y-2">
        <AccordionItem value="agb" className={itemShell}>
          <AccordionTrigger
            showChevron={false}
            className={cn(
              "py-3.5 text-left text-sm font-medium text-white/90 hover:no-underline hover:text-white",
              "[&[data-state=open]>svg]:rotate-45",
            )}
          >
            <span className="pr-3">{L.agb.title}</span>
            <Plus className="h-4 w-4 shrink-0 text-white/45 transition-transform duration-200" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="text-sm text-white/65">
            <p className="leading-relaxed">{L.agb.body}</p>
            <p className="mt-3">
              <Link href="/terms" className="font-semibold text-emerald-400/95 underline-offset-2 hover:text-emerald-300 hover:underline">
                {L.agb.linkLabel}
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="widerruf" className={itemShell}>
          <AccordionTrigger
            showChevron={false}
            className={cn(
              "py-3.5 text-left text-sm font-medium text-white/90 hover:no-underline hover:text-white",
              "[&[data-state=open]>svg]:rotate-45",
            )}
          >
            <span className="pr-3">{L.widerruf.title}</span>
            <Plus className="h-4 w-4 shrink-0 text-white/45 transition-transform duration-200" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="text-sm text-white/65">
            <p className="leading-relaxed">{L.widerruf.body}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="kleinunternehmer" className={itemShell}>
          <AccordionTrigger
            showChevron={false}
            className={cn(
              "py-3.5 text-left text-sm font-medium text-white/90 hover:no-underline hover:text-white",
              "[&[data-state=open]>svg]:rotate-45",
            )}
          >
            <span className="pr-3">{L.kleinunternehmer.title}</span>
            <Plus className="h-4 w-4 shrink-0 text-white/45 transition-transform duration-200" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="text-sm text-white/65">
            <p className="leading-relaxed">{L.kleinunternehmer.body}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq" className={itemShell}>
          <AccordionTrigger
            showChevron={false}
            className={cn(
              "py-3.5 text-left text-sm font-medium text-white/90 hover:no-underline hover:text-white",
              "[&[data-state=open]>svg]:rotate-45",
            )}
          >
            <span className="pr-3">{L.faq.title}</span>
            <Plus className="h-4 w-4 shrink-0 text-white/45 transition-transform duration-200" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="text-sm text-white/65">
            <p className="leading-relaxed">{L.faq.body}</p>
            <p className="mt-3">
              <Link href="/contact" className="font-semibold text-emerald-400/95 underline-offset-2 hover:text-emerald-300 hover:underline">
                {L.contactLink}
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8 border-t border-white/10 pt-7 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">{L.paymentLabel}</p>
        <div className="mt-5">
          <PaymentMethodLogosRow />
        </div>
      </div>
    </div>
  );
}
