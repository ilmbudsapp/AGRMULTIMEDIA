import { Link } from "wouter";
import { Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getFooterLegal } from "@/lib/footerLegalI18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function FooterLegalBlock() {
  const { currentLanguage } = useLanguage();
  const L = getFooterLegal(currentLanguage);

  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-100 p-5 text-neutral-900 shadow-inner sm:p-6">
      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">{L.sectionTitle}</h3>

      <Accordion type="single" collapsible className="mt-4 w-full space-y-2">
        <AccordionItem
          value="agb"
          className="!border-0 mb-2 rounded-xl border border-neutral-200 bg-white px-4 shadow-sm data-[state=open]:shadow-md"
        >
          <AccordionTrigger
            showChevron={false}
            className={cn(
              "py-3.5 text-left text-sm font-medium text-neutral-900 hover:no-underline",
              "[&[data-state=open]>svg]:rotate-45",
            )}
          >
            <span className="pr-3">{L.agb.title}</span>
            <Plus className="h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-200" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="text-sm text-neutral-600">
            <p className="leading-relaxed">{L.agb.body}</p>
            <p className="mt-3">
              <Link href="/terms" className="font-semibold text-emerald-800 underline-offset-2 hover:underline">
                {L.agb.linkLabel}
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="widerruf"
          className="!border-0 mb-2 rounded-xl border border-neutral-200 bg-white px-4 shadow-sm data-[state=open]:shadow-md"
        >
          <AccordionTrigger
            showChevron={false}
            className={cn(
              "py-3.5 text-left text-sm font-medium text-neutral-900 hover:no-underline",
              "[&[data-state=open]>svg]:rotate-45",
            )}
          >
            <span className="pr-3">{L.widerruf.title}</span>
            <Plus className="h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-200" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="text-sm text-neutral-600">
            <p className="leading-relaxed">{L.widerruf.body}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="kleinunternehmer"
          className="!border-0 mb-2 rounded-xl border border-neutral-200 bg-white px-4 shadow-sm data-[state=open]:shadow-md"
        >
          <AccordionTrigger
            showChevron={false}
            className={cn(
              "py-3.5 text-left text-sm font-medium text-neutral-900 hover:no-underline",
              "[&[data-state=open]>svg]:rotate-45",
            )}
          >
            <span className="pr-3">{L.kleinunternehmer.title}</span>
            <Plus className="h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-200" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="text-sm text-neutral-600">
            <p className="leading-relaxed">{L.kleinunternehmer.body}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="faq"
          className="!border-0 mb-2 rounded-xl border border-neutral-200 bg-white px-4 shadow-sm data-[state=open]:shadow-md"
        >
          <AccordionTrigger
            showChevron={false}
            className={cn(
              "py-3.5 text-left text-sm font-medium text-neutral-900 hover:no-underline",
              "[&[data-state=open]>svg]:rotate-45",
            )}
          >
            <span className="pr-3">{L.faq.title}</span>
            <Plus className="h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-200" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="text-sm text-neutral-600">
            <p className="leading-relaxed">{L.faq.body}</p>
            <p className="mt-3">
              <Link href="/contact" className="font-semibold text-emerald-800 underline-offset-2 hover:underline">
                {L.contactLink}
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8 border-t border-neutral-200 pt-6 text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{L.paymentLabel}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {(
            [
              { key: "visa", label: "VISA" },
              { key: "mc", label: "Mastercard" },
              { key: "pp", label: "PayPal" },
              { key: "sepa", label: L.paymentSepa },
            ] as const
          ).map((m) => (
            <div
              key={m.key}
              className="flex min-h-[40px] min-w-[88px] items-center justify-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold tracking-wide text-neutral-800 shadow-sm"
            >
              {m.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
