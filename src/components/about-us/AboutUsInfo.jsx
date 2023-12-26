import React from "react";
import aboutImg from "../../assets/images/about-us/about-us.avif";
import decorationImg from "../../assets/icons/decoration.svg";
import DecorationAboutUs from "./DecorationAboutUs";
import { motion } from "framer-motion";
import {
  aboutAnimationVariantLeft,
  aboutAnimationVariantRight,
} from "./animation/AboutAnimation";

const AboutUsInfo = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center lg:gap-1 pt-5 sm:pt-16 pb-12 sm:pb-20 px-5 sm:px-20 md:px-36 lg:px-12 xl:px-40 2xl:px-44 ">
        <motion.div
          variants={aboutAnimationVariantLeft}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          className=" order-2 lg:order-1 flex justify-center items-center"
        >
          <div className="relative w-fit h-fit">
            <img className=" opacity-90" src={aboutImg} alt="" />
            <img
              className=" absolute top-6 -left-10 sm:-left-12 max-[500px]:w-[50%]"
              src={decorationImg}
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          variants={aboutAnimationVariantRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          className=" order-1 lg:order-2 p-4 sm:p-6 md:py-7 md:px-4 lg:p-8 xl:p-10 flex flex-col gap-5 lg:gap-10"
        >
          <h1 className=" text-dark-blue text-4xl sm:text-5xl font-krona-one font-bold">
            About Us
          </h1>
          <div className=" flex flex-col gap-3 text-stone-700 text-xs sm:text-sm 2xl:text-base font-light">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              nulla nihil. Vel ut rerum dignissimos, officia neque illum eaque
              alias, et sit eveniet dolorum ipsum vero tempore porro non
              repellendus. Architecto tenetur magni doloremque, animi voluptatem
              earum iure iste! Illo vitae accusamus dignissimos laudantium,
              eaque earum quisquam officiis saepe, rem deleniti maiores nulla
              eos velit cumque dolor ratione neque ea? Optio, doloribus non
              omnis soluta id aspernatur culpa numquam nobis beatae, unde
              dignissimos rerum iusto nemo sint neque laudantium hic
              reprehenderit. Quam at quasi voluptatibus nobis, quis minima fugit
              tempore eveniet assumenda consequatur, quas molestiae facere harum
              culpa expedita! Est.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi
              quod, nobis aspernatur quia nam id optio et harum quisquam?
              Quaerat a vel dicta temporibus, error deserunt rerum. Illo amet
              perferendis aliquid quas officiis iure! Iste voluptates nesciunt
              magni suscipit ducimus nulla obcaecati aut cupiditate magnam
              reprehenderit sequi accusantium totam, consectetur earum sint
              aliquid ullam quidem voluptatem voluptatibus, ipsum animi!
            </p>
          </div>
          <div className=" h-full w-full flex justify-end items-end">
            <div className=" h-fit py-1.5 min-[450px]:py-2 px-10 min-[450px]:px-14 bg-[#196684] rounded-sm"></div>
          </div>
        </motion.div>
      </div>
      <div className=" grid lg:grid-cols-2 gap-12 md:gap-16 xl:gap-28 2xl:gap-36 justify-between bg-stone-100 py-28 px-8 sm:px-24 md:px-44 lg:px-20 xl:px-36 2xl:px-48">
        <motion.div
          variants={aboutAnimationVariantLeft}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          className=" flex flex-col gap-4 lg:gap-9 xl:gap-12"
        >
          <img
            className=" sm:hidden flex w-10"
            src={decorationImg}
            alt=""
          />
          <h1 className=" text-dark-blue text-3xl sm:text-4xl xl:text-5xl font-krona-one font-bold">
            OUR MISSION
          </h1>
          <DecorationAboutUs
            content={`We're on a mission to change the way the housing market works. Rather
            than offering one service or another, we want to combine as many and
            make our clients' lives easy and carefree. Our goal is to match our
            clients with the perfect properties that fit their tastes, needs, and
            budgets.`}
          />
        </motion.div>
        <motion.div
          variants={aboutAnimationVariantRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          className=" flex flex-col gap-4 lg:gap-9 xl:gap-12"
        >
          <img
            className=" sm:hidden flex w-10"
            src={decorationImg}
            alt=""
          />
          <h1 className=" text-dark-blue text-3xl sm:text-4xl xl:text-5xl font-krona-one font-bold">
            OUR VISION
          </h1>
          <DecorationAboutUs
            content={`We're on a mission to change the way the housing market works. Rather
            than offering one service or another, we want to combine as many and
            make our clients' lives easy and carefree. Our goal is to match our
            clients with the perfect properties that fit their tastes, needs, and
            budgets.`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
