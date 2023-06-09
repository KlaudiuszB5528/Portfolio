import Image from "next/image";
import React from "react";
import TechDiv from "./TechDiv";

type Props = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
};

const ProjectCard = (props: Props) => {
  const { title, description, image, technologies, liveLink, codeLink } = props;
  return (
    <article className="flex flex-col w-screen xl:w-[1200px] h-[400px] sm:h-[450px] xl:h-[500px] mx-auto md:grid md:grid-cols-4 p-2">
      <div className="h-full relative flex-2 md:col-span-3">
        <Image
          src={image}
          priority={true}
          alt="project"
          fill
          quality={100}
          className="rounded-t-xl md:rounded-t-none md:rounded-l-xl"
        />
      </div>
      <div className="bg-gray-50 rounded-b-xl md:rounded-l-none md:rounded-r-xl text-myBlack flex flex-col gap-1 lg:grid lg:grid-rows-4 xl:grid-rows-5 items-center md:py-2">
        <h3 className="w-full lg:pb-4 underline underline-offset-4 text-xl lg:text-4xl flex justify-center">
          {title}
        </h3>
        <div className="flex flex-col justify-between h-full py-2 w-full px-4 md:row-span-2 xl:row-span-3">
          <p className="text-center text-base xl:text-xl">{description}</p>
          <div className="flex w-full justify-between mt-1">
            <a
              href={liveLink}
              className="rounded-xl w-12 md:w-20 px-2 bg-myBlack text-white flex items-center justify-center"
              target="blank"
            >
              <button className="pb-2">Live</button>
            </a>
            <a
              href={codeLink}
              className="rounded-xl w12 md:w-20 px-2 bg-myBlack text-white flex items-center justify-center"
              target="blank"
            >
              <button className="pb-2">Code</button>
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-wrap items-start xl:h-full gap-1 px-4 py-1">
          {technologies.map((tech) => {
            return <TechDiv key={tech} technology={tech} />;
          })}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
