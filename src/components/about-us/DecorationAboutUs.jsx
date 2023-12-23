import React from "react";
import decorationWhiteImg from "../../assets/icons/decoration-white.svg";

const DecorationAboutUs = ({ content }) => {
  return (
    <div className=" flex items-center gap-5 text-sm sm:text-base">
      <img className=" hidden sm:flex" src={decorationWhiteImg} alt="" />
      <p className="text-stone-300 font-jost text-sm 2xl:text-base font-light">
        {content}
      </p>
    </div>
  );
};

export default DecorationAboutUs;
