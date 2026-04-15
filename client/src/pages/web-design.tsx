import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WebDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServicePageTemplate
      eyebrow="Service"
      h1="Web Design and SEO Services for Small Businesses"
      intro="Website structure and SEO built as one system, so your business looks professional and is easier to find in search."
      whatIoffer={[
        "Business websites designed for clarity and conversion",
        "SEO-first page structure with on-page optimization",
        "Mobile-friendly layouts and fast-loading setup",
        "Local SEO direction for companies in Germany",
      ]}
      serviceCategoriesTitle="Service Categories"
      subsections={[
        {
          id: "business-website-design",
          h3: "Business Website Design in Germany",
          intro: "Create structured service websites that communicate your offer clearly and guide visitors to inquiry.",
          includes: ["Service-focused architecture", "Conversion-oriented layout", "Clear navigation", "Contact flow integration"],
          workPlaceholder: "Placeholder for business website projects.",
          toolsPlaceholder: "Placeholder: Figma, React.",
          cta: "Start a business website plan",
        },
        {
          id: "landing-page-design",
          h3: "Landing Page Design",
          intro: "Design focused landing pages for campaigns, paid traffic, and specific service offers.",
          includes: ["Single-goal structure", "Headline and CTA hierarchy", "Trust and proof layout", "Lead-focused sections"],
          workPlaceholder: "Placeholder for landing page examples.",
          toolsPlaceholder: "Placeholder: Figma, analytics-based testing.",
          cta: "Request a landing page build",
        },
        {
          id: "website-redesign",
          h3: "Website Redesign Services",
          intro: "Restructure outdated websites into a cleaner, faster, and more useful business experience.",
          includes: ["Content cleanup", "Visual refresh", "Navigation redesign", "Structure optimization"],
          workPlaceholder: "Placeholder for redesign before/after cases.",
          toolsPlaceholder: "Placeholder: Figma, Lighthouse, SEO audit tools.",
          cta: "Plan a website redesign",
        },
        {
          id: "seo-optimization",
          h3: "SEO Optimization Services",
          intro: "Make SEO a visible and structured part of your website setup, not an afterthought.",
          includes: ["On-page SEO", "Metadata setup", "Heading hierarchy", "Internal linking strategy"],
          workPlaceholder: "Placeholder for SEO optimization snapshots.",
          toolsPlaceholder: "Placeholder: Search Console, on-page audit tools.",
          cta: "Request SEO optimization",
        },
        {
          id: "mobile-friendly-design",
          h3: "Mobile-Friendly Website Design",
          intro: "Ensure websites work smoothly on phones where most first visits happen.",
          includes: ["Responsive layout rules", "Touch-friendly navigation", "Readable typography", "Mobile UX checks"],
          workPlaceholder: "Placeholder for mobile design comparisons.",
          toolsPlaceholder: "Placeholder: responsive testing tools.",
          cta: "Improve mobile website UX",
        },
        {
          id: "fast-loading-setup",
          h3: "Fast-Loading Website Setup",
          intro: "Improve performance so users get content quickly and search engines see a technically healthier site.",
          includes: ["Asset optimization", "Image compression", "Script loading cleanup", "Core speed improvements"],
          workPlaceholder: "Placeholder for speed improvement cases.",
          toolsPlaceholder: "Placeholder: Lighthouse, WebPageTest.",
          cta: "Request performance optimization",
        },
        {
          id: "local-seo",
          h3: "Local SEO Services for Businesses in Germany",
          intro: "Build local relevance for service searches in Germany, including Baden-Württemberg.",
          includes: ["Location-focused page structure", "Local keyword mapping", "Service-area clarity", "Local SEO content planning"],
          workPlaceholder: "Placeholder for local SEO structure examples.",
          toolsPlaceholder: "Placeholder: Search Console, local SEO audits.",
          cta: "Plan local SEO setup",
        },
      ]}
      selectedWorkTitle="Selected Work Placeholder"
      selectedWorkIntro="Future website and SEO case studies will be inserted here after structure approval."
      toolsTitle="Tools / Software I Use"
      tools={["Figma", "React + Vite", "Google Search Console", "On-page SEO audit tools", "Performance optimization utilities"]}
      whyChooseTitle="Why Choose This Service"
      whyChoosePoints={[
        "SEO and design are handled together from the first structure draft",
        "Clear hierarchy helps both users and search visibility",
        "Mobile and speed performance treated as core deliverables",
        "Local SEO angle can be integrated naturally for Germany-focused businesses",
      ]}
      ctaTitle="Need a cleaner website with stronger SEO structure?"
      ctaText="Send your current website or idea and I will map a practical web + SEO structure for your business."
      ctaButton="Request web design and SEO consultation"
      localNote="Built for small businesses in Germany and Balkan companies targeting German local markets."
    />
  );
}
