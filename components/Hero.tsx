import React from "react";
import { motion as m } from "framer-motion";
import TextSpan from "./TextSpan";
import HeroBg from "./HeroBg";
import HeroCircles from "./HeroCircles";

const Hero = () => {
  const name = "Klaudiusz Biegacz".split("");
  const description = "Frontend Developer / CS Student".split("");
  const based = "based in Poland".split("");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 7,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="container h-screen flex items-center justify-center text-6xl relative z-10 mx-auto"
    >
      <m.div
        variants={item}
        className="flex flex-col h-full w-1/2 gap-4 justify-center items-center text-center"
      >
        <h1 className="text-4xl sm:text-6xl flex relative z-50">
          {name.map((letter, index) => {
            return (
              <TextSpan key={index + letter}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </h1>
        <h2 className="text-xl sm:text-4xl text-gray-300 flex relative z-50">
          {description.map((letter, index) => {
            return (
              <TextSpan key={index + 200}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </h2>
        <p className="text-lg sm:text-xl text-gray-500 flex relative z-50">
          {based.map((letter, index) => {
            return (
              <TextSpan key={index + 50}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </p>
      </m.div>

      <div className="absolute bottom-8 sm:bottom-4 left-[50%] -translate-x-1/2 flex justify-center ">
        <m.div
          variants={item}
          className="border-4 border-white rounded-full flex justify-center items-center h-12 w-6"
        >
          <m.div
            animate={{ y: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.2,
            }}
            className="bg-white h-3 w-3 rounded-full"
          ></m.div>
        </m.div>
        <span className="hidden md:block text-sm absolute -right-5 top-1/2 -translate-y-1/2 translate-x-full w-[325px]">
          Please use arrow keys or navbar to navigate
        </span>
        <span className="md:hidden text-xs absolute top-full mt-2 sm:mt-0 translate-x-16 sm:-right-5 sm:top-1/2 -translate-y-1/2 sm:translate-x-full w-[325px]">
          Please use navbar to navigate
        </span>
      </div>
      <HeroCircles />
      <HeroBg />
    </m.div>
  );
};

export default Hero;
