import React from "react";
import "./SideBarThin.css";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const SideBarThin = () => {
  return (
    <div className="sideBar-thin">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtt3zOq6B9NnqaNv6ApPqWUmxmTf5hxtF_g&s"
        className="profile-image-sideBar"
        alt="profile"
      />
      <div className="sideBar-Icons">
        <IoSearch size={22} />
        <FaRegBell size={20} />
        <FiSettings size={20} />
      </div>
    </div>
  );
};

export default SideBarThin;
