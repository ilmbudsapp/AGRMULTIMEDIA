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

type PortfolioProps = { featured?: boolean; asPage?: boolean };

export default function Portfolio({ featured = false, asPage = false }: PortfolioProps) {
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

  const curatedFeatured = (() => {
    const seen = new Set<string>();
    const out: typeof portfolioItems = [];
    for (const item of portfolioItems) {
      if (seen.has(item.slug)) continue;
      seen.add(item.slug);
      out.push(item);
      if (out.length >= 6) break;
    }
    return out;
  })();

  const displayItems = featured ? curatedFeatured : filteredItems;

  return (
    <section id="portfolio" className={`scroll-mt-24 ${featured ? "py-20 md:py-24 bg-[#0a0a0c]" : "py-24 bg-[#0f0f14]"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${featured ? "mb-12 md:mb-14 text-left max-w-2xl" : "text-center mb-16"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">{tSpec.nav.portfolio}</p>
          {asPage ? (
            <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight" data-testid="portfolio-title">
              {tSpec.featuredPortfolio.heading}
            </h1>
          ) : (
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight" data-testid="portfolio-title">
              {tSpec.featuredPortfolio.heading}
            </h2>
          )}
          <p className={`text-white/55 text-sm md:text-base leading-relaxed ${featured ? "mt-3" : "mt-4 text-gray-400 max-w-3xl mx-auto"}`}>
            {featured ? tSpec.featuredPortfolio.featuredIntro : t.portfolio.subtitle}
          </p>
        </div>

        {!featured && (
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
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-colors hover:border-white/[0.1]"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img 
                src={item.image as string} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${featured ? "h-52 md:h-56" : "h-64"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-white text-lg font-semibold mb-1" data-testid={`portfolio-item-title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="text-white/75 text-sm mb-4 line-clamp-2" data-testid={`portfolio-item-description-${item.id}`}>
                    {item.description}
                  </p>
                  <Link href={`/portfolio/${item.slug}`}>
                    <span 
                      className="inline-block text-sm font-medium text-white border-b border-white/40 pb-0.5 hover:border-white"
                      data-testid={`portfolio-item-cta-${item.id}`}
                    >
                      {tSpec.featuredPortfolio.viewDetails}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {featured && (
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex text-sm font-medium text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              {tSpec.nav.portfolio} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
