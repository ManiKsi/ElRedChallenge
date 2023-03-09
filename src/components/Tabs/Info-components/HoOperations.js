import React from "react";
import { PencilIcon, Suitcase } from "../../../assets/Svgs";

const HoOperations = () => {
  return (
    <div className='border rounded-md md:p-4 p-3 shrink-0   md:min-h-[160px] min-h-[120px] w-full  md:w-[32%] font-medium  '>
      <div className='flex justify-between'>
        <div className='md:text-lg text-base font-semibold flex items-center'>
          <Suitcase fill='#bababa' className='md:w-6 md:h-6 w-5 h-5 mr-2' />
          Hours of operations
        </div>
        <PencilIcon fill='#BE212A' className='w-4 h-4 ' />
      </div>
      <div className='flex justify-between md:mt-6 mt-4'>
        <div className=' md:text-sm text-xs  text-textGray'>
          <span>Monday To Friday - 09:00 Am To 06:00 Pm</span>
        </div>
      </div>
    </div>
  );
};

export default HoOperations;
