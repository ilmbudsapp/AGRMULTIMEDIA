"""Extract ordered story blocks + elenco excerpts into locale JSON."""
import json
import re
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STORIES = ROOT / "stories"
INDEX = ROOT / "index.html"
OUT_EN = ROOT / "locales" / "en" / "stories"
OUT_DE = ROOT / "locales" / "de" / "stories"

OUT_EN.mkdir(parents=True, exist_ok=True)
OUT_DE.mkdir(parents=True, exist_ok=True)


def clean_html_text(s: str) -> str:
    s = unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def extract_blocks(html: str) -> list[dict]:
    m = re.search(r'<div class="story-page__text">(.*?)</div>\s*<div class="story-page__footer">', html, re.DOTALL)
    if not m:
        return []
    inner = m.group(1)
    blocks = []
    for chunk in re.finditer(r"<p(?: class=\"story-page__part\")?>(.*?)</p>", inner, re.DOTALL):
        full = chunk.group(0)
        text = clean_html_text(chunk.group(1))
        kind = "part" if "story-page__part" in full else "p"
        blocks.append({"type": kind, "text": text})
    return blocks


index_html = INDEX.read_text(encoding="utf-8")
excerpts: dict[str, str] = {}
titles: dict[str, str] = {}
for card in re.finditer(
    r'<a class="elenco__card[^"]*" href="/demo/enchanted-chronicles/stories/([^"]+)\.html">.*?'
    r'<h3 class="elenco__name">([^<]+)</h3>\s*'
    r'<p class="elenco__excerpt">([^<]+(?:&[^;]+;[^<]*)*)</p>',
    index_html,
    re.DOTALL,
):
    slug, title, excerpt = card.groups()
    titles[slug] = clean_html_text(title)
    excerpts[slug] = clean_html_text(excerpt)

for html_path in sorted(STORIES.glob("*.html")):
    slug = html_path.stem
    text = html_path.read_text(encoding="utf-8")

    title_m = re.search(r'<h1 class="story-page__title">([^<]+)</h1>', text)
    label_m = re.search(r'<span class="story-page__label">([^<]+)</span>', text)
    meta_title_m = re.search(r"<title>([^<]+)</title>", text)
    meta_desc_m = re.search(r'<meta name="description" content="([^"]*)"', text)
    alt_m = re.search(r'story-page__cover[^>]*>.*?<img src="[^"]+" alt="([^"]*)"', text, re.DOTALL)

    num_m = re.search(r"Story #(\d+)", label_m.group(1) if label_m else "")
    num = int(num_m.group(1)) if num_m else 0

    data = {
        "slug": slug,
        "number": num,
        "metaTitle": clean_html_text(meta_title_m.group(1)) if meta_title_m else slug,
        "metaDescription": clean_html_text(meta_desc_m.group(1)) if meta_desc_m else "",
        "label": clean_html_text(label_m.group(1)) if label_m else "",
        "title": clean_html_text(title_m.group(1)) if title_m else slug,
        "cardTitle": titles.get(slug, clean_html_text(title_m.group(1)) if title_m else slug),
        "excerpt": excerpts.get(slug, ""),
        "coverAlt": clean_html_text(alt_m.group(1)) if alt_m else "",
        "blocks": extract_blocks(text),
        "backToStories": "Back to Stories",
    }

    (OUT_EN / f"{slug}.json").write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"{slug}: {len(data['blocks'])} blocks")

# stories index for elenco cards
for locale_dir in (OUT_EN,):
    idx = {}
    for f in sorted(locale_dir.glob("*.json")):
        if f.name.startswith("_"):
            continue
        d = json.loads(f.read_text(encoding="utf-8"))
        idx[d["slug"]] = {
            "number": d["number"],
            "cardTitle": d["cardTitle"],
            "excerpt": d["excerpt"],
            "label": d["label"],
        }
    (locale_dir / "_index.json").write_text(json.dumps(idx, ensure_ascii=False, indent=2), encoding="utf-8")

print("extracted", len(list(STORIES.glob("*.html"))), "stories")
