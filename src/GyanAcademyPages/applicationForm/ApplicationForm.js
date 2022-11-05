import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/Footer";

function ApplicationForm() {
  const fields = [
    ["First Name *", "First Name *"],
    ["Last Name *", "Last Name *"],
    ["Email *", "eg. Your@gmail.com *"],
    ["Mobile Number *", "Mobile Number *"],
    ["Qualification *", "eg . Engineering, BCA, BSC, MBA.. Etc*"],
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[145px] mb-[145px]">
      <h1 className="text-[42px] font-medium mb-[10px]">Apply here </h1>
      <p className="text-[16px] font-normal mb-[60px]">
        Don’t miss out on your next big career opportunity. Fill the form and
        our HR will reach out to you shortly!
      </p>
      <div className="flex flex-row flex-wrap w-[820px] justify-between mb-[40px] left-[50px] relative">
        {fields.map((obj) => (
          <div className="w-[400px] text-[16px] font-normal">
            <label className="mb-[10px]">{obj[0]}</label>
            <br></br>
            <input
              placeholder={obj[1]}
              className="w-[400px] h-[53px] rounded-[5px] mb-[35px]"
            />
          </div>
        ))}
        <div className="w-[400px] text-[16px] font-normal ">
          <label className="mb-[10px]">Category</label>
          <br></br>
          <select
            name="Category"
            className="w-[400px] h-[53px] rounded-[5px] bg-white mb-[35px]"
          >
            <option value="web devlopment">web devlopment</option>
            <option value="App development">App development</option>
            <option value="ui designer">ui designer</option>
            <option value="cyber security intern">cyber security</option>
          </select>
        </div>
      </div>
      <div className="relative -left-[90px] mt-[-20px] mb-[30px]">
        <label className="text-[16px] font-normal">Upload resume *</label>
        <div class="max-w-xl">
          <label class="flex justify-center w-[755px] h-[115px]  transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span class="flex items-center  flex-col justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span class="font-medium text-gray-600">
              Click or drag a file to upload
              </span>
            </span>
            <input type="file" name="file_upload" class="hidden" />
          </label>
        </div>
      </div>

      <p className="text-[16px] font-normal mb-[30px]">
        By clicking *Apply*,I agree to GyanAcademy Terms & Conditions and
        Privacy Policy & Notice
      </p>
      <button className="bg-gradient-to-b from-[#282b85e6] to-[#9a1d80e6] text-white w-[143px] w-[760px] h-[46px]">
        Apply
      </button>
    </div>
  );
}

export default ApplicationForm;
