import React from "react";

function Footer() {
  return (
    <div>
      <div className="h-[248px] w-screen bg-gradient-to-b from-[#282B85E5]  to-[#9A1D80E5] ">
        <div className="pt-[50px] pl-[135px] pr-[135px] divide-y-2 divide-[#D9D9D9B2]">
          <p className="w-[194px] h-[38px] text-[24.6857px] text-white font-bold pb-[74px]">
            Gyan Academy
          </p>
          <div className=" flex justify-between items-center pt-[47px] text-white text-[16px]">
            <ul className=" flex gap-[28px] ">
              <a className="w-[102px] h-[27px] " href="">
                Bootcamps
              </a>
              <a className="w-[102px] h-[27px] " href="">
                Pricing Plans
              </a>
              <a className="w-[51px] h-[27px] " href="">
                About
              </a>
              <a className="w-[101px] h-[27px] " href="">
                Learning Path
              </a>
            </ul>
            <div className=" flex gap-1">
              <p className="">© 2022</p>
              <p className="font-bold">Gyan Academy.</p>
              <p> All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
