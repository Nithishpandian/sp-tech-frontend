import React from "react";
import { ProductsHome } from "./ProductsHome";
import productImg from "../../assets/images/products/ceramic-bulb-holder.jpeg";

const FeaturedProducts = () => {
  return (
    <div className=" py-12 px-10 xs:px-8 sm:px-8 md:px-14 lg:px-8 xl:px-20 2xl:px-36 3xl:px-44">
      <h1 className=" font-noto-sans font-bold text-3xl xs:text-4xl text-stone-800">
        Featured Products
      </h1>
      <div className=" grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 items-center flex-wrap gap-3 sm:gap-4 md:gap-8 py-6 sm:px-8 lg:px-4 xl:px-10 2xl:px-14">
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
