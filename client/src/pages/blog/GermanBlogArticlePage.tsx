import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import Contact from "@/components/Contact";
import AuthorByline from "@/components/AuthorByline";
import BlogPostingJsonLd from "@/components/BlogPostingJsonLd";
import RelatedArticles from "@/components/RelatedArticles";
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
      <BlogPostingJsonLd
        slug={post.slug}
        headline={post.title}
        description={post.description}
        datePublished={post.date}
        image={post.image}
      />
      <Navigation />
      <BreadcrumbNav />
      <main id="main-content" className="pt-8">
        <article className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <p className="text-sm text-blue-300">
            {post.category} · Veröffentlicht:{" "}
            <time dateTime={post.date}>{post.date}</time>
          </p>
          <AuthorByline className="mt-3" variant="lightOnDark" language="de" />
          <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">{post.title}</h1>
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
          <nav className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Interne Links">
            <Link href={ROUTES.webdesignGeislingen} className="font-medium text-blue-300 hover:underline">
              Webdesign Geislingen
            </Link>
            <Link href={ROUTES.webdesignSeo} className="font-medium text-blue-300 hover:underline">
              Webdesign &amp; SEO
            </Link>
            <Link href={ROUTES.portfolio} className="font-medium text-blue-300 hover:underline">
              Portfolio
            </Link>
            <Link href={ROUTES.kontakt} className="font-medium text-blue-300 hover:underline">
              Kontakt
            </Link>
          </nav>

          <div className="mt-10 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-6 py-8 text-center">
            <p className="text-lg font-semibold text-white">Projekt starten?</p>
            <Link
              href={ROUTES.kontakt}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a0a0f] hover:bg-white/90"
            >
              Projekt starten → Kontakt
            </Link>
          </div>

          <RelatedArticles currentSlug={post.slug} />
        </article>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
