import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import preview from "../GyanAcademyPages/coursePage/asserts/preview.png";
import profile from "../GyanAcademyPages/coursePage/asserts/tutorProfile.png";
import ratings from "../GyanAcademyPages/coursePage/asserts/star.png";

const CourseCard = (props) => {
  const Navigate = useNavigate();
  console.log(props);
  const courseList = props.courseList;
  console.log(courseList);

  const handelCoursevideo = (
    tasks,
    tutor,
    description,
    ratings,
    title,
    learningTags
  ) => {
    Navigate("/coursevideo", {
      state: {
        courseLists: courseList,
        tasks: tasks,
        learningTags: learningTags,
        tutor: tutor,
        description: description,
        ratings: ratings,
        title: title,
      },
    });
  };

  return (
    <div className="sm:w-[100%]">
      <div className=" max-h-[1515px] w-[800px] flex flex-col justify-center overflow-y-scroll no-scrollbar md:w-[760px] sm:w-[100%] sm:mt-[-15%x ]">
        {courseList?.length > 0 &&
          courseList.map((obj) => (
            <div className="flex flex-row max-w-[760px] h-[280px] drop-shadow-xl	 bg-[#FFFFFF] rounded-[25px] my-[50px] md:w-[760px] sm:w-[100%] sm:flex-col sm:h-[100%] sm:mt-[100px] sm:h-[50%] sm:mt[10%]">
              <img src={preview} className="p-[24px] sm:w-[440px] sm:h-[300px] sm:ml-[3%]" />
              <div className="flex flex-col justify-between p-[24px] sm:ml-[7%]">
                <h2 className="border-l-[4px] border-[#9D1C7F] pl-[7px] text-[20px] font-semibold sm:h-[70px] sm:text-[20px]">
                  {obj.courseName}
                </h2>
                <div className="flex flex-row items-center sm:h-[30px] sm:mt-[10px]">
                  <p className="text-[14px] font-normal ">
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
                <p className="text-[14px] font-normal sm:mt-[10px]">
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
                  className="border-[2px] w-[174px] h-[42px] rounded-[25px] border-[#9D1C7F] left-[180px] relative sm:left-[30px] sm:mt-[20px]"
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
