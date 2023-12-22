import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <div className="px-32 py-10 flex flex-col gap-1">
      <div>
        <h1 className=" text-gray text-4xl font-krona-one font-bold">
          Products
        </h1>
      </div>
      <div className=" flex flex-col gap-14 px-8 py-10">
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
