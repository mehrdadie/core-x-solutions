import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { c } from "../theme";
import { mono } from "../fonts";
import { Backdrop, SceneFade } from "../ui";

/**
 * Held long on purpose. This is the only place the URL appears on screen, and
 * it has to survive being read off a phone — hence the size and the ~5s hold.
 * The spoken outro lands under it, so do not shorten the scene without also
 * shortening `caseStudy.outro`.
 */
export const EndCard: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();

  const logoIn = interpolate(frame, [8, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const urlIn = interpolate(frame, [46, 76], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ruleWidth = interpolate(frame, [40, 74], [0, 560], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Backdrop tint={c.signalSoft}>
      <SceneFade duration={duration}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 34 }}>
          <Img
            src={staticFile("core-x-logo.svg")}
            style={{
              width: 720,
              opacity: logoIn,
              transform: `translateY(${(1 - logoIn) * 18}px)`,
            }}
          />
          <div style={{ width: ruleWidth, height: 1, backgroundColor: c.rule2 }} />
          <div
            style={{
              fontFamily: mono,
              fontSize: 40,
              letterSpacing: "0.16em",
              color: c.signal,
              opacity: urlIn,
            }}
          >
            core-x.solutions
          </div>
        </AbsoluteFill>
      </SceneFade>
    </Backdrop>
  );
};
