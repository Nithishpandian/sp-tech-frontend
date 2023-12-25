import React from "react";
import workingImg from "../../assets/images/common/working.jpeg";
import { motion } from "framer-motion";
import {
  contactAnimationVariantLeft,
  contactAnimationVariantRight,
} from "./animation/ContactAnimation";

const ContactInfo = () => {
  return (
    <div className=" grid lg:grid-cols-2 lg:gap-8 xl:gap-12 pt-5 sm:pt-16 pb-12 sm:pb-20 px-6 xs:px-10 sm:px-20 md:px-24 lg:px-12 xl:px-40 2xl:px-44 ">
      <motion.div
        variants={contactAnimationVariantLeft}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" p-4 xs:p-5 xl:p-4 2xl:p-5 flex flex-col gap-4 sm:gap-10"
      >
        <div>
          <h1 className=" text-gray text-3xl sm:text-5xl font-krona-one font-bold">
            CONTACT US
          </h1>
        </div>
        <div className=" grid min-[450px]:grid-cols-2 justify-between gap-4 min-[450px]:gap-2">
          <div>
            <h1 className=" font-krona-one text-gray text-lg 2xl:text-xl">
              CONTACTS
            </h1>
            <div className=" flex flex-col mt-1 xl:mt-2">
              <p className=" font-dm-sans font-light text-stone-500 text-sm xl:text-base">
                +91 8189894433
              </p>
              <p className=" font-dm-sans font-light text-stone-500 text-sm xl:text-base">
                sptech.cbe@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-krona-one text-gray text-lg 2xl:text-xl">
              ADDRESS
            </h1>
            <div className=" flex flex-col mt-1 xl:mt-2">
              <p className=" font-dm-sans font-light text-stone-500 text-sm xl:text-base">
                1st Floor, S.F. No. 461/2 CRPF Road, Thoppampatti post,
                Coimbatore, Tamil Nadu, 641017
              </p>
            </div>
          </div>
        </div>
        <div className=" h-full w-full flex justify-end items-end">
          <div className=" h-fit py-1.5 min-[450px]:py-2 px-10 min-[450px]:px-14 bg-gray rounded-sm"></div>
        </div>
      </motion.div>
      <motion.div
        variants={contactAnimationVariantRight}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=""
      >
        <img
          className=" opacity-80 rounded h-80 w-full object-cover"
          src={workingImg}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default ContactInfo;
