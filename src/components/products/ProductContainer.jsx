import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { productAnimationVariant } from "./animation/ProductAnimation";
import Popup from "../../layout/Popup";
import { adminToken } from "../../utils/api";
import axios from "axios";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const handleAddProduct = () => {
    setOpenPopup(true);
  };
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
  const [token, setToken] = useState(adminToken);

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className=" flex flex-col justify-center items-center gap-20 px-6 sm:px-36 md:px-7 lg:px-16 xl:px-36 2xl:px-40 3xl:px-44 py-16">
      {products.length > 0 ? (
        products.map((product, index) => {
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
                id={product._id}
                image={product.productImage.url}
                number={`0${index + 1}`}
                name={product.productName}
                description={product.productDescription}
              />
            </motion.div>
          );
        })
      ) : (
        <div className=" my-36 py-10 px-2 text-xl text-gray font-noto-sans">
          No Products available
        </div>
      )}
      <div
        className={` ${
          token === "" || token === null ? "hidden" : "flex"
        } my-12 items-center justify-end w-full px-24`}
      >
        <button
          onClick={handleAddProduct}
          className=" bg-primary text-white py-2 px-4 rounded font-noto-sans font-medium hover:opacity-90 duration-300"
        >
          Add Product
        </button>
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      </div>
    </div>
  );
};

export default ProductContainer;
