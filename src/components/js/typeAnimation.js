// TypeAnimation

import { blue } from "@mui/material/colors";
import { TypeAnimation } from "react-type-animation";

let styles = {
  flex: "flex justify-center",
  test: "text-blue-500 uppercase",
};


const TypingAnimation = () => {
  return (
    <div className="flex justify-center mx-40">
      <TypeAnimation
        // Same String at the start will only be typed once, initially
        sequence={[,
          "We produce food for Mice",
          1000,
          "We produce food for Hamsters",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        speed={30} // Custom Speed from 1-99 - Default Speed: 40
        style={{ color: blue, fontSize: "2em" }}
        wrapper="span" // Animation will be rendered as a <span>
        repeat={Infinity} // Repeat this Animation Sequence infinitely
      />
    </div>
  );
};

export default TypingAnimation;
