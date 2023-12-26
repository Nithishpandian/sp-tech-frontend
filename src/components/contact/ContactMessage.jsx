import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  contactAnimationVariantLeft,
  contactAnimationVariantRight,
} from "./animation/ContactAnimation";
import axios from "axios"

const ContactMessage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/contact`, {
      firstName,
      lastName,
      emailId,
      message
    })
      .then(res=>{
        console.log(res);
        setFirstName("")
        setLastName("")
        setEmailId("")
        setMessage("")
      })
      .catch(err=>{
        console.error(err);
      })
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 bg-stone-100 py-14 sm:py-20 px-8 min-[450px]:px-20 sm:px-24 md:px-44 lg:px-36 xl:px-52 2xl:px-64 ">
      <motion.div
        variants={contactAnimationVariantLeft}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" flex flex-col gap-3 pr-12 pb-1"
      >
        <h1 className=" font-krona-one text-4xl text-dark-blue">
          SEND US A MESSAGE
        </h1>
        <p className="font-dm-sans 2xl:text-lg text-stone-500 ">
          If you're interested in hearing more about the way we work, have a
          business proposal, or are interested in making a purchase, we'd love
          to hear from you.{" "}
        </p>
        <div className=" h-full w-full flex justify-start items-end">
          <div className=" h-fit py-1.5 sm:py-2 px-10 sm:px-14 bg-dark-blue rounded-sm"></div>
        </div>
      </motion.div>
      <motion.form
        onSubmit={onSubmit}
        variants={contactAnimationVariantRight}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
        className=" flex flex-col gap-5 font-jost text-stone-600 xl:text-lg 2xl:text-xl"
      >
        <div className=" flex flex-col">
          <label htmlFor="">Name *</label>
          <input
            type="text"
            placeholder="Your name"
            className=" px-3 py-3 focus:outline-none"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Last name</label>
          <input
            type="text"
            placeholder="Your last name"
            className=" px-3 py-3 focus:outline-none "
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Your email *</label>
          <input
            type="email"
            placeholder="Your email address"
            className=" px-3 py-3 focus:outline-none "
            onChange={(e) => setEmailId(e.target.value)}
            value={emailId}
            required
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Message *</label>
          <textarea
            rows="3"
            placeholder="Enter your message"
            className=" px-3 py-3 focus:outline-none"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        <div className=" flex items-center justify-end">
          <button
            type="submit"
            className=" bg-dark-blue hover:bg-primary duration-300 py-2 px-10 font-krona-one text-[#fafafa] text-sm"
          >
            SUBMIT
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactMessage;
