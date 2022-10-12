import React from "react";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import NightsStayIcon from "@mui/icons-material/NightsStay";

let styles = {
  grid: "grid grid-cols-2",
};

export const SimpleAnimate = () => (
  <div>
    {/* animate individual element. */}
    <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
      <h1>React simple animate</h1>
    </Animate>

    {/* animate keyframes with individual element. */}
    <AnimateKeyframes
     play
      delay={1}
      duration={10}
      iterationCount="infinite"
      direction="alternate"
      keyframes={["transform: translateY(550px)", "transform: translateX(550px)" ]}
    >
      <NightsStayIcon className="text-6xl" />
    </AnimateKeyframes>

    {/* animate group of animation in sequences */}
    <AnimateGroup play keyframes={["opacity:0", "opacity: 1"]}>
      <Animate
        play
        delay={1}
        duration={10}
        iterationCount="inifnite"
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        sequenceIndex={0}
      >
        first
      </Animate>
      <Animate
        delay={5}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        sequenceIndex={1}
      >
        second
      </Animate>
      <Animate
        delay={5}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        sequenceIndex={2}
      >
        third
      </Animate>
    </AnimateGroup>
  </div>
);
