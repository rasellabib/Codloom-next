import React from 'react';

type Project = {
  img: string;
  title: string;
  description?: string;
};

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="cursor-pointer work-cards hover:text-[#FF6817] transition-colors duration-500">
      <div className="work-img lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
        <div className="w-full h-auto bg-gray-300 hover:scale-105 transition-transform duration-500 flex items-center justify-center">
          {/* If you're using Next.js and want the built-in Image component, replace this <img> with Next's <Image /> */}
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="workTitle">
        <h4 className="text-xl font-semibold">{project.title}</h4>
        <h6 className="text-[#777777] mt-[6px]">{project.description}</h6>
      </div>
    </div>
  );
};

export default ProjectCard;
