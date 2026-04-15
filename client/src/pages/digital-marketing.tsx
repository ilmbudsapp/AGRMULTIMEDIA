import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServicePageTemplate
      eyebrow="Service"
      h1="AI Content Creation for Business Marketing"
      intro="Structured AI content services for businesses that need practical visual output, not generic AI experiments."
      whatIoffer={[
        "Clear separation between AI image services and AI video services",
        "AI content production aligned with business campaigns",
        "Consistent output adapted to brand style and channels",
        "Practical workflow for ongoing content needs",
      ]}
      serviceCategoriesTitle="Service Categories"
      subsections={[
        {
          id: "ai-image-creation",
          h3: "AI Image Creation for Brands",
          intro: "Generate image concepts that match campaign messaging and brand direction.",
          includes: ["Prompt strategy", "Style consistency", "Campaign adaptation", "Final image selection"],
          workPlaceholder: "Placeholder for AI image gallery.",
          toolsPlaceholder: "Placeholder: Midjourney, Flux workflows.",
          cta: "Plan AI image creation",
        },
        {
          id: "ai-product-marketing-visuals",
          h3: "AI Product and Marketing Visuals",
          intro: "Create product-focused visuals for ads, landing pages, and promotional campaigns.",
          includes: ["Product concept visuals", "Ad-ready compositions", "Marketing variants", "Format-specific exports"],
          workPlaceholder: "Placeholder for AI product visual showcase.",
          toolsPlaceholder: "Placeholder: Midjourney, Photoshop.",
          cta: "Request AI product visuals",
        },
        {
          id: "ai-photo-concepts",
          h3: "AI Photo Concepts",
          intro: "Develop conceptual AI photo scenes for storytelling, campaign themes, and brand positioning.",
          includes: ["Concept direction", "Scene generation", "Brand adaptation", "Creative iteration rounds"],
          workPlaceholder: "Placeholder for AI photo concept gallery.",
          toolsPlaceholder: "Placeholder: Midjourney, Lightroom, Photoshop.",
          cta: "Start an AI photo concept brief",
        },
        {
          id: "ai-video-creation",
          h3: "AI Video Creation",
          intro: "Produce AI-assisted video assets for campaign communication and social content.",
          includes: ["Storyboard prompts", "AI clip generation", "Edit-ready outputs", "Campaign formatting"],
          workPlaceholder: "Placeholder for AI video showcase.",
          toolsPlaceholder: "Placeholder: Runway, Veo workflows.",
          cta: "Request AI video creation",
        },
        {
          id: "ai-videos-veo",
          h3: "AI Videos with Veo 3.1",
          intro: "Use Veo 3.1-driven workflows for advanced AI video concepts and business-focused visual storytelling.",
          includes: ["Veo 3.1 concept setup", "Prompt tuning", "Scene continuity checks", "Output preparation"],
          workPlaceholder: "Placeholder for Veo 3.1 video examples.",
          toolsPlaceholder: "Placeholder: Veo 3.1, Runway, Premiere Pro.",
          cta: "Discuss Veo 3.1 video scope",
        },
        {
          id: "ai-content-business-promo",
          h3: "AI Content for Business Promotion",
          intro: "Build complete AI content sets for promotional campaigns across website, social, and ad channels.",
          includes: ["Content pack planning", "Cross-channel versions", "Brand consistency checks", "Campaign-ready delivery"],
          workPlaceholder: "Placeholder for business promotion AI content packs.",
          toolsPlaceholder: "Placeholder: Midjourney, Veo 3.1, Adobe CC.",
          cta: "Build an AI promotion content pack",
        },
      ]}
      selectedWorkTitle="Selected Work Placeholder"
      selectedWorkIntro="Reserved section for future AI image/video showcases once final material is approved."
      toolsTitle="Tools / Software I Use"
      tools={["Midjourney", "Flux-based workflows", "Veo 3.1", "Runway", "Adobe Photoshop + Premiere Pro"]}
      whyChooseTitle="Why Choose This Service"
      whyChoosePoints={[
        "Clear distinction between AI image and AI video deliverables",
        "Business-first AI content strategy, not random outputs",
        "Structured and repeatable workflow for ongoing campaigns",
        "Final assets prepared for real-world marketing use",
      ]}
      ctaTitle="Need practical AI content for your business marketing?"
      ctaText="Share your campaign goal and channels and I will propose the right AI image/video production structure."
      ctaButton="Request AI content consultation"
      localNote="Useful for businesses in Germany, including Baden-Württemberg, and Balkan businesses targeting German-speaking markets."
    />
  );
}
