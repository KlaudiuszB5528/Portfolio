import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillHome, AiFillInfoCircle, AiFillProject } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
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
      className="container fixed top-0 z-50 flex items-center justify-between text-xl sm:text-2xl py-2 lg:py-4 px-8 md:h-20 bg-myBlack text-white mx-auto"
    >
      <motion.h2 variants={logo} className="font-island text-2xl sm:text-4xl">
        {`<KB>`}
      </motion.h2>
      <motion.div variants={navigation}>
        <ul className="flex gap-4">
          <Link href="#hero" scroll={false}>
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
              <AiFillHome />
            </motion.li>
          </Link>
          <Link href="#about" scroll={false}>
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
          </Link>
          <Link href="#skills" scroll={false}>
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
          </Link>
          <Link href="#projects" scroll={false}>
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
          </Link>
          <Link href="#contact" scroll={false}>
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
          </Link>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
