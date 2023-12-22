import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <div className="px-32 py-10 flex flex-col gap-1">
      <div>
        <h1 className=" text-gray font-semibold font-noto-sans text-4xl">Products</h1>
      </div>
      <div className=" grid grid-cols-3 gap-8 items-center justify-center px-8 py-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductContainer;
