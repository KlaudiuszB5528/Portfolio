"use client";

import { motion as m } from "framer-motion";
import SwiperComponent from "./SwiperComponent";
import { projects } from "./projectsData";
import image from "next/image";

export default function Projects() {
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const h2 = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const image = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen w-screen relative z-10 pt-14">
      <m.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center xl:justify-center gap-10 lg:gap-4"
      >
        <m.h2 variants={h2} className="mt-6 md:mt-0 text-6xl">
          Projects
        </m.h2>
        <m.div variants={image} className="w-full pb-4">
          <SwiperComponent slidesData={projects} />
        </m.div>
      </m.div>
      <div className="absolute top-1/2 -translate-y-1/2 w-screen bg-white/5 h-[260px] -skew-y-12 -z-1" />
    </div>
  );
}
