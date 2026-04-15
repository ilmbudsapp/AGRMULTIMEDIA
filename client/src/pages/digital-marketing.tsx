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
      intro="I create practical AI-supported content for small businesses that need better visuals, faster production, and consistent campaign output."
      overviewTitle="AI visuals and AI video content built for real marketing use"
      overviewText="This service is not generic 'AI hype'. It is focused on concrete business assets: AI images, AI product visuals, AI marketing visuals, and AI video creation for campaigns. I also work with modern AI tools including Veo 3.1 when suitable, then refine outputs so they match your brand tone and audience expectations."
      deliverablesTitle="What your business gets"
      deliverables={[
        "AI images for offers, campaigns, and social media posts",
        "AI product visuals for e-commerce and promotional pages",
        "AI marketing visuals adapted to brand color and style",
        "AI video creation for short-form business communication",
        "Prompt strategy and output selection based on campaign goals",
        "Final edited assets ready for web, ads, and social publishing",
      ]}
      toolsTitle="Tools / Software I Use"
      tools={[
        "Midjourney and Flux-based image generation workflows",
        "Veo 3.1 and related AI video generation tools",
        "Runway for AI video refinement",
        "Adobe Creative Cloud for post-production polish",
        "Structured prompt libraries for repeatable quality",
      ]}
      ctaTitle="Need AI content that actually helps your marketing?"
      ctaText="Tell me your campaign goal and channel. I will propose an AI content workflow that is realistic, brand-safe, and usable."
      ctaButton="Request AI content consultation"
      localNote="Especially useful for small businesses in Germany that need multilingual visual content at scale."
    />
  );
}
