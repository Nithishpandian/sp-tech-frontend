import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-20 px-6 sm:px-36 md:px-7 lg:px-16 xl:px-36 2xl:px-40 3xl:px-44 py-16">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductContainer;
