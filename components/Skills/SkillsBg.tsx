import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { FaReact } from "react-icons/fa";

export default function SkillsBg() {
  return (
    <>
      <SiNextdotjs className="absolute opacity-10 top-32 lg:top-[25%] lg:left-[25%] text-6xl" />
      <FaReact className="absolute opacity-10 top-[85%] left-10 lg:top-[40%] lg:left-[18%] text-5xl" />
      <SiTypescript className="absolute opacity-10 left-36 top-[50%] lg:top-[40%] lg:left-[75%] text-5xl" />
      <SiJavascript className="absolute opacity-10 right-36 bottom-40 lg:bottom-[10%] lg:right-[50%] text-5xl" />
      <SiTailwindcss className="absolute opacity-10 top-24 left-[80%] lg:top-[66%] lg:left-[77%] text-3xl" />
      <SiSass className="absolute opacity-10 right-6 top-[55%] lg:right-[30%] text-4xl" />
      <SiHtml5 className="absolute opacity-10 top-[80%] right-[7%] text-3xl" />
      <SiCss3 className="absolute opacity-10 top-[65%] left-10 lg:top-[75%] lg:left-[30%] text-3xl" />
      <SiGithub className="absolute opacity-10 bottom-[5%] left-[40%] text-2xl" />
    </>
  );
}
