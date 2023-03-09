import React from "react";
import { PencilIcon, QuotesIcon } from "../../../assets/Svgs";

const Statement = () => {
  return (
    <div className='border rounded-md md:p-4 p-3  shrink-0  md:min-h-[160px] min-h-[120px]   w-full  md:w-[32%] font-medium  '>
      <div className='flex justify-between '>
        <div className='md:text-lg text-base  font-semibold flex items-center'>
          <QuotesIcon fill='#bababa' className='md:w-4 md:h-4 w-3 h-3 mr-2' />{" "}
          Statement{" "}
        </div>
        <PencilIcon fill='#BE212A' className='w-4 h-4 ' />
      </div>
      <div className='flex justify-between  md:mt-6 mt-4'>
        <div className=' md:text-sm text-xs pr-4'>
          <span>You think it we ink it.</span>
        </div>
        <div className=' shrink-0 md:w-8 md:h-8 w-7 h-7  font-bold bg-pink rounded-full flex justify-center items-center'>
          <span className=' text-red text-xxs'>+ 1</span>
        </div>
      </div>
    </div>
  );
};

export default Statement;
