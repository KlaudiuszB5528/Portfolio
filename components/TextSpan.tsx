import React, { useState } from "react";
import { motion as m, useAnimationControls } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const TextSpan = (props: Props) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimationControls();
  const animation = () => {
    controls.start({
      transform: [
        "scale(1,1)",
        "scale(1.4,.55)",
        "scale(.75,1.25)",
        "scale(1.25,.85)",
        "scale(.95,1.05)",
        "scale(1,1)",
      ],
      transition: {
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    });
    setIsAnimated(true);
  };
  return (
    <m.span
      animate={controls}
      onMouseOver={() => {
        if (!isAnimated) animation();
      }}
      onAnimationComplete={() => setIsAnimated(false)}
      className="select-none"
    >
      {props.children}
    </m.span>
  );
};

export default TextSpan;
