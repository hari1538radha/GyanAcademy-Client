import React from "react";
import { useNavigate } from "react-router-dom";
//JSON
import courses from "./JSON/data.json";
courses = courses.courses;
const CourseLibraryCard = () => {
  const Navigate = useNavigate();
  const handelPages = (courseAvailable) => {
    Navigate("/Courses", { state: courseAvailable });
  };

  return (
    <div>
      <div className="w-screen pb-32 bg-gradient-to-b from-[#E1F3FF] to-[#E4D7FF] flex-wrap gap-14 flex items-center justify-center 
      md:gap-[19px] md:pt-[25px] sm:w-[540px]">
        {courses.length > 0 &&
          courses.map((obj) => (
            <div className="pt-[55px] md:pt-[15px]">
              <div className="w-[356px] h-[236px] shadow-md shadow-gray-300 bg-white rounded-[25px] sm:w-[287px]">
                <div
                  className="z-0 relative w-[356px] h-[145px] text-white rounded-t-[25px] sm:w-[287px]"
                  style={{
                    backgroundImage: `url(${require("./Image/" +
                      obj.picture +
                      ".png")})`,
                  }}
                >
                  <div
                    className="z-10 absolute mt-[30px] ml-[30px] w-[3px] h-[22px] border-l-[4px] sm:w-[287px]"
                    style={{ borderColor: `${obj.color}` }}
                  ></div>
                  <h3 className="absolute z-50  pl-[46px] pt-[24px] gap-10 text-[24px] font-bold">
                    {obj.title}
                  </h3>
                  <p className="absolute z-50 pl-[33px] pt-[77px] text-[14px] font-semibold sm:w-[269px] sm:h-[36px] sm:text-[11px]">
                    {obj.description}
                  </p>
                  <div className="absolute top-0 bg-gradient-to-b from-[#0E0E0E] to-[#5B5B5BA1] w-[356px] h-[145px] rounded-t-[25px] sm:w-[287px]"></div>
                </div>
                <div
                  className="pl-[90px] mt-[29px] text-[14px] font-semibold sm:text-[12px] sm:pl-[75px]"
                  style={{ color: `${obj.color}` }}
                >
                  <button
                    onClick={() => handelPages(obj.courseAvailable)}
                    className="border-[2px] w-[174px] h-[42px] rounded-[25px] shadow-md sm:w-[136px] sm:h-[35px]"
                    style={{ borderColor: `${obj.color}` }}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseLibraryCard;
