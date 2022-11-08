import React from "react";

const HeaderBanner = (props) => {
  return (
    <div>
      <div
        className="bg-no-repeat w-screen h-64 bg-cover flex items-center text-center justify-center
         md:h-[223px] md:bg-cover md:bg-center
         sm:h-[112px] sm:w-[100%] sm:bg-cover sm:bg-center
         xl:h-[223px] xl:bg-cover xl:bg-center"
        style={{ backgroundImage: `url(${props.bgImg})` }}
      >
        <h3 className="text-6xl text-white text-[40px] font-bold">
          {props.BannerText}
        </h3>
      </div>
    </div>
  );
};

export default HeaderBanner;
