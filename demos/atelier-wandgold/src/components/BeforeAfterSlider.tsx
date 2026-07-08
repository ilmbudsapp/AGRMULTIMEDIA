"use client";

import { useEffect, useRef, useState } from "react";
import { BASE } from "@/lib/site";

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const [frameW, setFrameW] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const before = `${BASE}/images/before.jpg`;
  const after = `${BASE}/images/after.jpg`;

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setFrameW(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="baSlider fadeUp">
      <div ref={frameRef} className="baSliderFrame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={after} alt="Raum nach der Renovierung durch Malermeister Stuttgart" className="baAfter" />
        <div className="baBeforeClip" style={{ width: `${pos}%` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={before}
            alt="Raum vor der Renovierung"
            className="baBefore"
            style={{ width: frameW > 0 ? frameW : undefined }}
          />
        </div>
        <div className="baHandle" style={{ left: `${pos}%` }} aria-hidden />
        <span className="baLabel baLabelBefore">Vorher</span>
        <span className="baLabel baLabelAfter">Nachher</span>
      </div>
      <label className="baRangeLabel" htmlFor="ba-range">
        <span className="srOnly">Vorher-Nachher-Vergleich verschieben</span>
        <input
          id="ba-range"
          type="range"
          min={5}
          max={95}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="baRange"
        />
      </label>
    </div>
  );
}
