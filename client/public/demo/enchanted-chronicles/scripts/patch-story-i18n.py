"""Patch story HTML for i18n-driven body rendering."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STORIES = ROOT / "stories"
INDEX = ROOT / "index.html"

for html_path in sorted(STORIES.glob("*.html")):
    slug = html_path.stem
    text = html_path.read_text(encoding="utf-8")

    text = re.sub(
        r'(<article class="story-page__content reveal")',
        rf'\1 data-story="{slug}"',
        text,
        count=1,
    )
    text = re.sub(
        r'<span class="story-page__label">[^<]*</span>',
        '<span class="story-page__label" data-i18n-story="label"></span>',
        text,
        count=1,
    )
    text = re.sub(
        r'<h1 class="story-page__title">[^<]*</h1>',
        '<h1 class="story-page__title" data-i18n-story="title"></h1>',
        text,
        count=1,
    )
    text = re.sub(
        r'<div class="story-page__text">.*?</div>\s*(?=<div class="story-page__footer">)',
        '<div class="story-page__text" data-story-body></div>\n      ',
        text,
        count=1,
        flags=re.DOTALL,
    )
    text = re.sub(
        r'(<img src="/demo/enchanted-chronicles/images/[^"]+" )alt="[^"]*"',
        r'\1data-i18n-story-attr="alt:coverAlt" alt=""',
        text,
        count=1,
    )
    text = re.sub(
        r'(<a class="btn btn-secondary" href="/demo/enchanted-chronicles/#elenco">)[^<]*(</a>)',
        r'\1<span data-i18n-story="backToStories">Back to Stories</span>\2',
        text,
        count=1,
    )
    text = text.replace(
        "<title>",
        '<title data-i18n-story="metaTitle">',
        1,
    )
    text = re.sub(
        r'(<meta name="description" )content="[^"]*"',
        r'\1data-i18n-story-attr="content:metaDescription" content=""',
        text,
        count=1,
    )

    html_path.write_text(text, encoding="utf-8")

# index elenco cards
index = INDEX.read_text(encoding="utf-8")
index = re.sub(
    r'(<a class="elenco__card[^"]*" href="/demo/enchanted-chronicles/stories/([^"]+)\.html">.*?'
    r'<span class="elenco__num" data-i18n-num=")(\d+)(">)[^<]*(</span>\s*'
    r'<h3 class="elenco__name">)[^<]*(</h3>\s*'
    r'<p class="elenco__excerpt">)[^<]*(?:&[^;]+;[^<]*)*(</p>)',
    lambda m: (
        f'{m.group(1)}{m.group(3)}{m.group(4)}</span>\n          '
        f'<h3 class="elenco__name" data-i18n-story-card="{m.group(2)}" data-i18n-field="cardTitle"></h3>\n          '
        f'<p class="elenco__excerpt" data-i18n-story-card="{m.group(2)}" data-i18n-field="excerpt"></p>'
    ),
    index,
    flags=re.DOTALL,
)
INDEX.write_text(index, encoding="utf-8")
print("patched stories + index cards")
