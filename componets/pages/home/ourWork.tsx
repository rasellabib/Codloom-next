"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // title animation
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // cards stagger
      gsap.utils.toArray(".work-cards").forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} id="OurWork">
        <div className="container p-tb">
          <div
            ref={titleRef}
            className="tite-sec OurWork-tite flex justify-center flex-col gap-[16px]"
          >
            <button className="title py-[4px] px-[12px] border-[1px] border-[#FF6817] text-[#FF6817] rounded-full m-auto">
              <div className="h6">Our Work</div>
            </button>
            <h3 className="text-center heading-w m-auto">
              <span className="castoro italic text-[#FF6817]">Featured</span>{" "}
              coaching projects
            </h3>
          </div>
          <div className="Work-card xl:px-[60px] lg:px-[40px] md:px-[30px] px-[0px] mt-[45px]">
            <div className="WorkCard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-[48px] md:gap-[30px] gap-[30px]">
              <div className="cursor-pointer work-cards hover:text-[#FF6817] transition-colors duration-500">
                <div className="work-img w-[100%] relative h-[500px] lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
                  <Image
                    className="hover:scale-105 transition-transform duration-500 w-[100%]"
                    src="/workimg.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="workTitle">
                  <h4>Lever Edge</h4>
                  <h6 className="text-[#777777] mt-[6px]">
                    Getting a student just got easier
                  </h6>
                </div>
              </div>
              <div className="cursor-pointer work-cards">
                <div className="work-img w-[100%] relative h-[500px] lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
                  <Image
                    className="hover:scale-105 transition-transform duration-500 w-[100%]"
                    src="/workimg1.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="workTitle">
                  <h4>Lever Edge</h4>
                  <h6 className="text-[#777777] mt-[6px]">
                    Getting a student just got easier
                  </h6>
                </div>
              </div>
              <div className="cursor-pointer work-cards">
                <div className="work-img w-[100%] relative h-[500px] lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
                  <Image
                    className="hover:scale-105 transition-transform duration-500 w-[100%]"
                    src="/workimg2.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="workTitle">
                  <h4>Lever Edge</h4>
                  <h6 className="text-[#777777] mt-[6px]">
                    Getting a student just got easier
                  </h6>
                </div>
              </div>
              <div className="cursor-pointer work-cards">
                <div className="work-img w-[100%] relative h-[500px] lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
                  <Image
                    className="hover:scale-105 transition-transform duration-500 w-[100%]"
                    src="/workimg3.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="workTitle">
                  <h4>Lever Edge</h4>
                  <h6 className="text-[#777777] mt-[6px]">
                    Getting a student just got easier
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="work-button mt-[70px] flex justify-center">
            <button className="px-[24px] py-[10px] h5 border-[1px] border-black rounded-full cursor-pointer">
              <a
                href="#"
                className="cl-scroll-btn cal-sans h6"
                data-text="See all Coaching Projects"
              >
                <span>See all Coaching Projects</span>
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
