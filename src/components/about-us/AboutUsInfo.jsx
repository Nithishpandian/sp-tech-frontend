import React from "react";
import aboutImg from "../../assets/images/about-us.avif";
import decorationImg from "../../assets/icons/decoration.svg";
import decorationWhiteImg from "../../assets/icons/decoration-white.svg";

const AboutUsInfo = () => {
  return (
    <div>
      <div className=" grid grid-cols-2 pt-16 pb-20 px-40 ">
        <div className=" relative w-fit h-fit">
          <img className=" opacity-90" src={aboutImg} alt="" />
          <img
            className=" absolute top-6 -left-24"
            src={decorationImg}
            alt=""
          />
        </div>
        <div className=" p-10 flex flex-col gap-10">
          <h1 className=" text-[#2B2C32] text-5xl font-krona-one font-bold">
            About Us
          </h1>
          <div className=" flex flex-col gap-3 text-stone-700 text-sm font-light">
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
            <div className=" h-fit py-2 px-14 bg-[#2B2C32] rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-36 justify-between bg-[#2B2C32] py-28 px-48">
        <div className=" flex flex-col gap-12">
          <h1 className=" text-stone-200 text-5xl font-krona-one font-bold">
            OUR MISSION
          </h1>
          <div className=" flex items-center gap-5">
            <img src={decorationWhiteImg} alt="" />
            <p className="text-stone-300 font-noto-sans text-sm font-light">
              We're on a mission to change the way the housing market works.
              Rather than offering one service or another, we want to combine as
              many and make our clients' lives easy and carefree. Our goal is to
              match our clients with the perfect properties that fit their
              tastes, needs, and budgets.
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-12">
          <h1 className=" text-stone-200 text-5xl font-krona-one font-bold">
            OUR VISION
          </h1>
          <div className=" flex items-center gap-5">
            <img src={decorationWhiteImg} alt="" />
            <p className="text-stone-300 font-noto-sans text-sm font-light">
              We're on a mission to change the way the housing market works.
              Rather than offering one service or another, we want to combine as
              many and make our clients' lives easy and carefree. Our goal is to
              match our clients with the perfect properties that fit their
              tastes, needs, and budgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
