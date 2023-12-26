import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { api } from "../utils/api";
import axios from "axios";

export default function Popup({ openPopup, setOpenPopup }) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [image, setImage] = useState("");
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(image);
  };

  const handleClose = () => {
    setOpenPopup(false);
    setProductName();
    setProductDescription();
    setImage("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(productName, productDescription, image);
    await axios.post(`${import.meta.env.VITE_API_URL}/product`, {
        productName,
        productDescription,
        productImage: image,
      },{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        console.log(productName, productDescription, image);
        handleClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <React.Fragment>
      <Dialog open={openPopup} onClose={handleClose}>
        <div className=" flex flex-col gap-4 bg-white py-6 px-5 rounded w-[450px]">
          <h1 className=" text-2xl font-noto-sans text-gray font-semibold">
            Add a Product
          </h1>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-2 font-noto-sans"
            encType="multipart/form-data"
          >
            <input
              className="border border-stone-400 py-2 px-4 rounded text-stone-700 focus:outline-none w-full"
              type="text"
              placeholder="Product name"
              name="productName"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
            <textarea
              className="border border-stone-400 py-2 px-4 rounded text-stone-700 focus:outline-none w-full"
              placeholder="Product description"
              name="productDescription"
              id=""
              cols="10"
              rows="3"
              onChange={(e) => setProductDescription(e.target.value)}
              value={productDescription}
            ></textarea>
            <div className="">
              <div className="flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <input
                  id="image"
                  name="productImage"
                  type="file"
                  onChange={handleImage}
                  required
                />
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-2 items-center justify-center mt-2">
              <button
                onClick={handleClose}
                className="border border-stone-800 bg-white text-stone-800 py-2 px-2 rounded hover:opacity-80 duration-300 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="border border-stone-800 bg-stone-800 text-white py-2 px-2 rounded hover:opacity-80 duration-300 font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
