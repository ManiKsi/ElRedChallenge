import React from "react";

import Address from "./Info-components/Address";
import Contact from "./Info-components/Contact";
import HoOperations from "./Info-components/HoOperations";
import Social from "./Info-components/Social";
import Statement from "./Info-components/Statement";

const Info = () => {
  return (
    <div className='py-4 flex gap-4 flex-wrap'>
      <Contact />
      <Address />
      <HoOperations />
      <Social />
      <Statement />
    </div>
  );
};

export default Info;
