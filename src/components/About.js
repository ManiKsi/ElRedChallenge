import React, { useState } from "react";
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
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleVerify = () => {
    if (!verified) {
      setLoading(true);
      setTimeout(() => {
        setVerified(true);
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <div>
      <h2 className='font-bold text-xl'>About us</h2>
      <div>
        <div className='flex items-center font-semibold   md:pt-8 pt-4 mb-2'>
          <div className=' border rounded-full md:h-16 md:w-16 h-12 w-12 flex items-center justify-center p-1 mr-3'>
            <img src={AtinkLogo} alt='logo' className=' md:w-12 w-8  -mt-1' />
          </div>
          <div>
            <div className=' flex items-center'>
              <span className='md:text-xl text-sm font-bold'>A.T.Inks</span>
              <div className='flex items-center md:ml-7 ml-5'>
                {loading ? (
                  <div class='custom-loader'></div>
                ) : (
                  <VerifiedIcon
                    fill={`${verified ? "blue" : "#BABABA"}`}
                    className=' w-5 h-5'
                  />
                )}
                {!loading && (
                  <p
                    onClick={() => handleVerify()}
                    href='#'
                    className=' cursor-pointer ml-1 text-xxs text-blue-400 underline'
                  >
                    {verified ? "Verified" : "Verify Company"}
                  </p>
                )}
              </div>
            </div>
            <span className='md:text-sm text-xs text-gray1'>Digital Inks</span>
          </div>
        </div>
        <div className=' md:w-3/4 w-full '>
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
