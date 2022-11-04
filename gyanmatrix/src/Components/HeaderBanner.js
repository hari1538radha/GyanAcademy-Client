import React from "react";

const HeaderBanner = (props) => {
  return (
    <div>
      <div
        className="bg-no-repeat w-screen h-64 bg-contain w-screen` flex items-center justify-center"
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
