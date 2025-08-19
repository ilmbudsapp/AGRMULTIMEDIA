import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, MousePointer, Eye, TestTube, BarChart3, Target, Zap } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function WebsiteConversionOptimization() {
  const { t } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                {t.nav.home}
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.blogPost?.conversion?.title || "Website Conversion Optimization"}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.blogPost?.conversion?.subtitle || "Turn visitors into customers"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge className="bg-purple-500 text-white">
              {t.blogPost?.conversion?.category || "Website Optimization"}
            </Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>12. Dec 2023</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4" />
              <span>MULTIMEDIA AGRONDESIGN</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-80 rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Website Conversion Optimization"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t.blogPost?.conversion?.title || "The Ultimate Guide to Website Conversion Optimization"}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t.blogPost?.conversion?.intro || "Converting website visitors into customers is both an art and a science. Through strategic design, compelling copy, and data-driven testing, you can dramatically improve your conversion rates and grow your business."}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.conversion?.userExperience?.title || "User Experience Design"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.conversion?.userExperience?.description || "Intuitive navigation, clear value propositions, and seamless user flows guide visitors naturally toward conversion actions."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TestTube className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.conversion?.abTesting?.title || "A/B Testing Strategy"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.conversion?.abTesting?.description || "Systematic testing of different elements helps identify what resonates best with your audience and drives higher conversion rates."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MousePointer className="w-6 h-6 text-electric-blue" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.conversion?.callToAction?.title || "Compelling Call-to-Actions"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.conversion?.callToAction?.description || "Strategic placement and persuasive copy in your CTAs can significantly impact conversion rates and user engagement."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.conversion?.analytics?.title || "Performance Analytics"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.conversion?.analytics?.description || "Data-driven insights reveal user behavior patterns and optimization opportunities across your conversion funnel."}
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              {t.blogPost?.conversion?.practicalSteps?.title || "Practical Optimization Steps"}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t.blogPost?.conversion?.practicalSteps?.description || "Successful conversion optimization requires a systematic approach. Start with these proven strategies to see immediate improvements in your website performance."}
            </p>

            <div className="bg-gradient-to-r from-purple-500/10 to-electric-blue/10 rounded-2xl p-8 my-12">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-500" />
                <h3 className="text-2xl font-semibold">{t.blogPost?.conversion?.optimizationChecklist?.title || "Conversion Optimization Checklist"}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-electric-blue" />
                    {t.blogPost?.conversion?.optimizationChecklist?.technical || "Technical Optimization"}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                      <span>{t.blogPost?.conversion?.optimizationChecklist?.pageSpeed || "Improve page loading speed"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                      <span>{t.blogPost?.conversion?.optimizationChecklist?.mobileOptimization || "Optimize for mobile devices"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                      <span>{t.blogPost?.conversion?.optimizationChecklist?.formOptimization || "Simplify form fields"}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-electric-blue" />
                    {t.blogPost?.conversion?.optimizationChecklist?.content || "Content Strategy"}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full mt-2"></span>
                      <span>{t.blogPost?.conversion?.optimizationChecklist?.headlines || "Create compelling headlines"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full mt-2"></span>
                      <span>{t.blogPost?.conversion?.optimizationChecklist?.socialProof || "Add social proof elements"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full mt-2"></span>
                      <span>{t.blogPost?.conversion?.optimizationChecklist?.urgency || "Use urgency and scarcity"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-electric-blue to-purple-500 rounded-2xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                {t.blogPost?.conversion?.cta?.title || "Ready to Boost Your Conversions?"}
              </h3>
              <p className="text-lg mb-6">
                {t.blogPost?.conversion?.cta?.description || "Let MULTIMEDIA AGRONDESIGN optimize your website for maximum conversions. Our data-driven approach delivers measurable results."}
              </p>
              <Link href="/#contact">
                <Button className="bg-white text-electric-blue hover:bg-gray-100">
                  {t.blogPost?.conversion?.cta?.button || "Get Started Today"}
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}