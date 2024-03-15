import { FaArrowRight } from "react-icons/fa6";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-[50px] ">
      <div
        className="md:text-[75px]  text-[20px]  font-bold text-[#071a45]  text-center flex flex-col   
    "
      >
        <div className=" ">CONNECTING DREAMS TO REALITY</div>
        <div className="text-[#2c8fb5]">YOUR PREMIER</div>REAL ESTATE
        MARKETPLACE
        <p className="text-xl font-semibold mt-2  text-[#071a45] text-center">
          Where every search ends with a home
        </p>
      </div>

      <div className=" mt-5 w-max sm:mx-auto items-center ml-[90px]   px-5 flex flex-col gap-5  sm:flex-row ">
        <button className="bg-blue-500 hover:font-semibold transition-transform rounded-full px-5 text-xl text-center text-white py-3 mr-[100px] flex  items-center gap-2">
          Find Your Home <FaArrowRight className="hover:w-10 w-6" />
        </button>
        <button className="bg-blue-500 hover:font-semibold transition-transform rounded-full px-5 text-xl text-center text-white py-3 mr-[100px] flex  items-center gap-2">
          List Your Property <FaArrowRight className="hover:w-10 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
