import React from "react";

// Header Component
const Header = ({
  isNavExpanded,
  isItemsExpanded,
  isMenuOpen,
  toggleMenu,
  handleSmoothScroll,
}) => {
  return (
    <header>
      <div
        id="navbar"
        className={`lg:absolute fixed z-10 top-[8px] ml-auto nav bg-white rounded-full transition-fade visible-nav ${
          isNavExpanded ? "nav-expanded" : ""
        }`}
      >
        <nav className="nav-bar">
          <div className="flex md:px-[14px] md:py-[14px] px-[14px] py-[10px] items-center justify-between">
            <div className="logo">
              <a href="#" className="text-xl font-bold">
                <div className="w-[179px] h-[40px] bg-gray-200 flex items-center justify-center">
                  Logo
                </div>
              </a>
            </div>

            <div
              id="navLinks"
              className={`navLinks ${
                isItemsExpanded ? "navItems-expanded" : ""
              }`}
            >
              <div className="space-x-[40px]">
                <a
                  href="#AboutUs"
                  className="cl-scroll-btn cal-sans h6"
                  onClick={(e) => handleSmoothScroll(e, "#AboutUs")}
                >
                  <span>About</span>
                </a>
                <a
                  href="#WhatIDo"
                  className="cl-scroll-btn cal-sans h6"
                  onClick={(e) => handleSmoothScroll(e, "#WhatIDo")}
                >
                  <span>Services</span>
                </a>
                <a
                  href="#OurWork"
                  className="cl-scroll-btn cal-sans h6"
                  onClick={(e) => handleSmoothScroll(e, "#OurWork")}
                >
                  <span>Projects</span>
                </a>
                <a
                  href="#Testimonial"
                  className="cl-scroll-btn cal-sans h6"
                  onClick={(e) => handleSmoothScroll(e, "#Testimonial")}
                >
                  <span>Testimonials</span>
                </a>
              </div>
            </div>

            <div
              id="navBtn"
              className={`navBtn ${isItemsExpanded ? "navItems-expanded" : ""}`}
            >
              <button
                className="bg-black text-white font-semibold px-[24px] py-[10px] h5 rounded-full cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, "#Footer")}
              >
                <span>Book a Call</span>
              </button>
            </div>

            <div
              id="menuBtn"
              className={`lg:hidden menuBtn flex ${
                isItemsExpanded ? "menuBtn-expanded" : ""
              }`}
              onClick={toggleMenu}
            >
              <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
                <span className="icon-line line-top"></span>
                <span className="icon-line line-bottom"></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
