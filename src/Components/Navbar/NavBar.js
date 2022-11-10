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

      <div className="justify-between items-center w-screen h-[72px] shadow-header_box flex pl-[147px] md:pl-[36px] sm:h-[36px] sm:pl-[17px] ">
        <div className="flex items-center justify-center sm:pt-[4px]">
          <img src={Logo} className="pr-3 sm:pr-[5px] sm:h-[20px]" />
          <div

            onClick={handelHomePage}
            className="flex gap-2 cursor-pointer font-bold text-[24.69px] md:text-[20px] sm:text-[12px] sm:gap-1 "
          >
            <p className=" text-[#9D1C7F]">Gyan</p>
            <p className=" text-[#2B2A85]">Academy</p>
          </div>
        </div>
        <div className="flex sm:gap-[10px]">
          <div className="pt-[23px] pb-[22px] pr-[30px] text-[16.46px] text-[#2B2A85] md:pr-[30px] md:text-[14px] sm:text-[10px] sm:pr-[0px]">
            <ul className="flex gap-[30px] md:gap-[27px] sm:gap-[20px] ">
              <a className="sm:h-[13px]" href="/courselibrary">BootCamps</a>
              {/* <a className="sm:h-[12px] sm:w-[93px]" href="">Learning Path</a>
              <a className="sm:h-[12px] sm:w-[51px]" href="">Pricing</a>
              <a className="sm:h-[12px] sm:w-[43px]" href="">About</a> */}
            </ul>
          </div>
          <div className="mt-[14px] mr-[130px] sm:mr-[16px]">
            <button className="text-[16px] font-bold bg-gradient-to-b from-[#282B85] to-[#9A1D80] text-white h-[44px] w-[140px] rounded-[6px]
            sm:text-[9px] sm:w-[71px] sm:h-[21px] sm:rounded-[3px]"
            >Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
