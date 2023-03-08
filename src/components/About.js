import React from "react";
import AtinkLogo from "../assets/A.T-inks-logo-600-DPI-1-e1545645137933.png";
import { VerifiedIcon } from "../assets/Svgs";
import Editable from "./Editable";
import Tabs from "./Tabs";
import Complaints from "./Tabs/Complaints";
import Faq from "./Tabs/Faq";
import Info from "./Tabs/Info";
import Privacy from "./Tabs/Privacy";
import Terms from "./Tabs/Terms";

const About = () => {
  return (
    <div>
      <h2 className='font-bold text-xl'>About us</h2>
      <div>
        <div className='flex items-center font-semibold   pt-8 mb-2'>
          <div className=' border rounded-full h-16 w-16 flex items-center justify-center p-1 mr-3'>
            <img src={AtinkLogo} alt='logo' className=' w-12  -mt-1' />
          </div>
          <div>
            <div className=' flex items-center'>
              <span className='text-xl font-bold'>A.T.Inks</span>
              <div className='flex items-center ml-7'>
                <VerifiedIcon fill='#BABABA' className=' w-5 h-5' />
                <a href='#' className=' ml-1 text-xxs text-blue-400 underline'>
                  Verify Company
                </a>
              </div>
            </div>
            <span className='text-sm text-gray1'>Digital Inks</span>
          </div>
        </div>
        <div className=' w-3/4'>
          <Editable />
        </div>

        <div className='mt-8'>
          <Tabs
            tabs={[
              "Info",
              "FAQ",
              "Complaints and feedback",
              "Privacy Policy",
              "Terms & Conditions",
            ]}
            tabsComponents={[
              <Info />,
              <Faq />,
              <Complaints />,
              <Privacy />,
              <Terms />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
