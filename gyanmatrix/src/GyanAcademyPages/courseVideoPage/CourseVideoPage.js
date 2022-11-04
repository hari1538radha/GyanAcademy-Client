import React from "react";
//components
import HeaderBanner from "../../Components/HeaderBanner";
import BackNavigation from "../../Components/BackNavigation";
//asserts
import backimage from "./asserts/backimage.svg";
import path from "./asserts/Path.svg";
import userprofile from "./asserts/userprofile.svg";
import Ratings from "./asserts/ratings.svg";
import icon from "./asserts/Icon.svg";
import vedioPlayer from "./asserts/vedioPlayer.svg";
import courses from "../../Components/JSON/data.json"
const courseVedioPage = () => {
  const learningTags = courses.courses[0].courseAvailable[0].courseVideos[0].learningTags
  console.log(learningTags)
  return (
    <div>
      <div>
        <HeaderBanner
          bgImg={backimage}
          BannerText="Learn Merge Sort in JavaScript"
        />
      </div>
   
      <div className="relative left-36 w-[1500px] mb-10">
      <div>
          <BackNavigation
            NavigateTo={"/courses"}
            Path={path}
            Navigation={"Javascript"}
          />
        </div>
   <div>

   <div>
          <h1 className="font-semibold text-[30px] ">
            {" "}
            Learn Merge Sort in JavaScript
          </h1>
        </div>
        <div className="mt-10 flex items-center mb-10">
          <img className="mr-3" src={userprofile}></img>
          <p className="mr-10 opacity-60 font-semibold text-[22px]">
            Sophie Delgado
          </p>
          <img className="mr-3" src={Ratings}></img>
          <p>4.7</p>
        </div>
        <p className="font-medium text-[20px]">
          Learn the basics of JavaScript by solving 140+ interactive coding
          challenges and building three fun projects.
        </p>
        <div className=" mt-16 gap-y-6 ">
          <div className="mb-[26px] focus:bg-green-300">
            <div className="flex  items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]">
              <img className="ml-[35px] mr-[31px]" src={icon}></img>
              <p className="font-medium text-[22px]">
                Build a passenger counter app
              </p>
            </div>
            <div className=" focus:block">
              <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-none">
                <img className="ml-[35px] mr-[31px]" src={vedioPlayer}></img>
                <p className="font-medium text-[22px]">Build a pass</p>
              </div>
              <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-none">
                <img className="ml-[35px] mr-[31px]" src={vedioPlayer}></img>
                <p className="font-medium text-[22px]">Build a pass</p>
              </div>
              <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-none">
                <img className="ml-[35px] mr-[31px]" src={vedioPlayer}></img>
                <p className="font-medium text-[22px]">Build a pass</p>
              </div>
              <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]">
                <img className="ml-[35px] mr-[31px]" src={vedioPlayer}></img>
                <p className="font-medium text-[22px]">Build a pass</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]">
            <img className="ml-[35px] mr-[31px]" src={icon}></img>
            <p className="font-medium text-[22px]">
              Build a passenger counter app
            </p>
          </div>
          <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]">
            <img className="ml-[35px] mr-[31px]" src={icon}></img>
            <p className="font-medium text-[22px]">
              Build a passenger counter app
            </p>
          </div>
        </div>
        <div className="mt-10 ">
          <p className="w-[340px] h-14 text-[30px] font-semibold">You'll learn</p>
          <div>
            {
              <div  className="w-[50%] flex flex-wrap gap-5">
                {learningTags.length > 0 && learningTags.map((obj) =>
                (
                  <div  className=" gap-5 px-6 h-12 flex items-center justify-center rounded-3xl bg-gradient-to-b from-[#3F6AB833]  to-[#903F981F]">
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

export default courseVedioPage;
