import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion as m, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Welcome = () => {
  const [isWelcome, setIsWelcome] = useState(false);
  const [isIconChange, setIsIconChange] = useState(false);

  const [text, count] = useTypewriter({
    words: ["Hello World!", "I'm Klaudiusz"],
    typeSpeed: 85,
    deleteSpeed: 100,
    delaySpeed: 700,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcome(true);
      document
        .querySelector(".root")
        ?.classList.replace("overflow-y-hidden", "overflow-y-scroll");
    }, 6200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timerIcons = setTimeout(() => {
      setIsIconChange(true);
    }, 3100);
    return () => clearTimeout(timerIcons);
  }, []);

  return (
    <AnimatePresence>
      {!isWelcome && (
        <m.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 w-screen z-[100] bg-[#121212] text-gray-50 flex flex-col gap-4 justify-center items-center"
        >
          <AnimatePresence mode="wait">
            <m.div
              key={isIconChange ? "devIcon" : "wavingHand"}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="relative mr-3 h-[180px] w-[180px] lg:h-[250px] lg:w-[250px]"
            >
              {isIconChange ? (
                <Image layout="fill" src="/bighead.svg" alt="dev icon" />
              ) : (
                <Image layout="fill" src="/waving.svg" alt="dev icon" />
              )}
            </m.div>
          </AnimatePresence>

          <m.div
            variants={item}
            className="antialiased relative text-center tracking-[10px] font-semibold font-amiri mb-10"
          >
            <span className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
              {text}
              <Cursor />
            </span>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
