"use client";

import { useEffect, useState } from "react";
import { AiFillHome, AiFillInfoCircle, AiFillProject } from "react-icons/ai";

import { motion } from "framer-motion";
import { BsEnvelopeFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

export default function Navbar() {
  const [windowHeight, setWindowHeight] = useState(0);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 6.81,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logo = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const navigation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="visible"
      className={`xl:container w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 ${
        windowHeight > 400 ? "flex" : "hidden"
      } items-center justify-between text-xl sm:text-2xl py-2 lg:py-4 px-8 md:h-20 bg-myBlack/90 backdrop-blur-sm text-white`}
    >
      <motion.h2 variants={logo} className="font-island text-2xl sm:text-4xl">
        {"<KB>"}
      </motion.h2>
      <motion.div variants={navigation}>
        <ul className="flex gap-4">
          <motion.li
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <a href="#hero">
              <AiFillHome />
            </a>
          </motion.li>

          <a href="#about">
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <AiFillInfoCircle />
            </motion.li>
          </a>
          <a href="#skills">
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <GiSkills />
            </motion.li>
          </a>
          <a href="#projects">
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <AiFillProject />
            </motion.li>
          </a>
          <a href="#contact">
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <BsEnvelopeFill />
            </motion.li>
          </a>
        </ul>
      </motion.div>
    </motion.header>
  );
}
