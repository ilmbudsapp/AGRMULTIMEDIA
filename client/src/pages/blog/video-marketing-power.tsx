import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Play, Video, Users, TrendingUp, Eye, Share2 } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function VideoMarketingPower() {
  const { t } = useLanguage();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-slate-50 to-red-50 dark:from-gray-900 dark:to-red-900">
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
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.blogPost?.video?.title || "The Power of Video Marketing"}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.blogPost?.video?.subtitle || "Engage audiences with visual storytelling"}
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
            <Badge className="bg-red-500 text-white">
              {t.blogPost?.video?.category || "Video Marketing"}
            </Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{t.blogPost?.video?.date || "07.03.2026"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4" />
              <span>MULTIMEDIA AGRONDESIGN</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-80 rounded-2xl overflow-hidden mb-8 relative">
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Video Marketing Power"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t.blogPost?.video?.title || "The Power of Video Marketing: Engaging Your Audience in 2024"}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t.blogPost?.video?.intro || "Video content has become the dominant force in digital marketing. With attention spans decreasing and visual consumption increasing, businesses that master video storytelling gain a significant competitive advantage."}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.video?.engagement?.title || "Higher Engagement Rates"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.video?.engagement?.description || "Video content generates 1200% more shares than text and images combined, creating powerful viral potential for your brand."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.video?.conversion?.title || "Improved Conversions"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.video?.conversion?.description || "Landing pages with videos can increase conversion rates by up to 80%, making video an essential tool for sales funnels."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-electric-blue" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.video?.storytelling?.title || "Emotional Storytelling"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.video?.storytelling?.description || "Video allows brands to tell compelling stories that create emotional connections with their audience, building loyalty and trust."}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Share2 className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold">{t.blogPost?.video?.reach?.title || "Extended Reach"}</h3>
                </div>
                <p className="text-gray-600">
                  {t.blogPost?.video?.reach?.description || "Social media algorithms favor video content, providing organic reach opportunities that are increasingly rare with other content types."}
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              {t.blogPost?.video?.types?.title || "Types of Video Content That Convert"}
            </h2>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">{t.blogPost?.video?.types?.product?.title || "Product Demonstrations"}</h3>
                <p className="text-gray-600">
                  {t.blogPost?.video?.types?.product?.description || "Show your products in action, highlighting key features and benefits in a way that static images simply cannot match."}
                </p>
              </div>

              <div className="border-l-4 border-electric-blue pl-6">
                <h3 className="text-xl font-semibold mb-2">{t.blogPost?.video?.types?.testimonial?.title || "Customer Testimonials"}</h3>
                <p className="text-gray-600">
                  {t.blogPost?.video?.types?.testimonial?.description || "Authentic customer stories build trust and credibility, serving as powerful social proof for potential customers."}
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">{t.blogPost?.video?.types?.educational?.title || "Educational Content"}</h3>
                <p className="text-gray-600">
                  {t.blogPost?.video?.types?.educational?.description || "How-to videos and tutorials position your brand as an industry expert while providing valuable content to your audience."}
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">{t.blogPost?.video?.types?.behindScenes?.title || "Behind-the-Scenes"}</h3>
                <p className="text-gray-600">
                  {t.blogPost?.video?.types?.behindScenes?.description || "Give your audience a peek behind the curtain to humanize your brand and create stronger connections."}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 my-12">
              <div className="flex items-center gap-3 mb-6">
                <Video className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-semibold">{t.blogPost?.video?.strategy?.title || "Video Marketing Strategy Tips"}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">{t.blogPost?.video?.strategy?.production || "Production Excellence"}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                      <span>{t.blogPost?.video?.strategy?.quality || "Invest in good audio quality"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                      <span>{t.blogPost?.video?.strategy?.lighting || "Use proper lighting techniques"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                      <span>{t.blogPost?.video?.strategy?.planning || "Plan your content structure"}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">{t.blogPost?.video?.strategy?.distribution || "Smart Distribution"}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full mt-2"></span>
                      <span>{t.blogPost?.video?.strategy?.platforms || "Choose the right platforms"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full mt-2"></span>
                      <span>{t.blogPost?.video?.strategy?.timing || "Optimize posting times"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full mt-2"></span>
                      <span>{t.blogPost?.video?.strategy?.seo || "Use video SEO best practices"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                {t.blogPost?.video?.cta?.title || "Ready to Harness Video Marketing?"}
              </h3>
              <p className="text-lg mb-6">
                {t.blogPost?.video?.cta?.description || "MULTIMEDIA AGRONDESIGN creates compelling video content that drives engagement and conversions. From concept to distribution, we handle every aspect of your video marketing strategy."}
              </p>
              <Link href="/#contact">
                <Button className="bg-white text-red-500 hover:bg-gray-100">
                  {t.blogPost?.video?.cta?.button || "Start Your Video Journey"}
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