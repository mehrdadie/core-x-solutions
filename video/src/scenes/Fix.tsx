import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { c } from "../theme";
import { display, sans } from "../fonts";
import { Backdrop, Eyebrow, KineticLine, SceneFade } from "../ui";
import { Diagram } from "./Diagram";
import { caseStudy } from "../case-study";

export const Fix: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const { fix } = caseStudy;

  // Opens on the broken diagram from the previous scene so the cut reads as a
  // continuation, then repairs it on camera between frames 150 and 300.
  const repair = interpolate(frame, [150, 300], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tint = repair < 0.5 ? c.oxideSoft : c.verdigrisSoft;

  const bodyIn = interpolate(frame, [320, 352], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Backdrop tint={tint}>
      <SceneFade duration={duration}>
        <AbsoluteFill
          style={{
            fontFamily: display,
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            padding: 80,
          }}
        >
          <Eyebrow color={c.verdigris}>What we did</Eyebrow>
          <KineticLine text={fix.headline} start={10} size={66} maxWidth={1300} />

          <div style={{ marginTop: 10 }}>
            <Diagram fix={repair} layerLabel={fix.layerLabel} brokenLabel="no shared key" />
          </div>

          <p
            style={{
              fontFamily: sans,
              fontSize: 31,
              lineHeight: 1.6,
              color: c.bone2,
              maxWidth: 1180,
              textAlign: "center",
              margin: 0,
              opacity: bodyIn,
            }}
          >
            {fix.body}
          </p>
        </AbsoluteFill>
      </SceneFade>
    </Backdrop>
  );
};
