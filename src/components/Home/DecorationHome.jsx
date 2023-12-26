import React from "react";
import decorationImg from "../../assets/icons/decoration.svg";

const DecorationHome = ({ title, content }) => {
  return (
    <div className=" flex items-start gap-7">
      <img className=" hidden sm:flex" src={decorationImg} alt="" />
      <div className=" flex flex-col gap-2">
        <h2 className=" text-dark-blue text-xl font-krona-one font-medium">
          {title}
        </h2>
        <p className="text-stone-500 font-jost text-sm 2xl:text-lg font-light">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DecorationHome;
