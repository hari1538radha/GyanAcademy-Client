import React from "react";
import { useLocation } from "react-router-dom";
//components
import HeaderBanner from "../../Components/HeaderBanner";
import BackNavigation from "../../Components/BackNavigation";
//JSON
import courses from "../../Components/JSON/data.json";
//asserts
import backimage from "./asserts/backimage.svg";
import path from "./asserts/Path.svg";
import userprofile from "./asserts/userprofile.svg";
import Ratings from "./asserts/ratings.svg";
import icon from "./asserts/Icon.svg";
import vedioPlayer from "./asserts/vedioPlayer.svg";

const CourseVideoPage = () => {

  let passedData = useLocation();

  passedData = passedData.state;
  const learningTags =  passedData.tasks[0].learningTags
  const tasks = passedData.tasks[0].tasks;
  console.log(tasks);
  const onClickHandler = (event) => {
    console.log(event);
    const selectedElement = document.getElementById(
      `${event.target.id}-videos`
    );
    selectedElement.style.display =
      selectedElement.style.display == "block" ? "none" : "block";
  };
  return (
    <div>
      <div>
        <HeaderBanner
          bgImg={backimage}
          BannerText="Learn Merge Sort in JavaScript"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-screen">
        <div>
          <BackNavigation Path={path} Navigation={"Javascript"} />
        </div>
        <div>
          <div className="flex flex-start w-[1170px] ">
            <h1 className="font-semibold text-[30px] "> {passedData.title}</h1>
          </div>
          <div className="mt-10 flex items-center mb-10">
            <img className="mr-3" src={userprofile}></img>
            <p className="mr-10 opacity-60 font-semibold text-[22px]">
              {passedData.tutor}
            </p>
            <img className="mr-3" src={Ratings}></img>
            <p>{passedData.ratings}</p>
          </div>
          <p className="font-medium text-[20px]">{passedData.description}</p>
        </div>

        <div className=" flex flex-col justify-center items-center mt-16 gap-y-6">
          {tasks.length &&
            tasks.map((obj, index) => (
              <div className="mb-[26px]">
                <div
                  className="flex cursor-pointer group focus:rounded-none items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-t-[20px]"
                  id={`index-${index}`}
                  // style={{ borderTopLeftRadius:"20px",borderTopRigthRadius:"20px", focus:"green" }}
                  onClick={(event) => {
                    onClickHandler(event);
                  }}
                >
                  <img className="ml-[35px] mr-[31px]" src={icon}></img>
                  <p className="font-medium text-[22px]">{obj.taskHeader}</p>
                </div>
                <div
                  className=" focus:block cursor-pointer hidden"
                  id={`index-${index}-videos`}
                >
                  {obj.taskItems.length &&
                    obj.taskItems.map((obj) => (
                      <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 first:rounded-t-none last:rounded-b-lg">
                        <img
                          className="ml-[35px] mr-[31px]"
                          src={vedioPlayer}
                        ></img>
                        <p className="font-medium text-[22px]">{obj}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          <div className="mt-10 mb-14 flex flex-col w-[1170px]  ">
            <p className="w-[340px] h-14 text-[30px] font-semibold mb-6">
              You'll learn
            </p>
            <div>
              {
                <div className="w-[50%] flex flex-wrap gap-x-6 gap-y-5">
                  {learningTags.length > 0 &&
                    learningTags.map((obj) => (
                      <div className=" gap-5 px-6 h-12 flex items-center justify-center rounded-3xl bg-gradient-to-b from-[#3F6AB833] cursor-pointer to-[#903F981F]">
                        <p>{obj}</p>
                      </div>
                    ))}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideoPage;
