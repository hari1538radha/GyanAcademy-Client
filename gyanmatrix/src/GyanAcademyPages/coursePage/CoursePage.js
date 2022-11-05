import React from "react";
import { useLocation } from "react-router-dom";
//components
import Search from "../../Components/Search";
import HeaderBanner from "../../Components/HeaderBanner";
import BackNavigation from "../../Components/BackNavigation";
import CourseCardContainer from "../../Components/CourseCardContainer";
import CourseHeader from "../../Components/CourseHeader";
//asserts
import bgImg from "./asserts/Banner.svg";

function CoursePage() {
  const Text = "JavaScript";
  const passedData = useLocation();
  return (
    <div>
      <div>
        <HeaderBanner bgImg={bgImg} BannerText="JavaScript" />
      </div>
      <div className="relative left-36 w-[1500px]">
        <div>
          <BackNavigation
            NavigateTo={"/courselibrary"}
            Navigation={"Course Library"}
          />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <CourseHeader/>
          <CourseCardContainer courseList={passedData.state} />
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
