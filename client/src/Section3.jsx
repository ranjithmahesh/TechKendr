import { FaArrowRight } from "react-icons/fa6";
import React from "react";

const Section3 = () => {
  return (
    <div>
      <div className=" ">
        <h1 className="text-center pt-[50px] sm:text-[70px] text-[30px] font-bold text-[#071a45] bg-gradient-to-b from-[#a5c9d9] to-[#a5c9d9]  ">
          YOUR <i className="font-medium">TRUSTED</i> PARTNER IN <br /> THE
          FUTURE <i className="font-medium">OF HOUSING</i>
        </h1>
      </div>
      <div className="bg-[url('https://s3-alpha-sig.figma.com/img/394a/994f/f78c08a03ca12d0bc86bdbabbe1754ee?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvjPXYAY4ZycpwWAAMgX56ErN0~cM~iAYtASe9A1ddbJYEiTBhoThIn-Z0m2l9RBaFMyJSqnRptGtPBT6ZVVm9bB~su~LCIznjvTicYSkoLkJLNRHHCMA2fjHhnSvqotlev2xnMJ183CKGP3aJPN9~PKnV9P8jxThxpktFh8z0NnqQkJ5GSkOSML81mFMBfBJvjyL3sHPokKdGid8YqG~9nTzcqF9oBrxqf0ZJZOQhbFBO8JbI4tzrxxWQLVemALpZ7Cp8cnwO55N9Vhm~o~0uDd8nWdSwsGUmNbwhGwCuO7S-31~72AqGEeV3v1yfPBXjqcOFoqGHwRxqiQUM0gJg__')] mt-[-90px] sm:w-[1370px]   h-[800px]">
        <p className="text-center mt-[90px]  sm:w-[600px] sm:mx-auto text-[18px] font-bold text-[#071a45]">
          Our partnerships with governments and local banks ensure that our
          housing prices are affordable enough for our target market.
        </p>
        <div className="flex justify-center mt-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-3xl flex  items-center gap-5 hover:scale-110">
            Join Our Community Today <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
