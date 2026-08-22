import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { c } from "../theme";
import { display, mono, sans } from "../fonts";
import { Backdrop, SceneFade } from "../ui";
import { caseStudy } from "../case-study";

/**
 * The beat the whole video exists for. One figure, nothing else on screen —
 * a second number here would halve the weight of the first. If a case study
 * cannot fill this scene with a defensible figure, it is not a video yet.
 */
export const NumberBeat: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { metric } = caseStudy;

  const count = Math.round(
    interpolate(frame, [24, 108], [metric.from, metric.to], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: (t) => 1 - Math.pow(1 - t, 3),
    }),
  );
  const pop = spring({ frame: frame - 108, fps, config: { damping: 12, mass: 0.6 } });
  const scale = 1 + pop * 0.03;

  const ruleWidth = interpolate(frame, [112, 148], [0, 620], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const labelIn = interpolate(frame, [130, 158], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const footIn = interpolate(frame, [200, 230], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Backdrop tint={c.verdigrisSoft}>
      <SceneFade duration={duration}>
        <AbsoluteFill
          style={{
            fontFamily: display,
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 320,
              fontWeight: 700,
              lineHeight: 1,
              color: c.verdigris,
              fontVariantNumeric: "tabular-nums",
              transform: `scale(${scale})`,
            }}
          >
            {count}
            {metric.suffix}
          </div>

          <div style={{ width: ruleWidth, height: 1, backgroundColor: c.rule2, marginTop: 26 }} />

          <div
            style={{
              fontFamily: sans,
              fontSize: 42,
              color: c.bone,
              marginTop: 26,
              opacity: labelIn,
            }}
          >
            {metric.label}
          </div>

          <div
            style={{
              fontFamily: mono,
              fontSize: 21,
              letterSpacing: "0.12em",
              color: c.bone3,
              marginTop: 30,
              opacity: footIn,
            }}
          >
            {metric.footnote}
          </div>
        </AbsoluteFill>
      </SceneFade>
    </Backdrop>
  );
};
