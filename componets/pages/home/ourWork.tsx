import Image from "next/image";

export default function OurWork() {
  return (
    <>
      <section id="OurWork">
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
              <div className="cursor-pointer work-cards hover:text-[#FF6817] transition-colors duration-500">
                <div className="work-img lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
                  <Image
                    className="hover:scale-105 transition-transform duration-500"
                    src="/workimg.png"
                    alt=""
                    width={32}
                    height={32}
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
                <div className="work-img lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
                  <img
                    className="hover:scale-105 transition-transform duration-500"
                    src="/Assets/images/workimg1.png"
                    alt=""
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
                <div className="work-img lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
                  <img
                    className="hover:scale-105 transition-transform duration-500"
                    src="/Assets/images/workimg2.png"
                    alt=""
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
                <div className="work-img lg:mb-[20px] mb-[15px] overflow-hidden rounded-[20px]">
                  <img
                    className="hover:scale-105 transition-transform duration-500"
                    src="/Assets/images/workimg3.png"
                    alt=""
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
