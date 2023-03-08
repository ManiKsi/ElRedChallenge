import React from "react";
import { LocationPin, PencilIcon } from "../../../assets/Svgs";

const Address = () => {
  return (
    <div className='border rounded-md p-4 shrink-0 min-h-[100px]  w-[32%] font-medium  '>
      <div className='flex justify-between'>
        <div className='text-lg font-semibold flex items-center'>
          <LocationPin fill='#bababa' className='w-6 h-6 mr-1' /> Address{" "}
        </div>
        <PencilIcon fill='#BE212A' className='w-4 h-4 ' />
      </div>
      <div className='flex justify-between mt-6 w-4/5'>
        <div className=' text-sm text-textGray'>
          <span>
            C-1 / 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujarat, India
          </span>
        </div>
      </div>
    </div>
  );
};

export default Address;
