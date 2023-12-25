import React from "react";
import { MdElectricBolt } from "react-icons/md";
import wireImg from "../../assets/images/common/wire.png";
import working from "../../assets/images/common/working.jpeg";
import { motion } from "framer-motion";
import {
  animationVariantHeroHeading,
  animationVariantWireImage,
  animationVariantArrowBox,
  animationVariantHeroCard,
} from "./animation/HomeAnimation";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center md:justify-between lg:justify-center py-10 sm:py-14 px-20 md:px-10 lg:px-20 2xl:px-40 3xl:px-52">
      <motion.div
        variants={animationVariantHeroHeading}
        initial="initial"
        animate="animate"
        className=" flex flex-col gap-4 sm:gap-7 md:mt-10"
      >
        <h1 className=" text-stone-800 font-extrabold text-4xl sm:text-5xl md:text-4xl lg:text-5xl leading-tight font-krona-one">
          Precision Wiring Harness Solutions for Innovations.
        </h1>
        <p className=" text-stone-600 font-noto-sans text-sm xs:text-base">
          Where innovation meets precision in wiring solutions. With a
          commitment to excellence, we specialize in crafting reliable and
          tailored wiring harnesses for diverse applications
        </p>
        <div>
          <button
            onClick={() => navigate("/contact")}
            className="group/button overflow-hidden relative border border-[#202020] rounded-md  bg-black py-2 px-4 text-white font-semibold font-noto-sans"
          >
            <div className="duration-300 group-hover/button:-translate-y-8 ">
              Contact
            </div>
            <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">
              Contact
            </div>
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={animationVariantWireImage}
        initial="initial"
        animate="animate"
        className=" xl:-mt-12 h-fit hidden md:flex justify-center items-center"
      >
        <img
          className=" w-72 lg:w-[65%] xl:w-[75%] 2xl:h-[88%]"
          src={wireImg}
          alt=""
        />
      </motion.div>
      <div className=" hidden xl:flex flex-col justify-around">
        <div className=" flex justify-start -ml-16 mr-16 -mt-10">
          <motion.div
            variants={animationVariantArrowBox}
            initial="initial"
            animate="animate"
            className=" flex justify-start gap-2"
          >
            <button className=" z-10 relative bg-[#f6f6f6] text-stone-700 font-medium font-noto-sans rounded-md text-sm p-4 border border-stone-400 hover:shadow-lg duration-300 cursor-pointer">
              Discover the art of seamless connectivity at SP Tech. We
              specialize in precision-engineered wiring harness solutions, where
              quality meets innovation. Elevate your projects with our
              craftsmanship, ensuring every connection is a testament to
              excellence.
              <div className="z-20 bg-[#f6f6f6] absolute -left-[6px] top-2 rotate-45 border-b border-l border-stone-500 w-3 h-3 bg-gray-100"></div>
            </button>
          </motion.div>
        </div>
        <motion.div
          variants={animationVariantHeroCard}
          initial="initial"
          animate="animate"
          className=" flex flex-col justify-end gap-3"
        >
          <div className=" h-fit overflow-hidden w-96 rounded-lg">
            <img
              className=" w-96 h-36 rounded-lg shadow hover:scale-110 duration-500 object-cover cursor-pointer"
              src={working}
              alt=""
            />
          </div>
          <div className=" flex items-center gap-2 py-1 px-4 font-semibold text-sm text-stone-700 bg-stone-200 border border-stone-200 rounded-xl w-fit hover:shadow duration-300 cursor-pointer">
            <MdElectricBolt className=" " />
            <h2>Wiring Harness</h2>
          </div>
          <p className=" text-stone-600 font-noto-sans">
            We weave reliability into every wire. Explore our range of
            precision-crafted wiring harness solutions, designed to fuel
            innovation and elevate your projects. Trust us for seamless
            connectivity that goes beyond expectations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
