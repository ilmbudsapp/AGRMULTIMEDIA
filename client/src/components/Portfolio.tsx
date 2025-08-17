import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Sajt",
      description: "Kompletan online shopping doživljaj",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "web"
    },
    {
      id: 2,
      title: "Brend Identitet",
      description: "Kompletan vizuelni identitet za startup",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "brand"
    },
    {
      id: 3,
      title: "Korporativni Video",
      description: "Predstavljanje kompanije kroz video",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "video"
    },
    {
      id: 4,
      title: "Restoran Website",
      description: "Elegantno online prisustvo",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "web"
    },
    {
      id: 5,
      title: "Product Photography",
      description: "Studijska fotografija proizvoda",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "photo"
    },
    {
      id: 6,
      title: "Packaging Dizajn",
      description: "Kreativna ambalažna rešenja",
      image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "brand"
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'Svi projekti' },
    { id: 'web', label: 'Web Dizajn' },
    { id: 'brand', label: 'Brending' },
    { id: 'video', label: 'Video' },
    { id: 'photo', label: 'Fotografija' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="portfolio-title">Naš Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="portfolio-subtitle">
            Pogledajte neke od naših najuspešnijih projekata koji su doneli rezultate klijentima
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4" data-testid="portfolio-filter">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeFilter === category.id
                  ? 'bg-electric-blue text-white'
                  : 'text-gray-600 hover:text-electric-blue'
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
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-scale"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-semibold mb-2" data-testid={`portfolio-item-title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4" data-testid={`portfolio-item-description-${item.id}`}>
                    {item.description}
                  </p>
                  <button 
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
                    data-testid={`portfolio-item-cta-${item.id}`}
                  >
                    Pogledaj detalje
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
