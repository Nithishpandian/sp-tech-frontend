import React from "react";
import decorationImg from "../../assets/icons/decoration.svg";
import DecorationHome from "./DecorationHome";
import { motion } from "framer-motion";
import { animationVariantOffer } from "./animation/HomeAnimation";

const WhatWeOffer = () => {
  return (
    <div className=" grid lg:grid-cols-5 gap-10 sm:gap-14 lg:gap-16 xl:gap-24 2xl:gap-32 3xl:gap-36 justify-between bg-[#f0f0f0] py-24 px-10 sm:px-14 md:px-32 lg:px-24 xl:px-48 2xl:px-56 3xl:px-60">
      <motion.div
        variants={animationVariantOffer}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" lg:col-span-2 grid lg:grid-rows-2"
      >
        <h1 className=" text-dark-blue text-4xl sm:text-5xl font-krona-one font-semibold">
          WHAT WE OFFER
        </h1>
        <div className=" hidden lg:flex justify-start items-end">
          <div className=" h-fit py-2 px-14 bg-dark-blue rounded-sm"></div>
        </div>
      </motion.div>
      <div className=" lg:col-span-3 flex flex-col gap-10 sm:gap-5">
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
            src={decorationImg}
            alt=""
          />
          <DecorationHome
            title={"PREMIUM QUALITY"}
            content={`We pride ourselves on delivering premium-quality services that exceed industry standards. Our team is dedicated to providing top-notch solutions that not only meet but exceed our clients' expectations. From the materials we use to the expertise we bring, quality is at the forefront of everything we do.`}
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
            src={decorationImg}
            alt=""
          />
          <DecorationHome
            title={"THOROUGH TESTING"}
            content={`Ensuring the reliability and functionality of our solutions is paramount. We conduct thorough testing throughout every stage of development to identify and address any potential issues before they arise. Our rigorous testing protocols guarantee that our products and services are robust, reliable, and ready to meet the demands of our clients.`}
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
            src={decorationImg}
            alt=""
          />
          <DecorationHome
            title={"COST-EFFICIENT SOLUTIONS"}
            content={`While we prioritize quality, we also understand the importance of cost-effectiveness. Our solutions are designed to deliver maximum value without breaking the bank. By leveraging innovative technologies, streamlined processes, and strategic partnerships, we offer cost-efficient solutions that help our clients achieve their goals within their budget constraints.`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
