import React from "react";
import bulbImg from "../../assets/images/products/ceramic-bulb-holder.jpeg";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-12">
      <div className="">
        <img className=" w-[503px] h-[368px] rounded" src={bulbImg} alt="" />
      </div>
      <div className="flex flex-col items-start gap-2 pr-32">
        <h1 className=" text-[#181818] text-7xl font-hammersmith-one mb-2">01</h1>
        <h1 className=" text-black text-3xl font-hammersmith-one">Ceramic Bulb Holder</h1>
        <p className=" text-[#353535] font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis.</p>
      </div>
    </div>
  );
};

export default ProductCard;
