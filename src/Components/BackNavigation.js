import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import path from "../GyanAcademyPages/coursePage/asserts/Path.png";
const BackNavigation = (props) => {
  const Navigate = useNavigate();
  const handelLibraryPage = () => {
    Navigate(-1);
  };
  return (

    <div className="">
      <div className="flex flex-row w-[1170px] items-center mt-[44px] mb-[42px]
      xl:w-[950px]
      md:w-[740px] md:mt-[5%]
      sm:w-[310px] sm:mt-[15px] sm:mb-[14px]">

        <div
          className="cursor-pointer flex justify-center items-center md:h-[10px] xl:w-[1020px]"
          onClick={handelLibraryPage}
        >
          <img src={path} className="mr-2 pl-1 md:w-[15px] md:mr-[10px] xl:w-[18px]
          sm:w-[8px] sm:h-[8px]" />
          <h3 className="text-[20px] xl:w-[1020px] xl:text-[18px]
          mb-[2px] font-medium ml-[10px] md:text-[20px]
          sm:w-[220px] sm:text-[12px] sm:ml-0 sm:mt-[2px]"
          >
            Back to {props.Navigation}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BackNavigation;
