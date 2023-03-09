import React from "react";
import {
  BoxIcon,
  CashIcon,
  DashboardIcon,
  HandshakeIcon,
  InfoIcon,
  QuestionIcon,
  StackedBox,
  Users,
} from "../assets/Svgs";
import AtinkLogo from "../assets/A.T-inks-logo-600-DPI-1-e1545645137933.png";

const Sidebar = () => {
  return (
    <div className=' bg-white rounded-md md:w-52 w-fit pb-5 flex-shrink-0 md:px-4 px-1 h-fit fixed md:static left-2'>
      <div className='flex items-center font-semibold pl-1  md:py-8 py-4'>
        <div className=' border rounded-full h-10 w-10 flex items-center justify-center p-1 md:mr-3'>
          <img src={AtinkLogo} alt='logo' className=' w-8  -mt-1' />
        </div>
        <span className='text-xss hidden  md:inline-block'>A.T.Inks</span>
      </div>
      <div className=' text-gray1 text-xs font-medium   flex flex-col'>
        <div className=' flex items-center justify-center md:justify-start p-3 md:pl-3 md:py-4  rounded-md cursor-pointer my-1  hover:bg-pink '>
          <div className=' md:w-10'>
            <DashboardIcon
              fill='#BABABA'
              className=' w-6 h-6'
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <span className=' hidden  md:inline-block'>Dashboard</span>
        </div>
        <div className=' flex items-center justify-center md:justify-start p-3 md:pl-3 md:py-4  rounded-md cursor-pointer my-1  hover:bg-pink '>
          <div className=' md:w-10'>
            <BoxIcon fill='#BABABA' className='ml-[2px] w-5 h-5' />
          </div>
          <span className=' hidden  md:inline-block'>Orders</span>
        </div>
        <div className=' flex items-center justify-center md:justify-start p-3 md:pl-3 md:py-4  rounded-md cursor-pointer my-1  hover:bg-pink '>
          <div className=' md:w-10'>
            <Users fill='#BABABA' className=' w-6 h-6' />
          </div>
          <span className=' hidden  md:inline-block'>Team members</span>
        </div>
        <div className=' flex items-center justify-center md:justify-start p-3 md:pl-3 md:py-4  rounded-md cursor-pointer my-1  hover:bg-pink '>
          <div className=' md:w-10'>
            <HandshakeIcon fill='#BABABA' className=' w-7 h-7 -rotate-45' />
          </div>
          <span className=' hidden  md:inline-block'>Partners</span>
        </div>
        <div className=' flex items-center justify-center md:justify-start p-3 md:pl-3 md:py-4  rounded-md cursor-pointer my-1  hover:bg-pink '>
          <div className=' md:w-10'>
            <StackedBox fill='#BABABA' className=' w-6 h-6 ' />
          </div>
          <span className=' hidden  md:inline-block'>Product Listings</span>
        </div>
        <div className=' flex items-center justify-center md:justify-start p-3 md:pl-3 md:py-4 bg-pink rounded-md cursor-pointer my-1'>
          <div className=' md:w-10'>
            <InfoIcon fill='#BE212A' className=' w-6 h-6 ' />
          </div>
          <span className=' text-red hidden  md:inline-block'>About</span>
        </div>
        <div className=' flex items-center justify-center md:justify-start p-3 md:pl-3 md:py-4  rounded-md cursor-pointer my-1  hover:bg-pink '>
          <div className=' md:w-10'>
            <CashIcon fill='#BABABA' className=' w-6 h-6 ' />
          </div>
          <span className=' hidden  md:inline-block'>Payment Info</span>
        </div>
      </div>
      <div className=' hidden   py-3 px-3 border drop-shadow bg-white rounded-md md:flex flex-col items-center text-center '>
        <QuestionIcon fill='#BABABA' className=' w-7 h-7 ' />
        <p className=' font-bold text-sm mb-2 mt-1'>Need Help?</p>
        <p className=' font-medium text-xs '>
          Our support team is at your disposal.{" "}
        </p>
        <button className='mt-4 bg-black rounded-md px-8 py-2 text-white text-xs font-semibold'>
          Get Help
        </button>
      </div>
      <button className='mt-4 md:hidden  rounded-md w-full flex text-white justify-center'>
        <QuestionIcon fill='#000' className=' w-6 h-6 ' />
      </button>
    </div>
  );
};

export default Sidebar;
