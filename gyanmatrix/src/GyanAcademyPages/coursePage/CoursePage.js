import React from "react";
//components
import Search from "../../Components/Search";
import HeaderBanner from "../../Components/HeaderBanner";
import BackNavigation from "../../Components/BackNavigation";
import CourseCardContainer from "../../Components/CourseCardContainer";
//asserts
import bgImg from "./asserts/Banner.svg";

function CoursePage() {
  const Text = "JavaScript";
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
          <CourseCardContainer />
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
