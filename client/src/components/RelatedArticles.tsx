import { Link } from "wouter";
import { BLOG_POSTS_DE, type BlogPostDe } from "@/data/blogPostsDe";
import { ROUTES } from "@/lib/siteRoutes";

function scoreRelated(current: BlogPostDe, candidate: BlogPostDe): number {
  if (current.slug === candidate.slug) return -1;
  let score = 0;
  if (current.category === candidate.category) score += 3;
  const currentWords = current.title.toLowerCase().split(/\s+/);
  for (const w of currentWords) {
    if (w.length > 4 && candidate.title.toLowerCase().includes(w)) score += 1;
  }
  return score;
}

export default function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const current = BLOG_POSTS_DE.find((p) => p.slug === currentSlug);
  if (!current) return null;

  const related = [...BLOG_POSTS_DE]
    .map((p) => ({ p, score: scoreRelated(current, p) }))
    .filter((x) => x.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((x) => x.p);

  if (related.length === 0) return null;

  return (
    <aside className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className="text-xl font-semibold text-white md:text-2xl">
        Verwandte Artikel
      </h2>
      <ul className="mt-5 space-y-3">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              href={`${ROUTES.blog}/${post.slug}`}
              className="text-blue-300 hover:text-blue-200 hover:underline"
            >
              {post.title}
            </Link>
            <span className="ml-2 text-sm text-gray-500">{post.category}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-gray-400">
        <Link href={ROUTES.webdesignGeislingen} className="text-blue-300 hover:underline">
          Webdesign Geislingen — ausführlicher Guide
        </Link>
        {" · "}
        <Link href={ROUTES.webdesignSeo} className="text-blue-300 hover:underline">
          Webdesign &amp; SEO
        </Link>
        {" · "}
        <Link href={ROUTES.about} className="text-blue-300 hover:underline">
          Über AGR Multimedia
        </Link>
      </p>
    </aside>
  );
}
