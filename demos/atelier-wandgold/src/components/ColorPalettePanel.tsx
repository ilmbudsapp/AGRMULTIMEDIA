import type { CSSProperties } from "react";

const SWATCHES = [
  { name: "Off White", hex: "#F8F6F2" },
  { name: "Sand Beige", hex: "#D9C8B0" },
  { name: "Light Blue", hex: "#A8C5DA" },
  { name: "Sage Green", hex: "#8FA98C" },
  { name: "Warm Grey", hex: "#B8B2A8" },
  { name: "Terracotta", hex: "#C4785A" },
  { name: "Deep Navy", hex: "#1E3A5F" },
] as const;

const FAN_STRIPS = [
  { rotate: -56, colors: ["#2a4035", "#4a6650", "#6a8870", "#8aa890"] },
  { rotate: -42, colors: ["#1a3d42", "#3d7a82", "#6ab5bc", "#85d0d6"] },
  { rotate: -28, colors: ["#152d52", "#33609e", "#5c97e0", "#8fccf5"] },
  { rotate: -14, colors: ["#8a9098", "#c5c9ce", "#f2f4f6", "#fafbfc"] },
  { rotate: 0, colors: ["#6e5a42", "#a68d6e", "#dfc9ad", "#f5ead8"] },
  { rotate: 14, colors: ["#6b3428", "#a85845", "#e0846c", "#f5a088"] },
  { rotate: 28, colors: ["#5c1a22", "#9a3840", "#df6068", "#f57a82"] },
  { rotate: 42, colors: ["#6b3a10", "#aa6822", "#ea9c42", "#ffb85c"] },
  { rotate: 56, colors: ["#5c4510", "#9a7420", "#daa836", "#f5c242"] },
] as const;

export default function ColorPalettePanel() {
  return (
    <div className="materialBoardWrap">
      <div className="materialBoardGlow materialBoardGlow--left" aria-hidden />
      <div className="materialBoardGlow materialBoardGlow--right" aria-hidden />

      <div className="materialBoardSurface">
        <div className="materialBoardDeskShadow" aria-hidden />

        <aside
          className="materialBoardPanel"
          aria-label="Farbkonzept und Materialauswahl"
          data-reveal-instant
        >
          <header className="materialBoardHeader">
            <p className="materialBoardEyebrow">Farbkonzept</p>
            <h2 className="materialBoardTitle">Farbkonzept &amp; Materialauswahl</h2>
            <p className="materialBoardSubtitle">Moderne Farbtöne für stilvolle Räume</p>
          </header>

          <div className="materialBoardBody">
            <div className="materialBoardFan" aria-hidden>
              <div className="colorFanShadow" />
              <div className="colorFanPivot colorFanPivot--large">
                {FAN_STRIPS.map((strip, i) => (
                  <div
                    key={i}
                    className="colorFanStrip colorFanStrip--large"
                    style={{ "--fan-rotate": `${strip.rotate}deg` } as CSSProperties}
                  >
                    {strip.colors.map((hex, j) => (
                      <span key={j} style={{ backgroundColor: hex }} />
                    ))}
                  </div>
                ))}
                <div className="colorFanRivet colorFanRivet--large" />
              </div>
            </div>

            <ul className="materialSwatches" aria-label="Ausgewählte Farbtöne">
              {SWATCHES.map((swatch) => (
                <li key={swatch.name} className="materialSwatchItem">
                  <span
                    className="materialSwatch"
                    style={{ backgroundColor: swatch.hex }}
                    title={swatch.name}
                  />
                  <span className="materialSwatchName">{swatch.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="materialBoardNote">Individuelle Farbberatung inklusive</p>
        </aside>
      </div>
    </div>
  );
}
