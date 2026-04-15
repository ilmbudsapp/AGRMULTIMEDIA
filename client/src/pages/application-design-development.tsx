import { useEffect } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ApplicationDesignDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServicePageTemplate
      eyebrow="Service"
      h1="Custom Application Design for Businesses"
      intro="I design and build practical business applications that solve specific workflows without overengineering."
      overviewTitle="Application concepts and prototypes focused on business utility"
      overviewText="This service is for companies that need useful digital tools, not experiments. I help define app concepts, map user flows, design prototype interfaces, and build simple custom applications for internal processes or customer-facing use cases. The focus is clarity, speed, and real operational value."
      deliverablesTitle="What your business gets"
      deliverables={[
        "App concepts translated from your business process goals",
        "Prototype interfaces for testing before full development",
        "Simple custom applications for internal team workflows",
        "Business tools for inquiry handling, task flow, or data capture",
        "UI structure that aligns with your existing website and brand",
        "Deployment-ready MVP scope for practical first releases",
      ]}
      toolsTitle="Tools / Software I Use"
      tools={[
        "Figma for UX flow and prototype interfaces",
        "React + TypeScript for front-end applications",
        "Node.js and API integration patterns",
        "PostgreSQL-compatible data structures when needed",
        "Versioned delivery through Git + staged deployment",
      ]}
      ctaTitle="Need a useful custom app for your company?"
      ctaText="Describe the workflow you want to improve. I will propose a lean app scope that is practical to build and maintain."
      ctaButton="Request application consultation"
      localNote="Built for growing companies in Germany that need efficient digital tools without large enterprise overhead."
    />
  );
}
