import React from "react";
import decorationImg from "../../assets/icons/decoration.svg";

const DecorationAboutUs = ({ content }) => {
  return (
    <div className=" flex items-center gap-5 text-sm sm:text-base">
      <img className=" hidden sm:flex" src={decorationImg} alt="" />
      <p className="text-stone-500 font-jost text-sm 2xl:text-base font-light">
        {content}
      </p>
    </div>
  );
};

export default DecorationAboutUs;
