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
        <div className="md:w-[768px] sm:w-[310px] xl:w-[1020px]">
          <div className="flex flex-start w-[1170px] md:w-[668px] sm:w-[310px] sm:mt-[-35px] xl:w-[1020px]">
            <h1 className="font-semibold text-[30px] md:text-[16px] md:w-[565px] md:ml-[4%] sm:text-[16px] xl:w-[1020px] sm:ml-[2%] xl:text-[25px] xl:ml-[3%]">
              {" "}
              {passedData.title}
            </h1>
          </div>
          <div className="mt-10 flex items-center mb-10 md:mt-[10px] md:ml-[4%] sm:w-[310px] sm:mt-[15px] sm:ml-[2%] xl:w-[1020]">
            <img
              className="mr-3  md:w-[22px] sm:w-[24px] xl:w-[30px] xl:ml-[3%]"
              src={userprofile}
            ></img>
            <p className="mr-10 opacity-60 font-semibold text-[22px] md:text-[12px] xl:w-[1020px] sm:text-[12px] xl:text-[20px]">
              {passedData.tutor}
            </p>
            <img
              className="mr-3 md:w-[11px] md:ml-[-25px] sm:w-[13px] sm:ml-[-30px] xl:w-[20px] xl:ml-[-60%]"
              src={Ratings}
            ></img>
            <p className="md:text-[11px] sm:text-[12px] xl:w-[1020px]">
              {passedData.ratings}
            </p>
          </div>
          <p className="font-medium text-[20px] md:text-[13px] md:ml-[4%] md:mt-[-15px] sm:text-[12px] sm:mt-[-20px] sm:ml-[2%] xl:w-[950px] xl:ml-[3%]">
            {passedData.description}
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center mt-16 gap-y-6 md:mt-[35px] sm:w-[310px] sm:mt-[50px] xl:w-[1020px]">
          {tasks.length &&
            tasks.map((obj, index) => (
              <div className="mb-[26px] sm:w-[310px] sm:mt-[-40px] xl:w-[1020px] xl:mt-[-30px]">
                <div
                  className="flex cursor-pointer group focus:rounded-none items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-t-[20px] md:h-[60px] md:h-[60px] md:w-[735px] md:ml-[10px] md:mt-[-25px] sm:w-[310px] sm:h-[40px] xl:w-[1020px] xl:h-[70px]"
                  id={`index-${index}`}
                  // style={{ borderTopLeftRadius:"20px",borderTopRigthRadius:"20px", focus:"green" }}
                  onClick={(event) => {
                    onClickHandler(event);
                  }}
                >
                  <img
                    className="ml-[35px] mr-[31px] md:w-[15px] md:w-[10px] sm:w-[2%] xl:w-[10px]"
                    src={icon}
                  ></img>
                  <p className="font-medium text-[22px] md:text-[14px] sm:text-[12px] xl:w-[1020px] xl:text-[18px] ">
                    {obj.taskHeader}
                  </p>
                </div>
                <div
                  className=" focus:block cursor-pointer hidden sm:w-[310px] xl:w-[1010px]"
                  id={`index-${index}-videos`}
                >
                  {obj.taskItems.length &&
                    obj.taskItems.map((obj) => (
                      <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 first:rounded-t-none last:rounded-b-lg md:ml-[10px] md:w-[735px] md:h-[60px] sm:w-[310px] sm:h-[40px] xl:w-[1020px]">
                        <img
                          className="ml-[35px] mr-[31px] md:w-[15px] sm:w-[310px] sm:w-[4%] xl:w-[2%]"
                          src={vedioPlayer}
                        ></img>
                        <p className="font-medium text-[22px] md:text-[14px] sm:text-[12px] xl:w-[1020px] xl:text-[18px]">
                          {obj}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          <div className="mt-10 mb-14 flex flex-col w-[1170px] md:w-[768px] md:mt-[10px] sm:w-[310px] sm:mt-[-18px] sm:ml-[3%] xl:w-[1020px]">
            <p className="w-[340px] h-14 text-[30px] font-semibold mb-6 md:text-[20px] md:ml-[20px] sm:w-[310px] sm:text-[16px] xl:w-[100 0px] xl:text-[25px] xl:ml-[15px]">
              You'll learn
            </p>
            <div>
              {
                <div className="w-[50%] flex flex-wrap gap-x-6 gap-y-5 md:w-[768px] sm:w-[310px] sm:mt-[-25px] xl:w-[800px]">
                  {learningTags.length > 0 &&
                    learningTags.map((obj) => (
                      <div className=" gap-5 px-6 h-12 flex items-center justify-center rounded-3xl bg-gradient-to-b from-[#3F6AB833] cursor-pointer to-[#903F981F] md:ml-[20px] sm:h-[20px] sm:mt-[-5px]">
                        <p className="md:text-[14px] sm:text-[12px] xl:text-[18px]">
                          {obj}
                        </p>
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
