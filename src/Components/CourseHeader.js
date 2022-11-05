import React from "react";

function CourseHeader() {
  return (
    <div>
      {" "}
      <div className="flex font-medium flex-row justify-start mt-[24px] w-[1162px] border-b-[1px] h-[40px]">
        {["Most Popular"].map((obj) => (
          <div className="flex">
            <span className="ml-12 h-full border-b-[2px] border-[#9D1C7F] p-[5px]">
              <h3>{obj}</h3>
            </span>
            <span className="ml-12 h-full  p-[5px]">
              <h3>Highly Rated</h3>
            </span>
            <span className="ml-12 h-full   p-[5px]">
              <h3>New</h3>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseHeader;
