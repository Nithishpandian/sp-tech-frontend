import React from "react";
import bulbImg from "../../assets/images/ceramic-bulb-holder.png";

const ProductCard = () => {
  return (
    <div className=" border border-stone-200 rounded-lg shadow-md bg-[#fafafa]">
      <div className=" h-fit flex items-center justify-center overflow-hidden">
        <img className=" w-full h-64 bg-[#f5f5f5] py-4 px-2 rounded-md opacity-90 hover:scale-110 hover:grayscale hover:blur-[0.9px] duration-300" src={bulbImg} alt="" />
      </div>
      <div className=" flex flex-col gap-2 py-6 px-4">
        <h1 className=" font-noto-sans font-semibold text-black text-xl">Ceramic bulb holder</h1>
        <p className=" text-sm text-stone-600 font-roboto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nobis. Vitae reprehenderit id nesciunt dolorem eos enim quibusdam ab dolorum odit quaerat doloremque iste delectus sapiente saepe sunt ducimus dicta, beatae magni tempore. Assumenda minus animi, omnis tempora repellendus veniam!</p>
      </div>
    </div>
  );
};

export default ProductCard;
