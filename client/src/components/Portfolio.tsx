import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Portfolio() {
  const { t, tSpec } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    { id: 1, title: t.portfolio.items.ecommerce.title, description: t.portfolio.items.ecommerce.description, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", category: "web", slug: "ecommerce-site" },
    { id: 2, title: t.portfolio.items.brand.title, description: t.portfolio.items.brand.description, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", category: "brand", slug: "brand-identity" },
    { id: 3, title: t.portfolio.items.corporate.title, description: t.portfolio.items.corporate.description, image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", category: "video", slug: "corporate-video" },
    { id: 4, title: t.portfolio.items.restaurant.title, description: t.portfolio.items.restaurant.description, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", category: "web", slug: "restaurant-website" },
    { id: 5, title: t.portfolio.items.product.title, description: t.portfolio.items.product.description, image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", category: "photo", slug: "product-photography" },
    { id: 6, title: t.portfolio.items.packaging.title, description: t.portfolio.items.packaging.description, image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", category: "brand", slug: "packaging-design" }
  ];

  const filterCategories = [
    { id: 'all', label: tSpec.featuredPortfolio.filterAll },
    { id: 'web', label: tSpec.featuredPortfolio.filterWeb },
    { id: 'brand', label: tSpec.featuredPortfolio.filterGraphic },
    { id: 'video', label: tSpec.featuredPortfolio.filterVideo },
    { id: 'photo', label: tSpec.featuredPortfolio.filterPhoto },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" data-testid="portfolio-title">
            {tSpec.featuredPortfolio.heading}
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-3" data-testid="portfolio-filter">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors duration-300 ${
                activeFilter === category.id
                  ? 'bg-white text-[#0a0a0f]'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/10'
              }`}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-semibold mb-2" data-testid={`portfolio-item-title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2" data-testid={`portfolio-item-description-${item.id}`}>
                    {item.description}
                  </p>
                  <Link href={`/portfolio/${item.slug}`}>
                    <button 
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
                      data-testid={`portfolio-item-cta-${item.id}`}
                    >
                      {tSpec.featuredPortfolio.viewDetails}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
