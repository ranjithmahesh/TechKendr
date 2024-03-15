import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import React, { useState } from "react";
import { BASE_URL } from "../GlobalAPI";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return alert("Please enter a valid email");
      }

      const response = await axios.post(BASE_URL, { email });
      console.log(response.data);
      alert("Email saved successfully");

      setEmail("");
    } catch (error) {
      console.error("Error saving email:", error);
      alert("Failed to save email. Please try again later.");
    }
  };

  const quickLinks = [
    { title: "About Us" },
    { title: "Blog" },
    { title: "Testimonials" },
    { title: "Terms and Conditions" },
    { title: "Privacy Policy" },
    { title: "Site Map" },
  ];
  const customerSupport = [
    { title: "Feedback" },
    { title: "Report a Problem" },
    { title: "Request a Call Back" },
  ];
  return (
    <div className=" bg-[#071a45] mt-10 sm:h-[400px] h-[950px] ">
      <div className="flex justify-normal flex-col sm:flex-row sm:justify-between p-10 gap-5 sm:gap-0">
        <div className="">
          <h1 className="text-white   text-4xl">
            <b>XYZ</b> <i className="font-light">INDUSTRIES</i>
          </h1>
          <p className="w-[270px] text-white font-thin text-[15px] mt-10">
            XYZ Industries: Where real estate dreams meet seamless transactions,
            transforming aspirations into achievements.
          </p>
          <button className="border rounded-2xl px-[25px] py-[5px] text-white mt-5 flex items-center gap-5 hover:bg-white hover:text-[#071a45]">
            Explore <FaArrowRight />
          </button>
        </div>

        <div className=" text-white flex justify-evenly flex-col sm:flex-row  flex-1">
          <div className="">
            <h1 className="pb-7 ">Quick Links</h1>
            <ul>
              {quickLinks.map((item, i) => (
                <li key={i} className="pb-2">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h1 className="pb-7 ">Customer Support</h1>
            <ul>
              {customerSupport.map((item, i) => (
                <li key={i} className="pb-2">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          {/* /////// */}
          <div className=" flex flex-col  ">
            <h1 className="pb-7 ">Subscribe Us</h1>
            <p>Subscribe to our weekly newsletter</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email id"
              className=" outline-none border-none rounded-md text-black ml-1 mt-6 w-[300px] h-[30px] pl-[5px]"
            />
            <button
              className=" mt-4 sm:mx-auto w-[299px] h-[30px] sm:pl-[5px]  bg-blue-500 rounded-md "
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border border-separate border-solid-[2px] border-gray-500 w-[1300px] mx-10  hidden sm:block"></div>
      <div className="flex justify-between items-center mx-10">
        <div className="text-gray-400   mt-2 flex gap-5">
          <FaYoutube className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaInstagram className="w-6 h-6" />
          <FaFacebook className="w-6 h-6" />
        </div>

        <div className=" text-white  gap-10 hidden sm:flex">
          <h1>Terms | Privacy</h1>
          <h1> &copy; 2024 XYZ </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
