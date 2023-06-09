import AboutBg from "./AboutBg";
import { motion as m } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 25 },
  visible: { opacity: 1, x: 0 },
};

const item2 = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen w-screen p-4 sm:p-12 md:p-32 flex items-center relative z-10">
      <m.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="text-center flex flex-col max-w-2xl mx-auto gap-4"
      >
        <m.h2 variants={item} className="text-6xl mb-10">
          About Me
        </m.h2>
        <m.p
          className="text-base sm:text-xl"
          variants={item2}
        >{`React/Next Developer in TDS Soft since December 2022.`}</m.p>
        <m.p
          className="text-base sm:text-xl"
          variants={item}
        >{`Third year CS student at the Kielce University of Technology.`}</m.p>
        <m.p
          className="text-base sm:text-xl"
          variants={item2}
        >{`As a React/Next developer, I am passionate about building dynamic and responsive web applications that provide a seamless user experience. With my expertise in these cutting-edge technologies, I am always eager to tackle new challenges and develop innovative solutions that meet the needs of modern businesses.`}</m.p>
      </m.div>
      <AboutBg />
    </div>
  );
}
