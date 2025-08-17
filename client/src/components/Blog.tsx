import { ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Najvažnijih Trendova u Digitalnom Marketingu za 2024.",
      description: "Otkrijte najnovije trendove koji će definisati digitalni marketing u narednoj godini i kako možete prilagoditi svoju strategiju...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "Marketing",
      date: "15. Dec 2023",
      categoryColor: "bg-electric-blue"
    },
    {
      id: 2,
      title: "Kako da Kreirate Web Sajt koji Konvertuje Posetioce",
      description: "Pratite najbolje prakse web dizajna koji ne samo što izgleda dobro, već i efikasno konvertuje posetioce u klijente...",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "Dizajn",
      date: "12. Dec 2023",
      categoryColor: "bg-purple-500"
    },
    {
      id: 3,
      title: "Moć Video Marketinga: Zašto je Video Kralj Sadržaja",
      description: "Video marketing nije samo trend - to je budućnost digitalne komunikacije. Saznajte kako možete iskoristiti video za rast biznisa...",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "Video",
      date: "10. Dec 2023",
      categoryColor: "bg-red-500"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="blog-title">Blog i Novosti</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="blog-subtitle">
            Pratite najnovije trendove u digitalnom marketingu i dizajnu
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
                <button 
                  className="inline-flex items-center text-electric-blue font-semibold hover:text-purple-500 transition-colors duration-300"
                  data-testid={`blog-post-cta-${post.id}`}
                >
                  Čitaj više <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="bg-gradient-to-r from-electric-blue to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            data-testid="blog-view-all-cta"
          >
            Pogledaj sve članke
          </button>
        </div>
      </div>
    </section>
  );
}
