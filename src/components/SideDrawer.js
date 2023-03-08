import React from "react";

const SideDrawer = (props) => {
  return (
    <div
      className={`fixed ${
        props.open ? "right-0" : " -right-full"
      }  h-screen overflow-hidden  w-1/3 scroll-hide bg-white drop-shadow-lg  z-50 transition-all top-0 p-5 px-8 flex flex-col`}
    >
      {props.children}
    </div>
  );
};

export default SideDrawer;
