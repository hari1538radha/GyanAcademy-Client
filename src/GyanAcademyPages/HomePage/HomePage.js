import React from "react";
import { useNavigate } from "react-router-dom";
import QuoteCard from "../../Components/QuoteCard";
//asserts
import sample2 from "./asserts/sample2.png";
import sample1 from "./asserts/sample1.png";
import sample3 from "./asserts/sample3.png";
import bootcamp from "./asserts/ph_chalkboard-teacher.png";
import webinars from "./asserts/mdi_human-male-board.png";
import women_in_tech from "./asserts/women.png";

const HomePage = () => {
  const Navigate = useNavigate();
  const handelPages = () => {
    Navigate("/courselibrary");
  };
  const HandelFormPage = () => {
    Navigate("/applicationform");
  };
  
  return (
    <div>
      <div className="w-screen h-[670px] pl-[146px] bg-background bg-cover flex justify-between">
        <div className="w-[465px] pt-[101px] inline-flex flex-col gap-[45px]">
          <p className="font-bold text-[52px]">Advance Your Skills</p>
          <p className="h-[96px] text-[22px] leading-[32px]">
            Develop critical tech skills. Cut cycle times. Build happier,
            healthier tech teams. And transform your goals into gains.{" "}
          </p>
          <button
            onClick={handelPages}
            className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] text-[17px] "
          >
            Know More
          </button>
        </div>
        <img className=" h-[500px]" src={sample1} />
      </div>

      <div className="w-screen h-[430px] bg-gradient-to-b from-[#282B85E5]  to-[#9A1D80E5]">
        <div className=" text-white pt-[108px] pl-[134px] flex gap-[30px]">
          <div className=" rounded-[22px] shadow-home_box bg-gradient-to-br from-[#FFFFFF66] to-[#00000000] backdrop-blur-[14px] w-[371px] h-[214px]">
            <div className=" inline-flex flex-col gap-[20px] pl-[25px] pt-[23px]">
              <div className="flex gap-[14px]">
                <img src={bootcamp} />
                <p className="w-[267px] h-[39px] text-[26px] font-medium">
                  Bootcamps
                </p>
              </div>
              <p className="text-[14px] ">
                Escalate your career with our bootcamps, designed to build depth
                of knowledge and ability in the most in-demand tech skills.
              </p>
              <a className=" text-[15px] font-semibold " href="">
                Read More
              </a>
            </div>
          </div>

          <div className="rounded-[22px] shadow-home_box bg-gradient-to-br from-[#FFFFFF66] to-[#00000000] backdrop-blur-[14px]  w-[371px] h-[214px]">
            <div className=" inline-flex flex-col gap-[20px] pl-[25px] pt-[23px]">
              <div className="flex gap-[14px]">
                <img src={webinars} />
                <p className="w-[267px] h-[39px] text-[26px] font-medium">
                  Webinars
                </p>
              </div>
              <p className="text-[14px]">
                Escalate your career with our bootcamps, designed to build depth
                of knowledge and ability in the most in-demand tech skills.
              </p>
              <a className=" text-[15px] font-semibold " href="">
                Read More
              </a>
            </div>
          </div>

          <div className="rounded-[22px] shadow-home_box bg-gradient-to-br from-[#FFFFFF66] to-[#00000000] backdrop-blur-[14px]  w-[371px] h-[214px]">
            <div className=" inline-flex flex-col gap-[20px] pl-[25px] pt-[23px]">
              <div className="flex gap-[14px]">
                <img src={women_in_tech} />
                <p className="w-[267px] h-[39px] text-[26px] font-medium">
                  Women in Tech
                </p>
              </div>
              <p className="text-[14px]">
                Escalate your career with our bootcamps, designed to build depth
                of knowledge and ability in the most in-demand tech skills.
              </p>
              <a className=" text-[15px] font-semibold " href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        className=" mt-[-46px] float-right h-[438px] w-[561px]"
        src={sample2}
      />

      <div className="w-screen h-[938px] bg-gradient-to-br from-[#E4D7FF] via-[#D8E7FF] to-[#BCFFDF]">
        <div className="pt-[44px] pl-[261px]">
          <p className="text-[36px] font-semibold w-[229px] h-[47px]">
            How it works
          </p>
          <div className=" pt-[44.5px] ">
            <p className=" h-[37px] w-[107px] text-[28.5px]">Sign up</p>
            <p className="pt-[11px] w-[367.5px] h-[88px] text-[13.5px]">
              Enim id nisi accumsan convallis. Cursus pharetra dictum enim,
              adipiscing pellentesque morbi sapien quis auctor. Ultrices nisl
              bibendum euismod nisl semper malesuada quis venenatis. Faucibus
              sodales.
            </p>
          </div>
          <div className="pt-[30px] ">
            <p className=" h-[37px] w-[160px] text-[28.5px]">Get access</p>
            <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px]">
              Eget massa sem gravida tellus dolor, tortor eu ante. Diam odio
              fermentum netus id eget. Sed diam massa nisl faucibus arcu
              vulputate ut venenatis. Elementum.
            </p>
          </div>
        </div>
        <div className=" pt-[58px] pr-[256px] flex justify-between">
          <img
            className=" mt-[26px] float-left h-[510px] w-[611px]"
            src={sample3}
          />
          <div className=" ">
            <div>
              <p className=" h-[37px] w-[183px] text-[28.5px]">Learn course</p>
              <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px]">
                Orci, lobortis elit dui aliquam nisl nunc. Leo suspendisse
                vitae, vitae sed sagittis morbi enim. Sapien facilisis faucibus
                est augue pellentesque nisl.{" "}
              </p>
            </div>
            <div className="pt-[30px]">
              <p className=" h-[37px] w-[137px] text-[28.5px]">Get result</p>
              <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px]">
                Dolor ut facilisis molestie sagittis et ultrices. In consequat
                dignissim volutpat pellentesque magna semper vehicula vitae
                magna. Vulputate fermentum.
              </p>
            </div>
            <div className="pt-[38px] inline-flex flex-row gap-[14px]">
              <button onClick={HandelFormPage} className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] text-[17px] ">
                Start now
              </button>
              <button  onClick={HandelFormPage}  className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] text-[17px] ">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <QuoteCard />

      <div className=" flex justify-center items-center flex-col mb-[44px] h-[501px]">
        <div className="pt-[45px]">
          <p className=" text-center h-[52px] text-[42px] font-semibold">
            Our Values
          </p>
        </div>
        <div className=" rounded-tl-[100px] rounded-br-[100px] mt-[55px] rounded-rad w-[1040px] h-[305px] bg-pink-50">
          <div className=" pt-[59px] pl-[57px] flex gap-[50px] ">
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium ">
                Seek to learn
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[130px]">
                Startup Framework contains components and complex blocks which
                can easily be integrated into almost any design.{" "}
              </p>
            </div>
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium ">
                Paid internship
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[130px]">
                We haven’t forgotten about responsive layout. With Startup
                Framework, you can create a website with full mobile support.
              </p>
            </div>
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium ">
                Certification
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[108px]">
                Finish the path to get certificate Retina Display. Feel the
                clarity in each pixel. Feel the clarity in each pixel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
