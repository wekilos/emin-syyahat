import React from "react";

import logo from "../images/footer-logo.svg";
import footer1 from "../images/footer1.svg";
import footer2 from "../images/footer2.svg";
import footer3 from "../images/footer3.svg";
import footer4 from "../images/footer4.svg";

const Footer = () => {
  return (
    <div className="w-[90%] mx-auto px-[78px] pt-[42px] pb-[33px] bg-[#F4F4F4] rounded-[20px] mb-[67px] ">
      <div className="flex items-center justify-between w-full pb-[98px] border-b border-solid border-[#DADADA] ">
        <div className="flex items-baseline flex-col w-[60%] justify-start gap-[19px]">
          <img src={logo} alt="logo" />
          <p className="w-[28%] text-[#7A7A7A] text-[14px] font-[poppins-regular] ">
            Lorem ipsum dolor sit amet consectetur pellentesque.{" "}
          </p>
        </div>

        <div className="flex items-start justify-between w-[40%] ">
          <div className="flex flex-col justify-start items-baseline gap-[10px]">
            <p className="text-[14px] font-[poppins-medium] ">About us</p>
            <p className="text-[#717171] text-[14px] font-[poppins-regular] ">
              Blog
            </p>
            <p className="text-[#717171] text-[14px] font-[poppins-regular]">
              Turkmenistan
            </p>
            <p className="text-[#717171] text-[14px] font-[poppins-regular]">
              Contact us
            </p>
          </div>

          <div className="flex flex-col justify-start items-baseline gap-[10px]">
            <p className="text-[14px] font-[poppins-medium]">FAQ</p>
            <p className="text-[#717171] text-[14px] font-[poppins-regular]">
              Tours
            </p>
            <p className="text-[#717171] text-[14px] font-[poppins-regular]">
              Hotels
            </p>
            <p className="text-[#717171] text-[14px] font-[poppins-regular]">
              Visa
            </p>
          </div>

          <div className="flex flex-col justify-start items-baseline gap-[10px]">
            <p className="text-[14px] font-[poppins-medium]">Terms of use</p>
            <p className="text-[#717171] text-[14px] font-[poppins-regular]">
              Privacy policy
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[30px] w-full flex items-center justify-between">
        <p className="text-[#717171] text-[14px] font-[poppins-regular]">
          Copyright 2024
        </p>

        <div className="flex items-center justify-center gap-[30px] ">
          <img src={footer1} alt="footer" />
          <img src={footer2} alt="footer" />
          <img src={footer3} alt="footer" />
          <img src={footer4} alt="footer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
