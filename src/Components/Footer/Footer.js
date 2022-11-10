import React from "react";

function Footer() {
  return (
    <div>
      <div className="h-[248px] w-screen bg-gradient-to-b from-[#282B85E5]  to-[#9A1D80E5] md:h-[132px] sm:h-[137px]">
        <div className="pt-[50px] pl-[135px] pr-[135px] divide-y-2 divide-[#D9D9D9B2] md:pl-[17px] md:pr-[15px] md:pt-[26px] sm:pl-[17px] sm:pt-[21px] sm:pr-[17px] ">
          <p className="w-[194px] h-[38px] text-[24.6857px] text-white font-bold pb-[74px] md:text-[13px] md:pb-[19px] sm:text-[14px] sm:pb-[9px] ">
            Gyan Academy
          </p>
          <div className=" flex justify-between items-center pt-[47px] text-white text-[16px] md:pt-[25px] md:text-[9px] sm:text-[10px] sm:pt-[15px] sm:gap-[34px]">
            <div className=" flex gap-[28px] md:gap-[15px] sm:gap-x-[20px] sm:flex-wrap sm:gap-y-[9px] sm:w-[50%]  ">
              <a className="w-[102px] h-[27px] md:h[10px] md:w-[54px] sm:h-[15px] sm:w-[66px] " href="">
                Bootcamps
              </a>
              <a className="w-[102px] h-[27px] md:h[10px] md:w-[60px] sm:h-[15px] sm:w-[66px] " href="">
                Pricing Plans
              </a>
              <a className="w-[51px] h-[27px]  md:h[10px] md:w-[27px] sm:h-[15px] sm:w-[34px] " href="">
                About
              </a>
              <a className="w-[101px] h-[27px] md:h[10px] md:w-[64px] sm:h-[15px] sm:w-[73px] " href="">
                Learning Path
              </a>
              <a className="w-[101px] h-[27px] md:h[10px] md:w-[64px] sm:h-[15px] sm:w-[73px] " href="/gallery">
                Gallery
              </a>
            </div>
            <div className=" flex gap-1 sm:gap-[0.5px] sm:flex-col">
              <div className="flex gap-1 sm:gap-[0.5] " >
              <p className="">© 2022</p>
              <p className="font-bold">Gyan Academy.</p>
              </div>
              <p className=" sm:text-right" > All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
