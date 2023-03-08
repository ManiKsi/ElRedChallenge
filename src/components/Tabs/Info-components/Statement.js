import React from "react";
import { PencilIcon, QuotesIcon } from "../../../assets/Svgs";

const Statement = () => {
  return (
    <div className='border rounded-md p-4 shrink-0  min-h-[100px]   w-[32%] font-medium  '>
      <div className='flex justify-between '>
        <div className='text-lg font-semibold flex items-center'>
          <QuotesIcon fill='#bababa' className='w-4 h-4 mr-2' /> Statement{" "}
        </div>
        <PencilIcon fill='#BE212A' className='w-4 h-4 ' />
      </div>
      <div className='flex justify-between  mt-6'>
        <div className=' text-sm pr-4'>
          <span>You think it we ink it.</span>
        </div>
        <div className=' shrink-0 w-8 h-8 font-bold bg-pink rounded-full flex justify-center items-center'>
          <span className=' text-red text-xxs'>+ 1</span>
        </div>
      </div>
    </div>
  );
};

export default Statement;
