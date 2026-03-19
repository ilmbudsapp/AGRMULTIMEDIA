import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function FoodTruckWeb500() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = t.blog.posts.foodTruck;

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      {/* Simple hero */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">{post.description}</p>
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
            alt={post.title}
            className="w-full h-[260px] sm:h-[320px] object-cover rounded-2xl mb-10"
            loading="lazy"
            decoding="async"
          />

          <div className="text-gray-300 leading-relaxed bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-3">Šta sam uradio</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Struktura sajta koja vodi posetioce ka upitu (CTA).</li>
              <li>Prvo dizajn, zatim SEO osnove (naslovi, opis, internе veze).</li>
              <li>Brze sekcije: jasno, kratko, i prilagođeno mobilnim uređajima.</li>
            </ul>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

