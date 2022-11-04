import React from "react";
import { useNavigate } from "react-router-dom";
//JSON
import courses from "./JSON/data.json";
courses = courses.courses;
const CourseLibraryCard = () => {
  const Navigate = useNavigate();
  const handelPages = (courseAvailable) => {
    Navigate("/Courses",{state:courseAvailable});
  };

  return (
    <div>
      <div className="w-[100%] h-[1195px] bg-[#BCFFDF] flex-wrap flex">
        {courses.length > 0 &&
          courses.map((obj) => (
            <div className="pt-[55px]">
              <div className="ml-[129px] w-[356px] h-[236px] shadow-md shadow-gray-300 bg-white rounded-[25px]">
                <div
                  className="z-0 relative w-[356px] h-[145px] text-white rounded-t-[25px]"
                  style={{
                    backgroundImage: `url(${require("./Image/" +
                      obj.picture +
                      ".png")})`,
                  }}
                >
                  <div
                    className="z-10 absolute mt-[30px] ml-[30px] w-[3px] h-[22px] border-l-[4px] "
                    style={{ borderColor: `${obj.color}` }}
                  ></div>
                  <h3 className="absolute z-50  pl-[46px] pt-[24px] gap-10 text-[24px] font-bold">
                    {obj.title}
                  </h3>
                  <p className="absolute z-50 pl-[33px] pt-[77px] text-[14px] font-semibold">
                    {obj.description}
                  </p>
                  <div className="absolute top-0 bg-gradient-to-b from-[#0E0E0E] to-[#5B5B5BA1] w-[356px] h-[145px] rounded-t-[25px]"></div>
                </div>
                <div
                  className="pl-[90px] mt-[29px] text-[14px] font-semibold"
                  style={{ color: `${obj.color}` }}
                >
                  <button
                    onClick={()=>handelPages(obj.courseAvailable)}
                    className="border-[2px] w-[174px] h-[42px] rounded-[25px] shadow-md"
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