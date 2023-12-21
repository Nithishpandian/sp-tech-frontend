import React from "react";
import DecorationHome from "./DecorationHome";

const WhatWeOffer = () => {
  return (
    <div className=" grid grid-cols-5 gap-24 justify-between bg-gray py-28 pl-52 pr-56">
      <div className=" col-span-2 grid grid-rows-2">
        <h1 className=" text-stone-200 text-5xl font-krona-one font-semibold">
          WHAT WE OFFER
        </h1>
        <div className=" flex justify-start items-end">
          <div className=" h-fit py-2 px-14 bg-stone-300 rounded-sm"></div>
        </div>
      </div>
      <div className=" col-span-3 flex flex-col gap-5">
        <DecorationHome
          title={"EXPERIENCE TEAMS"}
          content={`We're on a mission to change the way the housing market works.
            Rather than offering one service or another, we want to combine as
            many and make our clients' lives easy and carefree. Our goal is to
            match.`}
        />
        <DecorationHome
          title={"QUALITY TO DIE FOR"}
          content={`We're on a mission to change the way the housing market works.
            Rather than offering one service or another, we want to combine as
            many and make our clients' lives easy and carefree. Our goal is to
            match.`}
        />
        <DecorationHome
          title={"VISIONARY OF THE FUTURE"}
          content={`We're on a mission to change the way the housing market works.
            Rather than offering one service or another, we want to combine as
            many and make our clients' lives easy and carefree. Our goal is to
            match.`}
        />
      </div>
    </div>
  );
};

export default WhatWeOffer;
