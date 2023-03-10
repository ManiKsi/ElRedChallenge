import React from "react";
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkIcon,
  PencilIcon,
  TwitterIcon,
} from "../../../assets/Svgs";

const Social = () => {
  return (
    <div className='border rounded-md md:p-4 p-3  shrink-0 md:min-h-[160px] min-h-[120px]   w-full md:w-[32%] font-medium  '>
      <div className='flex justify-between'>
        <div className='md:text-lg text-base font-semibold flex items-center'>
          <LinkIcon fill='#bababa' className='md:w-5 md:h-5 h-4 w-4 mr-2' />
          Social Media & Links
        </div>
        <PencilIcon fill='#BE212A' className='w-4 h-4 ' />
      </div>
      <div className='flex justify-between md:mt-8 mt-6'>
        <div className=' text-sm  flex flex-col justify-center items-center'>
          <GlobeIcon fill='#bababa' className='w-7 h-7 mb-1 ' />
          <span className='text-xxs'>Website</span>
        </div>
        <div className=' text-sm flex flex-col justify-center items-center'>
          <InstagramIcon fill='#bababa' className='w-7 h-7 mb-1 ' />
          <span className='text-xxs'>Instagram</span>
        </div>
        <div className=' text-sm flex flex-col justify-center items-center'>
          <FacebookIcon fill='#bababa' className='w-8 h-8 -mt-1 mb-1' />
          <span className='text-xxs'>Facebook</span>
        </div>
        <div className=' text-sm flex flex-col justify-center items-center'>
          <TwitterIcon fill='#bababa' className='w-8 h-8  -mt-1 mb-1' />
          <span className='text-xxs'>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default Social;
