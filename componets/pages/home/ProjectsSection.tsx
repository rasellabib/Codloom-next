import React, { useLayoutEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = ({ handleSmoothScroll }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const OurWork = gsap.timeline({
        scrollTrigger: {
          trigger: "#OurWork",
          start: "top 60%",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      OurWork.from(".OurWork-tite", {
        y: 60,
        opacity: 0,
        duration: 0.5,
      });

      gsap.utils.toArray(".WorkCard .work-cards").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true,
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.2,
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const projects = [
    {
      title: "Lever Edge",
      description: "Getting a student just got easier",
      img: "/workimg.png",
    },
    {
      title: "Lever Edge 2",
      description: "Getting a student just got easier",
      img: "/workimg1.png",
    },
    {
      title: "Lever Edge 3",
      description: "Getting a student just got easier",
      img: "/workimg2.png",
    },
    {
      title: "Lever Edge 4",
      description: "Getting a student just got easier",
      img: "/workimg3.png",
    },
  ];

  return (
    <section id="OurWork" ref={sectionRef}>
      <div className="container p-tb">
        <div className="tite-sec OurWork-tite flex justify-center flex-col gap-[16px]">
          <button className="title py-[4px] px-[12px] border-[1px] border-[#FF6817] text-[#FF6817] rounded-full m-auto">
            <div className="h6">Our Work</div>
          </button>
          <h3 className="text-center heading-w m-auto">
            <span className="castoro italic text-[#FF6817]">Featured</span>
            coaching projects
          </h3>
        </div>

        <div className="Work-card xl:px-[60px] lg:px-[40px] md:px-[30px] px-[0px] mt-[45px]">
          <div className="WorkCard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-[48px] md:gap-[30px] gap-[30px]">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        <div className="work-button mt-[70px] flex justify-center">
          <button
            className="cl-scroll-btn px-[24px] py-[10px] h5 border-[1px] border-black rounded-full cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, "#OurWork")}
            data-text="See all Coaching Projects"
          >
            <span>See all Coaching Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
