import React from "react";

const SideDrawer = (props) => {
  return (
    <div
      className={`fixed ${
        props.open
          ? "left-0 md:left-auto md:right-0"
          : "left-full md:left-auto md:-right-full"
      }  h-screen overflow-hidden  md:w-1/3 w-full scroll-hide bg-white drop-shadow-lg  z-50 transition-all duration-500 top-0 p-5 px-8 flex flex-col`}
    >
      {props.children}
    </div>
  );
};

export default SideDrawer;
