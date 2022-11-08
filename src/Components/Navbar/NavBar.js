import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import Logo from "../Image/Logo.png";

function Header() {
  const Navigate = useNavigate();
  const handelHomePage = () => {
    Navigate("/");
  };
  return (
    <div>
      <div className=" flex justify-between items-center w-screen h-[72px] shadow-header_box flex pl-[147px] md:pl-[36px] sm:h-[66px] sm:flex-col sm:items-start sm:pl-[0px] ">
        <div className="flex items-center justify-center sm:pl-[22px] sm:h-[36px] sm:w-screen sm:items-start sm:justify-start sm:pt-[9px]">
          <img src={Logo} className="pr-3 sm:pr-[5px] sm:h-[20px]" />
          <div 
            onClick={handelHomePage}
            className="flex gap-2 cursor-pointer font-bold text-[24.69px] md:text-[20px] sm:text-[12px] sm:gap-1 "
          >
            <p className=" text-[#9D1C7F]">Gyan</p>
            <p className=" text-[#2B2A85]">Academy</p>
          </div>
        </div>

        <div className="pt-[23px] pb-[22px] pr-[134px] text-[16.46px] text-[#2B2A85] md:pr-[30px] md:text-[14px] sm:text-[10px] sm:pl-[22px] sm:pt-[8px] sm:pb-[9px] sm:h-[30px] sm:w-screen sm:text-white sm:bg-[#2B2A85] sm:pr-[0px]">
          <ul className="flex gap-[30px] md:gap-[27px] sm:gap-[20px] ">
            
              <a className="sm:h-[13px] sm:w-[81px]" href="/courselibrary">
                BootCamps
              </a>
            
              <a className="sm:h-[12px] sm:w-[93px]" href="">Learning Path</a>
            
              <a className="sm:h-[12px] sm:w-[51px]" href="">Pricing</a>
            
              <a className="sm:h-[12px] sm:w-[43px]" href="">About</a>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
