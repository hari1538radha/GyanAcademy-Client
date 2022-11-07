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

  const card =[
    {
      "title":"Bootcamp",
      "img":bootcamp
    },
    {
      "title":"Webinars",
      "img":webinars
    },
    {
      "title":"Women in Tech",
      "img":women_in_tech
    }
  ]
  console.log(card);
  

  return (
    <div>
      <div className="w-screen h-[670px] pl-[146px] bg-background bg-cover flex justify-between md:pl-[48px] md:h-[304px] ">
        <div className="w-[465px] pt-[101px] inline-flex flex-col gap-[45px] md:pt-[35px]">
          <p className="font-bold text-[52px] md:h-[48px] md:w-[171px] md:text-[22px] ">Advance Your Skills</p>
          <p className="h-[96px] text-[22px] leading-[32px] md:h-[69px] md:w-[325px] md:text-[13px]">
            Develop critical tech skills. Cut cycle times. Build happier, healthier tech teams. And transform your goals into gains.{" "}
          </p>
          <button
            onClick={handelPages}
            className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] text-[17px] md:text-[11px] md:w-[103px] md:h-[37px] "
          >
            Know More
          </button>
        </div>
        <img className=" h-[500px] md:h-[264px] md:w-[311px]" src={sample1} />
      </div>
      
      <div className="w-screen h-[430px] bg-gradient-to-b from-[#282B85E5]  to-[#9A1D80E5] md:h-[200px]">
        <div className=" text-white justify-center pt-[108px] flex gap-[50px] md:pt-[15px] md:gap-[31px]">
          {card?.length>0&& card.map((obj)=>(
          <div className=" rounded-[22px] shadow-home_box bg-gradient-to-br from-[#FFFFFF66] to-[#00000000] backdrop-blur-[14px] w-[371px] h-[214px] md:w-[224px] md:h-[120px] ">
            <div className=" inline-flex flex-col gap-[20px] pl-[25px] pt-[23px] md:gap-[13px] md:pt-[15px] ">
              <div className="flex gap-[14px] md:gap-[8px]">
                <img className=" md:w-[21px] md:h-[16px]" src={obj.img} />
                <p className="w-[267px] h-[39px] text-[26px] font-medium md:w-[161px] md:h-[16px] md:text-[12px]">
                  {obj.title}
                </p>
              </div>
              <p className="text-[14px] md:w-[200px] md:h-[34px] md:text-[9px] ">
                Escalate your career with our bootcamps, designed to build depth of knowledge and ability in the most in-demand tech skills.
              </p>
              <a className=" text-[15px] font-semibold md:text-[9px] " href="">
                Read More
              </a>
            </div>
          </div>))}
          
        </div>
      </div>

      <img
        className=" mt-[-46px] float-right h-[438px] w-[561px] md:h-[260px] md:w-[307px] md:mt-[-30px]"
        src={sample2}
      />

      <div className="w-screen h-[938px] bg-gradient-to-br from-[#E4D7FF] via-[#D8E7FF] to-[#BCFFDF] md:h-[599px] ">
        <div className="pt-[44px] pl-[261px] md:pl-[45px] md:pt-[23px]">
          <p className="text-[36px] font-semibold w-[229px] h-[47px] md:text-[18px] md:w-[115px] md:h-[23px]">
            How it works
          </p>
          <div className=" pt-[44.5px] md:pt-[19px] ">
            <p className=" h-[37px] w-[107px] text-[28.5px] md:h-[18px] md:w-[53px] md:text-[14px] ">Sign up</p>
            <p className="pt-[11px] w-[367.5px] h-[88px] text-[13.5px] md:pt-[10px] md:h-[68px] md:w-[308px] md:text-[9px]">
              Enim id nisi accumsan convallis. Cursus pharetra dictum enim,
              adipiscing pellentesque morbi sapien quis auctor. Ultrices nisl
              bibendum euismod nisl semper malesuada quis venenatis. Faucibus
              sodales.
            </p>
          </div>
          <div className="pt-[30px] ">
            <p className=" h-[37px] w-[160px] text-[28.5px] md:text-[14px] md:w-[79px] md:h-[18px] ">Get access</p>
            <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px] md:pt-[9px] md:w-[325px] md:h-[51px] md:text-[9px]">
              Eget massa sem gravida tellus dolor, tortor eu ante. Diam odio
              fermentum netus id eget. Sed diam massa nisl faucibus arcu
              vulputate ut venenatis. Elementum.
            </p>
          </div>
        </div>
        <div className=" pt-[58px] pr-[256px] flex justify-between md:pr-[70px]">
          <img
            className=" mt-[26px] float-left h-[510px] w-[611px] md:w-[322px] md:h-[332px] md:mt-[-10px] "
            src={sample3}
          />
          <div className=" ">
            <div>
              <p className=" h-[37px] w-[183px] text-[28.5px] md:h-[18px] md:w-[93px] md:text-[14px]">Learn course</p>
              <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px] md:pt-[9px] md:h-[51px] md:w-[286px] md:text-[9px] ">
                Orci, lobortis elit dui aliquam nisl nunc. Leo suspendisse
                vitae, vitae sed sagittis morbi enim. Sapien facilisis faucibus
                est augue pellentesque nisl.{" "}
              </p>
            </div>
            <div className="pt-[30px] md:pt-[21px]">
              <p className=" h-[37px] w-[137px] text-[28.5px] md:h-[16px] md:w-[71px] md:text-[14px] ">Get result</p>
              <p className=" pt-[11px] w-[367.5px] h-[66px] text-[13.5px] md:h-[51px] md:w-[287px] md:text-[9px] ">
                Dolor ut facilisis molestie sagittis et ultrices. In consequat
                dignissim volutpat pellentesque magna semper vehicula vitae
                magna. Vulputate fermentum.
              </p>
            </div>
            <div className="pt-[38px] inline-flex flex-row gap-[14px] md:pt-[20px] text-[17px] md:gap-[20px] md:text-[11px] ">
              <button
                onClick={HandelFormPage}
                className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] md:h-[37px] md:w-[95px]"
              >
                Start now
              </button>
              <button
                onClick={HandelFormPage}
                className=" shadow-home_button rounded-[6px] font-bold text-white  bg-gradient-to-b from-[#282B85E5] to-[#9A1D80E5] w-[139px] h-[49px] md:h-[37px] md:w-[118px] "
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <QuoteCard />

      <div className=" flex justify-center items-center flex-col mb-[44px] h-[501px] md:h-[328px] ">
        <div className="pt-[45px] md:pt-[25px] ">
          <p className=" h-[52px] text-[42px] font-semibold md:h-[25px] md:text-[19px] ">
            Our Values
          </p>
        </div>
        <div className=" mt-[55px] rounded-rad w-[1040px] h-[305px] bg-pink-50 md:mt-[25px] md:h-[210px] md:w-[670px]">
          <div className=" pt-[59px] pl-[57px] flex gap-[50px] md:gap-[46px] ">
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium md:text-[14px]">
                Seek to learn
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[130px] md:h-[105px] md:w-[162px] md:text-[11px]">
                Startup Framework contains components and complex blocks which
                can easily be integrated into almost any design.
              </p>
            </div>
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium md:text-[14px] ">
                Paid internship
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[130px] md:h-[117px] md:w-[164px] md:text-[11px] ">
                We haven’t forgotten about responsive layout. With Startup
                Framework, you can create a website with full mobile support.
              </p>
            </div>
            <div>
              <p className=" text-center text-[#9D1C7F] text-[22px] font-medium md:text-[14px] ">
                Certification
              </p>
              <p className=" pt-[25px] text-center w-[266px] h-[108px] md:h-[103px] md:w-[181px] md:text-[11px] ">
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
