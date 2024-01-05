import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { api } from "../utils/api";
import axios from "axios";

export default function Popup({ id, openPopup, setOpenPopup, type }) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (type === "edit") {
      axios
        .get(`${import.meta.env.VITE_API_URL}/product/${id}`)
        .then((res) => {
          setProductName(res.data.productName);
          setProductDescription(res.data.productDescription);
          setImage(res.data.productImage.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    convertToBase64(file);
  };
  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
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
    if (type === "add") {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/product`, {
          productName,
          productDescription,
          productImage: image,
        })
        .then((res) => {
          console.log(res);
          console.log(productName, productDescription, image);
          handleClose();
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (type === "edit") {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/product/updateproduct/${id}`, {
          productName,
          productDescription,
          productImage: image,
        })
        .then((res) => {
          console.log(res);
          console.log(productName, productDescription, image);
          handleClose();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <React.Fragment>
      <Dialog open={openPopup} onClose={handleClose}>
        <div className=" flex flex-col gap-4 bg-white py-6 md:py-10 px-5 md:px-10 rounded w-[450px] md:w-[500px]">
          <h1 className=" text-2xl md:text-3xl font-noto-sans text-gray font-semibold">
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
            <div className=" mt-2">
              <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
                <div className="text-center">
                  {image === "" || image == null ? (
                    "No Image"
                  ) : (
                    <img
                      className="mx-auto h-24 w-44 object-cover"
                      src={image}
                      alt="Blog"
                    />
                  )}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/"
                        className="sr-only"
                        onChange={handleImage}
                        required
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-2 items-center justify-center mt-2">
              <button
                onClick={handleClose}
                className="border border-dark-blue bg-white text-dark-blue py-2 px-2 rounded hover:opacity-80 duration-300 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="border border-dark-blue bg-dark-blue text-white py-2 px-2 rounded hover:opacity-80 duration-300 font-medium"
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
