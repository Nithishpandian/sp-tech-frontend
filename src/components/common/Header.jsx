import React from "react";
import { motion } from "framer-motion";
import { animationVariantHeader } from "./animation/HeaderAnimation";

const Header = () => {
  return (
    <motion.div 
    variants={animationVariantHeader}
    initial="initial"
    animate="animate"
    className=" flex justify-between items-center py-6 px-16">
      <div>
        <h1 className=" font-design-system text-3xl text-stone-700 font-extrabold">
          SP TECH
        </h1>
      </div>
      <div className=" flex items-center justify-center gap-8 text-stone-600">
        <a className=" hover:text-stone-400 duration-300" href="#">Home</a>
        <a className=" hover:text-stone-400 duration-300" href="#">About us</a>
        <a className=" hover:text-stone-400 duration-300" href="#">Products</a>
      </div>
      <div>
        <button className="group/button overflow-hidden relative border border-[#202020] rounded-md  bg-black py-2 px-4 text-white font-semibold">
          <div className="duration-300 group-hover/button:-translate-y-8 ">
            Contact
          </div>
          <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">
            Contact
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
