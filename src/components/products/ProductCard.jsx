import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import axios from "axios";
import Popup from "../../layout/Popup";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/features/productService";

const ProductCard = ({ id, image, number, name, description }) => {
  const dispatch = useDispatch();

  const [token, setToken] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(()=>{
    setToken(sessionStorage.getItem("adminToken"))
  },[])

  const handleEditProduct = () => {
    setOpenPopup(true);
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="grid md:grid-cols-2 items-center gap-6 md:gap-7 lg:gap-12 w-80 sm:w-auto">
      <div className=" xl:flex justify-center items-center ">
        <img
          className=" w-[328px] h-[246px] lg:w-[503px] lg:h-[350px] opacity-95 rounded"
          src={image}
          alt=""
        />
      </div>
      <div className="relative">
        <div className="flex flex-col items-start gap-1 lg:gap-2 lg:pr-12 xl:pr-28 2xl:pr-32">
          <h1 className=" text-primary text-6xl sm:text-7xl font-hammersmith-one gap-1 lg:mb-2">
            {number}
          </h1>
          <h1 className=" text-gray text-3xl font-hammersmith-one">{name}</h1>
          {/* <p className=" text-primary font-noto-sans text-xs sm:text-sm md:text-xs lg:text-sm font-semibold mb-1 -mt-2">{application}</p> */}
          <p className=" text-[#353535] font-roboto text-sm sm:text-base md:text-sm lg:text-base">
            {description}
          </p>
        </div>
        <div
          className={`${
            token === "" || token === null ? "hidden" : "flex"
          } absolute right-10 top-3 w-fit h-fit cursor-pointer items-center justify-center gap-4`}
        >
          <MdEditSquare
            onClick={handleEditProduct}
            className=" text-3xl text-stone-500 hover:text-stone-400 duration-300"
          />
          <MdDelete
            onClick={handleDeleteProduct}
            className=" text-3xl text-stone-500 hover:text-stone-400 duration-300"
          />
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            type={"edit"}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
