import { useRoute } from "wouter";
import CaseStudyPage, { getCaseStudyBySlug } from "@/pages/portfolio/CaseStudyPage";
import Redirect from "@/components/Redirect";
import { LEGACY_DEMO_PORTFOLIO_SLUGS } from "@/data/caseStudies";
import { ROUTES } from "@/lib/siteRoutes";

export default function CaseStudyRoute() {
  const [, params] = useRoute("/portfolio/:slug");
  const slug = params?.slug ?? "";

  if ((LEGACY_DEMO_PORTFOLIO_SLUGS as readonly string[]).includes(slug)) {
    return <Redirect to={ROUTES.portfolio} />;
  }

  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return <Redirect to={ROUTES.portfolio} />;
  }

  return <CaseStudyPage study={study} />;
}
