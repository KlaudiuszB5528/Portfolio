import { motion as m } from "framer-motion";

export default function HeroCircles() {
  return (
    <>
      <m.div
        initial={{
          y: "-50%",
          x: "-50%",
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
        }}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/20 animate-pulse h-[320px] w-[320px] sm:h-[525px] sm:w-[525px] rounded-full"
      />
      <m.div
        initial={{
          y: "-50%",
          x: "-50%",
          opacity: 0,
        }}
        animate={{ opacity: 0.9 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.5,
        }}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 h-[260px] w-[260px]  sm:h-[400px] sm:w-[400px] rounded-full"
      />
      <m.div
        initial={{
          y: "-50%",
          x: "-50%",
          opacity: 0,
        }}
        animate={{ opacity: 0.9 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/20 animate-pulse h-[200px] w-[200px] sm:h-[275px] sm:w-[275px] rounded-full"
      />
      <m.div
        initial={{
          y: "-50%",
          x: "-50%",
          opacity: 0,
        }}
        animate={{ opacity: 0.7 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 animate-pulse h-[140px] w-[140px] sm:h-[150px] sm:w-[150px] rounded-full"
      />
    </>
  );
}
