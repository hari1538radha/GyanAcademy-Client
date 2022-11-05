import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import preview from "../GyanAcademyPages/coursePage/asserts/preview.png";
import profile from "../GyanAcademyPages/coursePage/asserts/tutorProfile.png";
import ratings from "../GyanAcademyPages/coursePage/asserts/star.png";

const CourseCard = (props) => {
  const Navigate = useNavigate();
  const courseList = props.courseList;
  console.log(courseList);

  const handelCoursevideo = (tasks, tutor, description, ratings, title,learningTags) => {
    Navigate("/coursevideo", {
      state: {
        tasks: tasks,
        learningTags:learningTags,
        tutor: tutor,
        description: description,
        ratings: ratings,
        title: title,
      },
    });
  };

  return (
    <div>
      <div className=" max-h-[1515px] w-[800px] flex flex-col justify-center overflow-y-scroll no-scrollbar">
        {courseList.length &&
          courseList.map((obj) => (
            <div className="flex flex-row max-w-[760px] h-[280px] drop-shadow-xl	 bg-[#FFFFFF] rounded-[25px] my-[50px]">
              <img src={preview} className="p-[24px]" />
              <div className="flex flex-col justify-between p-[24px]">
                <h2 className="border-l-[4px] border-[#9D1C7F] pl-[7px] text-[20px] font-semibold">
                  {obj.courseName}
                </h2>
                <div className="flex flex-row items-center ">
                  <p className="text-[14px] font-normal">
                    {obj.courseLessons} lessons
                  </p>
                  <li className="ml-[15px] text-[14px] font-normal">
                    {obj.courseTime}
                  </li>
                  <li className="ml-[15px] text-[14px] font-normal">
                    {obj.courseLevel}
                  </li>
                </div>
                <div className="flex flex-row items-center ">
                  <img src={profile} className="mr-[7px]" />
                  <p className="mr-[15px] text-[12px] font-medium">
                    {obj.courseTutor}
                  </p>
                  <img src={ratings} className="h-[11px] w-[11px] mr-[5px]" />
                  <p className="text-[12px] font-medium">{obj.courseRatings}</p>
                </div>
                <p className="text-[14px] font-normal">
                  {obj.courseDescription}
                </p>
                <button
                  onClick={() =>
                    handelCoursevideo(
                      obj.courseVideos,
                      obj.courseTutor,
                      obj.courseDescription,
                      obj.courseRatings,
                      obj.courseName
                    )
                  }
                  className="border-[2px] w-[174px] h-[42px] rounded-[25px] border-[#9D1C7F] left-[180px] relative"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseCard;
