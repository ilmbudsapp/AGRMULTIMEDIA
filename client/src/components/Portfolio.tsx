import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

import bannerWeb from "@assets/BANNER 1_1755557330915.jpg";
import greenHarvest from "@assets/generated_images/GreenHarvest_Organic_Logo_b1862bc1.png";
import innovateTech from "@assets/generated_images/InnovateTech_Solutions_Logo_316280d4.png";
import posterRagazzo from "@assets/Ragazzo con lanterne_1755565190060.jpg";
import posterKong from "@assets/KING KONG_1755565210288.jpg";
import powerFit from "@assets/generated_images/PowerFit_Pro_Brand_Identity_3cf59135.png";
import printMockup from "@assets/generated_images/Print_Materials_Mockup_f741f1f6.png";

export default function Portfolio() {
  const { t, tSpec } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    { id: 1, title: t.portfolio.items.ecommerce.title, description: t.portfolio.items.ecommerce.description, image: bannerWeb, category: "web", slug: "ecommerce-site" },
    { id: 2, title: t.portfolio.items.brand.title, description: t.portfolio.items.brand.description, image: greenHarvest, category: "brand", slug: "brand-identity" },
    { id: 3, title: t.portfolio.items.corporate.title, description: t.portfolio.items.corporate.description, image: powerFit, category: "video", slug: "corporate-video" },
    { id: 4, title: t.portfolio.items.restaurant.title, description: t.portfolio.items.restaurant.description, image: bannerWeb, category: "web", slug: "restaurant-website" },
    { id: 5, title: t.portfolio.items.product.title, description: t.portfolio.items.product.description, image: posterRagazzo, category: "photo", slug: "product-photography" },
    { id: 6, title: t.portfolio.items.packaging.title, description: t.portfolio.items.packaging.description, image: printMockup, category: "brand", slug: "packaging-design" },
    { id: 7, title: "InnovateTech Solutions", description: t.portfolio.items.brand.description, image: innovateTech, category: "brand", slug: "brand-identity" },
    { id: 8, title: t.portfolio.items.corporate.title, description: t.portfolio.items.corporate.description, image: posterKong, category: "photo", slug: "corporate-video" },
  ];

  const filterCategories = [
    { id: 'all', label: tSpec.featuredPortfolio.filterAll },
    { id: 'web', label: tSpec.featuredPortfolio.filterWeb },
    { id: 'brand', label: tSpec.featuredPortfolio.filterGraphic },
    { id: 'video', label: tSpec.featuredPortfolio.filterVideo },
    { id: 'photo', label: tSpec.featuredPortfolio.filterPhoto },
    { id: 'ai', label: tSpec.featuredPortfolio.filterAi },
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
                src={item.image as string} 
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
