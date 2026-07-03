import type { ReactNode } from "react";
import { PageHero } from "@/components/Sections";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function LegalLayout({ title, subtitle, children }: Props) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />
      <section className="uhu-section">
        <div className="uhu-container">
          <article className="uhu-legal-prose mx-auto max-w-3xl">{children}</article>
        </div>
      </section>
    </>
  );
}
