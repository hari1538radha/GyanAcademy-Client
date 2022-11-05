import React from "react";
//asserts
import search from "../GyanAcademyPages/coursePage/asserts/search.png";
const Search = () => {
  return (
    <div>
      <div className="relative w-[1170px]">
        <input
          type="text"
          placeholder="Search"
          className="w-[1170px] h-14 border-2 border-gray-300 rounded-[10px] p-[30px]"
        />
        <img
          src={search}
          className="absolute top-[36%] cursor-pointer left-[95%]"
        />
      </div>
    </div>
  );
};

export default Search;
