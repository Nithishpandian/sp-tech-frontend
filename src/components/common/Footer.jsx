import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { LuLinkedin } from "react-icons/lu";
import { motion } from "framer-motion";
import { animationVariantFooter } from "./animation/HeaderFooterAnimation";
import logo from "../../assets/images/common/logo.png"

const Footer = () => {
  return (
    <motion.div
      variants={animationVariantFooter}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
    >
      <div className=" flex flex-col sm:flex-row md:grid md:grid-cols-3 gap-10 2xl:gap-14 bg-[#196684] py-12 px-12 sm:px-10 lg:px-16 2xl:px-24 3xl:px-32 font-noto-sans">
        <div className=" flex flex-col gap-1">
          <img className=" w-32 mb-1" src={logo} alt="" />
          <p className=" text-stone-300">
            1st Floor, S.F. No. 461/2 CRPF Road, Thoppampatti post, Coimbatore,
            Tamil Nadu, 641017
          </p>
          <div className=" flex items-center gap-2 text-stone-300 mt-3">
            <div className=" border border-stone-200 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
              <CiInstagram />
            </div>
            <div className=" border border-stone-200 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
              <CiTwitter />
            </div>
            <div className=" border border-stone-200 p-1 rounded-full hover:opacity-70 duration-300 cursor-pointer">
              <LuLinkedin />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" flex flex-col gap-3">
            <h2 className=" font-roboto font-medium text-stone-100 text-xl">
              Contact
            </h2>
            <div className=" flex flex-col gap-1">
              <p className=" text-stone-300">+91 8189894433</p>
              <p className=" text-stone-300">sptech.cbe@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h2 className=" font-roboto font-medium text-stone-100 text-xl">
            Links
          </h2>
          <div className=" flex flex-col gap-1 text-stone-300">
            <a href="/home" className="hover:text-stone-100 duration-300 w-fit">
              Home
            </a>
            <a
              href="/about-us"
              className="hover:text-stone-100 duration-300 w-fit"
            >
              About us
            </a>
            <a
              href="/products"
              className="hover:text-stone-100 duration-300 w-fit"
            >
              Products
            </a>
            <a
              href="/contact"
              className="hover:text-stone-100 duration-300 w-fit"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#196684] border-t border-stone-400 text-stone-300 font-medium text-center py-1.5 font-mono text-sm sm:text-base">
        <p>Copyright &#169; 2023. All rights reserved</p>
      </div>
    </motion.div>
  );
};

export default Footer;
