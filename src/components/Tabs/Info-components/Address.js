import React from "react";
import { LocationPin, PencilIcon } from "../../../assets/Svgs";

const Address = () => {
  return (
    <div className='border rounded-md md:p-4 p-3 shrink-0 md:min-h-[150px] min-h-[120px]   md:w-[32%] w-full  font-medium  '>
      <div className='flex justify-between'>
        <div className='md:text-lg text-base  font-semibold flex items-center'>
          <LocationPin fill='#bababa' className='md:w-6 md:h-6 w-5 h-5 mr-2' />{" "}
          Address{" "}
        </div>
        <PencilIcon fill='#BE212A' className='w-4 h-4 ' />
      </div>
      <div className='flex justify-between  md:mt-6 mt-4 w-4/5'>
        <div className=' md:text-sm text-xs  text-textGray'>
          <span>
            C-1 / 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujarat, India
          </span>
        </div>
      </div>
    </div>
  );
};

export default Address;
