/** German SEO blog post shape. */
export type BlogPostDe = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
};
