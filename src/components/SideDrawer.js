import React, { useState } from "react";

const SideDrawer = (props) => {
  return (
    <div
      className={`fixed ${
        props.open ? " w-1/3" : "w-0"
      }  h-screen overflow-hidden  scroll-hide bg-white drop-shadow-lg right-0 z-50 transition-all top-0 p-5 px-8 flex flex-col`}
    >
      {props.children}
    </div>
  );
};

export default SideDrawer;
