"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const heroContentRef = useRef(null);
  const heroBtnRef = useRef(null);

  useLayoutEffect(() => {
    const heroContent = gsap.timeline({
      scrollTrigger: {
        trigger: heroContentRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    heroContent.from(heroContentRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      delay: 2,
      stagger: 0.2,
      ease: "power2.out",
    });

    const hero = gsap.timeline({
      scrollTrigger: {
        trigger: heroBtnRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    hero.from(heroBtnRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      delay: 2,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div className="hero-content-wrap bg-white rounded-[30px] p-tb mt-[80px] md:mt-[92px]">
          <div
            ref={heroContentRef}
            className="hero-content w-full md:max-w-[560px] lg:max-w-[720px] m-auto"
          >
            <h2 className="text-center">
              Take your{" "}
              <span className="castoro italic text-[#FF6817] letter-space4">
                coaching business
              </span>{" "}
              to the next level
            </h2>
            <p className="text-[#777777] lexend px-[0px] md:px-[20px] m-auto mt-[16px] text-center">
              Professional web design & branding for coaches ready to shine as
              industry leaders and and grow their influence.
            </p>
          </div>

          <div
            ref={heroBtnRef}
            className="hero-button m-auto mt-[32px] flex justify-center"
          >
            <div className="cl-link-btn">
              <button className="relative group h5 cal-sans flex gap-[16px] bg-black text-white font-semibold pl-[24px] pr-[10px] md:py-[10px] py-[8px] h5 rounded-full items-center hover:cursor-pointer overflow-hidden transition-all duration-500">
                <span className="transition-all duration-500">
                  {" "}
                  Book a Call{" "}
                </span>

                <div className="flex items-center transition-all duration-500">
                  <div className="call-image w-[32px] h-[32px] rounded-full">
                    <div className="call-image w-[32px] h-[32px] rounded-full">
                      <Image
                        src="/small.png"
                        width={32}
                        height={32}
                        alt="call icon"
                        className="w-full rounded-full"
                      />
                    </div>
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
        </div>
      </div>

      <div className="marquee mb-[40px]">
        <div className="marquee-inner h1">
          <span>Strategic partner for innovation & growth </span>
          <span>Strategic partner for innovation & growth </span>
        </div>
      </div>
    </section>
  );
}
