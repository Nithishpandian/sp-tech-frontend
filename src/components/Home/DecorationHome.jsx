import React from "react";
import decorationWhiteImg from "../../assets/icons/decoration-white.svg";

const DecorationHome = ({ title, content }) => {
  return (
    <div className=" flex items-center gap-7">
      <img src={decorationWhiteImg} alt="" />
      <div className=" flex flex-col gap-2">
        <h2 className=" text-stone-200 text-xl font-krona-one font-medium">
          {title}
        </h2>
        <p className="text-stone-300 font-jost text-sm font-light">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DecorationHome;
