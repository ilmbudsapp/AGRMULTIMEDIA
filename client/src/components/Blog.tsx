import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Blog() {
  const { t } = useLanguage();
  
  const blogPosts = [
    {
      id: 1,
      slug: "digital-marketing-trends-2024",
      title: t.blog.posts.trends.title,
      description: t.blog.posts.trends.description,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: t.blog.posts.trends.category,
      date: "19.08.2025",
      categoryColor: "bg-electric-blue"
    },
    {
      id: 2,
      slug: "website-conversion-optimization",
      title: t.blog.posts.conversion.title,
      description: t.blog.posts.conversion.description,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: t.blog.posts.conversion.category,
      date: "19.08.2025",
      categoryColor: "bg-purple-500"
    },
    {
      id: 3,
      slug: "video-marketing-power",
      title: t.blog.posts.video.title,
      description: t.blog.posts.video.description,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: t.blog.posts.video.category,
      date: "19.08.2025",
      categoryColor: "bg-red-500"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="blog-title">{t.blog.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="blog-subtitle">
            {t.blog.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover-scale"
              data-testid={`blog-post-${post.id}`}
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
                data-testid={`blog-post-image-${post.id}`}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span 
                    className={`${post.categoryColor} text-white text-xs px-3 py-1 rounded-full`}
                    data-testid={`blog-post-category-${post.id}`}
                  >
                    {post.category}
                  </span>
                  <span 
                    className="text-gray-500 text-sm ml-auto"
                    data-testid={`blog-post-date-${post.id}`}
                  >
                    {post.date}
                  </span>
                </div>
                <h3 
                  className="text-xl font-semibold text-navy mb-3"
                  data-testid={`blog-post-title-${post.id}`}
                >
                  {post.title}
                </h3>
                <p 
                  className="text-gray-600 mb-4"
                  data-testid={`blog-post-description-${post.id}`}
                >
                  {post.description}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <button 
                    className="inline-flex items-center text-electric-blue font-semibold hover:text-purple-500 transition-colors duration-300"
                    data-testid={`blog-post-cta-${post.id}`}
                  >
                    {t.blog.readMore} <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="bg-gradient-to-r from-electric-blue to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            data-testid="blog-view-all-cta"
          >
            {t.blog.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
}
