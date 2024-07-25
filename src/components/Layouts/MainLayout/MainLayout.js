import React from "react";
import SideBarThin from "../../SideBar/SideBarThin/SideBarThin";
import SideNav from "../../SideBar/SideNav/SideNav";
import "./MainLayout.css";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="d-flex">
        <SideBarThin />
        <SideNav />
        <div className="children-container">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
