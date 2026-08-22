import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { beats } from "./theme";
import { Pain } from "./scenes/Pain";
import { Why } from "./scenes/Why";
import { Fix } from "./scenes/Fix";
import { NumberBeat } from "./scenes/Number";
import { EndCard } from "./scenes/EndCard";

/**
 * The five-beat format, in order. Every case-study video is this file with a
 * different src/case-study.ts — the structure is the format, like a news
 * segment, and it is not meant to vary per video.
 */
export const CaseStudyVideo: React.FC = () => {
  let at = 0;
  const next = (d: number) => {
    const from = at;
    at += d;
    return from;
  };

  return (
    <AbsoluteFill>
      <Sequence from={next(beats.pain)} durationInFrames={beats.pain}>
        <Pain duration={beats.pain} />
      </Sequence>
      <Sequence from={next(beats.why)} durationInFrames={beats.why}>
        <Why duration={beats.why} />
      </Sequence>
      <Sequence from={next(beats.fix)} durationInFrames={beats.fix}>
        <Fix duration={beats.fix} />
      </Sequence>
      <Sequence from={next(beats.number)} durationInFrames={beats.number}>
        <NumberBeat duration={beats.number} />
      </Sequence>
      <Sequence from={next(beats.card)} durationInFrames={beats.card}>
        <EndCard duration={beats.card} />
      </Sequence>
    </AbsoluteFill>
  );
};
