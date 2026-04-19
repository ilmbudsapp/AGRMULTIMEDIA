import { Suspense, lazy, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import MetaSEO from "./components/MetaSEO";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageLoadingFallback from "@/components/PageLoadingFallback";

const Home = lazy(() => import("@/pages/home"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const BlogIndexPage = lazy(() => import("@/pages/BlogIndexPage"));
const WebDesign = lazy(() => import("@/pages/web-design"));
const GraphicDesign = lazy(() => import("@/pages/graphic-design"));
const DigitalMarketing = lazy(() => import("@/pages/digital-marketing"));
const AIContentCreation = lazy(() => import("@/pages/ai-content-creation"));
const ApplicationDesignDevelopment = lazy(() => import("@/pages/application-design-development"));
const Photography = lazy(() => import("@/pages/photography"));
const VideoProduction = lazy(() => import("@/pages/video-production"));
const Consulting = lazy(() => import("@/pages/consulting"));
const Impresum = lazy(() => import("@/pages/impresum"));
const DigitalMarketingTrends2024 = lazy(() => import("@/pages/blog/digital-marketing-trends-2024"));
const WebsiteConversionOptimization = lazy(() => import("@/pages/blog/website-conversion-optimization"));
const VideoMarketingPower = lazy(() => import("@/pages/blog/video-marketing-power"));
const FoodTruckWeb500 = lazy(() => import("@/pages/blog/food-truck-web-500"));
const EcommerceSite = lazy(() => import("@/pages/portfolio/ecommerce-site"));
const RestaurantWebsite = lazy(() => import("@/pages/portfolio/restaurant-website"));
const BrandIdentity = lazy(() => import("@/pages/portfolio/brand-identity"));
const CorporateVideo = lazy(() => import("@/pages/portfolio/corporate-video"));
const ProductPhotography = lazy(() => import("@/pages/portfolio/product-photography"));
const PackagingDesign = lazy(() => import("@/pages/portfolio/packaging-design"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Cookies = lazy(() => import("@/pages/cookies"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  useAnalytics();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/blog" component={BlogIndexPage} />
      <Route path="/web-design" component={WebDesign} />
      <Route path="/graphic-design" component={GraphicDesign} />
      <Route path="/digital-marketing" component={DigitalMarketing} />
      <Route path="/ai-content-creation" component={AIContentCreation} />
      <Route path="/application-design-development" component={ApplicationDesignDevelopment} />
      <Route path="/photography" component={Photography} />
      <Route path="/video-production" component={VideoProduction} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/impresum" component={Impresum} />
      <Route path="/blog/digital-marketing-trends-2024" component={DigitalMarketingTrends2024} />
      <Route path="/blog/website-conversion-optimization" component={WebsiteConversionOptimization} />
      <Route path="/blog/video-marketing-power" component={VideoMarketingPower} />
      <Route path="/blog/food-truck-web-500" component={FoodTruckWeb500} />
      <Route path="/portfolio/ecommerce-site" component={EcommerceSite} />
      <Route path="/portfolio/restaurant-website" component={RestaurantWebsite} />
      <Route path="/portfolio/brand-identity" component={BrandIdentity} />
      <Route path="/portfolio/corporate-video" component={CorporateVideo} />
      <Route path="/portfolio/product-photography" component={ProductPhotography} />
      <Route path="/portfolio/packaging-design" component={PackagingDesign} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const loadGa = () => {
      if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
        console.warn("Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID");
        return;
      }
      initGA();
    };
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(loadGa, { timeout: 4500 });
    } else {
      window.setTimeout(loadGa, 2000);
    }
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <LanguageProvider>
            <ErrorBoundary>
              <TooltipProvider>
                <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
                  <MetaSEO />
                  <Suspense fallback={<PageLoadingFallback />}>
                    <Router />
                  </Suspense>
                  <WhatsAppFloat />
                </div>
                <Toaster />
              </TooltipProvider>
            </ErrorBoundary>
          </LanguageProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
