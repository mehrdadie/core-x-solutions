import React from "react";
import { Composition } from "remotion";
import { CaseStudyVideo } from "./CaseStudyVideo";
import { FPS, TOTAL } from "./theme";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="CaseStudy"
    component={CaseStudyVideo}
    durationInFrames={TOTAL}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
