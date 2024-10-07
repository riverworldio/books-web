import React, { useState } from "react";
import "./SideNav.css";
import { TbCategory } from "react-icons/tb";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { LuServer } from "react-icons/lu";
import {
  MdOutlineSignalCellularAlt,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import NavButton from "../../NavButton/NavButton";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sideNav-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="top-container-sideNav">
        <NavLink to="/dashboard">
          <h6 className="sideNav-logo">FinBooks</h6>
        </NavLink>
        {isCollapsed ? (
          <RiMenu2Line size={26} onClick={toggleCollapse} />
        ) : (
          <MdOutlineKeyboardArrowLeft size={26} onClick={toggleCollapse} />
        )}
      </div>
      <div>
        <div id="nav-content" className="my-3">
          <NavButton icon={<TbCategory />} label="Dashboard" />
          <NavButton
            icon={<HiOutlineFolderOpen />}
            label="Sales"
            dropdownItems={["Invoices", "Customers"]}
          />
          <NavButton
            icon={<FiShoppingCart />}
            label="Purchases"
            dropdownItems={["Bills", "Payment"]}
          />
          <NavButton icon={<LuServer />} label="Items" />
          <NavButton icon={<MdOutlineSignalCellularAlt />} label="Reports" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
