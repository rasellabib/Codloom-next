import React from "react";

// Testimonial Section Component
const TestimonialSection = () => {
  return (
    <section id="Testimonial">
      <div className="container">
        <div className="bg-[#F7F7F5] rounded-[30px] xl:px-[60px] lg:px-[40px] md:px-[30px] px-[20px] md:py-[80px] py-[50px] mt-[80px]">
          <div className="Testimonial-title tite-sec flex justify-center flex-col gap-[16px]">
            <button className="title py-[4px] px-[12px] border-[1px] border-[#FF6817] text-[#FF6817] rounded-full m-auto">
              <div className="h6">Testimonials</div>
            </button>
            <h3 className="text-center xl:w-1/2 md:w-[65%] m-auto">
              Result that speaks volume read{" "}
              <span className="castoro italic text-[#FF6817]">
                success stories
              </span>
            </h3>
          </div>
          <div className="testimonial-div flex flex-col sm-items-center md:flex-col lg:flex-row justify-center gap-[20px] bg-white rounded-[20px] overflow-hidden mt-[45px]">
            <div className="testimonial-img lg:w-[420px] md:w-[100%] w-[100%] h-[572px] relative">
              <video
                src="https://framerusercontent.com/assets/u4ev6EgnAR6lc2SHzBbj5DQ38.mp4"
                loop
                controls
                playsInline
                preload="metadata"
                style={{
                  cursor: "auto",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  display: "block",
                  objectFit: "cover",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  objectPosition: "50% 50%",
                }}
              />
            </div>

            <div className="testimonial-content flex flex-col justify-between flex-1 lg:px-[50px] md:px-[30px] p-[24px] lg:py-[60px] gap-y-[30px]">
              <div>
                <div className="star mb-[16px] flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <h4 className="text-[#777777] lexend line-height-141">
                  I've had the pleasure of collaborating with Design Monks for a
                  while now. They're lightning-quick and consistently go the
                  extra mile. I wholeheartedly endorse them.
                </h4>
              </div>
              <div className="flex justify-between">
                <div className="name w-[70%] sm:w-[100%]">
                  <h4 className="font-semibold">Riyadul Hasan</h4>
                  <span className="text-[#777777] mt-[4px] text-[13px] sm:text-[16px]">
                    Founder @ Nietzsche
                  </span>
                </div>
                <div className="logo content-end">
                  <img
                    className="md:w-[100%] w-[80%]"
                    src="/testi-logo.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
