const SWATCHES = [
  { name: "Off-White", hex: "#F8F6F2" },
  { name: "Beige", hex: "#D9C8B0" },
  { name: "Salbeigrün", hex: "#8FA98C" },
  { name: "Hellblau", hex: "#A8C5DA" },
  { name: "Warmgrau", hex: "#B8B2A8" },
  { name: "Terrakotta", hex: "#C4785A" },
  { name: "Navy", hex: "#1E3A5F" },
] as const;

export default function ColorPalettePanel() {
  return (
    <aside className="colorPanel fadeIn" aria-label="Farbkonzept Vorschau">
      <div className="colorPanelInner">
        <p className="colorPanelEyebrow">Farbkonzept</p>
        <p className="colorPanelTitle">Moderne Farbtöne für stilvolle Räume</p>

        <ul className="colorSwatches" aria-label="Ausgewählte Farbtöne">
          {SWATCHES.map((swatch) => (
            <li key={swatch.name}>
              <span
                className="colorSwatch"
                style={{ backgroundColor: swatch.hex }}
                title={swatch.name}
                aria-label={swatch.name}
              />
            </li>
          ))}
        </ul>

        <p className="colorPanelNote">Individuelle Farbberatung inklusive</p>
      </div>
    </aside>
  );
}
