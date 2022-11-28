import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import AboutBg from "./AboutBg";

const About = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  const handleResize = () => {
    setViewportHeight(window.innerHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


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

  return (
    <div className={`h-full md:h-screen w-screen py-20 sm:py-32 p-4 ${
      viewportHeight > 650 ? "my-10" : ""
    } sm:my-32 md:my-0 md:p-32 flex items-center relative z-10`}>
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
        >{`Web Publisher in Cheil Germany GmbH since May 2022. I maintain pages using Adobe Experience Manager, SAP Hybris, and SalesForce.`}</m.p>
        <m.p
          className="text-base sm:text-xl"
          variants={item}
        >{`Third year CS student at the Kielce University of Technology.`}</m.p>
        <m.p
          className="text-base sm:text-xl"
          variants={item2}
        >{`Self-taught front-end developer. Currently learning Next.js.`}</m.p>
        <m.p
          className="text-base sm:text-xl"
          variants={item}
        >{`Ready to apply my passion for coding to a talented engineering team to develop quality solutions.`}</m.p>
      </m.div>
      <AboutBg />
    </div>
  );
};

export default About;
