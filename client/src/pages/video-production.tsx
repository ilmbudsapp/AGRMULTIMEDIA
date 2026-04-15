import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function VideoProduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServicePageTemplate
      eyebrow="Service"
      h1="Professional Video Editing Services"
      intro="Business-focused video editing designed for clear messaging, stronger content quality, and better campaign performance."
      whatIoffer={[
        "Structured video editing for marketing and sales communication",
        "Consistent visual style across social and website videos",
        "Fast adaptation for vertical and horizontal formats",
        "Editing pipelines suitable for recurring business content",
      ]}
      serviceCategoriesTitle="Service Categories"
      subsections={[
        {
          id: "promotional-video-editing",
          h3: "Promotional Video Editing for Brands",
          intro: "Edit promotional videos that present your service clearly and create stronger first impressions.",
          includes: ["Story pacing", "Brand-aligned cuts", "Call-to-action framing", "Campaign-ready exports"],
          workPlaceholder: "Placeholder for future promotional video examples.",
          toolsPlaceholder: "Placeholder: Premiere Pro, After Effects.",
          cta: "Plan your promo video",
        },
        {
          id: "social-media-video-editing",
          h3: "Social Media Video Editing for Businesses",
          intro: "Create scroll-stopping social videos optimized for engagement and retention.",
          includes: ["Platform-specific formats", "Subtitle styling", "Hook-first editing", "Batch content versions"],
          workPlaceholder: "Placeholder for social media video edits.",
          toolsPlaceholder: "Placeholder: Premiere Pro, CapCut Pro.",
          cta: "Request social video editing",
        },
        {
          id: "short-form-video-content",
          h3: "Short-Form Video Editing for Instagram and TikTok",
          intro: "Produce short-form clips that deliver one strong message quickly and clearly.",
          includes: ["15-60s edits", "Fast pacing", "Text overlays", "Reels/TikTok optimization"],
          workPlaceholder: "Placeholder for short-form content showcase.",
          toolsPlaceholder: "Placeholder: Premiere Pro, CapCut Pro.",
          cta: "Start short-form content editing",
        },
        {
          id: "business-presentation-videos",
          h3: "Business Presentation Videos",
          intro: "Turn raw recordings or slides into professional presentation videos for clients and partners.",
          includes: ["Narrative cleanup", "Slide integration", "Visual consistency", "Delivery-ready format setup"],
          workPlaceholder: "Placeholder for presentation video samples.",
          toolsPlaceholder: "Placeholder: Premiere Pro, After Effects.",
          cta: "Request presentation video support",
        },
        {
          id: "reels-tiktok-editing",
          h3: "Reels and TikTok Video Editing",
          intro: "Deliver fast, platform-native edits for regular social posting and campaign bursts.",
          includes: ["Trend-aware structure", "Vertical optimization", "Captions and motion text", "Content repurposing"],
          workPlaceholder: "Placeholder for reels and TikTok edits.",
          toolsPlaceholder: "Placeholder: CapCut Pro, Premiere Pro.",
          cta: "Build your reels editing workflow",
        },
      ]}
      selectedWorkTitle="Selected Work Placeholder"
      selectedWorkIntro="Curated video examples will be inserted here after structure approval in the next phase."
      toolsTitle="Tools / Software I Use"
      tools={["Adobe Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve", "Frame.io review workflow"]}
      whyChooseTitle="Why Choose This Service"
      whyChoosePoints={[
        "Editing focused on business communication, not random effects",
        "Clear structure for recurring content production",
        "Ready-to-publish outputs for multiple channels",
        "Consistent visual quality across your brand videos",
      ]}
      ctaTitle="Need cleaner and more effective business videos?"
      ctaText="Share your raw footage or an existing draft and I will map a clear editing plan."
      ctaButton="Request video editing consultation"
      localNote="Available for small businesses in Germany and multilingual teams serving Balkan and EU markets."
    />
  );
}
