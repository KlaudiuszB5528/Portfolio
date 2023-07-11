"use client";

import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useRef } from "react";

import { register } from "swiper/element/bundle";
import ProjectCard from "./ProjectCard";
import { Project } from "./projectsData";

register();

interface ISwiperProps {
  slidesData: Project[];
}

const renderSwiperSlide = (slide: Project) => {
  return (
    <swiper-slide key={slide.id} className="!h-auto">
      <ProjectCard
        title={slide.title}
        description={slide.description}
        image={slide.image}
        technologies={slide.technologies}
        liveLink={slide.liveLink}
        codeLink={slide.codeLink}
      />
    </swiper-slide>
  );
};

export default function SwiperComponent({ slidesData }: ISwiperProps) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    if (swiperContainer) {
      const params = {
        slidesPerView: 1,
        pagination: true,
        injectStyles: [
          `
          .swiper-pagination-bullet{
            background-color: white;
          }
          .swiper-wrapper{
            padding-bottom: 2rem;
          }
      `,
        ],
      };
      Object.assign(swiperContainer, params);
    }
    // @ts-expect-error - swiperContainer is not null
    swiperContainer?.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init={false}>
      {slidesData.map(renderSwiperSlide)}
    </swiper-container>
  );
}
