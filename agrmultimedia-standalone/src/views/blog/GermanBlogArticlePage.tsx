import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import Contact from "@/components/Contact";
import { BLOG_POSTS_DE } from "@/data/blogPostsDe";
import { ROUTES } from "@/lib/siteRoutes";

export default function GermanBlogArticlePage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = BLOG_POSTS_DE.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <Navigation />
        <main className="mx-auto max-w-3xl px-4 py-32 text-center">
          <h1 className="text-2xl font-semibold">Artikel nicht gefunden</h1>
          <Link href={ROUTES.blog} className="mt-4 inline-block text-blue-300 hover:underline">
            Zurück zum Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      <Navigation />
      <BreadcrumbNav />
      <main id="main-content" className="pt-8">
        <article className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <p className="text-sm text-blue-300">{post.category} · {post.date}</p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">{post.description}</p>
          <img
            src={post.image}
            alt={post.imageAlt}
            className="mt-8 h-56 w-full rounded-2xl object-cover md:h-72"
            loading="lazy"
            decoding="async"
          />
          <div className="prose-invert mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-white md:text-2xl">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 30)} className="mt-3 leading-relaxed text-gray-300">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
          <p className="mt-10">
            <Link href={ROUTES.webdesignGeislingen} className="font-medium text-blue-300 hover:underline">
              Webdesign in Geislingen an der Steige — AGR Multimedia
            </Link>
          </p>
        </article>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
