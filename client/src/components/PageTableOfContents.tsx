type TocItem = { id: string; label: string };

export default function PageTableOfContents({ items, title = "Inhaltsverzeichnis" }: { items: TocItem[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <nav className="mb-12 rounded-xl border border-white/10 bg-white/[0.02] p-5" aria-label={title}>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-300/90">{title}</h2>
      <ol className="mt-3 space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-blue-300 hover:text-blue-200 hover:underline">
              {i + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
