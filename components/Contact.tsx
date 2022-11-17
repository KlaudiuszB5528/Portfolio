import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import SubmitSuccess from "./SubmitSuccess";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");

  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const header = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const content = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const footer = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center relative z-10">
      <div className="absolute top-1/2 -translate-y-1/2 w-screen bg-white opacity-[0.03] h-[260px] skew-y-12 -z-1" />
      <m.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        onViewportLeave={() => {
          setIsSubmitted(false);
        }}
        className="flex flex-col items-center h-full w-full relative z-[1] justify-center md:justify-evenly gap-6"
      >
        <m.h2 variants={header} className="text-6xl mb-10 md:mb-0">
          Get In Touch
        </m.h2>
        <m.div variants={content}>
          <AnimatePresence mode="wait">
            <m.div
              key={isSubmitted ? "succes" : "form"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              {!isSubmitted && (
                <ContactForm
                  setIsSubmitted={setIsSubmitted}
                  setName={setName}
                />
              )}
              {isSubmitted && <SubmitSuccess name={name} />}
            </m.div>
          </AnimatePresence>
        </m.div>
        <m.footer
          variants={footer}
          className="absolute bottom-1 flex w-full items-center justify-center gap-2"
        >
          <p className="font-island">{`© ${new Date().getFullYear()} KB-Portfolio`}</p>
          <a href="https://github.com/KlaudiuszB5528" target="blank">
            <AiFillGithub className="cursor-pointer text-md mb-1"></AiFillGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/klaudiusz-biegacz/"
            target="blank"
          >
            <AiFillLinkedin className="cursor-pointer text-md mb-1" />
          </a>
        </m.footer>
      </m.div>
    </div>
  );
};

export default Contact;
