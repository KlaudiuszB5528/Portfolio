import { motion as m, useAnimationControls } from "framer-motion";

import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function TextSpan(props: Props) {
  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimationControls();
  const animation = () => {
    controls.start({
      transform: [
        "scale(1,1)",
        "scale(1.4,.55)",
        "scale(1.25,.85)",
        "scale(.95,1.05)",
        "scale(1,1)",
      ],
      transition: {
        times: [0, 0.2, 0.5, 0.7, 0.9, 1],
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
}
