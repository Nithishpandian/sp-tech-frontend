import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-3 gap-8 bg-black py-8 px-12 font-noto-sans">
        <div className=" flex flex-col gap-1">
          <h1 className=" text-2xl font-design-system font-bold text-stone-200">
            SP TECH
          </h1>
          <p className=" text-stone-400">
            1st Floor, S.F. No. 461/2 CRPF Road, Thoppampatti post, Coimbatore,
            Tamil Nadu, 641017
          </p>
          <div className=" flex items-center gap-2 text-stone-500 mt-3">
            <div className=" border border-stone-400 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
              <CiInstagram />
            </div>
            <div className=" border border-stone-400 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
              <CiTwitter />
            </div>
            <div className=" border border-stone-400 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
              <LuLinkedin />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" flex flex-col gap-1">
            <h2 className=" font-roboto font-medium text-stone-600 text-lg">
              Email
            </h2>
            <div>
              <p className=" text-stone-400">sptech.cbe@gmail.com</p>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <h2 className=" font-roboto font-medium text-stone-600 text-lg">
              Mobile
            </h2>
            <div>
              <p className=" text-stone-400">+91 8189894433</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h2 className=" font-roboto font-medium text-stone-600 text-lg">
            Links
          </h2>
          <div className=" flex flex-col gap-1 text-stone-400">
            <a href="/home" className="hover:text-stone-500 duration-300 w-fit">Home</a>
            <a href="/about-us" className="hover:text-stone-500 duration-300 w-fit">About us</a>
            <a href="/products" className="hover:text-stone-500 duration-300 w-fit">Products</a>
            <a href="/contact" className="hover:text-stone-500 duration-300 w-fit">contact</a>
          </div>
        </div>
      </div>
      <div className="bg-black border-t border-stone-800 text-stone-600 font-medium text-center py-1.5 font-mono">
        <p>Copyright &#169;	2023. All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
