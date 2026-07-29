import { lazy } from "react";
import { Switch, Route } from "wouter";
import { useAnalytics } from "./hooks/use-analytics";
import Redirect from "./components/Redirect";
import WebdesignGeislingenPage from "@/views/WebdesignGeislingenPage";

const Home = lazy(() => import("@/views/home"));
const ServicesPage = lazy(() => import("@/views/ServicesPage"));
const AboutPage = lazy(() => import("@/views/AboutPage"));
const ContactPage = lazy(() => import("@/views/ContactPage"));
const WebdesignSeoPage = lazy(() => import("@/views/WebdesignSeoPage"));
const BewertungenPage = lazy(() => import("@/views/BewertungenPage"));
const PortfolioPage = lazy(() => import("@/views/PortfolioPage"));
const BlogIndexPage = lazy(() => import("@/views/BlogIndexPage"));
const GraphicDesign = lazy(() => import("@/views/graphic-design"));
const DigitalMarketing = lazy(() => import("@/views/digital-marketing"));
const AIContentCreation = lazy(() => import("@/views/ai-content-creation"));
const ApplicationDesignDevelopment = lazy(() => import("@/views/application-design-development"));
const Photography = lazy(() => import("@/views/photography"));
const VideoProduction = lazy(() => import("@/views/video-production"));
const Consulting = lazy(() => import("@/views/consulting"));
const Impresum = lazy(() => import("@/views/impresum"));
const DigitalMarketingTrends2024 = lazy(() => import("@/views/blog/digital-marketing-trends-2024"));
const WebsiteConversionOptimization = lazy(() => import("@/views/blog/website-conversion-optimization"));
const VideoMarketingPower = lazy(() => import("@/views/blog/video-marketing-power"));
const FoodTruckWeb500 = lazy(() => import("@/views/blog/food-truck-web-500"));
const GermanBlogArticlePage = lazy(() => import("@/views/blog/GermanBlogArticlePage"));
const EcommerceSite = lazy(() => import("@/views/portfolio/ecommerce-site"));
const RestaurantWebsite = lazy(() => import("@/views/portfolio/restaurant-website"));
const BrandIdentity = lazy(() => import("@/views/portfolio/brand-identity"));
const CorporateVideo = lazy(() => import("@/views/portfolio/corporate-video"));
const ProductPhotography = lazy(() => import("@/views/portfolio/product-photography"));
const PackagingDesign = lazy(() => import("@/views/portfolio/packaging-design"));
const Privacy = lazy(() => import("@/views/privacy"));
const Terms = lazy(() => import("@/views/terms"));
const Cookies = lazy(() => import("@/views/cookies"));
const AisaOsmaniDemoRedirect = lazy(() => import("@/views/demo/aisa-osmani"));
const TairovicDarkVerzijaDemoRedirect = lazy(() => import("@/views/demo/tairovic-dark-verzija"));
const UgandaHilfeDemoRedirect = lazy(() => import("@/views/demo/uganda-hilfe"));
const NotFound = lazy(() => import("@/views/not-found"));

export default function App() {
  useAnalytics();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/webdesign-geislingen-an-der-steige" component={WebdesignGeislingenPage} />
      <Route path="/webdesign-seo" component={WebdesignSeoPage} />
      <Route path="/videoproduktion" component={VideoProduction} />
      <Route path="/bewertungen" component={BewertungenPage} />
      <Route path="/kontakt" component={ContactPage} />
      <Route path="/portfolio/ecommerce-site" component={EcommerceSite} />
      <Route path="/portfolio/restaurant-website" component={RestaurantWebsite} />
      <Route path="/portfolio/brand-identity" component={BrandIdentity} />
      <Route path="/portfolio/corporate-video" component={CorporateVideo} />
      <Route path="/portfolio/product-photography" component={ProductPhotography} />
      <Route path="/portfolio/packaging-design" component={PackagingDesign} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact">{() => <Redirect to="/kontakt" />}</Route>
      <Route path="/web-design">{() => <Redirect to="/webdesign-seo" />}</Route>
      <Route path="/video-production">{() => <Redirect to="/videoproduktion" />}</Route>
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogIndexPage} />
      <Route path="/graphic-design" component={GraphicDesign} />
      <Route path="/digital-marketing" component={DigitalMarketing} />
      <Route path="/ai-content-creation" component={AIContentCreation} />
      <Route path="/application-design-development" component={ApplicationDesignDevelopment} />
      <Route path="/photography" component={Photography} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/impresum" component={Impresum} />
      <Route path="/blog/digital-marketing-trends-2024" component={DigitalMarketingTrends2024} />
      <Route path="/blog/website-conversion-optimization" component={WebsiteConversionOptimization} />
      <Route path="/blog/video-marketing-power" component={VideoMarketingPower} />
      <Route path="/blog/food-truck-web-500" component={FoodTruckWeb500} />
      <Route path="/blog/:slug" component={GermanBlogArticlePage} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />
      <Route path="/demo/aisa-osmani" component={AisaOsmaniDemoRedirect} />
      <Route path="/demo/tairovic-bez-verzija">{() => <Redirect to="/demo/tairovic-dark-verzija" />}</Route>
      <Route path="/demo/tairovic-azzura-verzija">{() => <Redirect to="/demo/tairovic-dark-verzija" />}</Route>
      <Route path="/demo/tairovic-dark-verzija" component={TairovicDarkVerzijaDemoRedirect} />
      <Route path="/demo/uganda-hilfe" component={UgandaHilfeDemoRedirect} />
      <Route component={NotFound} />
    </Switch>
  );
}
