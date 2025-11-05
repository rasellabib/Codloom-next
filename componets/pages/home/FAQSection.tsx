import React, { useLayoutEffect } from "react";

// FAQ Section Component
const FAQSection = () => {
  useLayoutEffect(() => {
    // IIFE not necessary but keep scoping
    const container = document.getElementById("accordion");
    if (!container) return;

    const items = Array.from(container.querySelectorAll(".accordion-item"));
    const handlers = [];

    function showPlusMinus(btn: HTMLButtonElement, showMinus: boolean) {
      const plus = btn.querySelector(".svg-plus");
      const minus = btn.querySelector(".svg-minus");
      if (plus) plus.classList.toggle("hidden", showMinus); // showMinus=true -> hide plus
      if (minus) minus.classList.toggle("hidden", !showMinus); // showMinus=true -> show minus
    }

    function closeItem(it) {
      const btn = it.querySelector("button");
      const panel = it.querySelector(".panel");
      it.dataset.open = "false";
      if (btn) btn.setAttribute("aria-expanded", "false");

      if (panel) {
        panel.style.transition =
          "max-height 360ms cubic-bezier(.2,.9,.3,1), opacity 260ms";
        // set current height then collapse to 0 to animate
        panel.style.maxHeight = panel.scrollHeight + "px";
        // force reflow
        // eslint-disable-next-line no-unused-expressions
        panel.offsetHeight;
        panel.style.maxHeight = "0px";
        panel.style.opacity = "0";
      }

      if (btn) showPlusMinus(btn, false); // show plus, hide minus

      const circle = it.querySelector(".circle");
      if (circle) {
        circle.style.transform = "scale(0.98)";
        setTimeout(() => (circle.style.transform = "scale(1)"), 180);
      }
    }

    function openItem(it) {
      const btn = it.querySelector("button");
      const panel = it.querySelector(".panel");
      it.dataset.open = "true";
      if (btn) btn.setAttribute("aria-expanded", "true");

      if (panel) {
        panel.style.transition =
          "max-height 420ms cubic-bezier(.2,.9,.3,1), opacity 260ms";
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.opacity = "1";
        // after animation keep a computed maxHeight so it adapts
        setTimeout(() => {
          if (it.dataset.open === "true")
            panel.style.maxHeight = panel.scrollHeight + "px";
        }, 450);
      }

      if (btn) showPlusMinus(btn, true); // show minus, hide plus

      const circle = it.querySelector(".circle");
      if (circle) {
        circle.style.transform = "scale(1.03)";
        setTimeout(() => (circle.style.transform = "scale(1)"), 200);
      }
    }

    // initialization
    items.forEach((it: HTMLElement) => {
      const open = it.dataset.open === "true";
      const btn = it.querySelector("button");
      const panel = it.querySelector(".panel");

      if (!panel || !btn) return;

      // reset inline styles then set based on open state
      panel.style.overflow = "hidden";
      panel.style.transition =
        "max-height 360ms cubic-bezier(.2,.9,.3,1), opacity 260ms";
      panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
      panel.style.opacity = open ? "1" : "0";

      btn.setAttribute("aria-expanded", open ? "true" : "false");
      showPlusMinus(btn, open);

      // click handler
      const clickHandler = () => {
        const isOpen = it.dataset.open === "true";

        // single-open behaviour: close others
        items.forEach((other) => {
          if (other !== it && other.dataset.open === "true") closeItem(other);
        });

        if (isOpen) closeItem(it);
        else openItem(it);
      };

      // keyboard handler
      const keyHandler = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          clickHandler();
        }
      };

      btn.addEventListener("click", clickHandler);
      btn.addEventListener("keydown", keyHandler);

      handlers.push({ btn, clickHandler, keyHandler, it });
    });

    // recompute open panels on resize
    let resizeTimeout = null;
    const resizeHandler = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        items.forEach((it) => {
          if (it.dataset.open === "true") {
            const panel = it.querySelector(".panel");
            if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }, 120);
    };

    window.addEventListener("resize", resizeHandler);

    // cleanup on unmount
    return () => {
      handlers.forEach(({ btn, clickHandler, keyHandler }) => {
        if (btn) {
          btn.removeEventListener("click", clickHandler);
          btn.removeEventListener("keydown", keyHandler);
        }
      });
      window.removeEventListener("resize", resizeHandler);
    };
  }, []); // run once on mount

  return (
    <section id="Faq">
      <div className="container p-tb lg:px-[0px] md:px-[30px] px-[20px]">
        <div className="FaqTitle tite-sec flex justify-center flex-col gap-[16px]">
          <button className="title py-[4px] px-[12px] border-[1px] border-[#FF6817] text-[#FF6817] rounded-full m-auto">
            <div className="h6">Frequently Asked Questions</div>
          </button>
          <h3 className="text-center lg:w-1/2 md:w-[65%] m-auto">
            Your questions
            <span className="castoro italic text-[#FF6817]">answered!</span>
          </h3>
        </div>
        <div className="mt-[45px]">
          <div className="max-w-4xl mx-auto">
            <div id="accordion" className="">
              <div className="accordion-item border-bottom" data-open="true">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-7 pt-0 pr-4 pl-0 focus:outline-none"
                  aria-expanded="true"
                  aria-controls="panel-1"
                  id="head-1"
                >
                  <p className="text-start text-[#131313] leading-tight">
                    Do you only work with coaches?
                  </p>

                  <span className="circle ml-4 shrink-0 relative">
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

                    <svg
                      className="svg-plus hidden"
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
                  </span>
                </button>

                <div
                  id="panel-1"
                  className="panel overflow-hidden transition-all duration-350 ease-[cubic-bezier(.2,.9,.3,1)]"
                  role="region"
                  aria-labelledby="head-1"
                >
                  <p className="h6 text-[#777777] leading-relaxed max-w-3xl pb-[32px]">
                    Yes! We specialize in helping coaches (life, business,
                    career, health, etc.) because we understand your industry’s
                    unique needs. This focus allows us to deliver faster, more
                    effective results for your brand and website.
                  </p>
                </div>
              </div>

              {/* Second item */}
              <div className="accordion-item border-bottom" data-open="false">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-7 pr-4 pl-0 focus:outline-none"
                  aria-expanded="false"
                  aria-controls="panel-2"
                  id="head-2"
                >
                  <p className="text-start text-[#131313] leading-tight">
                    Why do i need your service as a coach?
                  </p>
                  <span className="circle ml-4 shrink-0 relative">
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

                    <svg
                      className="svg-plus hidden"
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
                  </span>
                </button>

                <div
                  id="panel-2"
                  className="panel overflow-hidden transition-all duration-350 ease-[cubic-bezier(.2,.9,.3,1)]"
                  role="region"
                  aria-labelledby="head-2"
                >
                  <p className="h6 text-[#777777] leading-relaxed max-w-3xl pb-[32px]">
                    A high-converting website builds trust, communicates your
                    offer clearly, and converts visitors into paying clients —
                    saving you time and scaling your coaching business.
                  </p>
                </div>
              </div>

              {/* other items similarly... */}
              {/* Third */}
              <div className="accordion-item border-bottom" data-open="false">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-7 pr-4 pl-0 focus:outline-none"
                  aria-expanded="false"
                  aria-controls="panel-3"
                  id="head-3"
                >
                  <p className="text-start text-[#131313] leading-tight">
                    What’s your pricing?
                  </p>
                  <span className="circle ml-4 shrink-0 relative">
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

                    <svg
                      className="svg-plus hidden"
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
                  </span>
                </button>

                <div
                  id="panel-3"
                  className="panel overflow-hidden transition-all duration-350 ease-[cubic-bezier(.2,.9,.3,1)]"
                  role="region"
                  aria-labelledby="head-3"
                >
                  <p className="h6 text-[#777777] leading-relaxed max-w-3xl pb-[32px]">
                    Our pricing depends on the scope — website-only, full brand
                    & site, or ongoing conversion optimization. Contact us for a
                    tailored quote.
                  </p>
                </div>
              </div>

              {/* Fourth */}
              <div className="accordion-item border-bottom" data-open="false">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-7 pr-4 pl-0 focus:outline-none"
                  aria-expanded="false"
                  aria-controls="panel-4"
                  id="head-4"
                >
                  <p className="text-start text-[#131313] leading-tight">
                    How do I get started with Codloom?
                  </p>
                  <span className="circle ml-4 shrink-0 relative">
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

                    <svg
                      className="svg-plus hidden"
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
                  </span>
                </button>

                <div
                  id="panel-4"
                  className="panel overflow-hidden transition-all duration-350 ease-[cubic-bezier(.2,.9,.3,1)]"
                  role="region"
                  aria-labelledby="head-4"
                >
                  <p className="h6 text-[#777777] leading-relaxed max-w-3xl pb-[32px]">
                    Start by booking a discovery call. We’ll review your goals,
                    audit your current site (if any), then plan a fast,
                    conversion-first build.
                  </p>
                </div>
              </div>

              {/* Fifth */}
              <div className="accordion-item border-bottom" data-open="false">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-7 pr-4 pl-0 focus:outline-none"
                  aria-expanded="false"
                  aria-controls="panel-5"
                  id="head-5"
                >
                  <p className="text-start text-[#131313] leading-tight">
                    What is high-converting website?
                  </p>
                  <span className="circle ml-4 shrink-0 relative">
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

                    <svg
                      className="svg-plus hidden"
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
                  </span>
                </button>

                <div
                  id="panel-5"
                  className="panel overflow-hidden transition-all duration-350 ease-[cubic-bezier(.2,.9,.3,1)]"
                  role="region"
                  aria-labelledby="head-5"
                >
                  <p className="h6 text-[#777777] leading-relaxed max-w-3xl pb-[0px]">
                    A high-converting website communicates value immediately,
                    reduces friction, and guides visitors to take the next step
                    — book, subscribe or buy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
