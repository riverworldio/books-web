import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const NavButton = ({ icon, label, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if any dropdown item is active to highlight the parent button
  const isActiveDropdown = dropdownItems
    ? dropdownItems.some((item) =>
        location.pathname.includes(`${label.toLowerCase()}/${item.toLowerCase()}`)
      )
    : false;

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {dropdownItems ? (
        <div
          className={`nav-button ${isOpen || isActiveDropdown ? "activeNav-Button" : ""}`}
          onClick={toggleDropdown}
        >
          <span className="icon-sideNav">{icon}</span>
          <span className="sideNavbar-Label">{label}</span>
          <div className="arrow-container">
            {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </div>
        </div>
      ) : (
        <NavLink
          to={`/${label.toLowerCase()}`}
          className={({ isActive }) => (isActive ? "active nav-button" : "nav-button")}
        >
          <span className="icon-sideNav">{icon}</span>
          <span className="sideNavbar-Label">{label}</span>
        </NavLink>
      )}

      {isOpen && dropdownItems && (
        <div className="drop-down-Content">
          {dropdownItems.map((item, index) => (
            <NavLink
              key={index}
              to={`/${label.toLowerCase()}/${item.toLowerCase()}`}
              className={({ isActive }) => (isActive ? "active dropdown-item" : "dropdown-item")}
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
