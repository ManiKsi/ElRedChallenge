import React from "react";
import { PencilIcon, Suitcase } from "../../../assets/Svgs";

const HoOperations = () => {
  return (
    <div className='border rounded-md p-4 shrink-0 h-40  w-[32%] font-medium  '>
      <div className='flex justify-between'>
        <div className='text-lg font-semibold flex items-center'>
          <Suitcase fill='#bababa' className='w-6 h-6 mr-1' />
          Hours of operations
        </div>
        <PencilIcon fill='#BE212A' className='w-4 h-4 ' />
      </div>
      <div className='flex justify-between mt-6'>
        <div className=' text-sm text-textGray'>
          <span>Monday To Friday - 09:00 Am To 06:00 Pm</span>
        </div>
      </div>
    </div>
  );
};

export default HoOperations;
