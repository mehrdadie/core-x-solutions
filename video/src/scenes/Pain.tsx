import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { c } from "../theme";
import { display, mono } from "../fonts";
import { Backdrop, Eyebrow, KineticLine, SceneFade } from "../ui";
import { caseStudy } from "../case-study";

/** One side of the disagreement. The value counts up so the eye lands on it. */
const LedgerCard: React.FC<{
  source: string;
  value: number;
  unit?: string;
  start: number;
  accent: string;
}> = ({ source, value, unit, start, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame: frame - start, fps, config: { damping: 200 } });
  const shown = Math.round(
    interpolate(frame, [start + 6, start + 34], [0, value], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  return (
    <div
      style={{
        width: 460,
        padding: "48px 44px",
        backgroundColor: c.panel,
        border: `1px solid ${c.rule2}`,
        borderTop: `3px solid ${accent}`,
        opacity: enter,
        transform: `translateY(${(1 - enter) * 40}px)`,
      }}
    >
      <div
        style={{
          fontFamily: mono,
          fontSize: 21,
          letterSpacing: "0.22em",
          color: c.bone3,
          textTransform: "uppercase",
        }}
      >
        {source}
      </div>
      <div
        style={{
          fontFamily: display,
          fontSize: 156,
          fontWeight: 700,
          lineHeight: 1.05,
          color: accent,
          fontVariantNumeric: "tabular-nums",
          marginTop: 12,
        }}
      >
        {shown}
      </div>
      {unit ? (
        <div style={{ fontFamily: mono, fontSize: 22, color: c.bone2 }}>{unit}</div>
      ) : null}
    </div>
  );
};

export const Pain: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const { pain, sector } = caseStudy;

  // The gap line arrives only after both figures have settled — the viewer
  // should have a beat to notice the mismatch before it is named for them.
  const gapIn = interpolate(frame, [196, 214], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pulse = 1 + 0.02 * Math.sin((frame - 196) / 7);

  return (
    <Backdrop tint={c.oxideSoft}>
      <SceneFade duration={duration}>
        <AbsoluteFill
          style={{
            fontFamily: display,
            alignItems: "center",
            justifyContent: "center",
            gap: 46,
            padding: 90,
          }}
        >
          <Eyebrow>{sector}</Eyebrow>
          <KineticLine text={pain.headline} start={14} size={72} maxWidth={1400} />

          <div style={{ display: "flex", gap: 40, alignItems: "stretch", marginTop: 8 }}>
            <LedgerCard {...pain.ledgerA} start={112} accent={c.signal} />
            <LedgerCard {...pain.ledgerB} start={132} accent={c.oxide} />
          </div>

          <div
            style={{
              fontFamily: mono,
              fontSize: 32,
              color: c.oxide,
              letterSpacing: "0.06em",
              opacity: gapIn,
              transform: `scale(${gapIn * pulse})`,
            }}
          >
            {pain.gapLabel}
          </div>
        </AbsoluteFill>
      </SceneFade>
    </Backdrop>
  );
};
