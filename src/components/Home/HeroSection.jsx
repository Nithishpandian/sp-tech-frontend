import React from "react";
import { MdElectricBolt } from "react-icons/md";
import wireImg from "../../assets/images/wire.png";
import working from "../../assets/images/working.jpeg";
import { motion } from "framer-motion";
import {
  animationVariantHeroHeading,
  animationVariantHeroPara,
  animationVariantHeroButton,
  animationVariantWireImage,
  animationVariantArrowBox,
  animationVariantHeroImg,
  animationVariantHeroTag,
  animationVariantHeroTagPara,
} from "./animation/HomeAnimation";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-3 justify-center py-14 px-20">
      <div className=" flex flex-col gap-7">
        <motion.h1
          variants={animationVariantHeroHeading}
          initial="initial"
          animate="animate"
          className=" text-stone-800 font-extrabold text-6xl font-roboto"
        >
          Precision Wiring Harness Solutions for Innovations.
        </motion.h1>
        <motion.p
          variants={animationVariantHeroPara}
          initial="initial"
          animate="animate"
          className=" text-stone-600"
        >
          where innovation meets precision in wiring solutions. With a
          commitment to excellence, we specialize in crafting reliable and
          tailored wiring harnesses for diverse applications
        </motion.p>
        <motion.div
          variants={animationVariantHeroButton}
          initial="initial"
          animate="animate"
        >
          <button className="group/button overflow-hidden relative border border-[#202020] rounded-md  bg-black py-2 px-4 text-white font-semibold">
            <div className="duration-300 group-hover/button:-translate-y-8 ">
              Contact
            </div>
            <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">
              Contact
            </div>
          </button>
        </motion.div>
      </div>
      <motion.div
        variants={animationVariantWireImage}
        initial="initial"
        animate="animate"
        className=" -mt-12 h-fit"
      >
        <img className=" h-[88%]" src={wireImg} alt="" />
      </motion.div>
      <div className=" flex flex-col justify-around">
        <div className=" flex justify-start -ml-16 mr-16 -mt-10">
          <motion.div
            variants={animationVariantArrowBox}
            initial="initial"
            animate="animate"
            className=" flex justify-start gap-2"
          >
            <button className=" z-10 relative bg-gray-100 text-stone-700 font-medium rounded-md text-sm p-4 border border-gray-400 hover:shadow-lg duration-300 cursor-pointer">
              Discover the art of seamless connectivity at SP Tech. We
              specialize in precision-engineered wiring harness solutions, where
              quality meets innovation. Elevate your projects with our
              craftsmanship, ensuring every connection is a testament to
              excellence.
              <div className="z-0 absolute -left-[6px] top-2 rotate-45 border-b border-l border-stone-400 w-3 h-3 bg-gray-100"></div>
            </button>
          </motion.div>
        </div>
        <div className=" flex flex-col justify-end gap-3">
          <motion.div
            variants={animationVariantHeroImg}
            initial="initial"
            animate="animate"
            className=" h-fit w-fit"
          >
            <img
              className=" w-80 h-36 rounded-lg shadow hover:grayscale overflow-hidden hover:blur-[0.6px] duration-500 cursor-pointer"
              src={working}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={animationVariantHeroTag}
            initial="initial"
            animate="animate"
            className=" flex items-center gap-2 py-1 px-4 font-semibold text-sm text-stone-700 bg-stone-200 border border-stone-200 rounded-xl w-fit hover:shadow duration-300 cursor-pointer"
          >
            <MdElectricBolt className=" " />
            <h2>Wiring Harness</h2>
          </motion.div>
          <motion.p
            variants={animationVariantHeroTagPara}
            initial="initial"
            animate="animate"
            className=" text-stone-600"
          >
            we weave reliability into every wire. Explore our range of
            precision-crafted wiring harness solutions, designed to fuel
            innovation and elevate your projects. Trust us for seamless
            connectivity that goes beyond expectations.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
