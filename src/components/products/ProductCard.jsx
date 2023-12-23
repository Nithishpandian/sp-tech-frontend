import React from "react";
import bulbImg from "../../assets/images/products/ceramic-bulb-holder.jpeg";

const ProductCard = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-6 md:gap-7 lg:gap-12 w-80 sm:w-auto">
      <div className="">
        <img className=" w-[328px] h-[246px] lg:w-[503px] lg:h-[368px] rounded" src={bulbImg} alt="" />
      </div>
      <div className="flex flex-col items-start gap-1 lg:gap-2 lg:pr-12 xl:pr-28 2xl:pr-32">
        <h1 className=" text-[#181818] text-6xl sm:text-7xl font-hammersmith-one gap-1 lg:mb-2">01</h1>
        <h1 className=" text-black text-3xl font-hammersmith-one">Ceramic Bulb Holder</h1>
        <p className=" text-[#353535] font-roboto text-sm sm:text-base md:text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis.</p>
      </div>
    </div>
  );
};

export default ProductCard;
