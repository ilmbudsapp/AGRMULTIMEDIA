import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WebDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServicePageTemplate
      eyebrow="Service"
      h1="Web Design and SEO for Small Businesses"
      intro="I build clean business websites that are easy to navigate, easy to maintain, and easy for customers to trust from the first visit."
      overviewTitle="Website design, structure, and on-page SEO built together"
      overviewText="This service combines design and SEO from the start. Instead of building a website first and fixing search visibility later, we define page structure, content hierarchy, and technical basics in one process. You get a mobile-friendly website that loads fast, communicates your offer clearly, and supports long-term visibility in Google."
      deliverablesTitle="What your business gets"
      deliverables={[
        "Custom website design focused on your business offer and audience",
        "On-page SEO setup: headings, internal links, metadata, and content structure",
        "Website structure optimization for services, locations, and lead flow",
        "Mobile-friendly responsive design for phones, tablets, and desktop",
        "Fast loading website setup with performance-focused assets",
        "Clear contact and conversion paths for inquiries and quote requests",
      ]}
      toolsTitle="Tools / Software I Use"
      tools={[
        "Figma for page planning and wireframes",
        "React + Vite frontend development",
        "Technical SEO checklists and on-page audits",
        "Google Search Console and analytics basics",
        "Image compression and performance optimization tools",
      ]}
      ctaTitle="Need a clearer website that also ranks better?"
      ctaText="Send me your current website or business idea. I will outline a practical plan for design, structure, and SEO improvements."
      ctaButton="Request web + SEO consultation"
      localNote="Available for businesses in Germany (including Baden-Württemberg) and Balkan-owned businesses operating in Germany."
    />
  );
}
