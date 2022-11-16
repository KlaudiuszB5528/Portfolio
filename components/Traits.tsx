import React from "react";
import { motion as m } from "framer-motion";

const Traits = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 2,
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="absolute inset-0 z-0 grid grid-cols-3 text-base lg:text-lg gap-4 lg:gap-6"
    >
      <div className="p-6 flex justify-center items-center">Ambitious</div>
      <div className="p-6 flex justify-center items-center">Creative</div>
      <div className="p-6 flex justify-center items-center">Conscientious</div>
      <div className="p-6 flex justify-center items-center">Patient</div>
      <div className="p-6 flex justify-center items-center">Flexible</div>
      <div className="p-6 flex justify-center items-center">Perceptive</div>
      <div className="p-6 flex justify-center items-center">Professional</div>
      <div className="p-6 flex justify-center items-center">Innovative</div>
      <div className="p-6 flex justify-center items-center">Persistent</div>
    </m.div>
  );
};

export default Traits;
