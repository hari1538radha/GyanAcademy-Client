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
      <div className=" justify-between items-center w-screen h-[72px] shadow-header_box flex pl-[147px] md:pl-[36px] ">
        <div className="flex items-center justify-center">
          <img src={Logo} className="pr-3" />
          <div
            onClick={handelHomePage}
            className="flex gap-2 cursor-pointer font-bold text-[24.69px] md:text-[20px] "
          >
            <p className=" text-[#9D1C7F]">Gyan</p>
            <p className=" text-[#2B2A85]">Academy</p>
          </div>
        </div>

        <div className="pt-[23px] pb-[22px] pr-[134px] text-[16.46px] text-[#2B2A85] md:pr-[30px] md:text-[14px]">
          <ul className="flex gap-[30px] md:gap-[27px]">
            <li>
              <a className="" href="/courselibrary">
                BootCamps
              </a>
            </li>
            {/* <li>
              <a href="">Learning Path</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">About</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
