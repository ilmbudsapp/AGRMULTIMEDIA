import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function GraphicDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServicePageTemplate
      eyebrow="Service"
      h1="Graphic Design Services for Small Businesses"
      intro="I create brand visuals that make your business look clear, consistent, and professional across print and digital channels."
      overviewTitle="Branding and graphic systems that support real business goals"
      overviewText="Graphic design should not be random decoration. This service focuses on practical brand communication: logo direction, typography, color consistency, and assets you can actually use in daily marketing. The result is a visual identity that helps customers recognize and trust your business."
      deliverablesTitle="What your business gets"
      deliverables={[
        "Logo design or logo refinement based on your market position",
        "Branding system: colors, typography, and core visual rules",
        "Marketing graphics for social media and campaigns",
        "Print-ready business materials (flyers, brochures, cards)",
        "Consistent templates for repeatable brand communication",
        "Exported files prepared for web, print, and ad platforms",
      ]}
      toolsTitle="Tools / Software I Use"
      tools={[
        "Adobe Illustrator for logos and vector systems",
        "Adobe Photoshop for visual compositing",
        "Adobe InDesign for print layouts",
        "Figma for collaborative design handoff",
        "Canva Pro workflows for team-friendly templates",
      ]}
      ctaTitle="Need a stronger visual identity for your business?"
      ctaText="Share your current materials and I will map what should be cleaned, improved, or redesigned for a more consistent brand."
      ctaButton="Request graphic design consultation"
      localNote="Designed for local businesses in Germany and Balkan-owned companies building professional visibility in Germany."
    />
  );
}
