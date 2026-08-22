import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { c } from "./theme";
import { mono } from "./fonts";

/**
 * Every scene sits on this: near-black ground with a faint engineering grid and
 * a vignette. The grid drifts a few pixels over the scene so a mostly-static
 * frame still reads as moving footage rather than a stalled render.
 */
export const Backdrop: React.FC<{ tint?: string; children: React.ReactNode }> = ({
  tint,
  children,
}) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 900], [0, -24]);

  return (
    <AbsoluteFill style={{ backgroundColor: c.ground }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${c.rule} 1px, transparent 1px), linear-gradient(90deg, ${c.rule} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          transform: `translate(${drift}px, ${drift}px)`,
          opacity: 0.5,
        }}
      />
      {tint ? (
        <AbsoluteFill
          style={{
            background: `radial-gradient(circle at 50% 45%, ${tint}, transparent 62%)`,
          }}
        />
      ) : null}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.72) 100%)",
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

/** Small monospace label — the instrument-panel voice from the site. */
export const Eyebrow: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = c.bone3,
}) => (
  <div
    style={{
      fontFamily: mono,
      fontSize: 22,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color,
    }}
  >
    {children}
  </div>
);

/**
 * Word-by-word reveal. Kinetic type is the backbone of the format, so it lives
 * in one place: change the easing here and every headline in every video
 * changes with it.
 */
export const KineticLine: React.FC<{
  text: string;
  start: number;
  size?: number;
  color?: string;
  weight?: number;
  maxWidth?: number;
}> = ({ text, start, size = 76, color = c.bone, weight = 700, maxWidth = 1500 }) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        // the gap is em-based, so it must resolve against the headline size,
        // not the inherited 16px — hence fontSize here as well as on the words
        fontSize: size,
        gap: "0.1em 0.3em",
        maxWidth,
        textAlign: "center",
      }}
    >
      {words.map((word, i) => {
        const at = start + i * 3;
        const o = interpolate(frame, [at, at + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const y = interpolate(frame, [at, at + 16], [26, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <span
            key={i}
            style={{
              fontSize: size,
              fontWeight: weight,
              lineHeight: 1.14,
              color,
              opacity: o,
              transform: `translateY(${y}px)`,
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

/** Fades a scene's contents in and out so cuts never hard-pop. */
export const SceneFade: React.FC<{ duration: number; children: React.ReactNode }> = ({
  duration,
  children,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 14, duration - 16, duration],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};
