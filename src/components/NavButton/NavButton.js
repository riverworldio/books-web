import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavButton = ({ icon, label, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {dropdownItems ? (
        <div
          className={`nav-button ${isOpen ? "activeNav-Button" : ""}`}
          onClick={toggleDropdown}
        >
          <span className="icon-sideNav">{icon}</span>
          <span className="sideNavbar-Label">{label}</span>
          <div className="arrow-container">
            <MdKeyboardArrowRight />
          </div>
        </div>
      ) : (
        <NavLink to={`/${label}`}>
          <div className="nav-button">
            <span className="icon-sideNav">{icon}</span>
            <span className="sideNavbar-Label">{label}</span>
          </div>
        </NavLink>
      )}
      {isOpen && dropdownItems && (
        <div className="drop-down-Content">
          {dropdownItems.map((item, index) => (
            <NavLink
              key={index}
              to={`/${label}/${item}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <li>{item}</li>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavButton;
