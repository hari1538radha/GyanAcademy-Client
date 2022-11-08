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
      <div className="flex flex-row w-[1170px] items-center mt-[44px] mb-[42px] md:w-[768px] md:mt-[5%]">
        <div
          className="cursor-pointer flex justify-center items-center md:h-[10px]"
          onClick={handelLibraryPage}
        >
          <img src={path} className=" mr-2 pl-2 md:w-[15px] " />
          <h3 className="text-[20px] mb-[2px] font-medium ml-[10px] md:text-[15px]">
            Back to {props.Navigation}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BackNavigation;
