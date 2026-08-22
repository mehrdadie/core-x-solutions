import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { c } from "../theme";
import { display, sans } from "../fonts";
import { Backdrop, Eyebrow, KineticLine, SceneFade } from "../ui";
import { Diagram } from "./Diagram";
import { caseStudy } from "../case-study";

export const Why: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const { why } = caseStudy;

  const diagramIn = interpolate(frame, [76, 104], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bodyIn = interpolate(frame, [230, 262], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Backdrop tint={c.oxideSoft}>
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
          <Eyebrow color={c.oxide}>Why it happens</Eyebrow>
          <KineticLine text={why.headline} start={10} size={66} maxWidth={1300} />

          <div
            style={{
              opacity: diagramIn,
              transform: `translateY(${(1 - diagramIn) * 24}px)`,
              marginTop: 10,
            }}
          >
            {/* fix = 0: this scene is the broken state, and stays broken. */}
            <Diagram fix={0} layerLabel={caseStudy.fix.layerLabel} brokenLabel="no shared key" />
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
            {why.body}
          </p>
        </AbsoluteFill>
      </SceneFade>
    </Backdrop>
  );
};
