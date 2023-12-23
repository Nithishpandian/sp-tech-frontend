import React, { useState } from "react";
import bulbImg from "../../assets/images/products/ceramic-bulb-holder.jpeg";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { productAnimationVariant } from "./animation/ProductAnimation";

const ProductContainer = () => {
  const [products, setProducts] = useState(["01", "02", "03", "04", "05", "06"]);
  return (
    <div className=" flex flex-col justify-center items-center gap-20 px-6 sm:px-36 md:px-7 lg:px-16 xl:px-36 2xl:px-40 3xl:px-44 py-16">
      {products.map((product, index) => {
        return (
          <motion.div
            key={index}
            variants={productAnimationVariant}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
          >
            <ProductCard
              image={bulbImg}
              number={product}
              name={"Ceramic bulb holder"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis."
              }
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductContainer;
