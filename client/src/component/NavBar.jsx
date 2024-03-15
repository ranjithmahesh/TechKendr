import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isMobilResponsive, setIsMobilResponsive] = useState(false);

  const navmenu = [
    { id: 1, title: "Home" },
    { id: 2, title: "About Us" },
    { id: 3, title: "Porperty" },
    { id: 4, title: "Services" },
    { id: 5, title: "Contact" },
  ];
  return (
    <div className="flex  items-center justify-between mt-10 sm:mx-10 mx-2 ">
      <div className="hidden sm:block">
        <h1 className="text-[#071a45]   text-4xl">
          <b>XYZ</b> <i className="font-light">INDUSTRIES</i>
        </h1>
      </div>

      <div className="sm:hidden  flex  items-center justify-between  w-full">
        <div>
          {" "}
          <h1 className="text-[#071a45]   text-3xl">
            <b>XYZ</b> <i className="font-light">INDUSTRIES</i>
          </h1>
        </div>
        <div>
          {!isMobilResponsive && (
            <div>
              <RxHamburgerMenu
                className="w-[30px] h-[30px]"
                onClick={() => {
                  setIsMobilResponsive((prev) => !prev);
                }}
              />
            </div>
          )}

          {isMobilResponsive && (
            <div>
              <IoCloseSharp
                className="w-[30px] h-[30px]"
                onClick={() => {
                  setIsMobilResponsive((prev) => !prev);
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div className=" gap-10 bg-[#071a45] p-5 rounded-full md:flex hidden">
        {navmenu.map((item, i) => (
          <h1
            className="hover:text-white text-gray-400 cursor-pointer transition duration-6000"
            key={i}
          >
            {" "}
            {item.title}
          </h1>
        ))}
      </div>
      <div className="  gap-10 sm:flex hidden">
        <button className="border border-[#071a45] px-6 py-5 rounded-full text-[#071a45]  font-semibold  text-xl">
          Sing Up
        </button>
        <button className="bg-blue-500 text-white px-6 py-5 rounded-full    text-xl">
          Sing In
        </button>
      </div>

      {isMobilResponsive && (
        <div className="w-[340px] h-[1000px] top-20 max-h-screen bg-black bg-opacity-50 absolute">
          <ul>
            {navmenu.map((item, i) => (
              <li
                key={i}
                className="w-full text-center h-full border-b-2 border-gray-400 text-white font-bold text-[20px] my-5"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
