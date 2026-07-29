"""Fix invalid JSON in German story files (unescaped quotes in dialogue)."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DE = ROOT / "locales" / "de" / "stories"
EN = ROOT / "locales" / "en" / "stories"

STRING_KEYS = {
    "metaTitle",
    "metaDescription",
    "label",
    "title",
    "cardTitle",
    "excerpt",
    "coverAlt",
    "backToStories",
    "text",
}


def fix_string_line(line: str) -> str:
    m = re.match(r'^(\s*"([^"]+)": ")(.*)("(?:,\s*)?)$', line)
    if not m:
        return line
    prefix, key, content, suffix = m.groups()
    if key not in STRING_KEYS:
        return line
    content = content.replace('\\"', '"')
    escaped = json.dumps(content, ensure_ascii=False)[1:-1]
    trailing_comma = suffix.rstrip().endswith(",")
    return prefix + escaped + ('",' if trailing_comma else '"')


def fix_file(de_path: Path, en_path: Path) -> None:
    raw_lines = de_path.read_text(encoding="utf-8").splitlines()
    fixed_lines = [fix_string_line(line) for line in raw_lines]
    fixed = "\n".join(fixed_lines) + "\n"
    try:
        data = json.loads(fixed)
    except json.JSONDecodeError as exc:
        raise RuntimeError(f"{de_path.name}: {exc}") from exc

    en_data = json.loads(en_path.read_text(encoding="utf-8"))
    if len(data.get("blocks", [])) != len(en_data.get("blocks", [])):
        raise RuntimeError(
            f"{de_path.name}: block count {len(data.get('blocks', []))} != EN {len(en_data.get('blocks', []))}"
        )

    de_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    for en_path in sorted(EN.glob("*.json")):
        if en_path.name.startswith("_"):
            continue
        de_path = DE / en_path.name
        if not de_path.exists():
            raise FileNotFoundError(de_path)
        fix_file(de_path, en_path)
        print("fixed", de_path.name)


if __name__ == "__main__":
    main()
