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
      intro="Clear, practical design systems for businesses that need a professional visual identity across digital and print communication."
      whatIoffer={[
        "Strategic visual direction aligned with business goals",
        "Consistent branding assets for web and social channels",
        "Professional design support for campaigns and day-to-day marketing",
        "Structured files and templates for easier long-term use",
      ]}
      serviceCategoriesTitle="Service Categories"
      subsections={[
        {
          id: "brand-identity-design",
          h3: "Brand Identity Design for Local Businesses",
          intro: "Build a complete visual identity that makes your business recognizable and trustworthy in your local market.",
          includes: ["Brand direction", "Color and typography system", "Core visual style guidelines", "Identity application examples"],
          workPlaceholder: "Placeholder for 2-6 future brand identity projects.",
          toolsPlaceholder: "Placeholder: Illustrator, InDesign, Figma.",
          cta: "Discuss your brand identity project",
        },
        {
          id: "logo-design-services",
          h3: "Professional Logo Design Services",
          intro: "Create logos that are clear, scalable, and usable across website, social media, print, and packaging.",
          includes: ["Logo concepts", "Refinement rounds", "Final logo package", "Usage guidance"],
          workPlaceholder: "Placeholder for logo design case studies.",
          toolsPlaceholder: "Placeholder: Illustrator, Photoshop.",
          cta: "Start a logo design inquiry",
        },
        {
          id: "photo-retouching-services",
          h3: "Photo Retouching and Image Enhancement",
          intro: "Improve business images for cleaner presentation, better consistency, and stronger campaign quality.",
          includes: ["Basic and advanced retouching", "Color correction", "Background cleanup", "Export for web and print"],
          workPlaceholder: "Placeholder for before/after retouching examples.",
          toolsPlaceholder: "Placeholder: Photoshop, Lightroom.",
          cta: "Request retouching support",
        },
        {
          id: "social-media-graphic-design",
          h3: "Social Media Graphics for Business Promotion",
          intro: "Design social media visuals that keep your brand consistent while improving content clarity and engagement.",
          includes: ["Post templates", "Story and reel cover graphics", "Campaign visuals", "Brand-consistent formatting"],
          workPlaceholder: "Placeholder for social graphics sets.",
          toolsPlaceholder: "Placeholder: Photoshop, Canva, Figma.",
          cta: "Plan your social media design package",
        },
        {
          id: "marketing-materials-design",
          h3: "Marketing Materials Design",
          intro: "Create business-ready marketing materials for online campaigns, events, and direct client communication.",
          includes: ["Flyers and brochures", "Business cards", "Promo banners", "Print-ready exports"],
          workPlaceholder: "Placeholder for future marketing material samples.",
          toolsPlaceholder: "Placeholder: InDesign, Illustrator.",
          cta: "Request marketing materials design",
        },
      ]}
      selectedWorkTitle="Selected Work Placeholder"
      selectedWorkIntro="This block is intentionally reserved for curated project examples that will be added in the next phase."
      toolsTitle="Tools / Software I Use"
      tools={["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva Pro"]}
      whyChooseTitle="Why Choose This Service"
      whyChoosePoints={[
        "Clear visual systems instead of random one-off graphics",
        "Business-first design decisions aligned with your offer",
        "Consistent output across social, website, and print channels",
        "Structured deliverables your team can actually reuse",
      ]}
      ctaTitle="Need a cleaner visual identity for your business?"
      ctaText="Send your current brand materials and I will propose a practical design structure for the next step."
      ctaButton="Request graphic design consultation"
      localNote="Suitable for businesses in Germany, including Baden-Württemberg, and Balkan-owned businesses operating in Germany."
    />
  );
}
