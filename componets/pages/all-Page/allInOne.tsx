"use client";

import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BgSection from "../home/bgSection";
import ServiceSection from "../home/serviceSection";
import TestimonialSection from "../home/testimonialSection";
import FooterSection from "../home/footerSection";
import FaqSection from "../home/faq";
import AboutUs from "../home/aboutUs";
import OurWork from "../home/ourWork";
import HomeHero from "../home/hero";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const AllInOne = () => {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });

    return () => {
      smoother && smoother.kill();
    };
  }, []);

  return (
    <div id="pageContent">
      <div id="smooth-wrapper">
        <div id="smooth-content">
         
          <BgSection />
          <HomeHero />
          <ServiceSection />
          <OurWork />
          <AboutUs />
          <TestimonialSection />
          <FaqSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
