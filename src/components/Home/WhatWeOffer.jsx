import React from "react";
import decorationWhiteImg from "../../assets/icons/decoration-white.svg";
import DecorationHome from "./DecorationHome";
import { motion } from "framer-motion";
import { animationVariantOffer } from "./animation/HomeAnimation";

const WhatWeOffer = () => {
  return (
    <div className=" grid lg:grid-cols-5 gap-10 sm:gap-14 lg:gap-16 xl:gap-24 2xl:gap-32 3xl:gap-36 justify-between bg-gray py-28 px-10 sm:px-14 md:px-32 lg:px-24 xl:px-48 2xl:px-56 3xl:px-60">
      <motion.div
        variants={animationVariantOffer}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" lg:col-span-2 grid lg:grid-rows-2"
      >
        <h1 className=" text-stone-200 text-4xl sm:text-5xl font-krona-one font-semibold">
          WHAT WE OFFER
        </h1>
        <div className=" hidden lg:flex justify-start items-end">
          <div className=" h-fit py-2 px-14 bg-stone-300 rounded-sm"></div>
        </div>
      </motion.div>
      <div className=" lg:col-span-3 flex flex-col gap-8 sm:gap-5">
        <motion.div
          variants={animationVariantOffer}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
        >
          <img
            className=" w-10 sm:hidden flex mb-2"
            src={decorationWhiteImg}
            alt=""
          />
          <DecorationHome
            title={"EXPERIENCE TEAMS"}
            content={`We're on a mission to change the way the housing market works.
            Rather than offering one service or another, we want to combine as
            many and make our clients' lives easy and carefree. Our goal is to
            match.`}
          />
        </motion.div>
        <motion.div
          variants={animationVariantOffer}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
        >
          <img
            className=" w-10 sm:hidden flex mb-2"
            src={decorationWhiteImg}
            alt=""
          />
          <DecorationHome
            title={"QUALITY TO DIE FOR"}
            content={`We're on a mission to change the way the housing market works.
          Rather than offering one service or another, we want to combine as
          many and make our clients' lives easy and carefree. Our goal is to
          match.`}
          />
        </motion.div>
        <motion.div
          variants={animationVariantOffer}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
        >
          <img
            className=" w-10 sm:hidden flex mb-2"
            src={decorationWhiteImg}
            alt=""
          />
          <DecorationHome
            title={"VISIONARY OF THE FUTURE"}
            content={`We're on a mission to change the way the housing market works.
            Rather than offering one service or another, we want to combine as
            many and make our clients' lives easy and carefree. Our goal is to
            match.`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
