import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import sample1 from "./asserts/sample1.png";
import bootcamp from "./asserts/ph_chalkboard-teacher.png";
import webinars from "./asserts/mdi_human-male-board.png";
import women_in_tech from "./asserts/women.png";

const HomePage = () => {
  const Navigate = useNavigate();
  const handelPages = () => {
    Navigate("/courselibrary");
  };
  return (
    <div>
      <div className="w-screen h-[670px] pl-[146px] bg-background flex justify-between">
        <div className="w-[465px] pt-[101px] inline-flex flex-col gap-[45px]">
          <p className="font-bold text-[52px]">Advance Your Skills</p>
          <p className="h-[96px] text-[22px] leading-[32px]">
            Develop critical tech skills. Cut cycle times. Build happier,
            healthier tech teams. And transform your goals into gains.{" "}
          </p>
          <button
            onClick={handelPages}
            className=" shadow-button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] text-[17px] "
          >
            Know More
          </button>
        </div>
        <img className=" h-[500px]" src={sample1} />
      </div>
      <div className="w-screen h-[430px] bg-gradient-to-b from-[#282B85E5]  to-[#9A1D80E5]">
        <div className="pt-[108px] pl-[134px] flex gap-[30px]">
          <div className=" rounded-[22px] shadow-home_box bg-gradient-to-br from-[#FFFFFF66] to-[#00000000] backdrop-blur-[14px] w-[371px] h-[214px]">
            <div className="pl-[25px] pt-[23px]">
              <div>
                <img src={bootcamp} />
                <p>Bootcamps</p>
              </div>
              <p>
                Escalate your career with our bootcamps, designed to build depth
                of knowledge and ability in the most in-demand tech skills.
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div className="w-[371px] h-[214px]">
            <div>
              <div>
                <img src={webinars} />
                <p>Webinars</p>
              </div>
              <p>
                Escalate your career with our bootcamps, designed to build depth
                of knowledge and ability in the most in-demand tech skills.
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div className="w-[371px] h-[214px]">
            <div>
              <div>
                <img src={women_in_tech} />
                <p>Women in Tech</p>
              </div>
              <p>
                Escalate your career with our bootcamps, designed to build depth
                of knowledge and ability in the most in-demand tech skills.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
