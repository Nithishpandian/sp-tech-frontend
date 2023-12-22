import React from "react";
import { ProductsHome } from "./ProductsHome";
import productImg from "../../assets/images/products/ceramic-bulb-holder.jpeg";

const FeaturedProducts = () => {
  return (
    <div className=" py-12 px-20">
      <h1 className=" font-noto-sans font-bold text-4xl text-stone-800">
        Featured Products
      </h1>
      <div className=" flex items-center flex-wrap gap-5 py-6 pl-6">
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
        <ProductsHome image={productImg} name={"Ceramic bulb"} />
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
