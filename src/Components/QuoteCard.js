import React from "react";
import left_arror from "../GyanAcademyPages/HomePage/asserts/left_arror.png";
import right_arror from "../GyanAcademyPages/HomePage/asserts/right_arror.png";
import quote from "../GyanAcademyPages/HomePage/asserts/fa-quote-left.png";
import user from "../GyanAcademyPages/HomePage/asserts/Mask.png";

function Quotecard() {
  return (
    <div className="mt-[50px] w-screen h-[310px]">
      <div className="pt-[86px] flex gap-[140px] justify-center">
        <div>
          <img className="pt-[40px]" src={left_arror} />
        </div>
        <div className="flex gap-[62px]">
          <div>
            <img src={quote} />
          </div>
          <div>
            <p className="w-[693px] h-[96px] text-[#1E0E62] text-[22px] font-medium">
              The most important part of the Startup Framework is the samples.
              The samples form a set of 25 usable pages you can use as is or you
              can add new blocks from UI Kit.{" "}
            </p>
            <div className=" flex gap-[17px]">
              <img className="pt-[22px]" src={user} />
              <p className=" pt-[44px] h-[26px] w-[236px] text-[14px] text-[#151439] opacity-[0.7]">
                Jessey Kirk, designmodo
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="pt-[42px]" src={right_arror} />
        </div>
      </div>
    </div>
  );
}

export default Quotecard;
