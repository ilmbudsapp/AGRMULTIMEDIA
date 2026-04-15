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
      intro="Practical application concepts and development structures for companies that need useful digital tools, not abstract experiments."
      whatIoffer={[
        "Business-oriented app concepts with clear operational value",
        "Simple custom tools for internal workflows",
        "Prototype interfaces before full development investment",
        "Scalable foundations for future product expansion",
      ]}
      serviceCategoriesTitle="Service Categories"
      subsections={[
        {
          id: "custom-business-applications",
          h3: "Custom Business Applications",
          intro: "Plan and build focused applications tailored to real company workflows.",
          includes: ["Requirements mapping", "Core feature scope", "Workflow logic", "Practical MVP definition"],
          workPlaceholder: "Placeholder for custom application cases.",
          toolsPlaceholder: "Placeholder: React, TypeScript, API integrations.",
          cta: "Discuss a custom application",
        },
        {
          id: "simple-internal-tools",
          h3: "Simple Internal Tools",
          intro: "Create lightweight internal tools that remove repetitive manual tasks.",
          includes: ["Task-focused interfaces", "Data input forms", "Simple dashboard outputs", "Team workflow improvements"],
          workPlaceholder: "Placeholder for internal tool examples.",
          toolsPlaceholder: "Placeholder: React, lightweight backend stack.",
          cta: "Plan an internal business tool",
        },
        {
          id: "prototype-app-design",
          h3: "Prototype App Design for Small Businesses",
          intro: "Design and validate app concepts before full implementation.",
          includes: ["User flow mapping", "Interactive prototype", "Core screens", "Feedback-ready presentation"],
          workPlaceholder: "Placeholder for app prototype screens.",
          toolsPlaceholder: "Placeholder: Figma, UX flow tools.",
          cta: "Request app prototype design",
        },
        {
          id: "business-dashboard-concepts",
          h3: "Business Dashboard Concepts",
          intro: "Design dashboard structures that help teams track essential metrics and actions.",
          includes: ["KPI structure planning", "Dashboard layout", "Data priority mapping", "User role views"],
          workPlaceholder: "Placeholder for dashboard concept examples.",
          toolsPlaceholder: "Placeholder: Figma, charting/UI systems.",
          cta: "Start a dashboard concept brief",
        },
        {
          id: "client-focused-web-applications",
          h3: "Client-Focused Web Applications",
          intro: "Build web application structures that improve client interaction and service delivery.",
          includes: ["Client portal concepts", "User onboarding flow", "Service interaction logic", "Clear web app navigation"],
          workPlaceholder: "Placeholder for client-facing app examples.",
          toolsPlaceholder: "Placeholder: React, Node.js, API workflow tools.",
          cta: "Plan a client-focused web app",
        },
        {
          id: "digital-tools-small-businesses",
          h3: "Digital Tools for Small Businesses",
          intro: "Develop practical digital utilities that support daily business operations.",
          includes: ["Process simplification", "Light automation ideas", "Operational utility tools", "Scalable tool architecture"],
          workPlaceholder: "Placeholder for digital business tool showcase.",
          toolsPlaceholder: "Placeholder: TypeScript, database-ready patterns.",
          cta: "Request digital tools consultation",
        },
      ]}
      selectedWorkTitle="Selected Work Placeholder"
      selectedWorkIntro="This section is reserved for future app and tool examples that will be added after final structure approval."
      toolsTitle="Tools / Software I Use"
      tools={["Figma", "React + TypeScript", "Node.js integration patterns", "API-first architecture", "Database-ready workflow planning"]}
      whyChooseTitle="Why Choose This Service"
      whyChoosePoints={[
        "Business utility is prioritized over technical complexity",
        "Concept-to-prototype approach reduces project risk",
        "Simple tools can be shipped fast and improved in phases",
        "Clear structure for both internal use and client-facing apps",
      ]}
      ctaTitle="Need practical digital tools for your company?"
      ctaText="Share the workflow you want to improve and I will propose a focused application structure."
      ctaButton="Request application consultation"
      localNote="Designed for small businesses in Germany and Balkan companies building digital workflows in German markets."
    />
  );
}
