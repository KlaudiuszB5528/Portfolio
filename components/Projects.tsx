import { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectsSlider from "./ProjectsSlider";
import ProjectsDots from "./ProjectsDots";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const nextSlide = () => {
    setCurrentProject(currentProject === 3 ? 0 : currentProject + 1);
  };
  const prevSlide = () => {
    setCurrentProject(currentProject === 0 ? 3 : currentProject - 1);
  };

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

  const dots = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0 },
  };

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowHeight > 500) {
      setMarginBottom(40);
    } else {
      setMarginBottom(96);
    }
  }, [windowHeight]);

  return (
    <div
      className={`h-screen w-screen relative z-10 py-4 md:pt-16 md:pb-4 mt-20 mb-${marginBottom}`}
    >
      <m.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="h-full w-full flex flex-col items-center xl:justify-center gap-10 lg:gap-6"
      >
        <m.h2 variants={h2} className="mt-6 md:mt-0 text-6xl">
          Projects
        </m.h2>
        <m.div variants={image} className="relative z-[2]">
          <AnimatePresence mode="wait">
            <m.div
              key={currentProject}
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              exit={{ opacity: 0, x: 150, transition: { duration: 0.3 } }}
            >
              <ProjectsSlider currentProject={currentProject} />
            </m.div>
            <FiChevronLeft
              key="FiChevronLeft"
              onClick={prevSlide}
              className="absolute hidden xl:block top-1/2 -translate-y-1/2 -left-16 text-white text-6xl cursor-pointer"
            />

            <FiChevronRight
              key="FiChevronRight"
              onClick={nextSlide}
              className="absolute hidden xl:block top-1/2 -translate-y-1/2 -right-16 text-white text-6xl cursor-pointer"
            />
          </AnimatePresence>
        </m.div>
        <m.div variants={dots} className="flex gap-4 mx-auto">
          <ProjectsDots
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
          />
        </m.div>
      </m.div>
      <div className="absolute top-1/2 -translate-y-1/2 w-screen bg-white/5 h-[260px] -skew-y-12 -z-1" />
    </div>
  );
};

export default Projects;
