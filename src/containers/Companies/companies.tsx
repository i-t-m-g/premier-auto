import React from 'react'
import logo1 from "images/logos/nomal/1.png";
import logo1Dark from "images/logos/dark/1.png";
import logo2 from "images/logos/nomal/2.png";
import logo2Dark from "images/logos/dark/2.png";
import logo3 from "images/logos/nomal/3.png";
import logo3Dark from "images/logos/dark/3.png";
import logo4 from "images/logos/nomal/4.png";
import logo4Dark from "images/logos/dark/4.png";
import logo5 from "images/logos/nomal/5.png";
import logo5Dark from "images/logos/dark/5.png";

function Companies() {
  return (
        <div className="ncSectionLogos grid grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-16">
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo1} alt="logo1" />
            <img className="hidden dark:block" src={logo1Dark} alt="logo1" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo4} alt="logo4" />
            <img className="hidden dark:block" src={logo4Dark} alt="logo4" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo2} alt="logo2" />
            <img className="hidden dark:block" src={logo2Dark} alt="logo2" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo3} alt="logo3" />
            <img className="hidden dark:block" src={logo3Dark} alt="logo3" />
          </div>

          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo5} alt="logo5" />
            <img className="hidden dark:block" src={logo5Dark} alt="logo5" />
          </div>
        </div>
  )
}

export default Companies