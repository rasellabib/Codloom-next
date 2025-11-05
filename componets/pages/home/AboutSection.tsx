import React from "react";

// About Section Component
const AboutSection = () => {
  return (
    <section id="AboutUs">
      <div className="container">
        <div className="xl:py-[80px] lg:py-[60px] md:py-[40px] py-[40px] xl:px-[60px] lg:px-[40px] md:px-[30px] px-[20px] bg-black rounded-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="col-span-full md:col-start-1 md:col-end-4 xl:me-[100px] lg:me-[50px] md:me-[10px] me-0">
              <div className="tite-sec flex justify-start flex-col gap-[16px]">
                <div>
                  <button className="title py-[4px] px-[12px] border-[1px] border-[#FF6817] text-[#FF6817] rounded-full">
                    <div className="h6">About us</div>
                  </button>
                </div>
                <h3 className="text-white">
                  Strategic design to
                  <br />
                  <span className="castoro italic text-[#FF6817]">
                    elevate, transform
                  </span>
                  <br />
                  and scale your coaching practice
                </h3>
              </div>
            </div>
            <div className="col-span-full md:col-span-3 md:col-end-7 xl:ms-[100px] lg:ms-[50px] md:ms-[10px] ms-0">
              <h5 className="text-[#A8A8A8] mt-[24px] md:mt-[48px] text-[14px] md:text-[16px]">
                We specialize in crafting expertly designed, conversion focused
                websites and brands for coaches ready to become industry
                leaders.
              </h5>
              <h5 className="text-[#A8A8A8] mt-[18px] md:mt-[28px] text-[14px] md:text-[16px]">
                We work closely with our partners from start to finish, across
                strategy, design and development to grow your business.
              </h5>
            </div>
          </div>
          <div className="image-container lg:mt-[80px] mt-[60px] rounded-[20px] overflow-hidden">
            <img
              className="hover:scale-[1.3] transition-all duration-500"
              src="/aboutus.png"
              alt="Centered Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
