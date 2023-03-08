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
    <div className=' bg-white rounded-md w-52 pb-5 flex-shrink-0 px-4'>
      <div className='flex items-center font-semibold pl-1  py-8'>
        <div className=' border rounded-full h-10 w-10 flex items-center justify-center p-1 mr-3'>
          <img src={AtinkLogo} alt='logo' className=' w-8  -mt-1' />
        </div>
        <span className='text-xs'>A.T.Inks</span>
      </div>
      <div className=' text-gray1 text-xs font-medium   flex flex-col'>
        <div className=' flex items-center pl-3 py-4'>
          <div className='w-10'>
            <DashboardIcon
              fill='#BABABA'
              className=' w-6 h-6 mr-4'
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <span>Dashboard</span>
        </div>
        <div className=' flex items-center pl-3 py-4'>
          <div className=' w-10'>
            <BoxIcon fill='#BABABA' className='ml-[2px] w-5 h-5' />
          </div>
          <span>Orders</span>
        </div>
        <div className=' flex items-center pl-3 py-4'>
          <div className=' w-10'>
            <Users fill='#BABABA' className=' w-6 h-6' />
          </div>
          <span>Team members</span>
        </div>
        <div className=' flex items-center pl-3 py-4'>
          <div className=' w-10'>
            <HandshakeIcon fill='#BABABA' className=' w-7 h-7 -rotate-45' />
          </div>
          <span>Partners</span>
        </div>
        <div className=' flex items-center pl-3 py-4'>
          <div className=' w-10'>
            <StackedBox fill='#BABABA' className=' w-6 h-6 ' />
          </div>
          <span>Product Listings</span>
        </div>
        <div className=' flex items-center pl-3 py-4 bg-pink rounded-md '>
          <div className=' w-10'>
            <InfoIcon fill='#BE212A' className=' w-6 h-6 ' />
          </div>
          <span className=' text-red'>About</span>
        </div>
        <div className=' flex items-center pl-3 py-4'>
          <div className=' w-10'>
            <CashIcon fill='#BABABA' className=' w-6 h-6 ' />
          </div>
          <span>Payment Info</span>
        </div>
      </div>
      <div className=' py-3 px-3 border drop-shadow bg-white rounded-md flex flex-col items-center text-center'>
        <QuestionIcon fill='#BABABA' className=' w-7 h-7 ' />
        <p className=' font-bold text-sm mb-2 mt-1'>Need Help?</p>
        <p className=' font-medium text-xs '>
          Our support team is at your disposal.{" "}
        </p>
        <button className='mt-4 bg-black rounded-md px-8 py-2 text-white text-xs font-semibold'>
          Get Help
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
