import React from "react";
//components
import GetStarted from "./GetStarted";
import CourseCard from "./CourseCard";

const CardContainer = (props) => {
  return (
    <div>
      <div className="flex flex-row mt-[0px] md:flex-col sm:flex-col">
        <div>
          <CourseCard courseList={props.courseList} />
        </div>
        <div>
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
