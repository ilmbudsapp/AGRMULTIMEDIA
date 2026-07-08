import type { CSSProperties } from "react";

type FanStrip = {
  rotate: number;
  colors: string[];
  label: string;
};

const FAN_STRIPS: FanStrip[] = [
  { rotate: -72, label: "Anthrazit", colors: ["#1c1c1c", "#333", "#4a4a4a", "#636363", "#7d7d7d", "#969696"] },
  { rotate: -62, label: "Grün", colors: ["#1e3d2a", "#2f5c3e", "#427a52", "#5a9968", "#75b67f", "#94d19a"] },
  { rotate: -52, label: "Salbei", colors: ["#2a4035", "#3f5c48", "#56785c", "#6f9472", "#8ab08a", "#a8cca5"] },
  { rotate: -42, label: "Teal", colors: ["#1a3d42", "#2a5c62", "#3d7a82", "#52989f", "#6ab5bc", "#85d0d6"] },
  { rotate: -32, label: "Petrol", colors: ["#12354a", "#1f4f68", "#2e6a86", "#4086a4", "#55a3c2", "#6dc0df"] },
  { rotate: -22, label: "Blau", colors: ["#152d52", "#234678", "#33609e", "#467bc4", "#5c97e0", "#75b3f5"] },
  { rotate: -12, label: "Himmel", colors: ["#1a3a5c", "#2c5580", "#4272a3", "#5a90c4", "#74aee0", "#8fccf5"] },
  { rotate: 0, label: "Off-White", colors: ["#8a9098", "#a8adb4", "#c5c9ce", "#dfe2e6", "#f2f4f6", "#fafbfc"] },
  { rotate: 12, label: "Beige", colors: ["#6e5a42", "#8a7358", "#a68d6e", "#c4a888", "#dfc9ad", "#f5ead8"] },
  { rotate: 22, label: "Sand", colors: ["#7a6048", "#96785c", "#b29272", "#cfad8c", "#e8c9a8", "#f8e4cc"] },
  { rotate: 32, label: "Terrakotta", colors: ["#6b3428", "#8a4536", "#a85845", "#c66d58", "#e0846c", "#f5a088"] },
  { rotate: 42, label: "Rosé", colors: ["#6b3040", "#884555", "#a85c6c", "#c47585", "#de90a0", "#f5acba"] },
  { rotate: 52, label: "Rot", colors: ["#5c1a22", "#7a2830", "#9a3840", "#bc4a52", "#df6068", "#f57a82"] },
  { rotate: 62, label: "Orange", colors: ["#6b3a10", "#8a5018", "#aa6822", "#cc8230", "#ea9c42", "#ffb85c"] },
  { rotate: 72, label: "Gold", colors: ["#5c4510", "#7a5c18", "#9a7420", "#bc8e2a", "#daa836", "#f5c242"] },
];

export default function ColorPalettePanel() {
  return (
    <aside className="colorPanel fadeIn" aria-label="Farbkonzept – Farbfächer">
      <div className="colorPanelInner">
        <div className="colorFanStage" aria-hidden>
          <div className="colorFanShadow" />
          <div className="colorFanPivot">
            {FAN_STRIPS.map((strip) => (
              <div
                key={strip.label}
                className="colorFanStrip"
                style={{ "--fan-rotate": `${strip.rotate}deg` } as CSSProperties}
                title={strip.label}
              >
                {strip.colors.map((hex, i) => (
                  <span key={i} style={{ backgroundColor: hex }} />
                ))}
              </div>
            ))}
            <div className="colorFanRivet" />
          </div>
        </div>

        <div className="colorPanelCopy">
          <p className="colorPanelEyebrow">Farbkonzept</p>
          <p className="colorPanelTitle">Moderne Farbtöne für stilvolle Räume</p>
          <p className="colorPanelNote">Individuelle Farbberatung inklusive</p>
        </div>
      </div>
    </aside>
  );
}
