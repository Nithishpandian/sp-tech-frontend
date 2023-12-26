import React, { useEffect, useState } from "react";
import { ProductsHome } from "./ProductsHome";
import { motion } from "framer-motion";
import {
  animationVariantHeading,
  animationVariantProducts,
} from "./animation/HomeAnimation";
import axios from "axios";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/product/getproducts`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" py-12 px-10 xs:px-8 sm:px-8 md:px-14 lg:px-8 xl:px-20 2xl:px-36 3xl:px-44">
      <motion.h1
        variants={animationVariantHeading}
        initial="initial"
        animate="animate"
        className=" font-noto-sans font-bold text-3xl xs:text-4xl text-stone-800"
      >
        Featured Products
      </motion.h1>
      <div className=" grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 items-center flex-wrap gap-3 sm:gap-4 md:gap-8 py-6 sm:px-8 lg:px-4 xl:px-10 2xl:px-14">
        {products.length > 0 &&
          products.map(
            (product, index) =>
              index < 6 && (
                <motion.div
                  key={index}
                  variants={animationVariantProducts}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  <ProductsHome
                    key={index}
                    image={`${import.meta.env.VITE_API_IMAGE_URL}${
                      product.productImage
                    }`}
                    name={product.productName}
                  />
                </motion.div>
              )
          )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
