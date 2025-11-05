import React from "react";

// Mobile Menu Component
type MobileMenuProps = {
  isMenuOpen: boolean;
  handleMobileMenuClick: (e: React.MouseEvent, href: string) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, handleMobileMenuClick }) => {
  return (
    <div
      id="mobileMenu"
      className={`mobileMenu ${isMenuOpen ? "active" : ""} menu-slide`}
    >
      <div className="mobileMenu-items">
        <a
          href="#home"
          className="mobile-icon"
          onClick={(e) => handleMobileMenuClick(e, "#home")}
        >
          <div className="w-5 h-5 bg-gray-300 rounded">🏠</div>
          home
        </a>
        <a
          href="#AboutUs"
          className="mobile-icon"
          onClick={(e) => handleMobileMenuClick(e, "#AboutUs")}
        >
          <div className="w-5 h-5 bg-gray-300 rounded">ℹ️</div>
          About
        </a>
        <a
          href="#OurWork"
          className="mobile-icon"
          onClick={(e) => handleMobileMenuClick(e, "#OurWork")}
        >
          <div className="w-5 h-5 bg-gray-300 rounded">💼</div>
          Service
        </a>
        <a
          href="#Footer"
          className="mobile-icon"
          onClick={(e) => handleMobileMenuClick(e, "#Footer")}
        >
          <div className="w-5 h-5 bg-gray-300 rounded">📧</div>
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
