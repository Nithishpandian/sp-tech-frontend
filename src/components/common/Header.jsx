import React from "react";
import { motion } from "framer-motion";
import { animationVariantHeader } from "./animation/HeaderAnimation";

const Header = () => {
  return (
    <motion.div 
    variants={animationVariantHeader}
    initial="initial"
    animate="animate"
    className=" flex justify-between items-center py-5 lg:py-8 px-12 sm:px-7 md:px-10 lg:px-16 xl:px-28">
      <div>
        <h1 className=" font-krona-one text-3xl text-stone-700 font-extrabold">
          SP TECH
        </h1>
      </div>
      <div className=" flex items-center justify-center gap-6 sm:gap-4 xl:gap-8 text-stone-600 font-dm-sans text-lg">
        <a className=" hover:text-stone-400 duration-300" href="/">Home</a>
        <a className=" hover:text-stone-400 duration-300" href="/products">Products</a>
        <a className=" hover:text-stone-400 duration-300" href="/about-us">About us</a>
        <a className=" hover:text-stone-400 duration-300" href="contact">Contact</a>
      </div>
    </motion.div>
  );
};

export default Header;
