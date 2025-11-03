"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  useEffect(() => {
    gsap.from(".FaqTitle", {
      y: 80,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".FaqTitle",
        start: "top 80%",
      },
    });

    gsap.from(".faqItem", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".faqItem",
        start: "top 80%",
      },
    });
  }, []);

  const data = [
    {
      q: "Do you only work with coaches?",
      a: "Yes! We specialize in helping coaches (life, business, career, health, etc.) because we understand your industry’s unique needs. This focus allows us to deliver faster, more effective results for your brand and website.",
    },
    {
      q: "Why do i need your service as a coach?",
      a: "A high-converting website builds trust, communicates your offer clearly, and converts visitors into paying clients — saving you time and scaling your coaching business.",
    },
    {
      q: "What’s your pricing?",
      a: "Our pricing depends on the scope — website-only, full brand & site, or ongoing conversion optimization. Contact us for a tailored quote.",
    },
    {
      q: "How do I get started with Codloom?",
      a: "Start by booking a discovery call. We’ll review your goals, audit your current site (if any), then plan a fast, conversion-first build.",
    },
    {
      q: "What is high-converting website?",
      a: "A high-converting website communicates value immediately, reduces friction, and guides visitors to take the next step — book, subscribe or buy.",
    },
  ];

  return (
    <section id="Faq">
      <div className="container p-tb lg:px-[0px] md:px-[30px] px-[20px]">
        <div className="FaqTitle flex flex-col items-center gap-[16px]">
          <button className="title py-[4px] px-[12px] border-[1px] border-[#FF6817] text-[#FF6817] rounded-full">
            <div className="h6">Frequently Asked Questions</div>
          </button>
          <h3 className="text-center lg:w-1/2 md:w-[65%] m-auto">
            Your questions{" "}
            <span className="castoro italic text-[#FF6817]">answered!</span>
          </h3>
        </div>

        <div className="mt-[45px] max-w-4xl mx-auto">
          {data.map((item, i) => (
            <div key={i} className="accordion-item faqItem border-b">
              <button
                type="button"
                onClick={() => toggleItem(i)}
                className="w-full flex items-center justify-between gap-4 py-7 pt-0 pr-4 pl-0"
              >
                <p className="font-bold text-start text-[#131313] leading-tight">
                  {item.q}
                </p>

                <span className="circle ml-4 shrink-0 relative">
                  {openIndex === i ? (
                    <svg
                      className="svg-minus"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0.625C5.7175 0.625 0.625 5.7175 0.625 12C0.625 18.2825 5.7175 23.375 12 23.375C18.2825 23.375 23.375 18.2825 23.375 12C23.375 5.7175 18.2825 0.625 12 0.625ZM15.5 12.875C15.7321 12.875 15.9546 12.7828 16.1187 12.6187C16.2828 12.4546 16.375 12.2321 16.375 12C16.375 11.7679 16.2828 11.5454 16.1187 11.3813C15.9546 11.2172 15.7321 11.125 15.5 11.125H8.5C8.26794 11.125 8.04538 11.2172 7.88128 11.3813C7.71719 11.5454 7.625 11.7679 7.625 12C7.625 12.2321 7.71719 12.4546 7.88128 12.6187C8.04538 12.7828 8.26794 12.875 8.5 12.875H15.5Z"
                        fill="#FF6817"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="svg-plus "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0.625C5.7175 0.625 0.625 5.7175 0.625 12C0.625 18.2825 5.7175 23.375 12 23.375C18.2825 23.375 23.375 18.2825 23.375 12C23.375 5.7175 18.2825 0.625 12 0.625ZM12.875 8.5C12.875 8.26794 12.7828 8.04538 12.6187 7.88128C12.4546 7.71719 12.2321 7.625 12 7.625C11.7679 7.625 11.5454 7.71719 11.3813 7.88128C11.2172 8.04538 11.125 8.26794 11.125 8.5V11.125H8.5C8.26794 11.125 8.04538 11.2172 7.88128 11.3813C7.71719 11.5454 7.625 11.7679 7.625 12C7.625 12.2321 7.71719 12.4546 7.88128 12.6187C8.04538 12.7828 8.26794 12.875 8.5 12.875H11.125V15.5C11.125 15.7321 11.2172 15.9546 11.3813 16.1187C11.5454 16.2828 11.7679 16.375 12 16.375C12.2321 16.375 12.4546 16.2828 12.6187 16.1187C12.7828 15.9546 12.875 15.7321 12.875 15.5V12.875H15.5C15.7321 12.875 15.9546 12.7828 16.1187 12.6187C16.2828 12.4546 16.375 12.2321 16.375 12C16.375 11.7679 16.2828 11.5454 16.1187 11.3813C15.9546 11.2172 15.7321 11.125 15.5 11.125H12.875V8.5Z"
                        fill="#FF6817"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {openIndex === i && (
                <div className="panel transition-all duration-350 ease-[cubic-bezier(.2,.9,.3,1)]">
                  <p className="h6 text-[#777777] leading-relaxed max-w-3xl pb-[32px]">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
