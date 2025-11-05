import React from "react";

// Sticky Link Component
const StickyLink = ({ isLinkVisible, handleSmoothScroll }) => {
  return (
    <section className={`cl-link ${isLinkVisible ? "visible" : ""}`}>
      <div className="cl-link-inner flex items-center md:justify-between justify-center">
        <div className="cl-link-list">
          <div className="space-x-[24px] pe-[20px] lg:block md:hidden hidden">
            <a
              href="#WhatIDo"
              className="cl-scroll-btn cal-sans h6"
              data-text="Service"
              onClick={(e) => handleSmoothScroll(e, "#WhatIDo")}
            >
              <span>Services</span>
            </a>
            <a
              href="#OurWork"
              className="cl-scroll-btn cal-sans h6"
              data-text="Projects"
              onClick={(e) => handleSmoothScroll(e, "#OurWork")}
            >
              <span>Projects</span>
            </a>
            <a
              href="#Testimonial"
              className="cl-scroll-btn cal-sans h6"
              data-text="Testimonials"
              onClick={(e) => handleSmoothScroll(e, "#Testimonial")}
            >
              <span>Testimonials</span>
            </a>
          </div>
        </div>
        <div className="cl-link-btn">
          <button
            className="relative group h5 cal-sans flex gap-[14px] sm:gap-[16px] bg-black text-white font-semibold pl-[18px] sm:pl-[24px] pr-[10px] md:py-[10px] py-[10px] h5 rounded-full items-center hover:cursor-pointer overflow-hidden transition-all duration-500"
            onClick={(e) => handleSmoothScroll(e, "#Footer")}
          >
            <span className="transition-all duration-500">Book a Call</span>
            <div className="flex items-center transition-all duration-500">
              <div className="call-image w-[32px] h-[32px] rounded-full">
                <img
                  className="w-full rounded-full"
                  src="/small.png"
                  alt=""
                />
              </div>
              <div className="w-[32px] h-[32px] ms-[-4px] bg-white rounded-full flex justify-center items-center group-hover:opacity-100 transition-all duration-500 [transform:rotateY(0deg)] group-hover:[transform:rotateY(-360deg)]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.875 2.625C0.875 2.16087 1.05937 1.71575 1.38756 1.38756C1.71575 1.05937 2.16087 0.875 2.625 0.875H3.42533C3.927 0.875 4.3645 1.21683 4.48642 1.70333L5.131 4.28342C5.18323 4.49225 5.17268 4.71185 5.10067 4.91471C5.02866 5.11758 4.89838 5.29468 4.72617 5.42383L3.97192 5.98967C3.89317 6.04858 3.87625 6.13492 3.89842 6.195C4.22764 7.09033 4.74751 7.90341 5.42205 8.57795C6.09659 9.25249 6.90967 9.77236 7.805 10.1016C7.86508 10.1237 7.95083 10.1068 8.01033 10.0281L8.57617 9.27383C8.70532 9.10162 8.88242 8.97134 9.08529 8.89933C9.28815 8.82732 9.50775 8.81677 9.71658 8.869L12.2967 9.51358C12.7832 9.6355 13.125 10.073 13.125 10.5752V11.375C13.125 11.8391 12.9406 12.2842 12.6124 12.6124C12.2842 12.9406 11.8391 13.125 11.375 13.125H10.0625C4.98867 13.125 0.875 9.01133 0.875 3.9375V2.625Z"
                    fill="#131313"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StickyLink;
