import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const NavButton = ({ icon, label, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="nav-button" onClick={toggleDropdown}>
        <span className="icon-sideNav">{icon}</span>
        <span className="sideNavbar-Label">{label}</span>
        {dropdownItems && (
          <div className="arrow-container">
            <MdKeyboardArrowRight />
          </div>
        )}
      </div>
      {isOpen && dropdownItems && (
        <div className="drop-down-Content">
          {dropdownItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavButton;
