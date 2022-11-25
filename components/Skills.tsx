import React, { useRef } from "react";
import { motion as m } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import SkillsBg from "./SkillsBg";
import Traits from "./Traits";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const skillsContainer = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  const iconBefore = `before:-translate-y-full before:transition-all before:duration-200 hover:before:translate-y-0 before:opacity-90 before:absolute before:inset-0 before:text-myBlack before:bg-white before:font-bold before:flex before:items-center before:justify-center before:pb-2 before:rounded-full before:text-lg`;
  const iconStyles = `relative overflow-hidden bg-gray-50 rounded-full p-4 lg:p-6 flex items-center justify-center cursor-grab`;

  return (
    <m.div
      ref={containerRef}
      className="max-h-screen p-4 sm:p-12 md:p-20 flex items-center relative z-10"
    >
      <m.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center flex flex-col max-w-2xl mx-auto gap-4"
      >
        <m.h2
          variants={item}
          className="flex flex-col gap-2 text-6xl mb-6 lg:mb-12 lg:-mt-10"
        >
          <span>Techstack</span>
          <span className="text-lg text-white/40">(Circles are draggable)</span>
        </m.h2>
        <m.div variants={item} className="relative">
          <Traits />
          <m.div
            variants={skillsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 text-6xl gap-4 lg:gap-6 relative z-[1]"
          >
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-myBlack ${iconStyles} ${iconBefore} hover:before:content-["NextJs"]`}
            >
              <SiNextdotjs />
            </m.div>
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-[#77d0ee] ${iconStyles} ${iconBefore} hover:before:content-["ReactJS"]`}
            >
              <FaReact />
            </m.div>
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-[#2f74c0] ${iconStyles} ${iconBefore} hover:before:content-["TypeScript"]`}
            >
              <SiTypescript />
            </m.div>
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-[#efd81d] ${iconStyles} ${iconBefore} hover:before:content-["JavaScript"]`}
            >
              <SiJavascript className="bg-myBlack" />
            </m.div>
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-[#07adca] ${iconStyles} ${iconBefore} hover:before:content-["TailwindCSS"]`}
            >
              <SiTailwindcss />
            </m.div>
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-[#c66394] ${iconStyles} ${iconBefore} hover:before:content-["Sass"]`}
            >
              <SiSass />
            </m.div>
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-[#dd4b25] ${iconStyles} ${iconBefore} hover:before:content-["HTML5"]`}
            >
              <SiHtml5 />
            </m.div>
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-[#264de4] ${iconStyles} ${iconBefore} hover:before:content-["CSS3"]`}
            >
              <SiCss3 />
            </m.div>
            <m.div
              variants={item}
              drag
              dragConstraints={containerRef}
              whileDrag={{ cursor: "grabbing" }}
              className={`text-[#ffcb2e] ${iconStyles} ${iconBefore} hover:before:content-["Firebase"]`}
            >
              <SiFirebase />
            </m.div>
          </m.div>
        </m.div>
      </m.div>
      <SkillsBg />
    </m.div>
  );
};

export default Skills;
