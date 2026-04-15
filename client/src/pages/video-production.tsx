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
      intro="I edit business videos for ads, social media, websites, and product communication with a clear structure and strong visual rhythm."
      overviewTitle="Video editing focused on message clarity and conversion"
      overviewText="This service is built for businesses that need polished video content but do not want agency complexity. I work on pacing, story flow, transitions, subtitles, brand consistency, and export formats so your videos are ready for Instagram, TikTok, YouTube, ads, and website sections."
      deliverablesTitle="What your business gets"
      deliverables={[
        "Short-form video editing for social campaigns and reels",
        "Promotional and product video editing for ads",
        "Branded subtitles, motion text, and lower-third elements",
        "Color correction and sound cleanup for clearer quality",
        "Multiple export versions for different channels and formats",
        "Final cuts prepared for website hero sections and landing pages",
      ]}
      toolsTitle="Tools / Software I Use"
      tools={[
        "Adobe Premiere Pro for editing workflows",
        "After Effects for motion graphics and transitions",
        "DaVinci Resolve for color cleanup when needed",
        "CapCut Pro for fast social adaptation",
        "Frame.io style review and revision cycles",
      ]}
      ctaTitle="Need videos that look professional and sell better?"
      ctaText="Send raw footage or an existing draft and I will suggest an editing structure that fits your offer and audience."
      ctaButton="Request video editing consultation"
      localNote="Available for service businesses in Germany, including teams that need multilingual video versions."
    />
  );
}
