import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]

# index.html elenco cards
index = root / "index.html"
text = index.read_text(encoding="utf-8")
text = re.sub(
    r'<span class="elenco__num">Story #(\d+)</span>',
    r'<span class="elenco__num" data-i18n-num="\1">Story #\1</span>',
    text,
)
text = text.replace(
    '<span class="elenco__link">Read tale ',
    '<span class="elenco__link"><span data-i18n="elenco.readTale">Read tale</span> ',
)
index.write_text(text, encoding="utf-8")

OLD_HEADER = '''<header class="site-header">
  <div class="demo-bar">Demo-Website · Privremeni preview · <span>AGRMULTIMEDIA</span></div>
  <div class="site-nav">
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="/demo/enchanted-chronicles/">The Enchanted Chronicles</a>
      <button type="button" class="site-nav__toggle" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav-menu">
        <span class="site-nav__toggle-bar"></span>
        <span class="site-nav__toggle-bar"></span>
        <span class="site-nav__toggle-bar"></span>
      </button>
      <nav class="site-nav__panel" id="site-nav-menu" aria-label="Main navigation">
        <ul class="site-nav__list">
          <li><a class="site-nav__link" href="/demo/enchanted-chronicles/">Home Page</a></li>
          <li><a class="site-nav__link" href="/demo/enchanted-chronicles/#elenco">Stories</a></li>
          <li><a class="site-nav__link" href="/demo/enchanted-chronicles/about.html">About Me</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>'''

NEW_HEADER = '''<header class="site-header">
  <div class="demo-bar"><span data-i18n="demoBar">Demo-Website · Temporary preview ·</span> <span>AGRMULTIMEDIA</span></div>
  <div class="site-nav">
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="/demo/enchanted-chronicles/" data-i18n="nav.brand">The Enchanted Chronicles</a>
      <div class="lang-switch" role="group" data-i18n-attr="aria-label:nav.language">
        <button type="button" class="lang-switch__btn is-active" data-lang="en" aria-pressed="true">EN</button>
        <button type="button" class="lang-switch__btn" data-lang="de" aria-pressed="false">DE</button>
      </div>
      <button type="button" class="site-nav__toggle" data-i18n-attr="aria-label:nav.openMenu" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav-menu">
        <span class="site-nav__toggle-bar"></span>
        <span class="site-nav__toggle-bar"></span>
        <span class="site-nav__toggle-bar"></span>
      </button>
      <nav class="site-nav__panel" id="site-nav-menu" data-i18n-attr="aria-label:nav.mainNav" aria-label="Main navigation">
        <ul class="site-nav__list">
          <li><a class="site-nav__link" href="/demo/enchanted-chronicles/" data-i18n="nav.home">Home Page</a></li>
          <li><a class="site-nav__link" href="/demo/enchanted-chronicles/#elenco" data-i18n="nav.stories">Stories</a></li>
          <li><a class="site-nav__link" href="/demo/enchanted-chronicles/about.html" data-i18n="nav.about">About Me</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>'''

OLD_BACK = '''      Back to Elenco'''
NEW_BACK = '''      <span data-i18n="story.backToElenco">Back to Elenco</span>'''

for story in (root / "stories").glob("*.html"):
    s = story.read_text(encoding="utf-8")
    if OLD_HEADER in s:
        s = s.replace(OLD_HEADER, NEW_HEADER)
    if OLD_BACK in s:
        s = s.replace(OLD_BACK, NEW_BACK)
    if 'assets/i18n.js' not in s:
        s = s.replace(
            '<script src="/demo/enchanted-chronicles/assets/site.js" defer></script>',
            '<script src="/demo/enchanted-chronicles/assets/i18n.js" defer></script>\n<script src="/demo/enchanted-chronicles/assets/site.js" defer></script>',
        )
    story.write_text(s, encoding="utf-8")

print("patched index elenco + story nav")
