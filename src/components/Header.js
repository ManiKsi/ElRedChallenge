import React from "react";
import PropTypes from "prop-types";
import AtinkLogo from "../assets/A.T-inks-logo-600-DPI-1-e1545645137933.png";
import ProfilePic from "../assets/IMG-20220330-WA0003.jpg";
import { CaretIcon, CartIcon, ElRedLogo, Search } from "../assets/Svgs";

const Header = ({ username, cartCount }) => {
  return (
    <header className=' bg-white px-5 py-2 fixed top-0 left-0 right-0 z-20 shadow-sm'>
      <div className='flex w-full px-5 items-center'>
        <div className='w-52'>
          <div className='flex items-center'>
            <img src={AtinkLogo} alt='logo' className='w-8 mr-[2px]' />
            <span className='inline-block min-w-max uppercase text-black font-bold text-[6px]'>
              A.T. INKS
            </span>
          </div>
          <div className='mt-[2px] text-[8px] font-semibold min-w-max flex text-gray2 '>
            Powered by{" "}
            <ElRedLogo
              fill='#F63728'
              width='25px'
              height='10px'
              className='ml-[2px]'
            />
          </div>
        </div>
        <div className='flex bg-bg rounded-md items-center px-2 h-9'>
          <Search fill='#c4c4c4' width='22px' height='22px' />
          <input
            placeholder='Search...'
            className='w-96 focus:outline-none ml-1 bg-bg text-xxs text-black placeholder:text-black font-semibold'
          />
        </div>
        <div className='flex ml-auto '>
          <button className='flex items-center text-white rounded-md font-semibold text-xxs bg-black px-8 hover:bg-gray-900'>
            <CartIcon
              stroke='#fff'
              height='20px'
              width='20px'
              className='mr-2'
            />
            Checkout ({cartCount})
          </button>
          <div className='flex items-center ml-14'>
            <div
              style={{ backgroundImage: `url(${ProfilePic})` }}
              className='w-8 h-8 bg-center bg-contain rounded-full'
            ></div>
            <div className='flex items-center '>
              <span className='text-xs font-semibold ml-2 flex items-center'>
                {username}{" "}
                <CaretIcon width='12px' height='12px' className='ml-2' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  cartCount: PropTypes.number.isRequired,
};
export default Header;
