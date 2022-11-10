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


    <div >
      <div className="flex flex-row w-[1170px] items-center mt-[44px] mb-[42px] md:w-[768px] md:mt-[5%] sm:w-[310px] xl:w-[1020px] sl:w-[480px]">

        <div
          className="cursor-pointer flex justify-center items-center md:h-[10px] sm:w-[310px] sm:ml-[-30px] sm:mt-[-30px] xl:w-[1020px] sl:w-[470px]"
          onClick={handelLibraryPage}
        >
          <img src={path} className=" mr-2 pl-2 md:w-[15px] sm:w-[4%] xl:w-[18px] sl:w-[4%]" />
          <h3 className="text-[20px] mb-[2px] font-medium ml-[10px] md:text-[15px] sm:w-[220px] sm:text-[10px] xl:w-[1020px] xl:text-[18px] sl:w-[470px] sl:text-[17px]">

            Back to {props.Navigation}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BackNavigation;
