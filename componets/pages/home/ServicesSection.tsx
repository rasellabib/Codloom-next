import React from "react";
import ServiceCard from "./ServiceCard";

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Logo & Branding",
      description:
        "Position yourself as the clear choice with a brand strategy that turns your expertise into influence.",
    },
    {
      title: "Website Design",
      description:
        "Position yourself as the clear choice with a brand strategy that turns your expertise into influence.",
    },
    {
      title: "Website Development",
      description:
        "Position yourself as the clear choice with a brand strategy that turns your expertise into influence.",
    },
    {
      title: "SEO Optimization",
      description:
        "Position yourself as the clear choice with a brand strategy that turns your expertise into influence.",
    },
    {
      title: "LinkedIn Optimization",
      description:
        "Position yourself as the clear choice with a brand strategy that turns your expertise into influence.",
    },
  ];

  return (
    <section id="WhatIDo">
      <div className="container bg-[#F7F7F5] rounded-[30px] xl:py-[80px] lg:py-[60px] md:py-[60px] py-[50px] xl:px-[60px] lg:px-[40px] md:px-[30px] px-[20px]">
        <div className="WhatIDoTitle tite-sec flex justify-center flex-col gap-[16px]">
          <button className="title py-[4px] px-[12px] border-[1px] border-[#FF6817] text-[#FF6817] rounded-full m-auto">
            <div className="h6">What We Do</div>
          </button>
          <h3 className="text-center heading-w m-auto">
            Services to
            <span className="castoro italic text-[#FF6817]">scale your</span>
            coaching brand
          </h3>
        </div>
        <div className="service-wrap mt-[45px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
