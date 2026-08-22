import React from "react";
import { interpolate } from "remotion";
import { c } from "../theme";
import { display, mono } from "../fonts";

/**
 * The one diagram the format owns. Scene 2 shows it broken, scene 3 shows the
 * same geometry repaired — every element is absolutely positioned so the boxes
 * cannot shift between the two scenes. If they move, the "we changed one
 * thing" reading is lost and it just looks like a different picture.
 *
 * `fix` is 0 (broken, oxide) → 1 (reconciled, verdigris). Scene 2 pins it at 0.
 */
const W = 1180;
const H = 380;
const BOX_W = 380;
const BOX_H = 168;
const MID_Y = BOX_H / 2;
const LAYER_Y = 300;

export const Diagram: React.FC<{
  fix: number;
  layerLabel: string;
  brokenLabel: string;
}> = ({ fix, layerLabel, brokenLabel }) => {
  const closed = interpolate(fix, [0.35, 0.85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const link = closed > 0.5 ? c.verdigris : c.oxide;

  // Broken: each run covers 34% of the span, leaving a third of it missing.
  // Closed: each covers 50% and they meet in the middle. Drawn as two growing
  // segments rather than one line behind a mask — a mask would have to match
  // the backdrop, and the backdrop has a gradient on it.
  const seg = `${interpolate(closed, [0, 1], [34, 50])}%`;

  const layerIn = interpolate(fix, [0.15, 0.55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const riserH = interpolate(fix, [0.45, 0.8], [0, LAYER_Y - BOX_H], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "relative", width: W, height: H }}>
      <SystemBox title="CRM" caption="books on signature" style={{ left: 0 }} />
      <SystemBox title="FINANCE" caption="books on invoice" style={{ right: 0 }} />

      {/* the link between them */}
      <div
        style={{
          position: "absolute",
          left: BOX_W + 26,
          right: BOX_W + 26,
          top: MID_Y,
          height: 4,
        }}
      >
        <Run side="left" width={seg} color={link} closed={closed} />
        <Run side="right" width={seg} color={link} closed={closed} />
        <div
          style={{
            position: "absolute",
            top: -48,
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
            fontFamily: mono,
            fontSize: 21,
            letterSpacing: "0.1em",
            color: c.oxide,
            opacity: 1 - closed,
          }}
        >
          {brokenLabel}
        </div>
      </div>

      {/* risers from each box down into the layer */}
      <Riser x={BOX_W / 2} height={riserH} />
      <Riser x={W - BOX_W / 2} height={riserH} />

      {/* the reconciliation layer itself */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: LAYER_Y,
          padding: "24px 0",
          textAlign: "center",
          backgroundColor: c.verdigrisSoft,
          border: `1px solid ${c.verdigris}`,
          fontFamily: mono,
          fontSize: 24,
          letterSpacing: "0.24em",
          color: c.verdigris,
          opacity: layerIn,
          transform: `translateY(${(1 - layerIn) * 34}px)`,
        }}
      >
        {layerLabel}
      </div>
    </div>
  );
};

const SystemBox: React.FC<{
  title: string;
  caption: string;
  style: React.CSSProperties;
}> = ({ title, caption, style }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      width: BOX_W,
      height: BOX_H,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: c.panel,
      border: `1px solid ${c.rule2}`,
      ...style,
    }}
  >
    <div style={{ fontFamily: display, fontSize: 52, fontWeight: 700, color: c.bone }}>
      {title}
    </div>
    <div style={{ fontFamily: mono, fontSize: 20, color: c.bone3, marginTop: 10 }}>
      {caption}
    </div>
  </div>
);

/** One half of the link. Dashed while there is still a gap, solid once closed. */
const Run: React.FC<{
  side: "left" | "right";
  width: string;
  color: string;
  closed: number;
}> = ({ side, width, color, closed }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      [side]: 0,
      width,
      borderTop: `4px ${closed > 0.92 ? "solid" : "dashed"} ${color}`,
    }}
  />
);

const Riser: React.FC<{ x: number; height: number }> = ({ x, height }) => (
  <div
    style={{
      position: "absolute",
      left: x - 1,
      top: BOX_H,
      width: 2,
      height,
      backgroundColor: c.verdigris,
    }}
  />
);
