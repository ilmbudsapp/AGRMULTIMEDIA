import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, TrendingUp, Target, Smartphone, Users, BarChart, Zap } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function DigitalMarketingTrends2024() {
  const { t } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
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
                {t.blogPost?.trends?.title || "Digital Marketing Trends 2024"}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.blogPost?.trends?.subtitle || "Stay ahead with the latest trends"}
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
            <Badge className="bg-electric-blue text-white">
              {t.blogPost?.trends?.category || "Digital Marketing"}
            </Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{t.blogPost?.trends?.date || "19.08.2025"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4" />
              <span>MULTIMEDIA AGRONDESIGN</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-80 rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Digital Marketing Trends"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t.blogPost?.trends?.title || "Digital Marketing Trends That Will Shape 2024"}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t.blogPost?.trends?.intro || "Digital marketing landscape is evolving rapidly. From AI-powered personalization to immersive AR experiences, 2024 brings exciting opportunities for businesses to connect with their audiences in more meaningful ways."}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-electric-blue" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.trends?.aiPersonalization?.title || "AI-Powered Personalization"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.trends?.aiPersonalization?.description || "Artificial intelligence enables unprecedented levels of content personalization, creating unique user experiences tailored to individual preferences and behaviors."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.trends?.voiceSearch?.title || "Voice Search Optimization"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.trends?.voiceSearch?.description || "With smart speakers becoming mainstream, optimizing content for voice search queries is crucial for maintaining visibility in search results."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.trends?.mobileFirst?.title || "Mobile-First Experiences"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.trends?.mobileFirst?.description || "Mobile devices account for majority of web traffic. Designing mobile-first experiences ensures optimal performance across all devices."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.trends?.socialCommerce?.title || "Social Commerce Integration"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.trends?.socialCommerce?.description || "Social platforms are becoming shopping destinations. Integrating commerce directly into social experiences reduces friction in the buying journey."}
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              {t.blogPost?.trends?.implementation?.title || "Implementing These Trends"}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t.blogPost?.trends?.implementation?.description || "Successfully implementing these trends requires strategic planning and the right expertise. At MULTIMEDIA AGRONDESIGN, we help businesses navigate the digital landscape with cutting-edge solutions that drive real results."}
            </p>

            <div className="bg-gradient-to-r from-electric-blue/10 to-purple-500/10 rounded-2xl p-8 my-12">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-electric-blue" />
                <h3 className="text-xl font-semibold">{t.blogPost?.trends?.actionItems?.title || "Key Action Items"}</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <BarChart className="w-5 h-5 text-electric-blue mt-0.5" />
                  <span>{t.blogPost?.trends?.actionItems?.item1 || "Audit your current digital marketing strategy"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart className="w-5 h-5 text-electric-blue mt-0.5" />
                  <span>{t.blogPost?.trends?.actionItems?.item2 || "Identify opportunities for AI integration"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart className="w-5 h-5 text-electric-blue mt-0.5" />
                  <span>{t.blogPost?.trends?.actionItems?.item3 || "Optimize content for voice search"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart className="w-5 h-5 text-electric-blue mt-0.5" />
                  <span>{t.blogPost?.trends?.actionItems?.item4 || "Enhance mobile user experience"}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}