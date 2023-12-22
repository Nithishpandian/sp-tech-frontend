import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <div className=" flex flex-col gap-20 px-40 py-16">
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
