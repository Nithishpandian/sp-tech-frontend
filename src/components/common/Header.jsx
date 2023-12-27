import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationVariantHeader } from "./animation/HeaderFooterAnimation";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/common/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <motion.div
        variants={animationVariantHeader}
        initial="initial"
        animate="animate"
        className={` ${
          isMenuOpen ? " bg-[#e9e9e9] " : "bg-[#fdfdfd]" 
        } relative flex justify-between items-center border-b border-b-stone-200 py-4 lg:py-6 px-9 sm:px-7 md:px-10 lg:px-16 xl:px-28 2xl:px-32 3xl:px-40 z-50 `}
      >
        <div>
          <img className=" w-32" src={logo} alt="" />
        </div>
        <div
          className={`hidden sm:flex sm:items-center sm:justify-center gap-6 sm:gap-4 xl:gap-8 text-stone-600 font-dm-sans text-lg`}
        >
          <a className=" hover:text-dark-blue duration-300" href="/">
            Home
          </a>
          <a className=" hover:text-dark-blue duration-300" href="/products">
            Products
          </a>
          <a className=" hover:text-dark-blue duration-300" href="/about-us">
            About us
          </a>
          <a className=" hover:text-dark-blue duration-300" href="contact">
            Contact
          </a>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=" flex sm:hidden h-fit w-fit cursor-pointer"
        >
          {isMenuOpen ? (
            <IoClose className=" text-3xl text-dark-blue hover:text-stone-500 duration-300" />
          ) : (
            <RiMenu3Fill className=" text-3xl text-dark-blue hover:text-stone-500 duration-300" />
          )}
        </div>
      </motion.div>
      <div
        className={` absolute left-0 right-0 ${isMenuOpen ? " opacity-100 top-[86px]" : " opacity-0 -top-[200px]"} duration-500 z-40 flex flex-col justify-center items-end sm:hidden gap-6 text-stone-600 font-dm-sans text-xl bg-[#e9e9e9] pt-2 pb-5 px-12`}
      >
        <a className=" hover:text-stone-400 duration-300" href="/">
          Home
        </a>
        <a className=" hover:text-stone-400 duration-300" href="/products">
          Products
        </a>
        <a className=" hover:text-stone-400 duration-300" href="/about-us">
          About us
        </a>
        <a className=" hover:text-stone-400 duration-300" href="contact">
          Contact
        </a>
      </div>
    </>
  );
};

export default Header;
