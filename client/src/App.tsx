import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import MetaSEO from "./components/MetaSEO";
import Home from "@/pages/home";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ContactPage from "@/pages/ContactPage";
import PortfolioPage from "@/pages/PortfolioPage";
import BlogIndexPage from "@/pages/BlogIndexPage";
import WebDesign from "@/pages/web-design";
import GraphicDesign from "@/pages/graphic-design";
import VideoProduction from "@/pages/video-production";
import DigitalMarketing from "@/pages/digital-marketing";
import Photography from "@/pages/photography";
import Consulting from "@/pages/consulting";
import Impresum from "@/pages/impresum";
import DigitalMarketingTrends2024 from "@/pages/blog/digital-marketing-trends-2024";
import WebsiteConversionOptimization from "@/pages/blog/website-conversion-optimization";
import VideoMarketingPower from "@/pages/blog/video-marketing-power";
import FoodTruckWeb500 from "@/pages/blog/food-truck-web-500";
import EcommerceSite from "@/pages/portfolio/ecommerce-site";
import RestaurantWebsite from "@/pages/portfolio/restaurant-website";
import BrandIdentity from "@/pages/portfolio/brand-identity";
import CorporateVideo from "@/pages/portfolio/corporate-video";
import ProductPhotography from "@/pages/portfolio/product-photography";
import PackagingDesign from "@/pages/portfolio/packaging-design";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Cookies from "@/pages/cookies";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
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
      <Route path="/video-production" component={VideoProduction} />
      <Route path="/digital-marketing" component={DigitalMarketing} />
      <Route path="/photography" component={Photography} />
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
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
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
                  <Router />
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
