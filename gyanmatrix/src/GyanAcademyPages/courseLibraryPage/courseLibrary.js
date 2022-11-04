import React from "react";
//components
import HeaderBanner from "../../Components/HeaderBanner";
import Search from "../../Components/Search";
import BackNavigation from "../../Components/BackNavigation";
import CourseHeader from "../../Components/CourseHeader";
import CourseLibraryCard from "../../Components/CourseLibraryCard";
//asserts
import background from "./asserts/coursebg.png";

const CourseLibrary = () => {
  return (
    <div>
      <div>
        <HeaderBanner bgImg={background} BannerText="Course Library" />
      </div>
      <div className="relative left-36 w-[1500px]">
        <div>
          <BackNavigation NavigateTo={"/"} Navigation={"Home"} />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <CourseHeader />
        </div>
      </div>
      <div>
        <CourseLibraryCard />
      </div>
    </div>
  );
};

export default CourseLibrary;
